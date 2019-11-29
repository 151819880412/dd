/*
所有路由配置的数组
*/
import PropsString from '../components/PropsString.vue'
import PropsObj from '../components/PropsObj.vue'
import Fun from '../components/Fun.vue'
import Slots from '../components/Slots.vue'
import EmitOne from '../components/EmitOne.vue'
import EmitTwo from '../components/EmitTwo.vue'
import PubsubOne from '../components/PubsubOne.vue'
import PubsubTwo from '../components/PubsubTwo.vue'
import Zi from '../components/Zi.vue'
import Sun from '../components/Sun.vue'


export default [
  {
    path: '/propsstring',
    component: PropsString,
  },
  {
    path: '/propsObj',
    component: PropsObj,
  },
  {
    path: '/fun',
    component: Fun,
  },
  {
    path: '/slots',
    component: Slots,
  },
  {
    path: '/emitone',
    component: EmitOne,
  },
  {
    path: '/emittwo',
    component: EmitTwo,
  },
  {
    path: '/pubsubone',
    component: PubsubOne,
  },
  {
    path: '/pubsubtwo',
    component: PubsubTwo,
  },
  {
    path: '/zi',
    component: Zi,
    children:[
      {
        path: 'zi/sun',
        component: Sun,
      },
    ]
  },

  
  {
    path: '/',
    redirect: '/fun'
  }
]
