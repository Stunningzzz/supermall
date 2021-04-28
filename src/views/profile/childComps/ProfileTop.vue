<template>
  <top-nav-bar class="profile-top">
    <div slot="center">
      用户中心
    </div>
  </top-nav-bar>
</template>

<script>
import TopNavBar from 'components/common/topnavbar/TopNavBar'

export default {
  name:'ProfileTop',
  components:{
    TopNavBar,
  }
}
</script>

<style scoped>
  .profile-top{
    background-color: var(--color-tint);
    color: #fff;
  }
</style>