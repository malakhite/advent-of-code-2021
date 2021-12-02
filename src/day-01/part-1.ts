import { fetchInput } from '../lib/fetch-input';

export async function day1part1() {
	const input = await fetchInput(1);
	const depths: number[] = input!
		.trim()
		.split('\n')
		.map((depth) => Number.parseInt(depth.trim(), 10));

	let increaseCount = 0;

	depths.forEach((depth, depthIndex, inputCollection) => {
		if (
			depthIndex + 1 < inputCollection.length &&
			depth < inputCollection[depthIndex + 1]
		) {
			increaseCount++;
		}
	});

	console.log('Depth increases: ', increaseCount);
	return depths;
}
