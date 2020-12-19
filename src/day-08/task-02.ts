export function execute(input: string[]): number {
	let [acc, index] = [0, 0];
	for (let i = 0; i < input.length; i++) {
		const [operation, num] = input[i].split(' ');

		if ('acc' === operation) continue;

		const modifiedOperations = [...input];
		modifiedOperations.splice(i, 1, `${operation === 'nop' ? 'jmp' : 'nop'} ${num}`);

		[index, acc] = run(modifiedOperations);

		if (index === input.length) break;
	}
	return acc;
}

function run(input: string[]) {
	let acc = 0;
	const operationsDone = input.map(() => false);
	let i = 0;
	for (; i < input.length; ) {
		if (operationsDone[i]) break;
		operationsDone[i] = true;
		const [operation, num] = input[i].split(' ');
		let newI = 1;
		switch (operation) {
			case 'acc':
				acc += +num;
				break;
			case 'jmp':
				newI = +num;
				break;
			default:
				break;
		}
		i += newI;
	}
	return [i, acc];
}
