/* eslint-disable no-console */
export function logDay(day: number, part1: any, part2: any) {
	const paddedDay = day < 10 ? `0${day}` : day.toString();
	console.log(
		`======================================= Day ${paddedDay} =======================================`
	);
	console.log('Part 1:');
	console.dir(part1, { depth: null });
	console.log('\nPart 2:');
	console.dir(part2, { depth: null });
}
