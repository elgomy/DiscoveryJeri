import { LitElement, html } from '@polymer/lit-element';
import './jeri-form.js';
import './maranhao-form.js';
import '@vaadin/vaadin-tabs/vaadin-tabs.js';
import '@polymer/iron-pages/iron-pages.js';

class HeaderForm extends LitElement {
  render() {
    return html`
      
      <style>

       	.form__container{
       		padding: 5px 15px;        	
          	border-radius: 10px;
          	background:rgba(255,255,255,0.9);
          	max-width: 100%;          	
       	}

       	.text{
       		padding: .5rem;
       		color: #0c6eed;
       		font-weight: bold;
       	}

       	@media (min-width: 950px) {
			.form__container{
				max-width: 80%;  
			}
       	}
	
      </style>
	  
	  <div class="form__container">
	  <vaadin-tabs selected="${this.page}" theme="centered">
            <vaadin-tab @click="${this.vaadin}" id="tab1">Jericoacoara</vaadin-tab>
            <vaadin-tab @click="${this.vaadin}" id="tab2">Maranhão​</vaadin-tab>
          </vaadin-tabs>
          
          <iron-pages selected="${this.page}">
            <div name="page1" class="page">
            	<div class="text">Traslados desde R$ 100!!*</div>
                <jeri-form></jeri-form>
            </div>
            <div name="page2" class="page">
            	<div class="text">Te levamos aos fascinantes Lençóis Maranhenses</div>
				<maranhao-form></maranhao-form>
            </div>
          </iron-pages>
      </div>

	  
    `;
  }

  constructor(){
  	super();
  	this.page = 0;
  }

  static get properties() {
    return {
      page: {type: Number, reflect: true },
    }
  }

   vaadin(e){
    if(e.currentTarget.id == "tab1"){
      this.page = 0
    }else{
      this.page = 1
    }
    
  }
}

window.customElements.define('header-form', HeaderForm);