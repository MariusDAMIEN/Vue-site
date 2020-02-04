<template>
    <div id="Home">
    <div id="back">
        <b-container class="bv-example-row">
            <b-row>
                <b-col class="title"><h1>{{ title }}</h1></b-col>
            </b-row>
            <b-row>
                <b-col class="button"><el-button plain type="success">Success</el-button></b-col>
            </b-row>
        </b-container>

    </div>
    </div>
</template>

<script>

// import Navbar from './navigation/Navbar.vue'

export default {
    mounted() {
    window.VANTA.NET({
        el: "#back",
        mouseControls: false,
        touchControls: false,
        minHeight: window.innerHeight,
        minWidth: window.innerWidth,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xc54444,
        backgroundColor: 0x916,
        points: 8.00,
        spacing: 13.00
      });
    },
    components: {
        // Navbar,
    },
    name: 'Home',
    props: {
        msg: String
    },
    data() {
        return {
                title: "Bienvenue sur mon site"
        }
    },
}
</script>
<style>
.title {
    padding-top: 20%;
}

body {
    margin: 0px;
}

h1 {
    color: white;
    margin: 0;
    font-size: 80px;
    font-family: "Lobster";
}

.button {
    padding-top: 20%;
    text-align: center;
}

</style>