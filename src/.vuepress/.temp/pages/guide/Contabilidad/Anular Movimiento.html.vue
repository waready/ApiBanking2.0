<template><div><h1 id="anular-movimiento" tabindex="-1"><a class="header-anchor" href="#anular-movimiento"><span>Anular Movimiento</span></a></h1>
<p>Método para anular un movimiento.</p>
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
<td>BTContabilidad.AnularMovimiento</td>
<td>RBTPG237</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Anular Movimiento:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTContabilidad.AnularMovimiento> 
         <bts:Btinreq> 
            <bts:Device>2</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>2</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>6461dd29c54A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:movimientoUId>250</bts:movimientoUId> 
         <bts:fecha>2018-08-10</bts:fecha> 
      </bts:BTContabilidad.AnularMovimiento> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTContabilidad?AnularMovimiento' \ 
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
    "movimientoUId": 245, 
    "fecha": 2018-08-10 
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
      <BTContabilidad.AnularMovimientoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>2</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>2</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>6461dd29c54A8B5C60A82434</Token> 
         </Btinreq> 
         <movimientoUIdAnulacion>28</movimientoUIdAnulacion> 
         <Erroresnegocio></Erroresnegocio>  
         <Btoutreq> 
            <Numero>4444</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTContabilidad.AnularMovimiento</Servicio> 
            <Fecha>2018-12-14</Fecha> 
            <Requerimiento>2</Requerimiento> 
            <Hora>17:17:56</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTContabilidad.AnularMovimientoResponse> 
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
   "movimientoUIdAnulacion":28, 
   "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "4445", 
        "Estado": "OK", 
        "Servicio": "BTContabilidad.AnularMovimiento", 
        "Fecha": "2018-12-14", 
        "Requerimiento": "", 
        "Hora": "17:22:04", 
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
<td>movimientoUId</td>
<td>Long</td>
<td>Identificador único de movimiento.</td>
</tr>
<tr>
<td>fecha</td>
<td>Date</td>
<td>Fecha de anulacion.</td>
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
<td>movimientoUIdAnulacion</td>
<td>Long</td>
<td>Identificador único de la anulación de movimiento.</td>
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
<td>No se recibió el identificador de movimiento.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recibió fecha de anulación.</td>
</tr>
<tr>
<td>40003</td>
<td>No se permite ingresar operaciones anteriores al último cierre.</td>
</tr>
<tr>
<td>40004</td>
<td>Usuario no autorizado a cambiar la Fecha Valor Contable.</td>
</tr>
<tr>
<td>40071</td>
<td>La fecha valor contable no puede ser un feriado.</td>
</tr>
</tbody>
</table>
</div></template>


