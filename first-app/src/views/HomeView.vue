<template>
  <div class="home"> 
    <h1 :class="$style.red">TEST 1</h1>
    <h2 :class="$style.red">test 2</h2>
  </div>
</template>

<script>
// @ is an alias to /src
 

export default {
  name: 'HomeView', 
}
</script>

<style module>
 .red{
  background-color: green;
 }
</style>