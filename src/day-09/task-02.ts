import { max, min } from 'mathjs';

export function getEncryptionWeakness(input: number[], num: number) {
	for (let start = 0; start < input.length - 2; start++) {
		for (let end = start + 2; end < input.length; end++) {
			const arrayToSum = input.slice(start, end);
			const sum = arrayToSum.reduce((acc, x) => (acc += x), 0);
			if (num < sum) break;
			if (num === sum) return min(arrayToSum) + max(arrayToSum);
		}
	}
	return -1;
}
