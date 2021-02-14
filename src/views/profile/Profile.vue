<template>
  <div id="profile">
    <profile-top />
    <profile-login />
    <profile-balance />
    <profile-bottom />
  </div>
</template>

<script>
import ProfileTop from "./chikdComps/ProfileTop";
import ProfileLogin from "./chikdComps/ProfileLogin";
import ProfileBalance from "./chikdComps/ProfileBalance";
import ProfileBottom from "./chikdComps/ProfileBottom";

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
