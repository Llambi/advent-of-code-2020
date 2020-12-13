export function getNumberOfCorrectPassports(input: string, codes: string[]): number {
	return input
		.replace(/\n\r/g, '\n')
		.replace(/\r/g, '\n')
		.split(/\n{2,}/g)
		.map((passport) => {
			const matches = passport.matchAll(/(?<key>\w*):{1}(?<value>.\w*)/g);
			const passportJson: { [x: string]: string } = {};
			Array.from(matches).forEach((match) => {
				if (match.groups) {
					passportJson[match.groups.key] = match.groups.value;
				}
			});
			return +codes.every((code) => Object.keys(passportJson).includes(code));
		})
		.reduce((prev, current) => prev + current);
}
