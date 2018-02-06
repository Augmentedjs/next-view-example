import Presentation from "augmentedjs-next-presentation";
import Router from "./router.js";

const app = new Presentation.Application("next-view-example");
app.router = new Router();
app.start();

const article = new Presentation.Component.Article({ "template": "hello"});
article.render();

const header = new Presentation.Component.Header({ "template": "hello"});
header.render();

const ham = new Presentation.Component.HamburgerMenu();
ham.render();
