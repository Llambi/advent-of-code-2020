import { getNumberOfCorrectPassports } from '../../src/day-04/task-01';

describe('Part One', () => {
	it('should return 2 with input', () => {
		const input = `ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
            byr:1937 iyr:2017 cid:147 hgt:183cm

            iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
            hcl:#cfa07d byr:1929

            hcl:#ae17e1 iyr:2013
            eyr:2024
            ecl:brn pid:760753108 byr:1931
            hgt:179cm

            hcl:#cfa07d eyr:2025 pid:166559648
            iyr:2011 ecl:brn hgt:59in`;
		const codes = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
		const subjet = getNumberOfCorrectPassports(input, codes);
		expect(subjet).toBe(2);
	});
});
