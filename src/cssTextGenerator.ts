import { hexagonFirstRow } from './classes/HexagonInput';
import { mediaQueries, rootInputs, rootInputGap } from './index';

export const cssTextField = document.getElementById('css');

export const generateCSStext = (): void => {
  let displayCSS = `
.hexagon-wrapper {
  background-color: ${rootInputs.backgroundColor.value};
  display: flex;
  justify-content: center;
  align-items: center;
}

.hexagon-wrapper__hexagon-container {
  width: ${
    parseInt(hexagonFirstRow.value) * parseInt(rootInputs.hexagonSize.value)
  }vw;
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
  height: ${(1.154665 * parseInt(rootInputs.hexagonSize.value)).toFixed(2)}vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${(
    (1.154665 * parseInt(rootInputs.hexagonSize.value)) /
    -4
  ).toFixed(2)}vw;
  transition: all ${rootInputs.hexagonTransition.value}s;
}

.hexagon__outer:hover {
  transform: scale(${rootInputs.hexagonScale.value}) rotate(${
    rootInputs.hexagonRotation.value
  }deg);
}

.hexagon__outer:nth-child(${
    parseInt(hexagonFirstRow.value) === 1 ? 'n' : '-n'
  } + ${parseInt(hexagonFirstRow.value) === 1 ? 0 : hexagonFirstRow.value}) {
    margin-top: 0;
  }
  
.hexagon__outer:nth-child(${
    parseInt(hexagonFirstRow.value) === 1
      ? ''
      : parseInt(hexagonFirstRow.value) * 2 - 1
  }n + ${
    parseInt(hexagonFirstRow.value) === 1
      ? ''
      : parseInt(hexagonFirstRow.value) * 1 + 1
  }) {
    margin-left: ${0.5 * parseInt(rootInputs.hexagonSize.value)}vw;
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
  width: ${100 - parseInt(rootInputGap.hexagonGap.value)}%;
  height: ${100 - parseInt(rootInputGap.hexagonGap.value)}%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${rootInputs.textColor.value};
}
`;

  if (parseInt(hexagonFirstRow.value) - 1 > 0) {
    displayCSS += `
    @media (max-width: ${mediaQueries.mediaQuery_1.value}px) {
      .hexagon-wrapper__hexagon-container {
        width: ${
          (parseInt(hexagonFirstRow.value) - 1) *
          parseInt(rootInputs.hexagonSize.value)
        }vw;
      }
  
      /* reset */
      .hexagon__outer:nth-child(-n + ${hexagonFirstRow.value}) {
        margin-top: ${(
          (1.154665 * parseInt(rootInputs.hexagonSize.value)) /
          -4
        ).toFixed(2)}vw;
      }

      /* reset */
      .hexagon__outer:nth-child(${
        (parseInt(hexagonFirstRow.value) - 1) * 2 + 1
      }n + ${parseInt(hexagonFirstRow.value) + 1}) {
          margin-left: 0;
      }
  
      .hexagon__outer:nth-child(${
        parseInt(hexagonFirstRow.value) - 1 < 2 ? 'n' : '-n'
      } + ${
      parseInt(hexagonFirstRow.value) - 1 < 2
        ? 0
        : parseInt(hexagonFirstRow.value) - 1
    }) {
          margin-top: 0;
      }
  
      .hexagon__outer:nth-child(${
        (parseInt(hexagonFirstRow.value) - 1) * 2 - 1 < 3
          ? 0
          : (parseInt(hexagonFirstRow.value) - 1) * 2 - 1
      }n + ${
      parseInt(hexagonFirstRow.value) < 3 ? 0 : parseInt(hexagonFirstRow.value)
    }) {
        margin-left: ${0.5 * parseInt(rootInputs.hexagonSize.value)}vw;
    }
  }
  `;
  }

  if (parseInt(hexagonFirstRow.value) - 2 > 0) {
    displayCSS += `
    @media only screen and (max-width: ${mediaQueries.mediaQuery_2.value}px) {
      html {
        font-size: 50%;
      }

      .hexagon-wrapper__hexagon-container {
        width: ${
          (parseInt(hexagonFirstRow.value) - 2) *
          parseInt(rootInputs.hexagonSize.value)
        }vw;
      }

      /* reset */
      .hexagon__outer:nth-child(-n + ${parseInt(hexagonFirstRow.value) - 1}) {
        margin-top: ${(
          (1.154665 * parseInt(rootInputs.hexagonSize.value)) /
          -4
        ).toFixed(2)}vw;
      }

      /* reset */
      .hexagon__outer:nth-child(${
        (parseInt(hexagonFirstRow.value) - 1) * 2 - 1
      }n + ${hexagonFirstRow.value}) {
        margin-left: 0;
      }

      .hexagon__outer:nth-child(${
        parseInt(hexagonFirstRow.value) - 2 < 2 ? 'n' : '-n'
      } + ${
      parseInt(hexagonFirstRow.value) - 2 < 2
        ? 0
        : parseInt(hexagonFirstRow.value) - 2
    }) {
        margin-top: 0;
      }

      .hexagon__outer:nth-child(${
        (parseInt(hexagonFirstRow.value) - 1) * 2 - 3 < 3
          ? 0
          : (parseInt(hexagonFirstRow.value) - 1) * 2 - 3
      }n + ${
      parseInt(hexagonFirstRow.value) - 1 < 3
        ? 0
        : parseInt(hexagonFirstRow.value) - 1
    }) {
        margin-left: ${0.5 * parseInt(rootInputs.hexagonSize.value)}vw;
    }
  }
  `;
  }

  if (parseInt(hexagonFirstRow.value) - 3 > 0) {
    displayCSS += `
    @media only screen and (max-width: ${mediaQueries.mediaQuery_3.value}px) {
      .hexagon-wrapper__hexagon-container {
        width: ${
          (parseInt(hexagonFirstRow.value) - 3) *
          parseInt(rootInputs.hexagonSize.value)
        }vw;
      }

      /* reset */
      .hexagon__outer:nth-child(-n + ${parseInt(hexagonFirstRow.value) - 2}) {
        margin-top: ${(
          (1.154665 * parseInt(rootInputs.hexagonSize.value)) /
          -4
        ).toFixed(2)}vw;
      }

      /* reset */
      .hexagon__outer:nth-child(${
        (parseInt(hexagonFirstRow.value) - 1) * 2 - 3
      }n + ${parseInt(hexagonFirstRow.value) - 1}) {
        margin-left: 0;
      }

      .hexagon__outer:nth-child(${
        parseInt(hexagonFirstRow.value) - 3 < 2 ? 'n' : '-n'
      } + ${
      parseInt(hexagonFirstRow.value) - 3 < 2
        ? 0
        : parseInt(hexagonFirstRow.value) - 3
    }) {
        margin-top: 0;
      }

      .hexagon__outer:nth-child(${
        (parseInt(hexagonFirstRow.value) - 1) * 2 - 5 < 3
          ? 0
          : (parseInt(hexagonFirstRow.value) - 1) * 2 - 5
      }n + ${
      parseInt(hexagonFirstRow.value) - 2 < 3
        ? 0
        : parseInt(hexagonFirstRow.value) - 2
    }) {
        margin-left: ${0.5 * parseInt(rootInputs.hexagonSize.value)}vw;
    } 
  }
  `;
  }

  cssTextField!.innerText = displayCSS;
};
