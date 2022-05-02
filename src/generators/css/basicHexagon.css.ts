export const generateBasicHexagonCSS = (width: number, height = width) =>
	`-webkit-clip-path: polygon(
  0 25%,
  50% 0,
  100% 25%,
  100% 75%,
  50% 100%,
  0 75%
);
clip-path: polygon(
  0 25%,
  50% 0,
  100% 25%,
  100% 75%,
  50% 100%,
  0 75%
);
width: ${width}%;
height: ${height}%;
display: flex;
justify-content: center;
align-items: center;`
