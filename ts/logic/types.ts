import {
  InputBase,
  InputFirstRow,
  InputGap,
  InputMediaQuery,
  InputNumberOfHexagons,
  InputRoot,
} from "./inputs";

export type Input =
  | InputFirstRow
  | InputGap
  | InputMediaQuery
  | InputNumberOfHexagons
  | InputRoot
  | InputBase;

export const InputKind = {
  FIRST_ROW: "FIRST_ROW",
  GAP: "GAP",
  MEDIA_QUERY: "MEDIA_QUERY",
  NUMBER_OF_HEXAGONS: "NUMBER_OF_HEXAGONS",
  ROOT: "ROOT",
} as const;

export interface CSSInputValues {
  backgroundColor: string;
  containerSkewX: number;
  containerSkewY: number;
  hexagonsFirstRow: number;
  hexagonColor: string;
  hexagonGap: number;
  hexagonRotation: number;
  hexagonScale: number;
  hexagonSize: number;
  hexagonTransition: number;
  mediaQuery_1: number;
  mediaQuery_2: number;
  mediaQuery_3: number;
  textColor: string;
}

export interface HTMLInputValues {
  numberOfHexagons: number;
}
