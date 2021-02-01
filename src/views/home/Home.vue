<template>
  <div id="home">
    <home-top/>
    <tab-control class="placeHolder"
                 v-show="showPlaceHolder"
                 :titles="['流行','新款','精选']" :disabled="scrolling"
                 ref="tabControl1"
                 @tabClick="tabClick"/>
    <scroll class="scroll"
            ref="scroll"
            @scroll="scroll" @scrollEnd="scrollEnd" @pullingUp="pullingUp">
      <home-swiper :swiper-items="swiperItems"
                   @SwiperHasLoad="SwiperHasLoad"/>
      <home-reco :recommends="recommends"/>
      <tab-control class="tab-control"
                   :titles="['流行','新款','精选']" :disabled="scrolling"
                   ref="tabControl2"
                   @tabClick="tabClick"/>
      <good-list :goods="goods" :type="curType"/>
    </scroll>
    <back-top v-show="showBack"
              @click.native="backTop"/>
  </div>
</template>

<script>
import HomeTop from "./children/HomeTop";
import Scroll from "components/common/scroll/Scroll";
import HomeSwiper from "./children/HomeSwiper";
import HomeReco from "./children/HomeReco";
import TabControl from "components/content/TabControl";
import GoodList from "components/content/goods/GoodList";
import BackTop from "components/content/backtop/BackTop";

import {debounce} from "common/utils";

export default {
  name: "Home",
  components: {
    HomeTop,
    Scroll,
    HomeSwiper,
    HomeReco,
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
      position: {
        pop: {},
        new: {},
        deli: {}
      },
      offsetTop: 0,
      showPlaceHolder: false,
      scrolling: false
    }
  },
  computed: {
    showBack()
    {
      return this.position[this.curType].y < -1000;
    },
  },
  methods: {
    tabClick(index)
    {
      // 没有滚完不能切换
      if (this.scrolling) return
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
      this.showPlaceHolder ? this.$refs.tabControl2.currentIndex = index :
          this.$refs.tabControl1.currentIndex = index;
      // 要让他算完高度后再滑动 如果高度不足就滑动的话会触发下拉加载更多
      this.$refs.scroll.scrollTo(this.position[this.curType],0);
    },
    SwiperHasLoad()
    {
      this.offsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
    scroll(position)
    {
      this.scrolling = true;
      this.showPlaceHolder = -position.y >= this.offsetTop;
      if (this.showPlaceHolder)
      {
        for (const positionKey in this.position)
        {
          if (positionKey === this.curType)
          {
            this.position[positionKey] = position;
          } else
          {
            this.position[positionKey] = {
              ...this.position[positionKey],
              y:Math.min(-this.offsetTop,this.position[positionKey].y)
            }
          }
        }
      }else
      {
        for (const positionKey in this.position)
        {
          this.position[positionKey] = position;
        }
      }
    },
    scrollEnd()
    {
      this.scrolling = false;
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
    backTop()
    {
      this.$refs.scroll.scrollTo({x: 0,y: 0},500);
    },

  },
  mounted()
  {
    let refresh = debounce(this.$refs.scroll.refresh);
    this.$bus.$on('itemImgLoad',() =>
    {
      refresh();
    })
  },
}
</script>

<style scoped>
#home {
  height: 100vh;
}

.placeHolder {
  position: fixed;
  top: 44px;
  z-index: 10;
  left: 0;
  right: 0;
}

.scroll {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
