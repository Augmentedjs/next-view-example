import Augmented from "augmentedjs-next-presentation";
import Application from "../application/app.js";

class HamburgerMenu extends Augmented.Presentation.Component.HamburgerMenu {
  constructor() {
    super({
      "el": "#hamburger",
      "name": "next-view-example",
      "title": "Augmented.js Next"
    });
  };
  table() {
    console.log("I got here");
    Application.router.navigate("table", true);
    this.toggle();
  };
  simple() {
    Application.router.navigate("simple", true);
    this.toggle();
  };
  decorator() {
    Application.router.navigate("decorator", true);
    this.toggle();
  };
  form() {
    Application.router.navigate("form", true);
    this.toggle();
  };
};

export const createHamburger = (controller) => {
  return new Promise( (resolve, reject) => {
    controller.hamburger = new HamburgerMenu();
    controller.hamburger.addItem(
      "menuSimple",
      "simple",
      "web",
      "Simple Views",
      false
    );
    controller.hamburger.addItem(
      "menuDecorator",
      "decorator",
      "web",
      "Decorator View",
      false
    );
    controller.hamburger.addItem(
      "menuAutotable",
      "table",
      "grid_on",
      "Automatic Table",
      false
    );
    controller.hamburger.addItem(
      "menuAutoform",
      "form",
      "format_align_left",
      "Automatic Form",
      false
    );

    if (controller.hamburger) {
      resolve(controller);
    } else {
      reject(new Error("Error creating hamburger!"));
    }
  });
};

export const renderHamburger = (controller) => {
  return new Promise( (resolve, reject) => {
    const t = controller.hamburger.render();
    if (t) {
      resolve(controller);
    } else {
      reject(new Error("Error rendering hamburger!"));
    }
  });
};

export const cleanupHamburger = (controller) => {
  return new Promise( (resolve, reject) => {
    const t = controller.hamburger.remove();
    if (t) {
      resolve(controller);
    } else {
      reject(new Error("Error removing hamburger!"));
    }
  });
};
