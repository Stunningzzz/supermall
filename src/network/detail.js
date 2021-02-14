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
	constructor(columns, {title,oldPrice,lowNowPrice,discountDesc}, shopInfo) {
		this.title = title;
		this.prePrice = oldPrice;
		this.curPrice = '¥' + lowNowPrice;
		this.discDesc = discountDesc;
		this.columns = columns;
		this.services = shopInfo.services.slice(-3);
	}
}

export class ShopInfo {
	constructor({name,shopLogo,shopUrl,cSells,cGoods,score}) {
		this.shopName = name;
		this.shopLogo = shopLogo;
		this.shopUrl = shopUrl;
		this.sells = cSells;
		this.goods = cGoods;
		this.score = score;
	}
}

export class ItemParams { 
	constructor({info,rule})
	{
		if (!info && !rule) {
			return;
		}
		this.info = info;
		this.rule = rule;
	}
}