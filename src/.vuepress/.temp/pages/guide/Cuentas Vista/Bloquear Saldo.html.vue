<template><div><h1 id="bloquear-saldo" tabindex="-1"><a class="header-anchor" href="#bloquear-saldo"><span>Bloquear Saldo</span></a></h1>
<p>Método para realizar un bloqueo de saldo.</p>
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
<td>BTCuentasVista.BloquearSaldo</td>
<td>RBTPG090</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Bloquear Saldo:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasVista.BloquearSaldo> 
         <bts:Btinreq> 
            <bts:Device>3</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>3</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>b1848faff14A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:operacionUId>3</bts:operacionUId> 
         <bts:clienteUId>61</bts:clienteUId> 
         <bts:importe>5</bts:importe> 
         <bts:fechaVencimiento>2018-05-14</bts:fechaVencimiento> 
         <bts:motivo>Motivo Bloqueo 01</bts:motivo> 
      </bts:BTCuentasVista.BloquearSaldo> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?BloquearSaldo=' \ 
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
   "operacionUId": 3, 
	"clienteUId": 61, 
	"importe": 10, 
	"fechaVencimiento": "2018-05-14", 
	"Motivo": "Motivo Bloqueo 02"	 
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
      <BTCuentasVista.BloquearSaldoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>3</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>3</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>b1848faff14A8B5C60A82434</Token> 
         </Btinreq> 
         <idBloqueo>18</idBloqueo> 
         <movimientoUId>4</movimientoUId> 
         <saldo>4924.0</saldo> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>194</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCuentasVista.BloquearSaldo</Servicio> 
            <Fecha>2018-05-08</Fecha> 
            <Requerimiento>3</Requerimiento> 
            <Hora>14:59:44</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCuentasVista.BloquearSaldoResponse> 
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
    "idBloqueo": "19", 
    "movimientoUId": "5", 
    "saldo": "4913.0", 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "200", 
        "Estado": "OK", 
        "Servicio": "BTCuentasVista.BloquearSaldo", 
        "Fecha": "2018-05-08", 
        "Requerimiento": "2", 
        "Hora": "15:16:17", 
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
<td>Importe a bloquear.</td>
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
<td>idBloqueo</td>
<td>Long</td>
<td>Identificador de bloqueo.</td>
</tr>
<tr>
<td>movimientoUId</td>
<td>Long</td>
<td>Identificador único de movimiento.</td>
</tr>
<tr>
<td>saldo</td>
<td>Double</td>
<td>Saldo disponioble de la operación.</td>
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
<td>No se recibió el identificador de la Operación a bloquear.</td>
</tr>
<tr>
<td>30002</td>
<td>No se encontró el Id de Operación para la Cuenta Vista a bloquear.</td>
</tr>
<tr>
<td>30003</td>
<td>No se recibió el identificador del Cliente.</td>
</tr>
<tr>
<td>30004</td>
<td>No se encontró el Id del Cliente.</td>
</tr>
<tr>
<td>30005</td>
<td>La Cuenta Vista a bloquear no pertence al Cliente.</td>
</tr>
<tr>
<td>30100</td>
<td>Error en la contabilización.</td>
</tr>
</tbody>
</table>
</div></template>


