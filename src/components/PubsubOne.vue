<template>
  <div>
Pubsubone
<button @click="fabu">++</button>
  </div>
</template>

<script type="text/ecmascript-6">
import PubSub from 'pubsub-js';
  export default {
    data(){
      return{
        num:11
      }
    },
    methods: {
      fabu(){
       PubSub.publish("Pubsubone", this.num) // 参数一：消息名；参数二：需要传递的参数数据
      }
    },
  }
</script>

<style>

 
</style>
