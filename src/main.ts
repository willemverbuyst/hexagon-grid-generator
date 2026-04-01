import { getAndAssertHtmlElements } from "./lib/getAndAssertHtmlElements";
import { setupApp } from "./lib/setupApp";
import "./style.css";

console.info("🚀 Running the app!");

const elements = getAndAssertHtmlElements();
const app = setupApp(elements);

app.render();
