<template>
  <div>
fun
<button @click="jia">++</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:["message"],
methods: {
  jia(){
    this.$props.message(11)
  }
},
  }
</script>

<style >

 
</style>
