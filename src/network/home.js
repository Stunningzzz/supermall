import {request} from "./request";



export function MultiData()
{
	return request({
		url:'/home/multidata',
	})
}