import data from '../../resources/day-04';
import { getNumberOfCorrectPassports as part01 } from './task-01';
import { getNumberOfCorrectPassports as part02 } from './task-02';

const codes = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
const predicates = {
	byr: (x: string) => +x >= 1920 && +x <= 2002,
	iyr: (x: string) => +x >= 2010 && +x <= 2020,
	eyr: (x: string) => +x >= 2020 && +x <= 2030,
	hgt: (x: string) =>
		(x.slice(x.length - 2) === 'cm' &&
			+x.slice(0, x.length - 2) >= 150 &&
			+x.slice(0, x.length - 2) <= 193) ||
		(x.slice(x.length - 2) === 'in' &&
			+x.slice(0, x.length - 2) >= 59 &&
			+x.slice(0, x.length - 2) <= 76),
	hcl: (x: string) => /#{1}[a-fA-F0-9]{6}/g.test(x),
	ecl: (x: string) => ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(x),
	pid: (x: string) => /^\d{9}$/g.test(x),
};
console.log('Day-04');
console.log(`\t• Part-01 || Solution= ${part01(data, codes)}`);
console.log(`\t• Part-02 || Solution= ${part02(data, predicates)}`);
