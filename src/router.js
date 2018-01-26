import Presentation from "augmentedjs-next-presentation";
import { DATA, SCHEMA } from "./table.js";
import { MyView, YetAnotherView, MyDecoratorView } from "./simple.js";

const myView = new Presentation.View({ "name": "MyView" });
myView.el = "#view1";
myView.template = `<h1>This is a simple view.</h1><h2>My view name is ${myView.name}.</h2><p>This is a simple view known as <em>Presentation.View</em></p><p>My permissions are${JSON.stringify(myView.permissions)}</p>`;


class Router extends Presentation.Router {
  constructor() {
    super({
      "routes": {
        "": () => {
          this.loadView(new YetAnotherView({
            "el": "#view2",
            "name": "YetAnotherView",
            "template": "<h1>This is a simple view.</h1><h2>My view name is YetAnotherView.</h2><p>This vew is declared by passing options.</p><button id=\"bump2\">Click Me</button>",
            "events": {
              "click #bump2": "bump"
            }
          }));
          this.loadView(new MyView());
          myView.render();
        },
        "decorator": () => {
          this.loadView(new MyDecoratorView());
        },
        "table": () => {
          this.loadView(new Presentation.Component.AutomaticTable({
            "el": "#table",
            "name": "table",
            "schema": SCHEMA,
            "data": DATA
          }));
        }
      }
    });
  };
};

export default Router;
