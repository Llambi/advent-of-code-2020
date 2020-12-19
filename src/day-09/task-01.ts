export function findVulnerability(input: number[], preamble: number) {
	for (let i = preamble; i < input.length; i++) {
		const code = input[i];
		const codeOptions = input.slice(i - preamble, i);
		const vulnerability = codeOptions.reduce((flag, x) => {
			const leftToCode = code - x;
			const y = codeOptions.find((y) => x !== y && leftToCode === y);
			if (y) flag = false;
			return flag;
		}, true);
		if (vulnerability) return code;
	}
	return -1;
}
