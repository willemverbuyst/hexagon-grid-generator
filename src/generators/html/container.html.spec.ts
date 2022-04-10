import { generateContainerHTML } from './container.html'

describe('#generateContainerHTML', () => {
	describe('given 1', () => {
		it('should return string with hexagon #1', () => {
			expect(generateContainerHTML(1).replace(/\s/g, '')).toMatch(
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
})
