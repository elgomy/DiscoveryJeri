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


class GridPhotoWall1 extends LitElement {
  render() {
    return html`
      
      <style>

        .container{
        	display: grid;
        	grid-template-columns: 1fr 1fr 1fr;
        	grid-template-rows: repeat(2, 250px);
        	
        }

        .item__big-left{
        	grid-column: 1;
        	grid-row: 1/3;
        	background: blue;
        }

        .item__small-top{
        	grid-column: 2;
        	grid-row: 1;
        	background: red;
        }

        .item__small-bottom{
        	grid-column: 2;
        	grid-row: 2;
        	background: green;
        }

        .item__big-right{
        	grid-column: 3;
        	grid-row: 1/3;
        	background: orange;
        }

        img{
  		height: 100%;
  		width: 100%;
  		object-fit: cover;
  	}
	
		
      </style>
	  
	 <div class="container">
		<div class="item__big-left">
			video
		</div>

		<div class="item__small-top">
			<img src="${this.smallTopImage}" alt="pedra-furada" />
		</div>

		<div class="item__small-bottom">
			<img src="${this.smallBottomImage}" alt="kite-surf" />
		</div>

		<div class="item__big-right">
			<img src="${this.bigRightImage}" alt="dunes" />
		</div>

	 </div>

	  
    `;
  }

  static get properties() {
    return {

   		smallTopImage: {type: String},
   		smallBottomImage: {type: String},
   		bigRightImage: {type: String},
    }
  }
}

window.customElements.define('grid-photo-wall1', GridPhotoWall1);