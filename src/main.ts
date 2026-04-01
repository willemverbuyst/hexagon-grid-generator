import { getAppElements } from "./lib/getAppElements";
import { setupApp } from "./lib/setupApp";
import "./style.css";

console.info("🚀 Running the app!");

const elements = getAppElements();
const app = setupApp(elements);

app.render();
