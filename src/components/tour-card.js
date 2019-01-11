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
import '@vaadin/vaadin-icons/vaadin-icons.js';
import '@polymer/iron-icon/iron-icon.js';

class TourCard extends LitElement {
  render() {
    return html`
       ${SharedStyles}
      	<style>
 
         

         .header .title-text{
            font-size: 44px;
          }
         

      	 .prices__container{
      	 	display: grid;
      	 	grid-template-columns: 1fr 1fr;

      	 }

      	 .prices__concept, .prices__price{
      	 	
  			    
            height: 100%;
      	 }

       

         paper-card{
           text-align: center;
            
           width: 100%;
          
           
         }

         .light-title{
          --paper-card-header-color: white;
         }

         .dark-title{
          --paper-card-header-color: black;
         }

         .accent-title{
          --paper-card-header-color: #4717F6;
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
          margin: 0;
        }

        .price > span{
          font-size: 2em;
          color: #63a6bc;
        }

        .time{
          font-size: .9em;
        }

        img{
          vertical-align: middle;
          display: inline-block;
          width: 50px;
          padding: 10px;
        }

        p.time{
          margin: 0;
        }
     
        @media (min-width: 900px) {
          
          paper-card{
            width: 325px;
          }

        }

       
		
      	</style>
	  
      <!-- image => 500x281px -->
	  	<paper-card class="${this.titleColor}" heading="${this.header}" image="${this.image}" alt="header">
         
  			<div class="card-content">
          

          <div class="price__container">
            
            <p class="price"> <span>${this.price}</span> por pessoa</p>
            <p><span class="full-price">${this.fullPrice}</span> veículo completo</br>

              Até <span class="passengers">${this.passengers}</span> passageiros</p>
          </div>
         
          <div class="time__container">
            <p class="time"><iron-icon icon="vaadin:clock"></iron-icon> Duração: ${this.time} <img src="${this.icon}" alt="vehicle" /></p>
          </div>      
    		</div>
    			<div class="card-actions">
      			<paper-button @click="${this.requestButton}">Solicitar Passeio</paper-button>
      			
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
    time: String,
    icon: String,
    titleColor: String,
 		
    }
  }

  requestButton(){
    this.dispatchEvent(new CustomEvent('request',{bubbles: true, composed: true, detail:'request'}));
  }
}

window.customElements.define('tour-card', TourCard);