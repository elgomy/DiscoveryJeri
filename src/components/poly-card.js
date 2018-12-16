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



class PolyCard extends LitElement {
  render() {
    return html`
      
  <style>
    .product-grid-item {
      display: inline-block;
      width: calc(55% - 20px);
      margin-bottom: 10px;
      
      background: rgba(0,0,0,0.6);
      background: linear-gradient(315deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%), linear-gradient(315deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%);
      color: rgba(0,0,0,.87);
      transition: 0.4s transform;
      will-change: transform;
      transform: scale(1);
      height: 300px;
    }

    .product-grid-item1 {
      display: inline-block;
      width: calc(50% - 140px);
      margin-bottom: 10px;
      padding: 20px;
      background: rgba(0,0,0,0.6);
      background: linear-gradient(315deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%), linear-gradient(315deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%);
      color: rgba(0,0,0,.87);
      transition: 0.4s transform;
      will-change: transform;
      transform: scale(1);
      height: 300px;

    }



    .product-grid-item.left {
      float: left;
    }

    .product-grid-item1.right {
      float: right;
    }

    .product-grid-item:hover {
      transform: scale(1.02);
      text-decoration: none;
    }

    .product-grid-item1:hover {
      transform: scale(1.02);
      text-decoration: none;
    }

    .product-grid-item::before {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      content: "";
      box-shadow: 0px 2px 8px rgba(0,0,0,.2), 0px 2px 16px rgba(0,0,0,.2);
      transition: 0.4s opacity;
      will-change: opacity;
      opacity: 0;
    }

     .product-grid-item1::before {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      content: "";
      box-shadow: 0px 2px 8px rgba(0,0,0,.2), 0px 2px 16px rgba(0,0,0,.2);
      transition: 0.4s opacity;
      will-change: opacity;
      opacity: 0;
    }

    .product-grid-item:hover::before {
      opacity: 1;
    }

    .product-grid-item1:hover::before {
      opacity: 1;
    }

    .product-grid-item .thumb {
      position: relative;
     
      padding-top: 50%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100% auto;
    }

    .product-grid-item1 .thumb {
      position: relative;
      margin: 10px 10%;
      padding-top: 30%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
    }

    .product-grid-item h2 {
      color: #fff;
    }

    .product-grid-item p {
      margin-top: 0;
      margin-bottom: 0;
      max-width: 60px;
    }


    @media screen and (max-width: 1160px) {
      .product-grid-item {
       
        width: calc(50% - 52px);
      }

       .product-grid-item1 {
       
        width: calc(50% - 52px);
      }
    }

    @media screen and (max-width: 640px) {
      .product-grid-item {
        display: block;
        width: auto;
      }

       .product-grid-item1 {
        display: block;
        width: auto;
      }

      .product-grid-item.left,
      .product-grid-item1.right {
        float: none;
      }



    }
  </style>
	  
<div>
        <a class="onload-fadein product-grid-item left" href="https://lit-element.polymer-project.org" style="animation-delay: .15s; background: #00A3E6; background: linear-gradient(315deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%), linear-gradient(315deg, #3FC7FF 0%, #00A3E6 100%)">
          <div class="thumb" style="background-image:url(/images/grid1.jpg);"></div>
       
        </a>
        <a class="onload-fadein product-grid-item1 right" href="https://pwa-starter-kit.polymer-project.org" style="animation-delay: .3s; background: #6700DF; background: linear-gradient(315deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%), linear-gradient(315deg, #AF6AFF 0%, #6700DF 100%)">
          <div class="thumb" style="background-image:url(/images/thumbnails/thumb_pwa.svg);"></div>
          <h2>PWA Starter Kit</h2>
          <p>Starter templates for building full-featured Progressive Web Apps from web components.</p>
          <span class="status">Prerelease</span>
        </a>
        <a class="onload-fadein product-grid-item left" href="https://lit-html.polymer-project.org" style="animation-delay: .3s; background: #FF2F2F; background: linear-gradient(315deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%), linear-gradient(315deg, #FA5A5A 0%, #FF2F2F 100%)">
          <div class="thumb" style="background-image:url(/images/thumbnails/thumb_lit-html.svg);"></div>
          <h2>lit-html</h2>
          <p>An efficient, expressive, extensible HTML templating library for JavaScript.</p>
          <span class="status">Prerelease</span>
        </a>
        <a class="onload-fadein product-grid-item right" href="https://github.com/material-components/material-components-web-components" style="animation-delay: .25s; background: #00D67C; background: linear-gradient(315deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%), linear-gradient(315deg, #20FFA7 0%, #00D67C 100%)">
          <div class="thumb" style="background-image:url(/images/thumbnails/thumb_material.svg);"></div>
          <h2>Material Web Components</h2>
          <p>High-fidelity realizations of Google's Material Design spec that work anywhere on the web.</p>
          <span class="status">Prerelease</span>
        </a>
        <a class="onload-fadein product-grid-item left" href="https://github.com/WebComponents/webcomponentsjs" style="animation-delay: .25s; background: #00D67C; background: linear-gradient(315deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%), linear-gradient(315deg, #FF4ED4 0%, #FF00C1 100%)">
          <div class="thumb" style="background-image:url(/images/thumbnails/thumb_polyfills.svg);"></div>
          <h2>Web Components Polyfills</h2>
          <p>A suite of po</p>
        </a>
        <a class="onload-fadein product-grid-item right" href="https://polymer-library.polymer-project.org" style="animation-delay: .4s;">
          <div class="thumb" style="background-image:url(/images/thumbnails/thumb_library.svg);"></div>
          <h2>Polymer Library</h2>
          <p>Our original web component library.</p>
          <span class="status">Maintenance</span>
        </a>
</div>

<div style="clear: both"></div>

	 
    `;
  }

  static get properties() {
    return {
 
    }
  }

  test(e){
  	console.log(e.target.style.transform);
  	//e.target.style.transform = rotateY(180deg);
  }
}

window.customElements.define('poly-card', PolyCard);