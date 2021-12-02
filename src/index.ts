import { day1part1 } from './day-01/part-1';
import { day1Part2 } from './day-01/part-2';

(async function main() {
	const depths = await day1part1();
	await day1Part2(depths);
})();
