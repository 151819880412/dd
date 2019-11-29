<template>
  <div>
    <span>{{num}}</span>
    <span>{{message.a}}</span>
    <button @click="jia">++</button>
    <button @click="jian">--</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:["message"],
    data(){
      return{
        num:this.$props.message.a
      }
    },
   methods:{
     jia(){
       this.num++
       console.log(this.$props.message.a)
     },
     jian(){
       this.$props.message.a--
       console.log(this.$props.message.a)
     }
   }
  }
</script>

<style >

 
</style>
