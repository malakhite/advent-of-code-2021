import { fill } from 'lodash';

const lesserValue = (a: number, b: number) => (a < b ? a : b);

const drawBoard = (board: number[][]) => {
	board.forEach((row) => {
		console.log(row.join(' '));
	});
};

export function day5part2(input: number[][]) {
	const max = input.reduce((inputMax, vector) => {
		const innerMax = vector.reduce(
			(vecMax, coord) => (coord > vecMax ? coord : vecMax),
			0
		);
		return innerMax > inputMax ? innerMax : inputMax;
	}, 0);

	const board: number[][] = [];
	for (let i = 0; i <= max; i++) {
		board.push(fill(Array(max + 1), 0));
	}

	input.forEach((vector) => {
		const isVertical = vector[0] === vector[2];
		const isHorizontal = vector[1] === vector[3];

		if (isHorizontal || isVertical) {
			const length = Math.sqrt(
				Math.abs(vector[0] - vector[2]) ** 2 +
					Math.abs(vector[1] - vector[3]) ** 2
			);
			const origin = isHorizontal
				? lesserValue(vector[0], vector[2])
				: lesserValue(vector[1], vector[3]);
			if (isHorizontal) {
				for (let i = 0; i <= length; i++) {
					board[vector[1]][origin + i]++;
				}
			} else if (isVertical) {
				for (let i = 0; i <= length; i++) {
					board[origin + i][vector[0]]++;
				}
			}
		} else {
			const path: number[][] = [];
			const xChange = vector[0] < vector[2] ? 1 : -1;
			const yChange = vector[1] < vector[3] ? 1 : -1;
			const distance = Math.abs(vector[0] - vector[2]);
			for (let i = 0; i <= distance; i++) {
				path.push([vector[0] + xChange * i, vector[1] + yChange * i]);
			}
			path.forEach(([x, y]) => {
				board[y][x]++;
			});
		}
	});

	// drawBoard(board);

	const overlaps = board.reduce((total, row) => {
		const rowOverlaps = row.reduce(
			(rowTotal, point) => (point > 1 ? rowTotal + 1 : rowTotal),
			0
		);
		return rowOverlaps + total;
	}, 0);

	return overlaps;
}
