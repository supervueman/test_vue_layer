<template>
  <div>
    <vl-map
      ref="map"
      :load-tiles-while-animating="true"
      :load-tiles-while-interacting="true"
      data-projection="EPSG:4326"
      style="height: 400px"
      :controls="true"
      @click="onClick"
      @dblclick="onDblClick"
      @singleclick="onSingleclick"
      @pointerdrag="onPointerdrag"
      @pointermove="onPointermove"
      @movestart="onMoveStart"
      @moveend="onMoveEnd"
      @postrender="onPostrender"
    >
      <vl-view
        :zoom.sync="zoom"
        :center.sync="center"
        :rotation.sync="rotation"
      />

      <vl-feature id="point" :properties="{prop: 'value', prop2: 'value'}">
        <vl-geom-point :coordinates="[16.9071388, 52.4901917]" />
      </vl-feature>

      <vl-feature id="polygon" :properties="{prop: 'value', prop2: 'value'}">
        <vl-geom-polygon
          :coordinates="[[[-10, -10], [-20, -20], [-30, -10], [-20, 0], [-10, -10]]]"
        />
      </vl-feature>

      <vl-geoloc @update:position="geolocPosition = $event">
        <template slot-scope="geoloc">
          <vl-feature
            v-if="geoloc.position"
            id="position-feature"
          >
            <vl-geom-point :coordinates="geoloc.position" />

            <vl-style-box>
              <vl-style-icon
                src="/marker.png"
                :scale="0.4"
                :anchor="[0.5, 1]"
              />
            </vl-style-box>
          </vl-feature>
        </template>
      </vl-geoloc>

      <vl-layer-tile id="osm">
        <vl-source-osm />
      </vl-layer-tile>

      <vl-overlay
        id="overlay"
        :position="overlayCoordinate"
      >
        <template slot-scope="scope">
          <div class="overlay-content">
            Hello world!<br>
            Position: {{ scope.position }}
          </div>
        </template>
      </vl-overlay>
    </vl-map>

    <div style="padding: 20px">
      Zoom: {{ zoom }}<br>
      Center: {{ center }}<br>
      Rotation: {{ rotation }}<br>
      My geolocation: {{ geolocPosition }}
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    zoom: 2,
    center: [0, 0],
    rotation: 0,
    geolocPosition: undefined,
    overlayCoordinate: [30, 30],
  }),

  methods: {
    onClick($event) {
      console.log(this.$refs);

      $event.map.forEachFeatureAtPixel($event.pixel, (feature, layer) => {
        console.log('hi');
        console.log(feature, layer);
      });

      console.log('onClick', $event);
    },
    onDblClick($event) {
      console.log('onDblClick', $event);
    },
    onSingleclick($event) {
      console.log('onSingleclick', $event);
    },
    onPointerdrag($event) {
      console.log('onPointerdrag', $event);
    },
    onPointermove() {
      // console.log('onPointermove', $event);
    },
    onMoveStart($event) {
      console.log('onMoveStart', $event);
    },
    onMoveEnd($event) {
      console.log('onMoveEnd', $event);
    },
    onPostrender() {
      // console.log('onPostrender', $event);
    },
  },
};
</script>

<style lang="scss" scoped>
.overlay-content {
  background-color: #fff;
}
</style>
