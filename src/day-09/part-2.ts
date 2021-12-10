import { checkAll, getDown, getLeft, getRight, getUp } from './util';
import type { Input } from './util';

function findBasin(currentIndex: number, input: Input, basin: Set<number>) {
	const { depths } = input;
	if (depths[currentIndex] !== 9) {
		basin.add(currentIndex);
		const neighbors = [getDown, getLeft, getRight, getUp];
		const basinIndexes: number[] = neighbors
			.map((neighbor) => neighbor(currentIndex, input))
			.filter((neighbor) => neighbor !== null && neighbor !== 9) as number[];

		basinIndexes.forEach((basinIndex) => {
			findBasin(basinIndex, input, basin);
		});
	}

	return basin;
}

export function day9part2(input: Input) {
	const { depths } = input;

	const lowPointIndices = depths.reduce((acc, curr, index) => {
		if (checkAll(index, input)) {
			acc.push(index);
		}
		return acc;
	}, [] as number[]);

	const largestBasins: number[] = [0, 0, 0];

	lowPointIndices.forEach((lowPointIndex) => {
		const basin = new Set<number>([lowPointIndex]);
		const basinResult = findBasin(lowPointIndex, input, basin);
		console.log(basinResult);
		const replaceableBasin = largestBasins.findIndex(
			(basinSize) => basinSize < basinResult.size
		);
		if (replaceableBasin !== -1) {
			largestBasins[replaceableBasin] = basinResult.size;
		}
	});

	return largestBasins.reduce((acc, curr) => acc * curr);
}
