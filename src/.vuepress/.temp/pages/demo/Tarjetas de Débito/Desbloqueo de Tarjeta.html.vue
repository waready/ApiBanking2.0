<template><div><h1 id="desbloqueo-de-tarjeta" tabindex="-1"><a class="header-anchor" href="#desbloqueo-de-tarjeta"><span>Desbloqueo de Tarjeta</span></a></h1>
<p>Método para realizar el desbloqueo de una tarjeta de débito.</p>
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
<td>BTTarjetasDeDebito.Desbloquear</td>
<td>RBTPG065</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Desbloqueo de Tarjeta:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTTarjetasDeDebito.Desbloquear> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento/> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>407fce50864A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:tarjetaUId>2000002072</bts:tarjetaUId> 
         <bts:clienteUId>161</bts:clienteUId> 
      </bts:BTTarjetasDeDebito.Desbloquear> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito?Desbloquear=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 19f16614-b11e-9eaf-4034-1d7994c6019f' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
   "tarjetaUId": 2000002072, 
   "clienteUId": 161 
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
      <BTTarjetasDeDebito.DesbloquearResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>407fce50864A8B5C60A82434</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>997</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTTarjetasDeDebito.Activar</Servicio> 
            <Fecha>2017-12-26</Fecha> 
            <Requerimiento/> 
            <Hora>11:30:24</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTTarjetasDeDebito.DesbloquearResponse> 
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
      "Numero": "974", 
      "Estado": "NEG_ERROR", 
      "Servicio": "BTTarjetasDeDebito.Desbloquear", 
      "Fecha": "2017-12-22", 
      "Requerimiento": "", 
      "Hora": "13:11:46", 
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
<td>tarjetaUId</td>
<td>Long</td>
<td>Identificador único de tarjeta.</td>
</tr>
<tr>
<td>clienteUId</td>
<td>Long</td>
<td>Identificador único de cliente.</td>
</tr>
</tbody>
</table>
<h3 id="datos-de-salida" tabindex="-1"><a class="header-anchor" href="#datos-de-salida"><span>Datos de salida</span></a></h3>
<p>No aplica.</p>
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
<td>No se recibió el identificador de la tarjeta.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recuperó la tarjeta de débito para el identificador: [Número de identificador].</td>
</tr>
<tr>
<td>30003</td>
<td>No existe registro con el identificador indicado.</td>
</tr>
<tr>
<td>30004</td>
<td>La Tarjeta no pertenece al cliente.</td>
</tr>
<tr>
<td>40001</td>
<td>Error: El código de situación actual y/o el estado de la tarjeta son incorrectos.</td>
</tr>
<tr>
<td>40002</td>
<td>Error: Tarjeta inexistente.</td>
</tr>
<tr>
<td>40003</td>
<td>Error devuelto por la rutina PTDD0017.</td>
</tr>
</tbody>
</table>
</div></template>


