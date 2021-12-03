export function day3part1(input: string[]): number {
	const progress: [number, number][] = [];
	for (const code of input) {
		code.split('').forEach((codePoint, codePointIndex) => {
			if (!progress[codePointIndex]) {
				progress.push([0, 0]);
			}

			switch (codePoint) {
				case '0':
					progress[codePointIndex][0]++;
					break;
				default:
					progress[codePointIndex][1]++;
			}
		});
	}

	const gammaRate = Number.parseInt(
		progress.map(([zero, one]) => (zero > one ? 0 : 1)).join(''),
		2
	);
	const epsilonRate = Number.parseInt(
		progress.map(([zero, one]) => (one > zero ? 0 : 1)).join(''),
		2
	);
	return gammaRate * epsilonRate;
}
