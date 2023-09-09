import { InputBase } from "./InputBase";
import { InputFirstRow } from "./InputFirstRow";
import { InputGap } from "./InputGap";
import { InputMediaQuery } from "./InputMediaQuery";
import { InputNumberOfHexagons } from "./InputNumberOfHexagons";
import { InputRoot } from "./InputRoot";

export const inputElements = {
  numberOfHexagons: new InputNumberOfHexagons(new InputBase("hexagon-amount")),
  hexagonsFirstRow: new InputFirstRow(new InputBase("hexagon-first-row")),
  backgroundColor: new InputRoot(new InputBase("bg-color"), "--color-bg"),
  hexagonColor: new InputRoot(
    new InputBase("hexagon-color"),
    "--color-inner-hexagon"
  ),
  textColor: new InputRoot(new InputBase("text-color"), "--color-text"),
  hexagonSize: new InputRoot(
    new InputBase("hexagon-size"),
    "--width-hexagon-outer",
    "vw"
  ),
  containerSkewX: new InputRoot(
    new InputBase("container-skew-X"),
    "--skew-X",
    "deg"
  ),
  containerSkewY: new InputRoot(
    new InputBase("container-skew-Y"),
    "--skew-Y",
    "deg"
  ),
  hexagonRotation: new InputRoot(
    new InputBase("hexagon-rotation"),
    "--hover-rotation",
    "deg"
  ),
  hexagonTransition: new InputRoot(
    new InputBase("hexagon-transition"),
    "--hover-transition",
    "s"
  ),
  hexagonScale: new InputRoot(new InputBase("hexagon-scale"), "--hover-scale"),
  hexagonGap: new InputGap(
    new InputBase("hexagon-gap"),
    "--size-hexagon-inner",
    "%"
  ),
  mediaQuery_1: new InputMediaQuery(new InputBase("media-query--1")),
  mediaQuery_2: new InputMediaQuery(new InputBase("media-query--2")),
  mediaQuery_3: new InputMediaQuery(new InputBase("media-query--3")),
};
