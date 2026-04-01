import { getAppElements } from "./app/getAppElements";
import { setupApp } from "./app/setupApp";
import "./style.css";

console.info("🚀 Running the app!");

const elements = getAppElements();
const app = setupApp(elements);

app.render();
