export default {
  jumpTo(index) {
    this.$refs.scroll.scrollTo({ x: 0, y: this.position[index] }, 0);
    this.curIndex = index;
  },
  refresh() {
    let arr = ['goods'];
    this.titles = ['商品'];
    // 参数和评论可能没有 所以要判断
    if (this.itemParams) {
      arr.push('params')
      this.titles.push('参数')
    };
    if (this.comments) {
      arr.push('comments')
      this.titles.push('评论')
    }
    arr.push('recommends');
    this.titles.push('推荐');
    this.position = Array(arr.length).fill(0);
    for (let i = 0; i < this.position.length; i++) {
      this.position[i] = -this.$refs[arr[i]].$el.offsetTop;
    }
  },
  scroll(scrollPosition) {
    let { movingDirectionY } = this.$refs.scroll.scroll,
        { curIndex, position } = this,
        y = scrollPosition.y.toFixed(2);

    if (
      movingDirectionY > 0 &&
      curIndex !== position.length - 1 &&
      y <= position[curIndex + 1]
    ) {
      this.curIndex++;
    } else if (
      movingDirectionY < 0 &&
      curIndex !== 0 && // 需要加curIndex!== 0 是为了在{x:0,y:0}时上拉还是在0 而不会变成-1
      y >= position[curIndex]
    ) {
      this.curIndex--;
    }
    this.isShowBT = position.y < -1000;
  },
  DetailImgLoad() {
    this.itemImgLoad();
  },
  async addCart() {
    let product = {
      img: this.topImages[0],
      shopName: this.shopInfo.shopName,
      title: this.itemInfo.title,
      price: this.itemInfo.curPrice,
      count: 1,
      iid: this.$route.params.iid
    };
    let message = await this.$store.dispatch('addCart', product);
    this.$toast.show(message, 1500);
  }
};
