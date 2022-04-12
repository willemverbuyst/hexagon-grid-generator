import { DOMInputElement } from './DOMInputElement'
import { root } from '../index'
import { main } from '../generators/main'

export class HexagonInputFirstRow extends DOMInputElement {
	constructor(id: string) {
		super(id)
		this.init()
	}

	private changeAmountFirstRow(value: number) {
		root.style.setProperty('--amount-of-hexagons', String(value))
		main()
	}

	private onInputChangeFirstRow() {
		this.element.oninput = (): void =>
			this.changeAmountFirstRow(this.valueAsNumber)
	}

	init() {
		this.onInputChangeFirstRow()
	}
}
