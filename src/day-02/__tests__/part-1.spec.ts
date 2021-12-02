import { expect } from 'chai';
import { day2part1 } from '../part-1';

const testInput: [string, number][] = [
	['forward', 5],
	['down', 5],
	['forward', 8],
	['up', 3],
	['down', 8],
	['forward', 2],
];

describe('Day 2 - Part 1', function () {
	it('returns the correct answer', function () {
		const result = day2part1(testInput);
		expect(result).to.equal(150);
	});
});
