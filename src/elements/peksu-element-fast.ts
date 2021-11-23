import {
  FASTElement,
  customElement,
  attr,
  html,
  css,
  repeat
} from "@microsoft/fast-element";

import { PexuType } from "../pexu";

@customElement({
  name: "peksu-element-fast",
  styles: css`
    p {
      color: blue;
    }
    :host {
      border: 5px dashed rgb(255, 100, 100);
      margin: 1em;
      padding: 1em;
      display: block;
    }

    [part=tussi] {
      font-weight: bold;
    }

  `,
  template: html`<div>
    <p>Hello, <span part="tussi">${(x) => x.name}</span>!</p>
    <ul>
      ${repeat((x) => x.pexus, html` <li>${(pexu) => pexu}</li> `)}
    </ul>

    <slot name="slotshof">slotshof</slot>
  </div>`
})
export class PeksuElementFast extends FASTElement {

  @attr({
    mode: "reflect",
    converter: {
      fromView: (value: string | PexuType[]) => {
        if (typeof value === "string") {
          console.log(value, "value");
          return value.split(",").map((str) => str.trim());
        }

        return value;
      },
      toView: (value: PexuType[]) => {
        return value.join(",");
      }
    }
  })
  pexus: PexuType[] = [];

  @attr()
  name = "Pexutin";
}
