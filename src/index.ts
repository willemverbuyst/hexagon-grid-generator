import { generateHexagons, hexagonAmount } from './classes/HexagonInput';

export const root = document.documentElement;
export const hexagonContainer = document.getElementById('hexagon__container');

// call the function for an initial display of hexagons
generateHexagons(hexagonAmount.value);
