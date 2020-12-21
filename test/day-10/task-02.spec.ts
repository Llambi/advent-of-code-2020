import { execPath } from 'process';

import { countWaysToConnect } from '../../src/day-10/task-02';

describe('Part Two', () => {
	it('should return 19208 whit input', () => {
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
		const subject = countWaysToConnect(input);
		expect(subject).toBe(19208);
	});
});
