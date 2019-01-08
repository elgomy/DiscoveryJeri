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

class TransferCard extends LitElement {
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

       

         paper-card{
           text-align: center;
           --paper-card-header-color: var(--app-accent-color); 
           width: 100%;
          
           
         }
        
        .card-content{
          display: grid;
         
          
        }

        .card-actions{
          color: white;
          background: var(--app-accent-color); 

        }

        .price{
          color: #63a6bc;
        }

        .price > span{
          font-size: 2em;
          color: #63a6bc;
        }

        .detail{
          font-size: .8em;
        }
     
        @media (min-width: 900px) {
          
          paper-card{
            width: 325px;
          }

        }

       
		
      	</style>
	  
	  	<paper-card heading="${this.header}" alt="header">
        
  			<div class="card-content">
          

          <div class="price__container">
            <p class="price"> <span>${this.price}</span> por pessoa</p>
            <p><span class="full-price">${this.fullPrice}</span> veículo completo</br>
              Até <span class="passengers">${this.passengers}</span> passageiros</p>
          </div>
         
          <div class="detail__container">
            <p class="detail">${this.detail}</p>
          </div>      
    		</div>
    			<div class="card-actions">
      			<paper-button @click="${this.requestButton}">Solicitar Traslado</paper-button>
      			
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
    price: String,
    fullPrice: String,
    image: String,
    passengers: String,
   

    detail: String,
 		
    }
  }

  requestButton(){
    this.dispatchEvent(new CustomEvent('request',{bubbles: true, composed: true, detail:'request'}));
  }
}

window.customElements.define('transfer-card', TransferCard);