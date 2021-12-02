export function day2part2(input: [string, number][]): number {
	const position: [number, number] = [0, 0];
	let aim = 0;

	for (const [direction, distance] of input) {
		switch (direction) {
			case 'forward':
				position[0] += distance;
				position[1] += aim * distance;
				break;

			case 'up':
				aim -= distance;
				break;

			case 'down':
				aim += distance;
				break;

			default:
				throw new Error(`unexpected values in [${direction}, ${distance}]`);
		}
	}

	return position[0] * position[1];
}
