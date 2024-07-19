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

		}
	},

	methods: {

	},

	mounted() {

	}
}

</script>

<template>
	<router-link :to="{ name: 'home' }"> home </router-link>
	<router-link :to="{ name: 'about' }"> about </router-link>
	<router-link :to="{ name: 'contacts' }"> contacts </router-link>
	<!-- <router-link :to="{ name: 'single-project', params: { id:  } }"> single project </router-link> -->
	<router-view></router-view>
</template>

<style scoped></style>
