/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { difference } from 'lodash';

type SegmentCodes = {
	a: string;
	b: string;
	c: string;
	d: string;
	e: string;
	f: string;
	g: string;
};

type DigitCodes = {
	0: string;
	1: string;
	2: string;
	3: string;
	4: string;
	5: string;
	6: string;
	7: string;
	8: string;
	9: string;
};

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

const uniqueDigits: number[] = [
	DIGIT_SIZE[1],
	DIGIT_SIZE[4],
	DIGIT_SIZE[7],
	DIGIT_SIZE[8],
];

function createMap(input: string[]) {
	const uniques: Record<number, string> = Object.fromEntries(
		uniqueDigits.map((digit) => {
			const value = input.find((code) => code.length === digit);
			return [digit, value as string];
		})
	);

	const charMap = {
		a: difference(uniques[1].split(''), uniques[7].split(''))[0],
		b: 'z',
		c: 'z',
		d: 'z',
		e: 'z',
		f: 'z',
		g: 'z',
	};

	const codeMap = Object.fromEntries(
		input.map((code) => {
			const maybeUnique = uniqueDigits.find((digit) => code.length === digit);
			if (maybeUnique) {
				return [code.split('').sort().join(), maybeUnique];
			}
			return [code, -1];
		})
	);

	const digitMap = Object.entries(codeMap).map(([key, value]) => [value, key]);

	const fiveCodes = input
		.filter((code) => code.length === 5)
		.map((code) => code.split(''));
	const sixCodes = input
		.filter((code) => code.length === 6)
		.map((code) => code.split(''));

	// e, 2
	fiveCodes.forEach((code, outerIndex, coll) => {
		const maybe2 = difference(
			code,
			coll.filter((_, innerIndex) => outerIndex !== innerIndex).flat()
		);
		if (maybe2.length > 0) {
			[charMap.e] = maybe2;
			codeMap[code.sort().join()] = 2;
		}
	});

	// d, 0
	sixCodes.forEach((code, outerIndex, coll) => {
		const maybe0 = difference(
			code,
			coll.filter((_, innerIndex) => outerIndex !== innerIndex).flat()
		);
		if (maybe0.length > 0) {
			[charMap.d] = maybe0;
			codeMap[code.sort().join()] = 0;
		}
	});
}

export function day8part2(input: string[][][]) {
	return 0;
}
