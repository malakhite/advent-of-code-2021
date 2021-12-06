import { expect } from 'chai';
import { day6part2 } from '../part-2';

const testInput = [3, 4, 3, 1, 2];

describe('Day 6 - Part 2', function () {
	it('returns expected answer with part 1 input', function () {
		const result = day6part2(testInput, 80);
		expect(result).to.equal(5934);
	});

	it('returns expected answer with part 2 input', function () {
		const result = day6part2(testInput, 256);
		expect(result).to.equal(26_984_457_539);
	});
});
