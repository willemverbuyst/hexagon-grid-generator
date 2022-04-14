import { main } from './generators/main'
import {
	InputNumberOfHexagons,
	InputFirstRow,
	InputRoot,
	InputGap,
	InputMediaQuery,
} from './input'
import './style.css'

export const root = document.documentElement

export const DOMInput = {
	numberOfHexagons: new InputNumberOfHexagons('hexagon-amount'),
	hexagonsFirstRow: new InputFirstRow('hexagon-first-row'),
	backgroundColor: new InputRoot('bg-color', '--color-bg'),
	hexagonColor: new InputRoot('hexagon-color', '--color-inner-hexagon'),
	textColor: new InputRoot('text-color', '--color-text'),
	hexagonSize: new InputRoot('hexagon-size', '--width-hexagon-outer', 'vw'),
	containerSkewX: new InputRoot('container-skew-X', '--skew-X', 'deg'),
	containerSkewY: new InputRoot('container-skew-Y', '--skew-Y', 'deg'),
	hexagonRotation: new InputRoot('hexagon-rotation', '--hover-rotation', 'deg'),
	hexagonTransition: new InputRoot(
		'hexagon-transition',
		'--hover-transition',
		's'
	),
	hexagonScale: new InputRoot('hexagon-scale', '--hover-scale'),
	hexagonGap: new InputGap('hexagon-gap', '--size-hexagon-inner', '%'),
	mediaQuery_1: new InputMediaQuery('media-query--1'),
	mediaQuery_2: new InputMediaQuery('media-query--2'),
	mediaQuery_3: new InputMediaQuery('media-query--3'),
}

// call the function for an initial display of hexagons
main()
