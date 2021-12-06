import { fill, sum } from 'lodash';

export function day6part2(input: number[], duration: number): number {
	const existingFish = input.reduce((acc, curr) => {
		acc[curr]++;
		return acc;
	}, fill(Array(9), 0));

	for (let i = 0; i < duration; i++) {
		const newFish = existingFish.shift() || 0;
		existingFish[6] += newFish;
		existingFish.push(newFish);
	}

	return sum(existingFish);
}
