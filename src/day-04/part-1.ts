import { isEqual } from 'lodash';

const winningValue = [-1, -1, -1, -1, -1];

export function day4part1(boards: number[][], calls: number[]) {
	for (const call of calls) {
		for (let boardIndex = 0; boardIndex < boards.length; boardIndex++) {
			for (let entryIndex = 0; entryIndex < 25; entryIndex++) {
				if (boards[boardIndex][entryIndex] === call) {
					// eslint-disable-next-line no-param-reassign
					boards[boardIndex][entryIndex] = -1;
				}
			}

			for (let rowIndex = 0; rowIndex < 5; rowIndex++) {
				const row: number[] = [];
				const column: number[] = [];
				for (let colIndex = 0; colIndex < 5; colIndex++) {
					row.push(boards[boardIndex][rowIndex * 5 + colIndex]);
					column.push(boards[boardIndex][rowIndex + colIndex * 5]);
				}
				if (isEqual(row, winningValue) || isEqual(column, winningValue)) {
					const sum = boards[boardIndex].reduce((acc, curr) => {
						if (curr !== -1) {
							return acc + curr;
						}
						return acc;
					}, 0);

					return sum * call;
				}
			}
		}
	}
	throw new Error('no answer found');
}
