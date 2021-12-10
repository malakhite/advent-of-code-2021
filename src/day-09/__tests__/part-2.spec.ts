import { expect } from 'chai';
import { day9part2 } from '../part-2';

const testInput = {
	depths: [
		2, 1, 9, 9, 9, 4, 3, 2, 1, 0, 3, 9, 8, 7, 8, 9, 4, 9, 2, 1, 9, 8, 5, 6, 7,
		8, 9, 8, 9, 2, 8, 7, 6, 7, 8, 9, 6, 7, 8, 9, 9, 8, 9, 9, 9, 6, 5, 6, 7, 8,
	],
	modulus: 10,
};

describe('Day 9 - Part 2', function () {
	it('returns expected answer', function () {
		const result = day9part2(testInput);
		expect(result).to.equal(1134);
	});
});
