import { ceil, max } from 'mathjs';

export function getHighestSeat(input: string[]): number {
	return max(
		input.map((code) => {
			const verticalCode = code.slice(0, 7);
			const horizontalCode = code.slice(7);
			let verticalFrontLimit = 0;
			let verticalBackLimit = 126;
			let horizontalLowerLimit = 0;
			let horizontalUpperLimit = 7;
			[...verticalCode].forEach((step) =>
				'F' === step
					? (verticalBackLimit += (verticalFrontLimit - verticalBackLimit) / 2)
					: (verticalFrontLimit -= (verticalFrontLimit - verticalBackLimit) / 2),
			);
			[...horizontalCode].forEach((step) =>
				'R' === step
					? (horizontalLowerLimit += (horizontalUpperLimit - horizontalLowerLimit) / 2)
					: (horizontalUpperLimit -= (horizontalUpperLimit - horizontalLowerLimit) / 2),
			);
			return ceil(verticalBackLimit) * 8 + ceil(horizontalLowerLimit);
		}),
	);
}
