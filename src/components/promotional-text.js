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




class PromotionalText extends LitElement {
  render() {
    return html`
      
 	<style>

 	.Iam {
  padding: 2em 5em;
  font: normal 40px/50px Montserrat, sans-serif;
  color: #999;
}
.Iam p {
  height: 50px;
  float: left;
  margin-right: 0.3em;
}
.Iam b {
  float: left;
  overflow: hidden;
  position: relative;
  height: 50px;
  top: 40px;
}
.Iam .innerIam {
  display: inline-block;
  color: #e74c3c;
  position: relative;
  white-space: nowrap;
  top: 0;
  left: 0;


/*animation*/
-webkit-animation:move 5s;
   -moz-animation:move 5s;
    -ms-animation:move 5s;
     -o-animation:move 5s;
        animation:move 5s;
/*animation-iteration-count*/
-webkit-animation-iteration-count:infinite;
   -moz-animation-iteration-count:infinite;
    -ms-animation-iteration-count:infinite;
     -o-animation-iteration-count:infinite;
        animation-iteration-count:infinite;
/*animation-delay*/
-webkit-animation-delay:1s;
   -moz-animation-delay:1s;
    -ms-animation-delay:1s;
     -o-animation-delay:1s;
        animation-delay:1s;
}
@keyframes move{
0%  { top: 0px; }
20% { top: -50px; }
40% { top: -100px; }
60% { top: -150px; }
80% { top: -200px; }
}

@-webkit-keyframes move {
    0%  { top: 0px; }
    20% { top: -50px; }
    40% { top: -100px; }
    60% { top: -150px; }
    80% { top: -200px; }
}
@-moz-keyframes move {
    0%  { top: 0px; }
    20% { top: -50px; }
    40% { top: -100px; }
    60% { top: -150px; }
    80% { top: -200px; }
}
@-o-keyframes move {
    0%  { top: 0px; }
    20% { top: -50px; }
    40% { top: -100px; }
    60% { top: -150px; }
    80% { top: -200px; }
}
@keyframes move {
    0%  { top: 0px; }
    20% { top: -50px; }
    40% { top: -100px; }
    60% { top: -150px; }
    80% { top: -200px; }
}

 	</style>

 	<div class="Iam">

<p>Discover</p>
<b>
  <div class="innerIam">
    Sun<br /> 
    Kite<br />
    Dunes<br />
    Forró<br />
     Jeri
    </div>
</b>

</div>


	  
    `;
  }

  static get properties() {
    return {
 
    }
  }
}

window.customElements.define('promotional-text', PromotionalText);