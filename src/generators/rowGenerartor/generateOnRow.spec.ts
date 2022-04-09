import { generateOneRow } from './generateOneRow'

describe('#generateOneRow', () => {
	describe('given 0', () => {
		it('should return empty string', () => {
			expect(generateOneRow(0)).toMatch('')
		})
	})

	describe('given -1', () => {
		it('should return empty string', () => {
			expect(generateOneRow(-1)).toMatch('')
		})
	})

	describe('given 1', () => {
		it('should return string with hexagon #1', () => {
			expect(generateOneRow(1)).toMatch(
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
		it('should return string with hexagon #1 and #2', () => {
			expect(generateOneRow(2)).toMatch(
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
})
