<script setup lang="ts">
import wordmark from '~/assets/logos/happydesigns-wordmark.svg'
import wordmarkInverse from '~/assets/logos/happydesigns-wordmark-inverse.svg'
import symbol from '~/assets/logos/happydesigns-symbol.svg'
import symbolReduced from '~/assets/logos/happydesigns-symbol-reduced.svg'
import symbolReducedInverse from '~/assets/logos/happydesigns-symbol-reduced-inverse.svg'
import symbolReducedTile from '~/assets/logos/happydesigns-symbol-reduced-tile.svg'
import symbolReducedTileInverse from '~/assets/logos/happydesigns-symbol-reduced-tile-inverse.svg'
import lockup from '~/assets/logos/happydesigns-lockup.svg'
import lockupInverse from '~/assets/logos/happydesigns-lockup-inverse.svg'
import lockupReduced from '~/assets/logos/happydesigns-lockup-reduced.svg'
import lockupReducedInverse from '~/assets/logos/happydesigns-lockup-reduced-inverse.svg'
import signature from '~/assets/logos/happydesigns-signature.svg'
import signatureInverse from '~/assets/logos/happydesigns-signature-inverse.svg'

type LogoItem = {
  title: string
  variants: {
    label: string
    asset: string
    assetName: string
    surface: 'light' | 'dark' | 'object'
    previewClass?: string
  }[]
  role: string
  usage: string
  note?: string
  previewLayout?: string
}

const logoForms: LogoItem[] = [
  {
    title: 'Wordmark',
    variants: [
      {
        label: 'Light surface',
        asset: wordmark,
        assetName: 'happydesigns-wordmark.svg',
        surface: 'light',
        previewClass: 'h-auto w-full max-w-[28rem]'
      },
      {
        label: 'Inverse surface',
        asset: wordmarkInverse,
        assetName: 'happydesigns-wordmark-inverse.svg',
        surface: 'dark',
        previewClass: 'h-auto w-full max-w-[28rem]'
      }
    ],
    role: 'Default identity mark',
    usage: 'Headers, navigation, documentation, slim horizontal contexts'
  },
  {
    title: 'Symbol',
    variants: [
      {
        label: 'Light surface',
        asset: symbol,
        assetName: 'happydesigns-symbol.svg',
        surface: 'light',
        previewClass: 'size-32 sm:size-36'
      },
      {
        label: 'Dark surface',
        asset: symbol,
        assetName: 'happydesigns-symbol.svg',
        surface: 'dark',
        previewClass: 'size-32 sm:size-36'
      }
    ],
    role: 'Primary symbol',
    usage: 'Favicon, app icon, social/GitHub avatar, square contexts, brand moments',
    note: 'The full symbol keeps its original colors across light and dark mode. It behaves like a branded object, not a UI surface.'
  },
  {
    title: 'Reduced symbol',
    variants: [
      {
        label: 'Raw mark',
        asset: symbolReduced,
        assetName: 'happydesigns-symbol-reduced.svg',
        surface: 'light',
        previewClass: 'size-28'
      },
      {
        label: 'Raw inverse',
        asset: symbolReducedInverse,
        assetName: 'happydesigns-symbol-reduced-inverse.svg',
        surface: 'dark',
        previewClass: 'size-28'
      },
      {
        label: 'Tile',
        asset: symbolReducedTile,
        assetName: 'happydesigns-symbol-reduced-tile.svg',
        surface: 'light',
        previewClass: 'size-28'
      },
      {
        label: 'Tile inverse',
        asset: symbolReducedTileInverse,
        assetName: 'happydesigns-symbol-reduced-tile-inverse.svg',
        surface: 'dark',
        previewClass: 'size-28'
      }
    ],
    role: 'Utility / production symbol',
    usage: 'Pens, stamps, engraving, embroidery, compact UI marks, limited-color production',
    previewLayout: 'grid-cols-2'
  }
]

const lockups: LogoItem[] = [
  {
    title: 'Horizontal lockup',
    variants: [
      {
        label: 'Light surface',
        asset: lockup,
        assetName: 'happydesigns-lockup.svg',
        surface: 'light',
        previewClass: 'h-auto w-full max-w-[34rem]'
      },
      {
        label: 'Inverse surface',
        asset: lockupInverse,
        assetName: 'happydesigns-lockup-inverse.svg',
        surface: 'dark',
        previewClass: 'h-auto w-full max-w-[34rem]'
      }
    ],
    role: 'Standard symbol + wordmark lockup',
    usage: 'Brand introductions, covers, launch graphics, teaching the symbol/name relationship',
    note: 'Avoid in cramped headers.'
  },
  {
    title: 'Reduced horizontal lockup',
    variants: [
      {
        label: 'Light surface',
        asset: lockupReduced,
        assetName: 'happydesigns-lockup-reduced.svg',
        surface: 'light',
        previewClass: 'h-auto w-full max-w-[32rem]'
      },
      {
        label: 'Inverse surface',
        asset: lockupReducedInverse,
        assetName: 'happydesigns-lockup-reduced-inverse.svg',
        surface: 'dark',
        previewClass: 'h-auto w-full max-w-[32rem]'
      }
    ],
    role: 'Utility / production lockup',
    usage: 'Pens, small print, monochrome applications, narrow placements'
  },
  {
    title: 'Vertical lockup / signature',
    variants: [
      {
        label: 'Light surface',
        asset: signature,
        assetName: 'happydesigns-signature.svg',
        surface: 'light',
        previewClass: 'h-auto w-full max-w-[24rem]'
      },
      {
        label: 'Inverse surface',
        asset: signatureInverse,
        assetName: 'happydesigns-signature-inverse.svg',
        surface: 'dark',
        previewClass: 'h-auto w-full max-w-[24rem]'
      }
    ],
    role: 'Brand signature',
    usage: 'Footer, contact sections, proposal endings, presentation endings, social banners, brand intro/outro',
    note: 'Preferred footer treatment when enough vertical space is available.'
  }
]

const showcases = [
  {
    title: 'Logo forms',
    intro: 'Core identity marks with distinct jobs: wordmark, symbol, and reduced symbol.',
    items: logoForms
  },
  {
    title: 'Lockups',
    intro: 'Controlled combinations for moments where symbol and name should appear together.',
    items: lockups
  }
]

function previewSurfaceClass(surface: LogoItem['variants'][number]['surface']) {
  return {
    light: 'border-sand-300 bg-warm-white',
    dark: 'border-white/10 bg-graphite',
    object: 'border-sand-300 bg-sand-100 dark:border-white/10 dark:bg-sand-900'
  }[surface]
}

function previewLabelClass(surface: LogoItem['variants'][number]['surface']) {
  return surface === 'dark' ? 'text-sand-300' : 'text-sand-600'
}

function assetNames(item: LogoItem) {
  return [...new Set(item.variants.map(variant => variant.assetName))]
}
</script>

<template>
  <div class="not-prose my-10 space-y-10">
    <section
      v-for="showcase in showcases"
      :key="showcase.title"
      class="space-y-4"
    >
      <div>
        <h2 class="text-2xl font-semibold tracking-normal text-highlighted">
          {{ showcase.title }}
        </h2>
        <p class="mt-2 text-sm leading-6 text-body">
          {{ showcase.intro }}
        </p>
      </div>

      <div class="space-y-4">
        <article
          v-for="item in showcase.items"
          :key="item.title"
          class="grid overflow-hidden rounded-sm border border-default bg-surface lg:grid-cols-[minmax(0,1.45fr)_minmax(18rem,0.9fr)]"
        >
          <div
            class="grid min-h-80 gap-3 border-b border-default bg-tinted p-4 sm:p-5 lg:border-b-0 lg:border-r"
            :class="item.previewLayout || 'grid-cols-1 sm:grid-cols-2'"
          >
            <figure
              v-for="variant in item.variants"
              :key="`${variant.label}-${variant.assetName}`"
              class="grid min-h-44 place-items-center rounded-sm border p-5 sm:p-7"
              :class="previewSurfaceClass(variant.surface)"
            >
              <img
                :src="variant.asset"
                :alt="`${item.title} - ${variant.label}`"
                class="block w-auto object-contain"
                :class="variant.previewClass"
              >
              <figcaption
                class="mt-4 font-mono text-[0.68rem] uppercase leading-none tracking-[0.12em]"
                :class="previewLabelClass(variant.surface)"
              >
                {{ variant.label }}
              </figcaption>
            </figure>
          </div>

          <div class="flex flex-1 flex-col p-5 sm:p-6">
            <h3 class="text-lg font-semibold tracking-normal text-highlighted">
              {{ item.title }}
            </h3>

            <dl class="mt-4 space-y-3 text-sm leading-6">
              <div>
                <dt class="font-medium text-highlighted">
                  Role
                </dt>
                <dd class="text-body">
                  {{ item.role }}
                </dd>
              </div>

              <div>
                <dt class="font-medium text-highlighted">
                  Usage
                </dt>
                <dd class="text-body">
                  {{ item.usage }}
                </dd>
              </div>

              <div>
                <dt class="font-medium text-highlighted">
                  Assets
                </dt>
                <dd class="space-y-1.5 pt-1">
                  <div
                    v-for="assetName in assetNames(item)"
                    :key="assetName"
                    class="flex items-center gap-2 rounded-sm border border-muted bg-inset px-2.5 py-1.5 text-xs text-muted"
                  >
                    <UIcon
                      name="i-lucide-file"
                      class="size-3.5 shrink-0 text-dimmed"
                    />
                    <span class="min-w-0 break-all font-mono leading-5">
                      {{ assetName }}
                    </span>
                  </div>
                </dd>
              </div>
            </dl>

            <p
              v-if="item.note"
              class="mt-4 border-l-2 border-accented pl-3 text-sm leading-6 text-muted"
            >
              {{ item.note }}
            </p>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>
