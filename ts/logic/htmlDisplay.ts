import { assertNonNullish } from './utils/assertNonNullish'

export const displayHTML = (): void => {
	const htmlBtn = document.getElementById('htmlBtn')
	assertNonNullish(htmlBtn, 'HTMLElement #htmlBtn not found!')

	const cssTextField = document.getElementById('css')
	assertNonNullish(cssTextField, 'HTMLElement #css not found!')

	const htmlTextField = document.getElementById('html')
	assertNonNullish(htmlTextField, 'HTMLElement #htmlTextField not found!')

	htmlBtn.addEventListener('click', () =>
		handleHTMLBtnClick(cssTextField, htmlTextField)
	)
}

const handleHTMLBtnClick = (
	cssTextField: HTMLElement,
	htmlTextField: HTMLElement
): void => {
	if (htmlTextField.style.visibility === 'visible') {
		htmlTextField.style.visibility = 'hidden'
	} else {
		cssTextField.style.visibility = 'hidden'
		htmlTextField.style.visibility = 'visible'
	}
}
