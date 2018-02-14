import Presentation from "augmentedjs-next-presentation";
import Router from "../router.js";

export const createApp = (app) => {
  return new Promise( (resolve, reject) => {
    app = new Presentation.Application("next-view-example");
    if (app) {
      resolve(app);
    } else {
      reject(new Error("Error creating app!"));
    }
  });
};

export const createRouter = (app) => {
  return new Promise( (resolve, reject) => {
    app.router = new Router();
    if (app.router) {
      resolve(app);
    } else {
      reject(new Error("Error creating router!"));
    }
  });
};

export const startApp = (app) => {
  return new Promise( (resolve, reject) => {
    app.start();
    if (app) {
      resolve(app);
    } else {
      reject(new Error("Error starting app!"));
    }
  });
};
