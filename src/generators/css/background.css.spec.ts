import { generateBackgroundCSSText } from './background.css'

describe('#generateBackgroundCSSText', () => {
	describe('given a color (hexadecimal)', () => {
		it('should return a css-class', () => {
			expect(generateBackgroundCSSText('#f1f1f1').replace(/\s/g, '')).toMatch(
				`.hexagon-wrapper {
        background-color: #f1f1f1;
        display: flex;
        justify-content: center;
        align-items: center;
      }`.replace(/\s/g, '')
			)
		})
	})
})
