<template>
    <div id="Projects">
        <h1>Mes Projets</h1>
        <h1>|</h1>
        <b-container class="buttons">
        <b-row cols-xs="12">
            <div class="col">
                <el-button v-on:click="all()" class="button" >Tout</el-button>
            </div>
            <div :key="index" v-for="(language, index) in languages" class="col">
                <el-button v-on:click="filter(language)" class="button" >{{ language }}</el-button>            </div>
        </b-row>
        </b-container>
        <div class="cards">
            <Cards ref="cards"/>
        </div>
    </div>
</template>

<script>

import Cards from './projects/Cards'

export default {
    name: "Projects",
    components: {
        Cards
    },
    data () { 
        return {
            languages: [
                "C",
                "Flutter",
                "Vue.js"
            ]
        }
    },
    methods: {
        filter: function(index) {
            this.$refs.cards.filter(index)
        },
        all: function() {
            this.$refs.cards.all()
        }
    }
}
</script>

<style>
.cards {
    padding: 5%;
}

#Projects .buttons {
    text-align: center;
    /* padding: %; */
}
#Projects .button {
    padding: 5%;
    text-align: center;
    background-color: rgba(0,0,0,0) !important;
    transition: 0.5s !important;
    font-family: 'Raleway', sans-serif;
    font-size: calc(1vw + 1vh + 1vmin) !important;
    min-width: 100px;
    color: black !important;
}

#Projects h1 {
    color: black;
    margin: 0;
    font-size: calc(3vw + 3vh + 1vmin);
    font-family: 'Raleway', sans-serif;
    text-align: center;
}

#Projects {
    background-color: #f5f5f5;
}
</style>
