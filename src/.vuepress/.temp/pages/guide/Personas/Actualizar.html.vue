<template><div><h1 id="actualizar" tabindex="-1"><a class="header-anchor" href="#actualizar"><span>Actualizar</span></a></h1>
<p>Método para actualizar los datos de una persona.</p>
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
<td>BTPersonas.Actualizar</td>
<td>RBTPG398</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Actualizar:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.Actualizar> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>0306ebbd9c4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
		 <bts:personaUId>2</bts:personaUId> 
         <bts:sdtPersona> 
            <bts:paisDocumentoId>845</bts:paisDocumentoId> 
            <bts:paisDocumento></bts:paisDocumento> 
            <bts:tipoDocumentoId>1</bts:tipoDocumentoId> 
            <bts:tipoDocumento></bts:tipoDocumento> 
            <bts:nroDocumento>27573084</bts:nroDocumento> 
            <bts:segundoNombre/> 
            <bts:sexo>M</bts:sexo> 
            <bts:estadoCivil>?</bts:estadoCivil> 
            <bts:nacionalidad></bts:nacionalidad> 
            <bts:ingresos>1500</bts:ingresos> 
            <bts:ocupacionId>1</bts:ocupacionId> 
            <bts:actividadLaboral></bts:actividadLaboral> 
            <bts:apartamento>13B</bts:apartamento> 
            <bts:localidad>10</bts:localidad> 
            <bts:barrio/> 
            <bts:telefonoCelular>091897718</bts:telefonoCelular> 
            <bts:departamentoId>10</bts:departamentoId> 
            <bts:nacionalidadId>845</bts:nacionalidadId> 
            <bts:localidadId>10</bts:localidadId> 
            <bts:clasificacionInterna></bts:clasificacionInterna> 
            <bts:paisDomicilioId>845</bts:paisDomicilioId> 
            <bts:sector></bts:sector> 
            <bts:telefonoFijo>26004288</bts:telefonoFijo> 
            <bts:codigoPostal/> 
            <bts:primerNombre>aALEJANDRO</bts:primerNombre> 
            <bts:fechaNacimiento>1976-02-26</bts:fechaNacimiento> 
            <bts:actividadLaboralId>1112</bts:actividadLaboralId> 
            <bts:primerApellido>vVAZQUEZ</bts:primerApellido> 
            <bts:estadoCivilId>1</bts:estadoCivilId> 
            <bts:segundoApellido>SZENTANDRASI</bts:segundoApellido> 
            <bts:paisDocumento></bts:paisDocumento> 
            <bts:fechaInicioActividad/> 
            <bts:ocupacion></bts:ocupacion> 
            <bts:paisDomicilio></bts:paisDomicilio> 
            <bts:departamento></bts:departamento> 
            <bts:fechaVencimiento></bts:fechaVencimiento> 
            <bts:correoElectronico>AV@GMAIL.COM</bts:correoElectronico> 
            <bts:numeroPuerta>7216</bts:numeroPuerta> 
            <bts:calle>BAZZURRO</bts:calle> 
            <bts:barrioId></bts:barrioId> 
         </bts:sdtPersona> 
      </bts:BTPersonas.Actualizar> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?Actualizar=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 631e45d0-2c12-1ccc-7e5c-a067d4de5fb8' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
   "personaUId":"2", 
   "sdtPersona": { 
      "paisDocumentoId": 845, 
      "tipoDocumentoId": 1, 
      "nroDocumento": "41875255", 
      "ingresos": "1500.00", 
      "nacionalidad": "URUGUAY", 
      "sexo": "M", 
      "segundoNombre": "", 
      "telefonoCelular": "", 
      "departamentoId": 10, 
      "ocupacionId": "1", 
      "actividadLaboralId": 1112, 
      "nacionalidadId": 845, 
      "localidadId": "10", 
      "paisDomicilioId": 845, 
      "telefonoFijo": "26004288", 
      "codigoPostal": "", 
      "primerNombre": "aALEJANDRO", 
      "fechaNacimiento": "1976-02-26", 
      "primerApellido": "vVAZQUEZ", 
      "estadoCivilId": "1", 
      "segundoApellido": "SZENTANDRASI", 
      "paisDocumento": "URUGUAY", 
      "fechaInicioActividad": "1980-01-01", 
      "ocupacion": "Empleado", 
      "paisDomicilio": "URUGUAY", 
      "fechaVencimiento": "2025-01-01", 
      "correoElectronico": "AV@GMAIL.COM", 
      "numeroPuerta": "7216", 
      "calle": "BAZZURRO", 
      "apartamento": "13B", 
      "barrioId": 0, 
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
      <BTPersonas.ActualizarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>0306ebbd9c4A8B5C60A82434</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>770</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPersonas.Actualizar</Servicio> 
            <Fecha>2017-12-14</Fecha> 
            <Requerimiento/> 
            <Hora>18:17:10</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPersonas.ActualizarResponse> 
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
       "Numero": "835", 
       "Estado": "OK", 
       "Servicio": "BTPersonas.Actualizar", 
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
<td>personaUId</td>
<td>Long</td>
<td>Identificador único de persona.</td>
</tr>
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
<td>30003</td>
<td>No se pudo obtener identificador único de la persona.</td>
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
<td>40009</td>
<td>Debe ingresar Fecha de Nacimiento.</td>
</tr>
<tr>
<td>40010</td>
<td>La Fecha de Nacimiento no puede ser posterior a hoy.</td>
</tr>
<tr>
<td>40011</td>
<td>La persona no es mayor de ? años.</td>
</tr>
<tr>
<td>40012</td>
<td>Debe ingresar Sexo.</td>
</tr>
<tr>
<td>40013</td>
<td>Debe ingresar Ocupación.</td>
</tr>
<tr>
<td>40014</td>
<td>El código de Ocupación no existe.</td>
</tr>
<tr>
<td>40015</td>
<td>La Fecha de Iinicio de Actividad no puede ser posterior a hoy.</td>
</tr>
<tr>
<td>40016</td>
<td>Caracteres incorrectos en nombre/apellido.</td>
</tr>
<tr>
<td>40019</td>
<td>Debe ingresar País del Domicilio.</td>
</tr>
<tr>
<td>40020</td>
<td>El País del Domicilio no existe.</td>
</tr>
<tr>
<td>40021</td>
<td>Debe ingresar Departamento.</td>
</tr>
<tr>
<td>40022</td>
<td>El Departamento no existe.</td>
</tr>
<tr>
<td>40023</td>
<td>Debe ingresar Localidad.</td>
</tr>
<tr>
<td>40024</td>
<td>La Localidad no existe.</td>
</tr>
<tr>
<td>40025</td>
<td>El barrio no existe.</td>
</tr>
<tr>
<td>40026</td>
<td>Debe ingresar calle.</td>
</tr>
<tr>
<td>40028</td>
<td>Debe ingresar al menos un Teléfono.</td>
</tr>
<tr>
<td>40029</td>
<td>Email inválido.</td>
</tr>
<tr>
<td>40030</td>
<td>La persona se encuentra en la lista de Inhabilitados: ?</td>
</tr>
<tr>
<td>40035</td>
<td>Debe ingresar Segmento.</td>
</tr>
<tr>
<td>40036</td>
<td>El código de Segmento no existe.</td>
</tr>
<tr>
<td>40037</td>
<td>Debe ingresar clasificación interna.</td>
</tr>
<tr>
<td>40038</td>
<td>El código de clasificación interna no existe.</td>
</tr>
<tr>
<td>40039</td>
<td>Debe ingresar código de sector.</td>
</tr>
<tr>
<td>40040</td>
<td>El código de Sector no existe.</td>
</tr>
<tr>
<td>40041</td>
<td>Debe ingresar Actividad Laboral.</td>
</tr>
<tr>
<td>40042</td>
<td>El código de Actividad Laboral no existe.</td>
</tr>
<tr>
<td>40051</td>
<td>La persona ya existe.</td>
</tr>
</tbody>
</table>
</div></template>


