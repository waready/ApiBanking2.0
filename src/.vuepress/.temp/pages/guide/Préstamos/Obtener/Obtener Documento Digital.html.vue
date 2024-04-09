<template><div><h1 id="obtener-documento-digital" tabindex="-1"><a class="header-anchor" href="#obtener-documento-digital"><span>Obtener Documento Digital</span></a></h1>
<p>Método para obtener los datos de un documento digital de un préstamo.</p>
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
<td>BTPrestamos.ObtenerDocumentoDigital</td>
<td>RBTPG191</td>
<td>Global</td>
</tr>
</tbody>
</table>
<h3 id="configuracion-backend" tabindex="-1"><a class="header-anchor" href="#configuracion-backend"><span>Configuración Backend</span></a></h3>
<ol>
<li>Se puede parametrizar la opción general por módulo 1416. En caso de estar en 'S', se inhabilitará el control de existencia de la operación en la tabla FSD011.</li>
</ol>
<blockquote>
<p>Ejemplo de invocación al método Obtener Documento Digital:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.ObtenerDocumentoDigital> 
         <bts:Btinreq> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>0868626a064A8B5C60A82434</bts:Token> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Device>10.12.10.159</bts:Device> 
         </bts:Btinreq> 
         <bts:operacionUId>121</bts:operacionUId> 
         <bts:documentoId>35</bts:documentoId> 
      </bts:BTPrestamos.ObtenerDocumentoDigital> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerDocumentoDigital' \ 
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
	"operacionUId": "121", 
	"documentoId": "35", 
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
      <BTPrestamos.ObtenerDocumentoDigitalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10.12.10.159</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>0868626a064A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtDocumentosDigitales> 
            <sBTVersionDocumentoDigital> 
               <FechaEmision>2016-08-09</FechaEmision> 
               <Archivo>RG9jdW1lbnRvIGRlIGVqZW1wbG8=</Archivo> 
               <FechaVencimiento>0000-00-00</FechaVencimiento> 
               <TipoDocumentoDigital>Plan de Pagos</TipoDocumentoDigital> 
               <Version>1</Version> 
               <Nombre>CarpetaDigital.txt</Nombre> 
               <documentoId>35</documentoId> 
            </sBTVersionDocumentoDigital> 
         </sdtDocumentosDigitales> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>888</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPrestamos.ObtenerDocumentoDigital</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2018-11-13</Fecha> 
            <Hora>13:16:43</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPrestamos.ObtenerDocumentoDigitalResponse> 
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
        "sBTVersionDocumentoDigital": [ 
            { 
                "FechaEmision": "2016-08-09", 
                "Archivo": "RG9jdW1lbnRvIGRlIGVqZW1wbG8=", 
                "FechaVencimiento": "0000-00-00", 
                "TipoDocumentoDigital": "Plan de Pagos", 
                "Version": 1, 
                "Nombre": "CarpetaDigital.txt", 
                "documentoId": 35 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 890, 
        "Estado": "OK", 
        "Servicio": "BTPrestamos.ObtenerDocumentoDigital", 
        "Requerimiento": "1", 
        "Fecha": "2018-11-13", 
        "Hora": "13:17:56", 
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
<td>documentoId</td>
<td>Long</td>
<td>Identificador del documento.</td>
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
<td>sBTVersionDocumentoDigital</td>
<td>Datos de version de documento digital.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTVersionDocumentoDigital son los siguientes:</p>
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
<td>Titulo del documento digital.</td>
</tr>
<tr>
<td>FechaEmision</td>
<td>Date</td>
<td>Fecha de emisión del documento digital.</td>
</tr>
<tr>
<td>Archivo</td>
<td>String</td>
<td>Documento digital codificado en base 64.</td>
</tr>
<tr>
<td>FechaVencimiento</td>
<td>Date</td>
<td>Fecha de vencimiento del documento digital.</td>
</tr>
<tr>
<td>TipoDocumentoDigital</td>
<td>String</td>
<td>tipo del documento digital.</td>
</tr>
<tr>
<td>Nombre</td>
<td>String</td>
<td>Nombre del documento digital.</td>
</tr>
<tr>
<td>Version</td>
<td>Int</td>
<td>Número de versión del documento digital.</td>
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
<td>30002</td>
<td>No se recibió el identificador de documento.</td>
</tr>
<tr>
<td>30024</td>
<td>No se recupero la operación para el identificador recibido.</td>
</tr>
<tr>
<td>30031</td>
<td>El documento digital no existe.</td>
</tr>
<tr>
<td>30032</td>
<td>Ocurrio un error al obtener la ultima versión del documento.</td>
</tr>
</tbody>
</table>
</div></template>


