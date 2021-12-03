import { fetchInput } from '../lib/fetch-input';
import { logDay } from '../lib/log';
import { day2part1 } from './part-1';
import { day2part2 } from './part-2';

export async function day2() {
	const day2input = await fetchInput(2);
	const data = day2input
		?.trim()
		.split('\n')
		.map((line) => {
			const [first, second] = line.trim().split(/\s+/);
			const value: [string, number] = [first, Number.parseInt(second, 10)];
			return value;
		});

	if (data) {
		const part1 = day2part1(data);
		const part2 = day2part2(data);

		logDay(2, part1, part2);
	}
}
