<template><div><h1 id="obtener-precio-a-fecha" tabindex="-1"><a class="header-anchor" href="#obtener-precio-a-fecha"><span>Obtener Precio a Fecha</span></a></h1>
<p>Método para devolver la cotización en moneda nacional de una especie en la fecha recibida.</p>
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
<td>BTPrecios.ObtenerPrecioAFecha</td>
<td>RBTPG049</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Precio a Fecha:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrecios.ObtenerPrecioAFecha> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>BANTOTAL</bts:Usuario> 
            <bts:Token>324915377F955E77534D3E02</bts:Token> 
            <bts:Device>AC</bts:Device> 
         </bts:Btinreq> 
         <bts:especie>500</bts:especie> 
         <bts:fecha>2017-11-11</bts:fecha> 
      </bts:BTPrecios.ObtenerPrecioAFecha> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrecios_v1?ObtenerPrecioAFecha=' \ 
  -H 'cache-control: no-cache,no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: d20f4b05-03a0-49c1-ba1f-d026339b8367,3f56f9d3-094e-474b-8730-6840899770d7' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
   "especie": "500", 
   "fecha": "2017-11-11" 
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
      <BTPrecios.ObtenerPrecioAFechaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>BANTOTAL</Usuario> 
            <Token>324915377F955E77534D3E02</Token> 
            <Device>AC</Device> 
         </Btinreq> 
         <precio>17282.89</precio> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTPrecios.ObtenerPrecioAFecha</Servicio> 
            <Fecha>2019-11-19</Fecha> 
            <Hora>15:34:16</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>6957</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTPrecios.ObtenerPrecioAFechaResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
   "precio": 17282.89, 
   "Erroresnegocio": { 
      "BTErrorNegocio": [] 
   }, 
   "Btoutreq": { 
      "Numero": 56, 
      "Servicio": "BTPrecios.ObtenerPrecioAFecha", 
      "Estado": "OK", 
      "Fecha": "2019-10-25", 
      "Requerimiento": "1", 
      "Hora": "13:51:52", 
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
<td>especie</td>
<td>Long</td>
<td>Identificador de la especie.</td>
</tr>
<tr>
<td>fecha</td>
<td>Date</td>
<td>Fecha a consultar.</td>
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
<td>precio</td>
<td>Double</td>
<td>Cotización.</td>
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
<td>No se recibió una especie.</td>
</tr>
<tr>
<td>40001</td>
<td>La especie no es un índice.</td>
</tr>
<tr>
<td>40002</td>
<td>La especie no existe.</td>
</tr>
</tbody>
</table>
</div></template>


