import { generateHexagons, hexagonAmount } from './classes/HexagonInput';
import { MediaQueryInput } from './classes/MediaQueryInput';

export const root = document.documentElement;
export const hexagonContainer = document.getElementById('hexagon__container');

export const mediaQuery_1 = new MediaQueryInput('media-query--1');
export const mediaQuery_2 = new MediaQueryInput('media-query--2');
export const mediaQuery_3 = new MediaQueryInput('media-query--3');

// call the function for an initial display of hexagons
generateHexagons(hexagonAmount.value);
