<template>
  <div class="home">
    <div class="container">
    	<img width="300" class="mx-auto d-block" alt="Vue logo" src="../assets/weband-logo.png">
    	<carousel></carousel>
		<game-listing></game-listing>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Carousel from '@/components/Carousel.vue'
import GameListing from '@/components/games/GameListing.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Carousel,
    GameListing
  },
  data: function() {
  	return {
  		
  	}
  },
  created: function() {
  	
  },
  methods: {
  	
  }
}
</script>
