<template>
  <div class="about">
    <h1>This is an about page</h1>
    <home-link name="VS code" titre="dd"></home-link>
  </div>
</template>

<script>
 
import HomeLink from '@/components/HomeLink.vue'
// @ is an alias to /src 
export default {
  components: { HomeLink },
  name: 'HomeView',
 
}
</script>
