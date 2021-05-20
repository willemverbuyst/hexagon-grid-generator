import { DOMInput } from '../index';

export const createMediaQuery = (i: number) => {
  const {
    hexagonsFirstRow: { valueAsNumber: hexagonsFirstRow },
    hexagonSize: { valueAsNumber: hexagonSize },
  } = DOMInput;

  if (hexagonsFirstRow - i > 0) {
    return `
  @media (max-width: mediaQuery_${i}px) {
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
`;
  }
};
