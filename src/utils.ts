export function assertNonNullish<T>(
  value: T,
  message: string,
): asserts value is NonNullable<T> {
  if (value === null || value === undefined) {
    throw Error(message);
  }
  return;
}

export function htmlElementNotFoundMessage(id: string) {
  return `HTMLElement #${id} not found!`;
}

export function roundToTwoDecimals(value: number) {
  return Number(Math.round(parseFloat(value + "e" + 2)) + "e-" + 2);
}

export function getElementByIdAndAssert<T extends HTMLElement = HTMLElement>(
  id: string,
): T {
  const element = <T>document.getElementById(id);
  const message = htmlElementNotFoundMessage(id);
  assertNonNullish(element, message);

  return element;
}
