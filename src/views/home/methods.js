import { GoodData } from 'network/home'

export default {
  tabClick(index) {
    // 没有滚完不能切换
    if (this.scrolling) return
    switch (index) {
      case 0:
        this.curType = 'pop';
        break;
      case 1:
        this.curType = 'new';
        break;
      case 2:
        this.curType = 'sell';
        console.log("aaa")
        break;
    }
    this.showPlaceHolder ? this.$refs.tabControl2.currentIndex = index :
      this.$refs.tabControl1.currentIndex = index;
    this.$refs.scroll.onceRefresh();
    this.$refs.scroll.offScroll();
  },
  refresh() {
    let scroll = this.$refs.scroll;
    scroll.onScroll();
    scroll.scrollTo(this.position[this.curType], 0);
  },
  SwiperHasLoad() {
    console.log('SwiperHasLoad');
    this.offsetTop = this.$refs.tabControl2.$el.offsetTop;
  },
  scroll(position) {
    console.log('滚了');
    this.scrolling = true;
    this.showPlaceHolder = -position.y >= this.offsetTop;
    if (this.showPlaceHolder) {
      for (const positionKey in this.position) {
        if (positionKey === this.curType) {
          this.position[positionKey] = position;
        } else {
          this.position[positionKey] = {
            ...this.position[positionKey],
            y: Math.min(-this.offsetTop, this.position[positionKey].y)
          }
        }
      }
    } else {
      for (const positionKey in this.position) {
        this.position[positionKey] = position;
      }
    }
  },
  scrollEnd() {
    this.scrolling = false;
  },
  // 监听到Scroll发出pullingUp事件时
  pullingUp() {
    console.log('上拉加载更多')
    this.goods[this.curType].page++;
    this.getGoodData(this.curType)
    this.$refs.scroll.finishPullUp();
    this.$refs.scroll.disable();
  },
  backTop() {
    this.$refs.scroll.scrollTo({ x: 0, y: 0 }, 500);
  },
  // 请求数据
  getGoodData(type) {
    console.log(this.goods[type].page);
    GoodData(type, this.goods[type].page).then(response => {
      this.goods[type].list.push(...response.data.list);
    })
  },
}