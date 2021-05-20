import { DOMInput } from '../index';

export const generateCSStext = (): void => {
  const cssTextField = document.getElementById('css');
  const {
    backgroundColor: { valueAsString: backgroundColor },
    containerSkewX: { valueAsString: containerSkewX },
    containerSkewY: { valueAsString: containerSkewY },
    hexagonsFirstRow: { valueAsNumber: hexagonsFirstRow },
    hexagonColor: { valueAsString: hexagonColor },
    hexagonGap: { valueAsNumber: hexagonGap },
    hexagonRotation: { valueAsString: hexagonRotation },
    hexagonScale: { valueAsString: hexagonScale },
    hexagonSize: { valueAsNumber: hexagonSize },
    hexagonTransition: { valueAsString: hexagonTransition },
    mediaQuery_1: { valueAsString: mediaQuery_1 },
    mediaQuery_2: { valueAsString: mediaQuery_2 },
    mediaQuery_3: { valueAsString: mediaQuery_3 },
    textColor: { valueAsString: textColor },
  } = DOMInput;
  let displayCSS = `
.hexagon-wrapper {
  background-color: ${backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
}

.hexagon-wrapper__hexagon-container {
  width: ${hexagonsFirstRow * hexagonSize}vw;
  display: flex;
  flex-wrap: wrap;
  transform: skew(${containerSkewX}deg, ${containerSkewY}deg);
}

.hexagon__outer {
  -webkit-clip-path: polygon(
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
  width: ${hexagonSize}vw;
  height: ${(1.154665 * hexagonSize).toFixed(2)}vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${((1.154665 * hexagonSize) / -4).toFixed(2)}vw;
  transition: all ${hexagonTransition}s;
}

.hexagon__outer:hover {
  transform: scale(${hexagonScale}) rotate(${hexagonRotation}deg);
}

.hexagon__outer:nth-child(${hexagonsFirstRow === 1 ? 'n' : '-n'} + ${
    hexagonsFirstRow === 1 ? 0 : hexagonsFirstRow
  }) {
    margin-top: 0;
  }

.hexagon__outer:nth-child(${
    hexagonsFirstRow === 1 ? '' : hexagonsFirstRow * 2 - 1
  }n + ${hexagonsFirstRow === 1 ? '' : hexagonsFirstRow * 1 + 1}) {
    margin-left: ${0.5 * hexagonSize}vw;
  }

.hexagon__inner {
  background-color: ${hexagonColor};
  -webkit-clip-path: polygon(
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
  width: ${100 - hexagonGap}%;
  height: ${100 - hexagonGap}%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${textColor};
}
`;

  if (hexagonsFirstRow - 1 > 0) {
    displayCSS += `
    @media (max-width: ${mediaQuery_1}px) {
      .hexagon-wrapper__hexagon-container {
        width: ${(hexagonsFirstRow - 1) * hexagonSize}vw;
      }

      /* reset */
      .hexagon__outer:nth-child(-n + ${hexagonsFirstRow}) {
        margin-top: ${((1.154665 * hexagonSize) / -4).toFixed(2)}vw;
      }

      /* reset */
      .hexagon__outer:nth-child(${(hexagonsFirstRow - 1) * 2 + 1}n + ${
      hexagonsFirstRow + 1
    }) {
          margin-left: 0;
      }

      .hexagon__outer:nth-child(${hexagonsFirstRow - 1 < 2 ? 'n' : '-n'} + ${
      hexagonsFirstRow - 1 < 2 ? 0 : hexagonsFirstRow - 1
    }) {
          margin-top: 0;
      }

      .hexagon__outer:nth-child(${
        (hexagonsFirstRow - 1) * 2 - 1 < 3 ? 0 : (hexagonsFirstRow - 1) * 2 - 1
      }n + ${hexagonsFirstRow < 3 ? 0 : hexagonsFirstRow}) {
        margin-left: ${0.5 * hexagonSize}vw;
    }
  }
  `;
  }

  if (hexagonsFirstRow - 2 > 0) {
    displayCSS += `
    @media only screen and (max-width: ${mediaQuery_2}px) {
      html {
        font-size: 50%;
      }

      .hexagon-wrapper__hexagon-container {
        width: ${(hexagonsFirstRow - 2) * hexagonSize}vw;
      }

      /* reset */
      .hexagon__outer:nth-child(-n + ${hexagonsFirstRow - 1}) {
        margin-top: ${((1.154665 * hexagonSize) / -4).toFixed(2)}vw;
      }

      /* reset */
      .hexagon__outer:nth-child(${
        (hexagonsFirstRow - 1) * 2 - 1
      }n + ${hexagonsFirstRow}) {
        margin-left: 0;
      }

      .hexagon__outer:nth-child(${hexagonsFirstRow - 2 < 2 ? 'n' : '-n'} + ${
      hexagonsFirstRow - 2 < 2 ? 0 : hexagonsFirstRow - 2
    }) {
        margin-top: 0;
      }

      .hexagon__outer:nth-child(${
        (hexagonsFirstRow - 1) * 2 - 3 < 3 ? 0 : (hexagonsFirstRow - 1) * 2 - 3
      }n + ${hexagonsFirstRow - 1 < 3 ? 0 : hexagonsFirstRow - 1}) {
        margin-left: ${0.5 * hexagonSize}vw;
    }
  }
  `;
  }

  if (hexagonsFirstRow - 3 > 0) {
    displayCSS += `
    @media only screen and (max-width: ${mediaQuery_3}px) {
      .hexagon-wrapper__hexagon-container {
        width: ${(hexagonsFirstRow - 3) * hexagonSize}vw;
      }

      /* reset */
      .hexagon__outer:nth-child(-n + ${hexagonsFirstRow - 2}) {
        margin-top: ${((1.154665 * hexagonSize) / -4).toFixed(2)}vw;
      }

      /* reset */
      .hexagon__outer:nth-child(${(hexagonsFirstRow - 1) * 2 - 3}n + ${
      hexagonsFirstRow - 1
    }) {
        margin-left: 0;
      }

      .hexagon__outer:nth-child(${hexagonsFirstRow - 3 < 2 ? 'n' : '-n'} + ${
      hexagonsFirstRow - 3 < 2 ? 0 : hexagonsFirstRow - 3
    }) {
        margin-top: 0;
      }

      .hexagon__outer:nth-child(${
        (hexagonsFirstRow - 1) * 2 - 5 < 3 ? 0 : (hexagonsFirstRow - 1) * 2 - 5
      }n + ${hexagonsFirstRow - 2 < 3 ? 0 : hexagonsFirstRow - 2}) {
        margin-left: ${0.5 * hexagonSize}vw;
    }
  }
  `;
  }

  if (cssTextField) cssTextField.innerText = displayCSS;
};
