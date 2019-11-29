<template>
  <div>
<p>coo:{{this.$attrs.coo}}</p>
<button @click="cc">**</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    //  props:["coo"],
    // mounted(){
    //   console.log(this.$attrs)
    // },
    methods: {
      cc(){
        this.$emit("upC",'孙传给父');
        // this.theme.name='111111'
      }
      
    },

 inject: ["name"],
      // inject: ["name","theme"],
      // inject: ["theme"],
  mounted() {
    console.log(this.name); // 浪里行舟
    // console.log(this.theme.name)
    console.log(this.$parent.$parent.$parent)
  },
  }
</script>

<style >

 
</style>
