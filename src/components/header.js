import Presentation from "augmentedjs-next-presentation";

export const createHeader = (controller) => {
  return new Promise( (resolve, reject) => {
    controller.header = new Presentation.Component.Header({
      "el": "#header",
      "style": "header",
      "template": `
        <div id='hamburger'></div>
        <h1>Augmented <i>Next</i> Presentation View Examples</h1>
      `
    });

    if (controller.header) {
      resolve(controller);
    } else {
      reject(new Error("Error creating header!"));
    }
  });
};

export const renderHeader = (controller) => {
  return new Promise( (resolve, reject) => {
    const t = controller.header.render();
    if (t) {
      resolve(controller);
    } else {
      reject(new Error("Error rendering header!"));
    }
  });
};

export const cleanupHeader = (controller) => {
  return new Promise( (resolve, reject) => {
    const t = controller.header.remove();
    if (t) {
      resolve(controller);
    } else {
      reject(new Error("Error removing header!"));
    }
  });
};
