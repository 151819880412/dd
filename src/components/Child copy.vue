<template>
  <div>
    <h2>Child字部分组件</h2>
    <p>{{message}}</p>
    <button @click="add">++</button>
    <button @click="jian">--</button>
    <br>
    <span>{{num}}</span>
    <hr>
    <span>{{fullName1}}</span>
    <br>
    <span>{{fullName3}}</span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:["message"],
    data(){
      return{
        num:this.message,
        aaa:9,
        bbb:9
      }
    },
    computed: { // 计算属性
      fullName1 () { // 相当于getter
        console.log('fullName1()')
        // return this.firstName + '-' + this.lastName
        return this.aaa++
      },

      fullName3: {
        get () {
          console.log('fullName3 get()')
          return this.bbb+2
        },
        set (value) {
          console.log('fullName3 set()', value)
         this.bbb+5
        }
      }
    },
    mounted(){
      console.log(this.$props.message)
    },
    methods:{
      add(){
        // this.$props.message++
        this.aaa++
      },
      jian(){
        this.bbb--
      }
    },
        watch: {
      // 监视firstName
      bbb (value) { // firstName的值变化了
     this.bbb=value
      }
    }
  }



  /**
   * 计算属性：
   * 根据data中return的数据进行计算
   * <标签>{{计算属性}}</>
   * 
   * computed：{
   * a(){  return 相当于getter}
   * 
      计算属性get调用时机:
          1). 初始显示第一次调用
          2). 依赖的数据发生了任何改变

          计算属性set调用时机:
          当前属性的值发生改变
   * 
   * b:{ get(){ return }    set(){         }}
   * 
   * }
   * 
   */
</script>

<style >

 
</style>
