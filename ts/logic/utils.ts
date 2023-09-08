export function assertNonNullish<T>(
  value: T,
  message: string
): asserts value is NonNullable<T> {
  if (value === null || value === undefined) {
    throw Error(message);
  }
  return;
}

export function roundToTwoDecimals(value: number) {
  return Number(Math.round(parseFloat(value + "e" + 2)) + "e-" + 2);
}
