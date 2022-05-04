import { assertNonNullish } from '../logic/utils/assertNonNullish'

export const displayCSS = (): void => {
	const cssBtn = document.getElementById('cssBtn')
	assertNonNullish(cssBtn, 'HTMLElement #cssBtn not found!')

	const cssTextField = document.getElementById('css')
	assertNonNullish(cssTextField, 'HTMLElement #css not found!')

	cssBtn.addEventListener('click', () => handleCSSBtnClick(cssTextField))
}

const handleCSSBtnClick = (cssTextField: HTMLElement): void => {
	if (cssTextField.style.visibility === 'visible') {
		cssTextField.style.visibility = 'hidden'
	} else {
		cssTextField.style.visibility = 'visible'
	}
}
