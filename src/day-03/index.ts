import { fetchInput } from '../lib/fetch-input';
import { logDay } from '../lib/log';
import { day3part1 } from './part-1';
import { day3part2 } from './part-2';

export async function day3() {
	const day3input = await fetchInput(3);
	const data = day3input?.trim().split('\n');

	if (data) {
		const part1 = day3part1(data);
		const part2 = day3part2(data);

		logDay(3, part1, part2);
	}
}
