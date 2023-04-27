<template>
  <q-page class="marathons-page content-start">
    <div id="map" />

    <div class="container">
      <title-tile title="marathons.pageTitle" />
    </div>

    <div class="marathons-page__intro container q-pa-md">
      <p>{{ $t('marathons.text') }}</p>
    </div>

    <div class="marathon-page__list container">
      <q-list>
        <marathon-details
          v-for="marathon in marathonStore.marathons"
          :key="marathon.edition?.date?.toISOString()"
          :marathon="marathon"
        />
        <q-item v-if="marathonStore.loading">
          <q-item-section side>
            <q-spinner-tail color="primary" size="1.5rem" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Lade Marathons ...</q-item-label>
          </q-item-section>
        </q-item>
        <p v-else class="text-caption q-px-md powered-by-medalmonday">Powered by
          <q-icon name="medalmonday" />
          Medal Monday</p>
      </q-list>

      <q-btn
        href="https://www.medalmonday.de/profil/schaechinger"
        target="_blank"
        :label="$t('marathons.link')"
        color="mm-primary"
        class="q-mx-md"
        icon="medalmonday"
        outline
        no-caps
      />
    </div>

    <div class="marathon-page__majors container q-mt-md">
      <h2 class="text-h2 q-pa-md">{{ $t('marathons.majors.title') }}</h2>

      <q-list>
        <q-item
          v-for="major in marathonStore.majors"
          :key="major.event.name"
        >
          <q-item-section side>
            <q-icon
              :name="`gl-basic gl-circle-empty${major.edition ? '-check' : ''}`"
              :color="major.edition ? 'mm-primary' : 'grey-5'"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ major.event.name }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-item v-if="marathonStore.loading">
          <q-item-section side>
            <q-spinner-tail color="primary" size="1.5rem" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Lade Majors ...</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script lang="ts" scoped>
import L from 'leaflet';
import { defineComponent, ref } from 'vue';
import 'leaflet/dist/leaflet.css';

import TitleTile from 'components/TitleTile.vue';
import MarathonDetails from 'components/marathons/MarathonDetails.vue';
import { useMarathonStore } from 'stores/marathon';

export default defineComponent({
  name: 'MarathonsPage',

  components: {
    MarathonDetails,
    TitleTile,
  },

  mounted() {
    this.map = L.map('map').setView([48.05328, 11.66623], 10);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
    }).addTo(this.map);
  },

  setup() {
    const map = ref<L.Map>();
    const markers = ref<L.Marker[]>([]);
    const marathonStore = useMarathonStore();

    void marathonStore.loadList().then(() => {
      if (map.value) {
        let coordinates = marathonStore.marathons
          .map((m) => ({
            lat: m.event.location.latitude,
            lng: m.event.location.longitude,
            name: m.event.name,
          }))
          .filter((m) => m.lat && m.lng);

        coordinates = coordinates.filter(
          (m, i) => i === coordinates.findIndex((c) => c.lat === m.lat && c.lng === m.lng),
        );

        markers.value = coordinates.map((c) => {
          const marker = L.marker({ lat: c.lat as number, lng: c.lng as number });
          marker.addTo(map.value as L.Map);
          marker.bindPopup(c.name);

          return marker;
        });
        const group = L.latLngBounds(coordinates as { lat: number; lng: number; }[]);
        map.value.fitBounds(group);
      }
    });

    return {
      map,
      marathonStore,
    };
  },
});
</script>

<style lang="scss" scoped>
#map {
  height: 65vh;
  width: 100%;

  @media screen and (max-width: $breakpoint-sm-max) {
    height: 40vh;
  }
}

.powered-by-medalmonday {
  .q-icon {
    color: $mm-primary;
  }
}
</style>
