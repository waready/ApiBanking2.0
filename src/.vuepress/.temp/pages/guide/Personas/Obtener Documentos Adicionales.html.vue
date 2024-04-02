<template><div><h1 id="obtener-documentos-adicionales" tabindex="-1"><a class="header-anchor" href="#obtener-documentos-adicionales"><span>Obtener Documentos Adicionales</span></a></h1>
<p>Método para obtener un listado de los documentos adicionales de una persona.</p>
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
<td>BTPersonas.ObtenerDocumentosAdicionales</td>
<td>RBTPG130</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Documentos Adicionales:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ObtenerDocumentosAdicionales> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>2e3c830e3a4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:personaUId>21</bts:personaUId> 
      </bts:BTPersonas.ObtenerDocumentosAdicionales> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerDocumentosAdicionales=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: a12f013d-9875-6451-dd62-ad7bb0217b5c' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
   "personaUId": 21     
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
      <BTPersonas.ObtenerDocumentosAdicionalesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>2e3c830e3a4A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtDocumentosAdicionales> 
            <sBTDocumentoAdicional> 
               <paisDocumento>63</paisDocumento> 
               <paisDocumentoDsc>ARGENTINA</paisDocumentoDsc> 
               <tipoDocumento>3</tipoDocumento> 
               <tipoDocumentoDsc>Pasaporte</tipoDocumentoDsc> 
               <nroDocumento>B8789452</nroDocumento> 
               <fechaEmision>0000-00-00</fechaEmision> 
               <fechaVencimiento>2025-01-01</fechaVencimiento> 
            </sBTDocumentoAdicional> 
         </sdtDocumentosAdicionales> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>72</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPersonas.ObtenerDocumentosAdicionales</Servicio> 
            <Requerimiento/> 
            <Fecha>2018-05-04</Fecha> 
            <Hora>13:43:22</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPersonas.ObtenerDocumentosAdicionalesResponse> 
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
   "sdtDocumentosAdicionales": { 
      "sBTDocumentoAdicional": [ { 
         "fechaEmision": "0000-00-00", 
                "tipoDocumento": "3", 
                "fechaVencimiento": "2025-01-01", 
                "tipoDocumentoDsc": "Pasaporte", 
                "paisDocumentoDsc": "ARGENTINA", 
                "nroDocumento": "B8789452", 
                "paisDocumento": "63" 
      } ] 
   }, 
   "Erroresnegocio": { 
      "BTErrorNegocio": [] 
   }, 
   "Btoutreq": { 
      "Numero": "74", 
      "Estado": "OK", 
      "Servicio": "BTPersonas.ObtenerDocumentosAdicionales", 
      "Fecha": "2018-05-04", 
      "Requerimiento": "", 
      "Hora": "15:42:08", 
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
<td>sdtDocumentosAdicionales</td>
<td>sBTDocumentoAdicional</td>
<td>Listado de documentos adicionales.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTDocumentoAdicional son los siguientes:</p>
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
<td>paisDocumento</td>
<td>Short</td>
<td>Identificador de país del documento.</td>
</tr>
<tr>
<td>paisDocumentoDsc</td>
<td>String</td>
<td>Nombre del país del documento.</td>
</tr>
<tr>
<td>tipoDocumento</td>
<td>Short</td>
<td>Identificador de tipo de documento.</td>
</tr>
<tr>
<td>tipoDocumentoDsc</td>
<td>String</td>
<td>Nombre del tipo de documento.</td>
</tr>
<tr>
<td>nroDocumento</td>
<td>String</td>
<td>Número de documento.</td>
</tr>
<tr>
<td>fechaEmision</td>
<td>Date</td>
<td>Fecha de emisión del documento.</td>
</tr>
<tr>
<td>fechaVencimiento</td>
<td>Date</td>
<td>Fecha de vencimiento del documento.</td>
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
<td>No se recibió el identificador de persona</td>
</tr>
</tbody>
</table>
</div></template>


