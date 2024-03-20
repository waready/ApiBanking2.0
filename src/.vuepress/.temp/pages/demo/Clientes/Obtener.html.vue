<template><div><h1 id="obtener" tabindex="-1"><a class="header-anchor" href="#obtener"><span>Obtener</span></a></h1>
<p>Método para obtener los datos de un cliente.</p>
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
<td>BTClientes.Obtener</td>
<td>RBTPG089</td>
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
      <bts:BTClientes.Obtener> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>0306ebbd9c4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:clienteUId>181</bts:clienteUId> 
      </bts:BTClientes.Obtener> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?Obtener=' \ 
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
    "clienteUId": 181 
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
      <BTClientes.ObtenerResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>0306ebbd9c4A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtPersona> 
            <apartamento>13B</apartamento> 
            <paisDocumentoId>845</paisDocumentoId> 
            <sectorId>3</sectorId> 
            <tipoDocumentoId>1</tipoDocumentoId> 
            <ingresos>1500.00</ingresos> 
            <nacionalidad>URUGUAY</nacionalidad> 
            <ocupacionId>1</ocupacionId> 
            <sexo>M</sexo> 
            <barrio/> 
            <estadoCivil/> 
            <nroDocumento>27573084</nroDocumento> 
            <localidad>Montevideo</localidad> 
            <clasificacionInternaId>1</clasificacionInternaId> 
            <segundoNombre/> 
            <telefonoCelular/> 
            <departamentoId>10</departamentoId> 
            <actividadLaboral>01112 Trigo</actividadLaboral> 
            <nacionalidadId>845</nacionalidadId> 
            <localidadId>10</localidadId> 
            <clasificacionInterna>IFE - Actividades bursátiles</clasificacionInterna> 
            <paisDomicilioId>845</paisDomicilioId> 
            <sector>Público Nacional</sector> 
            <telefonoFijo>26004288</telefonoFijo> 
            <codigoPostal/> 
            <primerNombre>ALEJANDRO</primerNombre> 
            <fechaNacimiento>1976-02-26</fechaNacimiento> 
            <actividadLaboralId>1112</actividadLaboralId> 
            <primerApellido>VAZQUEZ</primerApellido> 
            <estadoCivilId>Soltero/a</estadoCivilId> 
            <segundoApellido>SZENTANDRASI</segundoApellido> 
            <paisDocumento>URUGUAY</paisDocumento> 
            <fechaInicioActividad>0000-00-00</fechaInicioActividad> 
            <ocupacion>Empleado</ocupacion> 
            <paisDomicilio>URUGUAY</paisDomicilio> 
            <departamento>Montevideo</departamento> 
            <fechaVencimiento>0000-00-00</fechaVencimiento> 
            <correoElectronico>AV@GMAIL.COM</correoElectronico> 
            <numeroPuerta>7216</numeroPuerta> 
            <calle>BAZZURRO</calle> 
            <barrioId>0</barrioId> 
            <tipoDocumento>Cédula Identidad</tipoDocumento> 
			<bts:ejecutivoId>1</bts:ejecutivoId> 
			<bts:ejecutivo>Juan Perez</bts:ejecutivo> 
			<bts:piso>123</bts:piso>			 
         </sdtPersona> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>775</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTClientes.Obtener</Servicio> 
            <Fecha>2017-12-14</Fecha> 
            <Requerimiento/> 
            <Hora>18:57:42</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTClientes.ObtenerResponse> 
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
        "apartamento": "13B", 
        "paisDocumentoId": "845", 
        "sectorId": "3", 
        "tipoDocumentoId": "1", 
        "ingresos": "1500.00", 
        "nacionalidad": "URUGUAY", 
        "ocupacionId": "1", 
        "sexo": "M", 
        "barrio": "", 
        "estadoCivil": "", 
        "nroDocumento": "27573084", 
        "localidad": "Montevideo", 
        "clasificacionInternaId": "1", 
        "segundoNombre": "", 
        "telefonoCelular": "", 
        "departamentoId": "10", 
        "actividadLaboral": "01112 Trigo", 
        "nacionalidadId": "845", 
        "localidadId": "10", 
        "clasificacionInterna": "IFE - Actividades bursátiles", 
        "paisDomicilioId": "845", 
        "sector": "Público Nacional", 
        "telefonoFijo": "26004288", 
        "codigoPostal": "", 
        "primerNombre": "ALEJANDRO", 
        "fechaNacimiento": "1976-02-26", 
        "actividadLaboralId": "1112", 
        "primerApellido": "vVAZQUEZ", 
        "estadoCivilId": "Soltero/a", 
        "segundoApellido": "SZENTANDRASI", 
        "paisDocumento": "URUGUAY", 
        "fechaInicioActividad": "0000-00-00", 
        "ocupacion": "Empleado", 
        "paisDomicilio": "URUGUAY", 
        "departamento": "Montevideo", 
        "fechaVencimiento": "0000-00-00", 
        "correoElectronico": "AV@GMAIL.COM", 
        "numeroPuerta": "7216", 
        "calle": "BAZZURRO", 
        "barrioId": "0", 
        "tipoDocumento": "Cédula Identidad", 
		"ejecutivoId": 1, 
		"ejecutivo": "Juan Perez", 
		"piso": "123" 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "778", 
        "Estado": "OK", 
        "Servicio": "BTClientes.Obtener", 
        "Fecha": "2017-12-15", 
        "Requerimiento": "", 
        "Hora": "11:08:57", 
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
<td>sBTPersona1</td>
<td>Datos del cliente.</td>
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
<td>Identificador de país del documento.</td>
</tr>
<tr>
<td>paisDocumento</td>
<td>String</td>
<td>Nombre de país .</td>
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
<td>Identificador de país.</td>
</tr>
<tr>
<td>nacionalidad</td>
<td>String</td>
<td>Nombre de país.</td>
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
<td>Identificador de actividad.</td>
</tr>
<tr>
<td>actividadLaboral</td>
<td>String</td>
<td>Descripción de actividad.</td>
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
<td>sectorId</td>
<td>Short</td>
<td>Identificador de sector.</td>
</tr>
<tr>
<td>sector</td>
<td>String</td>
<td>Descripción de sector.</td>
</tr>
<tr>
<td>clasificacionInternaId</td>
<td>Short</td>
<td>Identificador de clasificacion interna.</td>
</tr>
<tr>
<td>clasificacionInterna</td>
<td>String</td>
<td>Descripción de clasificacion interna.</td>
</tr>
<tr>
<td>paisDomicilioId</td>
<td>Short</td>
<td>Identificador de país de domicilio.</td>
</tr>
<tr>
<td>paisDomicilioId</td>
<td>String</td>
<td>Nombre de país.</td>
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
<td>Nombre de localidad.</td>
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
<td>Correo electrónico.</td>
</tr>
<tr>
<td>ejecutivoId</td>
<td>Int</td>
<td>Identificador del ejecutivo.</td>
</tr>
<tr>
<td>ejecutivo</td>
<td>String</td>
<td>Nombre del ejecutivo.</td>
</tr>
<tr>
<td>piso</td>
<td>String</td>
<td>Piso del domicilio.</td>
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
<td>No se recibió el identificador de cliente.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recuperó la cuenta para el identificador.</td>
</tr>
</tbody>
</table>
</div></template>


