import { render } from "./dist/server/entry-server.js";
import fs from "fs";
import path from "path";

const templatePath = path.resolve("./dist/index.html");
let template = fs.readFileSync(templatePath, "utf-8");

const appHtml = render();

// Inject rendered app
template = template.replace("<!--app-html-->", appHtml);

// Fix asset paths if needed
template = template.replace(/\.\/(ImageCard|project)(\d+\.(png|jpg))/g, "/$1$2");

fs.writeFileSync(templatePath, template, "utf-8");

console.log("✔ SSR Prerender Done!");
