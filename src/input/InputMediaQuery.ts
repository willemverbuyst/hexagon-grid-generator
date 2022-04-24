import { InputBase } from './InputBase'

export class InputMediaQuery {
	constructor(public input: InputBase) {
		this.init()
	}

	private updateOnInput(): void {
		this.input.element.oninput = () => this.input.runMain()
	}

	init(): void {
		this.updateOnInput()
	}
}
