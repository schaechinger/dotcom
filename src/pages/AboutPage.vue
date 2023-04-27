<template>
  <q-page class="about-page content-start">
    <div class="container">
      <title-tile title="about.pageTitle" />
    </div>

    <div class="about-page__intro container q-pa-md">
      <p>{{ $t('about.text.0', { age }) }}</p>
    </div>

    <div class="about-page__spare-time container q-pa-md">
      <h2 class="text-h2">{{ $t('about.spareTime.title') }}</h2>
      <p>{{ $t('about.spareTime.text.0') }}</p>

      <q-btn
        to="/marathons"
        target="_blank"
        :label="$t('about.spareTime.link')"
        color="primary"
        icon="gl-halflings gl-chevron-thin-right"
        align="left"
        outline
        no-caps
      />
    </div>

    <div class="about-page__medalmonday container q-mb-md q-pa-md">
      <h2 class="text-h2">{{ $t('about.medalmonday.title') }}</h2>
      <p>{{ $t('about.medalmonday.text.0') }}</p>

      <q-btn
        to="/medalmonday"
        target="_blank"
        :label="$t('about.medalmonday.link')"
        color="mm-primary"
        icon="gl-halflings gl-chevron-thin-right"
        align="left"
        outline
        no-caps
      />
    </div>

    <year-in-figures />

    <div class="about-page__work container q-mt-md q-pa-md">
      <h2 class="text-h2">{{ $t('about.work.title') }}</h2>
      <p>{{ $t('about.work.text.0') }}</p>
    </div>

    <div class="about-page__stack container q-pa-md">
      <h2 class="text-h2">{{ $t('about.stack.title') }}</h2>
      <p>{{ $t('about.stack.text.0') }}</p>
    </div>
  </q-page>
</template>

<script lang="ts" scoped>
import { defineComponent } from 'vue';
import TitleTile from 'components/TitleTile.vue';
import YearInFigures from 'components/about/YearInFigures.vue';

export default defineComponent({
  name: 'AboutPage',

  components: {
    TitleTile,
    YearInFigures,
  },

  setup() {
    const date = new Date();
    let age = date.getFullYear() - 1991;
    const month = date.getMonth();
    if (1 > month || (1 === month && 14 > date.getDate())) {
      age -= 1;
    }

    return {
      age,
    };
  },
});
</script>
