import { DOMInput } from '../index';
import { createMediaQuery } from '../utils/CSSHelperFunctions';

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
    displayCSS += createMediaQuery(1);
  }

  if (hexagonsFirstRow - 2 > 0) {
    displayCSS += createMediaQuery(2);
  }

  if (hexagonsFirstRow - 3 > 0) {
    displayCSS += createMediaQuery(3);
  }

  if (cssTextField) cssTextField.innerText = displayCSS;
};
