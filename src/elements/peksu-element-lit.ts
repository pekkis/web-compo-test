import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";
import { PexuType } from "../pexu";

@customElement("peksu-element-lit")
export class PeksuElementLit extends LitElement {
  static styles = css`
    p {
      color: blue;
    }
    :host {
      border: 5px dotted rgb(0, 100, 0);
      margin: 1em;
      padding: 1em;
      display: block;
    }
  `;

  @property({
    reflect: false,
    converter: {
      fromAttribute: (value: string, type) => {
        return value.split(",").map((str) => str.trim());
      },
      toAttribute: (value: PexuType[], type) => {
        return value.join(",");
      }
    }
  })
  complexer = {
    firstName: "Peksu",
    lastName: "Pöksy"
  };

  @property({
    reflect: true,
    converter: {
      fromAttribute: (value: string, type) => {
        return value.split(",").map((str) => str.trim());
      },
      toAttribute: (value: PexuType[], type) => {
        return value.join(",");
      }
    }
  })
  pexus: PexuType[] = [];

  @property()
  name = "Pexutin";

  @property({
    state: true
  })
  counter: number = 0;

  _click(e: Event) {
    this.counter = this.counter + 1;
    const event = new CustomEvent('peksu-click', {bubbles: true, composed: true, detail: {
      counter: this.counter
    } });
    this.dispatchEvent(event);
  }

  render() {
    return html`<div>
      <p>Hello, <span part="tussi">${this.name}</span>!</p>

      <div>
        <p>Clixuterad: ${this.counter}</p>
        <button @click="${this._click}">clix</button>
      </div>

      <ul>
        ${repeat(
          this.pexus,
          (pexu) => pexu,
          (pexu, index) => html` <li>${index}: ${pexu}</li> `
        )}
      </ul>

      <div part="complexer">
        ${this.complexer &&
        html`<strong>${this.complexer.lastName}</strong>,
          ${this.complexer.firstName}`}
      </div>
    </div>`;
  }
}
