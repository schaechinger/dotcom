<template>
  <q-item>
    <q-item-section>
      <q-item-label>{{ marathon.getName() }}</q-item-label>
      <q-item-label v-if="marathon.edition" caption>
        {{ formatDate(marathon.edition.date as Date) }}
        <span v-if="marathon.time" class="q-ml-md">{{ segmentTimeToString(marathon.time) }}</span>
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';

import { formatDate, segmentTimeToString } from 'src/services/timeUtils';
import { Marathon } from 'stores/marathon';

export default defineComponent({
  name: 'MarathonDetails',

  props: {
    marathon: {
      type: Object as PropType<Marathon>,
      required: true,
    },
  },

  setup() {
    return {
      formatDate,
      segmentTimeToString,
    };
  },
});
</script>
