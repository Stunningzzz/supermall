<template>
  <div class="profile-login">
    <div class="left">
      <div class="profile-avatar">
        <img src="~assets/img/1biaoqianA01_wode-10.svg" />
      </div>
      <div>设置头像</div>
    </div>

    <div class="profile-phone">
      <div>
        <span class="iconfont icon-shouji"></span>
        <span> 暂无绑定手机号 </span>
      </div>
      <div class="login">
        <a> 登录 </a>
        /
        <a> 注册 </a>
      </div>
    </div>
    <div>
      <span class="iconfont icon-shezhi"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileLogin",
};
</script>

<style scoped>
.profile-login {
  margin-top: 44px;
  height: 100px;
  background-color: var(--color-tint);
  color: rgba(247, 247, 247, 0.76);
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}

.profile-avatar {
  width: 60px;
  height: 60px;
  padding: 10px;
  border-radius: 50%;
  margin-bottom: 3px;
  background-color: #fff;
}

.profile-avatar img {
  display: block;
  width: 100%;
  height: 100%;
  color: var(--color-tint);
}

.login {
  margin-top: 10px;
}
.login a{
  color:rgba(247, 247, 247, 0.76)
}
.icon-shezhi {
  font-size: 30px;
}
</style>