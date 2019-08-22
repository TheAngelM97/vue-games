<template>
    <div class="card">
		<div class="card-header">Login</div>

		<div class="card-body">
			<form @submit.prevent="login">
				<div class="form-group">
					<label for="username">Username</label>
					<input type="text" class="form-control" v-model="username">
				</div>
				<div class="form-group">
					<label for="password">Password</label>
					<input type="password" class="form-control" v-model="password">
				</div>

				<div class="form-group row mb-0">
				    <div class="col-md-12 text-right">
				        <button type="submit" class="btn btn-primary">
				            Login
				        </button>
				    </div>
				</div>
			</form>
		</div>
    </div>
</template>

<script>
	export default {
		data: function() {
			return {
				username: '',
				password: ''
			}
		},
		methods: {
			login: function() {
				this.$store.dispatch('login', {
					username: this.username,
					password: this.password
				}).then(() => {
					this.$router.push('/')
				})
			}
		}
	}
</script>