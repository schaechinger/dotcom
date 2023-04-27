<template>
  <q-page class="row items-start">
    <div class="col-12 bg-mm-primary row justify-center" style="height:50vh">
      <hero-logo :class="$q.screen.lt.sm ? 'q-pt-sm' : 'q-pt-xl'" dark />
    </div>
    <div class="col-12 col-md-6 row q-col-gutter-md">
      <q-banner class="col-12 bg-primary">test</q-banner>
      <q-banner class="col-12 bg-secondary">test</q-banner>
      <q-banner class="col-12 bg-accent">test</q-banner>
      <q-banner class="col-12 bg-positive">test</q-banner>
      <q-banner class="col-12 bg-negative">test</q-banner>
      <q-banner class="col-12 bg-warning">test</q-banner>
    </div>
    <div class="col-12 col-md-6 row q-col-gutter-md">
      <q-banner class="col-12 bg-mm-primary">test</q-banner>
      <q-banner class="col-12 bg-mm-secondary">test</q-banner>
      <q-banner class="col-12 bg-mm-accent">test</q-banner>
      <q-banner class="col-12 bg-clrs-positive">test</q-banner>
      <q-banner class="col-12 bg-clrs-negative">test</q-banner>
      <q-banner class="col-12 bg-clrs-warning">test</q-banner>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeroLogo from 'components/medalmonday/HeroLogo.vue';

export default defineComponent({
  name: 'MedalMondayPage',

  components: {
    HeroLogo,
  },
});
</script>

<style lang="scss" scoped>
.bg {
  &-mm {
    &-primary {
      background-color: $mm-primary;
    }
    &-secondary {
      background-color: $mm-secondary;
    }
    &-accent {
      background-color: $mm-accent;
    }
  }

  &-clrs {
    &-positive {
      background-color: #2ECC40;
    }
    &-negative {
      background-color: #ff4136;
    }
    &-warning {
      background-color: #ff851b;
    }
  }
}
</style>
