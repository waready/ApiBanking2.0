<template><div><h1 id="agregar-domicilio" tabindex="-1"><a class="header-anchor" href="#agregar-domicilio"><span>Agregar Domicilio</span></a></h1>
<p>Método para agregar un domicilio a un cliente.</p>
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
<td>BTClientes.AgregarDomicilio</td>
<td>RBTPG239</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Agregar Domicilio:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTClientes.AgregarDomicilio> 
		<bts:Btinreq> 
            <bts:Device>10</bts:Device> 
            <bts:Token>da17de64124A834</bts:Token> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
		</bts:Btinreq> 
		<bts:clienteUId>21</bts:clienteUId> 
		<bts:domicilio> 
			<bts:localidad></bts:localidad> 
			<bts:paisDomicilio></bts:paisDomicilio> 
			<bts:barrioId>10</bts:barrioId> 
			<bts:departamento></bts:departamento> 
			<bts:numeroPuerta>1111</bts:numeroPuerta> 
			<bts:barrio></bts:barrio> 
			<bts:localidadId>10</bts:localidadId> 
			<bts:tipoDeDomicilioId>1</bts:tipoDeDomicilioId> 
			<bts:codigoPostal>1</bts:codigoPostal> 
			<bts:calle>14 de julio</bts:calle> 
			<bts:apartamento>14B</bts:apartamento> 
			<bts:tipoDeDomicilio></bts:tipoDeDomicilio> 
			<bts:departamentoId>10</bts:departamentoId> 
			<bts:paisDomicilioId>845</bts:paisDomicilioId> 
		</bts:domicilio> 
      </bts:BTClientes.AgregarDomicilio> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?AgregarDomicilio' \ 
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
	"domicilio": { 
		"localidad": "", 
		"paisDomicilio": "", 
		"barrioId": "10", 
		"departamento": "", 
		"numeroPuerta": "1111", 
		"barrio": "", 
		"localidadId": "10", 
		"tipoDeDomicilioId": "1", 
		"codigoPostal": "1", 
		"calle": "14 de julio", 
		"apartamento": "14B", 
		"tipoDeDomicilio": "", 
		"departamentoId": "10", 
		"paisDomicilioId": "845" 
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
      <BTClientes.AgregarDomicilioResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>da17de64124A834</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>8439</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTClientes.AgregarDomicilio</Servicio> 
            <Fecha>2019-05-07</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>18:31:48</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTClientes.AgregarDomicilioResponse> 
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
        "Servicio": "BTClientes.AgregarDomicilio", 
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
<td>domicilio</td>
<td>sBTDomicilio1</td>
<td>Datos del domicilio.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTDomicilio1 son los siguientes:</p>
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
<td>paisDomicilioId</td>
<td>Short</td>
<td>Identificador del país.</td>
</tr>
<tr>
<td>paisDomicilio</td>
<td>String</td>
<td>Nombre del pais.</td>
</tr>
<tr>
<td>departamentoId</td>
<td>Int</td>
<td>Identificador del departamento.</td>
</tr>
<tr>
<td>departamento</td>
<td>String</td>
<td>Nombre del departamento.</td>
</tr>
<tr>
<td>localidadId</td>
<td>Int</td>
<td>Identificador de la localidad.</td>
</tr>
<tr>
<td>localidad</td>
<td>String</td>
<td>Nombre de la localidad.</td>
</tr>
<tr>
<td>barrioId</td>
<td>Int</td>
<td>Identificador del barrio.</td>
</tr>
<tr>
<td>barrio</td>
<td>String</td>
<td>Nombre del barrio.</td>
</tr>
<tr>
<td>calle</td>
<td>String</td>
<td>Calle del domicilio.</td>
</tr>
<tr>
<td>numeroPuerta</td>
<td>String</td>
<td>Número de puerta.</td>
</tr>
<tr>
<td>apartamento</td>
<td>String</td>
<td>Número de apartamento.</td>
</tr>
<tr>
<td>codigoPostal</td>
<td>String</td>
<td>Código postal.</td>
</tr>
<tr>
<td>tipoDeDomicilioId</td>
<td>Byte</td>
<td>Identificador del tipo de domicilio.</td>
</tr>
<tr>
<td>tipoDeDomicilio</td>
<td>String</td>
<td>Nombre del tipo de domicilio.</td>
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
<td>No se recibió el identificador de la cuenta.</td>
</tr>
<tr>
<td>30006</td>
<td>No existe registro con el identificador indicado.</td>
</tr>
<tr>
<td>40001</td>
<td>Código de domicilio no válido.</td>
</tr>
</tbody>
</table>
</div></template>


