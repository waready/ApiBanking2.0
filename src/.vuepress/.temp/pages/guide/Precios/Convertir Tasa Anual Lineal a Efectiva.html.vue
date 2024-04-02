<template><div><h1 id="convertir-tasa-anual-lineal-a-efectiva" tabindex="-1"><a class="header-anchor" href="#convertir-tasa-anual-lineal-a-efectiva"><span>Convertir Tasa Anual Lineal a Efectiva</span></a></h1>
<p>Método para convertir una tasa lineal anual a efectiva anual.</p>
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
<td>BTPrecios.ConvertirTasaAnualLinealAEfectiva</td>
<td>RBTPG299</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio Convertir Tasa Anual Lineal a Efectiva:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrecios.ConvertirTasaAnualLinealAEfectiva> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>2081397563CD285A89A23FBE</bts:Token> 
            <bts:Device>GP</bts:Device> 
         </bts:Btinreq> 
         <bts:tasaOrigen>10</bts:tasaOrigen> 
         <bts:tipoAnio>2</bts:tipoAnio> 
         <bts:plazo>30</bts:plazo> 
      </bts:BTPrecios.ConvertirTasaAnualLinealAEfectiva> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrecios_v1?ConvertirTasaAnualLinealAEfectiva=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: a0776b33-6711-6c56-044c-42d681d3742f' \ 
  -d '{ 
  	"Btinreq": { 
		"Device": "GP", 
		"Usuario": "INSTALADOR", 
		"Requerimiento": "1", 
		"Canal": "BTDIGITAL", 
		"Token": "2081397563CD285A89A23FBE" 
	}, 
	"bts:tasaOrigen": "10", 
	"bts:tipoAño": "2", 
	"bts:plazo": "30" 
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
      <BTPrecios.ConvertirTasaAnualLinealAEfectivaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>2081397563CD285A89A23FBE</Token> 
            <Device>GP</Device> 
         </Btinreq> 
         <tasaDestino>10.47193</tasaDestino> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTPrecios.ConvertirTasaAnualLinealAEfectiva</Servicio> 
            <Fecha>2021-02-03</Fecha> 
            <Hora>12:55:21</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>7968</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTPrecios.ConvertirTasaAnualLinealAEfectivaResponse> 
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
	  "Token": "2081397563CD285A89A23FBE", 
	  "Device": "GP" 
	}, 
	"tasaDestino": "10.47193", 
	"Erroresnegocio": {}, 
	"Btoutreq": { 
	  "Canal": "BTDIGITAL", 
	  "Servicio": "BTPrecios.ConvertirTasaAnualLinealAEfectiva", 
	  "Fecha": "2021-02-03", 
	  "Hora": "11:57:30", 
	  "Requerimiento": "1", 
	  "Numero": "7967", 
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
<td>tipoTasaOrigen</td>
<td>Short</td>
<td>Tipo de tasa origen [Hidden: Valor fijo '2' para este método].</td>
</tr>
<tr>
<td>tasaOrigen</td>
<td>Double</td>
<td>Tasa a convertir.</td>
</tr>
<tr>
<td>tipoAnio</td>
<td>Short</td>
<td>Tipo de año [1 - Comercial / 2 - Calendario].</td>
</tr>
<tr>
<td>plazo</td>
<td>Int</td>
<td>Plazo.</td>
</tr>
<tr>
<td>tipoTasaDestino</td>
<td>Short</td>
<td>Tipo de tasa destino [Hidden: Valor fijo '1' para este método].</td>
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
<td>tasaDestino</td>
<td>Double</td>
<td>Tasa convertida.</td>
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
<td>Debe ingresar la tasa a convertir.</td>
</tr>
<tr>
<td>30002</td>
<td>Debe ingresar un tipo de año valido [1 - Comercial / 2 - Calendario].</td>
</tr>
<tr>
<td>30003</td>
<td>Debe ingresar un plazo.</td>
</tr>
</tbody>
</table>
</div></template>


