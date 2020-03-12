# Aplicaciones en tiempo real 

_Estas nos permiten transmitir informacion casi de inmediato entre aplicaciones, en este ejemplo veremos la utilizacion de **Sockets** como canal de comunicacion especificamente el uso de **socket.io** tanto para el cliente como para el servidor para la creacion de un chat en tiempo real._

## Requerimientos
 1. _**Navegador Web**, si esta leyendo esto lo mas probable es que ya tengas uno :)_
 2. _**Node js**, debes tener instalado tu node js para poder instalar paquetes y ejecutar scripts_
 3. _**Editor de Texto**, cualquier editor de texto sirve, si hasta bloc de notas._
 4. _**Conexion a Internet**, no esta demas , pues lo necesitamos para instalar nuestras dependencias_

## Hola Mundo
_Este respositorio tiene 2 subdirectorios, uno es el directorio **server** el cual contiene el archivo **server.js** que posee la logica para recibir y emitir mensajes de todos los clientes conectados al **socket** por otra parte tenemos el directorio **client** el cual tiene 3 archivos **index.html**(maquetacion del chat), **style.css**(capa de estilos para que nuestro chat se vea bien ) y **chat.js** el cual contiene la logica para enviar y recibir mensajes desde el server_

## Dependencias Server 
_Como vemos a continuacion en el package.json este solo tiene una dependencia, la cual es socket.io_
_Si quieres saber un poco mas sobre  **socket.io** ves al [Sitio Oficial](https://socket.io/ "Socket IO") o en [npm socket.io](https://www.npmjs.com/package/socket.io "Socket IO")_
```
--package.json
{
  ...
  "dependencies": {
    "socket.io": "^2.3.0"
  }
}
```
_Como nuestro package ya tiene este paquete en las depencias solo nos ubicamos en nuestro directorio server abrimos una consola, y ejecutamos npm install_
```
$ npm install
-- si no tenemos la dependencia en el package.json ejecutamos
$ npm install socket.io
```