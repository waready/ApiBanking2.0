<template><div><h1 id="validar-existencia" tabindex="-1"><a class="header-anchor" href="#validar-existencia"><span>Validar Existencia</span></a></h1>
<p>Método para validar la existencia de una persona.</p>
<table>
<thead>
<tr>
<th>Nombre publicación</th>
<th>Programa</th>
<th>Global/País</th>
</tr>
</thead>
<tbody>
<tr>
<td>BTPersonas.ValidarExistencia</td>
<td>RBTPG489</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Validar Existencia:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ValidarExistencia> 
         <bts:Btinreq> 
            <bts:Requerimiento>0</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Device>GZ</bts:Device> 
            <bts:Usuario>Instalador</bts:Usuario> 
            <bts:Token>8e3a8ef2dd99865B3A2E76CF</bts:Token> 
         </bts:Btinreq> 
         <bts:paisId>604</bts:paisId> 
         <bts:tipoDocumentoId>1</bts:tipoDocumentoId> 
         <bts:numeroDocumento>10587456</bts:numeroDocumento> 
      </bts:BTPersonas.ValidarExistencia> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas?ValidarExistencia' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
  -d '{ 
	"Btinreq": { 
        "Requerimiento": 0, 
        "Canal": "BTDIGITAL", 
        "Device": "GZ", 
        "Usuario": "Instalador", 
        "Token": "8e3a8ef2dd99865B3A2E76CF" 
    }, 
    "paisId": 604, 
    "tipoDocumentoId": 1, 
    "numeroDocumento": 10587456 
    }' 
``` 
</code-block> 
</code-group> 
<blockquote>
<p>El POST retornará la siguiente estructura:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   <SOAP-ENV:Body> 
      <BTPersonas.ValidarExistenciaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GZ</Device> 
            <Usuario>Instalador</Usuario> 
            <Requerimiento>0</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>8e3a8ef2dd99865B3A2E76CF</Token> 
         </Btinreq> 
         <existe>S</existe> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>249703</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPersonas.ValidarExistencia</Servicio> 
            <Requerimiento>0</Requerimiento> 
            <Fecha>2023-10-10</Fecha> 
            <Hora>17:11:02</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPersonas.ValidarExistenciaResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
        "Requerimiento": 0, 
        "Canal": "BTDIGITAL", 
        "Device": "GZ", 
        "Usuario": "Instalador", 
        "Token": "8e3a8ef2dd99865B3A2E76CF" 
    }, 
    "existe": "S", 
    "Erroresnegocio": "", 
    "Btoutreq": { 
        "Numero": 249703, 
        "Estado": "OK", 
        "Servicio": "BTPersonas.ValidarExistencia", 
        "Requerimiento": 0, 
        "Fecha": "2023-10-10", 
        "Hora": "17:11:02", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group>  
<h3 id="datos-de-entrada" tabindex="-1"><a class="header-anchor" href="#datos-de-entrada"><span>Datos de entrada</span></a></h3>
<table>
<thead>
<tr>
<th>Nombre</th>
<th>Tipo</th>
<th>Comentarios</th>
</tr>
</thead>
<tbody>
<tr>
<td>paisId</td>
<td>Short</td>
<td>Identificador del país de origen del documento.</td>
</tr>
<tr>
<td>tipoDocumentoId</td>
<td>Short</td>
<td>Identificador del tipo de documento.</td>
</tr>
<tr>
<td>numeroDocumento</td>
<td>String</td>
<td>Número de documento de la persona.</td>
</tr>
</tbody>
</table>
<h3 id="datos-de-salida" tabindex="-1"><a class="header-anchor" href="#datos-de-salida"><span>Datos de salida</span></a></h3>
<table>
<thead>
<tr>
<th>Nombre</th>
<th>Tipo</th>
<th>Comentarios</th>
</tr>
</thead>
<tbody>
<tr>
<td>existe</td>
<td>String</td>
<td>¿Existe? (S/N).</td>
</tr>
</tbody>
</table>
<h3 id="errores" tabindex="-1"><a class="header-anchor" href="#errores"><span>Errores</span></a></h3>
<table>
<thead>
<tr>
<th>Código</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>30001</td>
<td>No se recibió el identificador de país.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recibió el identificador de tipo de documento.</td>
</tr>
<tr>
<td>30003</td>
<td>No se recibió el número de documento.</td>
</tr>
<tr>
<td>30004</td>
<td>La persona no existe.</td>
</tr>
</tbody>
</table>
</div></template>


