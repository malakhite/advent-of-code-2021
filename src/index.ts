import './lib/env';
import { day1 } from './day-01';
import { day2 } from './day-02';
import { day3 } from './day-03';
import { day4 } from './day-04';
import { day5 } from './day-05';

(async function main() {
	await day1();
	await day2();
	await day3();
	await day4();
	await day5();
})();
