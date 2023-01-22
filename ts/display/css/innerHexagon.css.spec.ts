import { generateInnerHexagonCSS } from "./innerHexagon.css";

describe("#generateInnerHexagonCSS", () => {
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
