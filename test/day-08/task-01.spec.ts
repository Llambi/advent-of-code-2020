import { execute } from '../../src/day-08/task-01';

describe('Part One', () => {
	it('should return 4 with input', () => {
		const input = [
			'nop +0',
			'acc +1',
			'jmp +4',
			'acc +3',
			'jmp -3',
			'acc -99',
			'acc +1',
			'jmp -4',
			'acc +6',
		];
		const subjet = execute(input);
		expect(subjet).toBe(5);
	});
});
