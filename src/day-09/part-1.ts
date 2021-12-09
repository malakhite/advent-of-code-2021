type Input = {
	depths: number[];
	modulus: number;
};

export function day9part1({ depths, modulus }: Input) {
	const depthSum = depths.reduce((acc, curr, index, coll) => {
		// left
		if (index % modulus > 0 && curr > coll[index - 1]) {
			return acc;
		}

		// right
		if (index % modulus < modulus - 1 && curr > coll[index + 1]) {
			return acc;
		}

		// top
		if (index / modulus >= 1 && curr > coll[index - modulus]) {
			return acc;
		}

		// bottom
		if (index < coll.length - modulus && curr > coll[index + modulus]) {
			return acc;
		}

		return acc + curr + 1;
	}, 0);

	return depthSum;
}
