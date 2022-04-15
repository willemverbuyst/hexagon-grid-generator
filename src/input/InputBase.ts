import { main } from '../generators/main'

export class InputBase {
	constructor(private id: string) {}

	element = <HTMLInputElement>document.getElementById(this.id)

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
