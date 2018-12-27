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

import '@polymer/paper-fab/paper-fab.js';
import { removeFromCartIcon } from './my-icons.js';

class GridPasseios1 extends LitElement {
  render() {
    return html`
      
    <style>

		
	.container{
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: repeat(21, 5rem);
		grid-row-gap: 1rem;
		grid-column-gap: .5rem;	
	}

	img{
  		height: 100%;
  		width: 100%;
  		object-fit: cover;
  	}

  	p{
    	text-align: justify;
    	text-justify: inter-word;
  	}

  	.text{
		padding: 10px;
		font-size: .9em;
	}

	h3:after {
        display: block;
        width: 60px;
        height: 5px;
        content: ' ';
        background: #49a5bf; /* Old browsers */
        background: -webkit-linear-gradient(left, #49a5bf 0%, #6bb1bc 30%, #93cede 98%, #93cede 98%, #93cede 100%, #75bdd1 100%);
        background: -o-linear-gradient(left, #49a5bf 0%, #6bb1bc 30%, #93cede 98%, #93cede 98%, #93cede 100%, #75bdd1 100%);
        background: linear-gradient(to right, #49a5bf 0%, #6bb1bc 30%, #93cede 98%, #93cede 98%, #93cede 100%, #75bdd1 100%); /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */ /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
            margin: 20px 0;
  	}	  

	.item1{
        grid-column: 1/3;
		grid-row: 1/4;                                   
	}

	.item2{      
        grid-column: 2;
        grid-row: 4/6; 
        border: 5px solid;    
	}

	.item4{   	       
        grid-column: 1;
        grid-row: 4/7; 
        border: 5px solid;                                
	}

	.item8{ 		       
        grid-column: 2;
        grid-row: 6/7; 
        border: 5px solid;                                
	}

	.item5{	
		grid-column: 1/3;
		grid-row: 7/9; 
	}

	.item3{  		       
        grid-column: 1/3;
        grid-row: 10/12; 
        border: 5px solid;                                
	}

	.item9{	
		grid-column: 1/3;
		grid-row: 12/15; 
	}

	.item7{        
        grid-column: 1;
        grid-row: 15/17; 
        border: 5px solid;                                
	}		

	.item10{
        grid-column: 2;
        grid-row: 15/17; 
        border: 5px solid;                                
	}

	.item12{	
		grid-column: 1/3;
		grid-row: 17/20; 
	}

	.item11{	          
        grid-column: 1/3;
        grid-row: 20/22; 
        border: 5px solid;                                
	}


	.item6{
		display: none;
	}

      @media (min-width: 950px) {
		
		.container{
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			grid-template-rows: repeat(11, 130px);
			grid-row-gap: 1rem;
			grid-column-gap: .5rem;		
		}

		.item1{

          grid-column: 1;
		  grid-row: 1/3;                                   
		}

		.item2{      
          grid-column: 2;
          grid-row: 1/3; 
          border: 5px solid;    
		}

		.item3{        
          grid-column: 3;
          grid-row: 1/3; 
          border: 5px solid;                                
		}

		.item4{        
          grid-column: 1;
          grid-row: 3/6; 
          border: 5px solid;                                
		}

		.item5{	
		  grid-column: 2;
		  grid-row: 3/5; 
		}

		.item6{  
		  display: inline-block;      
          grid-column: 3;
          grid-row: 3/7; 
          border: 5px solid;                                
		}

		.item7{       
          grid-column: 1;
          grid-row: 6/9; 
          border: 5px solid;                                
		}

		.item8{      
          grid-column: 2;
          grid-row: 5/7; 
          border: 5px solid;                                
		}

		.item9{	
		  grid-column: 2;
		  grid-row: 7/9; 
		}

		.item10{ 
          grid-column: 3;
          grid-row: 7/10; 
          border: 5px solid;                                
		}

		.item11{ 
          grid-column: 1/3;
          grid-row: 9/12; 
          border: 5px solid;  

		}

		.item12{	
		  grid-column: 3;
		  grid-row: 10/12; 
		}
		
      }
		
      </style>
	  
	  <div class="container">
			<div class="item1 text">
			<h3>Passeio Litoral Leste</h3>
				<p>O roteiro sentido leste inclui os principais pontos turísticos de Jericoacoara: Pedra Furada, Árvore da Preguiça, Praia do Preá, Lagoa Azul e a famosa Lagoa do Paraíso. 
				O caminho é feito dentro Parque Nacional de Jericoacoara em meio as dunas. Este passeio tem duração de 6 horas aproximadamente.</p>
			</div>
			
			<div class="item2">
				<img src="../images/img1.JPG" alt="beach" />
			</div>

			<div class="item3">
				<img src="../images/img4.JPG" alt="pedra furada" />
			</div>
			<div class="item4">
				<img src="../images/img3.jpeg" alt="alchymist club" />
			</div>

			<div class="item5 text">
				<p>Na Lagoa do Paríso encontrará algumas dunas cercando a lagoa, assim como muita vegetação. Apesar de estar próxima da Praia de Jericoacoara, as águas são doces,  tranquilas, sem ondas e sempre rasas. 
				O The Alchymist, beach club, conta com uma estrutura completa para os visitantes do lugar.</p>
				<p>A Lagoa Azul, mais rústica, tem barracas simples e possui também as redes para relaxar dentro de suas águas cristalinas de tons azulados e ainda trampolins.</p>
			</div>

			<div class="item6">
				<img src="../images/img9.jpeg" alt="rede" />
			</div>

			<div class="item7">
				<img src="../images/img6.JPG" alt="lagoa" />
			</div>

			<div class="item8">
				<img src="../images/img7.jpg" alt="kite surf" />
			</div>

			<div class="item9 text">
			<h3>Passeio Litoral Oeste</h3>
				<p>O lado oeste offerece uma paisagem totalmente distinta que engloba a cinematográfica Praia de Mangue Seco, Dunas , Velha e Nova Tatajuba e Passeio Ecológico Cavalo Marinho.
				Este passeio tem duração de 5 horas aproximadamente.</p>
			</div>

			<div class="item10">
				<img src="../images/img3.JPG" alt="mangue seco" />
			</div>

			<div class="item11">
				<img src="../images/img8.jpeg" alt="dunas" />
			</div>

			<div class="item12 text">
			
				<p>Neste passeio teremos a opçao de pegar um barquinho de madeira para ver cavalos marinhos.

Depois, atravessaremos o delta numa balsa, passa pelo mangue seco até chegar na Velha Tatajuba (vila que foi soterrada pelas dunas) e pela nova tatajuba, que tem uma vista maravilhosa do mar.
Na duna do funil, você poderá fazer sandboard e esquibunda e o passeio finaliza na Lagoa Torta, onde há uma barraca para comer e beber com os pés na água.</p>
			</div>


	  </div>

	  
    `;
  }

  static get properties() {
    return {
 
    }
  }
}

window.customElements.define('grid-passeios1', GridPasseios1);