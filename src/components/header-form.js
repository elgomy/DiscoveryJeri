import { LitElement, html } from '@polymer/lit-element';
import './jeri-form.js';
import './maranhao-form.js';
import '@polymer/iron-pages/iron-pages.js';

class HeaderForm extends LitElement {
  render() {
    return html`
      
      <style>

       	.form__container{
       		padding: 5px 15px;        	
          	
          	
          	max-width: 100%;          	
       	}

        iron-pages{
          background:rgba(255,255,255,0.9);
          border-radius: 10px;
          padding: .5rem;
          margin-top: 10px;
        }

       	.text{
       		padding: .5rem;
       		color: #0c6eed;
       		font-weight: bold;
       	}

        .tabs{
         
          width: 100%;
          height: 2.1rem;

        }

        .tab{
          text-decoration: none;
          border: 1px solid;
          padding: 3px;
          color: #bdbdbd;
          font-weight: bold;
          transition: 0.3s ease-in-out;
          font-size: 1.1em;
          display: inline-block;
          margin-right: 5px;
          float: right;
        }

        .tab:hover{
          color: blue;
        }

        .tab[selected]{
          color: #4717F6;         
        }

       	@media (min-width: 950px) {
			   .form__container{
				    max-width: 80%;  
			   }

         .tab{
          color: #cfd8dc;
         }
          
         .tab[selected]{
          color: white;         
        }

        .tab:hover{
          color: white;
        }

       	}
	
      </style>
	  
	  <div class="form__container">
      <div class="tabs">
        <a class="tab" @click="${this.tab}" id="tab1" ?selected="${this.page === 0}" href="">Jericoacora</a>
        <a class="tab" @click="${this.tab}" id="tab2" ?selected="${this.page === 1}" href="">Lençóis</a>
	    </div>
          
          <iron-pages selected="${this.page}">
            <div name="page1" class="page">
            	
                <jeri-form></jeri-form>
            </div>
            <div name="page2" class="page">
            	
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

  tab(e){
    if(e.currentTarget.id == "tab1"){
      this.page = 0
    }else{
      this.page = 1
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