export async function getChats(url: string) {
	return await fetch(url).then((response) => response.json());
}
