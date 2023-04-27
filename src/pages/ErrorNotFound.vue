<template>
  <q-page :class="`error-page${isMm ? ' error-page--mm' : ''}`">
    <div class="container">
      <title-tile title="errors.notFound.title" />
    </div>

    <div class="error-code">
      <div v-html="line()" />
      <div v-html="line()" />
      <div v-html="line(null, [4,5], 5, [0,2], null, [1,2])" />
      <div v-html="line(null, [2,5], [3,4], [3,4], null, [0,2])" />
      <div v-html="line(null, [0,1,4,5], [1,2], [5,6], 6, [1,2])" />
      <div v-html="line(7, [4,5], [1,2], [5,6], [4,5], [1,2])" />
      <div v-html="line([5,6], [4,5], [1,2], [5,6], [2,3], [1,2])" />
      <div v-html="line(3, 0, [1,2], [5,6], 0, [0,4])" />
      <div v-html="line(null, [4,5], [3,4], [3,4], null, [1,2])" />
      <div v-html="line(null, [4,5], 5, [0,2], null, [1,2])" />
      <div v-html="line()" />
      <div v-html="line()" />
    </div>

    <div class="container q-pa-md">

      <p class="q-mt-lg">
        {{ $t('errors.notFound.text') }}
      </p>

      <q-btn
        to="/"
        :label="$t('errors.notFound.link')"
        class="home-link"
        icon="gl-halflings gl-chevron-thin-right"
        outline
        no-caps
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import TitleTile from 'components/TitleTile.vue';

export default defineComponent({
  name: 'ErrorNotFound',

  components: {
    TitleTile,
  },

  props: {
    isMm: Boolean,
  },

  setup() {
    const generateMask = (range: number[] = []) => {
      let active = Array.isArray(range) ? range : [range];
      if (range.length <= 2) {
        active = [];
        for (let i = range[0]; (range[1] || 7) >= i; i += 1) {
          active.push(i);
        }
      }

      return Array.from({ length: 8 }, (_e, i) => active.includes(i));
    };

    const block = (mask = generateMask()) => {
      const list = mask.map((m) => {
        const digit = Math.round(Math.random());

        return m ? `<span class="eb__a">${digit}</span>` : digit;
      });

      return `<span class="eb">${list.join('')}</span>`;
    };

    return {
      mask: generateMask,
      block,
      line: (...masks: (number[] | number | null)[]) => {
        const line = masks.map((m) => {
          const mask = generateMask(
            Array.isArray(m) ? m : (null === m ? [] : [m]) as number[],
          );

          return block(mask);
        });

        while (28 > line.length) {
          line.unshift(block());
          line.push(block());
        }

        return line.join('');
      },
    };
  },
});
</script>

<style lang="scss">
.error-page {
  overflow-x: hidden;

  .error-code {
    left: calc(50% - 80rem);
    overflow-x: hidden;
    position: relative;
    text-align: center;
    text-overflow: ellipsis;
    width: 160rem;
  }

  .home-link {
    color: $primary;
  }

  .eb {
    color: #d6d6d6;
    display: inline-block;
    font-family: "Courier New", "Courier", "Lucida Sans Typewriter", "Lucida Typewriter", monospace;
    margin-left: 0.25em;
    margin-right: 0.25em;

    &__a {
      color: $primary;
      font-weight: bold;
    }
  }

  &--mm {
    .eb__a,
    .home-link {
      color: $mm-primary;
    }
  }

  @media screen and (max-width: $breakpoint-xs-max) {
    .error-code {
      font-size: 0.625rem;
    }
  }
}

body.body--dark {
  .error-page {
    .eb {
      color: #464646;
    }
  }
}
</style>
