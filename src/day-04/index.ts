import data from '../../resources/day-04';
import { getNumberOfCorrectPassports } from './task-01';

const codes = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
console.log('Day-04');
console.log(`\t• Part-01 || Solution= ${getNumberOfCorrectPassports(data, codes)}`);
