import { InputBase } from './InputBase'

export class InputFirstRow {
	root = document.documentElement

	constructor(public input: InputBase) {
		this.init()
	}

	private changeRoot(value: number): void {
		this.root.style.setProperty('--number-of-hexagons', String(value))
	}

	private updateOnInput(): void {
		this.input.element.oninput = (): void => {
			this.changeRoot(this.input.valueAsNumber)
			this.input.runMain()
		}
	}

	init(): void {
		this.updateOnInput()
	}
}
