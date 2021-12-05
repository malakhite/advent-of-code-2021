import { logDay } from '../lib/log';
import { fetchInput } from '../lib/fetch-input';
import { day5part1 } from './part-1';
import { day5part2 } from './part-2';

export async function day5() {
	const day5input = await fetchInput(5);
	if (day5input) {
		const lines = day5input.split('\n');
		const vectors = lines.map((line) =>
			line
				.trim()
				.split(/\s+|,/)
				.filter((section) => section !== '->')
				.map((coord) => +coord)
		);

		const part1 = day5part1(vectors);
		const part2 = day5part2(vectors);

		logDay(5, part1, part2);
	}
}
