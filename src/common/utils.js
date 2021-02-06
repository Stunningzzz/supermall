export function debounce(delay,...cbs)
{
	let timer;
	return function ()
	{
		clearTimeout(timer);
		timer = setTimeout(() => {
			cbs.forEach(cb => cb('imgHasLoad'));
		},delay)
	}
}

export function DateFormat(date,fmt) {
	let regs = ['y','M','d','h','m','s'];
	let cnts = [
		date.getFullYear(),
		date.getMonth() + 1,
		date.getDate(),
		date.getHours(),
		date.getMinutes(),
		date.getSeconds()
	]
	for(let i = 0; i < regs.length; i++)
	{
		regs[i] = new RegExp(`${regs[i]}+`);
    cnts[i] = String(cnts[i]);
    if(cnts[i].length < 2)
    {
      cnts[i] = '0' + cnts[i];
    }
		fmt = fmt.replace(regs[i],$1 => String(cnts[i]).slice(-$1.length));
	}
  return fmt;
}