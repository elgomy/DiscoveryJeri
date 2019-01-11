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
import '@polymer/paper-button/paper-button.js';
import '@vaadin/vaadin-button/vaadin-button.js';

class SoftTabs extends LitElement {
  render() {
    return html`
      
      <style>
		vaadin-button{
			background: blue;
			
			display: scroll;
	        position: fixed;
	        bottom: 20px;
	        left: calc(50% - 80px);
	        z-index: 3;
	        
										
		}


      </style>
	  <!-- <paper-button raised>lençois</paper-button> -->
	  
	   <vaadin-button @click="${this.changePage}" theme="primary">${this.buttonLabel}</vaadin-button> 



	  
    `;
  }

   constructor(){
    super();
    this.buttonLabel = "Passeios Lençois"
  }

  static get properties() {
    return {
 		buttonLabel:{type: String}
    }
  }

  changePage(){
  	this.dispatchEvent(new CustomEvent('changePage',{bubbles: true, composed: true, detail:'passeios'}));
    if(this.buttonLabel != "Passeios Jericoacoara"){
      this.buttonLabel = "Passeios Jericoacoara"
    }else{
      this.buttonLabel = "Passeios Lençois"
    }
  }
}

window.customElements.define('soft-tabs', SoftTabs);