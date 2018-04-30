import Augmented from "augmentedjs-next-presentation";

export const createMainArticle = (controller) => {
  return new Promise( (resolve, reject) => {
    controller.article = new Augmented.Presentation.Component.Article({
      "id": "views",
      "style": "article",
      "header": "<i></i>",
      "headerStyle": "header",
      "headerEl": "header",
      "body": `
        <h1>Links for views</h1>
        <ul>
          <li><a href="#">Index</a></li>
          <li><a href="#simple">Simple</a></li>
          <li><a href="#decorator">Decorator</a></li>
          <li><a href="#table">Table</a></li>
          <li><a href="#form">Form</a></li>
        </ul>
        `,
      "footer": `<p>Built from Augmented <i>Next</i> Presentation - Version ${Augmented.Presentation.VERSION}</p>`,
      "footerStyle": "footer",
      "footerEl": "footer"
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
    controller.article.addSection({"id": "form"});
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
