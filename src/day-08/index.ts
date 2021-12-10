import { logDay } from '../lib/log';
import { fetchInput } from '../lib/fetch-input';
import { day8part1 } from './part-1';

export async function day8() {
	const input = await fetchInput(8);

	if (input) {
		const lines = input
			?.split('\n')
			.filter((line) => line !== '')
			.reduce((acc, line) => {
				if (line !== '') {
					const parsedLine = line
						.trim()
						.split(' | ')
						.map((section) => section.split(' '));
					acc.push(parsedLine);
				}
				return acc;
			}, [] as string[][][]);

		const part1 = day8part1(lines);

		logDay(8, part1);
	} else {
		throw new Error('error fetching day 8 input');
	}
}
