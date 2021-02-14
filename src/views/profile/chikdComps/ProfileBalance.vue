<template>
  <div class="profile-balance">
    <div class="balance-item" v-for="item in items">
        <div>
          <span class="item-num">
            {{item.num}}
          </span>
          {{item.text}}
        </div>
        <div>
          {{item.desc}}
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileBalance",
  data(){
    return {
      items:[
        {num:'0.00',text:'元',desc:'我的余额'},
        {num:'0',text:'个',desc:'我的优惠'},
        {num:'0',text:'分',desc:'我的积分'},
      ]
    }
  }
};
</script>

<style scoped>
.profile-balance {
  height: 100px;
  background-color: #fff;
  border-bottom: 5px solid #ededed;
  display: flex;
}
.balance-item{
  text-align: center;
  margin: 20px 0;
  flex: 1;
  border-right: 1px solid rgba(63, 60, 60, 0.1);
  font-size: 13px;
}
.item-num{
  line-height: 40px;
  margin-right: -5px;
  font-size: 23px;
  font-weight: bold;
  color: #FF5F3E;
}
</style>