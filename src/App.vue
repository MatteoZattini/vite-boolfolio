<script>
import axios from 'axios';
import SingleCard from './components/SingleCard.vue';



export default {
	name: 'App',

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
		nextPage() {
			axios.get('http://localhost:8000/api/projects?page=2').then(response => {
				this.projects = response.data.projects.data;
			})
		},

		prevPage() {
			axios.get('http://localhost:8000/api/projects?page=1').then(response => {
				this.projects = response.data.projects.data;
			})
		},

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
	<router-link :to="{ name: 'home' }"> home </router-link>
	<router-view></router-view>
</template>

<style scoped></style>
