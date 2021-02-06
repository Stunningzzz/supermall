import axios from "axios";


export function request(config)
{
	const instance = new axios.create({
		baseURL:'http://123.207.32.32:8000/api/h8',
		timeout:5000
	});
	instance.interceptors.response.use(response => {
		return response.data;
	},error => {
		throw new Error('网络请求错误');
	})
	return instance(config);
}
