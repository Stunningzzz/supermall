<template>
  <div>
    <div ref="demo"></div>
    {{text}}
  </div>
</template>

<script>
import CateTop from "./CateTop";
import {MultiData} from 'network/home'


export default {
  name: "Categories",
  components: {
    CateTop
  },
  data(){
    return {
      item:null
    }
  },
  computed:{
    text(){
      console.log(this.item);
      return '123';
    }
  },
  created(){
    this.item = ['z','z'];
    MultiData().then(response => {
      this.item = [1,2,3,4]
    })
  },
  mounted(){
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
