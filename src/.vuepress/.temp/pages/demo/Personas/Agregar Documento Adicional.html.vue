<template><div><h1 id="agregar-documento-adicional" tabindex="-1"><a class="header-anchor" href="#agregar-documento-adicional"><span>Agregar Documento Adicional</span></a></h1>
<p>Método para agregar un documento adicional a una persona.</p>
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
<td>BTPersonas.AgregarDocumentoAdicional</td>
<td>RBTPG128</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Agregar Documento Adicional:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.AgregarDocumentoAdicional> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>2e3c830e3a4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:personaId>22</bts:personaId> 
         <bts:sBTDocumentoAdicional> 
            <bts:fechaEmision>2015-01-01</bts:fechaEmision> 
            <bts:tipoDocumento>3</bts:tipoDocumento> 
            <bts:fechaVencimiento>2025-01-01</bts:fechaVencimiento> 
            <bts:tipoDocumentoDsc></bts:tipoDocumentoDsc> 
            <bts:paisDocumentoDsc></bts:paisDocumentoDsc> 
            <bts:nroDocumento>TRT00987</bts:nroDocumento> 
            <bts:paisDocumento>63</bts:paisDocumento> 
         </bts:sBTDocumentoAdicional> 
      </bts:BTPersonas.AgregarDocumentoAdicional> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?AgregarDocumentoAdicional=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 3015b835-3a33-1203-e391-aa8b03d0d3cb' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
   "personaId": 21, 
   "sBTDocumentoAdicional": { 
      "fechaEmision": "0000-00-00", 
      "tipoDocumento": "3", 
      "fechaVencimiento": "2025-01-01", 
      "tipoDocumentoDsc": "Pasaporte", 
      "paisDocumentoDsc": "ARGENTINA", 
      "nroDocumento": "B8789452", 
      "paisDocumento": "63" 
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
      <BTPersonas.AgregarDocumentoAdicionalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>2e3c830e3a4A8B5C60A82434</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>87</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPersonas.AgregarDocumentoAdicional</Servicio> 
            <Requerimiento/> 
            <Fecha>2018-05-04</Fecha> 
            <Hora>16:12:00</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPersonas.AgregarDocumentoAdicionalResponse> 
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
        "Numero": "94", 
        "Estado": "OK", 
        "Servicio": "BTPersonas.AgregarDocumentoAdicional", 
        "Requerimiento": "", 
        "Fecha": "2018-05-04", 
        "Hora": "16:18:26", 
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
<td>Identificador único de Persona.</td>
</tr>
<tr>
<td>sBTDocumentoAdicional</td>
<td>sBTDocumentoAdicional</td>
<td>Datos de documento adicional.</td>
</tr>
<tr>
<td>modo</td>
<td>String</td>
<td>[Hidden: Valor fijo 'INS' para este método].</td>
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
<td>30011</td>
<td>El país del documento adicional no es válido.</td>
</tr>
<tr>
<td>30012</td>
<td>El tipo de documento adicional no es válido.</td>
</tr>
<tr>
<td>30013</td>
<td>Número de Documento incorrecto.</td>
</tr>
<tr>
<td>30014</td>
<td>La fecha de emisión del documento no puede ser anterior a hoy.</td>
</tr>
<tr>
<td>30015</td>
<td>No se recibió fecha de vencimiento del documento.</td>
</tr>
<tr>
<td>30016</td>
<td>La fecha de vencimiento del documento no puede ser anterior a hoy.</td>
</tr>
<tr>
<td>30017</td>
<td>La persona ya posee ese documento adicional.</td>
</tr>
</tbody>
</table>
</div></template>


