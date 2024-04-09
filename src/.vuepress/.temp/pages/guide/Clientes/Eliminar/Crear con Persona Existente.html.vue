<template><div><h1 id="crear-con-persona-existente" tabindex="-1"><a class="header-anchor" href="#crear-con-persona-existente"><span>Crear con Persona Existente</span></a></h1>
<p>Método para crear una cuenta cliente a partir de una persona extistente.</p>
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
<td>BTClientes.CrearConPersonaExistente</td>
<td>RBTPG218</td>
<td>Global</td>
</tr>
</tbody>
</table>
<p>###Versión V2R3</p>
<blockquote>
<p>Ejemplo de invocación al método Crear con Persona Existente V2R3:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTClientes.CrearConPersonaExistente> 
         <bts:Btinreq> 
            <bts:Device>10</bts:Device> 
            <bts:Token>da17de0A82434</bts:Token> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:personaUId>22</bts:personaUId> 
         <bts:sectorId>1</bts:sectorId> 
         <bts:clasificacionInternaId>1</bts:clasificacionInternaId> 
         <bts:ejecutivoId></bts:ejecutivoId> 
      </bts:BTClientes.CrearConPersonaExistente> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?CrearConPersonaExistente' \ 
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
	"personaUId":"22", 
	"sectorId":"1", 
	"clasificacionInternaId":"1", 
	"ejecutivoId":"", 
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
      <BTClientes.CrearConPersonaExistenteResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>da17de0A82434</Token> 
         </Btinreq> 
         <clienteUId>201</clienteUId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>8449</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTClientes.CrearConPersonaExistente</Servicio> 
            <Fecha>2019-05-07</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>19:12:18</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTClientes.CrearConPersonaExistenteResponse> 
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
	"clienteUId": 201, 
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
<td>personaUId</td>
<td>Long</td>
<td>Identificador único de la persona titular de la cuenta.</td>
</tr>
<tr>
<td>sectorId</td>
<td>Short</td>
<td>Identificador de sector.</td>
</tr>
<tr>
<td>clasificacionInternaId</td>
<td>Short</td>
<td>Identificador de clasificación interna.</td>
</tr>
<tr>
<td>ejecutivoId</td>
<td>Short</td>
<td>Identificador de ejecutivo de cuenta.</td>
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
<td>clienteUId</td>
<td>Long</td>
<td>Identificador único de cuenta creada.</td>
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
<td>No se recibió el identificador de persona.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recibió el identificador del sector.</td>
</tr>
<tr>
<td>30003</td>
<td>No se recibió el identificador de la clasificación interna.</td>
</tr>
<tr>
<td>30005</td>
<td>Ya existe la cuenta.</td>
</tr>
</tbody>
</table>
<p>###Versión V2R2</p>
<blockquote>
<p>Ejemplo de invocación al método Crear con Persona Existente V2R2:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTClientes.CrearConPersonaExistente> 
         <bts:Btinreq> 
            <bts:Device>10</bts:Device> 
            <bts:Token>da17de0A82434</bts:Token> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:personaUId>22</bts:personaUId> 
         <bts:sectorId>1</bts:sectorId> 
         <bts:clasificacionInternaId>1</bts:clasificacionInternaId> 
         <bts:ejecutivoId></bts:ejecutivoId> 
         <bts:actividadEconomicaId></bts:actividadEconomicaId> 
         <bts:segmentoId></bts:segmentoId> 
      </bts:BTClientes.CrearConPersonaExistente> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?CrearConPersonaExistente' \ 
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
	"personaUId":"22", 
	"sectorId":"1", 
	"clasificacionInternaId":"1", 
	"ejecutivoId":"", 
	"actividadEconomicaId":"", 
	"segmentoId":"" 
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
      <BTClientes.CrearConPersonaExistenteResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>da17de0A82434</Token> 
         </Btinreq> 
         <clienteUId>201</clienteUId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>8449</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTClientes.CrearConPersonaExistente</Servicio> 
            <Fecha>2019-05-07</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>19:12:18</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTClientes.CrearConPersonaExistenteResponse> 
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
	"clienteUId": 201, 
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
<td>personaUId</td>
<td>Long</td>
<td>Identificador único de la persona titular de la cuenta.</td>
</tr>
<tr>
<td>sectorId</td>
<td>Short</td>
<td>Identificador de sector.</td>
</tr>
<tr>
<td>clasificacionInternaId</td>
<td>Short</td>
<td>Identificador de clasificación interna.</td>
</tr>
<tr>
<td>ejecutivoId</td>
<td>Short</td>
<td>Identificador de ejecutivo de cuenta.</td>
</tr>
<tr>
<td>actividadEconomicaId</td>
<td>Int</td>
<td>Identificador de actividad económica.</td>
</tr>
<tr>
<td>segmentoId</td>
<td>Byte</td>
<td>Identificador de segmento.</td>
</tr>
</tbody>
</table>
<h3 id="datos-de-salida-1" tabindex="-1"><a class="header-anchor" href="#datos-de-salida-1"><span>Datos de salida</span></a></h3>
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
<td>Identificador único de cuenta creada.</td>
</tr>
</tbody>
</table>
<h3 id="errores-1" tabindex="-1"><a class="header-anchor" href="#errores-1"><span>Errores</span></a></h3>
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
<td>No se recibió el identificador de persona.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recibió el identificador del sector.</td>
</tr>
<tr>
<td>30003</td>
<td>No se recibió el identificador de la clasificación interna.</td>
</tr>
<tr>
<td>30005</td>
<td>Ya existe la cuenta.</td>
</tr>
</tbody>
</table>
</div></template>


