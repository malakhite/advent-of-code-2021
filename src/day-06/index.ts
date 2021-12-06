import { logDay } from '../lib/log';
import { fetchInput } from '../lib/fetch-input';
import { day6part1 } from './part-1';
import { day6part2 } from './part-2';

export async function day6() {
	const day6input = await fetchInput(6);
	if (day6input) {
		const parsed = day6input.split(',').map((fish) => +fish);

		const part1 = day6part1(parsed, 80);
		const part2 = day6part2(parsed, 256);

		logDay(6, part1, part2);
	} else {
		throw new Error('error fetching day 6 input');
	}
}
