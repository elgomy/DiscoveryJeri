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

import '@vaadin/custom-styles/custom-input.js';





import './counter-element.js';


// This is a reusable element. It is not connected to the store. You can
// imagine that it could just as well be a third-party element that you
// got from someone else.
class JeriForm extends LitElement {
  render() {
    return html`
     
      <style>
		
			
		
		vaadin-form-layout{
			--vaadin-form-layout-column-spacing: .5em;			
		}

		.button-check_container{
			float:right;
		}

		vaadin-checkbox{
			font-size: .85em;
		}



		[slot="dropdown-content"] {
        background-color: white;
        opacity: .95;
        line-height: 10px;
        border-radius: 3px;
        box-shadow: 0px 2px 6px #ccc;
        width: 150px;
        padding: 8px 15px;
      }

		@media (min-width: 950px) {
		  form{
		  
		  }
		}
        
      </style>

		 <form>
		  
	     	<vaadin-form-layout id="form1">
				<vaadin-text-field 
				    class="custom-style"
				    theme="my-text-field-styles"
				  	placeholder="Nome"  
				  	required>
          		</vaadin-text-field>

				<vaadin-text-field 
					placeholder="Email" 
					class="custom-style"
					theme="my-text-field-styles"
					required>
				</vaadin-text-field>

				<vaadin-select 	
					class="select-style"
				    theme="my-select-field-styles"
				  	placeholder="Origem" 
				  	value="Option one"
				  	required>
		  			<template>
		    			<vaadin-list-box>
		      				<vaadin-item>Aeroporto Fortaleza</vaadin-item>
		      				<vaadin-item>Praia Fortaleza</vaadin-item>
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
			  	required>
	  			<template>
	    			<vaadin-list-box>
	      				<vaadin-item>Aeroporto Fortaleza</vaadin-item>
	      				<vaadin-item>Praia Fortaleza</vaadin-item>
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
			 	class="custom-style"
				theme="my-text-field-styles"
			 	id="passenger-field"
			 	@click="${this.openDrop}"
			 	required>
			</vaadin-text-field>

			
			<iron-dropdown id="dropdown" vertical-offset="45">
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

      		

			  
			  <vaadin-date-picker required class="picker" placeholder="Ida"></vaadin-date-picker>	 
			  <vaadin-time-picker required placeholder="Horario ida"></vaadin-time-picker> 
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

window.customElements.define('jeri-form', JeriForm);