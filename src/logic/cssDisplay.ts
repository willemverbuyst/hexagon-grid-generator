import { assertNonNullish } from '../logic/utils/assertNonNullish'

export const displayCSS = (): void => {
	const cssBtn = document.getElementById('cssBtn')
	assertNonNullish(cssBtn, 'HTMLElement #cssBtn not found!')

	const cssTextField = document.getElementById('css')
	assertNonNullish(cssTextField, 'HTMLElement #css not found!')

	const htmlTextField = document.getElementById('html')
	assertNonNullish(htmlTextField, 'HTMLElement #htmlTextField not found!')

	cssBtn.addEventListener('click', () =>
		handleCSSBtnClick(cssTextField, htmlTextField)
	)
}

const handleCSSBtnClick = (
	cssTextField: HTMLElement,
	htmlTextField: HTMLElement
): void => {
	if (cssTextField.style.visibility === 'visible') {
		cssTextField.style.visibility = 'hidden'
	} else {
		htmlTextField.style.visibility = 'hidden'
		cssTextField.style.visibility = 'visible'
	}
}
