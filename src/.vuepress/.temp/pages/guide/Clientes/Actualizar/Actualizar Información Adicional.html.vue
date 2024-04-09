<template><div><h1 id="actualizar-informacion-adicional" tabindex="-1"><a class="header-anchor" href="#actualizar-informacion-adicional"><span>Actualizar Información Adicional</span></a></h1>
<p>Método para actualizar la información adicional de un cliente.</p>
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
<td>BTClientes.ActualizarInformacionAdicional</td>
<td>RBTPG516</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio de Actualizar Información Adicional:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTClientes.ActualizarInformacionAdicional> 
         <bts:Btinreq> 
            <bts:Device>1</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>976EB9CBE6D99B71A5E627F1</bts:Token> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:clienteUId>61</bts:clienteUId> 
         <bts:sdtInformacionAdicional> 
            <bts:sBTDatoLista> 
               <bts:clave>Código Pais</bts:clave> 
               <bts:valor>695</bts:valor> 
            </bts:sBTDatoLista> 
         </bts:sdtInformacionAdicional> 
      </bts:BTClientes.ActualizarInformacionAdicional> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes?ActualizarInformacionAdicional' \ 
	-H 'cache-control: no-cache' \ 
	-H 'content-type: application/json' \ 
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
	-d '{ 
	"Btinreq": { 
	  "Device": "1", 
	  "Usuario": "MINSTALADOR", 
	  "Token": "16c1cFC33CD93505A5382434", 
	  "Canal": "BTDIGITAL", 
	  "Requerimiento": "1" 
	}, 
	"clienteUId": "61", 
	"sdtInformacionAdicional": { 
      "sBTDatoLista": { 
         "clave": "Código Pais", 
         "valor": "695" 
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
      <BTClientes.ActualizarInformacionAdicionalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>976EB9CBE6D99B71A5E627F1</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>10782</Numero> 
            <Servicio>BTClientes.ActualizarInformacionAdicional</Servicio> 
            <Estado>OK</Estado> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2023-05-10</Fecha> 
            <Hora>14:59:19</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTClientes.ActualizarInformacionAdicionalResponse> 
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
&quot;Servicio&quot;: &quot;BTClientes.ActualizarInformacionAdicional&quot;,
&quot;Requerimiento&quot;: &quot;1&quot;,
&quot;Fecha&quot;: &quot;2023-05-10&quot;,
&quot;Canal&quot;: &quot;BTDIGITAL&quot;,
&quot;Hora&quot;: &quot;15:10:52&quot;
}
}'</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;/code-block> 
&lt;/code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
clienteUId | Long | Identificador único de cliente. 
sdtInformacionAdicional | sBTDatoLista | Listado de datos adicionales. 
modo | String | [Hidden, valor fijo 'UPD' para este método].  

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
30001 | No se recibió el identificador de cliente. 
40002 | El atributo [Identificador de información adicional] no existe. 

 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


