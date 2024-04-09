<template><div><h1 id="obtener-chequeras" tabindex="-1"><a class="header-anchor" href="#obtener-chequeras"><span>Obtener Chequeras</span></a></h1>
<p>Método para obtener una lista de las chequeras activas de una cuenta corriente.</p>
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
<td>BTCuentasCorrientes.ObtenerChequeras</td>
<td>RBTPG010</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Chequeras:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasCorrientes.ObtenerChequeras> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento/> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:operacionUId>81</bts:operacionUId> 
      </bts:BTCuentasCorrientes.ObtenerChequeras> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes?ObtenerChequeras=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6ac0ee72-d095-6a5a-e735-c5fe1a6935af' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "operacionUId": 81 
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
      <BTCuentasCorrientes.ObtenerChequerasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>407fce50864A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtChequeras> 
            <chequera></chequera> 
            <productoUId>81</productoUId> 
            <cantidad>0</cantidad> 
         </sdtChequeras> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>992</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCuentasCorrientes.ObtenerChequeras</Servicio> 
            <Fecha>2017-12-26</Fecha> 
            <Requerimiento/> 
            <Hora>11:16:17</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCuentasCorrientes.ObtenerChequerasResponse> 
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
    "sdtChequeras": { 
        "chequera": { 
            "sBTChequera": [] 
        }, 
        "productoUId": "81", 
        "cantidad": "0" 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "993", 
        "Estado": "OK", 
        "Servicio": "BTCuentasCorrientes.ObtenerChequeras", 
        "Fecha": "2017-12-26", 
        "Requerimiento": "", 
        "Hora": "11:19:27", 
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
<td>sdtChequeras</td>
<td>sBTChequerasCC</td>
<td>Listado de chequeras.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTChequerasCC son los siguientes:</p>
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
<td>productoUId</td>
<td>Long</td>
<td>Identificador único de producto.</td>
</tr>
<tr>
<td>cantidad</td>
<td>Int</td>
<td>Cantidad de chequeras.</td>
</tr>
<tr>
<td>chequera</td>
<td>sBTChequera</td>
<td>Datos de Chequera.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTChequerasCC son los siguientes:</p>
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
<td>chequeInicial</td>
<td>Int</td>
<td>Número de cheque en el cual inicia la chequera.</td>
</tr>
<tr>
<td>cantidadCheques</td>
<td>Short</td>
<td>Cantidad de cheques.</td>
</tr>
<tr>
<td>fechaAlta</td>
<td>Date</td>
<td>Fecha de alta.</td>
</tr>
<tr>
<td>chequesDisponibles</td>
<td>Short</td>
<td>Cantidad de cheques disponibles.</td>
</tr>
<tr>
<td>tipo</td>
<td>String</td>
<td>tipo de chequera.</td>
</tr>
<tr>
<td>estado</td>
<td>String</td>
<td>estado de chequera.</td>
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
<td>No se recibió el identificador de Operación.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recuperó la operación para el identificador.</td>
</tr>
</tbody>
</table>
</div></template>


