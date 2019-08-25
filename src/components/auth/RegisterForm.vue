<template>
    <div class="card">
		<div class="card-header">Login</div>

		<div class="card-body">
			<form @submit.prevent="register">
				<div class="form-group">
					<label for="name">Username</label>
					<input type="text" id="name" class="form-control" v-model="name">
				</div>
				<div class="form-group">
					<label for="email">Email</label>
					<input type="text" id="email" class="form-control" v-model="email">
				</div>
				<div class="form-group">
					<label for="password">Password</label>
					<input type="password" id="password" class="form-control" v-model="password">
				</div>
				<div class="form-group">
					<label for="password-confirmation">Password</label>
					<input type="password" id="password-confirmation" class="form-control" v-model="password_confirmation">
				</div>

				<div class="form-group row mb-0">
				    <div class="col-md-12 text-right">
				        <button type="submit" class="btn btn-primary">
				            Register
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
				name: '',
				email: '',
				password: '',
				password_confirmation: ''
			}
		},
		methods: {
			register: function() {
				this.$store.dispatch('register', {
					name: this.name,
					email: this.email,
					password: this.password,
					password_confirmation: this.password_confirmation
				}).then(() => {
					this.$router.push('/')
				})
			}
		}
	}
</script>