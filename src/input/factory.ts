import { InputBase } from './InputBase'
import { InputFirstRow } from './InputFirstRow'
import { InputGap } from './InputGap'
import { InputMediaQuery } from './InputMediaQuery'
import { InputNumberOfHexagons } from './InputNumberOfHexagons'
import { InputRoot } from './InputRoot'

export enum InputKind {
	FIRST_ROW,
	GAP,
	MEDIA_QUERY,
	NUMBER_OF_HEXAGONS,
	ROOT,
}

export class InputFactory {
	createInput(
		inputKind: InputKind,
		id: string,
		rootElementName = '',
		postFix?: string
	) {
		let input
		switch (inputKind) {
			case InputKind.FIRST_ROW:
				input = new InputFirstRow(id)
				break
			case InputKind.GAP:
				input = new InputGap(id, rootElementName, postFix)
				break
			case InputKind.MEDIA_QUERY:
				input = new InputMediaQuery(id)
				break
			case InputKind.NUMBER_OF_HEXAGONS:
				input = new InputNumberOfHexagons(id)
				break
			case InputKind.ROOT:
				input = new InputRoot(id, rootElementName, postFix)
				break
			default:
				input = new InputBase(id)
		}

		return input
	}
}
