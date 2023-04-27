<template>
  <q-page class="row content-start container">
    <title-tile title="projects.title" />

    <div class="q-col-gutter-md row">
      <div
        v-for="project in projectStore.projects"
        :key="project.key"
        class="col-12 col-md-6 col-lg-4"
      >
        <q-card class="full-height column">
          <q-card-section>
            <h4 class="text-h4" v-html="project.title" />
            <q-chip
              v-for="tag in project.tags"
              :key="tag"
              :label="tag"
              class="q-mr-sm"
              color="primary"
              size="sm"
              outline
              square
              clickable
            />
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-item-label :lines="3">{{ project.description }}</q-item-label>
          </q-card-section>

          <q-space />

          <q-card-actions>
            <q-item-section>
              <q-item-label caption>{{ $t('projects.year') }}</q-item-label>
              <q-item-label>{{ project.year }}</q-item-label>
            </q-item-section>
            <q-item-section class="text-right">
              <q-item-label caption>{{ $t(`projects.types.${project.type}`) }}</q-item-label>
              <q-item-label>{{ project.customer.title }}</q-item-label>
            </q-item-section>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts" scoped>
import { defineComponent } from 'vue';
import TitleTile from 'components/TitleTile.vue';
import { useProjectStore } from 'stores/project';

export default defineComponent({
  name: 'HomePage',

  components: {
    TitleTile,
  },

  setup() {
    const projectStore = useProjectStore();

    return {
      projectStore,
    };
  },
});
</script>

<style lang="scss">

</style>
