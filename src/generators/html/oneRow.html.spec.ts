import { generateOneRowHTML } from './oneRow.html'

describe('#generateOneRowHTML', () => {
	describe('given 0', () => {
		it('should return empty string', () => {
			expect(generateOneRowHTML(0)).toMatch('')
		})
	})

	describe('given -1', () => {
		it('should return empty string', () => {
			expect(generateOneRowHTML(-1)).toMatch('')
		})
	})

	describe('given 1', () => {
		it('should return string with hexagon #1', () => {
			expect(generateOneRowHTML(1).replace(/\s/g, '')).toMatch(
				`<div class="hexagon__outer">
					<div class="hexagon__inner">1</div>
				</div>`.replace(/\s/g, '')
			)
		})
	})

	describe('given 2', () => {
		it('should return string with hexagon #1 and #2', () => {
			expect(generateOneRowHTML(2).replace(/\s/g, '')).toMatch(
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
