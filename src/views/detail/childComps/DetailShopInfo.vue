<template>
  <div class="detail-shop-info" v-if="shopInfo">
    <img :src="shopInfo.shopLogo" class="shop-img" />
    <a :href="shopInfo.shopUrl" class="shop-url">
      {{ shopInfo.shopName }}
    </a>
    <div class="shop-eval">
      <div class="shop-eval-left">
        <div class="eval-item">
          <div class="value">
            {{ shopInfo.sells | dataFormat }}
          </div>
          <div class="desc">总销量</div>
        </div>
        <div class="eval-item">
          <div class="value">
            {{ shopInfo.goods | dataFormat }}
          </div>
          <div class="desc">全部宝贝</div>
        </div>
      </div>
      <div>
        <table class="score">
          <tr v-for="item in shopInfo.score" :key="item.name">
            <td>
              {{ item.name }}
            </td>
            <td
              :style="
                item.isBetter ? { color: '#EF4142' } : { color: '#4B9B10' }
              "
            >
              {{ item.score }}
            </td>
            <td
              class="score-eval"
              :style="
                item.isBetter ? { color: '#EF4142' } : { color: '#4B9B10' }
              "
            >
              {{ item.isBetter ? "高" : "低" }}
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-btn-outer">
      <div class="shop-btn">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    dataFormat(value) {
      return value >= 10000 ? (value / 10000).toFixed(2) + "万" : value;
    },
  },
  methods: {
    scoreStyle() {
      return {};
    },
  },
};
</script>

<style scoped>
.detail-shop-info {
  padding: 20px 10px;
}
.shop-img {
  width: 40px;
  height: 40px;
  margin-left: 3px;
  vertical-align: middle;
}
.shop-url {
  margin-left: 5px;
}
.shop-eval {
  margin: 0 8px;
  display: flex;
}
.shop-eval > div {
  display: flex;
  text-align: center;
  flex: 1;
}
.shop-eval-left {
  margin-top: 28px;
}
.eval-item {
  flex: 1;
}
.eval-item:last-child .value {
  border-right: 1px solid rgba(63, 60, 60, 0.1);
}
.shop-eval .value {
  font-size: 18px;
  margin-bottom: 5px;
}
.shop-eval .desc {
  font-size: 12px;
}
.score {
  margin-left: 13px;
  font-size: 13px;
}
.score td {
  padding: 5px;
}
.shop-btn-outer {
  padding: 15px;
  border-bottom: 5px solid #ededed;
}
.shop-btn {
  width: 140px;
  line-height: 25px;
  margin: 0 auto;
  font-size: 13px;
  border-radius: 10000px;
  
  text-align: center;
  background-color: #f3f5f9;
}
</style>