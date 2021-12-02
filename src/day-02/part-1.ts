export function day2part1(input: [string, number][]): number {
	const position: [number, number] = [0, 0];

	for (const [direction, distance] of input) {
		switch (direction) {
			case 'forward':
				position[0] += distance;
				break;

			case 'up':
				position[1] -= distance;
				break;

			case 'down':
				position[1] += distance;
				break;

			default:
				throw new Error(`unexpected values in [${direction}, ${distance}]`);
		}
	}

	return position[0] * position[1];
}
