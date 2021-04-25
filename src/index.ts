import { generateHexagons, hexagonAmount } from './classes/HexagonInput';
import { MediaQueryInput } from './classes/MediaQueryInput';
import { RootInput, RootInputGap } from './classes/RootInput';

export const root = document.documentElement;
export const hexagonContainer = document.getElementById('hexagon__container');

export const mediaQueries = {
  mediaQuery_1: new MediaQueryInput('media-query--1'),
  mediaQuery_2: new MediaQueryInput('media-query--2'),
  mediaQuery_3: new MediaQueryInput('media-query--3'),
};

export const rootInputs = {
  backgroundColor: new RootInput('bg-color', '--color-bg'),
  hexagonColor: new RootInput('hexagon-color', '--color-inner-hexagon'),
  textColor: new RootInput('text-color', '--color-text'),
  hexagonSize: new RootInput('hexagon-size', '--width-hexagon-outer', 'vw'),
  containerSkewX: new RootInput('container-skew-X', '--skew-X', 'deg'),
  containerSkewY: new RootInput('container-skew-Y', '--skew-Y', 'deg'),
  hexagonRotation: new RootInput('hexagon-rotation', '--hover-rotation', 'deg'),
  hexagonTransition: new RootInput(
    'hexagon-transition',
    '--hover-transition',
    's'
  ),
  hexagonScale: new RootInput('hexagon-scale', '--hover-scale'),
};

export const rootInputGap = {
  hexagonGap: new RootInputGap('hexagon-gap', '--size-hexagon-inner', '%'),
};

// call the function for an initial display of hexagons
generateHexagons(hexagonAmount.value);
