import { expect } from 'chai';
import { day5part1 } from '../part-1';

const testData = [
	[0, 9, 5, 9],
	[8, 0, 0, 8],
	[9, 4, 3, 4],
	[2, 2, 2, 1],
	[7, 0, 7, 4],
	[6, 4, 2, 0],
	[0, 9, 2, 9],
	[3, 4, 1, 4],
	[0, 0, 8, 8],
	[5, 5, 8, 2],
];

describe('Day 5 - Part 1', function () {
	it('returns correct answer', function () {
		const result = day5part1(testData);
		expect(result).to.equal(5);
	});
});
