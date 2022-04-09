import { createHexagonHTMLString } from './HTMLhelperFunctions'

describe('#createHexagonHTMLString', () => {
	describe('given 1', () => {
		it('should return string with hexagon #1', () => {
			expect(createHexagonHTMLString(1)).toMatch(
				'<div class="hexagon__outer">' +
					'\n' +
					'<div class="hexagon__inner">1</div>' +
					'\n' +
					'</div>' +
					'\n'
			)
		})
	})

	describe('given 2', () => {
		it('should return string with hexagon #2', () => {
			expect(createHexagonHTMLString(2)).toMatch(
				'<div class="hexagon__outer">' +
					'\n' +
					'<div class="hexagon__inner">2</div>' +
					'\n' +
					'</div>' +
					'\n'
			)
		})
	})

	describe('given a class name test', () => {
		it('should return string with class "test"', () => {
			expect(createHexagonHTMLString(2, 'test')).toMatch(
				'<div class="hexagon__outer test">' +
					'\n' +
					'<div class="hexagon__inner">2</div>' +
					'\n' +
					'</div>' +
					'\n'
			)
		})
	})
})
