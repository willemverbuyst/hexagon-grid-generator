(function () {
  const root = document.documentElement;
  const hexagonContainer = document.getElementById('hexagon__container');

  class DOMInputElement {
    constructor(
      private id: string,
      private rootElementName: string = '',
      private postFix: string = ''
    ) {}

    element = <HTMLInputElement>document.getElementById(this.id);

    get value() {
      return this.element.value;
    }

    addEventListenerForRootChange() {
      this.element.oninput = (): void => {
        changeRootValues(
          this.rootElementName,
          this.element.value + this.postFix
        );
      };
    }

    addEventListenerForMediaQuery() {
      this.element.addEventListener('change', generateCSStext);
    }

    onInputChangeFirstRow() {
      this.element.oninput = (): void =>
        changeAmountFirstRow(this.element.value);
    }

    onInputChangeHexagonAmount() {
      this.element.oninput = (): void => generateHexagons(this.element.value);
    }

    onInputChangeGapWidth() {
      this.element.oninput = (): void => {
        changeRootValues(
          this.rootElementName,
          100 - parseInt(this.element.value) + this.postFix
        );
      };
    }
  }

  const backgroundColor = new DOMInputElement('bg-color', '--color-bg');
  const hexagonColor = new DOMInputElement(
    'hexagon-color',
    '--color-inner-hexagon'
  );
  const textColor = new DOMInputElement('text-color', '--color-text');
  const hexagonSize = new DOMInputElement(
    'hexagon-size',
    '--width-hexagon-outer',
    'vw'
  );
  const containerSkewX = new DOMInputElement(
    'container-skew-X',
    '--skew-X',
    'deg'
  );
  const containerSkewY = new DOMInputElement(
    'container-skew-Y',
    '--skew-Y',
    'deg'
  );
  const hexagonRotation = new DOMInputElement(
    'hexagon-rotation',
    '--hover-rotation',
    'deg'
  );
  const hexagonTransition = new DOMInputElement(
    'hexagon-transition',
    '--hover-transition',
    's'
  );
  const hexagonScale = new DOMInputElement('hexagon-scale', '--hover-scale');
  const hexagonFirstRow = new DOMInputElement('hexagon-first-row');
  const hexagonAmount = new DOMInputElement('hexagon-amount');
  const hexagonGap = new DOMInputElement(
    'hexagon-gap',
    '--size-hexagon-inner',
    '%'
  );
  const mediaQuery_1 = new DOMInputElement('media-query--1');
  const mediaQuery_2 = new DOMInputElement('media-query--2');
  const mediaQuery_3 = new DOMInputElement('media-query--3');

  backgroundColor.addEventListenerForRootChange();
  hexagonColor.addEventListenerForRootChange();
  textColor.addEventListenerForRootChange();
  hexagonSize.addEventListenerForRootChange();
  containerSkewX.addEventListenerForRootChange();
  containerSkewY.addEventListenerForRootChange();
  hexagonRotation.addEventListenerForRootChange();
  hexagonTransition.addEventListenerForRootChange();
  hexagonScale.addEventListenerForRootChange();
  hexagonFirstRow.onInputChangeFirstRow();
  hexagonAmount.onInputChangeHexagonAmount();
  hexagonGap.onInputChangeGapWidth();
  mediaQuery_1.addEventListenerForMediaQuery();
  mediaQuery_2.addEventListenerForMediaQuery();
  mediaQuery_3.addEventListenerForMediaQuery();

  // OUTPUT HTML CSS
  const htmlTextField = document.getElementById('html');
  const cssTextField = document.getElementById('css');

  // FUNCTIONS
  const changeRootValues = (property: string, value: string): void => {
    root.style.setProperty(property, value);
    generateCSStext();
  };

  const changeAmountFirstRow = (value: string): void => {
    root.style.setProperty('--amount-of-hexagons', value);
    generateHexagons(hexagonAmount.value);
  };

  const generateHexagons = (value: string): void => {
    let html: string;
    hexagonContainer.innerHTML = '';

    if (
      parseInt(hexagonFirstRow.value) === 1 ||
      parseInt(value) <= parseInt(hexagonFirstRow.value)
    ) {
      html = generateOneLine(parseInt(value));
    } else {
      html = generateRows(parseInt(value));
    }
    hexagonContainer.innerHTML = html;
  };

  const generateOneLine = (value: number): string => {
    let html_firstRow = '';
    for (let i = 0; i < value; i++) {
      html_firstRow += `
    <div class="hexagon__outer first-row_margin-top">
      <div class="hexagon__inner">${i + 1}
      </div>
    </div>`;
    }
    generateHTMLtext(value);
    return html_firstRow;
  };

  const generateRows = (value: number): string => {
    let html = '';
    let i = 0;

    // add css class (margin-top) to first row
    for (let j = 0; j < parseInt(hexagonFirstRow.value); j++) {
      i++;
      html += `
    <div class="hexagon__outer first-row_margin-top">
      <div class="hexagon__inner">${i}
      </div>
    </div>`;
    }

    // generate rows, even rows will get a css class
    let k = 0;
    while (k < value - parseInt(hexagonFirstRow.value)) {
      i++;
      if (
        k === 0 ||
        k % ((parseInt(hexagonFirstRow.value) - 1) * 2 + 1) === 0
      ) {
        html += `
        <div class="hexagon__outer even-rows__margin-left">
          <div class="hexagon__inner">${i}
          </div>
        </div>`;
      } else {
        html += `
        <div class="hexagon__outer">
          <div class="hexagon__inner">${i}
          </div>
        </div>`;
      }
      k++;
    }
    generateHTMLtext(value);
    return html;
  };

  // DISPLAY HTML AND CSS
  const generateHTMLtext = (value: number): void => {
    generateCSStext();
    let html = '';
    for (let i = 1; i <= value; i++) {
      html += `<div class="hexagon__outer"><div class="hexagon__inner">${i}</div></div>`;
    }

    let displayHTML = `
    <div class="hexagon-wrapper">
      <div class="hexagon-wrapper__hexagon-container">   
          ${html}
      </div>
    </div>
  `;
    htmlTextField.innerText = displayHTML;
  };

  const generateCSStext = (): void => {
    let displayCSS = `
  .hexagon-wrapper {
    background-color: ${backgroundColor.value};
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .hexagon-wrapper__hexagon-container {
    width: ${parseInt(hexagonFirstRow.value) * parseInt(hexagonSize.value)}vw;
    display: flex;
    flex-wrap: wrap;
    transform: skew(${containerSkewX.value}deg, ${containerSkewY.value}deg);
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
    width: ${hexagonSize.value}vw;
    height: ${(1.154665 * parseInt(hexagonSize.value)).toFixed(2)}vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${((1.154665 * parseInt(hexagonSize.value)) / -4).toFixed(2)}vw;
    transition: all ${hexagonTransition.value}s;
  }

  .hexagon__outer:hover {
    transform: scale(${hexagonScale.value}) rotate(${hexagonRotation.value}deg);
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
      margin-left: ${0.5 * parseInt(hexagonSize.value)}vw;
    }
  
  .hexagon__inner {
    background-color: ${hexagonColor.value};
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
    width: ${100 - parseInt(hexagonGap.value)}%;
    height: ${100 - parseInt(hexagonGap.value)}%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${textColor.value};
  }
  `;

    if (parseInt(hexagonFirstRow.value) - 1 > 0) {
      displayCSS += `
      @media (max-width: ${mediaQuery_1.value}px) {
        .hexagon-wrapper__hexagon-container {
          width: ${
            (parseInt(hexagonFirstRow.value) - 1) * parseInt(hexagonSize.value)
          }vw;
        }
    
        /* reset */
        .hexagon__outer:nth-child(-n + ${hexagonFirstRow.value}) {
          margin-top: ${((1.154665 * parseInt(hexagonSize.value)) / -4).toFixed(
            2
          )}vw;
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
        parseInt(hexagonFirstRow.value) < 3
          ? 0
          : parseInt(hexagonFirstRow.value)
      }) {
          margin-left: ${0.5 * parseInt(hexagonSize.value)}vw;
      }
    }
    `;
    }

    if (parseInt(hexagonFirstRow.value) - 2 > 0) {
      displayCSS += `
      @media only screen and (max-width: ${mediaQuery_2.value}px) {
        html {
          font-size: 50%;
        }

        .hexagon-wrapper__hexagon-container {
          width: ${
            (parseInt(hexagonFirstRow.value) - 2) * parseInt(hexagonSize.value)
          }vw;
        }

        /* reset */
        .hexagon__outer:nth-child(-n + ${parseInt(hexagonFirstRow.value) - 1}) {
          margin-top: ${((1.154665 * parseInt(hexagonSize.value)) / -4).toFixed(
            2
          )}vw;
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
          margin-left: ${0.5 * parseInt(hexagonSize.value)}vw;
      }
    }
    `;
    }

    if (parseInt(hexagonFirstRow.value) - 3 > 0) {
      displayCSS += `
      @media only screen and (max-width: ${mediaQuery_3.value}px) {
        .hexagon-wrapper__hexagon-container {
          width: ${
            (parseInt(hexagonFirstRow.value) - 3) * parseInt(hexagonSize.value)
          }vw;
        }

        /* reset */
        .hexagon__outer:nth-child(-n + ${parseInt(hexagonFirstRow.value) - 2}) {
          margin-top: ${((1.154665 * parseInt(hexagonSize.value)) / -4).toFixed(
            2
          )}vw;
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
          margin-left: ${0.5 * parseInt(hexagonSize.value)}vw;
      } 
    }
    `;
    }

    cssTextField.innerText = displayCSS;
  };

  // call the function for an initial display of hexagons
  generateHexagons(hexagonAmount.value);
})();
