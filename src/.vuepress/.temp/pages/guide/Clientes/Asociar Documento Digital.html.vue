<template><div><h1 id="asociar-documento-digital" tabindex="-1"><a class="header-anchor" href="#asociar-documento-digital"><span>Asociar Documento Digital</span></a></h1>
<p>Método para asociar documento digital a una cuenta.</p>
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
<td>BTClientes.AsociarDocumentoDigital</td>
<td>RBTPG166</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Asociar Documento Digital:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTClientes.AsociarDocumentoDigital> 
         <bts:Btinreq> 
            <bts:Device>10</bts:Device> 
            <bts:Token>5744be79064A8B5C60A82434</bts:Token> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:clienteUId>81</bts:clienteUId> 
         <bts:tipoDocumentoId>6</bts:tipoDocumentoId> 
         <bts:nombre>Ejemplo</bts:nombre> 
         <bts:archivoCodificado>RG9jdW1lbnRvIGRlIGVqZW1wbG8=</bts:archivoCodificado> 
         <bts:fechaEmision>2010-10-10</bts:fechaEmision> 
         <bts:fechaVencimiento>2020-10-10</bts:fechaVencimiento> 
      </bts:BTClientes.AsociarDocumentoDigital> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?AsociarDocumentoDigital' \ 
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
	"clienteUId":"81", 
    "tipoDocumentoId":"6", 
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
      <BTClientes.AsociarDocumentoDigitalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>5744be79064A8B5C60A82434</Token> 
         </Btinreq> 
         <documentoId>107</documentoId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>746</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTClientes.AsociarDocumentoDigital</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2018-11-12</Fecha> 
            <Hora>13:19:49</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTClientes.AsociarDocumentoDigitalResponse> 
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
    "documentoId": 110, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 752, 
        "Estado": "OK", 
        "Servicio": "BTClientes.AsociarDocumentoDigital", 
        "Requerimiento": "1", 
        "Fecha": "2018-11-12", 
        "Hora": "13:40:53", 
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
<td>clienteUId</td>
<td>Long</td>
<td>Identificador único de cliente.</td>
</tr>
<tr>
<td>tipoDocumentoId</td>
<td>Long</td>
<td>Identificador del tipo de documento.</td>
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
<td>documentoId</td>
<td>Long</td>
<td>Identificador del documento asociado.</td>
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
<td>No se recibió el identificador de tipo de documento digital.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recibió nombre.</td>
</tr>
<tr>
<td>30004</td>
<td>No se recibió el identificador de cliente.</td>
</tr>
<tr>
<td>30013</td>
<td>No existe registro para el identificador indicado.</td>
</tr>
<tr>
<td>30041</td>
<td>Debe ingresar la fecha de emisión del documento.</td>
</tr>
<tr>
<td>30042</td>
<td>Debe ingresar la fecha de vencimiento del documento.</td>
</tr>
<tr>
<td>31030</td>
<td>Ocurrio un error al recibir el archivo, puede que el mismo este corrupto.</td>
</tr>
<tr>
<td>31013</td>
<td>Error de configuración: El vínculo de un tipo de documento digital no puede estar vacío.</td>
</tr>
<tr>
<td>31024</td>
<td>Error de configuración: El vínculo de un tipo de documento digital no puede ser distinto al de la entidad invocadora.</td>
</tr>
</tbody>
</table>
</div></template>


