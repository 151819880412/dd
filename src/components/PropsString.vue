<template>
  <div>
<span>{{num}}</span>
<button @click="jia">++</button>
<button @click="jian">--</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:["message"],
    data(){
      return{
        num:this.$props.message
      }
    },
    methods:{
      jia(){
        this.num++
        console.log(this.$props.message)
      },
      jian(){
        this.num--
        console.log(this.$props.message)
      }
    }
  }
</script>

<style >

 
</style>
