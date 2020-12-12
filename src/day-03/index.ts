import data from '../../resources/day-03';
import { getTreesOnPath as task01 } from './task-01';
import { getTreesOnPath as task02 } from './task-02';

console.log('Day-03');
console.log(`\t• Part-01 || Solution= ${task01(data.map, 1, 3)}`);
console.log(
	`\t• Part-02 || Solution= ${task02(data.map, [
		[1, 1],
		[1, 3],
		[1, 5],
		[1, 7],
		[2, 1],
	])}`,
);
