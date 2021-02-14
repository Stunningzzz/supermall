<template>
  <div class="cart-item">
    <div class="top">
      <div class="top-left"></div>
      <div class="top-mid">
        <span class="iconfont icon-dianpu"></span>
        <span class="shopName">
          {{ item.shopName }}
        </span>
      </div>
      <div class="top-right">
        <span>领券</span>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-left">
        <check-button class="left-check" :isCheck="item.isCheck" @click.native="checkClick"/>
      </div>
      <div class="bottom-mid">
        <img :src="item.img" />
      </div>
      <div class="bottom-right">
        <p class="bottom-title">
          {{item.title}}
        </p>
        <div class="bottom-price clearfix">
          <span class="price fl">
            {{item.price}}
          </span>
          <span class="count fr">
            x{{item.count}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// img: this.topImages[0],
// shopName: this.shopInfo.shopName,
// title: this.itemInfo.title,
// price: this.itemInfo.curPrice,
// count: 1,
// iid: this.$route.params.iid
import CheckButton from 'components/common/checkbutton/CheckButton'

export default {
  name: "CartItem",
  props: {
    item: Object,
  },
  components:{
    CheckButton
  },
  methods:{
    checkClick(){
      this.$store.commit('itemCheckClick',this.item);
    }
  }
};
</script>

<style scoped>
.cart-item {
  background-color: #fff;
  margin: 10px 7px;
  border-radius: 8px;
  padding: 8px 8px 15px;
} 
.top {
  display: flex;
  height: 30px;
  margin: 5px;
}
.shopName {
  font-weight: bold;
}
.top-left,
.bottom-left{
  width: 20px;
  position: relative;
}

.top-right{
  width: 40px;
  text-align: right;
}
.top-mid {
  flex: 1;
}
.bottom{
  display: flex;
  height: 80px;
}
.left-check{
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
}
.bottom-mid {
  width: 75px;
  overflow: hidden;
}
.bottom-title{
  white-space: nowrap;
  overflow: hidden;
}
.bottom-mid img{
  width: 100%;
}
.bottom-right{
  flex: 1;
  height: 100%;
  overflow: hidden;
  position: relative;
  margin-left: 10px;
}
.bottom-title{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
}
.bottom-price{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
.price{
  color: var(--color-tint);
  margin-top: 5px;
}
.count{
  padding: 3px 5px;
  border: 1px solid rgba(0, 0, 0, .5);
  border-radius: 8px;
}

</style>