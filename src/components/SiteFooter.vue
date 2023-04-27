<template>
  <div class="footer q-mt-lg">
    <div class="footer__dashed col-12">
      <div class="container q-px-md">
        <q-icon name="gl-basic gl-scissors" size="1.5rem" />
      </div>
    </div>

    <div class="container row q-pa-md">
      <div v-if="false" class="footer__social col-12">
        lang switch
        <q-icon name="gl-basic gl-world-east" />
      </div>
      <div v-if="false" class="footer__social col-12">
        social
      </div>
      <div class="footer__dark row col-12 items-center">
        <div class="col-auto col-md-4 text-right q-mr-md">
          <q-btn
            :icon="$q.dark.isActive ? 'gl-basic gl-sun' : 'gl-basic gl-moon'"
            :color="$q.dark.isActive ? 'amber-5' : 'indigo-5'"
            @click="() => $q.dark.toggle()"
            dense
            flat
            round
          />
        </div>
        <div class="col-auto col-md-4">
          {{ $t('general.footer.dark') }}
        </div>
      </div>
      <div class="footer__links col-12 col-md-4 text-right q-mr-md">
        <div
        v-for="link in links"
          :key="link.to"
        >
          <router-link :to="link.to">{{ $t(link.label) }}</router-link>
        </div>
      </div>
      <div class="footer__text col-12 col-md-5">
        <div class="q-mb-sm">{{ $t('general.footer.text') }}</div>
        <div class="q-mb-sm">
          &copy; {{ new Date().getFullYear() }} {{ $t('general.footer.copyright') }}
        </div>
        <div class="footer__love row items-center">{{
          $t('general.footer.love.0')
          }}&nbsp;<q-icon name="gl-basic gl-heart-empty" color="red" size="1.125rem" />&nbsp;{{
          $t('general.footer.love.1')
        }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

export default defineComponent({
  name: 'SiteFooter',

  components: {
    RouterLink,
  },

  setup() {
    return {
      links: [
        { to: '/impressum', label: 'imprint.title' },
        { to: '/datenschutz', label: 'privacy.title' },
        // { to: '/lebenslauf', label: 'resume.title' },
        // { to: '/blog', label: 'blog.title' },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.footer {
  &__dashed {
    border-top: 1px dashed #a0a0a0;

    .q-icon {
      color:#424242;
      position: relative;
      top: -0.875rem;
      transform: rotate(90deg);
    }
  }

  &__love {
    position: relative;

    &::after {
      animation: cursor 1s infinite;
      color: $primary;
      content: '|';
      font-weight: bold;
      margin-left: 0.25rem;
      opacity: 0;
      right: 0;
    }

    @keyframes cursor {
      0% { opacity: 0 }
      40% { opacity: 0 }
      50% { opacity: 1 }
      90% { opacity: 1 }
      100% { opacity: 0 }
    }
  }

  &__dark,
  &__text {
    font-size: 0.875rem;
  }
}
</style>
