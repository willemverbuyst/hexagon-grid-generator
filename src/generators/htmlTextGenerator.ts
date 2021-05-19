import { DOMInput } from '../index';
const htmlTextField = document.getElementById('html');
import { createHexagonHTMLString } from '../utils/helperFunctions';

export const generateHTMLtext = (): void => {
  let html: string = '';
  for (let i = 1; i <= DOMInput.hexagonAmount.valueAsNumber; i++) {
    html += createHexagonHTMLString(i);
  }

  let displayHTML = `
  <div class="hexagon-wrapper">
    <div class="hexagon-wrapper__hexagon-container">   
        ${html}
    </div>
  </div>
`;
  if (htmlTextField) {
    htmlTextField.innerText = displayHTML;
  }
};
