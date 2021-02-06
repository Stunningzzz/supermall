<template>
  <div class="detail-recommend">
    <good-list :goods="recommends" />
  </div>
</template>

<script>
import GoodList from 'components/content/goods/GoodList'

export default {
  name:'DetailRecommends',
  components:{
    GoodList
  },
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
</style>