type WinnowArgs = {
	cardinality?: number;
	input: string[];
	variant: 'oxygen' | 'co2';
};

function winnow({ cardinality = 0, input, variant }: WinnowArgs): number {
	if (input.length === 1) {
		return Number.parseInt(input[0], 2);
	}

	if (cardinality + 1 > input[0].length) {
		throw new Error(
			`cardinality ${cardinality + 1} greater than code length ${
				input[0].length
			}`
		);
	}

	const zeros = input.filter((code) => code[cardinality] === '0');
	const ones = input.filter((code) => code[cardinality] === '1');

	let newInput = variant === 'oxygen' ? ones : zeros;

	if (zeros.length > ones.length) {
		newInput = variant === 'oxygen' ? zeros : ones;
	} else if (zeros.length < ones.length) {
		newInput = variant === 'oxygen' ? ones : zeros;
	}

	return winnow({ input: newInput, cardinality: cardinality + 1, variant });
}

export function day3part2(input: string[]): number {
	const oxygenRating = winnow({ input, variant: 'oxygen' });
	const co2Rating = winnow({ input, variant: 'co2' });

	return oxygenRating * co2Rating;
}
