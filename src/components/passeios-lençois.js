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
import './tour-card-details.js';
import '@vaadin/vaadin-dialog/vaadin-dialog.js';
import '@vaadin/vaadin-icons/vaadin-icons.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/paper-button/paper-button.js';
import '@vaadin/vaadin-button/vaadin-button.js';
import { SharedStyles } from './shared-styles.js';

class PasseiosLençois extends LitElement {
  render() {
    return html`
      	 ${SharedStyles}
      	<style>



			
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

			.dialog__container{
				max-width: 700px;
				font-family: 'Playfair Display';
			}

			.dialog__container > h3{
				color: #4717F6;
			}

			iron-icon{
				float:right;
				--iron-icon-fill-color: #4717F6;
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

			<p>Nos  Lençóis Maranhenses oferecemos 7 passeios diferentes. A seguir pode consultar os preços e os detalhes de cada passeio:</p>

			<div class="tour-card__container">
               	<tour-card-details
	                header="Passeio Lagoa Azul"
	                image="../images/lagoa-azul.jpg"
	                icon="../images/sw4.svg"
	                price="R$ 60"
	                time="5 horas"
	                titleColor="dark-title">
              	</tour-card-details>

              	<tour-card-details
                  	header="Passeio Caburé"
                  	image="../images/cabure.jpg"
                  	icon="../images/barco.svg"
                  	price="R$ 70"
                  	time="7,30 horas"
                  	titleColor="dark-title">
              	</tour-card-details>

              	<tour-card-details
                  	header="Passeio Lagoa Bonita"
                  	image="../images/lagoa-bonita.jpg"
                  	icon="../images/sw4.svg"
                  	price="R$ 70"
                  	time="5,30 horas"
                  	titleColor="light-title">
              	</tour-card-details>

               	<tour-card-details
                  	header="Passeio Lagoa da Esperança"
                  	image="../images/lagoa-esperança.jpg"
                  	icon="../images/sw4.svg"
                  	price="R$ xx"
                  	time="5 horas"
                  	titleColor="light-title">
              	</tour-card-details>

               	<tour-card-details
                  	header="Passeio da Cardosa"
                  	image="../images/passeio-cardosa.jpg"
                  	icon="../images/neumatico.svg"
                  	price="R$ 60"
                  	time="4 horas"
                  	titleColor="dark-title">
              	</tour-card-details>

               	<tour-card-details
                  	header="Passeio Lagoa Verde"
                  	image="../images/passeio-cardosa.jpg"
                  	icon="../images/sw4.svg"
                  	price="R$ 120"
                  	time="11,30 horas"
                  	titleColor="dark-title">
              	</tour-card-details>

               	<tour-card-details
                  	header="Passeio Quadriciclo"
                  	image="../images/quadriciclo.jpg"
                  	icon="../images/quad.svg"
                  	price="R$ 320"
                  	time="8,30 horas"
                  	titleColor="dark-title">
              	</tour-card-details>
            </div>

            <vaadin-dialog id="azul">
          		<template>
          			<div class="dialog__container">
          				
          				<vaadin-button @click="${this.close}" theme="icon" aria-label="close">
          					<iron-icon icon="vaadin:close"></iron-icon>
          				</vaadin-button>
	            		<h3>Passeio Lagoa Azul</h3>
	            		<p>Saída pela tarde às 14hs para passeio em veiculo traçado nas quatro rodas (Toyota bandeirantes) até o começo do 
	            		Parque Nacional dos grandes Lençóis Maranhenses, passando por uma trilha com duração de 45 minutos até a chegada às 
	            		dunas em seguida inicio do passeio a pé teremos uma Caminhada de 20 a 30 Minutos com guia Local para conhecer as 
	            		principais lagoas e dunas (lagoa azul, Lagoa da esmeralda do peixe etc..). Podendo tomar banho nas Lagoas: Volta à 
	            		cidade às 19h00min após o Por do Sol</p>
	            	</div>
          		</template>
        	</vaadin-dialog>

			
        	<vaadin-dialog id="cabure">
          		<template>
          			<div class="dialog__container">
	            		<h3>Passeio Caburé</h3>
	            		<p>Passeio de Caburé em lancha voadeira com horários de saída as 8:30hs passando por Vassouras, conhecido como pequenos lençóis, 
	            		nde tem um ponto de apoio, que tem macacos nativos que ficaram mancos, e vem para o seu colo, podendo tira fotos, e também tem dunas 
	            		igual ao grandes lençóis e com lagoas para tomar banho, em seguida iremos ao povoado de Mandacaru, onde esta localizado o farol preguiças, 
	            		com 160 degraus e 35 metros de altura e uma vista panorâmica muito linda, vale a pena subir, depois éramos conhecer o povoado de caburé que 
	            		fica em uma panícula de areia que de um lado e o rio e o outro e o mar tem aproximadamente 350 metros de largura, podendo toma banho de rio ou mar, 
	            		e lá tem 7 pousadas com restaurantes, onde iram escolher local para almoçar, e fica ate o retorno que são as 14:30hs, chegando no hotel as 16:00hs 
	            		da tarde Barreirinhas.</p>
            		</div>
          		</template>
        	</vaadin-dialog>
        	

        	<vaadin-dialog id="bonita">
          		<template>
          			<div class="dialog__container">
	            		<h3>Passeio Lagoa Bonita</h3>
	            		<p>Passeios dos Grandes Lençóis de Toyota 4x4, saindo as 14:00h, percorrendo 18 km de trilhas ate o pé da duna próximo as lagoas, esse percurso e feito em 1:00hs, 
	            		ao chegar iremos ter que subir uma duna de aproximadamente 60 metro de altura para termos acesso ao parque nacional, La você tem uma vista maravilhosa, por ser um ponto bem alto, 
	            		o guia conduzira ate as  lagoas, conhecendo varias lagoas, lagoa bonitas , do clone, e varias outra que se forma ao seu lado, esse passeio e conhecido como lagoa bonita, 
	            		onde tem varias lagoas ao redores e poderiam conhecer e ficando ate horário de retorno, que saímos após o por do sol, chegando no hotel por volta das 19:30h.</p>
            		</div>
          		</template>
        	</vaadin-dialog>

        	<vaadin-dialog id="esperança">
          		<template>
          			<div class="dialog__container">
	            		<h3>Passeio Lagoa da Esperança</h3>
	            		<p>O circuito da lagoa da esperança não e feito diariamente, fazemos geralmente  começo de dezembro quando as outras cristalinas estão seca sua coloração e escura como se fosse um rio,  
	            		com 12 m de profundidade ela é formada pela água represada entre dunas móvel e fixa, dando origem ao Rio Negro, que atravessa o campo de dunas Parque Nacional dos Lençóis Maranhenses. 
	            		... Esse percurso e feito de Toyota 4x4 com saída as 14h e retornando após o por do sol em torno de 19h. </p>
            		</div>
          		</template>
        	</vaadin-dialog>

        	<vaadin-dialog id="cardosa">
          		<template>
          			<div class="dialog__container">
	            		<h3>Passeio da Cardosa</h3>
	            		<p>Passeio de BOIA CROSS (FLUTUAÇÃO DE CARDOSA) O povoado de Cardoso onde fica localizado o rio formiga, com 6 a 8 metros de largura e 1,50 a 2 metros de profundidade, onde  desce  em 1h em  
	            		bóias infláveis  sendo  de 1:00 hs de decida apreciando a beleza que o rio oferece, e ficando em um ponto de apoio tomando uma água de coco, tapioca etc.. horário de retorno, as 12:30 em Barreirinhas.</p>
            		</div>
          		</template>
        	</vaadin-dialog>

        	<vaadin-dialog id="verde">
          		<template>
          			<div class="dialog__container">
	            		<h3>Passeio Lagoa Verde</h3>
	            		<p>o passeio de lagoa verde sempre sai as 8:00 da manhã, são aproximadamente 1:20 de trilha ate o povoado de atine, onde iremos fazer um pequeno sítio tur. no povoado mostrando todas as pousadas dessa região, 
	            		logo após éramos ate a Fox o encontro do rio com o mar, podendo ficar 50mim para conhecer e tomar banho, logo depois éramos ao restaurante do Sr.Antonio  onde e feitos o camarão grelhado, 
	            		enquanto o almoço e feitos iremos ate o mar que fica ao lado , retornamos e logo após o almoço iremos andar por volta de 30 mim pelo litoral ate as pedras da cachoeira que são lindas, 
	            		e por volta das 15:00 iremos ver a lagoa verde ficando ate o por do sol, retornando na cidade por volta das 19:30. </p>
            		</div>
          		</template>
        	</vaadin-dialog>

        	<vaadin-dialog id="quad">
          		<template>
          			<div class="dialog__container">
	            		<h3>Passeio Quadriciclo</h3>
	            		<p>passeio de QUADRICICLO pelos grandes lençóis  saindo as 09h00min passando por uma trilha de 12 km, ate as dunas, onde iram cruzar o parque ate litoral, conhecendo varias lagoa depois irá pelo litoral ate o povoado de caburé, 
	            		onde vai ter vários restaurantes, onde vamos almoçar logo apos vem conhecer a foz que e o encontro do rio com o mar, e retornando pela mesma trilha e ate a lagoas chegando as 17.30 em Barreirinhas.  </p>
            		</div>
          		</template>
        	</vaadin-dialog>
        	
	  	</div>
    `;
  }

   constructor(){
    super();
    
    this.addEventListener('openDetails', (e) => this.openDialog(e));
    this.addEventListener('close', (e) => this.closeDialog(e));
  }

  static get properties() {
    return {
 		dialogTitle: {type:String},
 		test: {type:String}
    }
  }

  updated(){
  	var dialog = this.shadowRoot.querySelectorAll('vaadin-dialog');
  	console.log(dialog);
  }

  closeDialog(){
  	console.log('hola')
  }

  openDialog(e){
  	
  	console.log(e.detail);
    
    switch(e.detail) {
  		case "Passeio Lagoa Azul":
  			let azul = this.shadowRoot.querySelector('#azul');
    		azul.opened = true;
    	break;
    	case "Passeio Caburé":
    		let cabure = this.shadowRoot.querySelector('#cabure');
    		cabure.opened = true;
    	break;
    	case "Passeio Lagoa Bonita":
    		let bonita = this.shadowRoot.querySelector('#bonita');
    		bonita.opened = true;
    	break;
    	case "Passeio Lagoa da Esperança":
    		let esperança = this.shadowRoot.querySelector('#esperança');
    		esperança.opened = true;
    	break;
    	case "Passeio da Cardosa":
    		let cardosa = this.shadowRoot.querySelector('#cardosa');
    		cardosa.opened = true;
    	break;
    	case "Passeio Lagoa Verde":
    		let verde = this.shadowRoot.querySelector('#verde');
    		verde.opened = true;
    	break;
    	case "Passeio Quadriciclo":
    		let quad = this.shadowRoot.querySelector('#quad');
    		quad.opened = true;
    	break;
    	
    }
    
  }


}

window.customElements.define('passeios-lençois', PasseiosLençois);