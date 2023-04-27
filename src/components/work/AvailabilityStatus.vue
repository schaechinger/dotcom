<template>
<q-chip :color="days ? 'primary' : 'deep-orange'" square outline :ripple="false">
  <q-avatar
    :color="days ? 'primary' : ''"
    :text-color="days ? 'white' : ''"
  >
    <q-icon name="gl-basic gl-clock" size="sm" />
  </q-avatar>
  {{ $t('availability.count', days) }}
</q-chip>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AvailabilityStatus',

  props: {
    days: {
      type: Number,
      default: 0,
    },
  },
});
</script>
