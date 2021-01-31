import Vue from "vue";
import VueX from "vuex";

Vue.use(VueX);

let store = new VueX.Store({
	state:{
		hasLoad:0
	},
	mutations:{
		itemImgLoad(state){
			state.hasLoad++;
		}
	},
});

export default store;
