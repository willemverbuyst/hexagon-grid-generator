import { InputBase } from './InputBase'

export class InputRoot extends InputBase {
	root = document.documentElement

	constructor(
		id: string,
		public rootElementName: string,
		public postFix: string = ''
	) {
		super(id)
		this.init()
	}

	protected changeRoot(property: string, value: string): void {
		this.root.style.setProperty(property, value)
	}

	protected updateOnInput(): void {
		this.element.oninput = (): void => {
			this.changeRoot(this.rootElementName, this.valueAsString + this.postFix)
			this.runMain()
		}
	}

	init(): void {
		this.updateOnInput()
	}
}
