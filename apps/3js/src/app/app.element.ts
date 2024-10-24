export class AppElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const title = 'webpack-web';
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
     <div class="wrapper">
       <div class="container">
         <!--  WELCOME  -->
         <div id="welcome">
           <h1>
             <span> Hello there, </span>
             Welcome ${title} 👋
           </h1>
         </div>
         <slot></slot>
       </div>
     </div>
    `;
  }
}

customElements.define('app-root', AppElement);
