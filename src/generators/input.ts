import {
	InputFactory,
	InputFirstRow,
	InputGap,
	InputKind,
	InputMediaQuery,
	InputNumberOfHexagons,
	InputRoot,
} from '../inputs'

const factory = new InputFactory()

export const inputElements = {
	numberOfHexagons: factory.createInput(
		InputKind.NUMBER_OF_HEXAGONS,
		'hexagon-amount'
	) as InputNumberOfHexagons,
	hexagonsFirstRow: factory.createInput(
		InputKind.FIRST_ROW,
		'hexagon-first-row'
	) as InputFirstRow,
	backgroundColor: factory.createInput(
		InputKind.ROOT,
		'bg-color',
		'--color-bg'
	) as InputRoot,
	hexagonColor: factory.createInput(
		InputKind.ROOT,
		'hexagon-color',
		'--color-inner-hexagon'
	) as InputRoot,
	textColor: factory.createInput(
		InputKind.ROOT,
		'text-color',
		'--color-text'
	) as InputRoot,
	hexagonSize: factory.createInput(
		InputKind.ROOT,
		'hexagon-size',
		'--width-hexagon-outer',
		'vw'
	) as InputRoot,
	containerSkewX: factory.createInput(
		InputKind.ROOT,
		'container-skew-X',
		'--skew-X',
		'deg'
	) as InputRoot,
	containerSkewY: factory.createInput(
		InputKind.ROOT,
		'container-skew-Y',
		'--skew-Y',
		'deg'
	) as InputRoot,
	hexagonRotation: factory.createInput(
		InputKind.ROOT,
		'hexagon-rotation',
		'--hover-rotation',
		'deg'
	) as InputRoot,
	hexagonTransition: factory.createInput(
		InputKind.ROOT,
		'hexagon-transition',
		'--hover-transition',
		's'
	) as InputRoot,
	hexagonScale: factory.createInput(
		InputKind.ROOT,
		'hexagon-scale',
		'--hover-scale'
	) as InputRoot,
	hexagonGap: factory.createInput(
		InputKind.GAP,
		'hexagon-gap',
		'--size-hexagon-inner',
		'%'
	) as InputGap,
	mediaQuery_1: factory.createInput(
		InputKind.MEDIA_QUERY,
		'media-query--1'
	) as InputMediaQuery,
	mediaQuery_2: factory.createInput(
		InputKind.MEDIA_QUERY,
		'media-query--2'
	) as InputMediaQuery,
	mediaQuery_3: factory.createInput(
		InputKind.MEDIA_QUERY,
		'media-query--3'
	) as InputMediaQuery,
}
