export const generateBackgroundCSS = (backgroundColor: string): string =>
	`.hexagon-wrapper {
  background-color: ${backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  }
  `