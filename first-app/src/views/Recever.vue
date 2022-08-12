<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>store {{ month }} <br>
    {{ message }}</p>
    
    <input v-model="message" placeholder="exm" />
    <h2 v-for="item in list" :key="item" @click="ecole">
    {{ item }}
    </h2>
    <button @click="increaseMonth">INcrease</button>
    <Radio @sent-message="update">
     <p>pires</p>
     <h1>PO</h1>
    </Radio>
    {{ message }}     
  </div>
</template>

<script>
 
import Radio from './Radio.vue'; 
import { mapState } from 'vuex';
// @ is an alias to /src 
export default {  
    name: "ReceverView",
    components: { Radio },
    data : ()=>({
      message : 'pas de message',
      list : ['ecole','hotel','lapin']
    }),
    methods:{
    increaseMonth () { 
      return this.message = this.$store.commit('INCREASE_MONTH')
    },
      update(playload){
        this.message =playload.message
      },
      ecole(){
        return this.list[0]='TEST FONCTION'
      }
    },
    computed:{
      ...mapState(['month'])
    }
}
</script>
