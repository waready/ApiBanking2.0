<template><div><h1 id="crear-conyuge" tabindex="-1"><a class="header-anchor" href="#crear-conyuge"><span>Crear Cónyuge</span></a></h1>
<p>Método para crear una persona y asociar una relación de cónyuge con otra.</p>
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
<td>BTPersonas.CrearConyuge</td>
<td>RBTPG396</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Vinculos Juridicos:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.CrearConyuge> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento/> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
		 <bts:personaUId>1</bts:personaUId> 
         <bts:estadoCivilId>2</bts:estadoCivilId> 
         <bts:sdtPersona> 
            <bts:paisDocumentoId>845</bts:paisDocumentoId> 
            <bts:paisDocumento></bts:paisDocumento> 
            <bts:tipoDocumentoId>1</bts:tipoDocumentoId> 
            <bts:tipoDocumento></bts:tipoDocumento> 
            <bts:nroDocumento>96900034</bts:nroDocumento> 
            <bts:primerApellido>CASTRO</bts:primerApellido> 
            <bts:segundoApellido></bts:segundoApellido> 
            <bts:primerNombre>MARCOS</bts:primerNombre> 
            <bts:segundoNombre></bts:segundoNombre> 
            <bts:sexo>M</bts:sexo> 
         </bts:sdtPersona> 
      </bts:BTPersonas.CrearConyuge> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?CrearConyuge=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 0ccca369-0793-d62f-ebc0-3033cc750dad' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
	"personaUId": "1", 
	"estadoCivilId": "2", 
	"sdtPersona": { 
	  "paisDocumentoId": "845", 
	  "tipoDocumentoId": "1", 
	  "nroDocumento": "96900034", 
	  "primerApellido": "CASTRO", 
	  "primerNombre": "MARCOS", 
	  "sexo": "M" 
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
      <BTPersonas.CrearConyugeResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>879953578CD285A89A23FBEE</Token> 
            <Device>MC</Device> 
         </Btinreq> 
         <personaUIdConyuge>10023</personaUIdConyuge> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTPersonas.CrearConyuge</Servicio> 
            <Fecha>2022-06-02</Fecha> 
            <Hora>16:25:37</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>6</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTPersonas.CrearConyugeResponse> 
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
    "personaUIdConyuge": "10023", 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "827", 
        "Estado": "OK", 
        "Servicio": "BTPersonas.CrearConyuge", 
        "Fecha": "2017-12-17", 
        "Requerimiento": "", 
        "Hora": "18:47:21", 
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
<tr>
<td>estadoCivilId</td>
<td>String</td>
<td>Identificador del estado civil.</td>
</tr>
<tr>
<td>sdtPersona</td>
<td>sBTDatosBasicosPersona</td>
<td>Datos del cónyuge.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTDatosBasicosPersona son los siguientes:</p>
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
<td>paisDocumentoId</td>
<td>Short</td>
<td>Identificador del país.</td>
</tr>
<tr>
<td>paisDocumento</td>
<td>String</td>
<td>Nombre del país.</td>
</tr>
<tr>
<td>tipoDocumentoId</td>
<td>Short</td>
<td>Identificador del tipo de documento.</td>
</tr>
<tr>
<td>tipoDocumento</td>
<td>String</td>
<td>Nombre del tipo de documento.</td>
</tr>
<tr>
<td>nroDocumento</td>
<td>String</td>
<td>Número de documento.</td>
</tr>
<tr>
<td>primerApellido</td>
<td>String</td>
<td>Primer apellido.</td>
</tr>
<tr>
<td>segundoApellido</td>
<td>String</td>
<td>Segundo apellido.</td>
</tr>
<tr>
<td>primerNombre</td>
<td>String</td>
<td>Primer nombre.</td>
</tr>
<tr>
<td>segundoNombre</td>
<td>String</td>
<td>Segundo nombre.</td>
</tr>
<tr>
<td>sexo</td>
<td>String</td>
<td>Sexo (M/F).</td>
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
<td>personaUIdConyuge</td>
<td>Long</td>
<td>Identificador único del cónyuge.</td>
</tr>
</tbody>
</table>
<h3 id="errores" tabindex="-1"><a class="header-anchor" href="#errores"><span>Errores</span></a></h3>
<table>
<thead>
<tr>
<th>Código</th>
<th>Descripcion</th>
</tr>
</thead>
<tbody>
<tr>
<td>30001</td>
<td>No se recibió el identificador de persona.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recibió el código de estado civil.</td>
</tr>
<tr>
<td>40001</td>
<td>Debe ingresar País del Documento.</td>
</tr>
<tr>
<td>40002</td>
<td>El País del Documento no existe.</td>
</tr>
<tr>
<td>40003</td>
<td>Debe ingresar Tipo de Documento.</td>
</tr>
<tr>
<td>40004</td>
<td>El Tipo de Documento no existe.</td>
</tr>
<tr>
<td>40005</td>
<td>Debe ingresar Nro de Documento.</td>
</tr>
<tr>
<td>40006</td>
<td>Número de Documento incorrecto.</td>
</tr>
<tr>
<td>40007</td>
<td>Debe ingresar Primer Apellido.</td>
</tr>
<tr>
<td>40008</td>
<td>Debe ingresar Primer Nombre.</td>
</tr>
<tr>
<td>40012</td>
<td>Debe ingresar Sexo.</td>
</tr>
<tr>
<td>40016</td>
<td>Caracteres incorrectos en nombre/apellido.</td>
</tr>
<tr>
<td>40051</td>
<td>La persona ya existe.</td>
</tr>
<tr>
<td>70001</td>
<td>El estado civil ingresado no admite cónyuge.</td>
</tr>
</tbody>
</table>
</div></template>


