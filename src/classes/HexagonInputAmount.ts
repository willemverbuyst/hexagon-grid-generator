import { DOMInputElement } from './DOMInputElement'
import { main } from '../generators/main'

export class HexagonInputAmount extends DOMInputElement {
	constructor(id: string) {
		super(id)
		this.init()
	}

	private onInputChangeHexagonAmount() {
		this.element.oninput = (): void => main()
	}

	init() {
		this.onInputChangeHexagonAmount()
	}
}
