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


class SocialIcons extends LitElement {
  render() {
    return html`
      
      <style>

      img{
      	width: 35px;
      }

      </style>

      <a href="https://www.facebook.com/discoveryjeri/" target="_blank"><img src="../images/facebook.svg" alt="facebook" /></a>
      <a href="https://twitter.com/discovery_jeri" target="_blank"><img src="../images/twitter.svg" alt="twitter" /></a>
	    <a href="https://www.instagram.com/discovery_jeri/" target="_blank"><img src="../images/instagram.svg" alt="instagram" /></a>
	 
	 
	 


	 




	  
    `;
  }

  static get properties() {
    return {
 
    }
  }
}

window.customElements.define('social-icons', SocialIcons);