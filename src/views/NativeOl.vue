<template>
  <div class="map">
    <div class="map__control" />
    <div id="map_ol" class="map__item" />
  </div>
</template>

<script>
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Control from 'ol/control/Control';
import Event from 'ol/events/Event';

export default {
  mounted() {
    const map = new Map({
      view: new View({
        center: [0, 0],
        zoom: 1,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: 'map_ol',
    });

    const controlElement = document.querySelector('.map__control');

    const myControl = new Control({
      element: controlElement,
    });

    const myEvent = new Event('click', {
      target: map,
    });

    controlElement.addEventListener('click', () => {
      map.dispatchEvent(myEvent);
    });

    map.addControl(myControl);

    map.on('click', (event) => {
      console.log(event);
    });

    console.log(map);

    console.log(myControl);

    console.log(new Event('click'));
  },
};
</script>

<style lang="scss" scoped>
.map {
  &__item {
    height: 400px;
  }

  &__control {
    width: 20px;
    height: 20px;
    background-color: red;
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
  }
}
</style>
