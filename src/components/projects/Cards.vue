<template>
      <div id="Cards">
        <!-- <h1>Page Des Projets</h1> -->
        <div v-masonry transition-duration="3s" item-selector=".item" class="masonry-container">
        <div v-masonry-tile class="item" v-bind:key="index" v-for="(card, index) in cards">
            <Card v-bind:card="card"/>
            <!-- <Card v-bind:title="card.title"> -->
      </div>
    </div>
    </div>
</template>

<script>
import Card from './Card'

export default {
    name: "Cards",
    components: {
        Card
    },
    data () { 
          return {
              cards: this.$store.getters.projets,
          }
    },
    mounted: function() {
        this.$redrawVueMasonry();
    },
    methods: {
        reDraw: function(){
            this.$redrawVueMasonry();
            },

        filter: function(lang) {
            this.cards = this.$store.getters.projetsfilter(lang)
            this.reDraw()
        },
        all: function() {
            this.cards = this.$store.getters.projets
            this.reDraw()
        },
    }
}
</script>

<style>
.item {
  /* margin: 10px; */
  padding: 10px;
}
</style>
