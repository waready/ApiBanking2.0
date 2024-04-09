<template><div><h1 id="agregar-persona-vinculada" tabindex="-1"><a class="header-anchor" href="#agregar-persona-vinculada"><span>Agregar Persona Vinculada</span></a></h1>
<p>Método para agregar un vínculo de afinidad a una persona.</p>
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
<td>BTPersonas.AgregarPersonaVinculada</td>
<td>RBTPG370</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio de Actualizar Persona Vinculada:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.AgregarPersonaVinculada> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>101560665CD285A89A23FBEE</bts:Token> 
            <bts:Device>MC</bts:Device> 
         </bts:Btinreq> 
         <bts:personaUId>1</bts:personaUId> 
         <bts:personaVinculadaUId>3</bts:personaVinculadaUId> 
         <bts:vinculoId>53</bts:vinculoId> 
      </bts:BTPersonas.AgregarPersonaVinculada> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas?AgregarPersonaVinculada' \ 
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
	"personaUId": "1", 
	"personaVinculadaUId": "3", 
	"vinculoId": "53" 
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
      <BTPersonas.AgregarPersonaVinculadaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>101560665CD285A89A23FBEE</Token> 
            <Device>MC</Device> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTPersonas.AgregarPersonaVinculada</Servicio> 
            <Fecha>2021-11-08</Fecha> 
            <Hora>15:41:46</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>8673</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTPersonas.AgregarPersonaVinculadaResponse> 
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
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTPersonas.AgregarPersonaVinculadaResponse", 
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
<td>personaUId</td>
<td>Long</td>
<td>Identificador único de persona.</td>
</tr>
<tr>
<td>personaVinculadaUId</td>
<td>Long</td>
<td>Identificador único del vínculo de la persona.</td>
</tr>
<tr>
<td>vinculoId</td>
<td>Short</td>
<td>Identificador del vínculo de consanguinidad.</td>
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
<td>No se recibió el identificador de persona.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recibió el identificador de persona a relacionar.</td>
</tr>
<tr>
<td>31003</td>
<td>No existe registro para el identificador único.</td>
</tr>
<tr>
<td>32003</td>
<td>Error en identificador de la persona a relacionar: No existe registro para el identificador único.</td>
</tr>
<tr>
<td>40001</td>
<td>No se recibió el código de vínculo.</td>
</tr>
<tr>
<td>41001</td>
<td>Registro de relación de personas existente.</td>
</tr>
<tr>
<td>42000</td>
<td>El código de vínculo ingresado es inválido.</td>
</tr>
</tbody>
</table>
</div></template>


