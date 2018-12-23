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

class PriceCard extends LitElement {
  render() {
    return html`
      
      	<style>

        :host{
          
          paper-card{
            --app-header-text-color: blue
          }
          
          
        }
        

        paper-card{
          --paper-card-header-text:{
             color: blue;
          }
        }

      	 .prices__container{
      	 	display: grid;
      	 	grid-template-columns: 1fr 1fr;

      	 }

      	 .prices__concept, .prices__price{
      	 	
  			    border: 1px solid;
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
           height: 100%;
         }
        
        .card-content{
          border: 1px solid red;
          
        }

        .card-actions{
          color: white;
          background: #49a5bf; /* Old browsers */
        background: -webkit-linear-gradient(left, #49a5bf 0%, #6bb1bc 30%, #93cede 98%, #93cede 98%, #93cede 100%, #75bdd1 100%);
        background: -o-linear-gradient(left, #49a5bf 0%, #6bb1bc 30%, #93cede 98%, #93cede 98%, #93cede 100%, #75bdd1 100%);
        background: linear-gradient(to right, #49a5bf 0%, #6bb1bc 30%, #93cede 98%, #93cede 98%, #93cede 100%, #75bdd1 100%); /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */ /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
         font-weight: bold;

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
    			<paper-button>Solicita!</paper-button>
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
}

window.customElements.define('price-card', PriceCard);