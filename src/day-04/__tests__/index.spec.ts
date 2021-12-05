/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import { fetchInput } from '../../lib/fetch-input';
import { processInput } from '..';

const testInput = `7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1

22 13 17 11  0
 8  2 23  4 24
21  9 14 16  7
 6 10  3 18  5
 1 12 20 15 19

 3 15  0  2 22
 9 18 13 17  5
19  8  7 25 23
20 11 10 24  4
14 21 16 12  6

14 21 17 24  4
10 16 15  9 19
18  8 23 26 20
22 11 13  6  5
 2  0 12  3  7`;

describe('Day 4', function () {
	it('handles input correctly', function () {
		const expectedCalls = [
			7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22,
			18, 20, 8, 19, 3, 26, 1,
		];

		const expectedBoards = [
			[
				22, 13, 17, 11, 0, 8, 2, 23, 4, 24, 21, 9, 14, 16, 7, 6, 10, 3, 18, 5,
				1, 12, 20, 15, 19,
			],
			[
				3, 15, 0, 2, 22, 9, 18, 13, 17, 5, 19, 8, 7, 25, 23, 20, 11, 10, 24, 4,
				14, 21, 16, 12, 6,
			],
			[
				14, 21, 17, 24, 4, 10, 16, 15, 9, 19, 18, 8, 23, 26, 20, 22, 11, 13, 6,
				5, 2, 0, 12, 3, 7,
			],
		];
		const { boards, calls } = processInput(testInput);
		expect(calls).to.deep.equal(expectedCalls);
		expect(boards).to.deep.equal(expectedBoards);
	});

	it('handles actual input correctly', async function () {
		const expectedCalls = [
			76, 69, 38, 62, 33, 48, 81, 2, 64, 21, 80, 90, 29, 99, 37, 15, 93, 46, 75,
			0, 89, 56, 58, 40, 92, 47, 8, 6, 54, 96, 12, 66, 83, 4, 70, 19, 17, 5, 50,
			52, 45, 51, 18, 27, 49, 71, 28, 86, 74, 77, 11, 20, 84, 72, 23, 31, 16,
			78, 91, 65, 87, 79, 73, 94, 24, 68, 63, 9, 88, 82, 30, 42, 60, 13, 67, 85,
			44, 59, 7, 53, 22, 1, 26, 41, 61, 55, 43, 39, 3, 35, 25, 34, 57, 10, 14,
			32, 97, 95, 36, 98,
		];

		const expectedBoards = [
			[
				17, 45, 62, 28, 73, 39, 12, 0, 52, 5, 87, 48, 50, 85, 44, 66, 57, 78,
				94, 3, 91, 37, 69, 16, 1,
			],
			[
				1, 67, 4, 58, 13, 25, 54, 34, 63, 87, 59, 70, 66, 72, 71, 33, 17, 8, 20,
				85, 69, 46, 50, 41, 88,
			],
			[
				47, 63, 80, 15, 90, 24, 1, 40, 94, 13, 56, 62, 74, 81, 95, 43, 88, 37,
				99, 22, 57, 52, 33, 84, 49,
			],
			[
				33, 58, 54, 28, 10, 7, 82, 97, 66, 92, 95, 77, 5, 86, 84, 85, 91, 94,
				21, 69, 23, 12, 13, 98, 46,
			],
			[
				1, 63, 58, 23, 0, 67, 14, 45, 42, 32, 48, 64, 83, 10, 13, 74, 16, 3, 79,
				46, 44, 52, 95, 25, 6,
			],
			[
				93, 47, 5, 96, 28, 88, 76, 70, 0, 72, 77, 1, 36, 54, 9, 14, 17, 75, 64,
				15, 79, 66, 61, 78, 26,
			],
			[
				23, 75, 96, 71, 76, 63, 59, 39, 65, 36, 95, 21, 67, 41, 74, 9, 97, 4, 2,
				49, 32, 17, 81, 0, 56,
			],
			[
				77, 53, 30, 94, 5, 4, 42, 87, 25, 24, 52, 15, 68, 9, 45, 56, 89, 98, 47,
				34, 99, 32, 27, 78, 46,
			],
			[
				75, 70, 99, 65, 41, 87, 6, 11, 88, 1, 4, 42, 64, 98, 78, 63, 50, 69, 79,
				39, 67, 46, 17, 97, 26,
			],
			[
				26, 73, 6, 79, 47, 67, 51, 64, 16, 60, 8, 1, 61, 76, 39, 13, 57, 48, 65,
				46, 63, 83, 4, 92, 71,
			],
			[
				97, 93, 21, 88, 80, 58, 42, 53, 95, 90, 49, 29, 30, 26, 22, 66, 51, 75,
				8, 13, 5, 39, 19, 4, 96,
			],
			[
				77, 16, 33, 1, 6, 54, 91, 60, 56, 88, 4, 59, 24, 79, 22, 36, 49, 17, 97,
				27, 67, 99, 92, 62, 86,
			],
			[
				78, 18, 59, 74, 54, 79, 68, 23, 51, 85, 47, 42, 92, 58, 12, 30, 97, 19,
				26, 15, 1, 62, 94, 65, 70,
			],
			[
				6, 91, 56, 55, 11, 58, 96, 21, 50, 53, 51, 60, 67, 64, 71, 12, 25, 44,
				47, 39, 15, 92, 81, 9, 38,
			],
			[
				98, 16, 31, 21, 30, 58, 10, 3, 89, 7, 79, 20, 60, 74, 26, 86, 4, 83, 96,
				15, 94, 29, 44, 41, 34,
			],
			[
				50, 75, 83, 20, 52, 65, 85, 41, 78, 38, 31, 64, 86, 32, 10, 25, 82, 13,
				61, 22, 11, 73, 4, 77, 24,
			],
			[
				56, 74, 26, 20, 62, 83, 46, 41, 24, 52, 34, 28, 76, 80, 36, 75, 48, 63,
				17, 55, 69, 47, 22, 45, 60,
			],
			[
				17, 15, 71, 28, 68, 12, 76, 27, 25, 14, 34, 39, 31, 58, 13, 75, 67, 2,
				26, 42, 72, 43, 0, 23, 54,
			],
			[
				37, 43, 18, 76, 47, 96, 1, 80, 77, 27, 13, 89, 16, 4, 6, 74, 92, 55, 99,
				38, 19, 75, 52, 85, 81,
			],
			[
				69, 51, 39, 95, 98, 90, 61, 91, 6, 21, 25, 57, 81, 10, 49, 67, 55, 43,
				96, 17, 78, 11, 3, 64, 77,
			],
			[
				51, 66, 8, 62, 60, 82, 94, 24, 54, 26, 59, 91, 97, 37, 77, 20, 25, 69,
				98, 84, 38, 12, 65, 35, 61,
			],
			[
				7, 26, 91, 84, 17, 23, 52, 86, 19, 24, 58, 44, 5, 32, 40, 6, 27, 89, 76,
				92, 33, 10, 90, 83, 82,
			],
			[
				44, 61, 68, 70, 87, 23, 17, 90, 93, 21, 92, 54, 95, 46, 14, 47, 24, 89,
				33, 31, 26, 80, 35, 42, 78,
			],
			[
				88, 80, 50, 46, 26, 1, 97, 92, 51, 74, 16, 24, 40, 31, 95, 47, 85, 61,
				99, 12, 27, 8, 25, 42, 13,
			],
			[
				8, 59, 37, 87, 44, 62, 0, 67, 39, 92, 79, 81, 54, 24, 93, 56, 84, 23,
				18, 34, 72, 68, 29, 11, 91,
			],
			[
				64, 51, 81, 44, 12, 49, 20, 23, 36, 53, 59, 73, 37, 60, 57, 96, 65, 5,
				43, 14, 46, 31, 47, 87, 1,
			],
			[
				11, 13, 72, 30, 3, 67, 20, 84, 59, 77, 52, 87, 97, 51, 16, 43, 36, 21,
				33, 82, 41, 96, 91, 93, 29,
			],
			[
				7, 31, 19, 87, 94, 92, 68, 18, 57, 23, 5, 88, 81, 86, 10, 99, 50, 37,
				33, 25, 97, 22, 0, 53, 91,
			],
			[
				78, 39, 41, 44, 89, 91, 82, 71, 42, 37, 25, 93, 67, 53, 9, 84, 23, 33,
				92, 14, 74, 45, 57, 86, 50,
			],
			[
				79, 83, 10, 85, 48, 51, 29, 93, 87, 21, 58, 5, 52, 37, 99, 80, 1, 18,
				46, 42, 60, 92, 0, 44, 59,
			],
			[
				79, 76, 54, 14, 42, 57, 11, 39, 66, 33, 86, 62, 27, 61, 26, 48, 68, 47,
				99, 46, 78, 90, 9, 36, 98,
			],
			[
				76, 79, 66, 38, 65, 67, 91, 90, 41, 93, 2, 1, 33, 56, 50, 46, 9, 0, 61,
				62, 26, 58, 16, 24, 10,
			],
			[
				20, 22, 86, 58, 14, 53, 74, 54, 85, 6, 2, 96, 40, 72, 78, 99, 81, 16,
				31, 55, 11, 57, 62, 51, 32,
			],
			[
				8, 51, 73, 40, 88, 83, 35, 37, 98, 27, 3, 42, 15, 14, 33, 2, 38, 52, 82,
				71, 67, 55, 9, 66, 53,
			],
			[
				94, 99, 54, 18, 14, 40, 56, 57, 66, 68, 28, 74, 48, 30, 0, 59, 1, 22,
				50, 23, 13, 71, 6, 26, 15,
			],
			[
				28, 60, 66, 25, 56, 49, 68, 84, 10, 38, 73, 50, 87, 16, 14, 79, 26, 29,
				18, 2, 57, 22, 5, 48, 91,
			],
			[
				61, 78, 3, 95, 87, 6, 62, 25, 74, 84, 22, 71, 93, 57, 20, 81, 33, 15,
				45, 96, 38, 14, 19, 72, 26,
			],
			[
				51, 19, 62, 72, 39, 36, 83, 6, 33, 9, 95, 43, 42, 2, 22, 94, 99, 23, 97,
				11, 66, 61, 16, 30, 35,
			],
			[
				51, 38, 7, 24, 82, 23, 12, 46, 55, 85, 43, 97, 45, 61, 67, 53, 2, 77,
				99, 34, 17, 93, 25, 9, 72,
			],
			[
				37, 32, 35, 63, 93, 40, 16, 51, 99, 88, 73, 69, 49, 80, 33, 56, 54, 18,
				87, 71, 29, 98, 85, 58, 17,
			],
			[
				38, 4, 55, 72, 33, 29, 63, 86, 52, 75, 7, 47, 34, 53, 14, 89, 39, 83,
				36, 78, 6, 21, 15, 18, 96,
			],
			[
				56, 19, 40, 0, 7, 61, 33, 50, 66, 54, 93, 91, 64, 6, 45, 51, 90, 94, 18,
				37, 15, 28, 13, 2, 44,
			],
			[
				18, 79, 4, 56, 15, 38, 80, 8, 42, 5, 60, 11, 53, 23, 27, 9, 71, 19, 83,
				72, 39, 97, 98, 99, 7,
			],
			[
				90, 22, 41, 95, 15, 20, 18, 7, 70, 49, 97, 51, 79, 94, 77, 31, 89, 50,
				40, 9, 37, 84, 6, 98, 35,
			],
			[
				38, 56, 94, 55, 0, 92, 84, 8, 85, 73, 86, 81, 76, 35, 1, 62, 5, 59, 77,
				72, 79, 97, 60, 11, 70,
			],
			[
				43, 98, 87, 97, 70, 53, 55, 35, 8, 64, 80, 59, 75, 11, 2, 17, 95, 13,
				38, 90, 31, 20, 60, 84, 4,
			],
			[
				38, 19, 10, 73, 86, 37, 72, 66, 22, 53, 6, 41, 20, 21, 92, 0, 13, 9, 89,
				17, 43, 61, 80, 60, 65,
			],
			[
				61, 50, 42, 99, 26, 11, 51, 52, 83, 64, 92, 60, 2, 91, 20, 95, 10, 14,
				94, 98, 5, 37, 90, 17, 69,
			],
			[
				82, 48, 51, 32, 78, 30, 39, 10, 84, 69, 94, 5, 60, 92, 89, 95, 31, 64,
				67, 23, 96, 20, 33, 66, 61,
			],
			[
				33, 92, 78, 24, 74, 45, 34, 73, 5, 57, 18, 37, 69, 44, 38, 25, 30, 53,
				87, 64, 28, 23, 14, 10, 81,
			],
			[
				39, 82, 40, 64, 86, 26, 81, 3, 85, 50, 71, 75, 91, 65, 96, 17, 55, 8,
				56, 59, 22, 36, 73, 90, 0,
			],
			[
				18, 67, 50, 70, 71, 83, 8, 75, 55, 29, 66, 33, 39, 88, 16, 32, 84, 78,
				59, 0, 11, 3, 61, 65, 36,
			],
			[
				1, 12, 66, 59, 9, 24, 97, 75, 83, 11, 45, 16, 14, 31, 71, 85, 43, 99,
				18, 15, 61, 56, 80, 69, 29,
			],
			[
				18, 50, 86, 53, 71, 67, 36, 14, 24, 55, 52, 30, 33, 54, 81, 72, 51, 39,
				28, 42, 45, 98, 78, 35, 73,
			],
			[
				60, 86, 68, 58, 37, 17, 78, 43, 31, 96, 33, 61, 34, 45, 36, 10, 29, 83,
				98, 2, 88, 73, 7, 84, 50,
			],
			[
				30, 21, 94, 31, 4, 20, 68, 91, 55, 51, 10, 98, 2, 25, 84, 64, 97, 29,
				28, 58, 75, 17, 76, 54, 65,
			],
			[
				17, 11, 88, 9, 66, 1, 59, 60, 79, 55, 30, 46, 83, 67, 91, 23, 45, 99,
				90, 6, 81, 33, 8, 13, 76,
			],
			[
				25, 68, 43, 59, 51, 56, 14, 41, 52, 16, 62, 36, 12, 37, 71, 83, 90, 81,
				91, 0, 95, 92, 29, 54, 26,
			],
			[
				53, 84, 85, 18, 10, 51, 44, 87, 86, 67, 4, 81, 82, 77, 30, 26, 68, 80,
				57, 71, 22, 83, 47, 61, 14,
			],
			[
				41, 89, 38, 14, 66, 70, 92, 26, 97, 53, 78, 25, 5, 4, 48, 54, 86, 31,
				23, 0, 99, 73, 6, 20, 98,
			],
			[
				18, 81, 96, 60, 47, 59, 87, 95, 15, 57, 34, 17, 26, 7, 42, 25, 90, 45,
				94, 5, 10, 41, 32, 20, 98,
			],
			[
				37, 9, 20, 82, 83, 84, 14, 62, 3, 76, 86, 67, 95, 40, 65, 57, 26, 1, 19,
				69, 49, 41, 29, 35, 13,
			],
			[
				29, 74, 69, 92, 48, 80, 47, 59, 18, 13, 98, 5, 64, 89, 83, 37, 97, 90,
				32, 49, 25, 87, 39, 21, 63,
			],
			[
				1, 61, 5, 82, 66, 87, 75, 18, 23, 63, 38, 51, 33, 59, 4, 21, 14, 17, 97,
				92, 94, 45, 84, 22, 10,
			],
			[
				86, 93, 8, 99, 54, 1, 4, 37, 30, 34, 80, 17, 50, 74, 97, 28, 11, 6, 85,
				78, 94, 76, 92, 63, 79,
			],
			[
				63, 87, 89, 19, 81, 72, 90, 71, 96, 16, 85, 92, 78, 11, 37, 50, 17, 68,
				82, 66, 21, 9, 39, 69, 73,
			],
			[
				30, 63, 90, 5, 45, 26, 15, 28, 84, 65, 1, 23, 0, 12, 17, 61, 98, 21, 39,
				56, 67, 51, 3, 8, 42,
			],
			[
				54, 91, 9, 70, 93, 75, 58, 89, 53, 19, 77, 64, 45, 78, 14, 7, 31, 99,
				42, 51, 87, 95, 60, 10, 84,
			],
			[
				98, 35, 66, 42, 85, 75, 27, 97, 54, 9, 16, 15, 60, 44, 49, 28, 19, 51,
				24, 50, 59, 18, 37, 88, 39,
			],
			[
				69, 29, 49, 9, 76, 4, 83, 64, 33, 2, 67, 81, 88, 70, 39, 85, 73, 97, 15,
				8, 7, 13, 26, 12, 1,
			],
			[
				57, 3, 65, 28, 87, 36, 31, 51, 19, 0, 56, 77, 41, 20, 76, 79, 29, 80,
				60, 66, 55, 61, 8, 30, 15,
			],
			[
				2, 42, 3, 17, 40, 10, 56, 91, 52, 23, 76, 39, 75, 82, 49, 50, 36, 99, 9,
				53, 92, 66, 48, 31, 41,
			],
			[
				16, 51, 80, 95, 23, 36, 84, 33, 56, 11, 49, 46, 32, 78, 85, 67, 29, 94,
				26, 22, 76, 6, 30, 37, 0,
			],
			[
				27, 94, 79, 48, 4, 55, 81, 22, 18, 88, 93, 15, 59, 41, 11, 67, 43, 24,
				92, 65, 5, 1, 60, 99, 62,
			],
			[
				2, 51, 42, 84, 82, 80, 28, 43, 93, 72, 81, 57, 13, 45, 66, 34, 22, 53,
				37, 3, 31, 46, 70, 77, 79,
			],
			[
				17, 12, 22, 53, 74, 23, 49, 52, 60, 40, 64, 98, 97, 75, 57, 58, 81, 85,
				89, 92, 42, 34, 65, 87, 18,
			],
			[
				13, 8, 54, 25, 11, 84, 72, 66, 78, 1, 22, 82, 48, 85, 62, 68, 99, 18, 3,
				57, 64, 41, 80, 94, 71,
			],
			[
				45, 5, 56, 30, 62, 10, 50, 78, 13, 34, 90, 97, 85, 36, 0, 86, 35, 80,
				55, 74, 47, 99, 59, 61, 18,
			],
			[
				79, 87, 81, 45, 95, 24, 91, 27, 18, 16, 51, 35, 34, 46, 48, 39, 40, 6,
				70, 99, 1, 82, 63, 32, 50,
			],
			[
				78, 68, 27, 17, 65, 74, 15, 21, 38, 24, 82, 97, 49, 7, 58, 19, 23, 87,
				79, 22, 57, 93, 30, 1, 69,
			],
			[
				64, 13, 40, 21, 89, 3, 95, 20, 79, 59, 80, 46, 91, 54, 1, 62, 66, 30,
				60, 47, 26, 99, 55, 25, 2,
			],
			[
				47, 83, 7, 71, 81, 9, 72, 12, 20, 96, 28, 57, 82, 98, 42, 34, 59, 18,
				69, 1, 68, 38, 46, 19, 80,
			],
			[
				43, 39, 48, 84, 87, 32, 78, 5, 65, 50, 86, 13, 20, 22, 70, 31, 6, 52,
				53, 18, 73, 25, 4, 60, 99,
			],
			[
				48, 15, 59, 50, 33, 93, 99, 46, 70, 21, 91, 26, 76, 65, 87, 10, 27, 78,
				5, 96, 4, 63, 22, 82, 20,
			],
			[
				88, 63, 66, 48, 37, 39, 47, 56, 52, 27, 81, 18, 33, 12, 59, 3, 96, 55,
				26, 43, 42, 4, 7, 28, 22,
			],
			[
				95, 12, 98, 84, 23, 37, 35, 78, 9, 61, 52, 47, 24, 90, 17, 55, 87, 18,
				80, 41, 38, 0, 14, 36, 48,
			],
			[
				62, 72, 56, 78, 8, 75, 26, 11, 58, 91, 38, 74, 52, 65, 45, 43, 41, 15,
				82, 35, 89, 27, 21, 54, 0,
			],
			[
				43, 36, 85, 68, 60, 26, 89, 84, 10, 80, 87, 50, 75, 81, 35, 12, 46, 6,
				70, 59, 93, 51, 66, 33, 49,
			],
			[
				68, 32, 0, 63, 54, 20, 92, 39, 89, 17, 48, 60, 87, 36, 14, 93, 76, 83,
				10, 55, 64, 74, 80, 11, 41,
			],
			[
				9, 32, 11, 41, 87, 78, 22, 8, 72, 75, 6, 51, 29, 90, 50, 21, 68, 47, 2,
				7, 52, 19, 36, 57, 58,
			],
			[
				83, 36, 25, 31, 99, 86, 29, 47, 77, 38, 13, 51, 20, 59, 27, 74, 50, 9,
				11, 44, 52, 95, 81, 2, 70,
			],
			[
				96, 47, 14, 73, 59, 84, 87, 7, 4, 46, 60, 27, 79, 53, 30, 58, 28, 55, 5,
				43, 91, 75, 63, 35, 52,
			],
			[
				41, 66, 27, 50, 56, 76, 60, 80, 85, 23, 3, 21, 37, 74, 95, 9, 92, 43, 5,
				98, 79, 49, 88, 24, 70,
			],
			[
				59, 18, 57, 90, 13, 79, 29, 12, 2, 0, 84, 58, 38, 77, 96, 33, 89, 43,
				11, 44, 93, 23, 98, 60, 51,
			],
			[
				58, 86, 28, 17, 1, 6, 4, 81, 55, 53, 84, 27, 38, 12, 83, 50, 43, 40, 85,
				88, 26, 72, 25, 41, 44,
			],
			[
				14, 92, 7, 98, 12, 44, 11, 71, 64, 26, 88, 8, 2, 56, 6, 59, 0, 15, 33,
				51, 10, 52, 89, 53, 34,
			],
			[
				52, 4, 5, 63, 50, 15, 8, 60, 70, 13, 33, 79, 21, 39, 34, 84, 91, 30, 12,
				71, 61, 31, 41, 9, 66,
			],
			[
				43, 67, 52, 92, 54, 17, 21, 71, 78, 60, 19, 0, 88, 61, 2, 14, 66, 87,
				12, 37, 89, 23, 25, 4, 24,
			],
			[
				41, 62, 7, 66, 33, 59, 87, 84, 80, 71, 73, 97, 25, 85, 60, 86, 64, 61,
				54, 83, 22, 18, 63, 81, 27,
			],
			[
				92, 89, 50, 11, 73, 41, 48, 62, 80, 78, 46, 55, 81, 16, 94, 97, 45, 5,
				13, 40, 14, 75, 22, 42, 2,
			],
		];

		const day4input = await fetchInput(4);
		expect(day4input).to.not.be.null;
		if (day4input) {
			const { boards, calls } = processInput(day4input);
			expect(calls).to.deep.equal(expectedCalls);
			boards.forEach((board) => {
				expect(board).to.have.length(25);
			});
			expect(boards).to.deep.equal(expectedBoards);
		}
	});
});
