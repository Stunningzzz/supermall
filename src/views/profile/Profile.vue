<template>
  <div id="profile">
    <profile-top />
    <profile-login />
    <profile-balance />
    <profile-bottom />
  </div>
</template>

<script>
import ProfileTop from "./childComps/ProfileTop";
import ProfileLogin from "./childComps/ProfileLogin";
import ProfileBalance from "./childComps/ProfileBalance";
import ProfileBottom from "./childComps/ProfileBottom";

export default {
  name: "Profile",
  components: {
    ProfileTop,
    ProfileLogin,
    ProfileBalance,
    ProfileBottom,
  },
};
</script>

<style scoped>
 
</style>
