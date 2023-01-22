import { generateMediaQueryCSS } from "./mediaQuery.css";

describe("#generateMediaQueryCSS", () => {
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
