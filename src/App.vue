<script>
import axios from 'axios';
import SingleCard from './components/SingleCard.vue';



export default {
	name: 'App',

	components: {
		SingleCard,
	},

	data(){
		return{
			base_url: 'http://localhost:8000',
			projects: ''
		}
	},

	mounted(){
		axios.get('http://localhost:8000/api/projects').then(response => {
			console.log(response);
			this.projects = response.data.projects.data
			console.log(this.projects)
		})
	}
}

</script>

<template>
	<h1>ciao</h1>
	<div class="container">
		bs-5
		<div class="row">
			<div class="col-12 d-flex flex-wrap justify-content-center">
				<template v-for="project in projects">
					<SingleCard :card="project" />
				</template>
			</div>
		</div>
	</div>
	
</template>

<style scoped>
</style>
