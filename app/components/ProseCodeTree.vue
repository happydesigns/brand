<script lang="ts">
import theme from '#build/ui/prose/code-tree'
import { cloneVNode, defineComponent, h, onMounted, ref, watch, type PropType, type VNode } from 'vue'
import { useAppConfig } from '#imports'
import UCodeIcon from '@nuxt/ui/components/prose/CodeIcon.vue'
import UIcon from '@nuxt/ui/components/Icon.vue'

type CodeTreeFlatItem = {
  label: string
  icon?: string
  component?: VNode
}

type CodeTreeNode = CodeTreeFlatItem & {
  path: string
  children?: CodeTreeNode[]
}

type CodeTreeUi = Partial<Record<keyof typeof theme.slots, string>>

function cx(...classes: unknown[]): string {
  return classes.flat(Number.POSITIVE_INFINITY).filter(Boolean).join(' ')
}

function transformSlot(slot: VNode, index: number): CodeTreeFlatItem[] {
  if (typeof slot.type === 'symbol') {
    const children = Array.isArray(slot.children) ? slot.children : []
    return children.flatMap((child, childIndex) => transformSlot(child as VNode, childIndex))
  }

  return [{
    label: String(slot.props?.filename || slot.props?.label || index),
    icon: slot.props?.icon,
    component: slot
  }]
}

function buildTree(items: CodeTreeFlatItem[]): CodeTreeNode[] {
  const map = new Map<string, CodeTreeNode>()
  const root: CodeTreeNode[] = []

  items.forEach((item) => {
    const parts = item.label.split('/')
    let path = ''

    parts.forEach((part, index) => {
      path = path ? `${path}/${part}` : part

      if (!map.has(path)) {
        const node: CodeTreeNode = {
          label: part,
          path,
          ...(index < parts.length - 1 ? { children: [] } : {}),
          ...(index === parts.length - 1 ? item : {})
        }

        map.set(path, node)

        if (index === 0) {
          root.push(node)
        } else {
          map.get(parts.slice(0, index).join('/'))?.children?.push(node)
        }
      }
    })
  })

  const sort = (nodes: CodeTreeNode[]): CodeTreeNode[] => nodes
    .sort((a, b) => !!a.children === !!b.children ? a.label.localeCompare(b.label) : b.children ? 1 : -1)
    .map(node => ({ ...node, children: node.children && sort(node.children) }))

  return sort(root)
}

function getExpandedPaths(path: string | undefined, items: CodeTreeFlatItem[], expandAll: boolean | undefined) {
  if (expandAll) {
    const allPaths = new Set<string>()

    items.forEach((item) => {
      const parts = item.label.split('/')
      for (let index = 1; index < parts.length; index++) {
        allPaths.add(parts.slice(0, index).join('/'))
      }
    })

    return Array.from(allPaths)
  }

  if (!path) {
    return []
  }

  const parts = path.split('/')
  return parts.slice(0, -1).map((_, index) => parts.slice(0, index + 1).join('/'))
}

export default defineComponent({
  name: 'ProseCodeTree',
  inheritAttrs: false,
  props: {
    items: { type: Array as PropType<CodeTreeFlatItem[]>, required: false },
    modelValue: { type: String, required: false },
    defaultValue: { type: String, required: false },
    expandAll: { type: Boolean, required: false },
    class: { type: null, required: false },
    ui: { type: Object as PropType<CodeTreeUi>, required: false }
  },
  emits: ['update:modelValue'],
  setup(props, { attrs, emit, slots }) {
    const appConfig = useAppConfig()
    const selectedPath = ref(props.modelValue ?? props.defaultValue)
    const expanded = ref<string[]>([])
    let flatItems: CodeTreeFlatItem[] = []

    const slotClass = (slot: keyof typeof theme.slots, ...classes: unknown[]) => cx(theme.slots[slot], props.ui?.[slot], ...classes)
    const linkClass = (active: boolean) => cx(
      theme.slots.link,
      active ? theme.variants.active.true.link : theme.variants.active.false.link,
      props.ui?.link
    )

    const resolveFlatItems = () => props.items || slots.default?.().flatMap(transformSlot).filter(Boolean) || []

    const expandPath = (path: string | undefined) => {
      getExpandedPaths(path, flatItems, props.expandAll).forEach((expandedPath) => {
        if (!expanded.value.includes(expandedPath)) {
          expanded.value.push(expandedPath)
        }
      })
    }

    onMounted(() => {
      expanded.value = getExpandedPaths(selectedPath.value, flatItems, props.expandAll)
    })

    watch(() => props.modelValue, (value) => {
      if (value === selectedPath.value) {
        return
      }

      selectedPath.value = value
      expandPath(value)
    })

    watch(selectedPath, (value) => {
      if (value !== props.modelValue) {
        emit('update:modelValue', value)
      }
    })

    const renderTree = (items: CodeTreeNode[], level: number): VNode[] => items.map((item, index) => {
      const hasChildren = !!item.children?.length
      const isExpanded = expanded.value.includes(item.path)
      const isSelected = selectedPath.value === item.path

      return h(
        'li',
        {
          key: `${level}-${index}`,
          role: 'presentation',
          class: level > 1 ? slotClass('itemWithChildren') : slotClass('item')
        },
        [
          h(
            'button',
            {
              'type': 'button',
              'role': 'treeitem',
              'aria-expanded': hasChildren ? isExpanded : undefined,
              'aria-selected': !hasChildren ? isSelected : undefined,
              'class': linkClass(isSelected),
              'onClick': () => {
                if (hasChildren) {
                  expanded.value = isExpanded
                    ? expanded.value.filter(path => path !== item.path)
                    : [...expanded.value, item.path]
                } else {
                  selectedPath.value = item.path
                }
              }
            },
            [
              hasChildren
                ? h(UIcon, {
                    name: isExpanded ? appConfig.ui.icons.folderOpen : appConfig.ui.icons.folder,
                    class: slotClass('linkLeadingIcon')
                  })
                : h(UCodeIcon, {
                    filename: item.label,
                    class: slotClass('linkLeadingIcon')
                  }),
              h('span', { class: slotClass('linkLabel') }, item.label),
              hasChildren
                ? h('span', { class: slotClass('linkTrailing') }, [
                    h(UIcon, {
                      name: appConfig.ui.icons.chevronDown,
                      class: slotClass('linkTrailingIcon', isExpanded ? 'rotate-180' : '')
                    })
                  ])
                : null
            ]
          ),
          hasChildren && isExpanded
            ? h('ul', { role: 'group', class: slotClass('listWithChildren') }, renderTree(item.children || [], level + 1))
            : null
        ]
      )
    })

    return () => {
      flatItems = resolveFlatItems()
      const treeItems = buildTree(flatItems)
      const selectedItem = flatItems.find(item => item.label === selectedPath.value) || flatItems[0]

      return h('div', { ...attrs, class: slotClass('root', props.class) }, [
        h('ul', { role: 'tree', class: slotClass('list') }, renderTree(treeItems, 1)),
        h('div', { class: slotClass('content') }, selectedItem?.component ? [cloneVNode(selectedItem.component)] : [])
      ])
    }
  }
})
</script>
