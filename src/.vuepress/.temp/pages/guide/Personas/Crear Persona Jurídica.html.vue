<template><div><h1 id="crear-persona-juridica" tabindex="-1"><a class="header-anchor" href="#crear-persona-juridica"><span>Crear Persona Jurídica</span></a></h1>
<p>Método para para crear una persona jurídica.</p>
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
<td>BTPersonas.CrearPersonaJuridica</td>
<td>RBTPG274</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Crear Persona Jurídica:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.CrearPersonaJuridica> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>IN</bts:Usuario> 
            <bts:Token>247d9cc0aD285A89A23FBE</bts:Token> 
            <bts:Device>MC</bts:Device> 
         </bts:Btinreq> 
         <bts:sdtPersonaJuridica> 
            <bts:nroDocumento>219999990016</bts:nroDocumento> 
            <bts:numeroPuerta>1</bts:numeroPuerta> 
            <bts:nombreReducido>prueba</bts:nombreReducido> 
            <bts:paisDomicilio></bts:paisDomicilio> 
            <bts:razonSocial>EMPRESA</bts:razonSocial> 
            <bts:departamento></bts:departamento> 
            <bts:nroRegistro></bts:nroRegistro> 
            <bts:naturalezaJuridica>1</bts:naturalezaJuridica> 
            <bts:barrio>1</bts:barrio> 
            <bts:apartamento></bts:apartamento> 
            <bts:tipoDocumentoId>2</bts:tipoDocumentoId> 
            <bts:tipoActividadId>1</bts:tipoActividadId> 
            <bts:fechaConstitucion>2020-01-01</bts:fechaConstitucion> 
            <bts:paisId>845</bts:paisId> 
            <bts:actividad></bts:actividad> 
            <bts:paisDomicilioId>845</bts:paisDomicilioId> 
            <bts:pais></bts:pais> 
            <bts:codigoPostal>91000</bts:codigoPostal> 
            <bts:tipoActividad></bts:tipoActividad> 
            <bts:barrioId>1</bts:barrioId> 
            <bts:localidad></bts:localidad> 
            <bts:localidadId>1008</bts:localidadId> 
            <bts:actividadId>1111</bts:actividadId> 
            <bts:calle>1</bts:calle> 
            <bts:tipoDocumento>2</bts:tipoDocumento> 
            <bts:naturalezaJuridicaId>1</bts:naturalezaJuridicaId> 
            <bts:departamentoId>2</bts:departamentoId> 
            <bts:correoElectronico>AV@GMAIL.COM</bts:correoElectronico> 
            <bts:telefonoFijo>3213342222</bts:telefonoFijo> 
            <bts:piso>123</bts:piso> 
         </bts:sdtPersonaJuridica> 
         <bts:sdtIntegrantesJuridicosAlta> 
            <bts:sBTIntegranteJuridicoAlta> 
               <bts:vinculoId>1</bts:vinculoId> 
               <bts:personaUId>141</bts:personaUId> 
               <bts:participacion>50</bts:participacion> 
            </bts:sBTIntegranteJuridicoAlta> 
         </bts:sdtIntegrantesJuridicosAlta> 
      </bts:BTPersonas.CrearPersonaJuridica> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?CrearPersonaJuridica' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
   "Btinreq": { 
   "Canal": "BTDIGITAL", 
   "Requerimiento": "1", 
   "Usuario": "IN", 
   "Token": "247d9cc0aD285A89A23FBE", 
   "Device": "MC" 
   }, 
   "sdtPersonaJuridica": { 
	   "nroDocumento": "219999990016", 
	   "numeroPuerta": "1", 
	   "nombreReducido": "prueba", 
	   "paisDomicilio": null, 
	   "razonSocial": "EMPRESA", 
	   "departamento": null, 
	   "nroRegistro": null, 
	   "naturalezaJuridica": "1", 
	   "barrio": "1", 
	   "apartamento": null, 
	   "tipoDocumentoId": "2", 
	   "tipoActividadId": "1", 
	   "fechaConstitucion": "2020-01-01", 
	   "paisId": "845", 
	   "actividad": null, 
	   "paisDomicilioId": "845", 
	   "pais": null, 
	   "codigoPostal": "91000", 
	   "tipoActividad": null, 
	   "barrioId": "1", 
	   "localidad": null, 
	   "localidadId": "1008", 
	   "actividadId": "1111", 
	   "calle": "1", 
	   "tipoDocumento": "2", 
	   "naturalezaJuridicaId": "1", 
	   "departamentoId": "2", 
      "correoElectronico": "AV@GMAIL.COM", 
      "telefonoFijo": "3213342222", 
      "piso": "123" 
   }, 
   "sdtIntegrantesJuridicosAlta": { 
	   "sBTIntegranteJuridicoAlta": [ 
		  { 
			 "vinculoId": "1", 
			 "personaUId": "141" 
			 "participacion": "50" 
			 } 
	   ] 
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
      <BTPersonas.CrearPersonaJuridicaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>MC</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>247d9cc0a3CD285A89A23FBE</Token> 
         </Btinreq> 
         <personaUId>282</personaUId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>107338</Numero> 
            <Servicio>BTPersonas.CrearPersonaJuridica</Servicio> 
            <Estado>OK</Estado> 
            <Fecha>2020-11-05</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Hora>12:31:25</Hora> 
         </Btoutreq> 
      </BTPersonas.CrearPersonaJuridicaResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
 { 
	 "Btinreq": { 
		"Device": "MC", 
		"Usuario": "INSTALADOR", 
		"Requerimiento": "1", 
		"Canal": "BTDIGITAL", 
		"Token": "247d9cc0a3CD285A89A23FBE" 
	 }, 
	 "personaUId": "282", 
	 "Erroresnegocio": null, 
	 "Btoutreq": { 
		"Numero": "107338", 
		"Servicio": "BTPersonas.CrearPersonaJuridica", 
		"Estado": "OK", 
		"Fecha": "2020-11-05", 
		"Requerimiento": "1", 
		"Canal": "BTDIGITAL", 
		"Hora": "12:31:25" 
	 } 
 } 
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
<td>sdtPersonaJuridica</td>
<td>sBTPersonaJuridica1</td>
<td>Datos de la persona jurídica.</td>
</tr>
<tr>
<td>sdtIntegrantesJuridicosAlta</td>
<td>sBTIntegranteJuridicoAlta</td>
<td>Listado de personas físicas integrantes de la persona jurídica.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTPersonaJuridica1 son los siguientes:</p>
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
<td>razonSocial</td>
<td>String</td>
<td>Razón social.</td>
</tr>
<tr>
<td>nombreReducido</td>
<td>String</td>
<td>Nombre reducido.</td>
</tr>
<tr>
<td>fechaConstitucion</td>
<td>Date</td>
<td>Fecha de constitución.</td>
</tr>
<tr>
<td>tipoActividadId</td>
<td>Long</td>
<td>Identificador de tipo de actividad.</td>
</tr>
<tr>
<td>tipoActividad</td>
<td>String</td>
<td>Nombre de tipo de actividad.</td>
</tr>
<tr>
<td>actividadId</td>
<td>Long</td>
<td>Identificador de actividad.</td>
</tr>
<tr>
<td>actividad</td>
<td>String</td>
<td>Nombre de actividad.</td>
</tr>
<tr>
<td>naturalezaJuridicaId</td>
<td>Short</td>
<td>Identificador de naturaleza jurídica.</td>
</tr>
<tr>
<td>naturalezaJuridica</td>
<td>String</td>
<td>Nombre de naturaleza jurídica.</td>
</tr>
<tr>
<td>nroRegistro</td>
<td>Long</td>
<td>Número de registro.</td>
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
<td>piso</td>
<td>String</td>
<td>Piso.</td>
</tr>
<tr>
<td>correoElectronico</td>
<td>String</td>
<td>Correo electronico.</td>
</tr>
<tr>
<td>telefonoFijo</td>
<td>String</td>
<td>Número de teléfono fijo.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTIntegranteJuridicoAlta son los siguientes:</p>
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
<td>vinculoId</td>
<td>Short</td>
<td>Identificador de vínculo.</td>
</tr>
<tr>
<td>participacion</td>
<td>Double</td>
<td>porcentaje de participación del integrante</td>
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
<td>Debe ingresar al menos un integrante.</td>
</tr>
<tr>
<td>30002</td>
<td>Debe ingresar identificador de vínculo.</td>
</tr>
<tr>
<td>30003</td>
<td>No se pudo obtener identificador único de la persona.</td>
</tr>
<tr>
<td>40001</td>
<td>Ya existe persona con los datos ingresados.</td>
</tr>
<tr>
<td>40002</td>
<td>Debe ingresar país.</td>
</tr>
<tr>
<td>40003</td>
<td>El país ingresado no existe.</td>
</tr>
<tr>
<td>40004</td>
<td>Debe ingresar tipo de documento.</td>
</tr>
<tr>
<td>40005</td>
<td>El tipo de documento ingresado no existe.</td>
</tr>
<tr>
<td>40006</td>
<td>El tipo de documento ingresado no aplica para una persona jurídica.</td>
</tr>
<tr>
<td>40007</td>
<td>Debe ingresar número de documento.</td>
</tr>
<tr>
<td>40008</td>
<td>Número de documento incorrecto.</td>
</tr>
<tr>
<td>40009</td>
<td>Debe ingresar razón social.</td>
</tr>
<tr>
<td>40010</td>
<td>Carcteres incorrectos en razón social.</td>
</tr>
<tr>
<td>40011</td>
<td>Carcteres incorrectos en nombre reducido.</td>
</tr>
<tr>
<td>40012</td>
<td>Debe ingresar naturaleza jurídica.</td>
</tr>
<tr>
<td>40013</td>
<td>La naturaleza jurídica ingresada no existe.</td>
</tr>
<tr>
<td>40014</td>
<td>Debe ingresar la fecha de constitución.</td>
</tr>
<tr>
<td>40015</td>
<td>La fecha de constitución no puede ser posterior a la fecha de apertura.</td>
</tr>
<tr>
<td>40016</td>
<td>Debe ingresar tipo de actividad.</td>
</tr>
<tr>
<td>40017</td>
<td>El tipo de actividad ingresado no existe.</td>
</tr>
<tr>
<td>40018</td>
<td>Debe ingresar actividad.</td>
</tr>
<tr>
<td>40019</td>
<td>La actividad ingresada no existe.</td>
</tr>
<tr>
<td>40020</td>
<td>Debe ingresar país del domicilio.</td>
</tr>
<tr>
<td>40021</td>
<td>El país del domicilio no existe.</td>
</tr>
<tr>
<td>40022</td>
<td>Debe ingresar departamento.</td>
</tr>
<tr>
<td>40023</td>
<td>El departamento no existe.</td>
</tr>
<tr>
<td>40024</td>
<td>Debe ingresar localidad.</td>
</tr>
<tr>
<td>40025</td>
<td>La localidad no existe.</td>
</tr>
<tr>
<td>40026</td>
<td>El barrio no existe.</td>
</tr>
</tbody>
</table>
</div></template>


