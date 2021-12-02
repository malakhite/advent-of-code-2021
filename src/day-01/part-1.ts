export function day1part1(depths: number[]) {
	let increaseCount = 0;

	depths.forEach((depth, depthIndex, inputCollection) => {
		if (
			depthIndex + 1 < inputCollection.length &&
			depth < inputCollection[depthIndex + 1]
		) {
			increaseCount++;
		}
	});

	return increaseCount;
}
