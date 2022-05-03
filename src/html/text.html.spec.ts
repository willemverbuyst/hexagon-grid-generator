import { generateHTMLText } from './text.html'

describe('#generateHTMLText', () => {
	describe('given 0', () => {
		it('should return anly the wrapper html', () => {
			expect(generateHTMLText(0).replace(/\s/g, '')).toMatch(
				`<div class="hexagon-wrapper">
		      <div class="hexagon-wrapper__hexagon-container">
		      </div>
		    </div>
        `.replace(/\s/g, '')
			)
		})
	})

	describe('given 1', () => {
		it('should return string with wrapper and hexagon #1', () => {
			expect(generateHTMLText(1).replace(/\s/g, '')).toMatch(
				`<div class="hexagon-wrapper">
          <div class="hexagon-wrapper__hexagon-container">
            <div class="hexagon__outer">
              <div class="hexagon__inner">1</div>
            </div>
          </div>
        </div>
				`.replace(/\s/g, '')
			)
		})
	})

	describe('given 2', () => {
		it('should return string with wrapper and hexagon #1 and #2', () => {
			expect(generateHTMLText(2).replace(/\s/g, '')).toMatch(
				`<div class="hexagon-wrapper">
		      <div class="hexagon-wrapper__hexagon-container">
            <div class="hexagon__outer">
              <div class="hexagon__inner">1</div>
            </div>
            <div class="hexagon__outer">
              <div class="hexagon__inner">2</div>
            </div>
		      </div>
		    </div>
				`.replace(/\s/g, '')
			)
		})
	})
})
