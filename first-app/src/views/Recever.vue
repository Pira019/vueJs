<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Radio @sent-message="update">
     <p>pires</p>
     <h1>PO</h1>
    </Radio>
    {{ message }}     
  </div>
</template>

<script>
import Radio from './Radio.vue'; 
// @ is an alias to /src 
export default {  
    name: "ReceverView",
    components: { Radio },
    data : ()=>({
      message : 'pas de message'
    }),
    methods:{
      update(playload){
        this.message =playload.message
      }
    }
}
</script>
