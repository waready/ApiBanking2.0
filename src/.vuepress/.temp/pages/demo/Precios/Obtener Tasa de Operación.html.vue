<template><div><h1 id="obtener-tasa-de-operacion" tabindex="-1"><a class="header-anchor" href="#obtener-tasa-de-operacion"><span>Obtener Tasa de Operación</span></a></h1>
<p>Método que devuelve la tasa de la operación junto con la fecha de vigencia.</p>
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
<td>BTPrecios.ObtenerTasaOperacion</td>
<td>RBTPG318</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Tasa de Operación con Fecha de Vigencia:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrecios.ObtenerTasaOperacion> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>BANTOTAL</bts:Usuario> 
            <bts:Token>1600460797F955E77534D3E0</bts:Token> 
            <bts:Device>AC</bts:Device> 
         </bts:Btinreq> 
         <bts:operacionUId>1</bts:operacionUId> 
         <bts:fecha>2020-11-11</bts:fecha> 
         <bts:importe>100000</bts:importe> 
         <bts:plazo>360</bts:plazo> 
      </bts:BTPrecios.ObtenerTasaOperacion> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrecios_v1?ObtenerTasaOperacion' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
	"bts:Btinreq": { 
	  "bts:Canal": "BTDIGITAL", 
	  "bts:Requerimiento": "1", 
	  "bts:Usuario": "BANTOTAL", 
	  "bts:Token": "1600460797F955E77534D3E0", 
	  "bts:Device": "AC" 
	}, 
	"operacionUId": 10118, 
	"fecha": "2020-11-11", 
	"importe": 100000, 
	"plazo": 360 
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
      <BTPrecios.ObtenerTasaOperacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>BANTOTAL</Usuario> 
            <Token>1600460797F955E77534D3E0</Token> 
            <Device>AC</Device> 
         </Btinreq> 
         <tipoTasa>Efectiva Anual</tipoTasa> 
         <tasa>0.3</tasa> 
         <tasaMinima>0.3</tasaMinima> 
         <tasaMaxima>0.3</tasaMaxima> 
		 <fechaVigencia>2021-11-11</fechaVigencia>	  
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTPrecios.ObtenerTasaOperacion</Servicio> 
            <Fecha>2021-03-18</Fecha> 
            <Hora>14:13:11</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>8063</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTPrecios.ObtenerTasaOperacionResponse> 
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
	  "Usuario": "BANTOTAL", 
	  "Token": "1600460797F955E77534D3E0", 
	  "Device": "AC" 
	}, 
	"tipoTasa": "Efectiva Anual", 
	"tasa": "0.3", 
	"tasaMinima": "0.3", 
	"tasaMaxima": "0.3", 
	"fechaVigencia": "2021-11-11", 
	"Erroresnegocio": { 
	}, 
	"Btoutreq": { 
	  "Canal": "BTDIGITAL", 
	  "Servicio": "BTPrecios.ObtenerTasaOperacion", 
	  "Fecha": "2021-03-18", 
	  "Hora": "14:13:11", 
	  "Requerimiento": "1", 
	  "Numero": "8063", 
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
<td>operacionUId</td>
<td>Long</td>
<td>Identificador de operación.</td>
</tr>
<tr>
<td>fecha</td>
<td>Date</td>
<td>Fecha de consulta.</td>
</tr>
<tr>
<td>importe</td>
<td>Long</td>
<td>Importe.</td>
</tr>
<tr>
<td>plazo</td>
<td>Int</td>
<td>Plazo.</td>
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
<td>tipoTasa</td>
<td>String</td>
<td>Tipo de tasa.</td>
</tr>
<tr>
<td>tasa</td>
<td>Double</td>
<td>Tasa.</td>
</tr>
<tr>
<td>tasaMinima</td>
<td>Double</td>
<td>Tasa mínima.</td>
</tr>
<tr>
<td>tasaMaxima</td>
<td>Double</td>
<td>Tasa máxima.</td>
</tr>
<tr>
<td>fechaVigencia</td>
<td>Date</td>
<td>Fecha de vigencia</td>
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
<td>Debe ingresar identificador de operación.</td>
</tr>
<tr>
<td>30002</td>
<td>Debe ingresar fecha.</td>
</tr>
<tr>
<td>30003</td>
<td>Debe ingresar importe.</td>
</tr>
<tr>
<td>30004</td>
<td>Debe ingresar plazo.</td>
</tr>
<tr>
<td>40001</td>
<td>No se recupero la operación para el identificador recibido.</td>
</tr>
<tr>
<td>50001</td>
<td>El registro no existe.</td>
</tr>
</tbody>
</table>
</div></template>


