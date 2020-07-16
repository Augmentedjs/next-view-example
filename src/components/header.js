import { Header as BaseHeader } from "presentation-components";
import { AboutDialogView } from "presentation-dialogs";
import { ABOUT_CONFIG } from "../constants.js";

const NAME = "header",
      MOUNT_POINT = `#${NAME}`;

class Header extends BaseHeader {
  constructor(options = {}) {
    options.el = MOUNT_POINT;
    options.name = NAME;
    super(options);
    this.template = /*html*/`<h1 class="appname">${APP_TITLE}</h1>`;
  };

  async render() {
    await super.render();
    return this;
  };

  async logo(e) {
    e.preventDefault();
    if (!this._about) {
      this._about = new AboutDialogView(ABOUT_CONFIG);
    }
    if (!this._about.isOpen) {
      await this._about.render();
    }
    return this;
  };
};

export default Header;
