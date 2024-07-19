<script>
import axios from 'axios';
import SingleCard from './SingleCard.vue';

export default {
    name: 'AppSingleProject',

    components: {

    },

    data() {
        return {
            project: '',
        }
    },

    methods: {

    },

    mounted() {
        axios.get('http://localhost:8000/api/projects/' + this.$route.params.id).then((response) => {
            // + this.$route.params.id
            console.log(response);
            this.project = response.data.project;
            console.log(this.project);
        });
    }
}
</script>

<template>
    <h1>{{ project.title }}</h1>
    <p>{{ project.description }}</p>
</template>

<style scoped></style>