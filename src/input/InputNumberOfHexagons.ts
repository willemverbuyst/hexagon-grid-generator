import { InputBase } from './InputBase'
import { main } from '../generators/main'

export class InputNumberOfHexagons extends InputBase {
	constructor(id: string) {
		super(id)
		this.init()
	}

	private updateOnInput(): void {
		this.element.oninput = (): void => main()
	}

	init(): void {
		this.updateOnInput()
	}
}
