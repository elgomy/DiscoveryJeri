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

import '@vaadin/vaadin-button/vaadin-button.js';



class PricesGrid extends LitElement {
  render() {
    return html`
      
      <style>

      

       .container-prices__traslados{
         display: grid;
         grid-template-columns: 1fr 1fr;
         padding-bottom: .5rem;
         
       }

       .container-prices__passeios{
         display: grid;
         grid-template-columns: 1fr 1fr 1fr;
         padding-bottom: .5rem;
         
       }

       .leste{
          grid-column: 2;
        }

      	img{
      		width: 150px;   
          height: 150px; 
      		margin-left: auto;
      		margin-right: auto;
      		display: block;        
          padding: 0;
      	}

        .leste, .oeste{
          font-weight: bold;
         
        }

        .text{
          font-size: 3.5vw;
        }

        .button{
          display: flex; 
          justify-content: center;
        }

        @media (min-width: 600px) {
          
          .text{
            font-size: 1.1em;
          }

        }

       

        @media (min-width: 1000px) {
          
          .container{
          display: grid;
          grid-template-columns: repeat(6, 1fr);            
        }

      

        .traslados{         
          grid-column: 1/4;
        }

        .passeios{        
          grid-column: 4/7;
          border-left: 1px solid #bdbdbd;
        }

        .container-prices__traslados{         
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr 1fr;
          border-bottom: none;

        }

        .item:nth-child(odd){
          grid-column: 1;
          text-align: center;
        }

        .item:nth-child(-n+2){
          grid-row: 2;
        }

        .item:nth-child(even){
          grid-column: 2;
        }

        .item:nth-last-child(-n+2){
          grid-row: 3;
        }

        .container-prices__passeios{         
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          border-bottom: none;
          
        }
        
        
        
        .text{
          padding-left: 10px;
        }
        
        


        }
      
		
      </style>
	  
	  <div class="container">

	  		<div class="traslados">  		
				  <img src="../images/car.svg" alt="" />
  				<div class="container-prices__traslados">	
  					<div class="item text">Van</div>
            <div class="item text">R$ 100 p.p (lotaçao)</div>
  					<div class="item text">SW4</div> 					
  					<div class="item text">R$ x</div>
  				</div>
          <div class="button">
             <vaadin-button theme="primary">Solicitar</vaadin-button>
          </div>
         
	  		</div>
	  		
	  		<div class="passeios">
	  		  <img src="../images/buggy.svg" alt="" />
          <div class="container-prices__passeios"> 
            <div class="leste text">Lado Leste</div>
            <div class="oeste text">Lado Oeste</div>
    	  		<div class="text">Jardineira (10p)</div>
            <div class="text">R$ 600</div>
            <div class="text">R$ 750</div>
    				<div class="text">Hilux (6p)</div>
            <div class="text">R$ 450</div>
            <div class="text">R$ xxx</div>
    				<div class="text">Buggy (4p)</div>
            <div class="text">R$ 400</div>
            <div class="text">R$ 500</div>
    				<div class="text">SW4 (4p)</div>
            <div class="text">R$ 500</div>
            <div class="text">R$ xxx</div>
    				<div class="text">Quadriciclo (1p)</div>
            <div class="text">R$ 400</div>
            <div class="text">R$ 500</div>  
          </div>
           <div class="button">
             <vaadin-button theme="primary">Solicitar</vaadin-button>
          </div>
	  		</div>

	  </div>

	  
    `;
  }

  static get properties() {
    return {
 
    }
  }
}

window.customElements.define('prices-grid', PricesGrid);