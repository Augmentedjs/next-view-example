import { DirectiveView } from "presentation-decorator";
import Header from "../components/header.js";
// import { HEADER, SET_INDICATOR } from "../messages.js";

class MainView extends DirectiveView {
  constructor() {
    super({
      "tagName": "article",
      "id": "app",
      "name": "mainview",
      "style": "main"
    });

    this.template = /*html*/
     `<section id="header" class="header"></section>
      <section id="main" class="main panel"></section>
      <section id="dialogs" class="dialogs"></section>`;

    this._header = new Header();
    if (!this._header) {
      throw new Error("Error creating header!");
    }

    // this.on(HEADER, (message, data) => {
    //   // Logger.debug("Message", message, data);
    //   if (message === SET_INDICATOR) {
    //     // Logger.debug(`Setting progress - ${data}`);
    //     if (data === "true" || data === true) {
    //       this._indicator.setInProgress();
    //     } else {
    //       this._indicator.setComplete();
    //     }
    //   }
    // });
  };

  async render() {
    await super.render();
    let view = await this._header.render();
    if (!view) {
      throw new Error("Error rendering header!");
    }
    return this;
  };
};

export default MainView;
