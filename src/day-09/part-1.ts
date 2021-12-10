import { checkAll } from './util';
import type { Input } from './util';

export function day9part1(input: Input) {
	const depthSum = input.depths.reduce((acc, curr, index) => {
		if (checkAll(index, input)) {
			return acc + curr + 1;
		}

		return acc;
	}, 0);

	return depthSum;
}
