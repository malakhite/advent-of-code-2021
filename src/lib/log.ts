/* eslint-disable no-console */
export function logDay(day: number, part1: unknown, part2?: unknown) {
	const paddedDay = day < 10 ? `0${day}` : day.toString();
	console.log(
		`\n======================================= Day ${paddedDay} =======================================`
	);
	console.log('Part 1: ', part1);
	if (part2) {
		console.log('\nPart 2: ', part2);
	}
}
