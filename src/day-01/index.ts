import { fetchInput } from '../lib/fetch-input';
import { logDay } from '../lib/log';
import { day1part1 } from './part-1';
import { day1part2 } from './part-2';

export async function day1() {
	const day1input = await fetchInput(1);
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	const depths: number[] = day1input!
		.trim()
		.split('\n')
		.map((depth) => Number.parseInt(depth.trim(), 10));

	const part1 = day1part1(depths);
	const part2 = day1part2(depths);

	logDay(1, part1, part2);
}
