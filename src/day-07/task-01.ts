export function countPosibleShinyBags(input: string[]) {
	const bags = input.reduce((dicc, rule): Map<string, Map<string, number>> => {
		const match = /(?<continent>\w+ \w+) bags contains? (?<content>.+)/g.exec(rule);
		const continent = match ? match[1] : 'UNKNOWN';
		const content = match ? match[2] : 'UNKNOWN';

		const mapContent: Map<string, number> = content.split(/,/g).reduce((acc, bagQuantity) => {
			const match = /(?<quantity>\d+|no) ((?<bag>\w.*)(?= bags?))/g.exec(bagQuantity);
			const quantity = match ? match[1] : 'UNKNOWN';
			const bag = match ? match[2] : 'UNKNOWN';
			acc.set(bag, quantity === 'no' ? 0 : +quantity);
			return acc;
		}, new Map());

		dicc.set(continent, mapContent);
		return dicc;
	}, new Map());

	return Array.from(bags.keys()).reduce((acc, key) => (acc += rec(bags, key)), 0);
}

function rec(map: Map<string, Map<string, number>>, key: string): number {
	if (map.has(key)) {
		const keys = Array.from(map.get(key)?.keys() || []);
		if (keys.some((x) => 'shiny gold' === x)) {
			return 1;
		}
		if (keys.every((x) => 'other' === x)) {
			return 0;
		}
		return +keys.map((key) => rec(map, key)).some((r) => 1 === r);
	}
	return -1;
}
