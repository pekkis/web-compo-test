export class PeksuElementRaw extends HTMLElement {

  static get observedAttributes() { return ['name']; }

  name: string | null = ''

  constructor() {
    super();
    // I have no idea how one would make the template be internalized in the component. By innerHTML?
    const template = document.getElementById(
      "peksu-element-template"
    ) as HTMLTemplateElement;
    if (!template) {
      throw new Error("Iik iik");
    }

    /*
    I read that the "closed" shadow DOM can be forced open so just make it open, always.
    Then we clone the template node and append it via nice DOM apis.
    */
    this.attachShadow({ mode: "open" }).appendChild(
      template.content.cloneNode(true)
    );
  }
  connectedCallback() {
    // Props (class members, any data type) vs attributes (strings in DOM)
    this.name = this.getAttribute('name')

    this.render();
  }

  disconnectedCallback() {
    console.log("DISCONNECTED");
  }

  adoptedCallback() {
    console.log("ADOPTED");
  }

  attributeChangedCallback(key, prev, next) {
    console.log('ATTRIBUTE CHANGE', key, prev, next)
    if (key === 'name') {
      this.name = next
    }
    this.render()
  }

  render() {
    // I guess I'll be working in construction if this shit is our future.
    const span = this.shadowRoot?.getElementById('name') as HTMLSpanElement
    span.innerHTML = this.name || ''
  }
}

// Define the custom element to make it work
if (!window.customElements.get('peksu-element-raw')) {
  window.customElements.define("peksu-element-raw", PeksuElementRaw);
}

