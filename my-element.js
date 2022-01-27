/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        width: 95%;
        margin: 2px auto;
        position: relative;
        background-color: #85929E;
      }
    `;
  }

  static get properties() {
    return {
      /**
       * The name to say "Hello" to.
       * @type {string}
       */
      name: {type: String},
      carName: {type: String},
      /**
       * The number of times the button has been clicked.
       * @type {number}
       */
      count: {type: Number},
    };
  }

  constructor() {
    super();
    this.name = '.......';
    this.carName = '......';
    this.count = 0;
  }

  render() {
    return html`
      <slot></slot>
      <input @input='${this.myCar}'>
      <button @click=${this._onClick} part="button">
        ჩააჭირე გაზსააა
      </button>
      <h1>გამოვარდა აქანა: ${this.name}</h1>
      <h2>მოიძებნა: ${this.carName}</h2>
      <h3>ჩავაჭირე ${this.count} ჯერ გაზსაა</h3>
    `;
  }

  _onClick() {
    this.carName++;
    this.count++;
    this.dispatchEvent(new CustomEvent('count-changed'));
  }

  /**
   * Formats a greeting
   * @param name {string} The name to say "Hello" to
   * @returns {string} A greeting directed at `name`
   */
  myCar(subaru) {
    var value = subaru.target.value;
    console.log(value);
    this.name = value;
  }
  carName(mashina) {
    var value = mashina.target.value;
    console.log(value);
    this.name = value;
  }
}

window.customElements.define('my-element', MyElement);
