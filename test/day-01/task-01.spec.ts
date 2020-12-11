import { get2020Multiplication } from '../../src/day-01/task-01';

describe('Part One', () => {
	it('should return 514579 with input', () => {
		const input: number[] = [1721, 979, 366, 299, 675, 145];
		const subjet: number = get2020Multiplication(input);
		expect(subjet).toBe(514579);
	});

	it('should return -1 with input', () => {
		const input: number[] = [17210, 97, 266, 269, 671, 45];
		const subjet: number = get2020Multiplication(input);
		expect(subjet).toBe(-1);
	});

	it('should return -1 with empty input', () => {
		const input: number[] = [];
		const subjet: number = get2020Multiplication(input);
		expect(subjet).toBe(-1);
	});
});
