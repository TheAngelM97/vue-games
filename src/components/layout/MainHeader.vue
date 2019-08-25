<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" to="/">{{ $store.state.app_name }}</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li v-if="!auth" class="nav-item">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li v-if="!auth" class="nav-item">
            <router-link class="nav-link" to="/register">Register</router-link>
          </li>
          <li v-if="auth" class="nav-item">
            Welcome, {{ user.name }}
          </li>
        </ul>
      </div>
    </nav>
</template>

<style>
  .navbar {
    margin-bottom: 20px;
  }
</style>

<script>
  export default {
    computed: {
      user: function() {
        return this.$store.getters.user
      },
      auth: function() {
        return this.$store.getters.authenticated
      } 
    }
  }
</script>
