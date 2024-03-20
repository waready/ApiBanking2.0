<template><div><h1 id="eliminar-documento-digital" tabindex="-1"><a class="header-anchor" href="#eliminar-documento-digital"><span>Eliminar Documento Digital</span></a></h1>
<p>Método para eliminar un documento digital de la operación recibida.</p>
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
<td>BTCuentasVista.EliminarDocumentoDigital</td>
<td>RBTPG177</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Eliminar Documento Digital:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasVista.EliminarDocumentoDigital> 
         <bts:Btinreq> 
		  <bts:Device>10.12.10.159</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>b98a5858014A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:operacionUId>21</bts:operacionUId> 
         <bts:documentoId>87</bts:documentoId> 
      </bts:BTCuentasVista.EliminarDocumentoDigital> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?EliminarDocumentoDigital=' \ 
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
	"documentoId": "87", 
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
      <BTCuentasVista.EliminarDocumentoDigitalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
		    <bts:Device>10.12.10.159</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>b98a5858014A8B5C60A82434</bts:Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>3110</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCuentasVista.EliminarDocumentoDigital</Servicio> 
            <Fecha>2018-11-20</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>12:12:07</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCuentasVista.EliminarDocumentoDigitalResponse> 
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
        "Numero": "3109", 
        "Estado": "OK", 
        "Servicio": "BTCuentasVista.EliminarDocumentoDigital", 
        "Fecha": "2018-11-21", 
        "Requerimiento": "1", 
        "Hora": "12:11:36", 
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
<td>30003</td>
<td>No se recibió el identificador de la operación.</td>
</tr>
<tr>
<td>30021</td>
<td>No se recupero la operación para el identificador recibido.</td>
</tr>
<tr>
<td>30531</td>
<td>El registro no existe.</td>
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


