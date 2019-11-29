<template>
  <div>
PubsubTwo
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    mounted(){
      PubSub.subscribe('Pubsubone',(msg,data)=>{
        console.log(msg,data)
      })
    }
  }
</script>

<style >

 
</style>
