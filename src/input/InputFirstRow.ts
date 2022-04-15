import { InputBase } from './InputBase'

export class InputFirstRow extends InputBase {
	root = document.documentElement

	constructor(id: string) {
		super(id)
		this.init()
	}

	private changeRoot(value: number): void {
		this.root.style.setProperty('--number-of-hexagons', String(value))
	}

	private updateOnInput(): void {
		this.element.oninput = (): void => {
			this.changeRoot(this.valueAsNumber)
			this.runMain()
		}
	}

	init(): void {
		this.updateOnInput()
	}
}
