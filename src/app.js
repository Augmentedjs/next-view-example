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

class MyDecoratorView extends Presentation.DecoratorView {
  constructor() {
    super({ "name": "beeper", "el": "#decorator" });
    if (!this.template) {
      this.template = `<h1>This is a decorator view</h1><h2>My view name is ${this.name}.</h2><input type="text" data-${this.name}="in" data-function="setOut"/><p data-${this.name}="out"></p><button id="beep" data-${this.name}="beep" data-click="beep">Beep!</button><button id="boop" data-${this.name}="boop" data-click="boop">Boop!</button>`;
    }

    this.injectTemplate(this.template);
    this.syncBoundElement("in");
    this.syncModelChange("out");
    this.delegateEvents();
  };
  beep(e) {
    alert("Beep Beep!");
    console.log("Beep Beep!");
  };
  boop(e) {
    alert("Boop Boop!");
    console.log("Boop Boop!");
  };
  setOut(e) {
    this.model.set("out", this.model.get("in"));
  };
};

const myDView = new MyDecoratorView();

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
