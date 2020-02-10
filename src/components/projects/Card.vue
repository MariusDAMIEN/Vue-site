<template>
    <div>
        <b-card
            v-bind:title="card.title"
            v-bind:img-src="card.imgsrc"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem; min-width: 100px;"
            class="lg-12"
        >
        <b-card-text>
            {{ card.description }}
        </b-card-text>
        <b-button target="_blank" rel="noopener noreferrer" v-bind:href=card.link variant="primary">Github</b-button>
        </b-card>
    </div>
</template>

<script>
export default {
    props: ['card']
}
</script>

<style>
.card-body {
    background-color:#fafafa;
}
</style>