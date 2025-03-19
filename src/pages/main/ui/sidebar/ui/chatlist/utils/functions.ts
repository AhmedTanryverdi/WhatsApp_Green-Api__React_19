export async function getChats(url: string) {
	const result = await fetch(url).then((response) => response.json())
	return result;
}
