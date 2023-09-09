import { ID_BTN_CSS, ID_BTN_HTML } from "./constants";
import { generateHexagonSection } from "./hexagonSection";
import { addEventListener } from "./ui";

// call the function for an initial display of hexagons
generateHexagonSection();
// add event listeners to buttons
addEventListener(ID_BTN_CSS);
addEventListener(ID_BTN_HTML);
