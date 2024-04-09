<template><div><h1 id="registrar-orden-de-no-pago-de-chequera" tabindex="-1"><a class="header-anchor" href="#registrar-orden-de-no-pago-de-chequera"><span>Registrar Orden de No Pago de Chequera</span></a></h1>
<p>Método para registrar orden de no pago de una chequera.</p>
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
<td>BTCuentasCorrientes.RegistrarOrdenDeNoPagoChequera</td>
<td>RBTPG244</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Registrar Orden de No Pago de Chequera:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasCorrientes.RegistrarOrdenDeNoPagoChequera> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>BANTOTAL</bts:Usuario> 
            <bts:Token>1820366692F955E77534D3E0</bts:Token> 
            <bts:Device>AC</bts:Device> 
         </bts:Btinreq> 
         <bts:operacionUId>10176</bts:operacionUId> 
         <bts:chequeraId>21</bts:chequeraId> 
         <bts:tipoDenunciante>A</bts:tipoDenunciante> 
         <bts:tipoDenuncia>E</bts:tipoDenuncia> 
         <bts:motivoDenuncia>P</bts:motivoDenuncia> 
         <bts:chequeDesde>1326</bts:chequeDesde> 
         <bts:chequeHasta>1350</bts:chequeHasta> 
      </bts:BTCuentasCorrientes.RegistrarOrdenDeNoPagoChequera> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes_v1?RegistrarOrdenDeNoPagoChequera' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
  -d '{ 
	"Btinreq": { 
	  "Canal": "BTDIGITAL", 
	  "Requerimiento": "1", 
	  "Usuario": "BANTOTAL", 
	  "Token": "1820366692F955E77534D3E0", 
	  "Device": "AC" 
	}, 
	"operacionUId": "10176", 
	"chequeraId": "21", 
	"tipoDenunciante": "A", 
	"tipoDenuncia": "E", 
	"motivoDenuncia": "P", 
	"chequeDesde": "1326", 
	"chequeHasta": "1350" 
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
      <BTCuentasCorrientes.RegistrarOrdenDeNoPagoChequeraResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>BANTOTAL</Usuario> 
            <Token>1820366692F955E77534D3E0</Token> 
            <Device>AC</Device> 
         </Btinreq> 
         <numeroDenuncia>1</numeroDenuncia> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTCuentasCorrientes.RegistrarOrdenDeNoPagoChequera</Servicio> 
            <Fecha>2020-11-13</Fecha> 
            <Hora>11:20:03</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>7888</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTCuentasCorrientes.RegistrarOrdenDeNoPagoChequeraResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
	  "Canal": "BTDIGITAL", 
	  "Requerimiento": "1", 
	  "Usuario": "BANTOTAL", 
	  "Token": "1820366692F955E77534D3E0", 
	  "Device": "AC" 
	}, 
	"numeroDenuncia": "1", 
	"Btoutreq": { 
	  "Canal": "BTDIGITAL", 
	  "Servicio": "BTCuentasCorrientes.RegistrarOrdenDeNoPagoChequera", 
	  "Fecha": "2020-11-13", 
	  "Hora": "11:20:03", 
	  "Requerimiento": "1", 
	  "Numero": "7888", 
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
<td>operacionUId</td>
<td>Long</td>
<td>Identificador único de operación de subcuenta.</td>
</tr>
<tr>
<td>chequeraId</td>
<td>Long</td>
<td>Identificador de solicitud de chequera.</td>
</tr>
<tr>
<td>tipoDenunciante</td>
<td>String</td>
<td>Tipo de denunciante.</td>
</tr>
<tr>
<td>tipoDenuncia</td>
<td>String</td>
<td>Tipo de denuncia.</td>
</tr>
<tr>
<td>motivoDenuncia</td>
<td>String</td>
<td>Motivo de la denuncia.</td>
</tr>
<tr>
<td>chequeDesde</td>
<td>Long</td>
<td>Número de cheque inicial de la chequera.</td>
</tr>
<tr>
<td>chequeHasta</td>
<td>Long</td>
<td>Número de cheque final de la chequera.</td>
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
<td>numeroDenuncia</td>
<td>Long</td>
<td>Identificador de la denuncia.</td>
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
<td>30002</td>
<td>No se recibió identificador de chequera.</td>
</tr>
<tr>
<td>30011</td>
<td>No se recupero la operación para el identificador recibido.</td>
</tr>
<tr>
<td>40002</td>
<td>No existe la operación indicada.</td>
</tr>
<tr>
<td>40003</td>
<td>La chequera no pertenece a la operación.</td>
</tr>
<tr>
<td>40004</td>
<td>La cuenta no esta habilitada.</td>
</tr>
<tr>
<td>40005</td>
<td>La chequera no se encuentra activa.</td>
</tr>
<tr>
<td>40006</td>
<td>Cuenta Cerrada, solo se permite consultas.</td>
</tr>
<tr>
<td>40008</td>
<td>El cheque DESDE debe ser menor/igual que el HASTA.</td>
</tr>
<tr>
<td>40009</td>
<td>El cheque DESDE debe ser mayor/igual que el INICIAL de la chequera.</td>
</tr>
<tr>
<td>40010</td>
<td>El cheque HASTA debe ser mayor/igual que el INICIAL de la chequera.</td>
</tr>
<tr>
<td>40011</td>
<td>El cheque DESDE debe ser menor/igual que el ULTIMO de la chequera.</td>
</tr>
<tr>
<td>40012</td>
<td>El cheque HASTA debe ser menor/igual que el ULTIMO de la chequera.</td>
</tr>
<tr>
<td>40013</td>
<td>El cheque [Número de cheque] ya está pago.</td>
</tr>
<tr>
<td>40014</td>
<td>El cheque [Número de cheque] ya tiene O.N.P.</td>
</tr>
<tr>
<td>40015</td>
<td>El cheque [Número de cheque] está rechazado.</td>
</tr>
<tr>
<td>40016</td>
<td>El cheque [Número de cheque] esta certificado.</td>
</tr>
</tbody>
</table>
</div></template>


