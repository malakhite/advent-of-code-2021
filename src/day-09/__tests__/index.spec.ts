import { expect } from 'chai';
import { processInput } from '..';

const testInput = `2199943210
3987894921
9856789892
8767896789
9899965678`;

describe('day 9 import', function () {
	it('provides expected output', async function () {
		const expected = {
			depths: [
				2, 1, 9, 9, 9, 4, 3, 2, 1, 0, 3, 9, 8, 7, 8, 9, 4, 9, 2, 1, 9, 8, 5, 6,
				7, 8, 9, 8, 9, 2, 8, 7, 6, 7, 8, 9, 6, 7, 8, 9, 9, 8, 9, 9, 9, 6, 5, 6,
				7, 8,
			],
			modulus: 10,
		};

		const actual = await processInput(testInput);
		expect(actual).to.deep.equal(expected);
	});
});
