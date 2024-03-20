<template><div><h1 id="obtener-documentos-digitales" tabindex="-1"><a class="header-anchor" href="#obtener-documentos-digitales"><span>Obtener Documentos Digitales</span></a></h1>
<p>Método para obtener una lista de los documentos digitales asociados a una operación de depósitos a plazo.</p>
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
<td>BTDepositosAPlazo.ObtenerDocumentosDigitales</td>
<td>RBTPG482</td>
<td>Global</td>
</tr>
</tbody>
</table>
<h3 id="configuracion-backend" tabindex="-1"><a class="header-anchor" href="#configuracion-backend"><span>Configuración Backend</span></a></h3>
<ol>
<li>Se puede parametrizar la opción general por módulo 1416. En caso de estar en 'S', se inhabilitará el control de existencia de la operación en la tabla FSD011.</li>
</ol>
<blockquote>
<p>Ejemplo de invocación al método Obtener Documentos Digitales:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTDepositosAPlazo.ObtenerDocumentosDigitales> 
         <bts:Btinreq> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Device>GP</bts:Device> 
            <bts:Token>65386256C895CD01D7DC796E</bts:Token> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:operacionUId>1018</bts:operacionUId> 
      </bts:BTDepositosAPlazo.ObtenerDocumentosDigitales> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDepositosAPlazo?ObtenerDocumentosDigitales' \ 
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
	"operacionUId": "1018", 
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
      <BTDepositosAPlazo.ObtenerDocumentosDigitalesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GP</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>65386256C895CD01D7DC796E</Token> 
         </Btinreq> 
         <sdtDocumentoDigital> 
            <sBTDocumentoDigital> 
               <Titulo>PRUEBA</Titulo> 
               <FechaActualizacion>2015-01-01</FechaActualizacion> 
               <FechaVencimiento/> 
               <TipoDocumentoDigital>Plan de Pagos</TipoDocumentoDigital> 
               <DocumentoId>265</DocumentoId> 
            </sBTDocumentoDigital> 
         </sdtDocumentoDigital> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>12028</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTDepositosAPlazo.ObtenerDocumentosDigitales</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2023-05-23</Fecha> 
            <Canal>BTDIGITAL</Canal> 
            <Hora>12:50:30</Hora> 
         </Btoutreq> 
      </BTDepositosAPlazo.ObtenerDocumentosDigitalesResponse> 
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
    "sdtDocumentoDigital": { 
        "sBTDocumentoDigital": { 
            "Titulo": "PRUEBA GABO", 
            "FechaActualizacion": "2015-01-01", 
            "FechaVencimiento": "", 
            "TipoDocumentoDigital": "Plan de Pagos", 
            "DocumentoId": "265" 
        } 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 823, 
        "Estado": "OK", 
        "Servicio": "BTDepositosAPlazo.ObtenerDocumentosDigitales", 
        "Requerimiento": "1", 
        "Fecha": "2018-11-12", 
        "Hora": "17:47:27", 
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
<td>operacionUId</td>
<td>Long</td>
<td>Identificador único de operación.</td>
</tr>
<tr>
<td>codigoSistema</td>
<td>Short</td>
<td>[Hidden: Valor fijo '3' para este método].</td>
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
<td>Listado de documentos digitales.</td>
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
<td>titulo</td>
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
<tr>
<td>documentoId</td>
<td>Long</td>
<td>Identificador del documento digital.</td>
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
<td>No se recibió el identificador de la operación.</td>
</tr>
<tr>
<td>30021</td>
<td>No se recupero la operación para el identificador recibido.</td>
</tr>
</tbody>
</table>
</div></template>


