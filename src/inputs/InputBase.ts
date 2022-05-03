import { main } from '../hexagons/main'

export class InputBase {
	element = <HTMLInputElement>document.getElementById(this.id)

	constructor(private id: string) {}

	get valueAsNumber(): number {
		return Number(this.element.value)
	}

	get valueAsString(): string {
		return String(this.element.value)
	}

	runMain(): void {
		main()
	}
}
