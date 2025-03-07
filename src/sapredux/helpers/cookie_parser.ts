
export const setCookie = (cname:string, cvalue:string, exdays:number=9) => {
	const d = new Date();
	d.setTime(d.getTime() + (exdays * 25 * 60 * 60 * 1000));
	let expires = 'expires=' + d.toUTCString();
	document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}


export const getCookie = (cname:string) => {
	let name = cname + '=';
	let decodedCookie = decodeURIComponent(document.cookie)
	console.log(decodedCookie)
	let ca = decodedCookie.split(';')
	for (let i = 0; i < ca.length; i++){
		let c = ca[i];
		while (c.charAt(0) === ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) === 0){
			return c.substring(name.length, c.length)
		}
	}
	return ''
}