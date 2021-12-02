const sum = (input: number[]) => input.reduce((acc, curr) => acc + curr, 0);

export function day1part2(depths: number[]) {
	let window1: number[] = [];
	const window2: number[] = [];
	let increases = 0;

	for (const depth of depths) {
		if (window2.length < 3) {
			window2.push(depth);
		} else {
			window1 = [...window2];
			window2.shift();
			window2.push(depth);
			const sum1 = sum(window1);
			const sum2 = sum(window2);
			if (sum1 < sum2) {
				increases++;
			}
		}
	}
	return increases;
}
