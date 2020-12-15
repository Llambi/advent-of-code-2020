import { getHighestSeat } from '../../src/day-05/task-01';

describe('Part One', () => {
	it('should return 567 with input', () => {
		const input = ['BFFFBBFRRR', 'FFFBBBFRRR', 'BBFFBBFRLL'];
		const subjet = getHighestSeat(input);
		expect(subjet).toBe(820);
	});
});
