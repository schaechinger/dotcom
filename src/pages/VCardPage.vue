<template>
  <div class="fullscreen text-center q-pa-md flex flex-center">
    <q-card class="vcard">
      <!-- <q-card-section horizontal> -->
      <q-img src="https://images.schaechinger.com/2/portfolio.jpg" />
      <!-- </q-card-section> -->

      <q-card-section class="logo">
        <hero-logo style="font-size: 0.875em;" />
      </q-card-section>

      <q-list class="text-left">
        <q-item href="mailto:manuel@schaechinger.com" clickable>
          <q-item-section avatar>
            <q-icon color="primary" name="gl-basic gl-send" />
          </q-item-section>

          <q-item-section>
            <q-item-label>manuel@schaechinger.com</q-item-label>
          </q-item-section>
        </q-item>

        <q-item href="tel:+4916097506593" clickable>
          <q-item-section avatar>
            <q-icon color="red" name="gl-basic gl-call" />
          </q-item-section>

          <q-item-section>
            <q-item-label>+49 160 97506593</q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-item-section avatar>
            <q-icon color="green" name="gl-basic gl-map-marker" />
          </q-item-section>

          <q-item-section>
            <q-item-label>An der Ottosäule 16<br />85521 Ottobrunn</q-item-label>
          </q-item-section>

          <q-item-section side>
            <q-btn
              color="grey"
              round
              flat
              dense
              :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
              @click="expanded = !expanded"
            />
          </q-item-section>
        </q-item>
      </q-list>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />

          <q-card-actions align="center">
            <q-btn flat round color="teal" icon="fab fa-xing" href="https://xing.com/profile/Manuel_Schaechinger" target="_blank" />
            <q-btn flat round color="blue-14" icon="fab fa-linkedin" href="https://linkedin.com/in/schaechinger" target="_blank" />
            <q-btn flat round color="gray" icon="fab fa-github" href="https://github.com/schaechinger" target="_blank" />
            <q-btn flat round color="pink" icon="fab fa-instagram" href="https://instagram.com/theschaechinger" target="_blank" />
            <q-btn flat round color="blue" icon="fab fa-twitter" href="https://twitter.com/schaechinger" target="_blank" />
          </q-card-actions>
        </div>
      </q-slide-transition>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import HeroLogo from 'components/schaechinger/HeroLogo.vue';

export default defineComponent({
  name: 'VCard',

  components: {
    HeroLogo,
  },

  setup() {
    const expanded = ref(true);

    return {
      expanded,
    };
  },
});
</script>

<style lang="scss" scoped>
.vcard {
  max-width: 100%;
  width: 20rem;

  img.logo {
    max-width: 100%;
  }
}
</style>
