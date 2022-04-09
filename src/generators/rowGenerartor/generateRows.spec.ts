import { generateRows } from './generateRows'

describe('#generateRows', () => {
	describe('given 0 and 0', () => {
		it('should return empty string', () => {
			expect(generateRows(0, 0)).toMatch('')
		})
	})

	describe('given -1 and 1', () => {
		it('should return empty string', () => {
			expect(generateRows(-1, 1)).toMatch('')
		})
	})

	describe('given 1 and -1', () => {
		it('should return empty string', () => {
			expect(generateRows(-1, 1)).toMatch('')
		})
	})

	describe('given 1 and 1', () => {
		it('should return string with hexagon #1', () => {
			expect(generateRows(1, 1)).toMatch(
				'<div class="hexagon__outer">' +
					'\n' +
					'<div class="hexagon__inner">1</div>' +
					'\n' +
					'</div>' +
					'\n'
			)
		})
	})

	describe('given 2 and 2', () => {
		it('should return string with hexagon #1 and #2', () => {
			expect(generateRows(2, 2)).toMatch(
				'<div class="hexagon__outer">' +
					'\n' +
					'<div class="hexagon__inner">1</div>' +
					'\n' +
					'</div>' +
					'\n' +
					'<div class="hexagon__outer">' +
					'\n' +
					'<div class="hexagon__inner">2</div>' +
					'\n' +
					'</div>' +
					'\n'
			)
		})
	})

	describe('given 1 and 3', () => {
		it('should return string with hexagon #1 and #2 and #3', () => {
			expect(generateRows(1, 3)).toMatch(
				'<div class="hexagon__outer">' +
					'\n' +
					'<div class="hexagon__inner">1</div>' +
					'\n' +
					'</div>' +
					'\n' +
					'<div class="hexagon__outer">' +
					'\n' +
					'<div class="hexagon__inner">2</div>' +
					'\n' +
					'</div>' +
					'\n' +
					'<div class="hexagon__outer">' +
					'\n' +
					'<div class="hexagon__inner">3</div>' +
					'\n' +
					'</div>' +
					'\n'
			)
		})
	})

	describe('given 2 and 5', () => {
		it('should return string with classes and 5 hexagons', () => {
			expect(generateRows(2, 5)).toMatch(
				'<div class="hexagon__outer first-row__margin-top">' +
					'\n' +
					'<div class="hexagon__inner">1</div>' +
					'\n' +
					'</div>' +
					'\n' +
					'<div class="hexagon__outer first-row__margin-top">' +
					'\n' +
					'<div class="hexagon__inner">2</div>' +
					'\n' +
					'</div>' +
					'\n' +
					'<div class="hexagon__outer even-rows__margin-left">' +
					'\n' +
					'<div class="hexagon__inner">3</div>' +
					'\n' +
					'</div>' +
					'\n' +
					'<div class="hexagon__outer">' +
					'\n' +
					'<div class="hexagon__inner">4</div>' +
					'\n' +
					'</div>' +
					'\n' +
					'<div class="hexagon__outer">' +
					'\n' +
					'<div class="hexagon__inner">5</div>' +
					'\n' +
					'</div>' +
					'\n'
			)
		})
	})
})
