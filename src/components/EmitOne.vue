    <template>
  <div class="train-city">
    <h3>父组件传给子组件的toCity:{{message}}</h3>
    <br />
    <button @click="select(`大连`)">点击此处将‘大连’发射给父组件</button>
  </div>
</template>
  <script>
    import {bus} from '../main'
    export default {
      props: ["message"], // 用来接收父组件传给子组件的数据
      methods: {
        select(val) {
          let data = {
            cityname: val
          };
          this.$emit("showCityName", data); //select事件触发后，自动触发showCityName事件
          bus.$emit('test',data)
        }
      }
    };
</script>