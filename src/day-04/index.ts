import { logDay } from '../lib/log';
import { fetchInput } from '../lib/fetch-input';
import { day4part1 } from './part-1';
import { day4part2 } from './part-2';

export function processInput(input: string) {
	const lines = input.split('\n\n');
	const calls: number[] = lines[0]
		.split(',')
		.map((entry) => Number.parseInt(entry, 10));
	const boards: number[][] = lines.slice(1).reduce((acc, rawBoard) => {
		const splitBoard = rawBoard
			.split(/\s+/)
			.map((entry) => Number.parseInt(entry, 10))
			.filter((entry) => !Number.isNaN(entry));
		acc.push(splitBoard);
		return acc;
	}, [] as number[][]);

	return {
		boards,
		calls,
	};
}

export async function day4() {
	const day4input = await fetchInput(4);
	if (day4input) {
		const { boards, calls } = processInput(day4input);

		const part1 = day4part1(boards, calls);
		const part2 = day4part2(boards, calls);
		logDay(4, part1, part2);
	} else {
		throw new Error('Something went wrong with day 4');
	}
}
