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

// var inputValue = (<HTMLInputElement>document.getElementById(elementId)).value;

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

// EVENT LISTENERS
backgroundColor.oninput = (): void =>
  changeBackgroundColor(backgroundColor.value);

hexagonColor.oninput = (): void => changeHexagonColor(hexagonColor.value);

textColor.oninput = (): void => changeTextColor(textColor.value);

hexagonFirstRow.oninput = (): void =>
  changeAmountFirstRow(hexagonFirstRow.value);

hexagonSize.oninput = (): void => changeHexagonSize(hexagonSize.value);
