import Presentation from "augmentedjs-next-presentation";
import Augmented from "augmentedjs-next";

const _bind = require("lodash.bind");

const DELEGATE_EVENT_SPLITTER = /^(\S+)\s*(.*)$/;

class MyView extends Presentation.View {
  constructor() {
    super("ChildView");
    this.template = `<h1>This is a simple view also.</h1><h2>My view name is ${this.name}.</h2><p>This is a simple view extends <em>Presentation.View</em></p><button id="bump">Click Me</button>`;
    this.events = {
      "click #bump": "bump"
    };
    this.delegateEvents();
  };
  bump(e) {
    alert("I was clicked!");
  };
  delegate(eventName, selector, listener) {
    const matchesNL = document.querySelectorAll(selector);
    const matches = Array.from(matchesNL);
    console.log("el", this._el);
    console.log("selector", selector);
    console.log("matches", matches);
    let i = 0;
    const l = matches.length;

console.log("`${eventName}.delegateEvents${this.cid}`", `${eventName}.delegateEvents${this.cid}`)

    for (i = 0; i < l; i++) {
      matches[i].addEventListener(`${eventName}.delegateEvents${this.cid}`, listener);
    }
    return this;
  };

};

const myView = new Presentation.View("MyView");
myView.el = "#views";
myView.template = `<h1>This is a simple view.</h1><h2>My view name is ${myView.name}.</h2><p>This is a simple view known as <em>Presentation.View</em></p><p>My permissions are${JSON.stringify(myView.permissions)}</p>`;
myView.render();

const anotherView = new MyView();
anotherView.render();
