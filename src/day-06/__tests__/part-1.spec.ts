import { expect } from 'chai';
import { day6part1 } from '../part-1';

const testInput = [3, 4, 3, 1, 2];

describe('Day 6 - Part 1', function () {
	it('returns expected answer', function () {
		const result = day6part1(testInput, 80);
		expect(result).to.equal(5934);
	});
});
