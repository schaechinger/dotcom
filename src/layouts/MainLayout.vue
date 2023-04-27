<template>
  <q-layout view="lHh lPR lFf">
    <q-header :class="`header${isMm ? ' header--mm' : ''}`" bordered elevated>
      <q-toolbar class="container">
        <q-btn
          to="/"
          class="section__schchngr"
          color="primary"
          flat
          round
        >
          <q-avatar>
            <img src="https://images.schaechinger.com/2/schaechinger.jpg" />
          </q-avatar>
        </q-btn>
        <q-separator :color="isMm ? 'white' : 'grey'" inset spaced vertical />
        <q-btn
          to="/medalmonday"
          class="section__mm"
          flat
          round
        >
          <q-avatar>
            <q-icon name="medalmonday" size="2.25rem" />
          </q-avatar>
        </q-btn>

        <q-space />

        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      side="right"
      class="nav-drawer"
      bordered
      overlay
    >
      <q-list>
        <q-item
          v-for="link in essentialLinks"
          :key="link.title"
          :to="link.link"
        >
          <q-item-section>
            <q-item-label>{{ $t(link.title) }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view :is-mm="isMm" />
    </q-page-container>

    <site-footer />
  </q-layout>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';

import SiteFooter from 'components/SiteFooter.vue';

const linksList = [
  {
    title: 'about.title',
    link: '/ueber-mich',
  },
  {
    title: 'projects.title',
    link: '/projekte',
  },
  {
    title: 'marathons.title',
    link: '/marathons',
  },
  {
    title: 'contact.title',
    link: '/kontakt',
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    SiteFooter,
  },

  props: {
    area: String,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const route = useRoute();

    return {
      essentialLinks: linksList,
      isMm: computed(() => route.fullPath.startsWith('/medalmonday')),
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style lang="scss" scoped>
header.header {
  background-color: rgba($white, 0.6);
  backdrop-filter: blur(0.5rem);
  color: $dark;

  &--mm {
    background-color: rgba($mm-primary, 0.91);
    color: $white;
  }

  .section__mm .q-avatar {
    background-color: $mm-primary;
    color: $white;
  }
}

body.body--dark {
  header.header {
    background-color: rgba($dark, 0.6);
    color: $white;

    &--mm {
      background-color: rgba($mm-primary, 0.91);
    }
  }
}
</style>
