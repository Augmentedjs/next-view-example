import Presentation from "augmentedjs-next-presentation";

export const createMainArticle = (controller) => {
  return new Promise( (resolve, reject) => {
    controller.article = new Presentation.Component.Article({
      "id": "views",
      "style": "article",
      "header": `<h1>Links for views</h1><ul><li><a href="#">Index</a></li><li><a href="#simple">Simple</a></li><li><a href="#decorator">Decorator</a></li><li><a href="#table">Table</a></li></ul>`,
      "body": "<p>Augmented Next View Examples</p>",
      "footer": `<p>Built from Augmented <i>Next</i> Presentation - Version ${Presentation.VERSION}</p>`
    });

    if (controller.article) {
      resolve(controller);
    } else {
      reject(new Error("Error creating article!"));
    }
  });
};

export const addSectionsToMainArticle = (controller) => {
  return new Promise( (resolve, reject) => {
    controller.article.addSection({"id": "view1"});
    controller.article.addSection({"id": "view2"});
    controller.article.addSection({"id": "decorator"});
    controller.article.addSection({"id": "table"});

    if (controller.article) {
      resolve(controller);
    } else {
      reject(new Error("Error creating sections!"));
    }
  });
};

export const renderMainArticle = (controller) => {
  return new Promise( (resolve, reject) => {
    const t = controller.article.render();
    if (t) {
      resolve(controller);
    } else {
      reject(new Error("Error rendering article!"));
    }
  });
};

export const cleanupMainArticle = (controller) => {
  return new Promise( (resolve, reject) => {
    const t = controller.article.remove();
    if (t) {
      resolve(controller);
    } else {
      reject(new Error("Error removing article!"));
    }
  });
};
