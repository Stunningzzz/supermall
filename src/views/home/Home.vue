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
            @scroll="scroll" @scrollEnd="scrollEnd" @pullingUp="pullingUp" @refresh="refresh">
      <home-swiper :banner="banner"
                   @SwiperHasLoad="SwiperHasLoad"/>
      <home-reco :recommends="recommend"/>
      <home-weekly />
      <tab-control class="tab-control"
                   :titles="['流行','新款','精选']" :disabled="scrolling"
                   ref="tabControl2"
                   @tabClick="tabClick"/>
      <good-list  :goods="goods" :type="curType"
                 @ListLoad="ListLoad" />
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
import HomeWeekly from "./children/HomeWeekly";
import TabControl from "components/content/TabControl";
import GoodList from "components/content/goods/GoodList";
import BackTop from "components/content/backtop/BackTop";
import {debounce} from "common/utils";

import {MultiData,GoodData} from "network/home";
import {goods} from "./data";


export default {
  name: "Home",
  components: {
    HomeWeekly,
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
      banner: {},
      recommend: {},
      keywords: [],
      goods: {
        pop:{list:[],page:1},
        new:{list:[],page:1},
        sell:{list:[],page:1},
      },
      curType: 'pop',
      position: {
        pop:{},
        new:{},
        sell:{}
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
          this.curType = 'sell';
          break;
      }
      this.showPlaceHolder ? this.$refs.tabControl2.currentIndex = index :
          this.$refs.tabControl1.currentIndex = index;
      this.$refs.scroll.onceRefresh();
      this.$refs.scroll.offScroll();
    },
    refresh()
    {
      let scroll = this.$refs.scroll;
      scroll.scrollTo(this.position[this.curType],0);
      scroll.onScroll();
    },
    SwiperHasLoad()
    {
      console.log('SwiperHasLoad');
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
              y: Math.min(-this.offsetTop,this.position[positionKey].y)
            }
          }
        }
      } else
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
    ListLoad()
    {
      this.$refs.scroll.refresh();
    },
    pullingUp()
    {
      console.log('上拉加载更多')
      this.getGoodData(this.curType)
      this.$refs.scroll.finishPullUp();
    },
    backTop()
    {
      this.$refs.scroll.scrollTo({x: 0,y: 0},500);
    },
    // 请求数据
    getGoodData(type)
    {
      GoodData(type,this.goods[type].page).then(data => {
        this.goods[type].list.push(...data.list);
      })
    },
  },
  created()
  {
    MultiData().then(data =>
    {
      this.banner = data.banner;
      this.recommend = data.recommend;
    });
    for (let type in this.goods)
    {
      this.getGoodData(type);
    }
  },
  mounted()
  {
    let refresh = debounce(this.$refs.scroll.refresh,50);
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
