const sum = (input: number[]) => input.reduce((acc, curr) => acc + curr, 0);

export async function day1Part2(depths: number[]) {
	const window1: number[] = [depths[0]];
	const window2: number[] = [];
	let increases = 0;

	for (let i = 3; i < depths.length; i++) {
		if (window1.length < 3) {
			window1.push(depths[i]);
		}

		if (window1.length === 3 && window2.length === 3) {
			const sum1 = sum(window1);
			const sum2 = sum(window2);
			if (sum1 < sum2) {
				increases++;
			}
			window1.shift();
			window2.shift();
		}

		if (window2.length < 3) {
			window2.push(depths[i]);
		}
	}

	console.log('Day 1 - Part 2 - Depth increases: ', increases);
}
