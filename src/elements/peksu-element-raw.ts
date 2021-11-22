export class PeksuElement extends HTMLElement {
  constructor() {
    super();
    const template = document.getElementById("peksu-element-template") as HTMLTemplateElement
    if (!template) {
      throw new Error('Iik iik')
    }

    const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
      template.content.cloneNode(true)
    );

    console.log('SHADOW ROOT', shadowRoot)

  }
}

window.customElements.define('peksu-element', PeksuElement)
