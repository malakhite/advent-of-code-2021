import { expect } from 'chai';
import { day2part2 } from '../part-2';

const testInput: [string, number][] = [
	['forward', 5],
	['down', 5],
	['forward', 8],
	['up', 3],
	['down', 8],
	['forward', 2],
];

describe('Day 2 - Part 2', function () {
	it('returns the correct answer', function () {
		const result = day2part2(testInput);
		expect(result).to.equal(900);
	});
});
