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


import '@vaadin/vaadin-form-layout/vaadin-form-layout.js';
import '@vaadin/vaadin-form-layout/vaadin-form-item.js';
import '@vaadin/vaadin-text-field/vaadin-text-field.js';
import '@vaadin/vaadin-date-picker/vaadin-date-picker.js';
import '@vaadin/vaadin-checkbox/vaadin-checkbox.js';
import '@vaadin/vaadin-select/vaadin-select.js';
import '@vaadin/vaadin-list-box/vaadin-list-box.js';
import '@vaadin/vaadin-button/vaadin-button.js';
import '@vaadin/vaadin-time-picker/vaadin-time-picker.js';
import '@polymer/iron-dropdown/iron-dropdown.js';


import './counter-element.js';


// This is a reusable element. It is not connected to the store. You can
// imagine that it could just as well be a third-party element that you
// got from someone else.
class VaadinForm extends LitElement {
  render() {
    return html`
     
      <style>
		
		form{
		  padding: 5px 15px;
          background:white;
          border-radius: 10px;
          background:rgba(255,255,255,0.9);
          max-width: 100%;          
		}	
		
		vaadin-form-layout{
			--vaadin-form-layout-column-spacing: .5em;			
		}

		vaadin-text-field, vaadin-select-text-field, vaadin-date-picker, vaadin-time-picker{
			color:red;
			font-family: Playfair Display;
			font-weight: bold;
		}



		
		vaadin-button{
			font-family: Playfair Display;
		}	

		.button-check_container{
			float:right;
		}

		vaadin-checkbox{
			font-size: .85em;
		}



		[slot="dropdown-content"] {
        background-color: white;
        opacity: .9;
        line-height: 10px;
        border-radius: 3px;
        box-shadow: 0px 2px 6px #ccc;
        width: 150px;
        padding: 8px 15px;
      }

		@media (min-width: 950px) {
		  form{
		  	max-width: 80%;
		  }
		}
        
      </style>

		 <form>
		  
	     	<vaadin-form-layout id="form1">
				<vaadin-text-field 
				  	placeholder="Nome"  
				  	required         
	        		error-message="Por favor digite seu nome">
          	</vaadin-text-field>

			<vaadin-text-field 
				placeholder="Email" 
				required         
	        	error-message="Por favor digite seu e-mail">
			</vaadin-text-field>

			<vaadin-select 			  	
			  	placeholder="Origem" 
			  	value="Option one"
			  	required         
	        	error-message="Por favor selecione a origem">
	  			<template>
	    			<vaadin-list-box>
	      				<vaadin-item>Aeroporto Fortaleza</vaadin-item>
	      				<vaadin-item>Aeroporto Jeri</vaadin-item>
	      				<vaadin-item>Fortaleza</vaadin-item>
	      				<vaadin-item>Jeri</vaadin-item>
	      				<vaadin-item>Preá</vaadin-item>
	    			</vaadin-list-box>
	  			</template>
			</vaadin-select>

			<vaadin-select 		  	 
			  	placeholder="Destino" 
			  	value="Option one"
			  	required         
	        	error-message="Por favor selecione o destino">
	  			<template>
	    			<vaadin-list-box>
	      				<vaadin-item>Aeroporto Fortaleza</vaadin-item>
	      				<vaadin-item>Aeroporto Jeri</vaadin-item>
	      				<vaadin-item>Fortaleza</vaadin-item>
	      				<vaadin-item>Jeri</vaadin-item>
	      				<vaadin-item>Preá</vaadin-item>
	    			</vaadin-list-box>
	  			</template>
			  </vaadin-select>

			  </vaadin-form-layout>

			  <vaadin-form-layout id="form2">
				
			
			 <vaadin-text-field 
			 	placeholder="Passageiros" 
			 	id="passenger-field"
			 	@click="${this.openDrop}">
			</vaadin-text-field>

			
			<iron-dropdown id="dropdown" no-overlap>
        		<div class="drop-content" slot="dropdown-content">
					<div>
					 Adultos
					 <counter-element 
						 @counter-incremented="${this.updateField}"
						 @counter-decremented="${this.updateField}">
					</counter-element>
					</div>
					<div>
					 Menores
					 <counter-element 
						 @counter-incremented="${this.updateField}"
						 @counter-decremented="${this.updateField}">
					</counter-element>
					</div>
        		</div>
        		</div>
      		</iron-dropdown>
      		

			  
			  <vaadin-date-picker class="picker" placeholder="Ida"></vaadin-date-picker>	 
			  <vaadin-time-picker placeholder="Horario ida"></vaadin-time-picker> 
			  <vaadin-date-picker disabled  id="return-date" placeholder="Volta"></vaadin-date-picker>
			   <vaadin-time-picker disabled id="return-time" placeholder="Horario volta"></vaadin-time-picker> 
			  
			 
			  
		  </vaadin-form-layout>
		  <div class="button-check_container">
		   <vaadin-checkbox @change="${this.enableReturn}">Adicionar volta</vaadin-checkbox>
			 
			  <vaadin-button theme="primary">Solicitar Traslado</vaadin-button>
			</div>
			<div style="clear: both"></div>
		 </form>
      
    `;
  }

  static get properties() { return {

 	totalValue: { type: Number }

  }};

  constructor() {
    super();
     this.totalValue = 0;
  }

  

  updateField(e){
  	console.log(e.type);
  	let passengerField = this.shadowRoot.querySelector('#passenger-field');
  	if(e.type == "counter-incremented"){
  		console.log('test');
  		this.totalValue++;
  		passengerField.value = this.totalValue;
  	}else if(this.totalValue != 0){

  		this.totalValue--;
  		passengerField.value = this.totalValue;
  	}
  }

  openDrop(){
  	let drop = this.shadowRoot.querySelector('iron-dropdown');
  	drop.open()
  }

 

  enableReturn(){
  	let checkbox = this.shadowRoot.querySelector('vaadin-checkbox');
  	var returnPicker = this.shadowRoot.querySelector('#return-date');
  	var returnTime = this.shadowRoot.querySelector('#return-time');
  	if (checkbox.checked){
  		returnPicker.disabled = false;
  		returnTime.disabled = false;
  	}
  	else{
  		returnPicker.disabled = true;
  		returnTime.disabled = true;
  	}
  }

  updated(){
  	let formLayout1 = this.shadowRoot.querySelector('#form1');
  	let formLayout2 = this.shadowRoot.querySelector('#form2');
  	formLayout1.responsiveSteps = [
  			 {minWidth: 0, columns: 1},
  			 {minWidth: '45em', columns: 4} 			
		];
  	formLayout2.responsiveSteps = [
  			{minWidth: 0, columns: 2},
  		    {minWidth: '45em', columns: 5} 			
		];


  	}


}

window.customElements.define('vaadin-form', VaadinForm);