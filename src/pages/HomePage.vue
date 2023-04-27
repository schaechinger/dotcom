<template>
  <q-page class="row content-start">
    <q-img
      placeholder-src="https://images.schaechinger.com/4/hero.jpg"
      loading="eager"
      fetchpriority="high"
      class="img-home bg-primary"
      height="65vh"
      position="right 30%"
      fit="cover"
      :alt="$t('home.intro.title')"
    >
      <div class="absolute-top text-center" style="background-color:transparent;">
        <hero-logo :class="$q.screen.lt.sm ? 'q-pt-sm' : 'q-pt-xl'" dark />
      </div>
      <div v-if="$q.screen.gt.xs" class="absolute-bottom text-center">
        <div class="container row">
          <div
            v-for="customer in customers"
            :key="customer.key"
            class="col"
          >
            <q-img
              :src="`https://images.schaechinger.com/customers/${customer.key}.png`"
              :alt="customer.name"
              style="width:2rem"
            >
              <q-tooltip>{{ customer.name }}</q-tooltip>
            </q-img>
          </div>
        </div>
      </div>
    </q-img>

    <div class="container row">
      <div class="col-12 q-pa-md">
        <h1 class="text-h1 q-pb-md">{{ $t('home.intro.title') }}</h1>
        <p>{{ $t('home.intro.text.0') }}</p>
        <p>{{ $t('home.intro.text.1') }}</p>
        <p>{{ $t('home.intro.text.2') }}</p>
        <p>{{ $t('home.intro.text.3') }}</p>
        <p>{{
            $t('home.intro.text.4.0')
          }}<router-link to="/kontakt">{{ $t('home.intro.text.4.1') }}</router-link>{{
          $t('home.intro.text.4.2')
          }}<router-link to="/ueber-mich">{{ $t('home.intro.text.4.3') }}</router-link>{{
          $t('home.intro.text.4.4')
        }}</p>
      </div>
    </div>

    <div class="container row">
      <div class="col-12 q-pa-md">
        <h2 class="text-h2">{{ $t('availability.title') }}</h2>

        <availability-status :days="4" class="q-my-md" />
        <p>
          {{ $t('availability.text.0') }}<br />
          {{ $t('availability.text.1') }}
        </p>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts" scoped>
import { defineComponent } from 'vue';
import HeroLogo from 'components/schaechinger/HeroLogo.vue';
import AvailabilityStatus from 'components/work/AvailabilityStatus.vue';

export default defineComponent({
  name: 'HomePage',

  components: {
    AvailabilityStatus,
    HeroLogo,
  },

  setup() {
    return {
      customers: [
        { name: 'Medal Monday GmbH', key: 'medalmonday' },
        { name: 'Motius GmbH', key: 'motius' },
        { name: 'Kalaan GmbH', key: 'kalaan' },
        { name: 'BMW AG', key: 'bmw' },
        { name: 'Fonds Finan Maklerservice GmbH', key: 'fonds-finanz' },
      ],
    };
  },
});
</script>

<style lang="scss">

</style>
