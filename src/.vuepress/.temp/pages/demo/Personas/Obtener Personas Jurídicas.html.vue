<template><div><h1 id="obtener-personas-juridicas" tabindex="-1"><a class="header-anchor" href="#obtener-personas-juridicas"><span>Obtener Personas Jurídicas</span></a></h1>
<p>Método para obtener un listado de personas jurídicas (10 máximo), dada una razón social.</p>
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
<td>BTPersonas.ObtenerPersonasJuridicas</td>
<td>RBTPG159</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Personas Jurídicas:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ObtenerPersonasJuridicas> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>1839023315CD285A89A23FBE</bts:Token> 
            <bts:Device>GP</bts:Device> 
         </bts:Btinreq> 
         <bts:razonSocial>BANCO</bts:razonSocial> 
      </bts:BTPersonas.ObtenerPersonasJuridicas> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas?ObtenerPersonasJuridicas' \ 
	-H 'cache-control: no-cache' \ 
	-H 'content-type: application/json' \ 
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
	-d '{ 
	"Btinreq": { 
		"Device": "GP", 
		"Usuario": "INSTALADOR", 
		"Requerimiento": "1", 
		"Canal": "BTDIGITAL", 
		"Token": "1839023315CD285A89A23FBE" 
	}, 
   "razonSocial": "BANCO" 
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
      <BTPersonas.ObtenerPersonasJuridicasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>1839023315CD285A89A23FBE</Token> 
            <Device>GP</Device> 
         </Btinreq> 
         <sdtPersonasJuridicas> 
            <sBTPersonaJuridica> 
               <personaUId>10014</personaUId> 
               <paisId>845</paisId> 
               <pais>URUGUAY</pais> 
               <tipoDocumentoId>2</tipoDocumentoId> 
               <tipoDocumento>RUT</tipoDocumento> 
               <nroDocumento>214567892142</nroDocumento> 
               <razonSocial>BANCO MODELO</razonSocial> 
               <fechaConstitucion>2007-08-22</fechaConstitucion> 
            </sBTPersonaJuridica> 
            <sBTPersonaJuridica> 
               <personaUId>10015</personaUId> 
               <paisId>845</paisId> 
               <pais>URUGUAY</pais> 
               <tipoDocumentoId>99</tipoDocumentoId> 
               <tipoDocumento>Inst. Financiera</tipoDocumento> 
               <nroDocumento>47885203</nroDocumento> 
               <razonSocial>PROPIO BANCO</razonSocial> 
               <fechaConstitucion>0000-00-00</fechaConstitucion> 
            </sBTPersonaJuridica> 
         </sdtPersonasJuridicas> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTPersonas.ObtenerPersonasJuridicas</Servicio> 
            <Fecha>2020-10-20</Fecha> 
            <Hora>12:53:17</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>7532</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTPersonas.ObtenerPersonasJuridicasResponse> 
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
   "sdtPersonasJuridicas": { 
        "sBTPersonaJuridica": [ 
            { 
               "personaUId": "10014", 
               "paisId": "845", 
               "pais": "URUGUAY", 
               "tipoDocumentoId": "2", 
               "tipoDocumento": "RUT", 
               "nroDocumento": "214567892142", 
               "razonSocial": "BANCO MODELO", 
               "fechaConstitucion": "2007-08-22", 
            }, 
            { 
               "personaUId": "10015", 
               "paisId": "845", 
               "pais": "URUGUAY", 
               "tipoDocumentoId": "99", 
               "tipoDocumento": "Inst. Financiera", 
               "nroDocumento": "47885203", 
               "razonSocial": "PROPIO BANCO", 
               "fechaConstitucion": "0000-00-00", 
            }, 
        ] 
    }, 
   "Erroresnegocio": { 
      "BTErrorNegocio": [] 
   }, 
   "Btoutreq": { 
      "Numero": "80", 
      "Estado": "OK", 
      "Servicio": "BTPersonas.ObtenerPersonasJuridicas", 
      "Fecha": "2018-05-04", 
      "Requerimiento": "1", 
      "Hora": "15:54:29", 
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
<td>razonSocial</td>
<td>String</td>
<td>Razón social.</td>
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
<td>sdtPersonasJuridicas</td>
<td>sBTPersonaJuridica</td>
<td>Listado de personas jurídicas.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTPersonaJuridica son los siguientes:</p>
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
<td>personaUId</td>
<td>Long</td>
<td>Identificador único de persona.</td>
</tr>
<tr>
<td>paisId</td>
<td>Short</td>
<td>Identificador de país.</td>
</tr>
<tr>
<td>pais</td>
<td>String</td>
<td>Nombre de país.</td>
</tr>
<tr>
<td>tipoDocumentoId</td>
<td>Short</td>
<td>Identificador de tipo de documento.</td>
</tr>
<tr>
<td>tipoDocumento</td>
<td>String</td>
<td>Nombre de tipo de documento.</td>
</tr>
<tr>
<td>nroDocumento</td>
<td>String</td>
<td>Número de documento.</td>
</tr>
<tr>
<td>razonSocial</td>
<td>String</td>
<td>Razón social.</td>
</tr>
<tr>
<td>fechaConstitucion</td>
<td>Date</td>
<td>Fecha de constitución.</td>
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
<td>Campo Razón Social requerido.</td>
</tr>
<tr>
<td>40001</td>
<td>No se encontró ninguna persona jurídica con el patron de busqueda ingresado.</td>
</tr>
</tbody>
</table>
</div></template>


