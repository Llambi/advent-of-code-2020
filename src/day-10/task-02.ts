export function countWaysToConnect(input: number[]) {
	let result = 1;
	let lastAdapter = 0;
	let adapters = input.sort((a, b) => a - b);
	let length = 0;
	adapters = [...adapters, adapters[adapters.length - 1] + 3];

	for (let i = 0; i < adapters.length; i += 1) {
		const adapter = adapters[i];
		const diff = adapter - lastAdapter;

		if (diff < 3) {
			length += 1;
		} else if (length) {
			result *= Math.pow(2, length - 1) - (3 < length ? 1 : 0);
			length = 0;
		}
		lastAdapter = adapter;
	}
	return result;
}
