<template>
  <div class="tab-bar-item" @click="itemClick">
    <div class="icon-img" v-if="!isActive">
      <slot name="icon-img"></slot>
    </div>
    <div class="icon-img" v-else>
      <slot name="icon-img-active"></slot>
    </div>
    <div class="icon-text" :style="iconText">
      <slot name="icon-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path:String,
    textColor:{
      type:String,
      default:'#d81e06'
    }
  },
  computed:{
    iconText(){
      return this.isActive ? {color:this.textColor} : {};
    },
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1;
    }
  },
  methods:{
    itemClick(){
      if (this.$route.path !== this.path)
      {
        this.$router.push(this.path);
      }
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex-grow: 1;
  width: 64px;
  text-align: center;
  color: #707070;
}
.icon-img {
  width: 30px;
  height: 30px;
  margin: 3px auto 0;
}


</style>
