// 注意对于混入 data,components,computed 和 生命周期函数都是合并 
// 但是methods里面的方法是替换!!!
import BackTop from 'components/content/backtop/BackTop'

export const backTopMixin = {
  components:{
    BackTop
  },
  // 之前的代码是 在data中有一个cur对象 每次scroll就为它赋新值
  // 而cur是为了什么? 为了在computed里面用它来取出它里面的y 也就是用它来判断isShowBT的值
  // 那既然目的是为了确定showBT的值 那为什么还要多此一举地另外搞一个cur呢 直接在scroll里面确定showBT的值不就好了吗?
  data(){
    return  {
      isShowBT: false
    }
  },
  methods: {
    backTop() {
      this.$refs.scroll.scrollTo({ x: 0, y: 0 }, 500);
    }
  },
}
