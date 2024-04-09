<template><div><h1 id="agregar-telefono" tabindex="-1"><a class="header-anchor" href="#agregar-telefono"><span>Agregar Telefono</span></a></h1>
<p>Método para agregar un teléfono a un cliente.</p>
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
<td>BTClientes.AgregarTelefono</td>
<td>RBTPG216</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Agregar Telefono:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTClientes.AgregarTelefono> 
         <bts:Btinreq> 
            <bts:Device>10</bts:Device> 
            <bts:Token>da17de6412</bts:Token> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:clienteUId>21</bts:clienteUId> 
         <bts:domicilioId>2</bts:domicilioId> 
         <bts:numeroTelefono>22929787</bts:numeroTelefono> 
         <bts:tipoTelefonoId>1</bts:tipoTelefonoId> 
      </bts:BTClientes.AgregarTelefono> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?AgregarTelefono' \ 
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
	"clienteUId":"21", 
	"domicilioId":"2", 
	"numeroTelefono":"22929787", 
	"tipoTelefonoId":"1"	 
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
      <BTClientes.AgregarTelefonoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>da17de6412</Token> 
         </Btinreq> 
         <telefonoId>1</telefonoId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>8435</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTClientes.AgregarTelefono</Servicio> 
            <Fecha>2019-05-07</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>18:04:21</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTClientes.AgregarTelefonoResponse> 
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
	"telefonoId": 1, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 8396, 
        "Estado": "OK", 
        "Servicio": "BTClientes.AgregarTelefono", 
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
<td>clienteUId</td>
<td>Long</td>
<td>Identificador único de cliente.</td>
</tr>
<tr>
<td>domicilioId</td>
<td>Byte</td>
<td>Identificador de tipo de domicilio.</td>
</tr>
<tr>
<td>numeroTelefono</td>
<td>String</td>
<td>Número de teléfono.</td>
</tr>
<tr>
<td>tipoTelefonoId</td>
<td>Short</td>
<td>Identificador de tipo de teléfono.</td>
</tr>
<tr>
<td>modo</td>
<td>String</td>
<td>[Hidden: Valor fijo &quot;INS&quot; para este método].</td>
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
<td>telefonoId</td>
<td>Byte</td>
<td>Identificador correlativo de teléfono.</td>
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
<td>No se recibió el identificador de cliente.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recibió el identificador de Domicilio.</td>
</tr>
<tr>
<td>30003</td>
<td>No se recibió Telefono.</td>
</tr>
<tr>
<td>30004</td>
<td>No se recibió Tipo de Telefono.</td>
</tr>
</tbody>
</table>
</div></template>


