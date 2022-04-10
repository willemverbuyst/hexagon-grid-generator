import { generateContainerCSSText } from './container.css'

describe('#generateContainerCSSText', () => {
	describe('given input values', () => {
		it('should return a css-class', () => {
			expect(generateContainerCSSText(4, 3, 2, 1).replace(/\s/g, '')).toMatch(
				`.hexagon-wrapper__hexagon-container {
          width: 12vw;
          display: flex;
          flex-wrap: wrap;
          transform: skew(2deg, 1deg);
      }`.replace(/\s/g, '')
			)
		})
	})
})