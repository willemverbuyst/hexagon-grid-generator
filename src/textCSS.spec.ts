import { describe, expect, it } from "vitest";
import {
  generateBackgroundCSS,
  generateBasicHexagonCSS,
  generateContainerCSS,
  generateCSSText,
  generateInnerHexagonCSS,
  generateMediaQueriesCSS,
  generateMediaQueryCSS,
  generateOuterHexagonChildCSS,
  generateOuterHexagonCSS,
  generateOuterHexagonHoverCSS,
} from "./textCSS";

describe("generateBackgroundCSS", () => {
  describe("given a color (hexadecimal)", () => {
    it("should return a css-class", () => {
      expect(generateBackgroundCSS("#f1f1f1").replace(/\s/g, "")).toMatch(
        `.hexagon-wrapper {
        background-color: #f1f1f1;
        display: flex;
        justify-content: center;
        align-items: center;
      }`.replace(/\s/g, "")
      );
    });
  });
});

describe("generateContainerCSS", () => {
  describe("given input values", () => {
    it("should return a css-class", () => {
      expect(generateContainerCSS(4, 3, 2, 1).replace(/\s/g, "")).toMatch(
        `.hexagon-wrapper__hexagon-container {
          width: 12vw;
          display: flex;
          flex-wrap: wrap;
          transform: skew(2deg, 1deg);
      }`.replace(/\s/g, "")
      );
    });
  });
});

describe("generateBasicHexagonCSS", () => {
  describe("given 90 and 90", () => {
    it("should return string with basic css for hexagon", () => {
      expect(generateBasicHexagonCSS(90, 90).replace(/\s/g, "")).toMatch(
        `-webkit-clip-path: polygon(
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
        width: 90%;
        height: 90%;
        display: flex;
        justify-content: center;
        align-items: center;`.replace(/\s/g, "")
      );
    });

    it("should return string with basic css for hexagon with one argument", () => {
      expect(generateBasicHexagonCSS(70).replace(/\s/g, "")).toMatch(
        `-webkit-clip-path: polygon(
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
        width: 70%;
        height: 70%;
        display: flex;
        justify-content: center;
        align-items: center;`.replace(/\s/g, "")
      );
    });
  });
});

describe("generateOuterHexagonCSS", () => {
  describe("given input values", () => {
    it("should return a css class", () => {
      expect(generateOuterHexagonCSS(9, 4).replace(/\s/g, "")).toMatch(
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
        }`.replace(/\s/g, "")
      );
    });
  });
});

describe("#generateOuterHexagonHoverCSS", () => {
  describe("given input values", () => {
    it("should return a css class", () => {
      expect(generateOuterHexagonHoverCSS(1, 2).replace(/\s/g, "")).toMatch(
        `.hexagon__outer:hover {
          transform: scale(1) rotate(2deg);
        }`.replace(/\s/g, "")
      );
    });
  });
});

describe("#generateOuterHexagonChildCSS", () => {
  describe("given input values, firstrow is 1", () => {
    it("should return a css class", () => {
      expect(generateOuterHexagonChildCSS(1, 2).replace(/\s/g, "")).toMatch(
        `.hexagon__outer:nth-child(n + 0) {
          margin-top: 0;
        }
      
        .hexagon__outer:nth-child(n+) {
          margin-left: 1vw;
        }`.replace(/\s/g, "")
      );
    });
  });

  describe("given input values, firstrow is 4", () => {
    it("should return a css class", () => {
      expect(generateOuterHexagonChildCSS(4, 2).replace(/\s/g, "")).toMatch(
        `.hexagon__outer:nth-child(-n + 4) {
          margin-top: 0;
        }
      
        .hexagon__outer:nth-child(7n + 5) {
            margin-left: 1vw;
        }`.replace(/\s/g, "")
      );
    });
  });
});

describe("generateInnerHexagonCSS", () => {
  describe("given input values", () => {
    it("should return a css class", () => {
      expect(
        generateInnerHexagonCSS("#333", "#fff", 20).replace(/\s/g, "")
      ).toMatch(
        `.hexagon__inner {
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
        }`.replace(/\s/g, "")
      );
    });
  });
});

describe("generateMediaQueryCSS", () => {
  describe("given input values ", () => {
    it("should return a css class", () => {
      expect(generateMediaQueryCSS(900, 1, 4, 3).replace(/\s/g, "")).toMatch(
        `@media (max-width: 900px) {

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

        }`.replace(/\s/g, "")
      );
    });
  });

  describe("given input values", () => {
    it("should return a css class", () => {
      expect(
        generateMediaQueryCSS(700, 2, 4, 3, "html {font-size: 50%;}").replace(
          /\s/g,
          ""
        )
      ).toMatch(
        `@media (max-width: 700px) {

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

	      }`.replace(/\s/g, "")
      );
    });
  });

  describe("given input values", () => {
    it("should return a css class", () => {
      expect(generateMediaQueryCSS(500, 3, 4, 3).replace(/\s/g, "")).toMatch(
        `@media (max-width: 500px) {
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
	      }`.replace(/\s/g, "")
      );
    });
  });
});

describe("generateMediaQueriesCSS", () => {
  describe("given input values ", () => {
    it("should return css for media queries", () => {
      expect(
        generateMediaQueriesCSS(4, 3, 900, 700, 500).replace(/\s/g, "")
      ).toMatch(
        `@media (max-width: 900px) {
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
        `.replace(/\s/g, "")
      );
    });
  });

  describe("given input first row is 1 ", () => {
    it("should return no css for media", () => {
      expect(
        generateMediaQueriesCSS(1, 1, 900, 700, 500).replace(/\s/g, "")
      ).toMatch("");
    });
  });
});

describe("generateCSSText", () => {
  describe("given input values ", () => {
    it("should return text for css", () => {
      expect(
        generateCSSText({
          backgroundColor: "#f1f1f1",
          containerSkewX: 2,
          containerSkewY: 1,
          hexagonsFirstRow: 4,
          hexagonColor: "#333",
          hexagonGap: 20,
          hexagonRotation: 2,
          hexagonScale: 1,
          hexagonSize: 3,
          hexagonTransition: 4,
          mediaQuery_1: 900,
          mediaQuery_2: 700,
          mediaQuery_3: 500,
          textColor: "#fff",
        }).replace(/\s/g, "")
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
        `.replace(/\s/g, "")
      );
    });
  });
});
