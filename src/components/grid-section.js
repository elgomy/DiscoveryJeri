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
import './cards-section.js';


class GridSection extends LitElement {
  render() {
    return html`
      
      <style>	

      :host{
          
          paper-card{
            --app-header-text-color: blue
          }
          
          
        }	

		h2{			
			font-size: calc(30px + (116 - 84) * ((100vw - 400px) / (1600 - 400)));
			text-align: center;
			padding: .8rem;
			color: #424242;
		}

		

		.item1:hover .veil{
			opacity: 1;		
		}

		.item4:hover .veil{
			opacity: 1;
			
		}

		.item1{
			background: url('../images/grid6.jpg') no-repeat;
			background-size: cover;
			height: 45vh;
		}

		.item4{
			background: url('../images/grid2.jpg') no-repeat;
			background-size: cover;
			height: 45vh;
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

		.item1 .text, .item4 .text{
			font-size: .8em;
			
		}

		

		.text{			
			margin-top: 1rem;
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
			background: url('../images/grid6.jpg') no-repeat;
			background-size: cover;
			height: 60vh;
		}

		.item4{
			background: url('../images/grid2.jpg') no-repeat;
			background-size: cover;
			height: 60vh;
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

			.item1 .text, .item4 .text{
				font-size: .9em;
			
			}
		
		}
										
		
      </style>
	  
	 <div class="container">

	 <div class="item item2">
			<h2>TRASLADOS</h2>
			<p>Traslado Fortaleza-Jeri desde <span style="font-weight:bold;">R$ 100!!*</span></p>
		</div>

		<div class="item item1">
			<a href="#" class="veil">	
				<div class="text">
					<p>Também oferecemos traslados para grandes grupos.</p>			
					<p>Van até 18 passageiros (wifi e TV). <span style="font-size:.77em;">*Sujeito a lotaçao</span></p>
					<p>Nossa frota também inclui SW4 e Hilux.<p>
					<p>Duraçao média traslado Fortaleza-Jeri: 4:30h.</p>
					<p>Traslados desde os Aeroportos de Fortaleza y Jeri, e desde o Preá, cidade de Fortaleza y vila de Jericoacoara.</p>
					<p>Avaliamos traslados personalizados, consulte-nos.</p>
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
					<p>Oferecemos todo tipo de emoçoes e passeios para todo tipo de perfis.</p>
					<p>Passeios de Jardineira, Buggy, Quadriciclo, SW4, Hilux</p>
					<p>Avaliamos passeios personalizados, consulte-nos.</p>
					<p>Clique e confira nossos passeios</p>
				</div>
			</a>
		</div>
		<div class="item item5">
			<h2><span>NOSSOS PREÇOS</span></h2>
			<cards-section></cards-section>

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