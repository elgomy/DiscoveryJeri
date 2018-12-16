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
				
			
			  <vaadin-select 			  	
			  	placeholder="Passageiros" 
			  	value=""
			  	required         
	        	error-message="Por favor selecione os passageiros">
		  			<template>
		    			<vaadin-list-box>
		      				<vaadin-item>Adultos <counter-element></counter-element></vaadin-item>
		      				<vaadin-item>Menores <counter-element></counter-element></vaadin-item>
		    			</vaadin-list-box>
		  			</template>
			  </vaadin-select>

			  
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

 	

  }};

  constructor() {
    super();
    
    
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
  		    {minWidth: '45em', columns: 6} 			
		];


  	}


}

window.customElements.define('vaadin-form', VaadinForm);