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

class FlipCard extends LitElement {
  render() {
    return html`
      
      <style>

      .container{
      	display: grid;
      	gri-template-columns: 1fr 1fr;
      }

      label {
    -webkit-perspective: 1000px;
    perspective: 1000px;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    display: inline-block;
    
    height: 200px;
    
    width: calc(50% - 60px);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    cursor: pointer;
}

.card {
    position: relative;
    height: 100%;
    width: 100%;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transition: all 600ms;
    transition: all 600ms;
    z-index: 20;
}

    .card div {
        position: absolute;
        height: 100%;
        width: 100%;
        background: #FFF;
        text-align: center;
        line-height: 200px;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        border-radius: 2px;
    }

    .card .back {
        background: #222;
        color: #FFF;
        -webkit-transform: rotateX(180deg);
        transform: rotateX(180deg);
    }

label:hover .card {
    -webkit-transform: rotateX(20deg);
    transform: rotateX(20deg);
    box-shadow: 0 20px 20px rgba(50,50,50,.2);
}

input {
    display: none;
}

:checked + .card {
    transform: rotateX(180deg);
    -webkit-transform: rotateX(180deg);
}

label:hover :checked + .card {
    transform: rotateX(160deg);
    -webkit-transform: rotateX(160deg);
    box-shadow: 0 20px 20px rgba(255,255,255,.2);
}
		
      </style>
	  

	  <label>
    <input type="checkbox"  />
    <div class="card">
        <div class="front">Front</div>
        <div class="back">Back</div>
    </div>
</label>

  <label>
    <input type="checkbox"  />
    <div class="card">
        <div class="front">Front</div>
        <div class="back">Back</div>
    </div>
</label>
	  

	  
    `;
  }

  static get properties() {
    return {
 
    }
  }
}

window.customElements.define('flip-card', FlipCard);