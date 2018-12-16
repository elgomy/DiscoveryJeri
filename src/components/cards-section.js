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

import '@polymer/paper-card/paper-card.js';


import '@vaadin/vaadin-button/vaadin-button.js';

import './poly-card.js';



class CardsSection extends LitElement {
  render() {
    return html`

    <style>
		 

	

    </style>

	<div class="cards_container">


	    <poly-card></poly-card>


    </div>


    `;
  }

  static get properties() {
    return {
     
    }
  }

    tapAction (e){
      
    }
   
     /*
      tapAction (e) {
      var target = e.target;
      if (!target.down) {
        target.elevation += 1;
        if (target.elevation === 5) {
          target.down = true;
        }
      } else {
        target.elevation -= 1;
        if (target.elevation === 0) {
          target.down = false;
        }
      }
    }; */
}

window.customElements.define('cards-section', CardsSection);