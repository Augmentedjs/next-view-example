import Augmented from "augmentedjs-next-presentation";
import { DATA, SCHEMA } from "./views/table.js";
import { MyView, YetAnotherView, MyDecoratorView } from "./views/simple.js";

class Router extends Augmented.Presentation.Router {
  constructor() {
    super({
      "routes": {
        "": () => {

        },
        "simple": () => {
          this.loadView(new YetAnotherView({
            "el": "#view2",
            "name": "YetAnotherView",
            "style": "view",
            "template": `
              <h1>This is a simple view.</h1>
              <h2>My view name is YetAnotherView.</h2>
              <p>This vew is declared by passing options.</p>
              <button id="bump2">Click Me</button>
            `,
            "events": {
              "click #bump2": "bump"
            }
          }));
        },
        "decorator": () => {
          this.loadView(new MyDecoratorView());
        },
        "table": () => {
          const table = new Presentation.Component.AutomaticTable({
            "el": "#table",
            "name": "table",
            "schema": SCHEMA,
            "data": DATA,
            "style": "view"
          });
          this.loadView(table);
        },
        "form": () => {
          const form = new Presentation.Component.AutomaticForm({
            "el": "#form",
            "name": "form",
            "schema": SCHEMA,
            "data": DATA,
            "style": "view"
          });
          this.loadView(form);
        }
      }
    });
  };
};

export default Router;
