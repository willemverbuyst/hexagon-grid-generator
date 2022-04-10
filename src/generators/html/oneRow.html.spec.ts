import { generateOneRowHTMLText } from './oneRow.html'

describe('#generateOneRowHTMLText', () => {
	describe('given 0', () => {
		it('should return empty string', () => {
			expect(generateOneRowHTMLText(0)).toMatch('')
		})
	})

	describe('given -1', () => {
		it('should return empty string', () => {
			expect(generateOneRowHTMLText(-1)).toMatch('')
		})
	})

	describe('given 1', () => {
		it('should return string with hexagon #1', () => {
			expect(generateOneRowHTMLText(1).replace(/\s/g, '')).toMatch(
				`<div class="hexagon__outer">
					<div class="hexagon__inner">1</div>
				</div>`.replace(/\s/g, '')
			)
		})
	})

	describe('given 2', () => {
		it('should return string with hexagon #1 and #2', () => {
			expect(generateOneRowHTMLText(2).replace(/\s/g, '')).toMatch(
				`<div class="hexagon__outer">
					<div class="hexagon__inner">1</div>
				</div>
				<div class="hexagon__outer">
					<div class="hexagon__inner">2</div>
				</div>`.replace(/\s/g, '')
			)
		})
	})
})
