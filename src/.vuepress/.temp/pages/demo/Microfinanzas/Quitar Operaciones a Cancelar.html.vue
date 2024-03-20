<template><div><h1 id="quitar-operaciones-a-cancelar" tabindex="-1"><a class="header-anchor" href="#quitar-operaciones-a-cancelar"><span>Quitar Operaciones a Cancelar</span></a></h1>
<p>Método para quitar operaciones a cancelar para una solicitud de créditos.</p>
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
<td>BTMicrofinanzas.QuitarOperacionesACancelar</td>
<td>RBTPG363</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio de Quitar Operaciones a Cancelar:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTMicrofinanzas.QuitarOparacionesACancelar> 
         <bts:Btinreq> 
            <bts:Device>GP</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>16c1cc9b534A8B5C60A82434</bts:Token> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:solicitudUId>11887</bts:solicitudUId> 
         <bts:clienteUId>862</bts:clienteUId> 
         <bts:sdtOperaciones> 
            <bts:sBTOperacionId> 
               <bts:operacionUId>1725</bts:operacionUId> 
            </bts:sBTOperacionId> 
         </bts:sdtOperaciones> 
      </bts:BTMicrofinanzas.QuitarOparacionesACancelar> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas?QuitarOperacionesACancelar' \ 
	-H 'cache-control: no-cache' \ 
	-H 'content-type: application/json' \ 
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
	-d '{ 
	"Btinreq": { 
	  "Device": "GP", 
	  "Usuario": "MINSTALADOR", 
	  "Token": "16c1cc9b534A8B5C60A82434", 
	  "Canal": "BTDIGITAL", 
	  "Requerimiento": "1" 
	}, 
	"solicitudUId": "11887", 
	"clienteUId": "862", 
	"sdtOperaciones": { 
	  "sBTOperacionId": { 
		"operacionUId": "1725" 
      }, 
   }, 
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
      <BTMicrofinanzas.QuitarOparacionesACancelarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GP</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>16c1cc9b534A8B5C60A82434</Token> 
         </Btinreq> 
         <montoCancelacion>511820.42</montoCancelacion> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>111401</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTMicrofinanzas.QuitarOparacionesACancelar</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2021-10-15</Fecha> 
            <Canal>BTDIGITAL</Canal> 
            <Hora>14:56:43</Hora> 
         </Btoutreq> 
      </BTMicrofinanzas.QuitarOparacionesACancelarResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
{ 
   "Btinreq": { 
      "Device": "GP", 
      "Usuario": "MINSTALADOR", 
      "Token": "16c1cc9b534A8B5C60A82434", 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "1" 
   }, 
   "montoCancelacion": "511820.42", 
   "Erroresnegocio": { 
   }, 
   "Btoutreq": { 
      "Canal": "BTDIGITAL", 
      "Servicio": "BTMicrofinanzas.QuitarOparacionesACancelar", 
      "Fecha": "2021-10-28", 
      "Hora": "15:39:53", 
      "Requerimiento": "1", 
      "Numero": "11003", 
      "Estado": "OK" 
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
<td>solicitudUId</td>
<td>Long</td>
<td>Identificador de instancia Workflow.</td>
</tr>
<tr>
<td>clienteUId</td>
<td>Long</td>
<td>Identificador único del cliente.</td>
</tr>
<tr>
<td>sdtOperaciones</td>
<td>sBTOperacionId</td>
<td>Listado de operaciones.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTOperacionId son los siguientes:</p>
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
<td>operacionUId</td>
<td>Long</td>
<td>Identificador único de operación.</td>
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
<td>montoCancelacion</td>
<td>Double</td>
<td>Monto de cancelación de la operación.</td>
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
<td>No se recibió el identificador de solicitud.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recibió el identificador de cliente.</td>
</tr>
<tr>
<td>30003</td>
<td>No se recibió ninguna operación para cancelar.</td>
</tr>
<tr>
<td>30004</td>
<td>No se recuperó la cuenta para el identificador de cliente: [Número de identificador].</td>
</tr>
<tr>
<td>30005</td>
<td>No se recuperó la operación para el identificador: [Número de identificador].</td>
</tr>
<tr>
<td>40001</td>
<td>La solicitud ingresada no existe.</td>
</tr>
<tr>
<td>40002</td>
<td>El cliente ingresado no corresponde con la solicitud.</td>
</tr>
<tr>
<td>40004</td>
<td>No existe registro para la operación ingresada.</td>
</tr>
</tbody>
</table>
</div></template>


