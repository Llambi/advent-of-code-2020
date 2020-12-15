import { countAnswers } from '../../src/day-06/task-01';

describe('Part One', () => {
	it('should return 11 with input', () => {
		const input = `abc

            a
            b
            c

            ab
            ac

            a
            a
            a
            a

            b`;
		const subjet = countAnswers(input);
		expect(subjet).toBe(11);
	});
});
