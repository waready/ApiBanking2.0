<template><div><h1 id="depositar-cheque-electronico-de-otro-banco" tabindex="-1"><a class="header-anchor" href="#depositar-cheque-electronico-de-otro-banco"><span>Depositar Cheque Electrónico de Otro Banco</span></a></h1>
<p>Método para depositar un cheque electrónico de otro banco.</p>
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
<td>BTCuentasCorrientes.DepositarChequeElectronicoDeOtroBanco</td>
<td>RBTPAR33</td>
<td>Argentina</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Depositar Cheque Electrónico De Otro Banco:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasCorrientes.DepositarChequeElectronicoDeOtroBanco> 
         <bts:Btinreq> 
           <bts:Device>10</bts:Device> 
            <bts:Usuario>BA</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>ec8CE93AA1</bts:Token> 
         </bts:Btinreq> 
         <bts:operacionUId>15</bts:operacionUId> 
         <bts:importe>3000</bts:importe> 
         <bts:bancoLibradorId>1</bts:bancoLibradorId> 
         <bts:sucursalLibradoraId>2</bts:sucursalLibradoraId> 
         <bts:numeroCheque>3434</bts:numeroCheque> 
         <bts:cuentaDeCheque>32</bts:cuentaDeCheque> 
      </bts:BTCuentasCorrientes.DepositarChequeElectronicoDeOtroBanco> 
   </soapenv:Body> 
</soapenv:Envelope></soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.?DepositarChequeElectronicoDeOtroBanco' \ 
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
	"operacionUId": "15", 
	"importe": "3000", 
	"bancoLibradorId": "1", 
	"sucursalLibradoraId": "2", 
	"numeroCheque": "3434", 
	"cuentaDeCheque": "32", 
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
      <BTCuentasCorrientes.DepositarChequeElectronicoDeOtroBancoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10</Device> 
            <Usuario>BA</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>ec8CE93AA1</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>2565</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCuentasCorrientes.DepositarChequeElectronicoDeOtroBanco</Servicio> 
            <Fecha>2019-05-28</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>11:40:41</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCuentasCorrientes.DepositarChequeElectronicoDeOtroBancoResponse> 
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
        "Numero": 8396, 
        "Estado": "OK", 
        "Servicio": "BTCuentasCorrientes.DepositarChequeElectronicoDeOtroBanco", 
        "Requerimiento": "1", 
        "Fecha": "2019-05-07", 
        "Hora": "15:54:44", 
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
<td>Identificador único de operación de subcuenta.</td>
</tr>
<tr>
<td>importe</td>
<td>Double</td>
<td>Importe.</td>
</tr>
<tr>
<td>numeroCheque</td>
<td>Int</td>
<td>Número de cheque a emitir.</td>
</tr>
<tr>
<td>bancoLibradorId</td>
<td>Short</td>
<td>Identificador de banco librador.</td>
</tr>
<tr>
<td>sucursalLibradoraId</td>
<td>Short</td>
<td>Identificador de sucursal del banco librador.</td>
</tr>
<tr>
<td>cuentaDeCheque</td>
<td>String</td>
<td>Cuenata del cheque a depositar.</td>
</tr>
</tbody>
</table>
<h3 id="datos-de-salida" tabindex="-1"><a class="header-anchor" href="#datos-de-salida"><span>Datos de salida</span></a></h3>
<p>No aplica</p>
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
<td>No se recibió el identificador de la operación.</td>
</tr>
<tr>
<td>30002</td>
<td>No existe registro con el identificador indicado.</td>
</tr>
</tbody>
</table>
</div></template>


