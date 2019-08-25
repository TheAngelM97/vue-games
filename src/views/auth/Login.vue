<template>
	<div class="login">
		<div class="container">
			<div class="row justify-content-center">
			    <div class="col-md-8">
			        <login-form></login-form>
			    </div>
			</div>
		</div>
	</div>
</template>

<script>
	import LoginForm from '@/components/auth/LoginForm'

	export default {
		components: {
			LoginForm
		}
	}
</script>