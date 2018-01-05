import Presentation from "augmentedjs-next-presentation";
//import Augmented from "augmentedjs-next";

class MyView extends Presentation.View {
  constructor() {
    super({ "name": "ChildView" });
    if (!this.template) {
      this.template = `<h1>This is a simple view also.</h1><h2>My view name is ${this.name}.</h2><p>This is a simple view extends <em>Presentation.View</em></p><button id="bump">Click Me</button>`;
    }
    this.events = {
      "click #bump": "bump"
    };
  };
  bump(e) {
    alert("I was clicked!");
  };
};

class YetAnotherView extends Presentation.View {
  constructor(options) {
    console.log("options", options);
    super(options);
    console.log("im here", this.name);
    if (!this.template) {
      console.log("oops no template");
      this.template = `oops`;
    }
    if (!this.events) {
      console.log("oops no events");
      this.events = {
        "click #bump2": "bump"
      };
    }

  };
  bump(e) {
    alert("I was clicked!");
  };
};

const myView = new Presentation.View({ "name": "MyView" });
myView.el = "#view1";
myView.template = `<h1>This is a simple view.</h1><h2>My view name is ${myView.name}.</h2><p>This is a simple view known as <em>Presentation.View</em></p><p>My permissions are${JSON.stringify(myView.permissions)}</p>`;
myView.render();

const anotherView = new MyView();
anotherView.render();
anotherView.delegateEvents();

const yetAnotherView = new YetAnotherView({
  "el": "#view2",
  "name": "YetAnotherView",
  "template": "<h1>This is a simple view.</h1><h2>My view name is YetAnotherView.</h2><p>This vew is declared by passing options.</p><button id=\"bump2\">Click Me</button>",
  "events": {
    "click #bump2": "bump"
  }
});
yetAnotherView.render();
yetAnotherView.delegateEvents();
