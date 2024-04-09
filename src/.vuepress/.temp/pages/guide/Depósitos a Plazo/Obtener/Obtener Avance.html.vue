<template><div><h1 id="obtener-avance" tabindex="-1"><a class="header-anchor" href="#obtener-avance"><span>Obtener Avance</span></a></h1>
<p>Método para obtener el avance de un depósito a plazo.</p>
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
<td>BTDepositosAPlazo.ObtenerAvance</td>
<td>RBTPG402</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Avance:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTDepositoAPlazo.ObtenerAvance> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>21226674424A8B5C60A82434</bts:Token> 
            <bts:Device>GL</bts:Device> 
         </bts:Btinreq> 
         <bts:clienteUId>10003</bts:clienteUId> 
         <bts:depositoUId>10121</bts:depositoUId> 
      </bts:BTDepositoAPlazo.ObtenerAvance> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDepositoAPlazo_v1?ObtenerAvance \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
   "clienteUId": "10003", 
   "depositoUId": "10121" 
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
      <BTDepositoAPlazo.ObtenerAvanceResponse> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>MINSTALADOR</Usuario> 
            <Token>21226674424A8B5C60A82434</Token> 
            <Device>GL</Device> 
         </Btinreq> 
         <fechaAlta>2016-07-29</fechaAlta> 
         <fechaVencimiento>2016-08-29</fechaVencimiento> 
         <plazoTranscurrido>17</plazoTranscurrido> 
         <plazoTotal>31</plazoTotal> 
         <porcentajeAvance>54.84</porcentajeAvance> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTDepositoAPlazo.ObtenerAvance</Servicio> 
            <Fecha>2019-08-22</Fecha> 
            <Hora>15:23:05</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>6689</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTDepositoAPlazo.ObtenerAvanceResponse> 
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
   "fechaAlta": "2016-07-29", 
   "fechaVencimiento": "2016-08-29", 
   "plazoTranscurrido": "17", 
   "plazoTotal": "31", 
   "porcentajeAvance": "54.84", 
   "Erroresnegocio": { 
      "BTErrorNegocio": [] 
   }, 
   "Btoutreq": { 
      "Numero": "6689", 
      "Estado": "OK", 
      "Servicio": "BTDepositoAPlazo.ObtenerAvance", 
      "Requerimiento": "1", 
      "Fecha": "2019-08-22", 
      "Hora": "15:23:05", 
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
<td>clienteUId</td>
<td>Long</td>
<td>Identificador único de cliente.</td>
</tr>
<tr>
<td>depositoUId</td>
<td>Long</td>
<td>Identificador único de operación de depósito.</td>
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
<td>fechaAlta</td>
<td>Date</td>
<td>Fecha de alta del depósito.</td>
</tr>
<tr>
<td>fechaVencimiento</td>
<td>Date</td>
<td>Fecha de vencimiento del depósito.</td>
</tr>
<tr>
<td>plazoTranscurrido</td>
<td>Int</td>
<td>Plazo transcurrido del depósito.</td>
</tr>
<tr>
<td>plazoTotal</td>
<td>Int</td>
<td>Plazo total del depósito.</td>
</tr>
<tr>
<td>porcentajeAvance</td>
<td>Double</td>
<td>Porcentaje de avance del depósito (según el plazo).</td>
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
<td>No se recibió el identificador de la Cuenta.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recibió el identificador del depósito.</td>
</tr>
<tr>
<td>30003</td>
<td>No existe registro con el identificador indicado.</td>
</tr>
<tr>
<td>30004</td>
<td>No se recupero la operación para el identificador recibido.</td>
</tr>
<tr>
<td>30005</td>
<td>La operación de depósito no pertenece al cliente ingresado.</td>
</tr>
<tr>
<td>40001</td>
<td>La operación de depósito ingresada no existe.</td>
</tr>
</tbody>
</table>
</div></template>


