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
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings.js';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { installOfflineWatcher } from 'pwa-helpers/network.js';
import { installRouter } from 'pwa-helpers/router.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';

// These are the elements needed by this element.
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-scroll-effects/effects/waterfall.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import { menuIcon } from './my-icons.js';
import './snack-bar.js';
import './social-icons.js';



class MyApp extends LitElement {
  render() {
    // Anything that's related to rendering should be done in here.
    return html`
    <style>
      :host {
        --app-drawer-width: 256px;
        display: block;

        --app-primary-color: white;
        --app-secondary-color: #293237;
        --app-dark-text-color: var(--app-secondary-color);
        --app-light-text-color: white;
        --app-section-even-color: #f7f7f7;
        --app-section-odd-color: white;

        --app-header-background-color: white;
        
        --app-header-text-color: var(--app-dark-text-color);
        --app-header-selected-color: var(--app-primary-color);

        --app-drawer-background-color: var(--app-secondary-color);
        --app-drawer-text-color: var(--app-light-text-color);
        --app-drawer-selected-color: #78909C;
      }

      app-header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        text-align: center;    
        color: var(--app-light-text-color);
        
      }

      .header-transparent{
        background-color: transparent;
      }

      .header-solid{
        background: #49a5bf; /* Old browsers */
        background: -webkit-linear-gradient(left, #49a5bf 0%, #6bb1bc 30%, #93cede 98%, #93cede 98%, #93cede 100%, #75bdd1 100%);
        background: -o-linear-gradient(left, #49a5bf 0%, #6bb1bc 30%, #93cede 98%, #93cede 98%, #93cede 100%, #75bdd1 100%);
        background: linear-gradient(to right, #49a5bf 0%, #6bb1bc 30%, #93cede 98%, #93cede 98%, #93cede 100%, #75bdd1 100%); /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */ /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      }

      

      [main-title] {
        font-family: 'Pacifico';
        text-transform: Upercase;
        font-size: 30px;
        /* In the narrow layout, the toolbar is offset by the width of the
        drawer button, and the text looks not centered. Add a padding to
        match that button */
        padding-right: 44px;
      }

      .toolbar-list {
        display: none;
      }

      .toolbar-list > a {
        display: inline-block;
        color: var(--app-light-text-color);
        text-decoration: none;
        font-weight: 700;
        line-height: 30px;
        padding: 4px 24px;
        font-size: .9rem;

      }

      .toolbar-list > a[selected] {
        color: var(--app-header-selected-color);
        border-bottom: 4px solid var(--app-header-selected-color);
      }

      .menu-btn {
        background: none;
        border: none;
        fill: var( --app-light-text-color);
        cursor: pointer;
        height: 44px;
        width: 44px;
      }

      .drawer-list {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: 24px;
        background: var(--app-drawer-background-color);
        position: relative;
      }

      .drawer-list > a {
        display: block;
        text-decoration: none;
        color: var(--app-drawer-text-color);
        line-height: 40px;
        padding: 0 24px;
      }

      .drawer-list > a[selected] {
        color: var(--app-drawer-selected-color);
      }

      /* Workaround for IE11 displaying <main> as inline */
      main {
        display: block;
      }

      .main-content {
        padding-top: 84px;
        min-height: 100vh;
      }

      .page {
        display: none;
      }

      .page[active] {
        display: block;
      }

      .footer__container {
        padding: 24px;
        background: var(--app-drawer-background-color);
        color: var(--app-drawer-text-color);       
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: .5rem;
        font-size: .9em;
      }

      .footer__company, .footer__contact{
        grid-column: span 2;
      }

      .footer__contact > img{
        display: inline-block; 
        vertical-align:middle;
        width: 25px;        
        padding-right: 5px;
      }

      .footer__copy, .footer__icons{
        justify-self: center;
        align-self: center;
        grid-column: span 2;
        padding-top: 5px;
      }

      .footer__faq > a{
        color: var(--app-primary-color);
        text-decoration: none;
      }

     
    

      /* Wide layout: when the viewport width is bigger than 460px, layout
      changes to a wide layout. */
      @media (min-width: 650px) {
        .toolbar-list {
          display: block;
        }

        .menu-btn {
          display: none;
        }

        .main-content {
          padding-top: 107px;
        }

        .main-content_frontpage{
          padding-top: 0px;
        }

        /* The drawer button isn't shown in the wide layout, so we don't
        need to offset the title */
        [main-title] {
          padding-right: 0px;
        }

        .footer__container{
          font-size: 1em;
          grid-template-columns: 1fr 1fr 1fr;
        }

        .footer__company{
        grid-column: 1;
      }

      .footer__contact{
        grid-column: 2;
      }

      .footer__faq{
        grid-column: 3;
      }

      .footer__copy, .footer__icons{
        justify-self: center;
        align-self: center;
        grid-column: span 3;
      }
      }
    </style>

    

    <!-- Header -->
    <app-header condenses reveals effects="waterfall" class="${this._page === 'view1'?'header-transparent':'header-solid'}">
      <app-toolbar>
        <button class="menu-btn" title="Menu" @click="${this._menuButtonClicked}">${menuIcon}</button>
        <div main-title>${this.appTitle}</div>


         <!-- This gets hidden on a small screen-->
      <nav class="toolbar-list">
        <a ?selected="${this._page === 'view1'}" href="/view1">Inicio</a>
        <a ?selected="${this._page === 'view2'}" href="/view2">Passeios</a>
        <a ?selected="${this._page === 'view3'}" href="/view3">Blog</a>
        <a ?selected="${this._page === 'view4'}" href="/view4">Ajuda</a>
      </nav>
      </app-toolbar>
  
    </app-header>

    <!-- Drawer content -->
    <app-drawer .opened="${this._drawerOpened}"
        @opened-changed="${this._drawerOpenedChanged}">
      <nav class="drawer-list">
        <a ?selected="${this._page === 'view1'}" href="/view1">Inicio</a>
        <a ?selected="${this._page === 'view2'}" href="/view2">Passeios</a>
        <a ?selected="${this._page === 'view3'}" href="/view3">Blog</a>
        <a ?selected="${this._page === 'view4'}" href="/view4">Ajuda</a>
      </nav>
    </app-drawer>

    <!-- Main content -->
    <main role="main" class="${this._page === 'view1'?'main-content_frontpage':'main-content'}">
      <my-view1 class="page" ?active="${this._page === 'view1'}"></my-view1>
      <my-view2 class="page" ?active="${this._page === 'view2'}"></my-view2>
      <my-view3 class="page" ?active="${this._page === 'view3'}"></my-view3>
      <my-view4 class="page" ?active="${this._page === 'view4'}"></my-view4>
      <my-view404 class="page" ?active="${this._page === 'view404'}"></my-view404>


    </main>

    <footer>
      <div class="footer__container">
        <div class="footer__company">
          <h3>Sobre Nós</h3>
          <p>A DiscoveryJeri é uma agência de turismo receptivo, que trabalha a excelência na oferta de traslados e passeios na vila de Jericoacoara.</p>
        </div>
        
        <div class="footer__contact">
          <h3>Contato</h3>
          <img src="../images/envelope.svg" alt="email" />contatojericoacoara@gmail.com
          <p>Av Principal, S/N
          Preá - Cruz - Ceará </br>
          CEP 62595-000 </br>
          (88) 99781-7010 Tim </p>
        </div>

        <div class="footer__faq">
          <h3>Menu</h3>
          <a href="">Passeios</a></br>
          <a href="">Blog</a></br>
          <a href="">Ajuda</a></br>
          <a href="">Politicas</a>   
        </div>

        <div class="footer__icons">
          <social-icons></social-icons>
        </div>     
        
        <div class="footer__copy">
          <p>© 2018 Copyright Vigior</p>    
        </div>

      
      </div>

     

    </footer>

    <snack-bar ?active="${this._snackbarOpened}">
        You are now ${this._offline ? 'offline' : 'online'}.</snack-bar>
    `;
  }

  static get properties() {
    return {
      appTitle: { type: String },
      _page: { type: String },
      _drawerOpened: { type: Boolean },
      _snackbarOpened: { type: Boolean },
      _offline: { type: Boolean }
    }
  }

  constructor() {
    super();
    this._drawerOpened = false;
    // To force all event listeners for gestures to be passive.
    // See https://www.polymer-project.org/3.0/docs/devguide/settings#setting-passive-touch-gestures
    setPassiveTouchGestures(true);
  }

  firstUpdated() {
    installRouter((location) => this._locationChanged(location));
    installOfflineWatcher((offline) => this._offlineChanged(offline));
    installMediaQueryWatcher(`(min-width: 460px)`,
        (matches) => this._layoutChanged(matches));
  }

  updated(changedProps) {
    if (changedProps.has('_page')) {
      const pageTitle = this.appTitle + ' - ' + this._page;
      updateMetadata({
        title: pageTitle,
        description: pageTitle
        // This object also takes an image property, that points to an img src.
      });
    }
  }

  _layoutChanged(isWideLayout) {
    // The drawer doesn't make sense in a wide layout, so if it's opened, close it.
    this._updateDrawerState(false);
  }

  _offlineChanged(offline) {
    const previousOffline = this._offline;
    this._offline = offline;

    // Don't show the snackbar on the first load of the page.
    if (previousOffline === undefined) {
      return;
    }

    clearTimeout(this.__snackbarTimer);
    this._snackbarOpened = true;
    this.__snackbarTimer = setTimeout(() => { this._snackbarOpened = false }, 3000);
  }

  _locationChanged() {
    const path = window.decodeURIComponent(window.location.pathname);
    const page = path === '/' ? 'view1' : path.slice(1);
    this._loadPage(page);
    // Any other info you might want to extract from the path (like page type),
    // you can do here.

    // Close the drawer - in case the *path* change came from a link in the drawer.
    this._updateDrawerState(false);
  }

  _updateDrawerState(opened) {
    if (opened !== this._drawerOpened) {
      this._drawerOpened = opened;
    }
  }

  _loadPage(page) {
    switch(page) {
      case 'view1':
        import('../components/my-view1.js').then((module) => {
          // Put code in here that you want to run every time when
          // navigating to view1 after my-view1.js is loaded.
        });
        break;
      case 'view2':
        import('../components/my-view2.js');
        break;
      case 'view3':
        import('../components/my-view3.js');
        break;
      case 'view4':
        import('../components/my-view4.js');
        break;
      default:
        page = 'view404';
        import('../components/my-view404.js');
    }

    this._page = page;
  }

  _menuButtonClicked() {
    this._updateDrawerState(true);
  }

  _drawerOpenedChanged(e) {
    this._updateDrawerState(e.target.opened);
  }
}

window.customElements.define('my-app', MyApp);
