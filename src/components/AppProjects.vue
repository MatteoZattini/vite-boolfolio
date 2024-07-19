<script>
import axios from 'axios';
import SingleCard from './SingleCard.vue';


export default {
    name: 'AppProjects',

    components: {
        SingleCard,
    },

    data() {
        return {
            base_url: 'http://localhost:8000',
            projects: '',
            isActive: false
        }
    },

    methods: {

        clickPage(element) {
            axios.get(element).then(response => {
                this.projects = response.data.projects;
                console.log(this.projects.links)
            })
        }
    },

    mounted() {
        axios.get('http://localhost:8000/api/projects').then(response => {
            console.log(response);
            this.projects = response.data.projects;

            console.log(this.projects)

        })
    }
}
</script>

<template>
    <section>
        <h1>ciao</h1>
        <div class="container">
            <template v-for="id in projects.data">
                <router-link class="btn btn-dark" :to="{ name: 'single-project', params: { id: id.id } }"> single project </router-link>
            </template>
            <nav aria-label="Result projects pages">
                <ul class="pagination">
                    <li v-for="link in projects.links" class="page-item"
                        :class="{ disabled: !link.url, active: link.active }">
                        <a href="#" class="page-link" @click="clickPage(link.url)" v-html="link.label"></a>
                    </li>
                </ul>
            </nav>
            <div class="row">
                <div class="col-12 d-flex flex-wrap justify-content-center">
                    <template v-for="project in projects.data">
                        <SingleCard :card="project" />
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
</style>