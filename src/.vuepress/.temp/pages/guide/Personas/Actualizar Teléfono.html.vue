<template><div><h1 id="actualizar-telefono" tabindex="-1"><a class="header-anchor" href="#actualizar-telefono"><span>Actualizar Teléfono</span></a></h1>
<p>Método para actualizar el teléfono de una persona.</p>
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
<td>BTPersonas.ActualizarTelefono</td>
<td>RBTPG485</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio de Actualizar Teléfono:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ActualizarTelefono> 
         <bts:Btinreq> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Token>A088577A8D1E89A20E6EF27D</bts:Token> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Device>1</bts:Device> 
         </bts:Btinreq> 
         <bts:personaUId>61</bts:personaUId> 
         <bts:numeroTelefono>099274742</bts:numeroTelefono> 
         <bts:tipoTelefonoId>2</bts:tipoTelefonoId> 
         <bts:domicilioId>1</bts:domicilioId> 
         <bts:telefonoId>1</bts:telefonoId> 
      </bts:BTPersonas.ActualizarTelefono> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas?ActualizarTelefono' \ 
	-H 'cache-control: no-cache' \ 
	-H 'content-type: application/json' \ 
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
	-d '{ 
	"Btinreq": { 
	  "Device": "AV", 
	  "Usuario": "MINSTALADOR", 
	  "Token": "16c1cc9b534A8B5C60A82434", 
	  "Canal": "BTDIGITAL", 
	  "Requerimiento": "1" 
	}, 
	"personaUId": "61", 
   "numeroTelefono": "099274742", 
   "tipoTelefonoId": "2", 
   "domicilioId": "1", 
   "telefonoId": "1" 
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
      <BTPersonas.ActualizarTelefonoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>A088577A8D1E89A20E6EF27D</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>10294</Numero> 
            <Servicio>BTPersonas.ActualizarTelefono</Servicio> 
            <Estado>OK</Estado> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2023-05-05</Fecha> 
            <Hora>11:40:54</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPersonas.ActualizarTelefonoResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
{ 
   "Btinreq": { 
      "Device": "AV", 
      "Usuario": "MINSTALADOR", 
      "Token": "fa2c02c95a4A8B5C60A82434", 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "1" 
   }, 
   "Btoutreq": { 
      "Numero": "111397", 
      "Estado": "OK", 
      "Servicio": "BTPersonas.ActualizarTelefono", 
      "Requerimiento": "1", 
      "Fecha": "2023-05-05", 
      "Canal": "BTDIGITAL", 
      "Hora": "11:45:24" 
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
<tr>
<td>numeroTelefono</td>
<td>String</td>
<td>Número de teléfono.</td>
</tr>
<tr>
<td>tipoTelefonoId</td>
<td>Short</td>
<td>Identificador de tipo de teléfono.</td>
</tr>
<tr>
<td>domicilioId</td>
<td>Byte</td>
<td>Identificador de tipo de domicilio.</td>
</tr>
<tr>
<td>telefonoId</td>
<td>Byte</td>
<td>Identificador correlativo de teléfono.</td>
</tr>
</tbody>
</table>
<h3 id="datos-de-salida" tabindex="-1"><a class="header-anchor" href="#datos-de-salida"><span>Datos de salida</span></a></h3>
<p>No aplica.</p>
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
<td>30002</td>
<td>Debe ingresar al menos un teléfono.</td>
</tr>
<tr>
<td>30005</td>
<td>No se recibió el tipo del telefono.</td>
</tr>
<tr>
<td>30006</td>
<td>No se recibió el código del domicilio.</td>
</tr>
<tr>
<td>40002</td>
<td>No existe persona con los datos ingresados.</td>
</tr>
<tr>
<td>40003</td>
<td>El número del teléfono es incorrecto (es muy corto).</td>
</tr>
<tr>
<td>40004</td>
<td>El número del teléfono es incorrecto (es muy largo).</td>
</tr>
<tr>
<td>40005</td>
<td>El número del teléfono no acepta caracteres.</td>
</tr>
</tbody>
</table>
</div></template>


