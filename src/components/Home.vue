<template>

    <div id="Home" :style="{ backgroundImage: `url('${image}')` }">
        <div class="bg-image" :style="{ backgroundImage: `url('${image}')`, zIndex: 1 }"></div>
        <b-container class="bv-example-row">
            <b-row >
                <b-col class="title"><h1>{{ title }}</h1></b-col>
            </b-row>
            <b-row>
                <b-col class="title"><h3>{{ pres }}</h3></b-col>
            </b-row>
            <b-row cols-xs="3" cols-sm="3" cols-md="3" cols-lg="3">
                <b-col class="button">
                <el-button class="button-size"  plain >C.V.</el-button>
                </b-col>
                <b-col class="button"><router-link to="/projets">
                    <el-button class="button-size"  plain >Mes Projets</el-button>
                </router-link>
                </b-col>
                <b-col class="button"><el-button class="button-size"  plain >Cours</el-button></b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>

// import Navbar from './navigation/Navbar.vue'

export default {
    components: {
        // Navbar,
    },
    name: 'Home',
    props: {
        msg: String
    },
    data() {
        return {
                title: "Bienvenue sur mon site",
                image: require("@/assets/images/background.jpg"),
                pres: "Bonjour, je m'appelle Marius DAMIEN je suis actuellement en 4ème année à l'école EPITECH. Je m'intéresse à tous ce qui touche à l'informatique aussi bien la programmation (Web, Mobile, Logicielle) que l'embarqué ( Arduino & Raspberry), je suis aussi passioné de cyber-sécurité et je m'initie au devOps. N'hésitez pas à regarder mes projets."
        }
    },
}
</script>
<style>
#Home {
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
};

#Home .bg-image{
    background-attachment: fixed;
}

#Home .title {
    padding-top: 20px;
}

body {
    margin: 0px;
}

#Home h1 {
    color: white;
    margin: 0;
    font-size: calc(3vw + 3vh + 1vmin);
    font-family: "Lobster";
    text-align: center;
}

#Home h3 {
    color: white;
    margin: 0;
    font-family: "Raleway";
    font-weight: bold;
    /* font-size: 40px; */
    font-size: calc(1vw + 1vh + 2vmin);
    text-align: center;
    padding-top: 10vh;
}

#Home .button {
    padding-top: 15vh;
    text-align: center;
}

#Home .el-button {
    background-color: rgba(0,0,0,0.5) !important;
    transition: 0.5s !important;
    font-family: "Lobster";
    font-size: calc(1vw + 1vh + 1vmin) !important;
    color: white !important;
}

#Home .el-button:hover {
  background-color:#282d4d !important;
  color: white !important;
  border-color: white !important;
}

</style>