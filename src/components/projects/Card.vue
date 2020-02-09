<template>
    <div>
        <b-card
            v-bind:title="title"
            v-bind:img-src="imgsrc"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem; min-width: 100px;"
            class="lg-12"
        >
        <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
        </b-card-text>
        <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        imgsrc: String,
        // card: {title: }
    }
}
</script>