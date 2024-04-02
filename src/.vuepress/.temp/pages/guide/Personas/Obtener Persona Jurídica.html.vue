<template><div><h1 id="obtener-persona-juridica" tabindex="-1"><a class="header-anchor" href="#obtener-persona-juridica"><span>Obtener Persona Jurídica</span></a></h1>
<p>Método para obtener la información de una persona jurídica.</p>
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
<td>BTPersonas.ObtenerPersonaJuridica</td>
<td>RBTPG384</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Persona Jurídica:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ObtenerPersonaJuridica> 
         <bts:Btinreq> 
            <bts:Device>GP</bts:Device> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>3578f1ef27CD285A89A23FBE</bts:Token> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:personaUId>303</bts:personaUId> 
      </bts:BTPersonas.ObtenerPersonaJuridica> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas?ObtenerPersonaJuridica' \ 
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
   "personaUId": "303" 
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
      <BTPersonas.ObtenerPersonaJuridicaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Usuario>INSTALADOR</Usuario> 
            <Device>GP</Device> 
            <Token>3578f1ef27CD285A89A23FBE</Token> 
            <Requerimiento>1</Requerimiento> 
         </Btinreq> 
         <personaJuridica> 
            <nroDocumento>214567892142</nroDocumento> 
            <numeroPuerta>0</numeroPuerta> 
            <nombreReducido>BANCO MODELO</nombreReducido> 
            <paisDomicilio>URUGUAY</paisDomicilio> 
            <razonSocial>BANCO MODELO</razonSocial> 
            <departamento>Montevideo</departamento> 
            <nroRegistro>78940</nroRegistro> 
            <naturalezaJuridica>Sociedad Anónima</naturalezaJuridica> 
            <barrio>Centro</barrio> 
            <apartamento></apartamento> 
            <tipoDocumentoId>2</tipoDocumentoId> 
            <tipoActividadId>1</tipoActividadId> 
            <piso></piso> 
            <paisId>845</paisId> 
            <fechaConstitucion>2007-08-22</fechaConstitucion> 
            <actividad></actividad> 
            <paisDomicilioId>845</paisDomicilioId> 
            <pais>URUGUAY</pais> 
            <codigoPostal></codigoPostal> 
            <tipoActividad>Actividad Principal</tipoActividad> 
            <barrioId>330</barrioId> 
            <localidadId>10</localidadId> 
            <localidad>Montevideo</localidad> 
            <correoElectronico>1</correoElectronico> 
            <actividadId>0</actividadId> 
            <calle></calle> 
            <naturalezaJuridicaId>1</naturalezaJuridicaId> 
            <tipoDocumento>RUT</tipoDocumento> 
            <departamentoId>10</departamentoId> 
            <bts:telefonoFijo>3213342222</bts:telefonoFijo> 
            <bts:piso>123</bts:piso> 
         </personaJuridica> 
         <sdtIntegrantesJuridicos> 
            <SdtsBTIntegranteJuridico> 
               <nroDocumento>27928980</nroDocumento> 
               <vinculoId>1</vinculoId> 
               <pais>URUGUAY</pais> 
               <tipoDocumentoId>1</tipoDocumentoId> 
               <participacion>100.00</participacion> 
               <tipoDocumento>Cédula Identidad</tipoDocumento> 
               <personaUId>141</personaUId> 
               <paisId>845</paisId> 
               <nombre>PRANKA VISENTIN ERIKA VERONICA</nombre> 
               <vinculo>Presidente</vinculo> 
            </SdtsBTIntegranteJuridico> 
         </sdtIntegrantesJuridicos> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Servicio>BTPersonas.ObtenerPersonaJuridica</Servicio> 
            <Hora>14:57:38</Hora> 
            <Numero>16624</Numero> 
            <Fecha>2022-06-23</Fecha> 
            <Canal>BTDIGITAL</Canal> 
            <Estado>BTS_PLAT_ERROR</Estado> 
            <Requerimiento>1</Requerimiento> 
         </Btoutreq> 
      </BTPersonas.ObtenerPersonaJuridicaResponse> 
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
   "personaJuridica": { 
        "nroDocumento": "214567892142", 
        "numeroPuerta": "0", 
        "nombreReducido": "BANCO MODELO", 
        "paisDomicilio": "URUGUAY", 
        "razonSocial": "BANCO MODELO", 
        "departamento": "Montevideo", 
        "nroRegistro": "78940", 
        "naturalezaJuridica": "Sociedad Anónima", 
        "barrio": "Centro", 
        "apartamento": , 
        "tipoDocumentoId": "2", 
        "tipoActividadId": "1", 
        "piso": , 
        "paisId": "845", 
        "fechaConstitucion": "2007-08-22", 
        "actividad": , 
        "paisDomicilioId": "845", 
        "pais": "URUGUAY", 
        "codigoPostal": , 
        "tipoActividad": "Actividad Principal", 
        "barrioId": "330", 
        "localidadId": "10", 
        "localidad": "Montevideo", 
        "correoElectronico": "1", 
        "actividadId": "0", 
        "calle": , 
        "naturalezaJuridicaId": "1", 
        "tipoDocumento": "RUT", 
        "departamentoId": "10", 
        "telefonoFijo": "3213342222", 
        "piso": "123" 
    }, 
    "sdtIntegrantesJuridicos": { 
        "SdtsBTIntegranteJuridico": { 
            "nroDocumento": "27928980", 
            "vinculoId": "1", 
            "pais": "URUGUAY", 
            "tipoDocumentoId": "1", 
            "participacion": "100.00", 
            "tipoDocumento": "Cédula Identidad", 
            "personaUId": "141", 
            "paisId": "845", 
            "nombre": "PRANKA VISENTIN ERIKA VERONICA", 
            "vinculo": "Presidente" 
        } 
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
<td>personaJuridica</td>
<td>sBTPersonaJuridica1</td>
<td>Datos de persona jurídica.</td>
</tr>
<tr>
<td>sdtIntegrantesJuridicos</td>
<td>sBTIntegranteJuridico</td>
<td>Listado de integrantes jurídicos.</td>
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
<td>Correo electrónico.</td>
</tr>
<tr>
<td>telefonoFijo</td>
<td>String</td>
<td>Número de teléfono fijo.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTIntegranteJuridico son los siguientes:</p>
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
<td>nombre</td>
<td>String</td>
<td>Nombre de la persona.</td>
</tr>
<tr>
<td>vinculoId</td>
<td>Short</td>
<td>Identificador de vínculo.</td>
</tr>
<tr>
<td>vinculo</td>
<td>String</td>
<td>Descripción del vínculo.</td>
</tr>
<tr>
<td>participacion</td>
<td>Double</td>
<td>Porcentaje de participación del integrante.</td>
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
<td>No se recibió identificador de persona.</td>
</tr>
<tr>
<td>40001</td>
<td>La persona jurídica no existe.</td>
</tr>
</tbody>
</table>
</div></template>


