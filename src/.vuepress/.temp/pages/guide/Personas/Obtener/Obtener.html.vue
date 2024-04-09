<template><div><h1 id="obtener" tabindex="-1"><a class="header-anchor" href="#obtener"><span>Obtener</span></a></h1>
<p>Método para obtener los datos de una persona.</p>
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
<td>BTPersonas.Obtener</td>
<td>RBTPG085</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.Obtener> 
         <bts:Btinreq> 
            <bts:Device>10</bts:Device> 
            <bts:Token>c</bts:Token> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq>     
         <bts:personaUId>21</bts:personaUId> 
      </bts:BTPersonas.Obtener> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?Obtener' \ 
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
	"personaUId": "21", 
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
      <BTPersonas.ObtenerResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>c</Token> 
         </Btinreq> 
         <sdtPersona> 
            <nroDocumento>27511184</nroDocumento> 
            <numeroPuerta/> 
            <estadoCivil>Soltero/a</estadoCivil> 
            <paisDomicilio/> 
            <fechaInicioActividad>0000-00-00</fechaInicioActividad> 
            <segundoNombre/> 
            <fechaVencimiento>0000-00-00</fechaVencimiento> 
            <departamento/> 
            <segundoApellido>SZENTANDRASI</segundoApellido> 
            <fechaNacimiento>1976-02-26</fechaNacimiento> 
            <barrio/> 
            <ingresos>1800.00</ingresos> 
            <apartamento/> 
            <telefonoCelular/> 
            <tipoDocumentoId>1</tipoDocumentoId> 
            <sexo>M</sexo> 
            <primerNombre>aALEJANDRO</primerNombre> 
            <paisDocumentoId>845</paisDocumentoId> 
            <telefonoFijo/> 
            <paisDomicilioId>0</paisDomicilioId> 
            <primerApellido>vVAZQUEZ</primerApellido> 
            <ocupacion>Empleado</ocupacion> 
            <codigoPostal/> 
            <paisDocumento>URUGUAY</paisDocumento> 
            <ocupacionId>1</ocupacionId> 
            <barrioId>0</barrioId> 
            <nacionalidad>URUGUAY</nacionalidad> 
            <localidad/> 
            <localidadId>0</localidadId> 
            <calle/> 
            <correoElectronico>AV@GMAIL.COM</correoElectronico> 
            <tipoDocumento>Cédula Identidad</tipoDocumento> 
            <nacionalidadId>845</nacionalidadId> 
            <estadoCivilId>1</estadoCivilId> 
            <departamentoId>0</departamentoId> 
         </sdtPersona> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>4708</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPersonas.Obtener</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2019-01-17</Fecha> 
            <Hora>14:53:15</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPersonas.ObtenerResponse> 
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
   "sdtPersona": { 
      "nroDocumento": "27511184", 
      "numeroPuerta": "", 
      "estadoCivil": "Soltero/a", 
      "paisDomicilio": "", 
      "fechaInicioActividad": "0000-00-00", 
      "segundoNombre": "", 
      "fechaVencimiento": "0000-00-00", 
      "departamento": "", 
      "segundoApellido": "SZENTANDRASI", 
      "fechaNacimiento": "1976-02-26", 
      "barrio": "", 
      "ingresos": 1800, 
      "apartamento": "", 
      "telefonoCelular": "", 
      "tipoDocumentoId": 1, 
      "sexo": "M", 
      "primerNombre": "aALEJANDRO", 
      "paisDocumentoId": 845, 
      "telefonoFijo": "", 
      "paisDomicilioId": 0, 
      "primerApellido": "vVAZQUEZ", 
      "ocupacion": "Empleado", 
      "codigoPostal": "", 
      "paisDocumento": "URUGUAY", 
      "ocupacionId": 1, 
      "barrioId": 0, 
      "nacionalidad": "URUGUAY", 
      "localidad": "", 
      "localidadId": 0, 
      "calle": "", 
      "correoElectronico": "AV@GMAIL.COM", 
      "tipoDocumento": "Cédula Identidad", 
      "nacionalidadId": 845, 
      "estadoCivilId": "1", 
      "departamentoId": 0 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 4709, 
        "Estado": "OK", 
        "Servicio": "BTPersonas.Obtener", 
        "Requerimiento": "1", 
        "Fecha": "2019-01-17", 
        "Hora": "14:58:53", 
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
<td>sdtPersona</td>
<td>sBTDatosPersona</td>
<td>Datos de la persona.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTDatosPersona son los siguientes:</p>
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
<td>estadoCivilId</td>
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
<td>No se recibió el identificador de persona.</td>
</tr>
<tr>
<td>30002</td>
<td>El identificador no corresponde a una persona física</td>
</tr>
<tr>
<td>30013</td>
<td>No existe registro para el identificador único.</td>
</tr>
</tbody>
</table>
</div></template>


