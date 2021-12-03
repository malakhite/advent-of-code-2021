import axios from 'axios';
import { access, readFile, writeFile } from 'fs/promises';
import path from 'path';

export async function fetchInput(day: number): Promise<string | null> {
	const paddedDay = day < 10 ? `0${day}` : day.toLocaleString();
	const inputPath = path.resolve(
		__dirname,
		'..',
		'..',
		'inputs',
		`day${paddedDay}.txt`
	);
	try {
		await access(inputPath);
		const file = await readFile(inputPath, 'utf-8');
		return file;
	} catch (maybeError) {
		if (
			'code' in (maybeError as { code?: string }) &&
			(maybeError as { code?: string }).code === 'ENOENT'
		) {
			const token = process.env.TOKEN;
			const { data, status } = await axios.get(
				`https://adventofcode.com/2021/day/${day}/input`,
				{
					headers: {
						Cookie: `session=${token}`,
					},
				}
			);

			if (status === 200) {
				await writeFile(inputPath, data);
				return data;
			}
		}
		throw new Error(`Unable to load input file for day ${day}`);
	}
}
