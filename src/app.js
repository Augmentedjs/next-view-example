import Presentation from "augmentedjs-next-presentation";
//import Augmented from "augmentedjs-next";

class MyView extends Presentation.View {
  constructor() {
    super("ChildView");
    this.template = `<h1>This is a simple view also.</h1><h2>My view name is ${this.name}.</h2><p>This is a simple view extends <em>Presentation.View</em></p><button id="bump">Click Me</button>`;
    this.events = {
      "click #bump": "bump"
    };
  };
  bump(e) {
    alert("I was clicked!");
  };
};

const myView = new Presentation.View("MyView");
myView.el = "#views";
myView.template = `<h1>This is a simple view.</h1><h2>My view name is ${myView.name}.</h2><p>This is a simple view known as <em>Presentation.View</em></p><p>My permissions are${JSON.stringify(myView.permissions)}</p>`;
myView.render();

const anotherView = new MyView();
anotherView.render();
anotherView.delegateEvents();
