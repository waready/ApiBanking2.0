<template><div><h1 id="obtener-chequera" tabindex="-1"><a class="header-anchor" href="#obtener-chequera"><span>Obtener Chequera</span></a></h1>
<p>Método para obtener los datos de una chequera de una cuenta.</p>
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
<td>BTCuentasCorrientes.ObtenerChequera</td>
<td>RBTPG240</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Chequera:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasCorrientes.ObtenerChequera> 
         <bts:Btinreq> 
            <bts:Device>10</bts:Device> 
            <bts:Token>93f61d299b4A8B</bts:Token> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:chequeraId>37</bts:chequeraId> 
      </bts:BTCuentasCorrientes.ObtenerChequera> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes_v1?ObtenerChequera' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
	"chequeraId":"37" 
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
      <BTCuentasCorrientes.ObtenerChequeraResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>93f61d299b4A8B</Token> 
         </Btinreq> 
         <sdtDatosChequera> 
            <totalCheques>25</totalCheques> 
            <estado>SOLICITADA</estado> 
            <chequeInicial>2226</chequeInicial> 
            <titular>SOSA PEREZ ANA</titular> 
            <cantidadLibretas>1</cantidadLibretas> 
            <empresa>1</empresa> 
            <operacionUId>2</operacionUId> 
            <tipoId>1</tipoId> 
            <tipo>Chequera Común 25 / Pesos</tipo> 
            <estadoId>1</estadoId> 
            <solicitud>37</solicitud> 
         </sdtDatosChequera> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>8418</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCuentasCorrientes.ObtenerChequera</Servicio> 
            <Fecha>2019-05-07</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>13:20:16</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCuentasCorrientes.ObtenerChequeraResponse> 
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
	"sdtDatosChequera": { 
		"totalCheques": 25, 
		"estado": "SOLICITADA", 
		"chequeInicial": 2226, 
		"titular": "SOSA PEREZ ANA", 
		"cantidadLibretas": 1, 
		"empresa": 1, 
		"operacionUId": 2, 
		"tipoId": 1, 
		"tipo": "Chequera Común 25 / Pesos", 
		"estadoId": 1, 
		"solicitud": 37  
	}, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 8418, 
        "Estado": "OK", 
        "Servicio": "BTCuentasCorrientes.ObtenerChequera", 
        "Requerimiento": "1", 
        "Fecha": "2019-05-07", 
        "Hora": "15:54:44", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group>  
### Datos de entrada 
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
<td>chequeraId</td>
<td>Long</td>
<td>Identificador de la solicitud de chequera.</td>
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
<td>sdtDatosChequera</td>
<td>sBTDatosChequera</td>
<td>Datos de la chequera.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTDatosChequera son los siguientes:</p>
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
<td>totalCheques</td>
<td>Short</td>
<td>Cantidad de cheques de la chequera.</td>
</tr>
<tr>
<td>estado</td>
<td>String</td>
<td>Estado actual de la solicitud de la chequera.</td>
</tr>
<tr>
<td>chequeInicial</td>
<td>Int</td>
<td>Cheque inicial.</td>
</tr>
<tr>
<td>titular</td>
<td>String</td>
<td>Titular de la cuenta.</td>
</tr>
<tr>
<td>cantidadLibretas</td>
<td>Short</td>
<td>Cantidad de libretas.</td>
</tr>
<tr>
<td>operacionUId</td>
<td>Long</td>
<td>Identificador único de operación de subcuenta.</td>
</tr>
<tr>
<td>empresa</td>
<td>Short</td>
<td>Empresa de emisión de la chequera.</td>
</tr>
<tr>
<td>tipoId</td>
<td>Short</td>
<td>Identificador de tipo de chequera.</td>
</tr>
<tr>
<td>tipo</td>
<td>String</td>
<td>Tipo de chequera.</td>
</tr>
<tr>
<td>solicitud</td>
<td>Long</td>
<td>Identificador de la solicitud de chequera.</td>
</tr>
<tr>
<td>estadoId</td>
<td>Short</td>
<td>Identificador del estado de la solicitud de la chequera.</td>
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
<td>No se recibió identificador de chequera.</td>
</tr>
<tr>
<td>30002</td>
<td>No existe chequera con el identificador ingresado.</td>
</tr>
</tbody>
</table>
</div></template>


