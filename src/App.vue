<template>
  <div id="app">
    <!-- <router-view/> -->
    <PropsString v-bind:message="Strings"></PropsString>
    <hr>
    <PropsObj v-bind:message="Obj"></PropsObj>
    <hr>
    <Fun v-bind:message="fun"></Fun>
    <hr>
    <Slots>
      <h1>1</h1>
      <h2 slot="up">2</h2>
    </Slots>
    <hr>
    <EmitOne @showCityName="updateCity" v-bind:message="toCity"></EmitOne>
    <EmitTwo></EmitTwo>
    <hr>
    <PubsubOne></PubsubOne>
    <PubsubTwo></PubsubTwo>
    <hr>
    <Zi   :foo="foo" :coo="coo" :doo="doo" v-on:upC="c"></Zi>
    <h1>{{this._provided.name}}</h1>
    <!-- <h1>{{name}}</h1> -->
  </div>
</template>

<script>
import Vue from 'vue'
import PropsString from "./components/PropsString";
import PropsObj from "./components/PropsObj";
import Fun from "./components/Fun";
import Slots from "./components/Slots";
import EmitOne from "./components/EmitOne";
import EmitTwo from "./components/EmitTwo";
import PubsubOne from "./components/PubsubOne";
import PubsubTwo from "./components/PubsubTwo";
import Zi from "./components/Zi";

export default {
  name: "App",
  data() {
    return {
      Strings: 1,
      Obj: {
        a: 1
      },
      toCity: "北京",
      foo:"Hello, world",
      coo:"Hello,rui",
      doo:"666"
    };
  },
  methods: {
    fun(data) {
      console.log(data);
    },
    updateCity(data) {
      //触发子组件城市选择-选择城市的事件
      this.toCity = data.cityname; //改变了父组件的值
      console.log("toCity:" + this.toCity);
    },
    c(data){
      console.log(data)
    }
  },


    provide: {
    name: '浪里行舟'
  },


// //方法一：提供祖先组件的实例
//   provide: {
//     name: '浪里行舟',
//     theme: this
//   },

  // //方法二:使用2.6最新API Vue.observable 优化响应式 provide
  // provide() {
  //   this.theme = Vue.observable({
  //     name: "浪里行舟"
  //   });
  //   return {
  //     theme: this.theme
  //   };
  // },

  components: {
    PropsString,
    PropsObj,
    Fun,
    Slots,
    EmitOne,
    EmitTwo,
    PubsubOne,
    PubsubTwo,
    Zi,
  }
};
</script>

<style>
</style>
