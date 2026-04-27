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
  asset: string
  assetName: string
  inverse?: string
  inverseName?: string
  tile?: string
  tileName?: string
  tileInverse?: string
  tileInverseName?: string
  role: string
  usage: string
  note?: string
  previewClass?: string
}

const logoForms: LogoItem[] = [
  {
    title: 'Wordmark',
    asset: wordmark,
    assetName: 'happydesigns-wordmark.svg',
    inverse: wordmarkInverse,
    inverseName: 'happydesigns-wordmark-inverse.svg',
    role: 'Default identity mark',
    usage: 'Headers, navigation, documentation, slim horizontal contexts',
    previewClass: 'h-12 max-w-full'
  },
  {
    title: 'Symbol',
    asset: symbol,
    assetName: 'happydesigns-symbol.svg',
    role: 'Primary standalone symbol',
    usage: 'Favicon, app icon, social avatar, GitHub avatar, square contexts, brand moments',
    note: 'The full symbol keeps its original colors across light and dark mode. It behaves like a branded object, not a UI surface.',
    previewClass: 'size-24'
  },
  {
    title: 'Reduced symbol',
    asset: symbolReduced,
    assetName: 'happydesigns-symbol-reduced.svg',
    inverse: symbolReducedInverse,
    inverseName: 'happydesigns-symbol-reduced-inverse.svg',
    tile: symbolReducedTile,
    tileName: 'happydesigns-symbol-reduced-tile.svg',
    tileInverse: symbolReducedTileInverse,
    tileInverseName: 'happydesigns-symbol-reduced-tile-inverse.svg',
    role: 'Utility / production symbol',
    usage: 'Pens, stamps, engraving, embroidery, compact UI marks, tiny controlled contexts, limited-color production',
    previewClass: 'size-20'
  }
]

const lockups: LogoItem[] = [
  {
    title: 'Vertical lockup / signature',
    asset: signature,
    assetName: 'happydesigns-signature.svg',
    inverse: signatureInverse,
    inverseName: 'happydesigns-signature-inverse.svg',
    role: 'Brand signature',
    usage: 'Footer, contact sections, proposal closing pages, presentation endings, social banners, brand guide intro/outro, about sections',
    note: 'This is the preferred footer treatment when there is enough vertical space.',
    previewClass: 'h-32 max-w-full'
  },
  {
    title: 'Horizontal lockup',
    asset: lockup,
    assetName: 'happydesigns-lockup.svg',
    inverse: lockupInverse,
    inverseName: 'happydesigns-lockup-inverse.svg',
    role: 'Standard symbol + wordmark lockup',
    usage: 'Brand introductions, covers, launch graphics, cases where the symbol/name relationship needs to be taught',
    note: 'Avoid in cramped headers.',
    previewClass: 'h-16 max-w-full'
  },
  {
    title: 'Reduced horizontal lockup',
    asset: lockupReduced,
    assetName: 'happydesigns-lockup-reduced.svg',
    inverse: lockupReducedInverse,
    inverseName: 'happydesigns-lockup-reduced-inverse.svg',
    role: 'Utility / production lockup',
    usage: 'Pens, small print, monochrome applications, narrow horizontal placements, compact "made by happydesigns" marks',
    previewClass: 'h-12 max-w-full'
  }
]

const showcases = [
  {
    title: 'Logo forms',
    intro: 'Core identity marks with distinct jobs.',
    items: logoForms
  },
  {
    title: 'Lockups',
    intro: 'Standardized combinations of logo forms.',
    items: lockups
  }
]
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

      <div class="grid gap-px overflow-hidden rounded-sm border border-default bg-separator lg:grid-cols-3">
        <article
          v-for="item in showcase.items"
          :key="item.title"
          class="flex flex-col bg-surface"
        >
          <div class="grid min-h-56 place-items-center border-b border-default bg-tinted p-8">
            <img
              v-if="item.inverse"
              :src="item.asset"
              :alt="item.title"
              class="block w-auto object-contain dark:hidden"
              :class="item.previewClass"
            >
            <img
              v-if="item.inverse"
              :src="item.inverse"
              :alt="item.title"
              class="hidden w-auto object-contain dark:block"
              :class="item.previewClass"
            >
            <img
              v-else
              :src="item.asset"
              :alt="item.title"
              class="block w-auto object-contain"
              :class="item.previewClass"
            >
          </div>

          <div class="flex flex-1 flex-col p-5">
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
                <dd class="flex flex-wrap gap-2 pt-1">
                  <UBadge
                    color="neutral"
                    variant="outline"
                  >
                    {{ item.assetName }}
                  </UBadge>
                  <UBadge
                    v-if="item.inverse"
                    color="neutral"
                    variant="outline"
                  >
                    {{ item.inverseName }}
                  </UBadge>
                  <UBadge
                    v-if="item.tile"
                    color="neutral"
                    variant="outline"
                  >
                    {{ item.tileName }}
                  </UBadge>
                  <UBadge
                    v-if="item.tileInverse"
                    color="neutral"
                    variant="outline"
                  >
                    {{ item.tileInverseName }}
                  </UBadge>
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
