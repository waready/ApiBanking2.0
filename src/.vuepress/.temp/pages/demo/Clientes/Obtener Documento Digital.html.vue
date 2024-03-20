<template><div><h1 id="obtener-documento-digital" tabindex="-1"><a class="header-anchor" href="#obtener-documento-digital"><span>Obtener Documento Digital</span></a></h1>
<p>Método para obtener los datos de un documento digital de un cliente.</p>
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
<td>BTClientes.ObtenerDocumentoDigital</td>
<td>RBTPG192</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Documento Digital:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTClientes.ObtenerDocumentoDigital> 
         <bts:Btinreq> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>0868626a064A8B5C60A82434</bts:Token> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Device>10.12.10.159</bts:Device> 
         </bts:Btinreq> 
         <bts:clienteUId>61</bts:clienteUId> 
         <bts:documentoId>56</bts:documentoId> 
      </bts:BTClientes.ObtenerDocumentoDigital> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerDocumentoDigital=' \ 
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
	"clienteUId": "61", 
	"documentoId": "56", 
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
      <BTClientes.ObtenerDocumentoDigitalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10.12.10.159</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>0868626a064A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtDocumentosDigitales> 
            <sBTVersionDocumentoDigital> 
               <FechaEmision>2017-03-24</FechaEmision> 
               <Archivo>RG9jdW1lbnRvIGRlIGVqZW1wbG8=</Archivo> 
               <FechaVencimiento>2018-03-24</FechaVencimiento> 
               <TipoDocumentoDigital>Balance</TipoDocumentoDigital> 
               <Version>1</Version> 
               <Nombre>Balance General.PDF</Nombre> 
               <documentoId>56</documentoId> 
            </sBTVersionDocumentoDigital> 
         </sdtDocumentosDigitales> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>840</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTClientes.ObtenerDocumentoDigital</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2018-11-13</Fecha> 
            <Hora>12:32:19</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTClientes.ObtenerDocumentoDigitalResponse> 
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
                "FechaEmision": "2017-03-24", 
                "Archivo": "RG9jdW1lbnRvIGRlIGVqZW1wbG8=", 
                "FechaVencimiento": "2018-03-24", 
                "TipoDocumentoDigital": "Balance", 
                "Version": 1, 
                "Nombre": "Balance General.PDF", 
                "documentoId": 56 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 842, 
        "Estado": "OK", 
        "Servicio": "BTClientes.ObtenerDocumentoDigital", 
        "Requerimiento": "1", 
        "Fecha": "2018-11-13", 
        "Hora": "12:38:20", 
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
<td>clienteUId</td>
<td>Long</td>
<td>Identificador único de cliente.</td>
</tr>
<tr>
<td>documentoId</td>
<td>Long</td>
<td>Identificador de documento digital.</td>
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
<td>Versión de documento digital.</td>
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
<td>Documento digital codificado en Base 64.</td>
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
<td>No se recibió el identificador de la cuenta.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recibió el identificador de documento.</td>
</tr>
<tr>
<td>30024</td>
<td>No existe registro con el identificador indicado.</td>
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


