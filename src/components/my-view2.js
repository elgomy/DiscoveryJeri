/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';

import { SharedStyles } from './shared-styles.js';

import './fixed-button-whatsapp.js';


import './soft-tab.js';
import './passeios-jeri.js';
import './passeios-lençois.js';

import '@polymer/iron-pages/iron-pages.js';



class MyView2 extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}

      <style>

      .pages{
        width: 80%;      
        margin: 0 auto;
      }

      .tabs{
        width: 80%;      
        margin: 0 auto;
        padding: 2rem;
       
      }

      </style>

      <fixed-button-whatsapp></fixed-button-whatsapp>

      <section>
        <h2>Passeios que são momentos, momentos que são lembranças,
         lembranças que queremos que sejam únicas. Por isso escolhe descobrir, escolhe DiscoveryJeri.</h2>                  
      </section>

      <div class="tabs">
        <soft-tab></soft-tab>
      </div>
        
      <div class="pages">
        <iron-pages selected="${this.ironPage}">
          <div name="page1" class="page">
            <passeios-jeri></passeios-jeri>   
          </div>   
          <div name="page2" class="page">
            <passeios-lençois></passeios-lençois>    
          </div>
        </iron-pages>
      </div>    
      
      <section>
        

        
      </section>
    `;
  }

  static get properties() {
    return {
      ironPage: {type: Number},
      buttonLabel: {type: String},
    }
  }

  constructor(){
    super();
    this.ironPage = 0;
    this.addEventListener('selectPage', (e) => this.changeView(e));
  }


  sectionTab(e){
    console.log(e.currentTarget.id )
   /* if(e.currentTarget.id == "sectionTab1"){
      this.ironPage = 0
    }else{
      this.ironPage = 1
    } */
  }

  changeView(e){
    if(e.detail == "softTab1"){
      this.ironPage = 0
    }else{
      this.ironPage = 1
    }
  } 


}

window.customElements.define('my-view2', MyView2);
