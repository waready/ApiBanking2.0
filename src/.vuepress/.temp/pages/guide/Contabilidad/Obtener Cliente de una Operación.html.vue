<template><div><h1 id="obtener-cliente-de-una-operacion" tabindex="-1"><a class="header-anchor" href="#obtener-cliente-de-una-operacion"><span>Obtener Cliente de una Operación</span></a></h1>
<p>Método para obtener el cliente asociado a una operación.</p>
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
<td>BTContabilidad.ObtenerClienteDeOperacion</td>
<td>RBTPG298</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Cliente de una Operación:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTContabilidad.ObtenerClienteDeOperacion> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>BANTOTAL</bts:Usuario> 
            <bts:Token>0d3a8212b3F955E77534D3E0</bts:Token> 
            <bts:Device>AC</bts:Device> 
         </bts:Btinreq> 
         <bts:operacionUId>787</bts:operacionUId> 
      </bts:BTContabilidad.ObtenerClienteDeOperacion> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTContabilidad_v1?ObtenerClienteDeOperacion' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
	"bts:Btinreq": { 
	  "bts:Canal": "BTDIGITAL", 
	  "bts:Requerimiento": "1", 
	  "bts:Usuario": "BANTOTAL", 
	  "bts:Token": "0d3a8212b3F955E77534D3E0", 
	  "bts:Device": "AC" 
	}, 
	"bts:operacionUId": "787" 
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
      <BTContabilidad.ObtenerClienteDeOperacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AC</Device> 
            <Usuario>BANTOTAL</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>0d3a8212b3F955E77534D3E0</Token> 
         </Btinreq> 
         <clienteUId>822</clienteUId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>110086</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTContabilidad.ObtenerClienteDeOperacion</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2021-02-18</Fecha> 
            <Canal>BTDIGITAL</Canal> 
            <Hora>14:37:54</Hora> 
         </Btoutreq> 
      </BTContabilidad.ObtenerClienteDeOperacionResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
 { 
 	"Btinreq": { 
	  "Device": "AC", 
	  "Usuario": "BANTOTAL", 
	  "Requerimiento": "1", 
	  "Canal": "BTDIGITAL", 
	  "Token": "0d3a8212b3F955E77534D3E0" 
	}, 
	"clienteUId": "822", 
	"Btoutreq": { 
	  "Numero": "110086", 
	  "Estado": "OK", 
	  "Servicio": "BTContabilidad.ObtenerClienteDeOperacion", 
	  "Requerimiento": "1", 
	  "Fecha": "2021-02-18", 
	  "Canal": "BTDIGITAL", 
	  "Hora": "14:37:54" 
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
<td>Identificador único de la operación</td>
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
<td>clienteUId</td>
<td>Long</td>
<td>Identificador único de cliente.</td>
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
<td>No se recibió identificador único de operación.</td>
</tr>
<tr>
<td>30101</td>
<td>No se recupero la operación para el identificador recibido.</td>
</tr>
</tbody>
</table>
</div></template>


