<template><div><h1 id="obtener-detalle-bloqueo" tabindex="-1"><a class="header-anchor" href="#obtener-detalle-bloqueo"><span>Obtener Detalle Bloqueo</span></a></h1>
<p>Método para obtener el detalle de un bloqueo.</p>
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
<td>BTCuentasVista.ObtenerDetalleBloqueo</td>
<td>RBTPG140</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Detalle Bloqueo:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasVista.ObtenerDetalleBloqueo> 
         <bts:Btinreq> 
            <bts:Device>3</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>3</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>b1848faff14A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:idBloqueo>23</bts:idBloqueo> 
      </bts:BTCuentasVista.ObtenerDetalleBloqueo> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?ObtenerDetalleBloqueo=' \ 
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
    "idBloqueo": 23 
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
      <BTCuentasVista.ObtenerDetalleBloqueoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>3</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>3</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>b1848faff14A8B5C60A82434</Token> 
         </Btinreq> 
         <operacionUId>3</operacionUId> 
         <clienteUId>61</clienteUId> 
         <importe>10.0</importe> 
         <fechaVencimiento>2018-05-14</fechaVencimiento> 
         <motivo>Motivo Bloqueo 01</motivo> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>222</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCuentasVista.ObtenerDetalleBloqueo</Servicio> 
            <Requerimiento>3</Requerimiento> 
            <Fecha>2018-05-08</Fecha> 
            <Hora>16:05:30</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCuentasVista.ObtenerDetalleBloqueoResponse> 
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
    "operacionUId": "3", 
    "clienteUId": "61", 
    "importe": "10.0", 
    "fechaVencimiento": "2018-05-14", 
    "motivo": "Motivo Bloqueo 01", 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "225", 
        "Estado": "OK", 
        "Servicio": "BTCuentasVista.ObtenerDetalleBloqueo", 
        "Requerimiento": "2", 
        "Fecha": "2018-05-08", 
        "Hora": "16:10:37", 
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
<td>idBloqueo</td>
<td>Long</td>
<td>Identificador de bloqueo.</td>
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
<td>operacionUId</td>
<td>Long</td>
<td>Identificador único de operación.</td>
</tr>
<tr>
<td>clienteUId</td>
<td>Long</td>
<td>Identificador único de cliente.</td>
</tr>
<tr>
<td>importe</td>
<td>Long</td>
<td>Importe bloqueado.</td>
</tr>
<tr>
<td>fechaVencimiento</td>
<td>Date</td>
<td>Fecha vencimiento de bloqueo.</td>
</tr>
<tr>
<td>motivo</td>
<td>String</td>
<td>Motivo del bloqueo.</td>
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
<td>No se recibió el identificador del bloqueo.</td>
</tr>
<tr>
<td>40001</td>
<td>No se pudo encontrar el registro correspondiente al Id de Bloqueo.</td>
</tr>
</tbody>
</table>
</div></template>


