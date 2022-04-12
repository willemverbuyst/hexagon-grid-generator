import { main } from '../generators/main'
import { DOMInputElement } from './DOMInputElement'

export class MediaQueryInput extends DOMInputElement {
	constructor(id: string) {
		super(id)
		this.init()
	}

	private generateCSStextOnChange() {
		this.element.oninput = () => main()
	}

	init() {
		this.generateCSStextOnChange()
	}
}
