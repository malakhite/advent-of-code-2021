/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import { checkDown, checkLeft, checkRight, checkUp } from '../util';

const testInput = {
	depths: [
		2, 1, 9, 9, 9, 4, 3, 2, 1, 0, 3, 9, 8, 7, 8, 9, 4, 9, 2, 1, 9, 8, 5, 6, 7,
		8, 9, 8, 9, 2, 8, 7, 6, 7, 8, 9, 6, 7, 8, 9, 9, 8, 9, 9, 9, 6, 5, 6, 7, 8,
	],
	modulus: 10,
};

describe('day 9 util functions', function () {
	it('checkUp', function () {
		const actual = checkUp(22, testInput);
		expect(actual).to.be.true;
	});

	it('checkDown', function () {
		const actual = checkDown(22, testInput);
		expect(actual).to.be.true;
	});

	it('checkLeft', function () {
		const actual = checkLeft(22, testInput);
		expect(actual).to.be.true;
	});

	it('checkRight', function () {
		const actual = checkRight(22, testInput);
		expect(actual).to.be.true;
	});
});
