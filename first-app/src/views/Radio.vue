<template>
  <div class="about"> 
    <button @click="sendMessage">Click here</button>
    <slot></slot>
  </div>
</template>

<script>
 
 
// @ is an alias to /src 
export default { 
  name: "RadioView",
  methods : {
    sendMessage() {
      this.$emit('sent-message',{
        message : 'Radio marche très bien'
      })
    }

    
  }
 
}
</script>
