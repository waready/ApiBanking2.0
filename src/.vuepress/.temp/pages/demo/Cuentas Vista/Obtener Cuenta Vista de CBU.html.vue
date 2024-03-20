<template><div><h1 id="obtener-cuenta-vista-de-cbu" tabindex="-1"><a class="header-anchor" href="#obtener-cuenta-vista-de-cbu"><span>Obtener Cuenta Vista de CBU</span></a></h1>
<p>Método para obtener el identificador de operación de una cuenta corriente o cuenta de ahorro a partir del CBU.</p>
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
<td>BTCuentasVista.ObtenerCuentaVistaDeCBU</td>
<td>RBTPAR01</td>
<td>Argentina</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Cuenta Vista de CBU:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasVista.ObtenerCuentaVistaDeCBU> 
		<Btinreq> 
			<Device>AV</Device> 
			<Usuario>MINSTALADOR</Usuario> 
			<Requerimiento></Requerimiento> 
			<Canal>BTDIGITAL</Canal> 
			<Token>268b6d23eb4A8B5C60A82434</Token> 
		</Btinreq> 
		<CBU>3220001800000831740016</CBU> 
      </bts:BTCuentasVista.ObtenerCuentaVistaDeCBU> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?ObtenerCuentaVistaDeCBU=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: fde8ae30-8752-c0fe-cf77-f8761a5ddcff' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "CBU": "3220001800000831740016" 
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
      <BTCuentasVista.ObtenerCuentaVistaDeCBUResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
			<Device>AV</Device> 
			<Usuario>MINSTALADOR</Usuario> 
			<Requerimiento></Requerimiento> 
			<Canal>BTDIGITAL</Canal> 
			<Token>268b6d23eb4A8B5C60A82434</Token> 
		</Btinreq> 
		<operacionUId>281</operacionUId> 
		<Erroresnegocio></Erroresnegocio> 
		<Btoutreq> 
			<Numero>868</Numero> 
			<Estado>OK</Estado> 
			<Servicio>BTCuentasVista.ObtenerCuentaVistaDeCBU</Servicio> 
			<Requerimiento></Requerimiento> 
			<Fecha>2017-12-18</Fecha> 
			<Hora>17:15:28</Hora> 
			<Canal>BTDIGITAL</Canal> 
		</Btoutreq> 
      </BTCuentasVista.ObtenerCuentaVistaDeCBUResponse> 
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
    "operacionUId": 281, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "868", 
        "Estado": "OK", 
        "Servicio": "BTCuentasVista.ObtenerCuentaVistaDeCBU", 
        "Requerimiento": "", 
        "Fecha": "2017-12-18", 
        "Hora": "17:15:28", 
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
<td>CBU</td>
<td>String</td>
<td>Clave Bancaria Uniforme.</td>
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
<td>long</td>
<td>Identificador único de operación CC o CA.</td>
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
<td>No se recibió CBU.</td>
</tr>
<tr>
<td>40001</td>
<td>No se encontro operacion correspondiente al CBU.</td>
</tr>
</tbody>
</table>
</div></template>


