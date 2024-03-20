<template><div><h1 id="seleccionar-opcion-desembolso" tabindex="-1"><a class="header-anchor" href="#seleccionar-opcion-desembolso"><span>Seleccionar Opcion Desembolso</span></a></h1>
<p>Método para seleccionar una opción de desembolso.</p>
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
<td>BTDescuentoDocumentos.SeleccionarOpcionDesembolso</td>
<td>RBTPG165</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Seleccionar Opción Desembolso:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTDescuentoDocumentos.SeleccionarOpcionDesembolso> 
		<Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>GUAY.BANTOTAL</Usuario> 
            <Token>1485239356EB8880B52090F2</Token> 
            <Device>ES</Device> 
         </Btinreq> 
         <bts:listaUId>75</bts:listaUId> 
         <bts:operacionUId>12</bts:operacionUId> 
         <bts:tipoDesembolso>3</bts:tipoDesembolso> 
      </bts:BTDescuentoDocumentos.SeleccionarOpcionDesembolso> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDescuentoDocumentos?SeleccionarOpcionDesembolso=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
	"listaUId":75, 
	"operacionUId":12, 
   "tipoDesembolso":3 
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
      <BTDescuentoDocumentos.SeleccionarOpcionDesembolsoResponse> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>GUAY.BANTOTAL</Usuario> 
            <Token>1485239356EB8880B52090F2</Token> 
            <Device>ES</Device> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTDescuentoDocumentos.SeleccionarOpcionDesembolso</Servicio> 
            <Fecha>2018-12-14</Fecha> 
            <Hora>15:30:27</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>1981</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTDescuentoDocumentos.SeleccionarOpcionDesembolsoResponse> 
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
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "727", 
        "Estado": "OK", 
        "Servicio": "BTDescuentoDocumentos.SeleccionarOpcionDesembolso", 
        "Fecha": "2017-11-24", 
        "Requerimiento": "", 
        "Hora": "15:59:42", 
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
<td>listaUId</td>
<td>Long</td>
<td>Identificador de lista.</td>
</tr>
<tr>
<td>operacionUId</td>
<td>Long</td>
<td>Identificador único de operación de desembolso.</td>
</tr>
<tr>
<td>tipoDesembolso</td>
<td>Short</td>
<td>Tipo de desembolso.</td>
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
<td>No se recibió el identificador de lista.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recibió el identificador único de operación.</td>
</tr>
<tr>
<td>30003</td>
<td>No se recibió tipo de desembolso.</td>
</tr>
</tbody>
</table>
<p>ECHO está desactivado.</p>
</div></template>


