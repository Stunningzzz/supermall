<template>
  <top-nav-bar class="cart-top">
    <div slot="center" >
      <span>购物车({{cartLength}})</span>
    </div>
  </top-nav-bar>
</template>

<script>
import TopNavBar from 'components/common/topnavbar/TopNavBar'
import {mapGetters} from 'vuex'


export default {
  name:'CartTop',
  components:{
    TopNavBar,
  },
  computed:{
    ...mapGetters(['cartLength'])
  }
}
</script>
<style scoped>
  .cart-top{
    background-color: var(--color-tint);
    color: #fff;
  }
</style>