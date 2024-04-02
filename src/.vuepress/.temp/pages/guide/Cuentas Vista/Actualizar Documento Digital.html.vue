<template><div><h1 id="actualizar-documento-digital" tabindex="-1"><a class="header-anchor" href="#actualizar-documento-digital"><span>Actualizar Documento Digital</span></a></h1>
<p>Método para actualizar un documento digital de la operación recibida.</p>
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
<td>BTCuentasVista.ActualizarDocumentoDigital</td>
<td>RBTPG176</td>
<td>Global</td>
</tr>
</tbody>
</table>
<h3 id="configuracion-backend" tabindex="-1"><a class="header-anchor" href="#configuracion-backend"><span>Configuración Backend</span></a></h3>
<ol>
<li>Se puede parametrizar la opción general por módulo 1416. En caso de estar en 'S', se inhabilitará el control de existencia de la operación en la tabla FSD011.</li>
</ol>
<blockquote>
<p>Ejemplo de invocación al método Actualizar Documento Digital:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasVista.ActualizarDocumentoDigital> 
         <bts:Btinreq> 
		  <bts:Device>10.12.10.159</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>4724b65a9d4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:operacionUId>21</bts:operacionUId> 
         <bts:documentoId>86</bts:documentoId> 
         <bts:nombre>Prueba actualizar</bts:nombre> 
         <bts:archivoCodificado>RG9jdW1lbnRvIGRlIGVqZW1wbG8=</bts:archivoCodificado> 
         <bts:fechaVencimiento>2020-10-10</bts:fechaVencimiento> 
         <bts:fechaEmision>2010-10-10</bts:fechaEmision> 
      </bts:BTCuentasVista.ActualizarDocumentoDigital> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?ActualizarDocumentoDigital=' \ 
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
	"operacionUId":"21", 
    "documentoId":"86", 
    "nombre":"Prueba actualizar", 
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
      <BTCuentasVista.ActualizarDocumentoDigitalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10.12.10.159</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>b98a5858014A8B5C60A82434</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>3105</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCuentasVista.ActualizarDocumentoDigital</Servicio> 
            <Fecha>2018-11-21</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>12:00:50</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCuentasVista.ActualizarDocumentoDigitalResponse> 
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
        "Numero": "3103", 
        "Estado": "OK", 
        "Servicio": "BTCuentasVista.ActualizarDocumentoDigital", 
        "Fecha": "2018-11-21", 
        "Requerimiento": "1", 
        "Hora": "12:00:07", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group>  
### Datos de entrada 
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
<td>Identificador del documento digital.</td>
</tr>
<tr>
<td>nombre</td>
<td>String</td>
<td>Nombre del documento.</td>
</tr>
<tr>
<td>archivoCodificado</td>
<td>String</td>
<td>Archivo a asociar codificado en Base 64.</td>
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
<td>30003</td>
<td>No se recibió el identificador de la operación.</td>
</tr>
<tr>
<td>30021</td>
<td>No se recupero el identificador para la operación recibida.</td>
</tr>
<tr>
<td>30051</td>
<td>Debe ingresar la fecha de emisión del documento.</td>
</tr>
<tr>
<td>30052</td>
<td>Debe ingresar la fecha de vencimiento del documento.</td>
</tr>
<tr>
<td>30054</td>
<td>El documento ingresado no pertenece a la operación.</td>
</tr>
<tr>
<td>30130</td>
<td>Ocurrio un error al recibir el archivo, puede que el mismo este corrupto.</td>
</tr>
<tr>
<td>31023</td>
<td>Error de configuración: El vínculo de un tipo de documento digital no puede estar vacío.</td>
</tr>
<tr>
<td>31024</td>
<td>Error de configuración: El vínculo de un tipo de documento digital no puede ser distinto al de la entidad invocadora.</td>
</tr>
</tbody>
</table>
</div></template>


