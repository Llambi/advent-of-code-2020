import { getTreesOnPath } from '../../src/day-03/task-02';

describe('Part Two', () => {
	it('should return 336 with input', () => {
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
		const subjet: number = getTreesOnPath(input, [
			[1, 1],
			[1, 3],
			[1, 5],
			[1, 7],
			[2, 1],
		]);
		expect(subjet).toBe(336);
	});

	it('should return 0 with input', () => {
		const input: string[] = [];
		const subjet: number = getTreesOnPath(input, [
			[1, 1],
			[1, 3],
			[1, 5],
			[1, 7],
			[2, 1],
		]);
		expect(subjet).toBe(0);
	});
});
