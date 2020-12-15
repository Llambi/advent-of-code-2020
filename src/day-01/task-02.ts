export function get2020Multiplication(input: number[]): number {
	return (
		input
			.map((x: number) => {
				const y: number =
					input
						.map((y: number) => {
							const leftTo2020 = 2020 - y - x;
							const z = input.find((z) => z === leftTo2020);
							return z ? z * y : -1;
						})
						.find((result) => -1 !== result) || -1;
				return -1 === y ? -1 : x * y;
			})
			.find((result) => -1 !== result) || -1
	);
}
