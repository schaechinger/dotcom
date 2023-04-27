<template>
  <div class="year-in-figures col-12 q-py-lg bg-primary text-white">
    <div class="container row">
      <div class="col-12 q-px-md">
        <h2 class="text-h2 q-pb-lg">{{ $t('about.year.title') }}</h2>
      </div>

      <div
        v-for="figure in sections"
        :key="figure.title"
        class="col-12 col-sm-4 q-px-md"
      >
        <div class="row items-center" style="font-size:2.25rem">
          <div :class="`year-in-figures__icon col-${$q.screen.xs ? 2 : 'auto q-mr-md'}`">
            <q-icon :name="figure.icon" :style="`color:${figure.color}`" />
          </div>
          <div :class="`year-in-figures__count col${$q.screen.xs ? '-3' : ''}`">
            {{ figure.count }}
          </div>
          <div class="year-in-figures__type col lt-sm" :style="`color:${figure.color}`">
            {{ $t(figure.title, figure.count) }}
          </div>
        </div>
        <div class="year-in-figures__type q-mt-xs gt-xs" :style="`color:${figure.color}`">
          {{ $t(figure.title, figure.count) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

import { useMarathonStore } from 'stores/marathon';

interface Figure {
  title: string;
  icon: string;
  color: string;
  count: number;
}

export default defineComponent({
  name: 'YearInFigures',

  setup() {
    const marathonStore = useMarathonStore();

    const marathons = computed(() => {
      const year = `${new Date().getFullYear()}`;

      return marathonStore.marathons.filter((m) => m.getYear() === year).length;
    });
    void marathonStore.loadList();
    const coffees = computed(() => {
      const factor = 2.15;
      const date = new Date();
      const year = date.getTime() - new Date(date.getFullYear(), 0, 0).getTime();

      return Math.floor((year / 86400000) * factor);
    });

    const sections = ref<Figure[]>([
      {
        title: 'about.year.figures.marathons',
        icon: 'gl-basic gl-medal',
        color: '#f6b600',
        count: marathons.value,
      },
      {
        title: 'about.year.figures.projects',
        icon: 'gl-basic gl-handshake',
        color: '#8addf8',
        count: 4,
      },
      {
        title: 'about.year.figures.coffees',
        icon: 'gl-basic gl-coffee-to-go',
        color: '#6f4e37',
        count: coffees.value,
      },
    ]);

    return {
      sections,
    };
  },
});
</script>

<style lang="scss" scoped>
.year-in-figures {
  &__type {
    font-size: 1.5rem;
  }

  @media screen and (max-width: $breakpoint-sm-max) {
    &__count {
      margin-right: 1rem;
      text-align: right;
    }
  }
}
</style>
