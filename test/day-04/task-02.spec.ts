import { getNumberOfCorrectPassports } from '../../src/day-04/task-02';

describe('Part Two', () => {
	it('should return 4 with input', (): void => {
		// const input = `eyr:1972 cid:100
		//     hcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926`;
		const input = `eyr:1972 cid:100
			hcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926

			iyr:2019
			hcl:#602927 eyr:1967 hgt:170cm
			ecl:grn pid:012533040 byr:1946

			hcl:dab227 iyr:2012
			ecl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277

			hgt:59cm ecl:zzz
			eyr:2038 hcl:74454a iyr:2023
			pid:3556412378 byr:2007

			pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980
			hcl:#623a2f

			eyr:2029 ecl:blu cid:129 byr:1989
			iyr:2014 pid:896056539 hcl:#a97842 hgt:165cm

			hcl:#888785
			hgt:164cm byr:2001 iyr:2015 cid:88
			pid:545766238 ecl:hzl
			eyr:2022

			iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719`;
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
		const subjet = getNumberOfCorrectPassports(input, predicates);
		expect(subjet).toBe(4);
	});
});
