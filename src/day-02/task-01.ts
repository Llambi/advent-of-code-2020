export function findNumberOfCorrectPasswords(input: string[]): number {
	return input
		.map((obj) => {
			const [rules, password] = obj.split(':').map((x) => x.trim());
			const letter = rules.slice(rules.length - 1);
			const [min, max] = rules
				.slice(0, rules.length - 1)
				.split('-')
				.map((x) => +x.trim());
			const repetitions = +(password.match(new RegExp(letter, 'g')) || []).length;
			return min <= repetitions && repetitions <= max ? 0 : 1;
		})
		.filter((x) => x === 0).length;
}
