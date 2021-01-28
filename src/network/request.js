import axios from "axios";

export function request(config)
{
	const instance = new axios.create({
		baseURL:'',
		timeout:5000
	});

	return instance(config);
}
