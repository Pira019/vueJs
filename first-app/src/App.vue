<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png"> 
    <nav>
			<HomeLink url="Love you" name='loo'/>  
			<HomeLink url="Love you" name='loo'/>  
			<HomeLink url="Love you" name='loo'/>  
			<HomeLink url="Love you" name='loo'/>  
		</nav>
		<p>Bienvenue sur notre page d'<HomeLink /></p>
  </div>
</template>

<script>
import HomeLink from './components/HomeLink.vue'

export default {
  name: 'App',
  components: {
    HomeLink,

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
