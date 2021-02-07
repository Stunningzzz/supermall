<template>
  <div class="detail-item-info" v-if="itemInfo">
    <div class="title">
      {{ itemInfo.title }}
    </div>
    <div class="price">
      <div class="price-cur">
        {{ itemInfo.curPrice }}
      </div>
      <div class="price-pre">
        {{ itemInfo.prePrice }}
      </div>
      <div class="price-desc" v-show=" itemInfo.discDesc ">
        {{ itemInfo.discDesc }}
      </div>
    </div>
    <div class="columns">
      <div v-for="item in itemInfo.columns" :key="item" class="columns-item">
        {{ item }}
      </div>
    </div>
    <div class="services">
      <div
        v-for="item in itemInfo.services"
        :key="item.name"
        class="service-item"
      >
        <div>
          <img :src="item.icon" />
          <span>
            {{ item.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailItemInfo",
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.detail-item-info {
  padding: 10px;
  line-height: 22px;
  font-size: 13px;
  font-weight: bold;
  border-bottom: 5px solid #EDEDED;
}
.price {
  display: flex;
  margin: 5px 0 20px;
}
.price-cur {
  color: var(--color-tint);
  font-size: 20px;
  margin-right: 3px;
}
.price-pre {
  color: #9e9e9e;
  font-size: 15px;
  text-decoration: line-through;
  font-weight: normal;
  margin-top: 4px;
  margin-right: 5px;
}
.price-desc {
  color: var(--color-background);
  font-size: 12px;
  padding: 2px 8px 0;
  border-radius: 15px;
  background-color: var(--color-tint);
}
.columns{
  display: flex;
  font-weight: normal;
  margin-top: 10px;
  box-shadow: 0 1px rgba(0, 0, 0, 0.1);
}
.columns-item {
  flex: 1;
}
.columns-item:nth-child(2) {
  text-align: center;
}
.columns-item:nth-child(3) {
  text-align: right;
}
.services {
  display: flex;
  margin-top: 20px;
  font-weight: normal;
  text-align: center;
}
.service-item {
  font-size: 12px;
  width: 30px;
  flex: 1;
}
.service-item div {
  margin: 0 auto;
}
.service-item img {
  vertical-align: middle;
  margin-top: -4px;
  width: 15px;
  height: 15px;
}
</style>