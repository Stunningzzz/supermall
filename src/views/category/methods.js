import { getCateInfo, getCateDetail } from "network/category";
export default {
    // 请求整个content数据
    getContent() {
      let { maitKey, miniWallkey } = this.tabs[this.tabIndex];
      // 请求上面部分的数据
      getCateInfo(maitKey).then((data) => {
        // 在最后(而非中间) 如果是通过数组[下标] = xxx设置的话不是响应式的修改
        this.$set(this.content,this.tabIndex,data.data.list);
      });

      // 请求下面部分的列表数据
      ["pop", "new", "sell"].forEach((type) => {
        getCateDetail(miniWallkey, type).then((data) => {
          this.detail[this.tabIndex][type] = data.map((item) => {
            item.price = "¥" + item.price;
            item.coll = item.sale;
            return item;
          });
        });
      });
    },
    tabClick(index) {
      if (this.tabIndex === index) {
        return;
      }
      let {scroll,tabControl1,tabControl2} = this.$refs;
      // 初始化detailType和tabControl
      this.detailType = "pop" 
      tabControl1.currentIndex = 0;
      tabControl2.currentIndex = 0;
      this.tabIndex = index;
      // 如果content[index]不为null则说明有数据不需要请求
      this.content[index] || this.getContent();
      scroll.scrollTo({x:0,y:0},0);
    },
    scroll(position){
      console.log('滚了');
      this.isShowPH = position.y < -this.offsetTop;
    },
    refresh(){
      console.log('this.offsetTop ---- ',this.offsetTop);
      this.offsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
    contentClick(index) {
      let type;
      switch (index) {
        case 0:
          type = "pop";
          break;
        case 1:
          type = "new";
          break;
        case 2:
          type = "sell";
          break;
      }
      // 还是一样的问题 通过下标改数组不是响应式的
      this.detailType = type;
      let { tabControl1,tabControl2 } = this.$refs;
      tabControl1.currentIndex = index;
      tabControl2.currentIndex = index;
    },
  }