<template><div><h1 id="obtener-personas" tabindex="-1"><a class="header-anchor" href="#obtener-personas"><span>Obtener Personas</span></a></h1>
<p>Método para obtener los datos de la/s persona/s con el nombre ingresado.</p>
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
<td>BTPersonas.ObtenerPersonas</td>
<td>RBTPG300</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Personas:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ObtenerPersonas> 
         <bts:Btinreq> 
            <bts:Device>10</bts:Device> 
            <bts:Token>0d402ef5c94A84</bts:Token> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:primerNombre>ALEJANDRO</bts:primerNombre> 
         <bts:segundoNombre></bts:segundoNombre> 
         <bts:primerApellido>VAZQUEZ</bts:primerApellido> 
         <bts:segundoApellido>SZENTANDRASI</bts:segundoApellido> 
      </bts:BTPersonas.ObtenerPersonas> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerPersonas=' \ 
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
	"primerNombre":"ALEJANDRO", 
	"segundoNombre":"", 
	"primerApellido":"VAZQUEZ", 
	"segundoApellido":"SZENTANDRASI" 
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
      <BTPersonas.ObtenerPersonasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10.12.10.118</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>0d402ef5c94A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtPersonas> 
            <sBTPersonaBusqueda> 
               <segundoApellido>SZENTANDRASI</segundoApellido> 
               <nroDocumento>27573084</nroDocumento> 
               <primerApellido>VAZQUEZ</primerApellido> 
               <pais>URUGUAY</pais> 
               <tipoDocumentoId>1</tipoDocumentoId> 
               <tipoDocumento>Cédula Identidad</tipoDocumento> 
               <primerNombre>ALEJANDRO</primerNombre> 
               <segundoNombre/> 
               <fechaNacimiento>1956-02-26</fechaNacimiento> 
               <personaUId>43</personaUId> 
               <paisId>845</paisId> 
            </sBTPersonaBusqueda> 
            <sBTPersonaBusqueda> 
               <segundoApellido>SZENTANDRASI</segundoApellido> 
               <nroDocumento>11380673</nroDocumento> 
               <primerApellido>VAZQUEZ</primerApellido> 
               <pais>URUGUAY</pais> 
               <tipoDocumentoId>1</tipoDocumentoId> 
               <tipoDocumento>Cédula Identidad</tipoDocumento> 
               <primerNombre>ALEJANDRO</primerNombre> 
               <segundoNombre/> 
               <fechaNacimiento>1966-02-26</fechaNacimiento> 
               <personaUId>44</personaUId> 
               <paisId>845</paisId> 
            </sBTPersonaBusqueda> 
            <sBTPersonaBusqueda> 
               <segundoApellido>SZENTANDRASI</segundoApellido> 
               <nroDocumento>27512189</nroDocumento> 
               <primerApellido>VAZQUEZ</primerApellido> 
               <pais>URUGUAY</pais> 
               <tipoDocumentoId>1</tipoDocumentoId> 
               <tipoDocumento>Cédula Identidad</tipoDocumento> 
               <primerNombre>ALEJANDRO</primerNombre> 
               <segundoNombre/> 
               <fechaNacimiento>1976-02-26</fechaNacimiento> 
               <personaUId>48</personaUId> 
               <paisId>845</paisId> 
            </sBTPersonaBusqueda> 
            <sBTPersonaBusqueda> 
               <segundoApellido>SZENTANDRASI</segundoApellido> 
               <nroDocumento>27510989</nroDocumento> 
               <primerApellido>VAZQUEZ</primerApellido> 
               <pais>URUGUAY</pais> 
               <tipoDocumentoId>1</tipoDocumentoId> 
               <tipoDocumento>Cédula Identidad</tipoDocumento> 
               <primerNombre>ALEJANDRO</primerNombre> 
               <segundoNombre/> 
               <fechaNacimiento>1986-02-26</fechaNacimiento> 
               <personaUId>50</personaUId> 
               <paisId>845</paisId> 
            </sBTPersonaBusqueda> 
         </sdtPersonas> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>8477</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPersonas.ObtenerPersonas</Servicio> 
            <Fecha>2019-05-08</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>16:54:26</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPersonas.ObtenerPersonasResponse> 
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
	"sdtPersonas": { 
		"sBTPersonaBusqueda": [ 
			{ 
				"segundoApellido": "SZENTANDRASI", 
				"nroDocumento": "43496418", 
				"primerApellido": "VAZQUEZ", 
				"pais": "URUGUAY", 
				"tipoDocumentoId": "1", 
				"tipoDocumento": "Cédula Identidad", 
				"primerNombre": "ALEJANDRO", 
				"segundoNombre": "", 
				"fechaNacimiento": "1976-02-26", 
				"personaUId": "23", 
				"paisId": "845" 
			}, 
			{ 
				"segundoApellido": "SZENTANDRASI", 
				"nroDocumento": "43496419", 
				"primerApellido": "VAZQUEZ", 
				"pais": "URUGUAY", 
				"tipoDocumentoId": "1", 
				"tipoDocumento": "Cédula Identidad", 
				"primerNombre": "ALEJANDRO", 
				"segundoNombre": "", 
				"fechaNacimiento": "1976-02-26", 
				"personaUId": "46", 
				"paisId": "845" 
			}, 
			{ 
				"segundoApellido": "SZENTANDRASI", 
				"nroDocumento": "27511184", 
				"primerApellido": "VAZQUEZ", 
				"pais": "URUGUAY", 
				"tipoDocumentoId": "1", 
				"tipoDocumento": "Cédula Identidad", 
				"primerNombre": "ALEJANDRO", 
				"segundoNombre": "", 
				"fechaNacimiento": "1976-02-26", 
				"personaUId": "21", 
				"paisId": "845" 
			}, 
			{ 
				"segundoApellido": "SZENTANDRASI", 
				"nroDocumento": "27510189", 
				"primerApellido": "VAZQUEZ", 
				"pais": "URUGUAY", 
				"tipoDocumentoId": "1", 
				"tipoDocumento": "Cédula Identidad", 
				"primerNombre": "ALEJANDRO", 
				"segundoNombre": "", 
				"fechaNacimiento": "1976-02-26", 
				"personaUId": "49", 
				"paisId": "845" 
			}, 
			{ 
				"segundoApellido": "SZENTANDRASI", 
				"nroDocumento": "27510989", 
				"primerApellido": "VAZQUEZ", 
				"pais": "URUGUAY", 
				"tipoDocumentoId": "1", 
				"tipoDocumento": "Cédula Identidad", 
				"primerNombre": "ALEJANDRO", 
				"segundoNombre": "", 
				"fechaNacimiento": "1976-02-26", 
				"personaUId": "50", 
				"paisId": "845" 
			} 
		] 
	}, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 8396, 
        "Estado": "OK", 
        "Servicio": "BTPersonas.ObtenerPersonas", 
        "Requerimiento": "1", 
        "Fecha": "2019-05-07", 
        "Hora": "15:54:44", 
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
<td>primerApellido</td>
<td>String</td>
<td>Primer apellido.</td>
</tr>
<tr>
<td>segundoApellido</td>
<td>String</td>
<td>Segundo apellido.</td>
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
<td>sdtPersonas</td>
<td>sBTPersonaBusqueda</td>
<td>Listado de datos de persona.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTPersonaBusqueda son los siguientes:</p>
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
<td>nroDocumento</td>
<td>String</td>
<td>Número de documento.</td>
</tr>
<tr>
<td>paisId</td>
<td>Short</td>
<td>Identificador del país.</td>
</tr>
<tr>
<td>pais</td>
<td>String</td>
<td>Nombre del país.</td>
</tr>
<tr>
<td>tipoDocumentoId</td>
<td>Short</td>
<td>Identificador de tipo de documento.</td>
</tr>
<tr>
<td>tipoDocumento</td>
<td>String</td>
<td>Descripción del tipo de documento.</td>
</tr>
<tr>
<td>fechaNacimiento</td>
<td>Date</td>
<td>Fecha de nacimiento.</td>
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
<td>30002</td>
<td>Campo primer nombre requerido.</td>
</tr>
<tr>
<td>30003</td>
<td>Campo primer apellido requerido.</td>
</tr>
<tr>
<td>40001</td>
<td>No se encontro persona(s) con el patron de busqueda ingresado.</td>
</tr>
</tbody>
</table>
</div></template>


