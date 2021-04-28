import Vue from "vue";
import VueRouter from "vue-router";

const Categories = () => import ("views/category/Category");
const Home = () => import ("views/home/Home");
const ShoppingCart = () => import ("views/cart/ShoppingCart");
const Profile = () => import ("views/profile/Profile");
const Detail = () => import ("views/detail/Detail");


Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		component: Home
	},
	{
		path: '/categories',
		component: Categories
	},
	{
		path: '/shopping-cart',
		component: ShoppingCart
	},
	{
		path: '/profile',
		component: Profile
	},
	{
		path:'/detail/:iid',
		component:Detail
	}
];

let vueRouter = new VueRouter({
	routes,
	mode: 'hash',
});

export default vueRouter;