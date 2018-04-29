import Augmented from "augmentedjs-next-presentation";
import Router from "../router.js";
import MainController from "../controllers/main.js";

const Application = new Augmented.Presentation.Application("next-view-example"),
createApp = (app) => {
  return new Promise( (resolve, reject) => {
    if (app) {
      resolve(app);
    } else {
      reject(new Error("Error creating app!"));
    }
  });
},
createRouter = (app) => {
  return new Promise( (resolve, reject) => {
    app.router = new Router();
    if (app.router) {
      resolve(app);
    } else {
      reject(new Error("Error creating router!"));
    }
  });
},
startApp = (app) => {
  return new Promise( (resolve, reject) => {
    app.start();
    if (app) {
      resolve(app);
    } else {
      reject(new Error("Error starting app!"));
    }
  });
},
initializeApp = (app) => {
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
    throw e;
  });
};

initializeApp(Application);

export default Application;
