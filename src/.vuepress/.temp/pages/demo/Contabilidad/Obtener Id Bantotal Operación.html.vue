<template><div><h1 id="obtener-id-bantotal-operacion" tabindex="-1"><a class="header-anchor" href="#obtener-id-bantotal-operacion"><span>Obtener Id Bantotal Operación</span></a></h1>
<p>Método para obtener la clave de identificación Bantotal de una operación.</p>
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
<td>BTContabilidad.ObtenerIdBantotalOperacion</td>
<td>RBTPG369</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio de Obtener Id Bantotal Operación:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTContabilidad.ObtenerIdBantotalOperacion> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>281020211424260000881155</bts:Token> 
            <bts:Device>GP</bts:Device> 
         </bts:Btinreq> 
         <bts:operacionUId>3</bts:operacionUId> 
      </bts:BTContabilidad.ObtenerIdBantotalOperacion> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTContabilidad?ObtenerIdBantotalOperacion' \ 
	-H 'cache-control: no-cache' \ 
	-H 'content-type: application/json' \ 
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
	-d '{ 
	"Btinreq": { 
	  "Device": "GP", 
	  "Usuario": "MINSTALADOR", 
	  "Token": "16c1cc9b534A8B5C60A82434", 
	  "Canal": "BTDIGITAL", 
	  "Requerimiento": "1" 
	}, 
	"operacionUId": "3" 
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
      <BTContabilidad.ObtenerIdBantotalOperacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>MINSTALADOR</Usuario> 
            <Token>281020211424260000881155</Token> 
            <Device>GP</Device> 
         </Btinreq> 
         <empresa>1</empresa> 
         <sucursalId>1</sucursalId> 
         <moduloId>522</moduloId> 
         <monedaId>2225</monedaId> 
         <papelId>0</papelId> 
         <cuenta>29</cuenta> 
         <operacionId>80</operacionId> 
         <subOperacionId>0</subOperacionId> 
         <tipoOperacionId>3</tipoOperacionId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTContabilidad.ObtenerIdBantotalOperacion</Servicio> 
            <Fecha>2021-10-29</Fecha> 
            <Hora>10:25:26</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>11008</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTContabilidad.ObtenerIdBantotalOperacionResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
	    "Device": "GP", 
	    "Usuario": "MINSTALADOR", 
	    "Token": "16c1cc9b534A8B5C60A82434", 
	    "Canal": "BTDIGITAL", 
	    "Requerimiento": "1" 
    }, 
    "empresa": "1", 
    "sucursalId": "1", 
    "moduloId": "522", 
    "monedaId": "2225", 
    "papelId": "0", 
    "cuenta": "29", 
    "operacionId": "80", 
    "subOperacionId": "0", 
    "tipoOperacionId": "3", 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTContabilidad.ObtenerIdBantotalOperacion", 
        "Fecha": "2021-10-28", 
        "Hora": "15:39:53", 
        "Requerimiento": "1", 
        "Numero": "11003", 
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
<td>empresa</td>
<td>Short</td>
<td>Identificador de empresa.</td>
</tr>
<tr>
<td>sucursalId</td>
<td>Int</td>
<td>Identificador de sucursal.</td>
</tr>
<tr>
<td>moduloId</td>
<td>Int</td>
<td>Identificador de módulo.</td>
</tr>
<tr>
<td>monedaId</td>
<td>Short</td>
<td>Identificador de moneda.</td>
</tr>
<tr>
<td>papelId</td>
<td>Int</td>
<td>Identificador de papel.</td>
</tr>
<tr>
<td>cuenta</td>
<td>Int</td>
<td>Número de cuenta.</td>
</tr>
<tr>
<td>operacionId</td>
<td>Int</td>
<td>Identificador de operación.</td>
</tr>
<tr>
<td>subOperacionId</td>
<td>Int</td>
<td>Identificador de sub operación.</td>
</tr>
<tr>
<td>tipoOperacionId</td>
<td>Short</td>
<td>Identificador de tipo de operación.</td>
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
<td>No se recibió el identificador de operación.</td>
</tr>
<tr>
<td>30002</td>
<td>No existe registro para el identificador de operación ingresado.</td>
</tr>
</tbody>
</table>
</div></template>


