import { main } from '../generators/main'
import { InputBase } from './InputBase'
import { root } from '../index'

export class InputRoot extends InputBase {
	constructor(
		id: string,
		public rootElementName: string,
		public postFix: string = ''
	) {
		super(id)
		this.init()
	}

	protected changeRoot(property: string, value: string): void {
		root.style.setProperty(property, value)
	}

	protected updateOnInput(): void {
		this.element.oninput = (): void => {
			this.changeRoot(this.rootElementName, this.valueAsString + this.postFix)
			main()
		}
	}

	init(): void {
		this.updateOnInput()
	}
}
