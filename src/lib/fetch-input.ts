/* eslint-disable no-console */
import axios from 'axios';

export async function fetchInput(day: number): Promise<string | null> {
	try {
		const token = process.env.TOKEN;
		const input = await axios.get(
			`https://adventofcode.com/2021/day/${day}/input`,
			{
				headers: {
					Cookie: `${token}`,
				},
			}
		);

		return input.data;
	} catch (maybeError) {
		if ((maybeError as Error).message) {
			console.error((maybeError as Error).message);
		} else {
			console.error(maybeError);
		}
		return null;
	}
}
