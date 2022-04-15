import { InputFactory, InputKind } from '../input/factory'

const factory = new InputFactory()

export const inputElements = {
	numberOfHexagons: factory.createInput(
		InputKind.NUMBER_OF_HEXAGONS,
		'hexagon-amount'
	),
	hexagonsFirstRow: factory.createInput(
		InputKind.FIRST_ROW,
		'hexagon-first-row'
	),
	backgroundColor: factory.createInput(
		InputKind.ROOT,
		'bg-color',
		'--color-bg'
	),
	hexagonColor: factory.createInput(
		InputKind.ROOT,
		'hexagon-color',
		'--color-inner-hexagon'
	),
	textColor: factory.createInput(InputKind.ROOT, 'text-color', '--color-text'),
	hexagonSize: factory.createInput(
		InputKind.ROOT,
		'hexagon-size',
		'--width-hexagon-outer',
		'vw'
	),
	containerSkewX: factory.createInput(
		InputKind.ROOT,
		'container-skew-X',
		'--skew-X',
		'deg'
	),
	containerSkewY: factory.createInput(
		InputKind.ROOT,
		'container-skew-Y',
		'--skew-Y',
		'deg'
	),
	hexagonRotation: factory.createInput(
		InputKind.ROOT,
		'hexagon-rotation',
		'--hover-rotation',
		'deg'
	),
	hexagonTransition: factory.createInput(
		InputKind.ROOT,
		'hexagon-transition',
		'--hover-transition',
		's'
	),
	hexagonScale: factory.createInput(
		InputKind.ROOT,
		'hexagon-scale',
		'--hover-scale'
	),
	hexagonGap: factory.createInput(
		InputKind.GAP,
		'hexagon-gap',
		'--size-hexagon-inner',
		'%'
	),
	mediaQuery_1: factory.createInput(InputKind.MEDIA_QUERY, 'media-query--1'),
	mediaQuery_2: factory.createInput(InputKind.MEDIA_QUERY, 'media-query--2'),
	mediaQuery_3: factory.createInput(InputKind.MEDIA_QUERY, 'media-query--3'),
}
