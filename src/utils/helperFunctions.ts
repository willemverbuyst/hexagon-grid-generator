export const createHexagonHTMLString = (
  i: number,
  className: string = ''
): string => {
  return `
    <div class="hexagon__outer ${className}">
      <div class="hexagon__inner">${i}</div>
    </div>`;
};
