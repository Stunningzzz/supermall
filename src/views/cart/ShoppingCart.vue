<template>
  <div id="shopping-cart">
    <cart-top />
    <cart-scroll />
    <cart-sum />
  </div>
</template>
<script>
import CartTop from "./children/CartTop";
import CartScroll from "./children/CartScroll";
import CartSum from "./children/CartSum";

export default {
  name: "ShoppingCart",
  components: {
    CartTop,
    CartScroll,
    CartSum,
  },
};
</script>

<style scoped>
#shopping-cart {
  height: 100vh;
}
</style>
