import Presentation from "augmentedjs-next-presentation";
import Router from "./router.js";

const app = new Presentation.Application("next-view-example");
app.router = new Router();
app.start();

const article = new Presentation.Component.Article({
  "id": "#views",
  "style": "article",
  "header": `<h1>Links for views</h1><ul><li><a href="#">Index</a></li><li><a href="#simple">Simple</a></li><li><a href="#decorator">Decorator</a></li><li><a href="#table">Table</a></li></ul>`,
  "body": "<p>Augmented Next View Examples</p>",
  "footer": `<p>Built from Augmented <i>Next</i> Presentation - Version ${Presentation.VERSION}</p>`
});
article.addSection({"id": "#view1"});
article.addSection({"id": "#view2"});
article.addSection({"id": "#decorator"});
article.addSection({"id": "#table"});

console.log("sections", article.sections);
console.log("sections", article._formatSections());
article.render();

/*
const header = new Presentation.Component.Header({ "template": "hello"});
header.render();

const ham = new Presentation.Component.HamburgerMenu();
ham.render();
*/
