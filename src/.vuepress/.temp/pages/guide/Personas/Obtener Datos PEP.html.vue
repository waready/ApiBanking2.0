<template><div><h1 id="obtener-datos-pep" tabindex="-1"><a class="header-anchor" href="#obtener-datos-pep"><span>Obtener Datos PEP</span></a></h1>
<p>Método para obtener los datos de una persona expuesta políticamente.</p>
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
<td>BTPersonas.ObtenerDatosPEP</td>
<td>RBTPG229</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio Obtener Datos PEP (V2R2):</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ObtenerDatosPEP> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>110220211247090000683511</bts:Token> 
            <bts:Device>GP</bts:Device> 
         </bts:Btinreq> 
         <bts:personaUId>1</bts:personaUId> 
      </bts:BTPersonas.ObtenerDatosPEP> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerDatosPEP=' \ 
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
	"personaUId": 1 
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
      <BTPersonas.ObtenerDatosPEPResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>MINSTALADOR</Usuario> 
            <Token>110220211247090000683511</Token> 
            <Device>GP</Device> 
         </Btinreq> 
         <esPEP>S</esPEP> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTPersonas.ObtenerDatosPEP</Servicio> 
            <Fecha>2021-02-11</Fecha> 
            <Hora>12:48:16</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>10595</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTPersonas.ObtenerDatosPEPResponse> 
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
	  "Usuario": "MINSTALADOR", 
	  "Token": "110220211247090000683511", 
	  "Device": "GP" 
	}, 
	"esPEP": "S", 
	"Erroresnegocio": { 
	}, 
	"Btoutreq": { 
	  "Canal": "BTDIGITAL", 
	  "Servicio": "BTPersonas.ObtenerDatosPEP", 
	  "Fecha": "2021-02-11", 
	  "Hora": "12:48:16", 
	  "Requerimiento": "1", 
	  "Numero": "10595", 
	  "Estado": "OK" 
	} 
} 
``` 
</code-block> 
</code-group> 
<blockquote>
<p>Ejemplo de invocación al servicio Obtener Datos PEP (V2R3):</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ObtenerDatosPEP> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>970772007CD285A89A23FBEE</bts:Token> 
            <bts:Device>1</bts:Device> 
         </bts:Btinreq> 
         <bts:personaUID>12</bts:personaUID> 
      </bts:BTPersonas.ObtenerDatosPEP> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas?ObtenerDatosPEP=' \ 
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
	"personaUId": 12 
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
      <BTPersonas.ObtenerDatosPEPResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>970772007CD285A89A23FBEE</Token> 
            <Device>1</Device> 
         </Btinreq> 
         <esPEP>S</esPEP> 
         <sdtDatosPEP> 
            <entidad>Bantotal</entidad> 
            <cargoRelacion>Político</cargoRelacion> 
            <observacion>No corresponde</observacion> 
            <fechaInicio>2012-12-12</fechaInicio> 
            <fechaSalida>0000-00-00</fechaSalida> 
         </sdtDatosPEP> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTPersonas.ObtenerDatosPEP</Servicio> 
            <Fecha>2021-02-11</Fecha> 
            <Hora>16:36:46</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>80313</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTPersonas.ObtenerDatosPEPResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
	"Btinreq": { 
	  "Canal": "BTDIGITAL", 
	  "Requerimiento": "1", 
	  "Usuario": "INSTALADOR", 
	  "Token": "970772007CD285A89A23FBEE", 
	  "Device": "1" 
	}, 
	"esPEP": "S", 
	"sdtDatosPEP": { 
	  "entidad": "Bantotal", 
	  "cargoRelacion": "Político", 
	  "observacion": "No corresponde", 
	  "fechaInicio": "2012-12-12", 
	  "fechaSalida": "0000-00-00" 
	}, 
	"Erroresnegocio": {}, 
	"Btoutreq": { 
	  "Canal": "BTDIGITAL", 
	  "Servicio": "BTPersonas.ObtenerDatosPEP", 
	  "Fecha": "2021-02-11", 
	  "Hora": "16:36:46", 
	  "Requerimiento": "1", 
	  "Numero": "80313", 
	  "Estado": "OK" 
	} 
} 
``` 
</code-block> 
</code-group> 
<h3 id="version-v2r2" tabindex="-1"><a class="header-anchor" href="#version-v2r2"><span>Versión V2R2</span></a></h3>
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
<td>esPEP</td>
<td>String</td>
<td>Es persona políticamente expuesta? (S/N).</td>
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
</tbody>
</table>
<h3 id="version-v2r3" tabindex="-1"><a class="header-anchor" href="#version-v2r3"><span>Versión V2R3</span></a></h3>
<h3 id="datos-de-entrada-1" tabindex="-1"><a class="header-anchor" href="#datos-de-entrada-1"><span>Datos de entrada</span></a></h3>
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
<h3 id="datos-de-salida-1" tabindex="-1"><a class="header-anchor" href="#datos-de-salida-1"><span>Datos de salida</span></a></h3>
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
<td>esPEP</td>
<td>String</td>
<td>Es persona políticamente expuesta? (S/N).</td>
</tr>
<tr>
<td>sdtDatosPEP</td>
<td>sBTDatosPEP</td>
<td>Datos de la PEP.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTDatosPEP son los siguientes:</p>
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
<td>entidad</td>
<td>String</td>
<td>Entidad.</td>
</tr>
<tr>
<td>cargoRelacion</td>
<td>String</td>
<td>Cargo que ocupa.</td>
</tr>
<tr>
<td>observacion</td>
<td>String</td>
<td>Observación.</td>
</tr>
<tr>
<td>fechaInicio</td>
<td>Date</td>
<td>Fecha de inicio.</td>
</tr>
<tr>
<td>fechaSalida</td>
<td>Date</td>
<td>Fecha de salida.</td>
</tr>
</tbody>
</table>
<h3 id="errores-1" tabindex="-1"><a class="header-anchor" href="#errores-1"><span>Errores</span></a></h3>
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
<td>50001</td>
<td>Fecha Inicio cargo PEP es de ingreso obligatorio.</td>
</tr>
<tr>
<td>50002</td>
<td>Entidad es de ingreso obligatorio.</td>
</tr>
<tr>
<td>50003</td>
<td>Cargo y Relación es de ingreso obligatorio.</td>
</tr>
<tr>
<td>50004</td>
<td>Fecha Salida cargo PEP debe de ser mayor a Fecha Inicio cargo PEP.</td>
</tr>
<tr>
<td>50005</td>
<td>Fecha Inicio cargo PEP debe de ser anterior a la Fecha de Hoy.</td>
</tr>
</tbody>
</table>
</div></template>


