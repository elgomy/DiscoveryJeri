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

// This is a reusable element. It is not connected to the store. You can
// imagine that it could just as well be a third-party element that you
// got from someone else.
class VaadinForm extends LitElement {
  render() {
    return html`
     
      <style>
		
		form{
		  padding: 5px 10px;
          background:white;
          border-radius: 10px;
          background:rgba(255,255,255,0.9);
          max-width: 500px;
          
		}

		h3{
		  text-align: center;
		}
		
		vaadin-date-picker{
			text-field: 50%;
		}

        
      </style>

		 <form>
		  <h3>Te levamos ao paraíso</h3>
	      <vaadin-form-layout>
			  <vaadin-text-field label="Nome" value="Regis"></vaadin-text-field>
			  <vaadin-text-field label="Email" value="regis@example.com"></vaadin-text-field>
			  <vaadin-select label="Origem" placeholder="seleciona" value="Option one">
	  			<template>
	    			<vaadin-list-box>
	      				<vaadin-item>Aeroporto de Fortaleza</vaadin-item>
	      				<vaadin-item>Aeroporto de Jeri</vaadin-item>
	      				<vaadin-item>Fortaleza</vaadin-item>
	      				<vaadin-item>Jeri</vaadin-item>
	      				<vaadin-item>Preá</vaadin-item>
	    			</vaadin-list-box>
	  			</template>
			  </vaadin-select>
			  <vaadin-select label="Destino" placeholder="seleciona" value="Option one">
	  			<template>
	    			<vaadin-list-box>
	      				<vaadin-item>Aeroporto de Fortaleza</vaadin-item>
	      				<vaadin-item>Aeroporto de Jeri</vaadin-item>
	      				<vaadin-item>Fortaleza</vaadin-item>
	      				<vaadin-item>Jeri</vaadin-item>
	      				<vaadin-item>Preá</vaadin-item>
	    			</vaadin-list-box>
	  			</template>
			  </vaadin-select>

			  
			  <vaadin-date-picker label="Ida" placeholder="seleciona"></vaadin-date-picker>	  
			  <vaadin-date-picker disabled id="return-date" label="Volta" placeholder="seleciona"></vaadin-date-picker>
			  
			  <vaadin-checkbox @change="${this.enableReturn}">Adicionar volta</vaadin-checkbox>
			 
			  <vaadin-button theme="primary">Solicitar Traslado</vaadin-button>
			  
		  </vaadin-form-layout>
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
  	if (checkbox.checked){
  		returnPicker.disabled = false;
  	}
  	else{
  		returnPicker.disabled = true;
  	}
  }

  updated(){
  	let formLayout = this.shadowRoot.querySelector('vaadin-form-layout');
  	formLayout.responsiveSteps = [
  			{minWidth: 0, columns: 1},
  			{minWidth: '25em', columns: 2} 			
		];

	
	

  	}


}

window.customElements.define('vaadin-form', VaadinForm);