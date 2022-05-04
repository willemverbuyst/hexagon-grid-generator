import { InputBase } from './InputBase';
import { InputFirstRow } from './InputFirstRow';
import { InputMediaQuery } from './InputMediaQuery';
import { InputNumberOfHexagons } from './InputNumberOfHexagons';
import { InputRoot } from './InputRoot';
export declare enum InputKind {
    FIRST_ROW = 0,
    GAP = 1,
    MEDIA_QUERY = 2,
    NUMBER_OF_HEXAGONS = 3,
    ROOT = 4
}
export declare class InputFactory {
    createInput(inputKind: InputKind, id: string, rootElementName?: string, postFix?: string): InputFirstRow | InputBase | InputRoot | InputMediaQuery | InputNumberOfHexagons;
}
