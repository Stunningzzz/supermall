import Vue from "vue";
import VueX from "vuex";

Vue.use(VueX);

let store = new VueX.Store({
	state:{
		homeTypeIndex:0,
	},
	mutations:{
		homeTabClick(state,index){
			state.homeTypeIndex = index;
		}
	},
});

export default store;
