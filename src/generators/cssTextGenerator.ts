import { hexagonInput } from '../index';
import { mediaQueries, rootInputs, rootInputGap } from '../index';

const cssTextField = document.getElementById('css');

export const generateCSStext = (): void => {
  let displayCSS = `
.hexagon-wrapper {
  background-color: ${rootInputs.backgroundColor.value};
  display: flex;
  justify-content: center;
  align-items: center;
}

.hexagon-wrapper__hexagon-container {
  width: ${hexagonInput.hexagonFirstRow.value * rootInputs.hexagonSize.value}vw;
  display: flex;
  flex-wrap: wrap;
  transform: skew(${rootInputs.containerSkewX.value}deg, ${
    rootInputs.containerSkewY.value
  }deg);
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
  width: ${rootInputs.hexagonSize.value}vw;
  height: ${(1.154665 * rootInputs.hexagonSize.value).toFixed(2)}vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${((1.154665 * rootInputs.hexagonSize.value) / -4).toFixed(2)}vw;
  transition: all ${rootInputs.hexagonTransition.value}s;
}

.hexagon__outer:hover {
  transform: scale(${rootInputs.hexagonScale.value}) rotate(${
    rootInputs.hexagonRotation.value
  }deg);
}

.hexagon__outer:nth-child(${
    hexagonInput.hexagonFirstRow.value === 1 ? 'n' : '-n'
  } + ${
    hexagonInput.hexagonFirstRow.value === 1
      ? 0
      : hexagonInput.hexagonFirstRow.value
  }) {
    margin-top: 0;
  }

.hexagon__outer:nth-child(${
    hexagonInput.hexagonFirstRow.value === 1
      ? ''
      : hexagonInput.hexagonFirstRow.value * 2 - 1
  }n + ${
    hexagonInput.hexagonFirstRow.value === 1
      ? ''
      : hexagonInput.hexagonFirstRow.value * 1 + 1
  }) {
    margin-left: ${0.5 * rootInputs.hexagonSize.value}vw;
  }

.hexagon__inner {
  background-color: ${rootInputs.hexagonColor.value};
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
  width: ${100 - rootInputGap.hexagonGap.value}%;
  height: ${100 - rootInputGap.hexagonGap.value}%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${rootInputs.textColor.value};
}
`;

  if (hexagonInput.hexagonFirstRow.value - 1 > 0) {
    displayCSS += `
    @media (max-width: ${mediaQueries.mediaQuery_1.value}px) {
      .hexagon-wrapper__hexagon-container {
        width: ${
          (hexagonInput.hexagonFirstRow.value - 1) *
          rootInputs.hexagonSize.value
        }vw;
      }

      /* reset */
      .hexagon__outer:nth-child(-n + ${hexagonInput.hexagonFirstRow.value}) {
        margin-top: ${((1.154665 * rootInputs.hexagonSize.value) / -4).toFixed(
          2
        )}vw;
      }

      /* reset */
      .hexagon__outer:nth-child(${
        (hexagonInput.hexagonFirstRow.value - 1) * 2 + 1
      }n + ${hexagonInput.hexagonFirstRow.value + 1}) {
          margin-left: 0;
      }

      .hexagon__outer:nth-child(${
        hexagonInput.hexagonFirstRow.value - 1 < 2 ? 'n' : '-n'
      } + ${
      hexagonInput.hexagonFirstRow.value - 1 < 2
        ? 0
        : hexagonInput.hexagonFirstRow.value - 1
    }) {
          margin-top: 0;
      }

      .hexagon__outer:nth-child(${
        (hexagonInput.hexagonFirstRow.value - 1) * 2 - 1 < 3
          ? 0
          : (hexagonInput.hexagonFirstRow.value - 1) * 2 - 1
      }n + ${
      hexagonInput.hexagonFirstRow.value < 3
        ? 0
        : hexagonInput.hexagonFirstRow.value
    }) {
        margin-left: ${0.5 * rootInputs.hexagonSize.value}vw;
    }
  }
  `;
  }

  if (hexagonInput.hexagonFirstRow.value - 2 > 0) {
    displayCSS += `
    @media only screen and (max-width: ${mediaQueries.mediaQuery_2.value}px) {
      html {
        font-size: 50%;
      }

      .hexagon-wrapper__hexagon-container {
        width: ${
          (hexagonInput.hexagonFirstRow.value - 2) *
          rootInputs.hexagonSize.value
        }vw;
      }

      /* reset */
      .hexagon__outer:nth-child(-n + ${
        hexagonInput.hexagonFirstRow.value - 1
      }) {
        margin-top: ${((1.154665 * rootInputs.hexagonSize.value) / -4).toFixed(
          2
        )}vw;
      }

      /* reset */
      .hexagon__outer:nth-child(${
        (hexagonInput.hexagonFirstRow.value - 1) * 2 - 1
      }n + ${hexagonInput.hexagonFirstRow.value}) {
        margin-left: 0;
      }

      .hexagon__outer:nth-child(${
        hexagonInput.hexagonFirstRow.value - 2 < 2 ? 'n' : '-n'
      } + ${
      hexagonInput.hexagonFirstRow.value - 2 < 2
        ? 0
        : hexagonInput.hexagonFirstRow.value - 2
    }) {
        margin-top: 0;
      }

      .hexagon__outer:nth-child(${
        (hexagonInput.hexagonFirstRow.value - 1) * 2 - 3 < 3
          ? 0
          : (hexagonInput.hexagonFirstRow.value - 1) * 2 - 3
      }n + ${
      hexagonInput.hexagonFirstRow.value - 1 < 3
        ? 0
        : hexagonInput.hexagonFirstRow.value - 1
    }) {
        margin-left: ${0.5 * rootInputs.hexagonSize.value}vw;
    }
  }
  `;
  }

  if (hexagonInput.hexagonFirstRow.value - 3 > 0) {
    displayCSS += `
    @media only screen and (max-width: ${mediaQueries.mediaQuery_3.value}px) {
      .hexagon-wrapper__hexagon-container {
        width: ${
          (hexagonInput.hexagonFirstRow.value - 3) *
          rootInputs.hexagonSize.value
        }vw;
      }

      /* reset */
      .hexagon__outer:nth-child(-n + ${
        hexagonInput.hexagonFirstRow.value - 2
      }) {
        margin-top: ${((1.154665 * rootInputs.hexagonSize.value) / -4).toFixed(
          2
        )}vw;
      }

      /* reset */
      .hexagon__outer:nth-child(${
        (hexagonInput.hexagonFirstRow.value - 1) * 2 - 3
      }n + ${hexagonInput.hexagonFirstRow.value - 1}) {
        margin-left: 0;
      }

      .hexagon__outer:nth-child(${
        hexagonInput.hexagonFirstRow.value - 3 < 2 ? 'n' : '-n'
      } + ${
      hexagonInput.hexagonFirstRow.value - 3 < 2
        ? 0
        : hexagonInput.hexagonFirstRow.value - 3
    }) {
        margin-top: 0;
      }

      .hexagon__outer:nth-child(${
        (hexagonInput.hexagonFirstRow.value - 1) * 2 - 5 < 3
          ? 0
          : (hexagonInput.hexagonFirstRow.value - 1) * 2 - 5
      }n + ${
      hexagonInput.hexagonFirstRow.value - 2 < 3
        ? 0
        : hexagonInput.hexagonFirstRow.value - 2
    }) {
        margin-left: ${0.5 * rootInputs.hexagonSize.value}vw;
    }
  }
  `;
  }

  if (cssTextField) cssTextField.innerText = displayCSS;
};
