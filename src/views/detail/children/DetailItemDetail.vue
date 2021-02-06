<template>
  <div class="item-detail">
    <div v-for="item in itemDetail" :key="item.key" v-show="item.list && item.list.length > 0">
      <list-title :title="item.key" />
      <div class="detail-list">
        <img class="detail-image" v-for="src in item.list" :key="src" :src="src" @load="itemImgLoad"/>
      </div>
    </div>
  </div>
</template> 

<script>
import ListTitle from 'components/common/title/ListTitle'

export default {
  name: "DetailItemDetail",
  props: {
    itemDetail: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods:{
    itemImgLoad(){
      this.$bus.$emit('itemImgLoad');
    }
  },
  components:{
    ListTitle
  }
};
</script>
<style scoped>
.detail-image{
  width: 100%;
  vertical-align: middle;
}
</style>