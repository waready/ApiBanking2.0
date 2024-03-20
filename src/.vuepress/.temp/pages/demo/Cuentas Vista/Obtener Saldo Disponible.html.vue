<template><div><h1 id="obtener-saldo-disponible" tabindex="-1"><a class="header-anchor" href="#obtener-saldo-disponible"><span>Obtener Saldo Disponible</span></a></h1>
<p>Método para obtener el total de saldo disponible de una cuenta vista.</p>
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
<td>BTCuentasVista.ObtenerSaldoDisponible</td>
<td>RBTPG245</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Saldo Disponible:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasVista.ObtenerSaldoDisponible> 
         <bts:Btinreq> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Token>f778078d128D513B0C396F0B</bts:Token> 
            <bts:Usuario>LARROSAC</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Device>WB</bts:Device> 
         </bts:Btinreq> 
         <bts:operacionUId>1</bts:operacionUId> 
      </bts:BTCuentasVista.ObtenerSaldoDisponible> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista_v1?ObtenerSaldoDisponible \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
	"operacionUId": "1" 
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
      <BTCuentasVista.ObtenerSaldoDisponibleResponse> 
         <Btinreq> 
            <Device>WB</Device> 
            <Usuario>LARROSAC</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>f778078d128D513B0C396F0B</Token> 
         </Btinreq> 
         <estado>0</estado> 
         <saldoDisponible>166992.5</saldoDisponible> 
         <moneda>$</moneda> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>221306</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCuentasVista.ObtenerSaldoDisponible</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2019-07-26</Fecha> 
            <Canal>BTDIGITAL</Canal> 
            <Hora>14:52:21</Hora> 
         </Btoutreq> 
      </BTCuentasVista.ObtenerSaldoDisponibleResponse> 
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
	"estado": "0", 
	"saldoDisponible": "166992.5", 
	"moneda": "$", 
	"Btoutreq": { 
	  "Numero": "221306", 
	  "Estado": "OK", 
	  "Servicio": "BTCuentasVista.ObtenerSaldoDisponible", 
	  "Requerimiento": "1", 
	  "Fecha": "2019-07-26", 
	  "Canal": "BTDIGITAL", 
	  "Hora": "14:52:21" 
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
<td>estado</td>
<td>Byte</td>
<td>Estado de la operación.</td>
</tr>
<tr>
<td>saldoDisponible</td>
<td>Double</td>
<td>Saldo disponible de la operación.</td>
</tr>
<tr>
<td>moneda</td>
<td>String</td>
<td>Signo de la moneda de la operación.</td>
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
<td>No se recibió el identificador de la operación.</td>
</tr>
<tr>
<td>30002</td>
<td>La operación ingresada no corresponde a una cuenta vista.</td>
</tr>
<tr>
<td>30101</td>
<td>No se recupero la operación para el identificador recibido.</td>
</tr>
</tbody>
</table>
</div></template>


