import { createHexagonHTMLString } from './HTMLhelperFunctions'

describe('#createHexagonHTMLString', () => {
	describe('given 1', () => {
		it('should return string with hexagon #1', () => {
			expect(createHexagonHTMLString(1).replace(/\s/g, '')).toMatch(
				`<div class="hexagon__outer">
					<div class="hexagon__inner">1</div>
				</div>
				`.replace(/\s/g, '')
			)
		})
	})

	describe('given 2', () => {
		it('should return string with hexagon #2', () => {
			expect(createHexagonHTMLString(2).replace(/\s/g, '')).toMatch(
				`<div class="hexagon__outer">
					<div class="hexagon__inner">2</div>
				</div>
				`.replace(/\s/g, '')
			)
		})
	})

	describe('given a class name test', () => {
		it('should return string with class "test"', () => {
			expect(createHexagonHTMLString(2, 'test').replace(/\s/g, '')).toMatch(
				`<div class="hexagon__outer test">
					<div class="hexagon__inner">2</div>
				</div>
				`.replace(/\s/g, '')
			)
		})
	})
})
