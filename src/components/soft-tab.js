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

class SoftTab extends LitElement {
  render() {
    return html`
      
      <style>
		
       
        


        li{
          text-decoration: none;
          border: 1px solid;
          padding: 3px;
          color: #bdbdbd;
          font-weight: bold;
          transition: 0.3s ease-in-out;
          font-size: 1.1em;
          display: inline-block;
          
         
        }

        .softTab:hover{
          color: #4717F6;
        }

        .softTab[selected]{
          color: #4717F6;         
        }


      </style>


	  <div class="softTabs">
        <ul>
          <li class="softTab" @click="${this.changePage}" id="softTab1" ?selected="${this.page === 0}">Jericoacora</li>
          <li class="softTab" @click="${this.changePage}" id="softTab2" ?selected="${this.page === 1}">Lençóis</li>
          
        </ul>
        
      </div>



	  
    `;
  }

   constructor(){
    super();
     this.page = 0;
  }

  static get properties() {
    return {
 		  page: {type: Number}
    }
  }

  changePage(e){
    let tabId = e.currentTarget.id;
    if(tabId == "softTab1"){
      this.page = 0;
    }else{
      this.page = 1;
    }
  	this.dispatchEvent(new CustomEvent('selectPage',{bubbles: true, composed: true, detail:tabId}));
 
  }
}

window.customElements.define('soft-tab', SoftTab);