export class DOMInputElement {
	constructor(private id: string) {}

	element = <HTMLInputElement>document.getElementById(this.id)

	get valueAsNumber() {
		return Number(this.element.value)
	}

	get valueAsString() {
		return String(this.element.value)
	}
}
