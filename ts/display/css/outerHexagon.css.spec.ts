import {
	generateOuterHexagonCSS,
	generateOuterHexagonChildCSS,
	generateOuterHexagonHoverCSS,
} from './outerHexagon.css'

describe('#generateOuterHexagonCSS', () => {
	describe('given input values', () => {
		it('should return a css class', () => {
			expect(generateOuterHexagonCSS(9, 4).replace(/\s/g, '')).toMatch(
				`.hexagon__outer {
          margin-top: -2.6vw;
          transition: all 4s;
				  -webkit-clip-path: polygon(
          0 25%,
          50% 0,
          100% 25%,
          100% 75%,
          50% 100%,
          0 75%
        );
        clip-path: polygon(
          0 25%,
          50% 0,
          100% 25%,
          100% 75%,
          50% 100%,
          0 75%
        );
        width: 9%;
        height:10.39%;
        display: flex;
        justify-content: center;
        align-items: center;
        }`.replace(/\s/g, '')
			)
		})
	})
})

describe('#generateOuterHexagonHoverCSS', () => {
	describe('given input values', () => {
		it('should return a css class', () => {
			expect(generateOuterHexagonHoverCSS(1, 2).replace(/\s/g, '')).toMatch(
				`.hexagon__outer:hover {
          transform: scale(1) rotate(2deg);
        }`.replace(/\s/g, '')
			)
		})
	})
})

describe('#generateOuterHexagonChildCSS', () => {
	describe('given input values, firstrow is 1', () => {
		it('should return a css class', () => {
			expect(generateOuterHexagonChildCSS(1, 2).replace(/\s/g, '')).toMatch(
				`.hexagon__outer:nth-child(n + 0) {
          margin-top: 0;
        }
      
        .hexagon__outer:nth-child(n+) {
          margin-left: 1vw;
        }`.replace(/\s/g, '')
			)
		})
	})

	describe('given input values, firstrow is 4', () => {
		it('should return a css class', () => {
			expect(generateOuterHexagonChildCSS(4, 2).replace(/\s/g, '')).toMatch(
				`.hexagon__outer:nth-child(-n + 4) {
          margin-top: 0;
        }
      
        .hexagon__outer:nth-child(7n + 5) {
            margin-left: 1vw;
        }`.replace(/\s/g, '')
			)
		})
	})
})
