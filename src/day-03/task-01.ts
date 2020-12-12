export function getTreesOnPath(input: string[], moveY: number, moveX: number): number {
	const paths: string[][] = input.map((row) => row.split(''));
	let [row, col, trees] = [0, 0, 0];
	while (row < paths.length) {
		const adjustedCol = col % paths[0].length;
		if ('#' === paths[row][adjustedCol]) {
			trees++;
		}
		row += moveY;
		col += moveX;
	}
	return trees;
}
