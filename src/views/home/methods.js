import { GoodData } from "network/home";

export default {
  tabClick(index) {
    let { scroll } = this.$refs,
      preScroll = this.position[this.curType],
      offsetTop = this.offsetTop;
    scroll.toggleScroll();
    // 在切换和refresh时候会发生滚动! 所以需要提前取消监听
    switch (index) {
      case 0:
        this.curType = "pop";
        break;
      case 1:
        this.curType = "new";
        break;
      case 2:
        this.curType = "sell";
        break;
    }
    let { tabControl2, tabControl1 } = this.$refs;
    tabControl2.currentIndex = index;
    tabControl1.currentIndex = index;
    this.$nextTick(() => {
      scroll.refresh();
      // let target;
      // // 如果placeHolder未出现的话 就回去
      // if (-preScroll < offsetTop) {
      //   target = preScroll;
      //   console.log('比offsetTop小',target);
      // } else {
      //   target = Math.min(this.position[this.curType],-offsetTop);
      //   console.log('比offsetTop大',target);
      // }
      scroll.scrollTo({ x: 0, y: this.position[this.curType] }, 0);
      scroll.toggleScroll();
    });
  },
  SwiperHasLoad() {
    this.offsetTop = this.$refs.tabControl2.$el.offsetTop;
  },
  scroll(position) {
    this.showPlaceHolder = -position.y >= this.offsetTop;
    this.isShowBT = position.y < -1000;

    if (this.showPlaceHolder) {
      Object.keys(this.position).forEach(key => {
        if (key === this.curType) {
          this.position[this.curType] = position.y;
        } else {
          this.position[key] = Math.min(this.position[key], -this.offsetTop);
        }
      });
    } else {
      Object.keys(this.position).forEach(key => {
        this.position[key] = position.y;
      });
    }
  },
  pullingUp() {
    this.goods[this.curType].page++;
    this.getGoodData(this.curType);
    this.$refs.scroll.finishPullUp();
  },
  backTop() {
    this.$refs.scroll.scrollTo({ x: 0, y: 0 }, 500);
  },
  // 请求数据
  async getGoodData(type) {
    let response = await GoodData(type, this.goods[type].page);
    // ...是展开运算符 它可以把数组[1,2,3] 变成 1,2,3
    this.goods[type].list.push(...response.data.list);
  }
};
