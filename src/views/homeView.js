import { DirectiveView } from "presentation-decorator";
import { View } from "presentation-view";
import { VirtualDomView } from "presentation-virtualdom-view";
import { TEMPLATE_1, TEMPLATE_2 } from "../templates.js";

const MOUNT_POINT = "#main",
      SWITCH_TEMPLATE = "switchTemplate";
      
class HomeView extends DirectiveView {
  constructor() {
    super({
      "el": MOUNT_POINT,
      "name": "homeview",
      "style": "view"
    });

    this.template = /*html*/
     `<h1 class="large center">Comparison of Simple View to Virtual DOM View.</h1>
      <section class="content">
        <div class="component">
          <h2>Simple View</h2>
          <hr/>
          <div id="simple"></div>
        </div>
        <div class="component">
          <h2>Virtual DOM View</h2>
          <hr/>
          <div id="virtdom"></div>
        </div>
      </section>
      <div class="buttonbar">
        <button data-${this.name}="${SWITCH_TEMPLATE}" data-click="${SWITCH_TEMPLATE}" type="button" title="Switch Template" class="primary">
          <i class="material-icons">web</i>&nbsp;Switch Template
        </button>
      </div>`;
  };
  async switchTemplate(e) {
    await e.preventDefault();
    if (this._toggle) {
      this._simple.template = TEMPLATE_1;
      this._vdView.template = TEMPLATE_1;
      this._toggle = false;
    } else {
      this._simple.template = TEMPLATE_2;
      this._vdView.template = TEMPLATE_2;
      this._toggle = true;
    }
    await this._simple.render();
    await this._vdView.render();
    return this;
  };

  async render() {
    await super.render();
    this._simple = new View({ "el": "#simple", "template": TEMPLATE_1 });
    this._vdView = new VirtualDomView({ "el": "#virtdom", "template": TEMPLATE_1 });
    this._toggle = false;
    await this._simple.render();
    await this._vdView.render();
    await this.delegateEvents();
    return this;
  };

  async remove() {
    await this._simple.remove();
    await this._vdView.remove();
    return await super.remove();
  };
};

export default HomeView;
