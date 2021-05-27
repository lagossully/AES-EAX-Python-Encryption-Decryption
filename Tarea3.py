from Crypto.Cipher import AES
from string import Template
from base64 import b64encode
from Crypto.Random import get_random_bytes
import json
import base64 
import binascii
import webbrowser
import os

llave = b'sixteen byte key'
objeto = AES.new(llave, AES.MODE_EAX)

mensaje = b'sale su lolcito'
textocifrado, tag = objeto.encrypt_and_digest(mensaje)
cifradob64 = '"'+base64.b64encode(textocifrado).decode('utf-8')+ '"'

nonce = b'5684517890481604'


f = open('./index.html','w')
pagina = """<!DOCTYPE html>
<html lang="en">
<head>
<title>Tarea 3</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {
  box-sizing: border-box;
}
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}
.header {
  padding: 80px;
  text-align: center;
  background: #00bfff;
  color: white;
}
.header h1 {
  font-size: 40px;
}
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js" integrity="sha512-nOQuvD9nKirvxDdvQ9OMqe2dgapbPB7vYAMrzJihw5m+aNcf0dX53m6YxM4LgA9u8e9eg9QX+/+mPu8kCNpV2A==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</head>

<body>
<div class="header">
  <h1>Tarea 3 criptografia</h1>
  <p>Este sitio contiene un mensaje secreto</p>
  <p>Puedes encontrarlo?</p>
  <div class= "$algorithm" id= $sustituto></div>
  <div class= "llave" id= "$sustituto2"></div>
  <div class= "nonce" id= $sustituto3></div>
</div>

</body>
</html>"""

g = 'AES'


s = Template(pagina).safe_substitute(sustituto=cifradob64, algorithm = g, sustituto2 = llave.decode('UTF-8'), sustituto3 = nonce.decode('UTF-8'))

f.write(s)
f.close()


