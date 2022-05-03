import { generateCSSText } from './text.css'

describe('#generateCSSText', () => {
	describe('given input values ', () => {
		it('should return text for css', () => {
			expect(
				generateCSSText(
					'#f1f1f1',
					2,
					1,
					4,
					'#333',
					20,
					2,
					1,
					3,
					4,
					900,
					700,
					500,
					'#fff'
				).replace(/\s/g, '')
			).toMatch(
				`
				.hexagon-wrapper {
					background-color: #f1f1f1;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.hexagon-wrapper__hexagon-container {
					width: 12vw;
					display: flex;
					flex-wrap: wrap;
					transform: skew(2deg, 1deg);
				}

				.hexagon__outer {
					margin-top: -0.87vw;
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
					width: 3%;
					height:3.46%;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				.hexagon__outer:hover {
					transform: scale(1) rotate(2deg);
				}

				.hexagon__outer:nth-child(-n + 4) {
          margin-top: 0;
        }
      
        .hexagon__outer:nth-child(7n + 5) {
            margin-left: 1.5vw;
				}
			
				.hexagon__inner {
					background-color: #333;
					color: #fff;
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
					width: 80%;
					height: 80%;
					display: flex;
					justify-content: center;
					align-items: center;
				}
				
				@media (max-width: 900px) {
          .hexagon-wrapper__hexagon-container {
            width: 9vw;
          }
        
          /* reset */
          .hexagon__outer:nth-child(-n + 4) {
            margin-top: -0.87vw;
          }
      
          /* reset */
          .hexagon__outer:nth-child(7n + 5) {
            margin-left: 0;
          }
      
          .hexagon__outer:nth-child(-n + 3) {
            margin-top: 0;
          }
      
          .hexagon__outer:nth-child(5n + 4) {
            margin-left: 1.5vw;
          }
        }

				@media (max-width: 700px) {
          html {
            font-size: 50%;
          }

          .hexagon-wrapper__hexagon-container {
            width: 6vw;
          }

          /* reset */
          .hexagon__outer:nth-child(-n + 3) {
            margin-top: -0.87vw;
          }

          /* reset */
          .hexagon__outer:nth-child(5n + 4) {
            margin-left: 0;
          }

          .hexagon__outer:nth-child(-n + 2) {
            margin-top: 0;
          }

          .hexagon__outer:nth-child(3n + 3) {
            margin-left: 1.5vw;
          }
        }

				@media (max-width: 500px) {
          .hexagon-wrapper__hexagon-container {
              width: 3vw;
          }

	        /* reset */
	        .hexagon__outer:nth-child(-n + 2) {
	          margin-top: -0.87vw;
	        }

	        /* reset */
	        .hexagon__outer:nth-child(3n + 3) {
	          margin-left: 0;
	        }

	        .hexagon__outer:nth-child(n + 0) {
	          margin-top: 0;
	        }

	        .hexagon__outer:nth-child(0n + 0) {
	          margin-left: 1.5vw;
	        }
	      }
        `.replace(/\s/g, '')
			)
		})
	})
})
