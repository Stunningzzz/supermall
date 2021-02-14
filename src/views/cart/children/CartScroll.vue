<template>
  <scroll class="cart-scroll" ref="scroll">
    <cart-item v-for="item in $store.state.cartList" :item="item" :key="item.iid"/>
  </scroll>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll';
import CartItem from './CartItem'

export default {
  name:'CartScroll',
  components:{
    Scroll,
    CartItem
  },
  activated(){
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
  .cart-scroll{
    position: absolute;
    top: 44px;
    bottom: 98px;
    left: 0;
    right: 0;
    overflow: hidden;
    background-color: #EDEDED;
  }
</style>