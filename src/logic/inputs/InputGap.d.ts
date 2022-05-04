import { InputBase } from './InputBase';
import { InputRoot } from './InputRoot';
export declare class InputGap extends InputRoot {
    constructor(input: InputBase, rootElementName: string, postFix?: string);
    protected updateOnInput(): void;
}
