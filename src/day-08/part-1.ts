const DIGIT_SIZE = {
	0: 6,
	1: 2,
	2: 5,
	3: 5,
	4: 4,
	5: 5,
	6: 6,
	7: 3,
	8: 7,
	9: 6,
} as const;

export function day8part1(input: string[][][]) {
	const uniqueDigits: number[] = [
		DIGIT_SIZE[1],
		DIGIT_SIZE[4],
		DIGIT_SIZE[7],
		DIGIT_SIZE[8],
	];

	const sum = input.reduce((acc, line) => {
		const [_signal, code] = line;
		let subTotal = 0;
		code.forEach((digit) => {
			if (uniqueDigits.includes(digit.length)) subTotal++;
		});
		return acc + subTotal;
	}, 0);

	return sum;
}
