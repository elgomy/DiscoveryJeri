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

import './fixed-button.js';
import './promotional-text.js';
import './grid-passeios1.js';



class MyView2 extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}

      <style>

      </style>

      <fixed-button></fixed-button>

      <section>
        <p>Passeios que sao momentos, momentos que sao experiências, experiências que sao lembranças.
         Lembranças que queremos que sejam únicas. Por isso escolhe descobrir, escolhe DiscoveryJeri.</p> 

                    
      </section>

      <section>
        <grid-passeios1></grid-passeios1>
      </section>
      <section>
        

        
      </section>
    `;
  }

  static get properties() { return {
   
  }}

  constructor() {
    super();
   
  }


}

window.customElements.define('my-view2', MyView2);
