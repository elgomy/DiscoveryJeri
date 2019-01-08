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

import '@polymer/paper-fab/paper-fab.js';
import { removeFromCartIcon } from './my-icons.js';

class FixedButtonWhatsapp extends LitElement {
  render() {
    return html`
      
      <style>
		paper-fab{
			--paper-fab-background: #6dd569;
			display: scroll;
	        position: fixed;
	        bottom: 40px;
	        right: 15px;
	        z-index: 3;
										
		}
      </style>
	  
	  <a target="_blank" href="https://api.whatsapp.com/send?phone=5588997817010"><paper-fab alt="whatsapp" src="images/whatsapp.svg"></paper-fab></a>

	  
    `;
  }

  static get properties() {
    return {
 
    }
  }
}

window.customElements.define('fixed-button-whatsapp', FixedButtonWhatsapp);