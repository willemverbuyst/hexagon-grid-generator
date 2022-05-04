import { InputBase } from './InputBase';
export declare class InputRoot {
    input: InputBase;
    rootElementName: string;
    postFix: string;
    root: HTMLElement;
    constructor(input: InputBase, rootElementName: string, postFix?: string);
    protected changeRoot(property: string, value: string): void;
    protected updateOnInput(): void;
    init(): void;
}
