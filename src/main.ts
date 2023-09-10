import { ID_BTN_CSS, ID_BTN_HTML } from "./constants";
import { generateHexagonSection } from "./hexagonSection";
import "./style.css";
import { addEventListener } from "./ui";

// eslint-disable-next-line no-console
console.info("🚀 Running the app!");
// call the function for an initial display of hexagons
generateHexagonSection();
// add event listeners to buttons
addEventListener(ID_BTN_CSS);
addEventListener(ID_BTN_HTML);
