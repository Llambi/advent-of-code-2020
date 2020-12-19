import data from '../../resources/day-09';
import { findVulnerability } from './task-01';
import { getEncryptionWeakness } from './task-02';

const vulnerability = findVulnerability(data, 25);
console.log('Day-09');
console.log(`\t• Part-01 || Solution=${vulnerability}`);
console.log(`\t• Part-02 || Solution=${getEncryptionWeakness(data, vulnerability)}`);
