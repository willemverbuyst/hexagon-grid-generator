import { InputBase } from "./InputBase";
import { InputFirstRow } from "./InputFirstRow";
import { InputGap } from "./InputGap";
import { InputMediaQuery } from "./InputMediaQuery";
import { InputNumberOfHexagons } from "./InputNumberOfHexagons";
import { InputRoot } from "./InputRoot";

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
