import { InputBase } from './InputBase'
import { root } from '../index'
import { main } from '../generators/main'

export class InputFirstRow extends InputBase {
	constructor(id: string) {
		super(id)
		this.init()
	}

	private changeRoot(value: number): void {
		root.style.setProperty('--number-of-hexagons', String(value))
	}

	private updateOnInput(): void {
		this.element.oninput = (): void => {
			this.changeRoot(this.valueAsNumber)
			main()
		}
	}

	init(): void {
		this.updateOnInput()
	}
}
