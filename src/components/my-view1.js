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


class MyView1 extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}
      
      <style>
        
        :host{
          
        }

        .front-header_container{
          background: url('../images/back1.jpeg') no-repeat;
          background-size: 100% auto;
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

      <div class="front-header_container">
        <vaadin-form class="header-form"></vaadin-form>
        <p>Reserva E Sonha</p>           
      </div>
      
      <div class="body-form_container">
        <vaadin-form class="body-form"></vaadin-form>
      </div>
      
      <section>
         
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac nisi orci. Maecenas sollicitudin diam in diam efficitur cursus. Morbi sollicitudin in justo tincidunt placerat. Integer tincidunt elementum nisi, eu ornare dolor lacinia eget. Fusce pulvinar massa eget odio placerat, commodo molestie ipsum tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse porttitor id purus eu cursus. Suspendisse arcu nulla, mattis vel hendrerit et, malesuada a elit. Nam at diam ornare, aliquet est sed, malesuada metus. Cras nec enim vel nibh tincidunt euismod ut et enim. Etiam pharetra eros in sodales iaculis. Duis sagittis urna et cursus mollis. Cras tempor rutrum est. Praesent sollicitudin ligula at laoreet placerat. Praesent tortor dui, semper in sapien non, pharetra luctus turpis.</p>
      </section>
      <section>
        <p>Vestibulum at est ex. Aenean id ligula id nibh dictum laoreet. Etiam non semper erat. Pellentesque eu justo rhoncus diam vulputate facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat metus ex, vel fringilla massa tincidunt sit amet. Nunc facilisis bibendum tristique. Mauris commodo, dolor vitae dapibus fermentum, odio nibh viverra lorem, eu cursus diam turpis et sapien. Nunc suscipit tortor a ligula tincidunt, id hendrerit tellus sollicitudin.</p>
      </section>
    `;
  }
}

window.customElements.define('my-view1', MyView1);
