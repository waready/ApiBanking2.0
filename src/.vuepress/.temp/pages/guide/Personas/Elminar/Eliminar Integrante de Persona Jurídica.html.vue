<template><div><h1 id="eliminar-integrante-de-persona-juridica" tabindex="-1"><a class="header-anchor" href="#eliminar-integrante-de-persona-juridica"><span>Eliminar Integrante de Persona Jurídica</span></a></h1>
<p>Método para eliminar un integrante de una persona jurídica.</p>
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
<td>BTPersonas.EliminarIntegrantePersonaJuridica</td>
<td>RBTPG281</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Eliminar Integrante de Persona Juridica:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.EliminarIntegrantePersonaJuridica> 
        <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>1429807273CD285A89A23FBE</bts:Token> 
            <bts:Device>MC</bts:Device> 
         </bts:Btinreq> 
         <bts:personaJuridicaUId>2</bts:personaJuridicaUId> 
         <bts:personaIntegranteUId>1</bts:personaIntegranteUId> 
      </bts:BTPersonas.EliminarIntegrantePersonaJuridica> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?EliminarIntegrantePersonaJuridica' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
	 "Btinreq": { 
		"Canal": "BTDIGITAL", 
		"Requerimiento": "1", 
		"Usuario": "INSTALADOR", 
		"Token": "1429807273CD285A89A23FBE", 
		"Device": "MC" 
	 }, 
	 "personaJuridicaUId": "2", 
	 "personaIntegranteUId": "1" 
  } 
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
      <BTPersonas.EliminarIntegrantePersonaJuridicaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>1429807273CD285A89A23FBE</Token> 
            <Device>MC</Device> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTPersonas.EliminarIntegrantePersonaJuridica</Servicio> 
            <Fecha>2020-11-02</Fecha> 
            <Hora>12:06:37</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>10140</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTPersonas.EliminarIntegrantePersonaJuridicaResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
{ 
	 "Btinreq": { 
		"Canal": "BTDIGITAL", 
		"Requerimiento": "1", 
		"Usuario": "INSTALADOR", 
		"Token": "1429807273CD285A89A23FBE", 
		"Device": "MC" 
	 }, 
	 "Erroresnegocio": null, 
	 "Btoutreq": { 
		"Canal": "BTDIGITAL", 
		"Servicio": "BTPersonas.EliminarIntegrantePersonaJuridica", 
		"Fecha": "2020-11-02", 
		"Hora": "12:06:37", 
		"Requerimiento": "1", 
		"Numero": "10140", 
		"Estado": "OK" 
	 } 
} 
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
<td>personaJuridicaUId</td>
<td>Long</td>
<td>Identificador único de persona jurídica.</td>
</tr>
<tr>
<td>personaIntegranteUId</td>
<td>Long</td>
<td>Identificador único de persona física.</td>
</tr>
</tbody>
</table>
<h3 id="datos-de-salida" tabindex="-1"><a class="header-anchor" href="#datos-de-salida"><span>Datos de salida</span></a></h3>
<p>No aplica.</p>
<h3 id="errores" tabindex="-1"><a class="header-anchor" href="#errores"><span>Errores</span></a></h3>
<p>No aplica.</p>
</div></template>


