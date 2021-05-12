import { GoodData } from "network/home";

export default {
  tabClick(index) {
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
  },
  SwiperHasLoad() {
    this.offsetTop = this.$refs.tabControl2.$el.offsetTop;
  },
  scroll(position) {
    this.showPlaceHolder = -position.y >= this.offsetTop;
    this.isShowBT = position.y < -1000;
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
