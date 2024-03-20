<template><div><h1 id="alta-automatica-contrato" tabindex="-1"><a class="header-anchor" href="#alta-automatica-contrato"><span>Alta Automática Contrato</span></a></h1>
<p>Método para dar de alta contrato para el cliente.</p>
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
<td>BTCASHManagement.AltaAutomaticaContrato</td>
<td>RBTPGC30</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Alta Automática Contrato:</p>
</blockquote>
<code-group> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement_v1?AltaAutomaticaContrato' \ 
  -H 'Content-Type: application/json' \ 
  -H 'Postman-Token: e985ea19-7527-41bc-bc60-fe431d9352b0,dbbd8038-2208-48fc-9395-1dfa11f1a0b1' \ 
  -H 'User-Agent: PostmanRuntime/7.16.3' \ 
  -H 'cache-control: no-cache' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
	"clienteUId":2, 
	"servicioId":10 
}' 
``` 
</code-block> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCASHManagement.AltaAutomaticaContrato> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>291020191816270000330911</bts:Token> 
            <bts:Device>001</bts:Device> 
         </bts:Btinreq> 
         <bts:clienteUId>2</bts:clienteUId> 
         <bts:servicioId>10</bts:servicioId> 
      </bts:BTCASHManagement.AltaAutomaticaContrato> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
</code-group> 
<blockquote>
<p>El POST retornará la siguiente estructura:</p>
</blockquote>
<code-group> 
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
	"contratoId":0, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "4438", 
        "Estado": "OK", 
        "Servicio": "BTCASHManagement.AltaAutomaticaContrato", 
        "Fecha": "2018-12-14", 
        "Requerimiento": "", 
        "Hora": "17:00:28", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
<code-block title="XML" active> 
```xml 
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   <SOAP-ENV:Body> 
      <BTCASHManagement.AltaAutomaticaContratoResponse> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>MINSTALADOR</Usuario> 
            <Token>291020191816270000330911</Token> 
            <Device>001</Device> 
         </Btinreq> 
         <contratoId>14</contratoId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTCASHManagement.AltaAutomaticaContrato</Servicio> 
            <Fecha>2019-10-29</Fecha> 
            <Hora>18:19:32</Hora> 
            <Requerimiento/> 
            <Numero>565</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTCASHManagement.AltaAutomaticaContratoResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
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
<td>clienteUId</td>
<td>Long</td>
<td>Identificador de la Cuenta Cliente.</td>
</tr>
<tr>
<td>servicioId</td>
<td>Short</td>
<td>Codigo de Servicio CASH.</td>
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
<td>contratoId</td>
<td>Int</td>
<td>Identificador del Contrato CASH del Cliente.</td>
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
<td>1030701</td>
<td>El Servicio no existe.</td>
</tr>
<tr>
<td>1030709</td>
<td>Se requiere identificacion de cuenta cliente.</td>
</tr>
<tr>
<td>1030760</td>
<td>No se pudo dar de alta el contrato.</td>
</tr>
</tbody>
</table>
</div></template>


