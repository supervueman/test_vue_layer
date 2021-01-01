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
import Feature from 'ol/Feature';
import Polygon from 'ol/geom/Polygon';
import Point from 'ol/geom/Point';
import VectorLayer from 'ol/layer/Vector';
import Vector from 'ol/source/Vector';

export default {
  mounted() {
    const featurePoint = new Feature({
      geometry: new Point([16.9278, 52.4044]),
      name: 'My Point',
    });

    console.log('Feature', featurePoint);

    const featurePoligon = new Feature({
      geometry: new Polygon([[[-10, -10], [-20, -20], [-30, -10], [-20, 0], [-10, -10]]]),
      name: 'My Polygon',
    });

    const geomsSource = new Vector({
      features: [featurePoint, featurePoligon],
    });

    console.log('GeomsSource', geomsSource);

    const geomsVector = new VectorLayer({
      source: geomsSource,
    });

    console.log('GeomsVector', geomsVector);

    const map = new Map({
      view: new View({
        center: [0, 0],
        zoom: 1,
        projection: 'EPSG:4326',
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        geomsVector,
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

    console.log('Map', map);

    console.log('MayControl', myControl);
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
