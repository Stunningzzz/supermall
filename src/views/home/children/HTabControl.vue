<template>
  <div class="tab-control">
    <div v-for="(title,index) in titles" @click="itemClick(index)" >
      <span class="tab-items" :class="{active:index === homeTypeIndex}">
        {{ title }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props:{
    titles:{
      type:Array,
      default(){
        return [];
      }
    }
  },
  computed:{
    homeTypeIndex(){
      return this.$store.state.homeTypeIndex;
    }
  },
  methods:{
    itemClick(index){
      this.$store.commit('homeTabClick',index);
    }
  }
}
</script>

<style scoped>
  .tab-control{
    background-color: var(--color-background);
    display: flex;
    text-align:center;
    padding-bottom: 10px
  }
  .tab-control div{
    line-height: 25px;
    padding-top: 8px;
    font-size: 14px;
    flex: 1;
  }
  .tab-items{
    padding:0 4px 5px;
  }
  .active{
    color: var(--color-tint);
    border-bottom: var(--color-tint) 2px solid;
  }
</style>