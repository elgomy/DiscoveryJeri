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




import './price-card.js';



class CardsSection extends LitElement {
  render() {
    return html`

    <style>
		 

     .cards_container{
        display: grid;
        grid-row-gap: 1rem;
        grid-template-columns: 1fr;
    }




    @media (min-width: 650px) {

    .cards_container{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 1rem;
    }

  }
	

    </style>

	<div class="cards_container">


	    <price-card header="Traslados"
        .image=${'../images/car.svg'} 
        .item=${['Van (18p)', 'SW4 (4p)',]} 
        .price=${['R$ 100 pp', 'xxx']}>
      </price-card>

      <price-card header="Passeio Leste" 
        .item=${['Jardineira (10p)', 'Hilux (6p)', 'Buggy (4p)', 'SW4 (4p)', 'Quadriciclo (1p)']} 
        .price=${['R$ 600', 'R$ 450', 'R$ 400', 'R$ 500', 'R$ 400']}>
      </price-card>

      <price-card header="Passeio Oeste" 
        .item=${['Jardineira (10p)', 'Hilux (6p)', 'Buggy (4p)', 'SW4 (4p)', 'Quadriciclo (1p)']}  
        .price=${['R$ 750', 'R$ 500', 'R$ 500']}>
      </price-card>


    </div>


    `;
  }

  constructor() {
    super();
    
    this.array = ['an','array','of','test','data'];
  }

  static get properties() {
    return {
      array: Array,
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