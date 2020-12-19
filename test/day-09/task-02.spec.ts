import { getEncryptionWeakness } from '../../src/day-09/task-02';

describe('Part Two', () => {
	it('should return 62 with input', () => {
		const input = [
			35,
			20,
			15,
			25,
			47,
			40,
			62,
			55,
			65,
			95,
			102,
			117,
			150,
			182,
			127,
			219,
			299,
			277,
			309,
			576,
		];
		const num = 127;
		const subjet = getEncryptionWeakness(input, num);
		expect(subjet).toBe(62);
	});
});
