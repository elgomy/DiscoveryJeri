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
import './transfer-card.js';



class VeilSection extends LitElement {
  render() {
    return html`
      
      <style>	

       .container{
		  		max-width: 90%;
		  		margin: 0 auto;
				display: grid;			
				grid-template-rows: 200px 300px 200px 300px;							
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

		.item1{
			background: url('../images/grid6-small.jpg') no-repeat;
			background-size: cover;
			background-position: right center;
			
			
		}

		.item4{
			background: url('../images/grid2-small.jpg') no-repeat;
			background-size: cover;
			background-position: left center;
			
		}		

		.item1 p, .item2 p, .item3 p, .item4 p{
			margin-left: 1em;
			color: #424242;
			font-weight: bold;
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

		.item2,.item3{			
				background: #49a5bf; /* Old browsers */
        background: -webkit-linear-gradient(left, #49a5bf 0%, #6bb1bc 30%, #93cede 98%, #93cede 98%, #93cede 100%, #75bdd1 100%);
        background: -o-linear-gradient(left, #49a5bf 0%, #6bb1bc 30%, #93cede 98%, #93cede 98%, #93cede 100%, #75bdd1 100%);
        background: linear-gradient(to right, #49a5bf 0%, #6bb1bc 30%, #93cede 98%, #93cede 98%, #93cede 100%, #75bdd1 100%); /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */ /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
		}

		transfer-card{
			justify-self: center;
		}

		.transfer-card__container{
				display: grid;
				grid-template-columns: 1fr;			
				grid-row-gap: 1.3rem;		
		}
		
		 p{
        text-align: justify;
          text-justify: inter-word;
      }
		
		@media (min-width: 900px) {

		  	.container{
		  		max-width: 80%;
		  		margin: 0 auto;
				display: grid;
				grid-template-columns: 1fr 4rem 1fr;
				grid-template-rows: 350px 350px;							
			}

			h2{
			 	font-size: calc(30px + (116 - 94) * ((100vw - 400px) / (1600 - 300)));
			}

			.item1{
				background: url('../images/grid6-large.jpg') no-repeat;				
				background-size:cover;
				background-position:center center;
				grid-column: 1/3;
				grid-row:1;
				
				
			}
			
			.item4{
				background: url('../images/grid2-large.jpg') no-repeat;
				background-size: cover;
				background-position: left center;
				grid-column: 2/4;
				grid-row:2;
				
			}

			.item4__container{
				border: 1px solid red;
				
				grid-column: 2/4;
				grid-row:2;
			}

			.item1__container{
				border: 1px solid red;
				
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

			.item5{
				grid-column: 1/4;	
			}
			
			

			.item1 .text, .item4 .text{
				font-size: .9em;		
			}

			.text{
				padding: 2rem;
			}

			.text-note{
				font-size: .8em;
				color: #757575;
			}

			.transfer-card__container{
				display: grid;
				grid-template-columns: 1fr 1fr;
				grid-template-rows: 1fr 1fr;
				grid-row-gap: 1.3rem;
				

			}

		}

		@media (min-width: 1300px) {

			.transfer-card__container{
				
				grid-template-columns: 1fr 1fr 1fr;
				
			}
		}

		
		
										
		
      </style>
	  
	 <div class="container">

	 <div class="item item2">
			<h2>TRASLADOS</h2>
			<p>Traslado Fortaleza-Jeri desde R$ 100!!*</p>
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
			<h2><span>PREÇOS TRASLADOS</span></h2>

			<p>Os traslados para Jericoacora desde Fortaleza incluem qualquer ponto da cidade de Fortaleza, assim como o aeroporto.
			A opçao da praia do Preá, muito solicitada para quem deseja maior tranquilidade ou para quem deseja fazer kite-surf
			também está incluída nesse traslado.</p>
			<p>Os traslados Barreirinhas-São Luís se referem ao traslado para visitar os Lençóis Maranhenses.</p>
			<p>Para outras opçoes de traslados consulte-nos.</p>
			<p class="text-note">*Os preços mostrados estão sujeitos a lotação no caso de veículo compartilhado. Pode contratar um veículo privativo cujo preço também mostramos.</p>
			<div class="transfer-card__container">
				<transfer-card 
					header="Van Fortaleza-Jeri"
					price="R$ 100"
					fullPrice="R$ 1.800"
					passengers="18"
					detail="Sujeito a lotaçao. Van com wifi, TV, Ar">
				</transfer-card>

				<transfer-card 
					header="SW4 Fortaleza-Jeri"
					price="R$ 135"
					fullPrice="R$ 800"
					passengers="6"
					detail="Sujeito a lotaçao. Ar">
				</transfer-card>

				<transfer-card 
					header="Picape Fortaleza-Jeri"
					price="R$ 150"
					fullPrice="R$ 600"
					passengers="4"
					detail="Sujeito a lotaçao. Ar">
				</transfer-card>

				<transfer-card 
					header="Van Barreirinhas-São Luis"
					price="R$ 50"
					fullPrice="R$ xxx"
					passengers="xx"
					detail="Sujeito a lotaçao. Van com wifi, TV, Ar">
				</transfer-card>

				<transfer-card 
					header="4x4 Barreirinhas-São Luis"
					price="R$ xxx"
					fullPrice="R$ 600"
					passengers="xx"
					detail="Sujeito a lotaçao. Van com wifi, TV, Ar">
				</transfer-card>

				<transfer-card 
					header="Taxi Barreirinhas-São Luis"
					price="R$ 100"
					fullPrice="R$ 400"
					passengers="4"
					detail="Sujeito a lotaçao. Van com wifi, TV, Ar">
				</transfer-card>
			</div>

			<h2><span>PASSEIOS</span></h2>
			 <p>Desenhamos uma oferta de passeios tanto em Jericoacoara como nos Lençóis Maranhenses para que sua experiência seja única.
			 Pode consultar os preços e detalhes dos nossos passeios na seção <a href="">passeios</a></p>

		</div>

       
	 </div>

	  
    `;
  }

  static get properties() {
    return {
 
    }
  }
}

window.customElements.define('veil-section', VeilSection);