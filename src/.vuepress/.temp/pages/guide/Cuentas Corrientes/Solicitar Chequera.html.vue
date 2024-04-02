<template><div><h1 id="solicitar-chequera" tabindex="-1"><a class="header-anchor" href="#solicitar-chequera"><span>Solicitar Chequera</span></a></h1>
<p>Método para solicitar chequeras para una cuenta.</p>
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
<td>BTCuentasCorrientes.SolicitarChequera</td>
<td>RBTPG242</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Solicitar Chequera:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasCorrientes.SolicitarChequera> 
         <bts:Btinreq> 
            <bts:Device>10</bts:Device> 
            <bts:Token>c5b241f7334A8</bts:Token> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:operacionUId>2</bts:operacionUId> 
         <bts:tipoCheque>1</bts:tipoCheque> 
         <bts:cantidadLibretas>1</bts:cantidadLibretas> 
         <bts:datosSolicitud> 
            <bts:persona1Texto1>D.N.I. 123456</bts:persona1Texto1> 
            <bts:persona1Texto2>Juan Perez</bts:persona1Texto2> 
            <bts:persona2Texto1></bts:persona2Texto1> 
            <bts:persona2Texto2></bts:persona2Texto2>  
            <bts:persona3Texto1></bts:persona3Texto1>  
            <bts:persona3Texto2></bts:persona3Texto2>  
            <bts:domicilio>Avenida Italia 2145</bts:domicilio> 
            <bts:sucuraslDeRetiroId></bts:sucuraslDeRetiroId> 
         </bts:datosSolicitud> 
      </bts:BTCuentasCorrientes.SolicitarChequera> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes_v1?SolicitarChequera' \ 
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
	"operacionUId":"2", 
   "tipoCheque":"1", 
   "cantidadLibretas":"1", 
   "bts:datosSolicitud": { 
          "bts:persona1Texto1": "D.N.I. 123456", 
          "bts:persona1Texto2": "Juan Perez", 
          "bts:persona2Texto1": " ", 
          "bts:persona2Texto2": " ", 
          "bts:persona3Texto1": " ", 
          "bts:persona3Texto2": " ", 
          "bts:domicilio": "Avenida Italia 2145", 
          "bts:sucuraslDeRetiroId": " " 
        } 
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
      <BTCuentasCorrientes.SolicitarChequeraResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10.12.10.118</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>c5b241f7334A8</Token> 
         </Btinreq> 
         <chequeraId>32</chequeraId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>8396</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCuentasCorrientes.SolicitarChequera</Servicio> 
            <Fecha>2019-05-07</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>12:59:00</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCuentasCorrientes.SolicitarChequeraResponse> 
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
	"chequeraId": 32, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 8396, 
        "Estado": "OK", 
        "Servicio": "BTCuentasCorrientes.SolicitarChequera", 
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
<td>operacionUId</td>
<td>Long</td>
<td>Identificador único de operación de subcuenta .</td>
</tr>
<tr>
<td>tipoCheque</td>
<td>Double</td>
<td>Tipo de chequera a solicitar.</td>
</tr>
<tr>
<td>cantidadLibretas</td>
<td>Double</td>
<td>Cantidad de libretas a solicitar.</td>
</tr>
<tr>
<td>datosSolicitud</td>
<td>sBTSolicitudChequera</td>
<td>Datos de solicitud de chequera.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTSolicitudChequera son los siguientes:</p>
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
<td>persona1Texto1</td>
<td>String</td>
<td>Información persona 1.</td>
</tr>
<tr>
<td>persona1Texto2</td>
<td>String</td>
<td>Información complementaria persona 1.</td>
</tr>
<tr>
<td>persona2Texto1</td>
<td>String</td>
<td>Información persona 2.</td>
</tr>
<tr>
<td>persona2Texto2</td>
<td>String</td>
<td>Información complementaria persona 2.</td>
</tr>
<tr>
<td>persona3Texto1</td>
<td>String</td>
<td>Información persona 3.</td>
</tr>
<tr>
<td>persona3Texto2</td>
<td>String</td>
<td>Información complementaria persona 3.</td>
</tr>
<tr>
<td>domicilio</td>
<td>String</td>
<td>Domicilio a enviar la chequera.</td>
</tr>
<tr>
<td>sucuraslDeRetiroId</td>
<td>Int</td>
<td>Identificador de la sucursal de retiro.</td>
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
<td>chequeraId</td>
<td>Long</td>
<td>Identificador de la solicitud de chequera.</td>
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
<td>No se recibió identificador de operación.</td>
</tr>
<tr>
<td>40003</td>
<td>El tipo de chequera a agregar es incorrecto.</td>
</tr>
<tr>
<td>40004</td>
<td>El tipo de chequera a agregar es incorrecto para el módulo.</td>
</tr>
<tr>
<td>40005</td>
<td>La subcuenta no tiene estado normal.</td>
</tr>
<tr>
<td>40007</td>
<td>El tipo de chequera a agregar es incorrecto para el producto.</td>
</tr>
<tr>
<td>40008</td>
<td>Usuario no autorizado.</td>
</tr>
<tr>
<td>40010</td>
<td>La cuenta no tiene habilitada la entrega de chequeras.</td>
</tr>
<tr>
<td>40011</td>
<td>Debe indicar la cantidad de libretas.</td>
</tr>
</tbody>
</table>
<p>ECHO está desactivado.</p>
</div></template>


