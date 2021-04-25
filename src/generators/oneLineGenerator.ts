import { generateHTMLtext } from './htmlTextGenerator';

export const generateOneLine = (value: number): string => {
  let html_firstRow = '';
  for (let i = 0; i < value; i++) {
    html_firstRow += `
    <div class="hexagon__outer first-row_margin-top">
      <div class="hexagon__inner">${i + 1}
      </div>
    </div>`;
  }
  generateHTMLtext(value);
  return html_firstRow;
};
