export const getCountries = (url: string) => {
	return fetch(url).then((res) => res.json());
};

export const getQr = async (url: string) => {
	return fetch(url).then((res) => res.json());
};
