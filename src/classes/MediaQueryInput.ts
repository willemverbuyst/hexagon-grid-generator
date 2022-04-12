import { generateHexagons } from '../generators/hexagonGenerator'
import { DOMInputElement } from './DOMInputElement'

export class MediaQueryInput extends DOMInputElement {
	constructor(id: string) {
		super(id)
		this.init()
	}

	private generateCSStextOnChange() {
		this.element.oninput = () => generateHexagons()
	}

	init() {
		this.generateCSStextOnChange()
	}
}
