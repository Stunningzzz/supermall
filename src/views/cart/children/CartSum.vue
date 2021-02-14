<template>
  <div class="cart-sum">
    <div class="sum-left">
      <check-button class="check-button" :isCheck="allSelectState" @click.native="checkClick"/> 
      全选
    </div>
    <div class="sum-mid">
      合计:{{priceSum}}
    </div>
    <div class="sum-right" @click="settleSum">
      结算({{checkedCount}})
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/common/checkbutton/CheckButton'
import {mapGetters} from 'vuex'
import {ALL_SELECT_CLICK} from 'store/mutation-types'

export default {
  name:'CartSum',
  components:{
    CheckButton
  },
  computed:{
    ...mapGetters(['checkedCount','priceSum','allSelectState'])
  },
  methods:{
    checkClick(){
      this.$store.commit(ALL_SELECT_CLICK,!this.$store.getters.allSelectState);
    },
    settleSum(){
      if (this.checkedCount === 0) {
        this.$toast.show('请选择购买的商品')
      }
    }
  }
}
</script>

<style scoped>
  .cart-sum{
    height: 49px;
    bottom: 49px;
    line-height: 39px;
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    background-color: #f6f6f6;
    padding: 5px 10px;
    box-shadow: 0 -1px rgba(100,100,100,.1);
  }
  .check-button{
    transform: translateY(12px);
  }
  .sum-left{
    display: flex;
    justify-content: space-between;
    width: 54px;
  }
  .sum-mid{
    flex: 1;
    text-align: right;
    padding-right: 5px;
  }
  .sum-right{
    width: 80px;
    background-color: var(--color-tint);
    color:#fff;
    text-align: center;
    padding: 2px 8px 0px;
    border-radius: 15px;
    line-height: 33px;
  }
</style>