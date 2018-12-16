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

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

import './vaadin-form.js';
import './grid-section.js';
import './fixed-button.js';
import './photo-wall.js';



class MyView1 extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}
      
      <style>
        
        :host{
          
        }

        .front-header_container{
          background: url('../images/back1.jpeg') no-repeat;

          background-size:cover;
          height: 20vh;
          width: 100vw;
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding-top: 95px; 
                             
        }

        .front-header_container p{          
          font-family: VimSM;
          font-size: calc(30px + (116 - 24) * ((100vw - 300px) / (1600 - 300)));
          font-weight: 800;
          color: white;      
          line-height: 90%;
          text-align: center;
          grid-column: 1/3;                
        }     

        .header-form{
          display:none;
        }

        .body-form_container{
          display: grid;
          grid-template-columns:1;
        }

        .body-form{
          justify-self: center;
          align-self: center;
        }

        h2{
          text-align: center;
        }

        p{
          font-size: 1.2rem;
          text-align: justify;
          text-justify: inter-word;
        }

        @media (min-width: 580px) and (max-width: 950px){
          .front-header_container{
            height: 40vh;
          }
        }

        @media (min-width: 950px) {

          .header-form{         
            justify-self: center;
            align-self: center;
            display:block;
            grid-column: 1/3;
          }

          .front-header_container{
            height: 90vh;
            width: 100vw;
          }
          
          .front-header_container p{
            margin: 30px 15px;
            grid-column: 2/3;
          }

          .body-form{
            display:none;
          }    

        }

      </style>

      
      <fixed-button></fixed-button>

      <div class="front-header_container">
        
        <p>Reserva E Sonha</p>  
        <vaadin-form class="header-form"></vaadin-form>         
      </div>

      <section>
        <h2>Desenhamos seu caminho para que experimente o paraíso.</h2>

        <p>Queremos te levar com o  máximo conforto e segurança e ao melhor preço possível. Visitar Jericoacoara já é
        por si só uma experiência maravilhosa, mas nós queremos que também seja inesquecível.</p>
       
      
      
      
      <div class="body-form_container">
        <vaadin-form class="body-form"></vaadin-form>
      </div>
      
      </section>
      
      
      <section>
         
         <grid-section></grid-section>

      </section>
      <section>
        <photo-wall></photo-wall>
      </section>
    `;
  }
}

window.customElements.define('my-view1', MyView1);
