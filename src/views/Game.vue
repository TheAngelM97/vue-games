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
				axios.get(this.$store.state.api_config.base_url + '/games/' + this.$route.params.slug)
				.then(res => {
					this.game = res.data.data
				})
				.catch(err => {
					console.log(err)
				})
			}
		}
	}
</script>