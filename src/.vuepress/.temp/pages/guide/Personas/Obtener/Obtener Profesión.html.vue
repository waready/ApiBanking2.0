<template><div><h1 id="obtener-profesion" tabindex="-1"><a class="header-anchor" href="#obtener-profesion"><span>Obtener Profesión</span></a></h1>
<p>Método para obtener la profesión de una persona física.</p>
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
<td>BTPersonas.ObtenerProfesion</td>
<td>RBTPG289</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio Obtener Profesión:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ObtenerProfesion> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>761768101CD285A89A23FBEE</bts:Token> 
            <bts:Device>GP</bts:Device> 
         </bts:Btinreq> 
         <bts:personaUId>10003</bts:personaUId> 
      </bts:BTPersonas.ObtenerProfesion> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerProfesion=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: a0776b33-6711-6c56-044c-42d681d3742f' \ 
  -d '{ 
  	"Btinreq": { 
		"Device": "GP", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "1", 
		"Canal": "BTDIGITAL", 
		"Token": "2081397563CD285A89A23FBE" 
	}, 
	"personaUId": 10003 
  } 
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
      <BTPersonas.ObtenerProfesionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>761768101CD285A89A23FBEE</Token> 
            <Device>GP</Device> 
         </Btinreq> 
         <sdtProfesion> 
            <identificador>8</identificador> 
            <descripcion>Contador</descripcion> 
         </sdtProfesion> 
         <fechaInicioProfesion>2012-03-01</fechaInicioProfesion> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTPersonas.ObtenerProfesion</Servicio> 
            <Fecha>2021-02-05</Fecha> 
            <Hora>13:37:57</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>7984</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTPersonas.ObtenerProfesionResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
{ 
	"Btinreq": { 
	  "Canal": "BTDIGITAL", 
	  "Requerimiento": "1", 
	  "Usuario": "INSTALADOR", 
	  "Token": "761768101CD285A89A23FBEE", 
	  "Device": "GP" 
	}, 
	"sdtProfesion": { 
	  "identificador": "8", 
	  "descripcion": "Contador" 
	}, 
	"fechaInicioProfesion": "2012-03-01", 
	"Erroresnegocio": { 
	}, 
	"Btoutreq": { 
	  "Canal": "BTDIGITAL", 
	  "Servicio": "BTPersonas.ObtenerProfesion", 
	  "Fecha": "2021-02-05", 
	  "Hora": "13:37:57", 
	  "Requerimiento": "1", 
	  "Numero": "7984", 
	  "Estado": "OK" 
	} 
} 
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
<td>sdtProfesion</td>
<td>sBTProfesion</td>
<td>Datos de la profesión.</td>
</tr>
<tr>
<td>fechaInicioProfesion</td>
<td>Date</td>
<td>Fecha de inicio de la profesión.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTProfesion son los siguientes:</p>
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
<td>Short</td>
<td>Identificador de profesión.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Descripción de profesión.</td>
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
<td>No se recibió el identificador de persona.</td>
</tr>
<tr>
<td>30002</td>
<td>El identificador no corresponde a una persona física.</td>
</tr>
<tr>
<td>50001</td>
<td>No se pudo obtener la descripción de la profesión.</td>
</tr>
</tbody>
</table>
</div></template>


