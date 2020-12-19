export function execute(input: string[]) {
	let acc = 0;
	const operationsDone = input.map(() => false);
	for (let i = 0; i < input.length; ) {
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
	return acc;
}
