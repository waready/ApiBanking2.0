<template><div><h1 id="eliminar-informacion-adicional" tabindex="-1"><a class="header-anchor" href="#eliminar-informacion-adicional"><span>Eliminar Información Adicional</span></a></h1>
<p>Método para eliminar la información adicional de un cliente.</p>
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
<td>BTClientes.EliminarInformacionAdicional</td>
<td>RBTPG516</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio de Eliminar Información Adicional:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTClientes.EliminarInformacionAdicional> 
         <bts:Btinreq> 
            <bts:Requerimiento>0</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Device>GZ</bts:Device> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>e2db881814CD285A89A23FBE</bts:Token> 
         </bts:Btinreq> 
         <bts:clienteUId>1189</bts:clienteUId> 
         <bts:sdtInformacionAdicional> 
            <bts:sBTDatoLista> 
               <bts:clave>AnioNacimiento</bts:clave> 
               <bts:valor></bts:valor> 
            </bts:sBTDatoLista> 
         </bts:sdtInformacionAdicional> 
      </bts:BTClientes.EliminarInformacionAdicional> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes?EliminarInformacionAdicional' \ 
	-H 'cache-control: no-cache' \ 
	-H 'content-type: application/json' \ 
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
	-d '{ 
	"Btinreq": { 
	  "Device": "1", 
	  "Usuario": "INSTALADOR", 
	  "Token": "e2db881814CD285A89A23FBE", 
	  "Canal": "BTDIGITAL", 
	  "Requerimiento": "1" 
	}, 
	"clienteUId": "61", 
	"sdtInformacionAdicional": { 
      "sBTDatoLista": { 
         "clave": "AnioNacimiento", 
         "valor": "" 
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
      <BTClientes.EliminarInformacionAdicionalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GZ</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>0</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>e2db881814CD285A89A23FBE</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>589870</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTClientes.EliminarInformacionAdicional</Servicio> 
            <Fecha>2023-10-11</Fecha> 
            <Requerimiento>0</Requerimiento> 
            <Hora>08:43:27</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTClientes.EliminarInformacionAdicionalResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
{ 
   "Btinreq": { 
      "Device": "1", 
      "Usuario": "INSTALADOR", 
      "Token": "e2db881814CD285A89A23FBE", 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "1" 
   }, 
<p>&quot;Btoutreq&quot;: {
&quot;Numero&quot;: &quot;111399&quot;,
&quot;Estado&quot;: &quot;OK&quot;,
&quot;Servicio&quot;: &quot;BTClientes.EliminarInformacionAdicional&quot;,
&quot;Requerimiento&quot;: &quot;1&quot;,
&quot;Fecha&quot;: &quot;2023-10-11&quot;,
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
modo | String | [Hidden, valor fijo 'DLT' para este método].  

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
40001 | La cuenta ingresada no existe. 


 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


