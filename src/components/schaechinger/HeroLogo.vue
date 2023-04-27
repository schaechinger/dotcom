<template>
  <div :class="`logo${dark ? ' logo--dark' : ''}`">
    <div>
      <span class="m">Manuel</span>
      <span class="s">Schächinger</span>
    </div>
    <div class="sub">
      <span class="f">Freelancer</span><span class="p">|</span
      ><span class="js">JavaScript Engineer</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeroLogo',

  props: {
    dark: Boolean,
  },
});
</script>

<style lang="scss" scoped>
.logo {
  font-size: 1.25rem;
  line-height: 1.75em;
  white-space: nowrap;

  .m,
  .s {
    font-size: 2em;
  }

  .m,
  .p {
    color: $primary;
  }

  .m {
    font-weight: 100;
    letter-spacing: 0.075em;
  }

  .s {
    letter-spacing: 0.0625em;
  }

  .sub {
    font-weight: 100;

    .f {
      letter-spacing: 0.225em;
    }

    .p {
      padding: 0 0.125em;
      font-weight: 400;
    }

    .js {
      letter-spacing: 0.2em;
    }
  }

  .s,
  .sub .f,
  .sub .js {
    color: $dark;
  }

  &--dark {
    .m,
    .p {
      color: $white;
    }
  }

  @media screen and (max-width: $breakpoint-sm-max) {
    font-size: 0.875rem;
  }
}
</style>
