<template>
	<div class="login">
		<div class="container">
			<div class="row justify-content-center">
			    <div class="col-md-8">
			        <register-form></register-form>
			    </div>
			</div>
		</div>
	</div>
</template>

<script>
	import RegisterForm from '@/components/auth/RegisterForm'

	export default {
		components: {
			RegisterForm
		}
	}
</script>