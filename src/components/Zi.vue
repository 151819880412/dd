<template>
  <div>
    <p>foo:{{foo}}</p>
    <p>attrs:{{$attrs}}</p>
    <Sun v-bind="$attrs" v-on="$listeners" :foo="foo"></Sun>
  </div>
</template>

<script type="text/ecmascript-6">
import Sun from "./Sun";
export default {
  props: ["foo"],
  // mounted(){
  //   // this.$attrs.coo='qqq'
  //   console.log(this.$attrs)
  // },

  components: {
    Sun
  }
};
</script>

<style >
</style>
