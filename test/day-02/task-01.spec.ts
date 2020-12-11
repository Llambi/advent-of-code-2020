import { findNumberOfCorrectPasswords } from '../../src/day-02/task-01';

describe('Part One', () => {
	it('should 2 whit input', () => {
		const input: string[] = ['1 - 3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc'];
		const subjet: number = findNumberOfCorrectPasswords(input);
		expect(subjet).toBe(2);
	});

	it('should 0 whit empty input', () => {
		const input: string[] = [];
		const subjet: number = findNumberOfCorrectPasswords(input);
		expect(subjet).toBe(0);
	});
});
