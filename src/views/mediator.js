import { Mediator as BaseMediator } from "presentation-mediator";
import Application from "../application/application.js";
import Logger from "../logger/logger.js";
import * as MESSAGES from "../messages.js";
import { displayErrorMessage, displayMessage, displayAbout } from "./functions/mediation.js";

class Mediator extends BaseMediator {
  constructor() {
    super({
      "name": "appmediator"
    });

    this.on(MESSAGES.DISPLAY_ABOUT, () => {
      displayAbout(this);
    });

    this.on(MESSAGES.DISPLAY_ERROR_MESSAGE, (message) => {
      displayErrorMessage(message, this);
    });

    this.on(MESSAGES.DISPLAY_MESSAGE, (message, title) => {
      displayMessage(message, title, this);
    });

    this.on(MESSAGES.NAVIGATION, (where) => {
      this.navigate(where);
    });
    /* application messages */
  };

  navigate(where) {
    if (where) {
      Application.navigate(where);
    } else {
      Logger.warn("Can not navigate to nowhere.");
    }
    return this;
  };

  displayErrorMessage(message) {
    displayErrorMessage(message, this);
  };

  displayMessage(message, title) {
    displayMessage(message, title, this);
  };

  observePanel(panel) {
    return this.observeColleagueAndTrigger(panel, MESSAGES.PANEL, panel.name);
  };

  dismissPanel(panel) {
    return this.dismissColleagueTrigger(panel, MESSAGES.PANEL, panel.name);
  };
};

const mediator = new Mediator();

export default mediator;
