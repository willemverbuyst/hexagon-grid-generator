import { HEIGHT_TO_WIDTH_RATIO } from '../../constants/hexagon'
import { roundToTwoDecimals } from '../../logic/utils/generalFunctions'

export const generateMediaQueryCSS = (
	mediaQuery: number,
	i: number,
	hexagonsFirstRow: number,
	hexagonSize: number,
	extra = ''
): string => `
  @media (max-width: ${mediaQuery}px) {
    ${extra}
    .hexagon-wrapper__hexagon-container {
      width: ${(hexagonsFirstRow - i) * hexagonSize}vw;
    }

    /* reset */
    .hexagon__outer:nth-child(-n + ${hexagonsFirstRow + 1 - i}) {
      margin-top: ${roundToTwoDecimals(
				(HEIGHT_TO_WIDTH_RATIO * hexagonSize) / -4
			)}vw;
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
