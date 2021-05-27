// ==UserScript==
// @name         Tarea3Cliente.js
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Cliente para desencriptar una página
// @author       Diego Lagos
// @require     https://raw.githubusercontent.com/artjomb/cryptojs-extension/master/lib/cryptojs-aes.min.js
// @require     https://raw.githubusercontent.com/artjomb/cryptojs-extension/master/lib/cryptojs-mode-ctr.min.js
// @require     https://raw.githubusercontent.com/artjomb/cryptojs-extension/master/build/eax.min.js
// @match        https://lagossully.github.io/CriptografiaTarea3/
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var llave = document.getElementsByClassName("llave");
    var hexllave = CryptoJS.enc.Hex.parse(llave[0].id);

    var nonce = document.getElementsByClassName("nonce");
    var hexnonce = CryptoJS.enc.Hex.parse(nonce[0].id);

    var mensaje = document.getElementsByClassName("AES");
    var mensajestring = mensaje[0].id



    var eax = CryptoJS.EAX.create(hexllave);
    var textoplano = eax.decrypt(mensajestring, hexnonce);

    console.log(textoplano);



})();

