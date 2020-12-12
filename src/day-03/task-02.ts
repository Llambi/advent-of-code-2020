import { getTreesOnPath as getTreesOnPathTask01 } from './task-01';

export function getTreesOnPath(input: string[], moves: number[][]): number {
	return moves
		.map((move) => getTreesOnPathTask01(input, move[0], move[1]))
		.reduce((prevValue, currentValue) => prevValue * currentValue);
}
