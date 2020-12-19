import { findVulnerability } from '../../src/day-09/task-01';

describe('Part One', () => {
	it('should return 4 with input', () => {
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
		const subjet = findVulnerability(input, 5);
		expect(subjet).toBe(127);
	});
});
