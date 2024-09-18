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
      }`.replace(/\s/g, ""),
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
      }`.replace(/\s/g, ""),
      );
    });
  });
});

describe("generateBasicHexagonCSS", () => {
  describe("given width=90, height=100 and unit is vw", () => {
    it("should return string with basic css for hexagon", () => {
      expect(
        generateBasicHexagonCSS({ width: 90, height: 100, unit: "vw" }).replace(
          /\s/g,
          "",
        ),
      ).toMatch(
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
        width: 90vw;
        height: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;`.replace(/\s/g, ""),
      );
    });

    it("should return string with basic css for hexagon when only width and unit is provided", () => {
      expect(
        generateBasicHexagonCSS({ width: 70, unit: "%" }).replace(/\s/g, ""),
      ).toMatch(
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
        align-items: center;`.replace(/\s/g, ""),
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
        width: 9vw;
        height:10.39vw;
        display: flex;
        justify-content: center;
        align-items: center;
        }`.replace(/\s/g, ""),
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
        }`.replace(/\s/g, ""),
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
        }`.replace(/\s/g, ""),
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
        }`.replace(/\s/g, ""),
      );
    });
  });
});

describe("generateInnerHexagonCSS", () => {
  describe("given input values", () => {
    it("should return a css class", () => {
      expect(
        generateInnerHexagonCSS("#333", "#fff", 20).replace(/\s/g, ""),
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
        }`.replace(/\s/g, ""),
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

        }`.replace(/\s/g, ""),
      );
    });
  });

  describe("given input values", () => {
    it("should return a css class", () => {
      expect(
        generateMediaQueryCSS(700, 2, 4, 3, "html {font-size: 50%;}").replace(
          /\s/g,
          "",
        ),
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

	      }`.replace(/\s/g, ""),
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
	      }`.replace(/\s/g, ""),
      );
    });
  });
});

describe("generateMediaQueriesCSS", () => {
  describe("given input values ", () => {
    it("should return css for media queries", () => {
      expect(
        generateMediaQueriesCSS(4, 3, 900, 700, 500).replace(/\s/g, ""),
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
        `.replace(/\s/g, ""),
      );
    });
  });

  describe("given input first row is 1 ", () => {
    it("should return no css for media", () => {
      expect(
        generateMediaQueriesCSS(1, 1, 900, 700, 500).replace(/\s/g, ""),
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
        }).replace(/\s/g, ""),
      ).toBe(
        '<spanclass="css-selector">.hexagon-wrapper</span><spanclass="css-brace">{</span><spanclass="css-property">background-color</span>:<spanclass="css-value">#f1f1f1</span>;<spanclass="css-property">display</span>:<spanclass="css-value">flex</span>;<spanclass="css-property">justify-content</span>:<spanclass="css-value">center</span>;<spanclass="css-property">align-items</span>:<spanclass="css-value">center</span>;<spanclass="css-brace">}</span><spanclass="css-selector">.hexagon-wrapper__hexagon-container</span><spanclass="css-brace">{</span><spanclass="css-property">width</span>:<spanclass="css-value">12vw</span>;<spanclass="css-property">display</span>:<spanclass="css-value">flex</span>;<spanclass="css-property">flex-wrap</span>:<spanclass="css-value">wrap</span>;<spanclass="css-property">transform</span>:<spanclass="css-value">skew(2deg,1deg)</span>;<spanclass="css-brace">}</span><spanclass="css-selector">.hexagon__outer</span><spanclass="css-brace">{</span><spanclass="css-property">margin-top</span>:<spanclass="css-value">-0.87vw</span>;<spanclass="css-property">transition</span>:<spanclass="css-value">all4s</span>;<spanclass="css-property">-webkit-clip-path</span>:<spanclass="css-value">polygon(025%,50%0,100%25%,100%75%,50%100%,075%)</span>;<spanclass="css-property">clip-path</span>:<spanclass="css-value">polygon(025%,50%0,100%25%,100%75%,50%100%,075%)</span>;<spanclass="css-property">width</span>:<spanclass="css-value">3vw</span>;<spanclass="css-property">height</span>:<spanclass="css-value">3.46vw</span>;<spanclass="css-property">display</span>:<spanclass="css-value">flex</span>;<spanclass="css-property">justify-content</span>:<spanclass="css-value">center</span>;<spanclass="css-property">align-items</span>:<spanclass="css-value">center</span>;<spanclass="css-brace">}</span>.hexagon__<spanclass="css-property">outer</span>:<spanclass="css-value"><spanclass="css-selector">hover</span><spanclass="css-brace">{</span>transform:scale(1)rotate(2deg)</span>;<spanclass="css-brace">}</span>.hexagon__<spanclass="css-property">outer</span>:<spanclass="css-value">nth-child(-n+4)<spanclass="css-brace">{</span>margin-top:0</span>;<spanclass="css-brace">}</span>.hexagon__<spanclass="css-property">outer</span>:<spanclass="css-value">nth-child(7n+5)<spanclass="css-brace">{</span>margin-left:1.5vw</span>;<spanclass="css-brace">}</span><spanclass="css-selector">.hexagon__inner</span><spanclass="css-brace">{</span><spanclass="css-property">background-color</span>:<spanclass="css-value">#333</span>;<spanclass="css-property">color</span>:<spanclass="css-value">#fff</span>;<spanclass="css-property">-webkit-clip-path</span>:<spanclass="css-value">polygon(025%,50%0,100%25%,100%75%,50%100%,075%)</span>;<spanclass="css-property">clip-path</span>:<spanclass="css-value">polygon(025%,50%0,100%25%,100%75%,50%100%,075%)</span>;<spanclass="css-property">width</span>:<spanclass="css-value">80%</span>;<spanclass="css-property">height</span>:<spanclass="css-value">80%</span>;<spanclass="css-property">display</span>:<spanclass="css-value">flex</span>;<spanclass="css-property">justify-content</span>:<spanclass="css-value">center</span>;<spanclass="css-property">align-items</span>:<spanclass="css-value">center</span>;<spanclass="css-brace">}</span>@media(<spanclass="css-property">max-width</span>:<spanclass="css-value">900px)<spanclass="css-brace">{</span><spanclass="css-selector">.hexagon-wrapper__hexagon-container</span><spanclass="css-brace">{</span>width:9vw</span>;<spanclass="css-brace">}</span>/*reset*/.hexagon__<spanclass="css-property">outer</span>:<spanclass="css-value">nth-child(-n+4)<spanclass="css-brace">{</span>margin-top:-0.87vw</span>;<spanclass="css-brace">}</span>/*reset*/.hexagon__<spanclass="css-property">outer</span>:<spanclass="css-value">nth-child(7n+5)<spanclass="css-brace">{</span>margin-left:0</span>;<spanclass="css-brace">}</span>.hexagon__<spanclass="css-property">outer</span>:<spanclass="css-value">nth-child(-n+3)<spanclass="css-brace">{</span>margin-top:0</span>;<spanclass="css-brace">}</span>.hexagon__<spanclass="css-property">outer</span>:<spanclass="css-value">nth-child(5n+4)<spanclass="css-brace">{</span>margin-left:1.5vw</span>;<spanclass="css-brace">}</span><spanclass="css-brace">}</span>@media(<spanclass="css-property">max-width</span>:<spanclass="css-value">700px)<spanclass="css-brace">{</span><spanclass="css-selector">html</span><spanclass="css-brace">{</span>font-size:50%</span>;<spanclass="css-brace">}</span><spanclass="css-selector">.hexagon-wrapper__hexagon-container</span><spanclass="css-brace">{</span><spanclass="css-property">width</span>:<spanclass="css-value">6vw</span>;<spanclass="css-brace">}</span>/*reset*/.hexagon__<spanclass="css-property">outer</span>:<spanclass="css-value">nth-child(-n+3)<spanclass="css-brace">{</span>margin-top:-0.87vw</span>;<spanclass="css-brace">}</span>/*reset*/.hexagon__<spanclass="css-property">outer</span>:<spanclass="css-value">nth-child(5n+4)<spanclass="css-brace">{</span>margin-left:0</span>;<spanclass="css-brace">}</span>.hexagon__<spanclass="css-property">outer</span>:<spanclass="css-value">nth-child(-n+2)<spanclass="css-brace">{</span>margin-top:0</span>;<spanclass="css-brace">}</span>.hexagon__<spanclass="css-property">outer</span>:<spanclass="css-value">nth-child(3n+3)<spanclass="css-brace">{</span>margin-left:1.5vw</span>;<spanclass="css-brace">}</span><spanclass="css-brace">}</span>@media(<spanclass="css-property">max-width</span>:<spanclass="css-value">500px)<spanclass="css-brace">{</span><spanclass="css-selector">.hexagon-wrapper__hexagon-container</span><spanclass="css-brace">{</span>width:3vw</span>;<spanclass="css-brace">}</span>/*reset*/.hexagon__<spanclass="css-property">outer</span>:<spanclass="css-value">nth-child(-n+2)<spanclass="css-brace">{</span>margin-top:-0.87vw</span>;<spanclass="css-brace">}</span>/*reset*/.hexagon__<spanclass="css-property">outer</span>:<spanclass="css-value">nth-child(3n+3)<spanclass="css-brace">{</span>margin-left:0</span>;<spanclass="css-brace">}</span>.hexagon__<spanclass="css-property">outer</span>:<spanclass="css-value">nth-child(n+0)<spanclass="css-brace">{</span>margin-top:0</span>;<spanclass="css-brace">}</span>.hexagon__<spanclass="css-property">outer</span>:<spanclass="css-value">nth-child(0n+0)<spanclass="css-brace">{</span>margin-left:1.5vw</span>;<spanclass="css-brace">}</span><spanclass="css-brace">}</span>',
      );
    });
  });
});
