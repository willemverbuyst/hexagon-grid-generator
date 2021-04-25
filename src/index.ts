import { generateCSStext } from './cssGenerator';
import { generateHTMLtext } from './htmlGenerator';

export const root = document.documentElement;
export const hexagonContainer = document.getElementById('hexagon__container');

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
      changeRootValues(this.rootElementName, this.element.value + this.postFix);
    };
  }

  addEventListenerForMediaQuery() {
    this.element.addEventListener('change', generateCSStext);
  }

  onInputChangeFirstRow() {
    this.element.oninput = (): void => changeAmountFirstRow(this.element.value);
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

export const backgroundColor = new DOMInputElement('bg-color', '--color-bg');
export const hexagonColor = new DOMInputElement(
  'hexagon-color',
  '--color-inner-hexagon'
);
export const textColor = new DOMInputElement('text-color', '--color-text');
export const hexagonSize = new DOMInputElement(
  'hexagon-size',
  '--width-hexagon-outer',
  'vw'
);
export const containerSkewX = new DOMInputElement(
  'container-skew-X',
  '--skew-X',
  'deg'
);
export const containerSkewY = new DOMInputElement(
  'container-skew-Y',
  '--skew-Y',
  'deg'
);
export const hexagonRotation = new DOMInputElement(
  'hexagon-rotation',
  '--hover-rotation',
  'deg'
);
export const hexagonTransition = new DOMInputElement(
  'hexagon-transition',
  '--hover-transition',
  's'
);
export const hexagonScale = new DOMInputElement(
  'hexagon-scale',
  '--hover-scale'
);
export const hexagonFirstRow = new DOMInputElement('hexagon-first-row');
export const hexagonAmount = new DOMInputElement('hexagon-amount');
export const hexagonGap = new DOMInputElement(
  'hexagon-gap',
  '--size-hexagon-inner',
  '%'
);
export const mediaQuery_1 = new DOMInputElement('media-query--1');
export const mediaQuery_2 = new DOMInputElement('media-query--2');
export const mediaQuery_3 = new DOMInputElement('media-query--3');

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
  hexagonContainer!.innerHTML = '';

  if (
    parseInt(hexagonFirstRow.value) === 1 ||
    parseInt(value) <= parseInt(hexagonFirstRow.value)
  ) {
    html = generateOneLine(parseInt(value));
  } else {
    html = generateRows(parseInt(value));
  }
  hexagonContainer!.innerHTML = html;
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
    if (k === 0 || k % ((parseInt(hexagonFirstRow.value) - 1) * 2 + 1) === 0) {
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

// call the function for an initial display of hexagons
generateHexagons(hexagonAmount.value);
