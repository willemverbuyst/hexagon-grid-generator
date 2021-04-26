const htmlTextField = document.getElementById('html');

export const generateHTMLtext = (value: number): void => {
  let html = '';
  for (let i = 1; i <= value; i++) {
    html += `<div class="hexagon__outer"><div class="hexagon__inner">${i}</div></div>`;
  }

  let displayHTML = `
  <div class="hexagon-wrapper">
    <div class="hexagon-wrapper__hexagon-container">   
        ${html}
    </div>
  </div>
`;
  if (htmlTextField) htmlTextField.innerText = displayHTML;
};
