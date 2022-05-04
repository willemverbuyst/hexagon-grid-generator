export declare class InputBase {
    private id;
    element: HTMLInputElement;
    constructor(id: string);
    get valueAsNumber(): number;
    get valueAsString(): string;
    runMain(): void;
}
