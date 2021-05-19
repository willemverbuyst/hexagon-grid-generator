import { DOMInput } from '../index';

const cssTextField = document.getElementById('css');

export const generateCSStext = (): void => {
  let displayCSS = `
.hexagon-wrapper {
  background-color: ${DOMInput.backgroundColor.valueAsString};
  display: flex;
  justify-content: center;
  align-items: center;
}

.hexagon-wrapper__hexagon-container {
  width: ${
    DOMInput.hexagonFirstRow.valueAsNumber * DOMInput.hexagonSize.valueAsNumber
  }vw;
  display: flex;
  flex-wrap: wrap;
  transform: skew(${DOMInput.containerSkewX.valueAsString}deg, ${
    DOMInput.containerSkewY.valueAsString
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
  width: ${DOMInput.hexagonSize.valueAsString}vw;
  height: ${(1.154665 * DOMInput.hexagonSize.valueAsNumber).toFixed(2)}vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${((1.154665 * DOMInput.hexagonSize.valueAsNumber) / -4).toFixed(
    2
  )}vw;
  transition: all ${DOMInput.hexagonTransition.valueAsString}s;
}

.hexagon__outer:hover {
  transform: scale(${DOMInput.hexagonScale.valueAsString}) rotate(${
    DOMInput.hexagonRotation.valueAsString
  }deg);
}

.hexagon__outer:nth-child(${
    DOMInput.hexagonFirstRow.valueAsNumber === 1 ? 'n' : '-n'
  } + ${
    DOMInput.hexagonFirstRow.valueAsNumber === 1
      ? 0
      : DOMInput.hexagonFirstRow.valueAsNumber
  }) {
    margin-top: 0;
  }

.hexagon__outer:nth-child(${
    DOMInput.hexagonFirstRow.valueAsNumber === 1
      ? ''
      : DOMInput.hexagonFirstRow.valueAsNumber * 2 - 1
  }n + ${
    DOMInput.hexagonFirstRow.valueAsNumber === 1
      ? ''
      : DOMInput.hexagonFirstRow.valueAsNumber * 1 + 1
  }) {
    margin-left: ${0.5 * DOMInput.hexagonSize.valueAsNumber}vw;
  }

.hexagon__inner {
  background-color: ${DOMInput.hexagonColor.valueAsString};
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
  width: ${100 - DOMInput.hexagonGap.valueAsNumber}%;
  height: ${100 - DOMInput.hexagonGap.valueAsNumber}%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${DOMInput.textColor.valueAsString};
}
`;

  if (DOMInput.hexagonFirstRow.valueAsNumber - 1 > 0) {
    displayCSS += `
    @media (max-width: ${DOMInput.mediaQuery_1.valueAsString}px) {
      .hexagon-wrapper__hexagon-container {
        width: ${
          (DOMInput.hexagonFirstRow.valueAsNumber - 1) *
          DOMInput.hexagonSize.valueAsNumber
        }vw;
      }

      /* reset */
      .hexagon__outer:nth-child(-n + ${
        DOMInput.hexagonFirstRow.valueAsString
      }) {
        margin-top: ${(
          (1.154665 * DOMInput.hexagonSize.valueAsNumber) /
          -4
        ).toFixed(2)}vw;
      }

      /* reset */
      .hexagon__outer:nth-child(${
        (DOMInput.hexagonFirstRow.valueAsNumber - 1) * 2 + 1
      }n + ${DOMInput.hexagonFirstRow.valueAsNumber + 1}) {
          margin-left: 0;
      }

      .hexagon__outer:nth-child(${
        DOMInput.hexagonFirstRow.valueAsNumber - 1 < 2 ? 'n' : '-n'
      } + ${
      DOMInput.hexagonFirstRow.valueAsNumber - 1 < 2
        ? 0
        : DOMInput.hexagonFirstRow.valueAsNumber - 1
    }) {
          margin-top: 0;
      }

      .hexagon__outer:nth-child(${
        (DOMInput.hexagonFirstRow.valueAsNumber - 1) * 2 - 1 < 3
          ? 0
          : (DOMInput.hexagonFirstRow.valueAsNumber - 1) * 2 - 1
      }n + ${
      DOMInput.hexagonFirstRow.valueAsNumber < 3
        ? 0
        : DOMInput.hexagonFirstRow.valueAsNumber
    }) {
        margin-left: ${0.5 * DOMInput.hexagonSize.valueAsNumber}vw;
    }
  }
  `;
  }

  if (DOMInput.hexagonFirstRow.valueAsNumber - 2 > 0) {
    displayCSS += `
    @media only screen and (max-width: ${
      DOMInput.mediaQuery_2.valueAsString
    }px) {
      html {
        font-size: 50%;
      }

      .hexagon-wrapper__hexagon-container {
        width: ${
          (DOMInput.hexagonFirstRow.valueAsNumber - 2) *
          DOMInput.hexagonSize.valueAsNumber
        }vw;
      }

      /* reset */
      .hexagon__outer:nth-child(-n + ${
        DOMInput.hexagonFirstRow.valueAsNumber - 1
      }) {
        margin-top: ${(
          (1.154665 * DOMInput.hexagonSize.valueAsNumber) /
          -4
        ).toFixed(2)}vw;
      }

      /* reset */
      .hexagon__outer:nth-child(${
        (DOMInput.hexagonFirstRow.valueAsNumber - 1) * 2 - 1
      }n + ${DOMInput.hexagonFirstRow.valueAsString}) {
        margin-left: 0;
      }

      .hexagon__outer:nth-child(${
        DOMInput.hexagonFirstRow.valueAsNumber - 2 < 2 ? 'n' : '-n'
      } + ${
      DOMInput.hexagonFirstRow.valueAsNumber - 2 < 2
        ? 0
        : DOMInput.hexagonFirstRow.valueAsNumber - 2
    }) {
        margin-top: 0;
      }

      .hexagon__outer:nth-child(${
        (DOMInput.hexagonFirstRow.valueAsNumber - 1) * 2 - 3 < 3
          ? 0
          : (DOMInput.hexagonFirstRow.valueAsNumber - 1) * 2 - 3
      }n + ${
      DOMInput.hexagonFirstRow.valueAsNumber - 1 < 3
        ? 0
        : DOMInput.hexagonFirstRow.valueAsNumber - 1
    }) {
        margin-left: ${0.5 * DOMInput.hexagonSize.valueAsNumber}vw;
    }
  }
  `;
  }

  if (DOMInput.hexagonFirstRow.valueAsNumber - 3 > 0) {
    displayCSS += `
    @media only screen and (max-width: ${
      DOMInput.mediaQuery_3.valueAsString
    }px) {
      .hexagon-wrapper__hexagon-container {
        width: ${
          (DOMInput.hexagonFirstRow.valueAsNumber - 3) *
          DOMInput.hexagonSize.valueAsNumber
        }vw;
      }

      /* reset */
      .hexagon__outer:nth-child(-n + ${
        DOMInput.hexagonFirstRow.valueAsNumber - 2
      }) {
        margin-top: ${(
          (1.154665 * DOMInput.hexagonSize.valueAsNumber) /
          -4
        ).toFixed(2)}vw;
      }

      /* reset */
      .hexagon__outer:nth-child(${
        (DOMInput.hexagonFirstRow.valueAsNumber - 1) * 2 - 3
      }n + ${DOMInput.hexagonFirstRow.valueAsNumber - 1}) {
        margin-left: 0;
      }

      .hexagon__outer:nth-child(${
        DOMInput.hexagonFirstRow.valueAsNumber - 3 < 2 ? 'n' : '-n'
      } + ${
      DOMInput.hexagonFirstRow.valueAsNumber - 3 < 2
        ? 0
        : DOMInput.hexagonFirstRow.valueAsNumber - 3
    }) {
        margin-top: 0;
      }

      .hexagon__outer:nth-child(${
        (DOMInput.hexagonFirstRow.valueAsNumber - 1) * 2 - 5 < 3
          ? 0
          : (DOMInput.hexagonFirstRow.valueAsNumber - 1) * 2 - 5
      }n + ${
      DOMInput.hexagonFirstRow.valueAsNumber - 2 < 3
        ? 0
        : DOMInput.hexagonFirstRow.valueAsNumber - 2
    }) {
        margin-left: ${0.5 * DOMInput.hexagonSize.valueAsNumber}vw;
    }
  }
  `;
  }

  if (cssTextField) cssTextField.innerText = displayCSS;
};
