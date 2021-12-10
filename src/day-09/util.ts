export type Input = {
	depths: number[];
	modulus: number;
};

export function checkUp(location: number, { depths, modulus }: Input) {
	return (
		location / modulus < 1 || depths[location] < depths[location - modulus]
	);
}

export function checkDown(location: number, { depths, modulus }: Input) {
	return (
		location > depths.length - modulus ||
		depths[location] < depths[location + modulus]
	);
}

export function checkLeft(location: number, { depths, modulus }: Input) {
	return location % modulus <= 0 || depths[location] < depths[location - 1];
}

export function checkRight(location: number, { depths, modulus }: Input) {
	return (
		location % modulus >= modulus - 1 || depths[location] < depths[location + 1]
	);
}

export function getUp(location: number, { depths, modulus }: Input) {
	return location / modulus < 1 ? null : depths[location - modulus];
}

export function getDown(location: number, { depths, modulus }: Input) {
	return location > depths.length - modulus ? null : depths[location + modulus];
}

export function getLeft(location: number, { depths, modulus }: Input) {
	return location % modulus <= 0 ? null : depths[location - 1];
}

export function getRight(location: number, { depths, modulus }: Input) {
	return location % modulus >= modulus - 1 ? null : depths[location + 1];
}

export function isEdge(location: number, { depths, modulus }: Input) {
	return (
		location / modulus < 1 ||
		location > depths.length - modulus ||
		location % modulus <= 0 ||
		location % modulus >= modulus - 1
	);
}

export function checkAll(location: number, input: Input) {
	return (
		checkUp(location, input) &&
		checkDown(location, input) &&
		checkRight(location, input) &&
		checkLeft(location, input)
	);
}
