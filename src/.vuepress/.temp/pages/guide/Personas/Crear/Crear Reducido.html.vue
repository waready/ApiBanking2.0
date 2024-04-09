<template><div><h1 id="crear-reducido" tabindex="-1"><a class="header-anchor" href="#crear-reducido"><span>Crear Reducido</span></a></h1>
<p>Método para dar de alta de manera reducida a una persona.</p>
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
<td>BTPersonas.CrearReducido</td>
<td>RBTPG534</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Crear Reducido:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.CrearReducido> 
         <bts:Btinreq> 
            <bts:Requerimiento>0</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Device>GZ</bts:Device> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>4C814AD45391BD0C360941C7</bts:Token> 
         </bts:Btinreq> 
         <bts:sdtPersona> 
            <bts:paisDocumentoId>845</bts:paisDocumentoId> 
            <bts:apartamento></bts:apartamento> 
            <bts:sectorId></bts:sectorId> 
            <bts:tipoDocumentoId>1</bts:tipoDocumentoId> 
            <bts:ingresos></bts:ingresos> 
            <bts:nacionalidad></bts:nacionalidad> 
            <bts:ocupacionId>1</bts:ocupacionId> 
            <bts:sexo>M</bts:sexo> 
            <bts:barrio></bts:barrio> 
            <bts:estadoCivil></bts:estadoCivil> 
            <bts:direccion></bts:direccion> 
            <bts:nroDocumento>52116335</bts:nroDocumento> 
            <bts:localidad></bts:localidad> 
            <bts:clasificacionInternaId></bts:clasificacionInternaId> 
            <bts:segundoNombre></bts:segundoNombre> 
            <bts:telefonoCelular></bts:telefonoCelular> 
            <bts:departamentoId></bts:departamentoId> 
            <bts:actividadLaboral></bts:actividadLaboral> 
            <bts:nacionalidadId></bts:nacionalidadId> 
            <bts:localidadId></bts:localidadId> 
            <bts:clasificacionInterna></bts:clasificacionInterna> 
            <bts:paisDomicilioId></bts:paisDomicilioId> 
            <bts:sector></bts:sector> 
            <bts:telefonoFijo></bts:telefonoFijo> 
            <bts:referencia></bts:referencia> 
            <bts:codigoPostal></bts:codigoPostal> 
            <bts:primerNombre>Gonzalo</bts:primerNombre> 
            <bts:fechaNacimiento>1980-10-20</bts:fechaNacimiento> 
            <bts:actividadLaboralId></bts:actividadLaboralId> 
            <bts:primerApellido>Zanelli</bts:primerApellido> 
            <bts:estadoCivilId>1</bts:estadoCivilId> 
            <bts:segundoApellido></bts:segundoApellido> 
            <bts:paisDocumento></bts:paisDocumento> 
            <bts:fechaInicioActividad></bts:fechaInicioActividad> 
            <bts:ocupacion></bts:ocupacion> 
            <bts:paisDomicilio></bts:paisDomicilio> 
            <bts:departamento></bts:departamento> 
            <bts:fechaVencimiento></bts:fechaVencimiento> 
            <bts:correoElectronico>mail@mail.com</bts:correoElectronico> 
            <bts:numeroPuerta></bts:numeroPuerta> 
            <bts:calle></bts:calle> 
            <bts:barrioId></bts:barrioId> 
            <bts:tipoDocumento></bts:tipoDocumento> 
         </bts:sdtPersona> 
      </bts:BTPersonas.CrearReducido> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?CrearReducido=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 631e45d0-2c12-1ccc-7e5c-a067d4de5fb8' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "GZ", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
   "personaUId":"2", 
   "sdtPersona": { 
        "paisDocumentoId": 845, 
        "apartamento": "", 
        "sectorId": "", 
        "tipoDocumentoId": 1, 
        "ingresos": "", 
        "nacionalidad": "", 
        "ocupacionId": 1, 
        "sexo": "M", 
        "barrio": "", 
        "estadoCivil": "", 
        "direccion": "", 
        "nroDocumento": 52116335, 
        "localidad": "", 
        "clasificacionInternaId": "", 
        "segundoNombre": "", 
        "telefonoCelular": "", 
        "departamentoId": "", 
        "actividadLaboral": "", 
        "nacionalidadId": "", 
        "localidadId": "", 
        "clasificacionInterna": "", 
        "paisDomicilioId": "", 
        "sector": "", 
        "telefonoFijo": "", 
        "referencia": "", 
        "codigoPostal": "", 
        "primerNombre": "Gonzalo", 
        "fechaNacimiento": "1980-10-20", 
        "actividadLaboralId": "", 
        "primerApellido": "Zanelli", 
        "estadoCivilId": 1, 
        "segundoApellido": "", 
        "paisDocumento": "", 
        "fechaInicioActividad": "", 
        "ocupacion": "", 
        "paisDomicilio": "", 
        "departamento": "", 
        "fechaVencimiento": "", 
        "correoElectronico": "mail@mail.com", 
        "numeroPuerta": "", 
        "calle": "", 
        "barrioId": "", 
        "tipoDocumento": "" 
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
      <BTPersonas.CrearReducidoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GZ</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>0</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>4C814AD45391BD0C360941C7</Token> 
         </Btinreq> 
         <personaUId>8841</personaUId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>228443</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPersonas.CrearReducido</Servicio> 
            <Requerimiento>0</Requerimiento> 
            <Fecha>2023-10-27</Fecha> 
            <Hora>11:12:09</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPersonas.CrearReducidoResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
		"Device": "GZ", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
   "personaUId": 8841, 
   "Erroresnegocio": { 
       "BTErrorNegocio": [] 
   }, 
   "Btoutreq": { 
       "Numero": "835", 
       "Estado": "OK", 
       "Servicio": "BTPersonas.CrearReducidoResponse", 
       "Fecha": "2017-12-18", 
       "Requerimiento": "", 
       "Hora": "01:48:53", 
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
<td>sdtPersona</td>
<td>sBTPersona1</td>
<td>Datos de la persona.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTPersona1 son los siguientes:</p>
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
<td>Identificador del país del documento.</td>
</tr>
<tr>
<td>paisDocumento</td>
<td>String</td>
<td>Nombre del país del documento.</td>
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
<td>fechaVencimiento</td>
<td>Date</td>
<td>Fecha de vencimiento de documento.</td>
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
<tr>
<td>fechaNacimiento</td>
<td>Date</td>
<td>Fecha de nacimiento.</td>
</tr>
<tr>
<td>estadoCivilId</td>
<td>String</td>
<td>Identificador de estado civil.</td>
</tr>
<tr>
<td>estadoCivil</td>
<td>String</td>
<td>Descripción de estado civil.</td>
</tr>
<tr>
<td>nacionalidadId</td>
<td>Short</td>
<td>Identificador del país de nacimiento.</td>
</tr>
<tr>
<td>nacionalidad</td>
<td>String</td>
<td>Nombre del país de nacimiento.</td>
</tr>
<tr>
<td>ocupacionId</td>
<td>Int</td>
<td>Identificador de ocupación.</td>
</tr>
<tr>
<td>ocupacion</td>
<td>String</td>
<td>Descripción de ocupación.</td>
</tr>
<tr>
<td>actividadLaboralId</td>
<td>Int</td>
<td>Identificador de actividad laboral.</td>
</tr>
<tr>
<td>actividadLaboral</td>
<td>String</td>
<td>Identificador de actividad laboral.</td>
</tr>
<tr>
<td>fechaInicioActividad</td>
<td>Date</td>
<td>Fecha inicio actividad.</td>
</tr>
<tr>
<td>ingresos</td>
<td>Double</td>
<td>Ingresos.</td>
</tr>
<tr>
<td>paisDomicilioId</td>
<td>Short</td>
<td>Identificador del país de domicilio.</td>
</tr>
<tr>
<td>paisDomicilio</td>
<td>String</td>
<td>Nombre del país de domicilio.</td>
</tr>
<tr>
<td>departamentoId</td>
<td>Int</td>
<td>Identificador de departamento.</td>
</tr>
<tr>
<td>departamento</td>
<td>String</td>
<td>Nombre de departamento.</td>
</tr>
<tr>
<td>localidadId</td>
<td>Int</td>
<td>Identificador de localidad.</td>
</tr>
<tr>
<td>localidad</td>
<td>String</td>
<td>Nombre de localidad.</td>
</tr>
<tr>
<td>barrioId</td>
<td>Int</td>
<td>Identificador de barrio.</td>
</tr>
<tr>
<td>barrio</td>
<td>String</td>
<td>Nombre de barrio.</td>
</tr>
<tr>
<td>calle</td>
<td>String</td>
<td>Calle.</td>
</tr>
<tr>
<td>numeroPuerta</td>
<td>String</td>
<td>Número de puerta.</td>
</tr>
<tr>
<td>apartamento</td>
<td>String</td>
<td>Apartamento.</td>
</tr>
<tr>
<td>codigoPostal</td>
<td>String</td>
<td>Código postal.</td>
</tr>
<tr>
<td>telefonoFijo</td>
<td>String</td>
<td>Teléfono fijo.</td>
</tr>
<tr>
<td>telefonoCelular</td>
<td>String</td>
<td>Teléfono celular.</td>
</tr>
<tr>
<td>correoElectronico</td>
<td>String</td>
<td>Correo electronico.</td>
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
<td>personaUId</td>
<td>Long</td>
<td>Identificador único de persona.</td>
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
<td>Debe ingresar País del Documento.</td>
</tr>
<tr>
<td>30002</td>
<td>Debe ingresar Tipo de Documento.</td>
</tr>
<tr>
<td>30003</td>
<td>Debe ingresar Nro de Documento.</td>
</tr>
<tr>
<td>30004</td>
<td>Debe ingresar apellido paterno.</td>
</tr>
<tr>
<td>30005</td>
<td>Debe ingresar primer nombre.</td>
</tr>
<tr>
<td>30006</td>
<td>Debe ingresar fecha de nacimiento.</td>
</tr>
<tr>
<td>30007</td>
<td>Debe ingresar sexo.</td>
</tr>
<tr>
<td>30008</td>
<td>Debe ingresar estado civil.</td>
</tr>
<tr>
<td>30009</td>
<td>Debe ingresar ocupación.</td>
</tr>
</tbody>
</table>
</div></template>


