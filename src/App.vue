<template>
  <router-view />
</template>

<script lang="ts">
import { useQuasar } from 'quasar';
import { defineComponent } from 'vue';
import { iconMapFn } from 'src/services/iconUtils';

export default defineComponent({
  name: 'App',

  setup() {
    const quasar = useQuasar();

    quasar.iconMapFn = iconMapFn;
  },
});
</script>
