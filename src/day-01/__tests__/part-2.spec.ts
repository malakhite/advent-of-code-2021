import { expect } from 'chai';

import { day1part2 } from '../part-2';

const testInput = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

describe('Day 1 - Part 2', function () {
	it('returns the correct answer', function () {
		const result = day1part2(testInput);
		expect(result).to.equal(5);
	});
});
