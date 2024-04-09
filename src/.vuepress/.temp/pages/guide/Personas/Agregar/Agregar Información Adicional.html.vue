<template><div><h1 id="agregar-informacion-adicional" tabindex="-1"><a class="header-anchor" href="#agregar-informacion-adicional"><span>Agregar Información Adicional</span></a></h1>
<p>Método para agregar la información adicional de una persona.</p>
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
<td>BTPersonas.AgregarInformacionAdicional</td>
<td>RBTPG517</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio de Agregar Información Adicional:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.AgregarInformacionAdicional> 
         <bts:Btinreq> 
            <bts:Device>1</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>976EB9CBE6D99B71A5E627F1</bts:Token> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:personaUId>204</bts:personaUId> 
         <bts:sdtInformacionAdicional> 
            <bts:sBTDatoLista> 
               <bts:Clave>Código TIN</bts:Clave> 
               <bts:Valor>1256</bts:Valor> 
            </bts:sBTDatoLista> 
         </bts:sdtInformacionAdicional> 
      </bts:BTPersonas.AgregarInformacionAdicional> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas?AgregarInformacionAdicional' \ 
	-H 'cache-control: no-cache' \ 
	-H 'content-type: application/json' \ 
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
	-d '{ 
	"Btinreq": { 
	  "Device": "1", 
	  "Usuario": "MINSTALADOR", 
	  "Token": "9CBE6DC33CD93505A5382434", 
	  "Canal": "BTDIGITAL", 
	  "Requerimiento": "1" 
	}, 
	"personaUId": 204, 
        "sdtInformacionAdicional": { 
          "sBTDatoLista": { 
            "Clave": "Código TIN", 
            "Valor": 1256 
          } 
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
      <BTPersonas.AgregarInformacionAdicionalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>976EB9CBE6D99B71A5E627F1</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>10762</Numero> 
            <Servicio>BTPersonas.AgregarInformacionAdicional</Servicio> 
            <Estado>OK</Estado> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2023-05-10</Fecha> 
            <Hora>12:46:32</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPersonas.AgregarInformacionAdicionalResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
{ 
   "Btinreq": { 
      "Device": "1", 
      "Usuario": "MINSTALADOR", 
      "Token": "16c1cFC33CD93505A5382434", 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "1" 
   }, 
<p>&quot;Btoutreq&quot;: {
&quot;Numero&quot;: &quot;111399&quot;,
&quot;Estado&quot;: &quot;OK&quot;,
&quot;Servicio&quot;: &quot;BTPersonas.AgregarInformacionAdicional&quot;,
&quot;Requerimiento&quot;: &quot;1&quot;,
&quot;Fecha&quot;: &quot;2023-05-10&quot;,
&quot;Canal&quot;: &quot;BTDIGITAL&quot;,
&quot;Hora&quot;: &quot;14:28:56&quot;
}
}'</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;/code-block> 
&lt;/code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
personaUId | Long | Identificador único de persona. 
sdtInformacionAdicional | sBTDatoLista | Listado de datos. 

Los campos del tipo de dato estructurado sBTDatoLista son los siguientes: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
clave | String | Identificador de información adicional. 
valor | String | Valor de información adicional. 


### Datos de salida 

No aplica. 


### Errores 

Código | Descripción 
----------- | ----------- 
30001 | No se recibió el identificador de persona. 


 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


