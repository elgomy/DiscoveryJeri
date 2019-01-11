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
import './tour-card.js';


class PasseiosJeri extends LitElement {
  render() {
    return html`
      	
      	<style>



			h3:after {
		        display: block;
		        width: 60px;
		        height: 5px;
		        content: ' ';
		        background: var(--app-accent-color);
      		}

      		p{
		        text-align: justify;
		        text-justify: inter-word;         
      		}

      		.tour-card__container{
        		display: grid;
        		margin: 3rem 0;
        		grid-row-gap: 1rem;

      		}

      		tour-card{
        		justify-self: center;
      		}

      		@media (min-width: 900px) {

        		.tour-card__container{      
		          	grid-template-columns: 1fr 1fr;
		          	grid-template-rows: 1fr 1fr;
		          	grid-row-gap: 1.3rem;
        		}
      		}

     		@media (min-width: 1300px) {

      			.tour-card__container{      
        			grid-template-columns: 1fr 1fr 1fr;
        		}
    		}

      	</style>
		
		<div class="wrapper">

			<p>Em Jericoacoara os dois passeios tradicionais que oferecemos sao o passeio no Litoral Leste y o passeio no Litoral Oeste. 
			Se você desejar um passeio customizado diferente dos dois oferecidos pode nos consultar. A seguir mostramos os preços dos passeios
			em funçao do veículo desejado, já que cada veículo oferece uma experiência diferente e cobre uma necessidade diferente: </p>
			<div class="text">
		      	<h3>Passeio Litoral Leste</h3>
		        <p>O roteiro sentido leste inclui os principais pontos turísticos de Jericoacoara: Pedra Furada, Árvore da Preguiça, Praia do Preá, Lagoa Azul e a famosa Lagoa do Paraíso. 
		        O caminho é feito dentro Parque Nacional de Jericoacoara em meio as dunas. Este passeio tem duração de 6 horas aproximadamente.</p>
		        <p>Na Lagoa do Paríso encontrará algumas dunas cercando a lagoa, assim como muita vegetação. Apesar de estar próxima da Praia de Jericoacoara, as águas são doces,  tranquilas, sem ondas e sempre rasas. 
		        O The Alchymist, beach club, conta com uma estrutura completa para os visitantes do lugar.</p>
		        <p>A Lagoa Azul, mais rústica, tem barracas simples e possui também as redes para relaxar dentro de suas águas cristalinas de tons azulados e ainda trampolins.</p>
	        </div>

	        <div class="tour-card__container">
	            <tour-card
	                header="Jardineira"
	                image="../images/sun1.jpg"
	                icon="../images/jardineira.svg"
	                price="R$ 60"
	                fullPrice="R$ 600"
	                passengers="10"
	                time="6 horas"
	                titleColor="light-title">
	            </tour-card>

	            <tour-card
	                header="Picape"
	                image="../images/kite4.jpg"
	                icon="../images/picape.svg"
	                price="R$ xx"
	                fullPrice="R$ xx"
	                passengers="x"
	                time="6 horas"
	                titleColor="dark-title">
	            </tour-card>

	            <tour-card
	                header="SW4"
	                image="../images/pedra-furada 2.jpg"
	                icon="../images/sw4.svg"
	                price="R$ 85"
	                fullPrice="R$ 500"
	                passengers="6"
	                time="6 horas"
	                titleColor="light-title">
	            </tour-card>

	             <tour-card
	                header="Buggy"
	                image="../images/img8.jpg"
	                icon="../images/buggy.svg"
	                price="R$ 100"
	                fullPrice="R$ 400"
	                passengers="4"
	                time="6 horas"
	                titleColor="dark-title">
	            </tour-card>

	            <tour-card
	                header="Quadriciclo"
	                image="../images/dunes.jpg"
	                icon="../images/quad.svg"
	                price="R$ 400"
	                fullPrice="R$ 400"
	                passengers="1"
	                time="6 horas"
	                titleColor="light-title">
	            </tour-card>
	        </div>

	        <div class="text">
	            <h3>Passeio Litoral Oeste</h3>
	            <p>O lado oeste oferece uma paisagem totalmente distinta que engloba a cinematográfica Praia de Mangue Seco, Dunas , Velha e Nova Tatajuba e Passeio Ecológico Cavalo Marinho.
	            Este passeio tem duração de 5 horas aproximadamente.</p>
	            <p>Neste passeio teremos a opçao de pegar um barquinho de madeira para ver cavalos marinhos.
	            Depois, atravessaremos o delta numa balsa, passa pelo mangue seco até chegar na Velha Tatajuba (vila que foi soterrada pelas dunas) e pela nova tatajuba, que tem uma vista maravilhosa do mar.
	            Na duna do funil, você poderá fazer sandboard e esquibunda e o passeio finaliza na Lagoa Torta, onde há uma barraca para comer e beber com os pés na água.</p>
	        </div>

	        <div class="tour-card__container">
	            <tour-card
	                header="Jardineira"
	                image="../images/img6 2.jpg"
	                icon="../images/jardineira.svg"
	                price="R$ 75"
	                fullPrice="R$ 750"
	                passengers="10"
	                time="5 horas"
	                titleColor="light-title">
	            </tour-card>

	            <tour-card
	                header="Picape"
	                image="../images/mangue 2.jpg"
	                icon="../images/picape.svg"
	                price="R$ xx"
	                fullPrice="R$ xx"
	                passengers="x"
	                time="5 horas"
	                titleColor="light-title">
	            </tour-card>

	            <tour-card
	                header="SW4"
	                image="../images/img1 2.jpg"
	                icon="../images/sw4.svg"
	                price="R$ xx"
	                fullPrice="R$ xx"
	                passengers="6"
	                time="5 horas"
	                titleColor="light-title">
	            </tour-card>

	            <tour-card
	                header="Buggy"
	                image="../images/landscape.jpg"
	                icon="../images/buggy.svg"
	                price="R$ 125"
	                fullPrice="R$ 500"
	                passengers="4"
	                time="5 horas"
	                titleColor="light-title">
	            </tour-card>

	            <tour-card
	                header="Quadriciclo"
	                image="../images/redes 2.jpg"
	                icon="../images/quad.svg"
	                price="R$ 500"
	                fullPrice="R$ 500"
	                passengers="1"
	                time="5 horas"
	                titleColor="light-title">
	            </tour-card>
			</div>
	  	</div>
    `;
  }

   constructor(){
    super();
    
  }

  static get properties() {
    return {
 		
    }
  }


}

window.customElements.define('passeios-jeri', PasseiosJeri);