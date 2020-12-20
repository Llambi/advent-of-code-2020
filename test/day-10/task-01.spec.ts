import { getJoltDifirence } from '../../src/day-10/task-01';

describe('Part One', () => {
	it('should return 35 with input', () => {
		const input = [16, 10, 15, 5, 1, 11, 7, 19, 6, 12, 4];
		const subjet = getJoltDifirence(input);
		expect(subjet).toBe(35);
	});
	it('should return 220 with input', () => {
		const input = [
			28,
			33,
			18,
			42,
			31,
			14,
			46,
			20,
			48,
			47,
			24,
			23,
			49,
			45,
			19,
			38,
			39,
			11,
			1,
			32,
			25,
			35,
			8,
			17,
			7,
			9,
			4,
			2,
			34,
			10,
			3,
		];
		const subjet = getJoltDifirence(input);
		expect(subjet).toBe(220);
	});
});
