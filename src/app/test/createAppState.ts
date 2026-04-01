import type { AppState } from "../readAppState";

export const defaultAppState: AppState = {
  numberOfHexagons: 5,
  hexagonsFirstRow: 3,
  backgroundColor: "#101010",
  hexagonColor: "#202020",
  textColor: "#303030",
  hexagonSize: 10,
  containerSkewX: 5,
  containerSkewY: 6,
  hexagonRotation: 7,
  hexagonTransition: 0.2,
  hexagonScale: 1.3,
  hexagonGap: 20,
  mediaQuery_1: 900,
  mediaQuery_2: 700,
  mediaQuery_3: 500,
};

export function createAppState(
  overrides: Partial<AppState> = {},
): AppState {
  return {
    ...defaultAppState,
    ...overrides,
  };
}
