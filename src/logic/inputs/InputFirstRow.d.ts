import { InputBase } from './InputBase';
export declare class InputFirstRow {
    input: InputBase;
    root: HTMLElement;
    constructor(input: InputBase);
    private changeRoot;
    private updateOnInput;
    init(): void;
}
