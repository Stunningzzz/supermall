export function debounce(fn,delay)
{
	let timer;
	return function (...args)
	{
		clearTimeout(timer);
		timer = setTimeout(() => {
			fn.call(fn,...args);
		},delay)
	}
}