import { expect } from 'chai';

import { day1part1 } from '../part-1';

const testInput = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

describe('Day 1 - Part 1', function () {
	it('returns the correct answer', async function () {
		const result = await day1part1(testInput);
		expect(result).to.equal(7);
	});
});
