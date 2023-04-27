<template>
  <div class="row text-center justify-center hero-logo text-white">
    <q-icon
      name="medalmonday"
      class="hero-logo__icon logo-icon"
      :color="dark ? 'white' : 'mm-primary'"
    />
    <span class="hero-logo__text">
      <span class="logo-text text-center logo__mm">Medal Monday</span>
      <span class="logo-slogan text-center">Dein Schweiß. Dein Erfolg. Deine Plattform.</span>
    </span>
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
.hero-logo {
  font-size: 1rem;
  text-align: center;

  .q-icon {
    font-size: 4em;
  }

  &__icon {
    padding-top: 0.0625em;
  }

  &__text {
    margin-left: 1em;

    .logo-text {
      display: block;
      font-size: 3em;
      letter-spacing: 0.01em;
      margin: 0;
      padding: 0;
      line-height: 1;
    }
    .logo-slogan {
      font-family: Roboto, -apple-system, 'Helvetica Neue', sans-serif;
      font-size: 1em;
      letter-spacing: 0.04em;
    }
  }

  .logo {
    font-weight: 500;
    text-decoration: none;

    .logo__mm {
      font-size: 1.125em;
    }

    .q-icon {
      color: $secondary;
      margin-right: 0.125em;

      &,
      svg {
        font-size: 1em;
      }
    }
  }

  @media screen and (max-width: $breakpoint-sm-max) {
    font-size: 0.7rem;

    .logo-slogan {
      font-size: 0.925em;
    }

    &__icon,
    &__text {
      margin-bottom: 0.25em;
    }
  }
}

.logo__mm {
  font-family: 'DFDejavuPro', Arial, Helvetica, sans-serif;
  font-weight: bold;
}
</style>
