<template><div><h1 id="obtener-telefonos" tabindex="-1"><a class="header-anchor" href="#obtener-telefonos"><span>Obtener Teléfonos</span></a></h1>
<p>Método para obtener los teléfonos de una persona.</p>
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
<td>BTPersonas.ObtenerTelefonos</td>
<td>RBTPG484</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio de Obtener Teléfonos:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ObtenerTelefonos> 
         <bts:Btinreq> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Token>A088577A8D1E89A20E6EF27D</bts:Token> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Device>1</bts:Device> 
         </bts:Btinreq> 
         <bts:personaUId>189</bts:personaUId> 
      </bts:BTPersonas.ObtenerTelefonos> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas?ObtenerTelefonos' \ 
	-H 'cache-control: no-cache' \ 
	-H 'content-type: application/json' \ 
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
	-d '{ 
	"Btinreq": { 
	  "Device": "1", 
	  "Usuario": "MINSTALADOR", 
	  "Token": "16c1cc9b534A8B5C60A82434", 
	  "Canal": "BTDIGITAL", 
	  "Requerimiento": "1" 
	}, 
	"personaUId": "189", 
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
      <Prueba.ObtenerTelefonosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>A088577A8D1E89A20E6EF27D</Token> 
         </Btinreq> 
         <sdtTelefono> 
            <sBTTelefono> 
               <telefono>23786543</telefono> 
               <tipoDeDomicilioId>1</tipoDeDomicilioId> 
               <identificador>1</identificador> 
               <tipoDeDomicilio>Residencia</tipoDeDomicilio> 
            </sBTTelefono> 
            <sBTTelefono> 
               <telefono>096154763</telefono> 
               <tipoDeDomicilioId>1</tipoDeDomicilioId> 
               <identificador>2</identificador> 
               <tipoDeDomicilio>Residencia</tipoDeDomicilio> 
            </sBTTelefono> 
         </sdtTelefono> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>10341</Numero> 
            <Servicio>Prueba.ObtenerTelefonos</Servicio> 
            <Estado>OK</Estado> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2023-05-05</Fecha> 
            <Hora>12:21:52</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </Prueba.ObtenerTelefonosResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
{ 
   "Btinreq": { 
      "Device": "1", 
      "Usuario": "MINSTALADOR", 
      "Token": "fa2c02c95a4A8B5C60A82434", 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "1" 
   }, 
   "sdtTelefono": { 
      "sBTTelefono": [ 
      { 
         "telefono": "23786543", 
         "tipoDeDomicilioId": "1", 
         "identificador": "1", 
         "tipoDeDomicilio": "Residencia" 
      }, 
      { 
          "telefono": "096154763", 
         "tipoDeDomicilioId": "1", 
         "identificador": "2", 
         "tipoDeDomicilio": "Residencia" 
      } 
      ] 
   }, 
   "Btoutreq": { 
      "Numero": "111399", 
      "Estado": "OK", 
      "Servicio": "BTPersonas.ObtenerTelefonos", 
      "Requerimiento": "1", 
      "Fecha": "2023-05-05", 
      "Canal": "BTDIGITAL", 
      "Hora": "12:21:52" 
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
<td>personaUId</td>
<td>Long</td>
<td>Identificador único de persona.</td>
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
<td>sdtTelefono</td>
<td>sBTTelefono</td>
<td>Listado de Teléfonos.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTTelefono son los siguientes:</p>
<table>
<thead>
<tr>
<th>Campo</th>
<th>Tipo</th>
<th>Comentarios</th>
</tr>
</thead>
<tbody>
<tr>
<td>identificador</td>
<td>Int</td>
<td>Identificador del tipo de teléfono.</td>
</tr>
<tr>
<td>telefono</td>
<td>String</td>
<td>Número de teléfono.</td>
</tr>
<tr>
<td>tipoDeDomicilioId</td>
<td>Byte</td>
<td>Identificador del tipo de domicilio.</td>
</tr>
<tr>
<td>tipoDeDomicilio</td>
<td>String</td>
<td>Nombre del tipo de domicilio.</td>
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
<td>No se recibió el identificador único de persona.</td>
</tr>
<tr>
<td>30013</td>
<td>No existe registro para el identificador único.</td>
</tr>
</tbody>
</table>
</div></template>


