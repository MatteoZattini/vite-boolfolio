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
            console.log(response);
            this.project = response.data.projects.data;
        });
    }
}
</script>

<template>
    <template v-for="item in project">
        <h1>{{ item.title }}</h1>
    </template>
</template>

<style scoped></style>