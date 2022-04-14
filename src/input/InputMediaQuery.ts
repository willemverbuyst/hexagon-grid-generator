import { main } from '../generators/main'
import { InputBase } from './InputBase'

export class InputMediaQuery extends InputBase {
	constructor(id: string) {
		super(id)
		this.init()
	}

	private updateOnInput(): void {
		this.element.oninput = () => main()
	}

	init(): void {
		this.updateOnInput()
	}
}
