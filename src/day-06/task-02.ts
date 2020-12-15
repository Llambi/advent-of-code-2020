export function countAnswers(input: string) {
	return input
		.replace(/ /g, '')
		.split(/\n{2}/g)
		.map((x) => x.split(/\n/g))
		.map((people) => {
			if (1 === people.length) {
				return people[0].length;
			} else {
				const answers = people
					.flatMap((x) => x.split(''))
					.reduce((acc: Record<string, number>, obj: string): Record<string, number> => {
						if (obj in acc) {
							acc[obj] = acc[obj] + 1;
						} else {
							acc[obj] = 1;
						}
						return acc;
					}, {});
				return Object.values(answers).reduce((acc, value) => {
					if (value === people.length) {
						acc++;
					}
					return acc;
				}, 0);
			}
		})
		.reduce((prev, curr) => prev + curr, 0);
}
