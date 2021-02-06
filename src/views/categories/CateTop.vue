<template>
  <h2>
      {{item.name.firstName}}
  </h2>
</template>

<script>
export default {
  name:'CateTop',
  props:{
    item:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  mounted(){
  }
}
</script>

<style scoped>
.slot{
  font-size: 50px;
}
</style>