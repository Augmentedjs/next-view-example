import Presentation from "augmentedjs-next-presentation";
import { createMainArticle, addSectionsToMainArticle, renderMainArticle, cleanupMainArticle } from "../components/article.js";

class MainController extends Presentation.ViewController {
	constructor(options) {
		super(options);
	};

	initialize() {
    const controller = this;
    createMainArticle(controller)
    .then(addSectionsToMainArticle)
    .catch( (e) => {
      console.error(e);
      console.error(e.stack);
    });

		return true;
	};
	render() {
    const controller = this;
    renderMainArticle(controller)
    .catch( (e) => {
      console.error(e);
      console.error(e.stack);
    });

		return true;
	};
	remove() {
    const controller = this;
    cleanupMainArticle(controller)
    .then( (controller) => {
      return new Promise( (resolve, reject) => {
        controller.article = null;
        if (!controller.article) {
          resolve(controller);
        } else {
          reject(new Error("Error nulling article!"));
        }
      });
    })
    .catch( (e) => {
      console.error(e);
      console.error(e.stack);
    });

		return true;
	};
};

export default MainController;
