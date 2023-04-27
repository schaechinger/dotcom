<template>
  <div class="title-tile col-12 q-pa-md items-center row">
    <div v-if="backLink" class="col-auto row items-center">
      <q-btn
        :to="backLink"
        icon="gl-halfings gl-chevron-thin-left"
        color="primary"
        class="q-mr-sm q-ml-none"
        flat
        dense
      />
    </div>
    <div class="col">
      <h1
        v-if="!!title"
        :class="`text-h1 q-mb-none ${
          !subtitle ? 'q-pt-sm q-pb-md' : 'q-pt-sm'
        }`"
      >
        {{ $t(title) }}
      </h1>
      <q-skeleton
        v-if="!title"
        :class="!subtitle ? 'q-mt-lg q-mb-md' : 'q-mt-sm'"
        :height="$q.screen.gt.sm ? '3.1rem' : '2rem'"
        width="50%"
      />
      <div v-if="title && subtitle" class="text-subtitle1 q-pb-xs">
        {{ $t(subtitle) }}
      </div>
    </div>
    <div v-if="$slots.side" class="col-auto q-ml-sm">
      <slot name="side" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TitleTile',

  props: {
    backLink: String,
    title: {
      type: String,
      default: '',
    },
    subtitle: String,
  },
});
</script>
