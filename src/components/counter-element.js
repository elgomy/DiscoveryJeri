/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement, html } from '@polymer/lit-element';



// These are the shared styles needed by this element.
import { ButtonSharedStyles } from './button-shared-styles.js';
import '@vaadin/vaadin-lumo-styles/icons.js';
import '@vaadin/vaadin-button/vaadin-button.js';
import '@polymer/iron-icon/iron-icon.js';

// This is a reusable element. It is not connected to the store. You can
// imagine that it could just as well be a third-party element that you
// got from someone else.
class CounterElement extends LitElement {
  render() {
    return html`
      ${ButtonSharedStyles}
      <style>
        span { 
          width: 20px; 
          display: inline-block; 
          text-align: center; 
          font-weight: bold;
        }

       
      </style>
      <div>
        <p>
          
          <vaadin-button @click="${this._onIncrement}" theme="icon" aria-label="Add new item">
            <iron-icon icon="lumo:plus"></iron-icon>
          </vaadin-button>

          <vaadin-button @click="${this._onDecrement}" theme="icon" aria-label="Add new item">
            <iron-icon icon="lumo:minus"></iron-icon>
          </vaadin-button>   
          
          <span>${this.value}</span>
        </p>
      </div>
    `;
  }

  static get properties() { return {
  
    /* The current value of the counter. */
    value: { type: Number }
  }};

  constructor() {
    super();
    
    this.value = 0;
  }

  _onIncrement() {
    this.value++;
    this.dispatchEvent(new CustomEvent('counter-incremented', {bubbles:true, composed:true, detail:this.value}));
  }

  _onDecrement() {
    if (this.value != 0){
      this.value--;
      this.dispatchEvent(new CustomEvent('counter-decremented', {bubbles:true, composed:true, detail:this.value}));
    }
    
  }
}

window.customElements.define('counter-element', CounterElement);
