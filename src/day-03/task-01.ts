export function getTreesOnPath(input: string[]): number {
	const paths: string[][] = input.map((row) => row.split(''));
	let [row, col, trees] = [0, 0, 0];
	while (row < paths.length) {
		const adjustedCol = col % paths[0].length;
		if ('#' === paths[row][adjustedCol]) {
			trees++;
		}
		row++;
		col += 3;
	}
	return trees;
}
