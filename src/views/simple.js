import Presentation from "augmentedjs-next-presentation";

export class MyView extends Presentation.View {
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

export class YetAnotherView extends Presentation.View {
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

export class MyDecoratorView extends Presentation.DecoratorView {
  constructor() {
    super({ "name": "beeper", "el": "#decorator" });
    if (!this.template) {
      this.template = `<h1>This is a decorator view</h1><h2>My view name is ${this.name}.</h2><input type="text" data-${this.name}="in" data-function="setOut"/><p data-${this.name}="out"></p><button id="beep" data-${this.name}="beep" data-click="beep">Beep!</button><button id="boop" data-${this.name}="boop" data-click="boop">Boop!</button>`;
    }
    console.log("temp", this.template);
    console.log("it", this.injectTemplate);
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
