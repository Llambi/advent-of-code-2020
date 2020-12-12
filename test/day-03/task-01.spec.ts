import { getTreesOnPath } from '../../src/day-03/task-01';

describe('Part One', () => {
	it('should return 7 with input', () => {
		const input: string[] = [
			'..##.......',
			'#...#...#..',
			'.#....#..#.',
			'..#.#...#.#',
			'.#...##..#.',
			'..#.##.....',
			'.#.#.#....#',
			'.#........#',
			'#.##...#...',
			'#...##....#',
			'.#..#...#.#',
		];
		const subjet: number = getTreesOnPath(input);
		expect(subjet).toBe(7);
	});

	it('should return 0 with input', () => {
		const input: string[] = [];
		const subjet: number = getTreesOnPath(input);
		expect(subjet).toBe(0);
	});
});
