import {request} from "./request";

export function MultiData()
{
	return request({
		url:'/home/multidata',
	})
}

export function GoodData(type,page)
{
	return request({
		url:`home/data?type=${type}&page=${page}`
	})
}