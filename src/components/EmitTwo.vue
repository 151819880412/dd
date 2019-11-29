<template>
  <div>
  </div>
</template>

<script type="text/ecmascript-6">
import {bus} from '../main'
  export default {
    mounted(){
      bus.$on('test',function(a){
        console.log(a)
      })
    }
  }
</script>

<style >

 
</style>
