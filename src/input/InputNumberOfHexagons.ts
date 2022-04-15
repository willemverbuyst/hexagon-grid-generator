import { InputBase } from './InputBase'

export class InputNumberOfHexagons extends InputBase {
	constructor(id: string) {
		super(id)
		this.init()
	}

	private updateOnInput(): void {
		this.element.oninput = (): void => this.runMain()
	}

	init(): void {
		this.updateOnInput()
	}
}
