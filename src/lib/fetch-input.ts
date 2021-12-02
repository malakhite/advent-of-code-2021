import axios from 'axios';

export async function fetchInput(day: number): Promise<string | null> {
	try {
		const input = await axios.get(
			`https://adventofcode.com/2021/day/${day}/input`,
			{
				headers: {
					Cookie:
						'session=53616c7465645f5f69e8389c856f724596d39c2af8e9ad1a7b9640f9d96f89a6e560b486d137faad6cb288421b53043e',
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
