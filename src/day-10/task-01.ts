interface joltRepetitions {
	[key: number]: number;
}

export function getJoltDifirence(input: number[]) {
	input.push(0);
	const sortedInput = input.sort((a, b) => a - b);
	let brokeAdapter = false;
	const joltResult = sortedInput.reduce((dicc, adapter) => {
		const nextAdapter = input.find(
			(nextAdapter) => adapter < nextAdapter && nextAdapter <= adapter + 3,
		);
		if (!nextAdapter && adapter !== sortedInput[sortedInput.length - 1]) brokeAdapter = true;
		if (nextAdapter) {
			const jolt = nextAdapter - adapter;
			dicc[jolt] = (dicc[jolt] ?? 0) + 1;
		}
		return dicc;
	}, {} as joltRepetitions);

	if (brokeAdapter) return -1;
	return joltResult[1] * (joltResult[3] + 1);
}
