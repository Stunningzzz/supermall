<template>
  <cate-top :item="{name:{firstName:'luzhihao'}}"></cate-top>
</template>

<script>
import CateTop from "./CateTop";

export default {
  name: "Categories",
  components: {
    CateTop
  },
  computed:{
    str(){
      return 123
    }
  },
  data() {
    return {
      num:1
    };
  },
  filters:{
    ten(value){
      return value*10
    }
  }
};
</script>

<style scoped>
.red {
  color: red;
}
.fs {
  font-size: 50px;
}
</style>
