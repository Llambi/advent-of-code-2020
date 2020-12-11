export function findNumberOfCorrectPasswords(input: string[]): number {
	return input
		.map((obj) => {
			const [rules, password] = obj.split(':').map((x) => x.trim());
			const letter = rules.slice(rules.length - 1);
			const [firstPos, secondPos] = rules
				.slice(0, rules.length - 1)
				.split('-')
				.map((x) => +x.trim());

			const isAtPositionOne = password[firstPos - 1] === letter ? 0 : 1;
			const isAtPositionTwo = password[secondPos - 1] === letter ? 0 : 1;
			if (isAtPositionOne + isAtPositionTwo === 1) {
				return 0;
			}

			return 1;
		})
		.filter((x) => x === 0).length;
}
