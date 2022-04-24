import { InputBase } from './InputBase'

export class InputNumberOfHexagons {
	constructor(public input: InputBase) {
		this.init()
	}

	private updateOnInput(): void {
		this.input.element.oninput = (): void => this.input.runMain()
	}

	init(): void {
		this.updateOnInput()
	}
}
