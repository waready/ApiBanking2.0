<template><div><h1 id="actualizar-documento-digital" tabindex="-1"><a class="header-anchor" href="#actualizar-documento-digital"><span>Actualizar Documento Digital</span></a></h1>
<p>Método para actualizar el documento digital de una persona.</p>
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
<td>BTPersonas.ActualizarDocumentoDigital</td>
<td>RBTPG170</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Actualizar Documento Digital:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ActualizarDocumentoDigital> 
         <bts:Btinreq> 
            <bts:Device>10</bts:Device> 
            <bts:Token>5744be79064A8B5C60A82434</bts:Token> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:personaUId>21</bts:personaUId> 
         <bts:documentoId>112</bts:documentoId> 
         <bts:nombre>ejemplo</bts:nombre> 
         <bts:archivoCodificado>RG9jdW1lbnRvIGRlIGVqZW1wbG8=</bts:archivoCodificado> 
         <bts:fechaEmision>2010-10-10</bts:fechaEmision> 
         <bts:fechaVencimiento>2020-10-10</bts:fechaVencimiento> 
      </bts:BTPersonas.ActualizarDocumentoDigital> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ActualizarDocumentoDigital' \ 
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
   "personaUId":"21", 
   "documentoId":"112", 
   "nombre":"ejemplo", 
   "archivoCodificado":"RG9jdW1lbnRvIGRlIGVqZW1wbG8=", 
   "fechaEmision":"2010-10-10", 
   "fechaVencimiento": "2020-10-10" 
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
      <BTPersonas.ActualizarDocumentoDigitalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>5744be79064A8B5C60A82434</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>828</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPersonas.ActualizarDocumentoDigital</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2018-11-12</Fecha> 
            <Hora>18:06:30</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPersonas.ActualizarDocumentoDigitalResponse> 
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
      "Numero": 830, 
      "Estado": "OK", 
      "Servicio": "BTPersonas.ActualizarDocumentoDigital", 
      "Requerimiento": "1", 
      "Fecha": "2018-11-12", 
      "Hora": "18:07:13", 
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
<td>Identificador único de persona.</td>
</tr>
<tr>
<td>documentoId</td>
<td>Long</td>
<td>Identificador de instancia de documento.</td>
</tr>
<tr>
<td>nombre</td>
<td>String</td>
<td>Nombre del documento.</td>
</tr>
<tr>
<td>archivoCodificado</td>
<td>String</td>
<td>Archivo a asociar codificado.</td>
</tr>
<tr>
<td>fechaEmision</td>
<td>Date</td>
<td>Fecha de emisión del documento (en caso que corresponda).</td>
</tr>
<tr>
<td>fechaVencimiento</td>
<td>Date</td>
<td>Fecha de emisión del documento (en caso que corresponda).</td>
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
<td>No se recibió el identificador de instancia de documento digital.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recibió nombre.</td>
</tr>
<tr>
<td>30004</td>
<td>No se recibió el identificador de persona</td>
</tr>
<tr>
<td>30013</td>
<td>No existe registro para el identificador indicado.</td>
</tr>
<tr>
<td>30021</td>
<td>Debe ingresar la fecha de emisión del documento.</td>
</tr>
<tr>
<td>30022</td>
<td>Debe ingresar la fecha de vencimiento del documento.</td>
</tr>
<tr>
<td>30130</td>
<td>Ocurrio un error al recibir el archivo, puede que el mismo este corrupto.</td>
</tr>
<tr>
<td>31013</td>
<td>Error de configuración: El vínculo de un tipo de documento digital no puede estar vacío.</td>
</tr>
<tr>
<td>31014</td>
<td>Error de configuración: El vínculo de un tipo de documento digital no puede ser distinto al de la entidad invocadora.</td>
</tr>
</tbody>
</table>
</div></template>


