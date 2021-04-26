import { DOMInput } from '../index';

const cssTextField = document.getElementById('css');

export const generateCSStext = (): void => {
  let displayCSS = `
.hexagon-wrapper {
  background-color: ${DOMInput.backgroundColor.value};
  display: flex;
  justify-content: center;
  align-items: center;
}

.hexagon-wrapper__hexagon-container {
  width: ${DOMInput.hexagonFirstRow.value * DOMInput.hexagonSize.value}vw;
  display: flex;
  flex-wrap: wrap;
  transform: skew(${DOMInput.containerSkewX.value}deg, ${
    DOMInput.containerSkewY.value
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
  width: ${DOMInput.hexagonSize.value}vw;
  height: ${(1.154665 * DOMInput.hexagonSize.value).toFixed(2)}vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${((1.154665 * DOMInput.hexagonSize.value) / -4).toFixed(2)}vw;
  transition: all ${DOMInput.hexagonTransition.value}s;
}

.hexagon__outer:hover {
  transform: scale(${DOMInput.hexagonScale.value}) rotate(${
    DOMInput.hexagonRotation.value
  }deg);
}

.hexagon__outer:nth-child(${
    DOMInput.hexagonFirstRow.value === 1 ? 'n' : '-n'
  } + ${
    DOMInput.hexagonFirstRow.value === 1 ? 0 : DOMInput.hexagonFirstRow.value
  }) {
    margin-top: 0;
  }

.hexagon__outer:nth-child(${
    DOMInput.hexagonFirstRow.value === 1
      ? ''
      : DOMInput.hexagonFirstRow.value * 2 - 1
  }n + ${
    DOMInput.hexagonFirstRow.value === 1
      ? ''
      : DOMInput.hexagonFirstRow.value * 1 + 1
  }) {
    margin-left: ${0.5 * DOMInput.hexagonSize.value}vw;
  }

.hexagon__inner {
  background-color: ${DOMInput.hexagonColor.value};
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
  width: ${100 - DOMInput.hexagonGap.value}%;
  height: ${100 - DOMInput.hexagonGap.value}%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${DOMInput.textColor.value};
}
`;

  if (DOMInput.hexagonFirstRow.value - 1 > 0) {
    displayCSS += `
    @media (max-width: ${DOMInput.mediaQuery_1.value}px) {
      .hexagon-wrapper__hexagon-container {
        width: ${
          (DOMInput.hexagonFirstRow.value - 1) * DOMInput.hexagonSize.value
        }vw;
      }

      /* reset */
      .hexagon__outer:nth-child(-n + ${DOMInput.hexagonFirstRow.value}) {
        margin-top: ${((1.154665 * DOMInput.hexagonSize.value) / -4).toFixed(
          2
        )}vw;
      }

      /* reset */
      .hexagon__outer:nth-child(${
        (DOMInput.hexagonFirstRow.value - 1) * 2 + 1
      }n + ${DOMInput.hexagonFirstRow.value + 1}) {
          margin-left: 0;
      }

      .hexagon__outer:nth-child(${
        DOMInput.hexagonFirstRow.value - 1 < 2 ? 'n' : '-n'
      } + ${
      DOMInput.hexagonFirstRow.value - 1 < 2
        ? 0
        : DOMInput.hexagonFirstRow.value - 1
    }) {
          margin-top: 0;
      }

      .hexagon__outer:nth-child(${
        (DOMInput.hexagonFirstRow.value - 1) * 2 - 1 < 3
          ? 0
          : (DOMInput.hexagonFirstRow.value - 1) * 2 - 1
      }n + ${
      DOMInput.hexagonFirstRow.value < 3 ? 0 : DOMInput.hexagonFirstRow.value
    }) {
        margin-left: ${0.5 * DOMInput.hexagonSize.value}vw;
    }
  }
  `;
  }

  if (DOMInput.hexagonFirstRow.value - 2 > 0) {
    displayCSS += `
    @media only screen and (max-width: ${DOMInput.mediaQuery_2.value}px) {
      html {
        font-size: 50%;
      }

      .hexagon-wrapper__hexagon-container {
        width: ${
          (DOMInput.hexagonFirstRow.value - 2) * DOMInput.hexagonSize.value
        }vw;
      }

      /* reset */
      .hexagon__outer:nth-child(-n + ${DOMInput.hexagonFirstRow.value - 1}) {
        margin-top: ${((1.154665 * DOMInput.hexagonSize.value) / -4).toFixed(
          2
        )}vw;
      }

      /* reset */
      .hexagon__outer:nth-child(${
        (DOMInput.hexagonFirstRow.value - 1) * 2 - 1
      }n + ${DOMInput.hexagonFirstRow.value}) {
        margin-left: 0;
      }

      .hexagon__outer:nth-child(${
        DOMInput.hexagonFirstRow.value - 2 < 2 ? 'n' : '-n'
      } + ${
      DOMInput.hexagonFirstRow.value - 2 < 2
        ? 0
        : DOMInput.hexagonFirstRow.value - 2
    }) {
        margin-top: 0;
      }

      .hexagon__outer:nth-child(${
        (DOMInput.hexagonFirstRow.value - 1) * 2 - 3 < 3
          ? 0
          : (DOMInput.hexagonFirstRow.value - 1) * 2 - 3
      }n + ${
      DOMInput.hexagonFirstRow.value - 1 < 3
        ? 0
        : DOMInput.hexagonFirstRow.value - 1
    }) {
        margin-left: ${0.5 * DOMInput.hexagonSize.value}vw;
    }
  }
  `;
  }

  if (DOMInput.hexagonFirstRow.value - 3 > 0) {
    displayCSS += `
    @media only screen and (max-width: ${DOMInput.mediaQuery_3.value}px) {
      .hexagon-wrapper__hexagon-container {
        width: ${
          (DOMInput.hexagonFirstRow.value - 3) * DOMInput.hexagonSize.value
        }vw;
      }

      /* reset */
      .hexagon__outer:nth-child(-n + ${DOMInput.hexagonFirstRow.value - 2}) {
        margin-top: ${((1.154665 * DOMInput.hexagonSize.value) / -4).toFixed(
          2
        )}vw;
      }

      /* reset */
      .hexagon__outer:nth-child(${
        (DOMInput.hexagonFirstRow.value - 1) * 2 - 3
      }n + ${DOMInput.hexagonFirstRow.value - 1}) {
        margin-left: 0;
      }

      .hexagon__outer:nth-child(${
        DOMInput.hexagonFirstRow.value - 3 < 2 ? 'n' : '-n'
      } + ${
      DOMInput.hexagonFirstRow.value - 3 < 2
        ? 0
        : DOMInput.hexagonFirstRow.value - 3
    }) {
        margin-top: 0;
      }

      .hexagon__outer:nth-child(${
        (DOMInput.hexagonFirstRow.value - 1) * 2 - 5 < 3
          ? 0
          : (DOMInput.hexagonFirstRow.value - 1) * 2 - 5
      }n + ${
      DOMInput.hexagonFirstRow.value - 2 < 3
        ? 0
        : DOMInput.hexagonFirstRow.value - 2
    }) {
        margin-left: ${0.5 * DOMInput.hexagonSize.value}vw;
    }
  }
  `;
  }

  if (cssTextField) cssTextField.innerText = displayCSS;
};
