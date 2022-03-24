export const createMediaQuery = (
	mediaQuery: string,
	i: number,
	hexagonsFirstRow: number,
	hexagonSize: number,
	extra: string = ''
): string => `
  @media (max-width: ${mediaQuery}px) {
    ${extra}
    
    .hexagon-wrapper__hexagon-container {
      width: ${(hexagonsFirstRow - i) * hexagonSize}vw;
    }

    /* reset */
    .hexagon__outer:nth-child(-n + ${hexagonsFirstRow + 1 - i}) {
      margin-top: ${((1.154665 * hexagonSize) / -4).toFixed(2)}vw;
    }

    /* reset */
    .hexagon__outer:nth-child(${hexagonsFirstRow * 2 - i * 2 + 1}n + ${
	hexagonsFirstRow + 2 - i
}) {
        margin-left: 0;
    }

    .hexagon__outer:nth-child(${hexagonsFirstRow - i < 2 ? 'n' : '-n'} + ${
	hexagonsFirstRow - i < 2 ? 0 : hexagonsFirstRow - i
}) {
        margin-top: 0;
    }

    .hexagon__outer:nth-child(${
			hexagonsFirstRow * 2 - i * 2 - 1 < 3
				? 0
				: hexagonsFirstRow * 2 - i * 2 - 1
		}n + ${hexagonsFirstRow + 1 - i < 3 ? 0 : hexagonsFirstRow + 1 - i}) {
      margin-left: ${0.5 * hexagonSize}vw;
    }
  }
`

export const generateHexagon = (width: number, height: string | number) =>
	`-webkit-clip-path: polygon(
    0 25%,
    50% 0,
    100% 25%,
    100% 75%,
    50% 100%,
    0 75%
  );
  clip-path: polygon(
    0 25%,
    50% 0,
    100% 25%,
    100% 75%,
    50% 100%,
    0 75%
  );
  width: ${width}%;
  height: ${height}%;
  display: flex;
  justify-content: center;
  align-items: center;`
