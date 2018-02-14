import Presentation from "augmentedjs-next-presentation";
import MainController from "./controllers/main.js";
import { createApp, createRouter, startApp } from "./application/app.js";

let app = null;
createApp(app)
.then( (app) => {
  return new Promise( (resolve, reject) => {
    app.mainController = new MainController();
    app.mainController.initialize();
    if (app) {
      resolve(app);
    } else {
      reject(new Error("Error creating main controller!"));
    }
  });
})
.then( (app) => {
  return new Promise( (resolve, reject) => {
    app.mainController.render();
    if (app) {
      resolve(app);
    } else {
      reject(new Error("Error rendering main controller!"));
    }
  });
})
.then(createRouter)
.then(startApp)
.catch( (e) => {
  console.error(e);
  console.error(e.stack);
});

/*
const header = new Presentation.Component.Header({ "template": "hello"});
header.render();

const ham = new Presentation.Component.HamburgerMenu();
ham.render();
*/
