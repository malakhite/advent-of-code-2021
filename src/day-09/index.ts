import { logDay } from '../lib/log';
import { fetchInput } from '../lib/fetch-input';
import { day9part1 } from './part-1';

export function processInput(input: string) {
	const lines = input.trim().split('\n');
	const modulus = lines[0].length;
	const depths = lines
		.map((line) => line.split(''))
		.flat()
		.map((char) => +char);

	return { modulus, depths };
}

export async function day9() {
	const day9input = await fetchInput(9);

	if (day9input) {
		const input = processInput(day9input);

		const part1 = day9part1(input);

		logDay(9, part1);
	} else {
		throw new Error('error fetch day 9 input');
	}
}
