// ==UserScript==
// @name         Tarea3Cliente.js
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Cliente para desencriptar una página
// @author       Diego Lagos
// @require     https://raw.githubusercontent.com/artjomb/cryptojs-extension/master/lib/cryptojs-aes.min.js
// @require     https://raw.githubusercontent.com/artjomb/cryptojs-extension/master/lib/cryptojs-mode-ctr.min.js
// @require     https://raw.githubusercontent.com/artjomb/cryptojs-extension/master/build/eax.min.js
// @match        file:///C:/Users/diego/Documents/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //document.querySelector("#element_id");
    var llave = document.getElementsByClassName("llave");
    var nonce = document.getElementsByClassName("nonce");
    var mensaje = document.getElementsByClassName("AES");



})();

