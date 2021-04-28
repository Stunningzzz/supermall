<template>
  <div class="item-detail" v-if="itemDetail">
    <!-- 没有图片的就不展示 -->
    <div v-for="item in itemDetail" :key="item.key">
      <list-title :title="item.key" />
      <div class="detail-list">
        <img class="detail-image" v-for="src in item.list" :key="src" v-lazy="src" @load="DetailImgLoad"/>
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
    DetailImgLoad(){
      this.$emit('DetailImgLoad');
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