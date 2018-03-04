import Presentation from "augmentedjs-next-presentation";

export const createHamburger = (controller) => {
  return new Promise( (resolve, reject) => {
    controller.hamburger = new Presentation.Component.HamburgerMenu({
      "el": "#hamburger",
      "name": "next-view-example",
      "title": "Augmented.js Next"
    });

    controller.hamburger.addItem(
      "table",
      () => {
        console.log("I got here");
        window.location = "#table";
      },
      "grid_on",
      "Automatic Table",
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
