import Presentation from "augmentedjs-next-presentation";
import Router from "./router.js";

const app = new Presentation.Application("next-view-example");
app.router = new Router();
app.start();
