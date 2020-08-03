const root = document.documentElement;
const hexagonContainer = document.getElementById('hexagon__container');

// INPUT FIELD
const backgroundColor = <HTMLInputElement>document.getElementById('bg-color');
const hexagonColor = <HTMLInputElement>document.getElementById('hexagon-color');
const textColor = <HTMLInputElement>document.getElementById('text-color');
const hexagonSize = <HTMLInputElement>document.getElementById('hexagon-size');
const containerSkewX = <HTMLInputElement>(
  document.getElementById('container-skew-X')
);
const containerSkewY = <HTMLInputElement>(
  document.getElementById('container-skew-Y')
);
const hexagonGap = <HTMLInputElement>document.getElementById('hexagon-gap');
const hexagonAmount = <HTMLInputElement>(
  document.getElementById('hexagon-amount')
);
const hexagonFirstRow = <HTMLInputElement>(
  document.getElementById('hexagon-first-row')
);
const hexagonRotation = <HTMLInputElement>(
  document.getElementById('hexagon-rotation')
);
const hexagonScale = <HTMLInputElement>document.getElementById('hexagon-scale');
const hexagonTransition = <HTMLInputElement>(
  document.getElementById('hexagon-transition')
);
const mediaQuery_1 = <HTMLInputElement>(
  document.getElementById('media-query--1')
);
const mediaQuery_2 = <HTMLInputElement>(
  document.getElementById('media-query--2')
);
const mediaQuery_3 = <HTMLInputElement>(
  document.getElementById('media-query--3')
);

// OUTPUT HTML CSS
const htmlTextField = document.getElementById('html');
const cssTextField = document.getElementById('css');

// FUNCTIONS
const changeBackgroundColor = (value: string): void => {
  root.style.setProperty('--color-bg', value);
  // generateCSStext();
};

const changeHexagonColor = (value: string): void => {
  root.style.setProperty('--color-inner-hexagon', value);
  // generateCSStext();
};

const changeTextColor = (value: string): void => {
  root.style.setProperty('--color-text', value);
  // generateCSStext();
};

const changeHexagonSize = (value: string): void => {
  root.style.setProperty('--width-hexagon-outer', value + 'vw');
  // generateCSStext();
};

const changeAmountFirstRow = (value: string): void => {
  root.style.setProperty('--amount-of-hexagons', value);
  // generateHexagons(hexagonAmount.value);
};

const generateHexagons = (value: string) => {
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

const generateOneLine = (value: number): string{
  let html_firstRow = '';
  for (let i = 0; i < value; i++) {
    html_firstRow += `
    <div class="hexagon__outer first-row_margin-top">
      <div class="hexagon__inner">${i + 1}
      </div>
    </div>`;
  }
  // generateHTMLtext(value);
  return html_firstRow;
}

const generateRows = (value: number): string =>{
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
  // generateHTMLtext(value);
  return html;
}

// EVENT LISTENERS
backgroundColor.oninput = (): void =>
  changeBackgroundColor(backgroundColor.value);

hexagonColor.oninput = (): void => changeHexagonColor(hexagonColor.value);

textColor.oninput = (): void => changeTextColor(textColor.value);

hexagonFirstRow.oninput = (): void =>
  changeAmountFirstRow(hexagonFirstRow.value);

hexagonSize.oninput = (): void => changeHexagonSize(hexagonSize.value);

hexagonAmount.oninput = (): void => generateHexagons(hexagonAmount.value);
