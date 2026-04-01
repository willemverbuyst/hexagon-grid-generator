import {
  POSTFIX_DEGREE,
  POSTFIX_PERCENTAGE,
  POSTFIX_SECONDS,
  POSTFIX_VW,
} from "../config/constants";
import type { AppElements } from "./getAndAssertHtmlElements";

type StyleInputBinding = {
  input: HTMLInputElement;
  cssVariable: string;
  postfix?: string;
  transformValue?: (value: number) => string;
};

function bindInput(
  input: HTMLInputElement,
  listener: (event: Event) => void,
): void {
  input.addEventListener("input", listener);
}

function bindStyleInput({
  input,
  cssVariable,
  postfix = "",
  transformValue,
}: StyleInputBinding): void {
  bindInput(input, () => {
    const nextValue =
      transformValue?.(Number(input.value)) ?? `${input.value}${postfix}`;

    document.documentElement.style.setProperty(cssVariable, nextValue);
  });
}

export function bindStyleInputs(inputs: AppElements["inputs"]): void {
  bindStyleInput({
    input: inputs.backgroundColor,
    cssVariable: "--color-bg",
  });
  bindStyleInput({
    input: inputs.hexagonColor,
    cssVariable: "--color-inner-hexagon",
  });
  bindStyleInput({
    input: inputs.textColor,
    cssVariable: "--color-text",
  });
  bindStyleInput({
    input: inputs.hexagonSize,
    cssVariable: "--width-hexagon-outer",
    postfix: POSTFIX_VW,
  });
  bindStyleInput({
    input: inputs.containerSkewX,
    cssVariable: "--skew-X",
    postfix: POSTFIX_DEGREE,
  });
  bindStyleInput({
    input: inputs.containerSkewY,
    cssVariable: "--skew-Y",
    postfix: POSTFIX_DEGREE,
  });
  bindStyleInput({
    input: inputs.hexagonRotation,
    cssVariable: "--hover-rotation",
    postfix: POSTFIX_DEGREE,
  });
  bindStyleInput({
    input: inputs.hexagonTransition,
    cssVariable: "--hover-transition",
    postfix: POSTFIX_SECONDS,
  });
  bindStyleInput({
    input: inputs.hexagonScale,
    cssVariable: "--hover-scale",
  });
  bindStyleInput({
    input: inputs.hexagonGap,
    cssVariable: "--size-hexagon-inner",
    postfix: POSTFIX_PERCENTAGE,
    transformValue: (value) => `${100 - value}${POSTFIX_PERCENTAGE}`,
  });
}
