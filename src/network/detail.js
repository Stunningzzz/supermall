import { request } from "./request";

export function DetailData(iid) {
	return request({
		url: '/detail',
		params: {
			iid
		}
	})
}
export function DetailRecommend() {
	return request({
		url:'/recommend'
	})
}
export class ItemInfo {
	constructor(columns, itemInfo, shopInfo) {
		this.title = itemInfo.title;
		this.prePrice = itemInfo.oldPrice;
		this.curPrice = '¥' + itemInfo.lowNowPrice;
		this.discDesc = itemInfo.discountDesc;
		this.columns = columns;
		this.services = shopInfo.services.slice(-3);
	}
}

export class ShopInfo {
	constructor(shopInfo) {
		this.shopName = shopInfo.name;
		this.shopLogo = shopInfo.shopLogo;
		this.shopUrl = shopInfo.shopUrl;
		this.sells = shopInfo.cSells;
		this.goods = shopInfo.cGoods;
		this.score = shopInfo.score;
	}
}

export class ItemParams { 
	constructor(itemParams)
	{
		this.info = itemParams.info;
		this.rule = itemParams.rule;
	}
}