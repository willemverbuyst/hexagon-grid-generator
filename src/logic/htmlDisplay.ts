import { assertNonNullish } from '../logic/utils/assertNonNullish'

export const displayHTML = (): void => {
	const htmlBtn = document.getElementById('htmlBtn')
	assertNonNullish(htmlBtn, 'HTMLElement #htmlBtn not found!')

	const htmlTextField = document.getElementById('html')
	assertNonNullish(htmlTextField, 'HTMLElement #htmlTextField not found!')

	htmlBtn.addEventListener('click', () => handleHTMLBtnClick(htmlTextField))
}

const handleHTMLBtnClick = (htmlTextField: HTMLElement): void => {
	if (htmlTextField.style.visibility === 'visible') {
		htmlTextField.style.visibility = 'hidden'
	} else {
		htmlTextField.style.visibility = 'visible'
	}
}
