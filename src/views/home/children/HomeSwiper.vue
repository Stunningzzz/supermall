<template>
  <swiper :width="320" :height="200" :pItems="items">
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from "components/common/swiper";

export default {
  name: "HomeSwiper",
  data(){
    return {
      items:[
        {href:'http://www.baidu.com',src:'https://img12.360buyimg.com/babel/s1180x940_jfs/t1/168384/6/4128/264271/600e9ddfE4ca4f94c/3e25659f3474c19e.png.webp'},
        {href: 'http://www.baidu.com',src:'http://img30.360buyimg.com/da/s1180x940_jfs/t1/153140/33/3929/59765/5f9a9a87Ee906d6d7/07a8c5415de46511.jpg.webp'},
        {href: 'http://www.baidu.com',src:'https://img20.360buyimg.com/pop/s1180x940_jfs/t1/161738/21/1114/76533/5ff437efEa24ac2f5/2a79047e1e3f805a.jpg.webp'},
        {href: 'http://www.baidu.com',src:'https://img30.360buyimg.com/pop/s1180x940_jfs/t1/167925/25/3595/80793/60091463E8d848b0c/2a0536b9d3e33a9b.jpg.webp'},
      ]
    }
  },
  components:{
    Swiper,
    SwiperItem
  }
}
</script>
<style scoped>
  img{
    width: 100%;
    height: 100%;
  }
</style>