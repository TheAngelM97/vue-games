<template>
	<div>
		<h2>Games</h2>
		<hr>
		<div v-for="game_row in game_rows" class="row">
			<div v-for="game in game_row" class="col-md-4">
				<div class="card">
				  	<img :src="require('@/assets/games/' + game.image)" class="card-img-top" alt="Watch dogs">
				  	<div class="card-body">
					    <h5 class="card-title">{{ game.name }}</h5>
					    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					    <router-link :to="{ name: 'game', params: { slug: game.slug } }" class="btn btn-primary">Show</router-link>
				  	</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				games: []
			}
		},
		computed: {
			game_rows: function() {
				return lodash.chunk(this.games, 3)
			}
		},
		created: function() {
			this.getGames()
		},
		methods: {
		  	getGames: function() {
		  		axios.get(this.$store.state.api_config.base_url + '/games')
				.then(res => {
					this.games = res.data.data
				})
				.catch(err => {
					console.log(err)
				})
		  	}
		}
	}
</script>