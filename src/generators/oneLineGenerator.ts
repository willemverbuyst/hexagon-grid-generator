export const generateOneLine = (value: number): string => {
  let html = '';

  for (let i = 1; i <= value; i++) {
    html += `
    <div class="hexagon__outer">
      <div class="hexagon__inner">${i}
      </div>
    </div>`;
  }

  return html;
};
