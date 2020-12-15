export function getNumberOfCorrectPassports(
	input: string,
	predicates: { [code: string]: (x: string) => boolean },
): number {
	return input
		.replace(/\n\r/g, '\n')
		.replace(/\r/g, '\n')
		.split(/\n{2,}/g)
		.map((passport): number => {
			const matches = passport.matchAll(/(?<key>\w*):{1}(?<value>.\w*)/g);
			const passportJson: { [x: string]: string } = {};
			Array.from(matches).forEach((match) => {
				if (match.groups) {
					passportJson[match.groups.key] = match.groups.value;
				}
			});
			for (const key in predicates) {
				if (!(key in passportJson) || !predicates[key](passportJson[key])) {
					return 0;
				}
			}
			return 1;
		})
		.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
}
