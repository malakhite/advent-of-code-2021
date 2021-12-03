import { expect } from 'chai';
import { day3part1 } from '../part-1';

const testData = [
	'00100',
	'11110',
	'10110',
	'10111',
	'10101',
	'01111',
	'00111',
	'11100',
	'10000',
	'11001',
	'00010',
	'01010',
];

describe('Day 3 - Part 1', function () {
	it('returns correct answer', function () {
		const result = day3part1(testData);
		expect(result).to.equal(198);
	});
});
