<template><div><h1 id="obtener-documentos-digitales" tabindex="-1"><a class="header-anchor" href="#obtener-documentos-digitales"><span>Obtener Documentos Digitales</span></a></h1>
<p>Método para obtener una lista de los documentos digitales asociados a una cuenta corriente o cuenta de ahorro.</p>
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
<td>BTCuentasVista.ObtenerDocumentosDigitales</td>
<td>RBTPG199</td>
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
      <bts:BTCuentasVista.ObtenerDocumentosDigitales> 
         <bts:Btinreq> 
		  <bts:Device>10.12.10.159</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>1355f5da724A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:operacionUId>21</bts:operacionUId> 
      </bts:BTCuentasVista.ObtenerDocumentosDigitales> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?ObtenerDocumentosDigitales=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: dc197965-60bc-3f23-3367-5902a0392e1d' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
	"operacionUId": "21", 
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
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <SOAP-ENV:Body> 
      <BTCuentasVista.ObtenerDocumentosDigitalesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10.12.10.159</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>1355f5da724A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtDocumentosDigitales> 
            <sBTDocumentoDigitalns:sBTDocumentoDigital xmlns:sBTDocumentoDigitalns="http://uy.com.dlya.bantotal/BTSOA/" xmlns="ServiciosBT"> 
               <DocumentoId>87</DocumentoId> 
               <TipoDocumentoDigital>Contrato</TipoDocumentoDigital> 
               <Titulo>Prueba Asociar Contrato</Titulo> 
               <FechaActualizacion>2020-10-10</FechaActualizacion> 
               <FechaVencimiento>2010-10-10</FechaVencimiento> 
            </sBTDocumentoDigitalns:sBTDocumentoDigital> 
         </sdtDocumentosDigitales> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>3090</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCuentasVista.ObtenerDocumentosDigitales</Servicio> 
            <Fecha>2018-11-20</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>17:59:40</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCuentasVista.ObtenerDocumentosDigitalesResponse> 
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
    "sdtDocumentosDigitales": { 
        "sBTDocumentoDigital": [ 
            { 
                "Titulo": "Prueba Asociar Contrato", 
                "FechaActualizacion": "2020-10-10", 
                "FechaVencimiento": "2010-10-10", 
                "TipoDocumentoDigital": "Contrato", 
                "DocumentoId": "87" 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "3091", 
        "Estado": "OK", 
        "Servicio": "BTCuentasVista.ObtenerDocumentosDigitales", 
        "Fecha": "2018-11-20", 
        "Requerimiento": "1", 
        "Hora": "18:01:45", 
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
<td>documentoId del documento digital.</td>
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
<td>30004</td>
<td>La operación ingresada no corresponde a una cuenta vista.</td>
</tr>
<tr>
<td>30021</td>
<td>No se recupero la operación para el identificador recibido.</td>
</tr>
</tbody>
</table>
</div></template>


