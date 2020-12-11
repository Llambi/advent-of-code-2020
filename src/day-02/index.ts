import data from '../../resources/day-02';
import { findNumberOfCorrectPasswords as partOne } from './task-01';
import { findNumberOfCorrectPasswords as partTwo } from './task-02';

console.log('Day-02');
console.log(`\t• Part-01 || Solution= ${partOne(data.passwords)}`);
console.log(`\t• Part-02 || Solution= ${partTwo(data.passwords)}`);
