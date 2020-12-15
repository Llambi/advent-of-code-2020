export function countAnswers(input: string) {
	return input
		.replace(/ /g, '')
		.split(/\n{2}/g)
		.map((x) => new Set([...x.replace(/\n/g, '')]).size)
		.reduce((prev, curr) => prev + curr, 0);
}
