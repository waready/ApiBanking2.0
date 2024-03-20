<template><div><h1 id="obtener-documentos-digitales" tabindex="-1"><a class="header-anchor" href="#obtener-documentos-digitales"><span>Obtener Documentos Digitales</span></a></h1>
<p>Método para obtener un listado de los documentos digitales de una persona.</p>
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
<td>BTPersonas.ObtenerDocumentosDigitales</td>
<td>RBTPG179</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Documentos Digitales:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ObtenerDocumentosDigitales> 
         <bts:Btinreq> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>0868626a064A8B5C60A82434</bts:Token> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Device>10.12.10.159</bts:Device> 
         </bts:Btinreq> 
         <bts:personaUId>22</bts:personaUId> 
      </bts:BTPersonas.ObtenerDocumentosDigitales> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerDocumentosDigitales=' \ 
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
	"personaUId": "22" 
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
      <BTPersonas.ObtenerDocumentosDigitalesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10.12.10.159</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>0868626a064A8B5C60A82434</Token> 
         </Btinreq> 
         <documentosDigitales> 
            <sBTDocumentoDigital> 
               <Titulo>C.I</Titulo> 
               <FechaActualizacion>2017-03-30</FechaActualizacion> 
               <FechaVencimiento>2018-03-30</FechaVencimiento> 
               <TipoDocumentoDigital>Cédula de Identidad</TipoDocumentoDigital> 
               <documentoId>83</documentoId> 
            </sBTDocumentoDigital> 
            <sBTDocumentoDigital> 
               <Titulo>C.I 2</Titulo> 
               <FechaActualizacion>2017-03-30</FechaActualizacion> 
               <FechaVencimiento>2018-03-30</FechaVencimiento> 
               <TipoDocumentoDigital>Cédula de Identidad</TipoDocumentoDigital> 
               <documentoId>84</documentoId> 
            </sBTDocumentoDigital> 
         </documentosDigitales> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>770</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPersonas.ObtenerDocumentosDigitales</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2018-11-12</Fecha> 
            <Hora>16:15:12</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPersonas.ObtenerDocumentosDigitalesResponse> 
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
    "documentosDigitales": { 
        "sBTDocumentoDigital": [ 
            { 
                "Titulo": "C.I", 
                "FechaActualizacion": "2017-03-30", 
                "FechaVencimiento": "2018-03-30", 
                "TipoDocumentoDigital": "Cédula de Identidad", 
                "DocumentoId": 83 
            }, 
            { 
                "Titulo": "C.I 2", 
                "FechaActualizacion": "2017-03-30", 
                "FechaVencimiento": "2018-03-30", 
                "TipoDocumentoDigital": "Cédula de Identidad", 
                "DocumentoId": 84 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 773, 
        "Estado": "OK", 
        "Servicio": "BTPersonas.ObtenerDocumentosDigitales", 
        "Requerimiento": "1", 
        "Fecha": "2018-11-12", 
        "Hora": "16:17:09", 
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
<td>sdtDocumentosDigitales</td>
<td>sBTDocumentoDigital</td>
<td>Listado de Documentos Digitales.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTDocumentoDigital son los siguientes:</p>
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
<td>DocumentoId</td>
<td>Long</td>
<td>Identificador del documento digital.</td>
</tr>
<tr>
<td>Titulo</td>
<td>String</td>
<td>Titulo del documento digital.</td>
</tr>
<tr>
<td>FechaActualizacion</td>
<td>Date</td>
<td>Fecha de actualizacion del documento digital.</td>
</tr>
<tr>
<td>FechaVencimiento</td>
<td>Date</td>
<td>Fecha de vencimiento del documento digital.</td>
</tr>
<tr>
<td>TipoDocumentoDigital</td>
<td>String</td>
<td>Tipo del documento digital.</td>
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
<td>No se recibió el identificador de la persona.</td>
</tr>
<tr>
<td>30023</td>
<td>No existe registro para el identificador único.</td>
</tr>
<tr>
<td>30050</td>
<td>La persona indicada no existe.</td>
</tr>
</tbody>
</table>
</div></template>


