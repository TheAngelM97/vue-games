<template>
	<div class="game">
		<h1>{{ game.name }}</h1>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				game: {}
			}
		},
		created: function() {
			this.getGame()
		},
		methods: {
			getGame: function() {
				axios.get(this.$store.state.kinvey_config.base_url + '/appdata/' + this.$store.state.kinvey_config.api_key + '/games', {
					params: {
						query: {
							slug: this.$route.params.slug
						}
					},
					headers: {
	  			 		'Authorization': this.$store.getters.authKey,
	  			 		'X-Kinvey-API-Version': 3
	  			 	}
				})
				.then(res => {
					this.game = lodash.first(res.data)
				})
				.catch(err => {
					console.log(err)
				})
			}
		}
	}
</script>