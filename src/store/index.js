import Vue from "vue";
import VueX from "vuex";
import {
  ADD_COUNT,
  ADD_CARTLIST,
  ITEM_CHECK_CLICK,
  ALL_SELECT_CLICK
} from "./mutation-types";

Vue.use(VueX);

let store = new VueX.Store({
  state: {
    cartList: []
  },
  actions: {
    addCart({ state, commit }, payload) {
      return new Promise((resolve, reject) => {
        let res = state.cartList.find(v => v.iid === payload.iid);
        if (res) {
          commit(ADD_COUNT, res);
          resolve('商品数量+1')
        } else {
          commit(ADD_CARTLIST, payload);
          resolve('添加购物车成功')
        }
      });
    }
  },
  mutations: {
    [ADD_COUNT](state, payload) {
      payload.count++;
    },
    [ADD_CARTLIST]({ cartList }, payload) {
      payload.isCheck = true;
      cartList.push(payload);
    },
    [ITEM_CHECK_CLICK](state, payload) {
      payload.isCheck = !payload.isCheck;
    },
    [ALL_SELECT_CLICK]({ cartList }, payload) {
      cartList.forEach(item => {
        item.isCheck = payload;
      });
    }
  },
  getters: {
    allSelectState({ cartList }) {
      return cartList.length > 0 && cartList.every(v => v.isCheck);
    },
    priceSum({ cartList }) {
      return (
        "¥" +
        cartList
          .reduce((reducer, item) => {
            if (item.isCheck) {
              let price = item.count * parseFloat(item.price.slice(1));
              return reducer + price;
            } else {
              return reducer;
            }
          }, 0)
          .toFixed(2)
      );
    },
    cartLength({ cartList }) {
      return cartList.length;
    },
    checkedCount({ cartList }) {
      return cartList.filter(item => item.isCheck).length;
    }
  }
});

export default store;
