export function get2020Multiplication(input: number[]): number {
	const result = input
		.map((x: number) => {
			const leftTo2020 = 2020 - x;
			const y = input.find((y) => y === leftTo2020);
			return y ? y * x : -1;
		})
		.find((result) => -1 !== result);
	return result ?? -1;
}
