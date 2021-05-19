import { DOMInput } from '../index';
import { createHexagonHTMLString } from '../utils/helperFunctions';

export const generateHTMLtext = (): void => {
  const htmlTextField = document.getElementById('html');
  const {
    hexagonAmount: { valueAsNumber: numberOfHexagons },
  } = DOMInput;
  let html: string = '';

  for (let i = 1; i <= numberOfHexagons; i++) {
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
