export function day6part1(input: number[], duration: number): number {
	if (duration === 0) {
		return input.length;
	}

	const existingFish: number[] = [];
	const newFish: number[] = [];
	input.forEach((fish) => {
		if (fish === 0) {
			existingFish.push(6);
			newFish.push(8);
		} else {
			existingFish.push(fish - 1);
		}
	});

	const newInput = [...existingFish, ...newFish];
	return day6part1(newInput, duration - 1);
}
