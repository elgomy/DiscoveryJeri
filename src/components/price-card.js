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
import '@polymer/paper-button/paper-button.js';
import '@webcomponents/shadycss/entrypoints/apply-shim.js';
import { SharedStyles } from './shared-styles.js';

class PriceCard extends LitElement {
  render() {
    return html`
       ${SharedStyles}
      	<style>


      	 .prices__container{
      	 	display: grid;
      	 	grid-template-columns: 1fr 1fr;

      	 }

      	 .prices__concept, .prices__price{
      	 	
  			    
            height: 100%;
      	 }

         ul{
          list-style-type: none;
         }

         li{
           font-size: .9em;
         }

         paper-card{
           width: 100%;
           
         }
        
        .card-content{
          
          
        }

        .card-actions{
          color: white;
          background: var(--app-accent-color); 

        }
     
        

       
		
      	</style>
	  
	  	<paper-card heading="${this.header}" alt="Emmental">
        
  			<div class="card-content">
    			<div class="prices__container">
    				<div class="prices__concept">
    					
    				  <ul>
   						   ${this.item.map(i => html`<li>${i}</li>`)}
 						  </ul>
    					
    				</div>
    				<div class="prices__price">
              <ul>
    					   ${this.price.map(i => html`<li>${i}</li>`)}
              </ul>
    				</div>
    			</div>
  			</div>
  			<div class="card-actions">
    			<paper-button @click="${this.requestButton}">Solicita!</paper-button>
    			<paper-button>Detalhes</paper-button>
  			</div>
		</paper-card>
	  
    `;
  }

  constructor() {
    super();
    
     
  }

  static get properties() {
    return {
 		header: String,
 		item: Array,
    price: Array,
    image: String,
 		
    }
  }

  requestButton(){
    this.dispatchEvent(new CustomEvent('request',{bubbles: true, composed: true, detail:'request'}));
  }
}

window.customElements.define('price-card', PriceCard);