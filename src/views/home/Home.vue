<template>
  <div id="home">
    <top />
    <scroll class="scroll" ref="scroll" @scroll="scroll" @pullingUp="pullingUp">
      <h-swiper :swiper-items="swiperItems" />
      <recommend :recommends="recommends" />
      <tab-control class="tab-control"
                   :style="tabControlStyle"
                   :titles="['流行','新款','精选']"
                   ref="tabControl"
                   @tabClick="tabClick" />
      <good-list :goods="goods" :type="curType" />
    </scroll>
    <back-top v-show="showBack" @click.native="backTop" />
  </div>
</template>

<script>
import Top from "./children/Top";
import Scroll from "components/common/scroll/Scroll";
import HSwiper from "./children/HSwiper";
import Recommend from "./children/Recommend";
import TabControl from "components/content/TabControl";
import GoodList from "components/content/goods/GoodList";
import BackTop from "components/content/backtop/BackTop";

import {debounce} from "common/utils";


export default {
  name: "Home",
  components: {
    Top,
    Scroll,
    HSwiper,
    Recommend,
    TabControl,
    GoodList,
    BackTop
  },
  data()
  {
    return {
      swiperItems: [
        {
          href: 'http://www.baidu.com',
          src: 'https://img12.360buyimg.com/babel/s1180x940_jfs/t1/168384/6/4128/264271/600e9ddfE4ca4f94c/3e25659f3474c19e.png.webp'
        },
        {
          href: 'http://www.baidu.com',
          src: 'http://img30.360buyimg.com/da/s1180x940_jfs/t1/153140/33/3929/59765/5f9a9a87Ee906d6d7/07a8c5415de46511.jpg.webp'
        },
        {
          href: 'http://www.baidu.com',
          src: 'https://img20.360buyimg.com/pop/s1180x940_jfs/t1/161738/21/1114/76533/5ff437efEa24ac2f5/2a79047e1e3f805a.jpg.webp'
        },
        {
          href: 'http://www.baidu.com',
          src: 'https://img30.360buyimg.com/pop/s1180x940_jfs/t1/167925/25/3595/80793/60091463E8d848b0c/2a0536b9d3e33a9b.jpg.webp'
        },
      ],
      recommends: [
        {
          href: 'http://www.baidu.com',
          src: 'https://img12.360buyimg.com/babel/s1180x940_jfs/t1/168384/6/4128/264271/600e9ddfE4ca4f94c/3e25659f3474c19e.png.webp',
          desc: '十点抢券'
        },
        {
          href: 'http://www.baidu.com',
          src: 'http://img30.360buyimg.com/da/s1180x940_jfs/t1/153140/33/3929/59765/5f9a9a87Ee906d6d7/07a8c5415de46511.jpg.webp',
          desc: '好物特卖'
        },
        {
          href: 'http://www.baidu.com',
          src: 'https://img20.360buyimg.com/pop/s1180x940_jfs/t1/161738/21/1114/76533/5ff437efEa24ac2f5/2a79047e1e3f805a.jpg.webp',
          desc: '内购福利'
        },
        {
          href: 'http://www.baidu.com',
          src: 'https://img30.360buyimg.com/pop/s1180x940_jfs/t1/167925/25/3595/80793/60091463E8d848b0c/2a0536b9d3e33a9b.jpg.webp',
          desc: '初秋上新'
        }
      ],
      goods: {
        pop: [
          {
            href: 'http://www.baidu.com',
            src: 'https://img30.360buyimg.com/pop/s1180x940_jfs/t1/167925/25/3595/80793/60091463E8d848b0c/2a0536b9d3e33a9b.jpg.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img12.360buyimg.com/babel/s1180x940_jfs/t1/168384/6/4128/264271/600e9ddfE4ca4f94c/3e25659f3474c19e.png.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img30.360buyimg.com/pop/s1180x940_jfs/t1/167925/25/3595/80793/60091463E8d848b0c/2a0536b9d3e33a9b.jpg.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img12.360buyimg.com/babel/s1180x940_jfs/t1/168384/6/4128/264271/600e9ddfE4ca4f94c/3e25659f3474c19e.png.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img12.360buyimg.com/babel/s1180x940_jfs/t1/168384/6/4128/264271/600e9ddfE4ca4f94c/3e25659f3474c19e.png.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },{
            href: 'http://www.baidu.com',
            src: 'https://img30.360buyimg.com/pop/s1180x940_jfs/t1/167925/25/3595/80793/60091463E8d848b0c/2a0536b9d3e33a9b.jpg.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img12.360buyimg.com/babel/s1180x940_jfs/t1/168384/6/4128/264271/600e9ddfE4ca4f94c/3e25659f3474c19e.png.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img30.360buyimg.com/pop/s1180x940_jfs/t1/167925/25/3595/80793/60091463E8d848b0c/2a0536b9d3e33a9b.jpg.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img12.360buyimg.com/babel/s1180x940_jfs/t1/168384/6/4128/264271/600e9ddfE4ca4f94c/3e25659f3474c19e.png.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img12.360buyimg.com/babel/s1180x940_jfs/t1/168384/6/4128/264271/600e9ddfE4ca4f94c/3e25659f3474c19e.png.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },{
            href: 'http://www.baidu.com',
            src: 'https://img30.360buyimg.com/pop/s1180x940_jfs/t1/167925/25/3595/80793/60091463E8d848b0c/2a0536b9d3e33a9b.jpg.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img12.360buyimg.com/babel/s1180x940_jfs/t1/168384/6/4128/264271/600e9ddfE4ca4f94c/3e25659f3474c19e.png.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img30.360buyimg.com/pop/s1180x940_jfs/t1/167925/25/3595/80793/60091463E8d848b0c/2a0536b9d3e33a9b.jpg.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img12.360buyimg.com/babel/s1180x940_jfs/t1/168384/6/4128/264271/600e9ddfE4ca4f94c/3e25659f3474c19e.png.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img12.360buyimg.com/babel/s1180x940_jfs/t1/168384/6/4128/264271/600e9ddfE4ca4f94c/3e25659f3474c19e.png.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },{
            href: 'http://www.baidu.com',
            src: 'https://img30.360buyimg.com/pop/s1180x940_jfs/t1/167925/25/3595/80793/60091463E8d848b0c/2a0536b9d3e33a9b.jpg.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img12.360buyimg.com/babel/s1180x940_jfs/t1/168384/6/4128/264271/600e9ddfE4ca4f94c/3e25659f3474c19e.png.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img30.360buyimg.com/pop/s1180x940_jfs/t1/167925/25/3595/80793/60091463E8d848b0c/2a0536b9d3e33a9b.jpg.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img12.360buyimg.com/babel/s1180x940_jfs/t1/168384/6/4128/264271/600e9ddfE4ca4f94c/3e25659f3474c19e.png.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img12.360buyimg.com/babel/s1180x940_jfs/t1/168384/6/4128/264271/600e9ddfE4ca4f94c/3e25659f3474c19e.png.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },{
            href: 'http://www.baidu.com',
            src: 'https://img30.360buyimg.com/pop/s1180x940_jfs/t1/167925/25/3595/80793/60091463E8d848b0c/2a0536b9d3e33a9b.jpg.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img12.360buyimg.com/babel/s1180x940_jfs/t1/168384/6/4128/264271/600e9ddfE4ca4f94c/3e25659f3474c19e.png.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img30.360buyimg.com/pop/s1180x940_jfs/t1/167925/25/3595/80793/60091463E8d848b0c/2a0536b9d3e33a9b.jpg.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img12.360buyimg.com/babel/s1180x940_jfs/t1/168384/6/4128/264271/600e9ddfE4ca4f94c/3e25659f3474c19e.png.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img12.360buyimg.com/babel/s1180x940_jfs/t1/168384/6/4128/264271/600e9ddfE4ca4f94c/3e25659f3474c19e.png.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },{
            href: 'http://www.baidu.com',
            src: 'https://img30.360buyimg.com/pop/s1180x940_jfs/t1/167925/25/3595/80793/60091463E8d848b0c/2a0536b9d3e33a9b.jpg.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img12.360buyimg.com/babel/s1180x940_jfs/t1/168384/6/4128/264271/600e9ddfE4ca4f94c/3e25659f3474c19e.png.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img30.360buyimg.com/pop/s1180x940_jfs/t1/167925/25/3595/80793/60091463E8d848b0c/2a0536b9d3e33a9b.jpg.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img12.360buyimg.com/babel/s1180x940_jfs/t1/168384/6/4128/264271/600e9ddfE4ca4f94c/3e25659f3474c19e.png.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img12.360buyimg.com/babel/s1180x940_jfs/t1/168384/6/4128/264271/600e9ddfE4ca4f94c/3e25659f3474c19e.png.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
        ],
        new: [
          {
            href: 'http://www.baidu.com',
            src: 'https://img30.360buyimg.com/pop/s1180x940_jfs/t1/167925/25/3595/80793/60091463E8d848b0c/2a0536b9d3e33a9b.jpg.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img20.360buyimg.com/pop/s1180x940_jfs/t1/161738/21/1114/76533/5ff437efEa24ac2f5/2a79047e1e3f805a.jpg.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img30.360buyimg.com/pop/s1180x940_jfs/t1/167925/25/3595/80793/60091463E8d848b0c/2a0536b9d3e33a9b.jpg.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img20.360buyimg.com/pop/s1180x940_jfs/t1/161738/21/1114/76533/5ff437efEa24ac2f5/2a79047e1e3f805a.jpg.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img20.360buyimg.com/pop/s1180x940_jfs/t1/161738/21/1114/76533/5ff437efEa24ac2f5/2a79047e1e3f805a.jpg.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },{
            href: 'http://www.baidu.com',
            src: 'https://img30.360buyimg.com/pop/s1180x940_jfs/t1/167925/25/3595/80793/60091463E8d848b0c/2a0536b9d3e33a9b.jpg.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img20.360buyimg.com/pop/s1180x940_jfs/t1/161738/21/1114/76533/5ff437efEa24ac2f5/2a79047e1e3f805a.jpg.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img30.360buyimg.com/pop/s1180x940_jfs/t1/167925/25/3595/80793/60091463E8d848b0c/2a0536b9d3e33a9b.jpg.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img20.360buyimg.com/pop/s1180x940_jfs/t1/161738/21/1114/76533/5ff437efEa24ac2f5/2a79047e1e3f805a.jpg.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img20.360buyimg.com/pop/s1180x940_jfs/t1/161738/21/1114/76533/5ff437efEa24ac2f5/2a79047e1e3f805a.jpg.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },{
            href: 'http://www.baidu.com',
            src: 'https://img30.360buyimg.com/pop/s1180x940_jfs/t1/167925/25/3595/80793/60091463E8d848b0c/2a0536b9d3e33a9b.jpg.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img20.360buyimg.com/pop/s1180x940_jfs/t1/161738/21/1114/76533/5ff437efEa24ac2f5/2a79047e1e3f805a.jpg.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img30.360buyimg.com/pop/s1180x940_jfs/t1/167925/25/3595/80793/60091463E8d848b0c/2a0536b9d3e33a9b.jpg.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img20.360buyimg.com/pop/s1180x940_jfs/t1/161738/21/1114/76533/5ff437efEa24ac2f5/2a79047e1e3f805a.jpg.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img20.360buyimg.com/pop/s1180x940_jfs/t1/161738/21/1114/76533/5ff437efEa24ac2f5/2a79047e1e3f805a.jpg.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },{
            href: 'http://www.baidu.com',
            src: 'https://img30.360buyimg.com/pop/s1180x940_jfs/t1/167925/25/3595/80793/60091463E8d848b0c/2a0536b9d3e33a9b.jpg.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img20.360buyimg.com/pop/s1180x940_jfs/t1/161738/21/1114/76533/5ff437efEa24ac2f5/2a79047e1e3f805a.jpg.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img30.360buyimg.com/pop/s1180x940_jfs/t1/167925/25/3595/80793/60091463E8d848b0c/2a0536b9d3e33a9b.jpg.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img20.360buyimg.com/pop/s1180x940_jfs/t1/161738/21/1114/76533/5ff437efEa24ac2f5/2a79047e1e3f805a.jpg.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img20.360buyimg.com/pop/s1180x940_jfs/t1/161738/21/1114/76533/5ff437efEa24ac2f5/2a79047e1e3f805a.jpg.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },{
            href: 'http://www.baidu.com',
            src: 'https://img30.360buyimg.com/pop/s1180x940_jfs/t1/167925/25/3595/80793/60091463E8d848b0c/2a0536b9d3e33a9b.jpg.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img20.360buyimg.com/pop/s1180x940_jfs/t1/161738/21/1114/76533/5ff437efEa24ac2f5/2a79047e1e3f805a.jpg.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img30.360buyimg.com/pop/s1180x940_jfs/t1/167925/25/3595/80793/60091463E8d848b0c/2a0536b9d3e33a9b.jpg.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img20.360buyimg.com/pop/s1180x940_jfs/t1/161738/21/1114/76533/5ff437efEa24ac2f5/2a79047e1e3f805a.jpg.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img20.360buyimg.com/pop/s1180x940_jfs/t1/161738/21/1114/76533/5ff437efEa24ac2f5/2a79047e1e3f805a.jpg.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },{
            href: 'http://www.baidu.com',
            src: 'https://img30.360buyimg.com/pop/s1180x940_jfs/t1/167925/25/3595/80793/60091463E8d848b0c/2a0536b9d3e33a9b.jpg.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img20.360buyimg.com/pop/s1180x940_jfs/t1/161738/21/1114/76533/5ff437efEa24ac2f5/2a79047e1e3f805a.jpg.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img30.360buyimg.com/pop/s1180x940_jfs/t1/167925/25/3595/80793/60091463E8d848b0c/2a0536b9d3e33a9b.jpg.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img20.360buyimg.com/pop/s1180x940_jfs/t1/161738/21/1114/76533/5ff437efEa24ac2f5/2a79047e1e3f805a.jpg.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img20.360buyimg.com/pop/s1180x940_jfs/t1/161738/21/1114/76533/5ff437efEa24ac2f5/2a79047e1e3f805a.jpg.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
        ],
        deli: [
          {
            href: 'http://www.baidu.com',
            src: 'https://img20.360buyimg.com/pop/s1180x940_jfs/t1/161738/21/1114/76533/5ff437efEa24ac2f5/2a79047e1e3f805a.jpg.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img12.360buyimg.com/babel/s1180x940_jfs/t1/168384/6/4128/264271/600e9ddfE4ca4f94c/3e25659f3474c19e.png.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img20.360buyimg.com/pop/s1180x940_jfs/t1/161738/21/1114/76533/5ff437efEa24ac2f5/2a79047e1e3f805a.jpg.webp',

            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img12.360buyimg.com/babel/s1180x940_jfs/t1/168384/6/4128/264271/600e9ddfE4ca4f94c/3e25659f3474c19e.png.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img12.360buyimg.com/babel/s1180x940_jfs/t1/168384/6/4128/264271/600e9ddfE4ca4f94c/3e25659f3474c19e.png.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },{
            href: 'http://www.baidu.com',
            src: 'https://img20.360buyimg.com/pop/s1180x940_jfs/t1/161738/21/1114/76533/5ff437efEa24ac2f5/2a79047e1e3f805a.jpg.webp',

            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img12.360buyimg.com/babel/s1180x940_jfs/t1/168384/6/4128/264271/600e9ddfE4ca4f94c/3e25659f3474c19e.png.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img20.360buyimg.com/pop/s1180x940_jfs/t1/161738/21/1114/76533/5ff437efEa24ac2f5/2a79047e1e3f805a.jpg.webp',

            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img12.360buyimg.com/babel/s1180x940_jfs/t1/168384/6/4128/264271/600e9ddfE4ca4f94c/3e25659f3474c19e.png.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img12.360buyimg.com/babel/s1180x940_jfs/t1/168384/6/4128/264271/600e9ddfE4ca4f94c/3e25659f3474c19e.png.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },{
            href: 'http://www.baidu.com',
            src: 'https://img20.360buyimg.com/pop/s1180x940_jfs/t1/161738/21/1114/76533/5ff437efEa24ac2f5/2a79047e1e3f805a.jpg.webp',

            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img12.360buyimg.com/babel/s1180x940_jfs/t1/168384/6/4128/264271/600e9ddfE4ca4f94c/3e25659f3474c19e.png.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img20.360buyimg.com/pop/s1180x940_jfs/t1/161738/21/1114/76533/5ff437efEa24ac2f5/2a79047e1e3f805a.jpg.webp',

            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img12.360buyimg.com/babel/s1180x940_jfs/t1/168384/6/4128/264271/600e9ddfE4ca4f94c/3e25659f3474c19e.png.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img12.360buyimg.com/babel/s1180x940_jfs/t1/168384/6/4128/264271/600e9ddfE4ca4f94c/3e25659f3474c19e.png.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },{
            href: 'http://www.baidu.com',
            src: 'https://img20.360buyimg.com/pop/s1180x940_jfs/t1/161738/21/1114/76533/5ff437efEa24ac2f5/2a79047e1e3f805a.jpg.webp',

            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img12.360buyimg.com/babel/s1180x940_jfs/t1/168384/6/4128/264271/600e9ddfE4ca4f94c/3e25659f3474c19e.png.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img20.360buyimg.com/pop/s1180x940_jfs/t1/161738/21/1114/76533/5ff437efEa24ac2f5/2a79047e1e3f805a.jpg.webp',

            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img12.360buyimg.com/babel/s1180x940_jfs/t1/168384/6/4128/264271/600e9ddfE4ca4f94c/3e25659f3474c19e.png.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img12.360buyimg.com/babel/s1180x940_jfs/t1/168384/6/4128/264271/600e9ddfE4ca4f94c/3e25659f3474c19e.png.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },{
            href: 'http://www.baidu.com',
            src: 'https://img20.360buyimg.com/pop/s1180x940_jfs/t1/161738/21/1114/76533/5ff437efEa24ac2f5/2a79047e1e3f805a.jpg.webp',

            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img12.360buyimg.com/babel/s1180x940_jfs/t1/168384/6/4128/264271/600e9ddfE4ca4f94c/3e25659f3474c19e.png.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img20.360buyimg.com/pop/s1180x940_jfs/t1/161738/21/1114/76533/5ff437efEa24ac2f5/2a79047e1e3f805a.jpg.webp',

            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img12.360buyimg.com/babel/s1180x940_jfs/t1/168384/6/4128/264271/600e9ddfE4ca4f94c/3e25659f3474c19e.png.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img12.360buyimg.com/babel/s1180x940_jfs/t1/168384/6/4128/264271/600e9ddfE4ca4f94c/3e25659f3474c19e.png.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },{
            href: 'http://www.baidu.com',
            src: 'https://img20.360buyimg.com/pop/s1180x940_jfs/t1/161738/21/1114/76533/5ff437efEa24ac2f5/2a79047e1e3f805a.jpg.webp',

            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img12.360buyimg.com/babel/s1180x940_jfs/t1/168384/6/4128/264271/600e9ddfE4ca4f94c/3e25659f3474c19e.png.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img20.360buyimg.com/pop/s1180x940_jfs/t1/161738/21/1114/76533/5ff437efEa24ac2f5/2a79047e1e3f805a.jpg.webp',

            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img12.360buyimg.com/babel/s1180x940_jfs/t1/168384/6/4128/264271/600e9ddfE4ca4f94c/3e25659f3474c19e.png.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
          {
            href: 'http://www.baidu.com',
            src: 'https://img12.360buyimg.com/babel/s1180x940_jfs/t1/168384/6/4128/264271/600e9ddfE4ca4f94c/3e25659f3474c19e.png.webp',
            title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
            price: '59.00',
            coll: '329',
          },
        ],
      },
      curType: 'pop',
      position: {},
      tabControlStyle:{},
      offsetTop:0,
      count:0
    }
  },
  computed:{
    showBack(){
      return this.position.y < -1000;
    }
  },
  methods: {
    scroll(position)
    {
      this.position = position;
      console.log(this.count++);
      // 什么时候要吸顶?
      this.tabControlStyle = -this.position.y >= this.offsetTop ? {
        position:'relative',
        top:-this.position.y - this.offsetTop +'px',
        left:0,
        right:0
      }:{}
    },
    pullingUp()
    {
      console.log('上拉加载更多');
      for (let i = 0; i < 10; i++)
      {
        this.goods[this.curType].push({
              href: 'http://www.baidu.com',
              src: 'https://img30.360buyimg.com/pop/s1180x940_jfs/t1/167925/25/3595/80793/60091463E8d848b0c/2a0536b9d3e33a9b.jpg.webp',
              title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
              price: '59.00',
              coll: '329',
            },
            {
              href: 'http://www.baidu.com',
              src: 'https://img20.360buyimg.com/pop/s1180x940_jfs/t1/161738/21/1114/76533/5ff437efEa24ac2f5/2a79047e1e3f805a.jpg.webp',
              title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
              price: '59.00',
              coll: '329',
            },
            {
              href: 'http://www.baidu.com',
              src: 'https://img30.360buyimg.com/pop/s1180x940_jfs/t1/167925/25/3595/80793/60091463E8d848b0c/2a0536b9d3e33a9b.jpg.webp',
              title: '2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭2018秋季新款韩版百搭',
              price: '59.00',
              coll: '329',
            });
      }
      this.$refs.scroll.finishPullUp();
    },
    tabClick(index)
    {
      switch (index)
      {
        case 0:
          this.curType = 'pop';
          break;
        case 1:
          this.curType = 'new';
          break;
        case 2:
          this.curType = 'deli';
          break;
      }
    },
    backTop(){
      this.$refs.scroll.backTop();
    },
  },
  mounted() {
    this.offsetTop = this.$refs.tabControl.$el.offsetTop;
    let refresh = debounce(this.$refs.scroll.refresh);
    this.$bus.$on('itemImgLoad',() => {
      refresh();
    })
  }
}
</script>

<style scoped>
#home {
  height: 100vh;
}

.scroll {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
