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



class GridSection extends LitElement {
  render() {
    return html`
      
      <style>		

		h2{			
			font-size: calc(30px + (116 - 84) * ((100vw - 400px) / (1600 - 400)));
			text-align: center;
			padding: 5rem;
			color: #424242;
		}

		.item1:hover .veil{
			opacity: 1;		
		}

		.item4:hover .veil{
			opacity: 1;
			
		}

		.item1{
			background: url('../images/grid5.jpg') no-repeat;
			background-size:cover;
			height: 25rem;
		}

		.item4{
			background: url('../images/grid2.jpg') no-repeat;
			background-size:cover;
			height: 25rem;
		}

		.veil{
			background-color: rgba(255,255,255,.8);
			display: inline-block;
			height: 100%;
			width: 100%;
			font-size: 1em;			
			opacity: 0;
			transition: opacity .3s ease;
			text-decoration:none;
		}

		p{
			margin-left: 1em;
			color: #424242;
		}

		.item2 p, .item3 p{
			text-align: center;

		}

		.text{			
			margin-top: 3rem;
		}

		
		@media (min-width: 900px) {

		  	.container{
				display: grid;
				grid-template-columns: 1fr 4rem 1fr;
				grid-template-rows: 1fr 1fr;							
			}

			h2{
			 	font-size: calc(30px + (116 - 94) * ((100vw - 400px) / (1600 - 300)));
			}

			.item1{
				grid-column: 1/3;
				grid-row:1;
			}

			.item2{
				grid-column: 3/4;
				grid-row:1;
			}

			.item3{
				grid-column: 1/2;
				grid-row:2;
			}

			.item4{
				grid-column: 2/4;
				grid-row:2;
			}

			.item5{
				grid-column: 1/4;	
			}
			
			.item2,.item3{			
				background: #e0e0e0;
			}

			
		}
										
		
      </style>
	  
	 <div class="container">

	 <div class="item item2">
			<h2>TRASLADOS</h2>
			<p>Traslado Fortaleza-Jeri desde R$ 100*</p>
		</div>

		<div class="item item1">
			<a href="#" class="veil">	
				<div class="text">			
					<p>Van até 18 passageiros (wifi e TV). <span>*Sujeito a lotaçao</span></p>
					<p>Nossa frota também inclui SW4 e Hilux<p>
					<p>Duraçao média traslado Fortaleza-Jeri: 4:30h</p>
					<p>Traslados desde os Aeroportos de Fortaleza y Jeri, Preá, Fortaleza y Jeri</p>
					<p>Avaliamos traslados personalizados, consulte-nos</p>
				</div>
			</a>
		</div>

		

		<div class="item item3">
			<h2>PASSEIOS</h2>
			<p>Suba, abra os braços e sinta o paraíso</p>
		</div>

		<div class="item item4">
			<a href="#" class="veil">
				
				<div class="text">			
					<p>Passeios de Jardineira, Buggy, Quadriciclo, SW4, Hilux</p>
					<p>Clique e confira nossos passeios</p>
				</div>
			</a>
		</div>
		<div class="item item5">
			<h2><span>NOSSOS PREÇOS</span></h2>
		</div>

       
	 </div>

	  
    `;
  }

  static get properties() {
    return {
 
    }
  }
}

window.customElements.define('grid-section', GridSection);