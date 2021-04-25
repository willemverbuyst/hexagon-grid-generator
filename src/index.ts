import { generateHexagons, hexagonAmount } from './classes/HexagonInput';
import { MediaQueryInput } from './classes/MediaQueryInput';
import { RootInput, RootInputGap } from './classes/RootInput';

export const root = document.documentElement;
export const hexagonContainer = document.getElementById('hexagon__container');

export const mediaQuery_1 = new MediaQueryInput('media-query--1');
export const mediaQuery_2 = new MediaQueryInput('media-query--2');
export const mediaQuery_3 = new MediaQueryInput('media-query--3');
export const backgroundColor = new RootInput('bg-color', '--color-bg');
export const hexagonColor = new RootInput(
  'hexagon-color',
  '--color-inner-hexagon'
);
export const textColor = new RootInput('text-color', '--color-text');
export const hexagonSize = new RootInput(
  'hexagon-size',
  '--width-hexagon-outer',
  'vw'
);
export const containerSkewX = new RootInput(
  'container-skew-X',
  '--skew-X',
  'deg'
);
export const containerSkewY = new RootInput(
  'container-skew-Y',
  '--skew-Y',
  'deg'
);
export const hexagonRotation = new RootInput(
  'hexagon-rotation',
  '--hover-rotation',
  'deg'
);
export const hexagonTransition = new RootInput(
  'hexagon-transition',
  '--hover-transition',
  's'
);
export const hexagonScale = new RootInput('hexagon-scale', '--hover-scale');

export const hexagonGap = new RootInputGap(
  'hexagon-gap',
  '--size-hexagon-inner',
  '%'
);

// call the function for an initial display of hexagons
generateHexagons(hexagonAmount.value);
