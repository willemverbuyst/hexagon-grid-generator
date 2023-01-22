import { generateBasicHexagonCSS } from "./basicHexagon.css";

describe("#generateBasicHexagonCSS", () => {
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
