<template><div><h1 id="obtener-perfil" tabindex="-1"><a class="header-anchor" href="#obtener-perfil"><span>Obtener Perfil</span></a></h1>
<p>Método para obtener los datos de la persona titular de una cuenta cliente.</p>
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
<td>BTClientes.ObtenerPerfil</td>
<td>RBTPG002</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Perfil:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTClientes.ObtenerPerfil> 
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
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerPerfil=' \ 
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
      <BTClientes.ObtenerPerfilResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10.12.10.118</Device> 
            <Usuario>BANTOTAL</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>7d434761a1F955E77534D3E0</Token> 
         </Btinreq> 
         <sCTPersona> 
            <profesion/> 
            <estadoCivil/> 
            <domicilio> 
               <localidad>LOS CHILCOS</localidad> 
               <departamento>BUENOS AIRES</departamento> 
               <direccion>? 123 ?</direccion> 
               <pais>ARGENTINA, REPUBLICA</pais> 
               <barrio/> 
               <propietario/> 
               <longitud>0E-9.000000000</longitud> 
               <zona/> 
               <codPostal/> 
               <latitud>0E-9.000000000</latitud> 
            </domicilio> 
            <fechaNacimiento>1950-12-12</fechaNacimiento> 
            <apellidos>Prueba Pruebass</apellidos> 
            <personaUId>0</personaUId> 
            <sexo>Masculino</sexo> 
            <actividad>Familias y Personas Fisicas</actividad> 
            <telefono>55555555</telefono> 
            <ingresoMensual>0.00</ingresoMensual> 
            <email/> 
            <ocupacion/> 
            <hijos>0</hijos> 
            <documento> 
               <tipoDocumento>LIBRE</tipoDocumento> 
               <fechaVencimiento>0000-00-00</fechaVencimiento> 
               <nombreTipoDocumento>LIBRETA CIVICA</nombreTipoDocumento> 
               <nroDocumento>5832073</nroDocumento> 
               <pais>ARGENTINA, REPUBLICA</pais> 
            </documento> 
            <nacionalidad/> 
            <celular/> 
            <antiguedadLaboral>0</antiguedadLaboral> 
            <nivelEducativo/> 
            <nombres>Probando Pruebas</nombres> 
            <otrosIngresos>0.00</otrosIngresos> 
         </sCTPersona> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>2181</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTClientes.ObtenerPerfil</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2019-02-13</Fecha> 
            <Hora>16:02:01</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTClientes.ObtenerPerfilResponse> 
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
    "sCTPersona": { 
        "profesion": "", 
        "estadoCivil": "Soltero/a", 
        "domicilio": { 
            "localidad": "", 
            "departamento": "BUENOS AIRES", 
            "direccion": "18 de Julio 25", 
            "pais": "ARGENTINA, REPUBLICA", 
            "barrio": "", 
            "propietario": "", 
            "longitud": 0, 
            "zona": "", 
            "codPostal": "", 
            "latitud": 0 
        }, 
        "fechaNacimiento": "1901-01-01", 
        "apellidos": "Bengoechea Morena", 
        "personaUId": 0, 
        "sexo": "", 
        "actividad": "", 
        "telefono": "", 
        "ingresoMensual": 0, 
        "email": "", 
        "ocupacion": "", 
        "hijos": 0, 
        "documento": { 
            "tipoDocumento": "D.N.I", 
            "fechaVencimiento": "0000-00-00", 
            "nombreTipoDocumento": "D.N.I.", 
            "nroDocumento": "10001848", 
            "pais": "ARGENTINA, REPUBLICA" 
        }, 
        "nacionalidad": "", 
        "celular": "", 
        "antiguedadLaboral": 0, 
        "nivelEducativo": "", 
        "nombres": "Pablo Javier", 
        "otrosIngresos": 0 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 2207, 
        "Estado": "OK", 
        "Servicio": "BTClientes.ObtenerPerfil", 
        "Requerimiento": "", 
        "Fecha": "2019-02-13", 
        "Hora": "16:34:42", 
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
<td>sCTPersona</td>
<td>sCTPersona</td>
<td>Datos de cliente.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sCTPersona son los siguientes:</p>
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
<td>profesion</td>
<td>String</td>
<td>Profesión.</td>
</tr>
<tr>
<td>estadoCivil</td>
<td>String</td>
<td>Estado civil.</td>
</tr>
<tr>
<td>domicilio</td>
<td>sCTDomicilio</td>
<td>Datos de domicilio.</td>
</tr>
<tr>
<td>fechaNacimiento</td>
<td>Date</td>
<td>Fecha de nacimiento.</td>
</tr>
<tr>
<td>apellidos</td>
<td>String</td>
<td>Apellidos.</td>
</tr>
<tr>
<td>personaUId</td>
<td>Long</td>
<td>Identificador único de persona.</td>
</tr>
<tr>
<td>sexo</td>
<td>String</td>
<td>Sexo (M/F).</td>
</tr>
<tr>
<td>actividad</td>
<td>String</td>
<td>Actividad laboral.</td>
</tr>
<tr>
<td>telefono</td>
<td>String</td>
<td>Teléfono.</td>
</tr>
<tr>
<td>ingresoMensual</td>
<td>Double</td>
<td>Ingreso mensual.</td>
</tr>
<tr>
<td>email</td>
<td>String</td>
<td>Corre electrónico.</td>
</tr>
<tr>
<td>ocupacion</td>
<td>String</td>
<td>Ocupación de la persona.</td>
</tr>
<tr>
<td>hijos</td>
<td>Byte</td>
<td>Cantidad de hijos.</td>
</tr>
<tr>
<td>documento</td>
<td>sCTDocumento</td>
<td>Datos del documento.</td>
</tr>
<tr>
<td>nacionalidad</td>
<td>String</td>
<td>Nacionalidad.</td>
</tr>
<tr>
<td>celular</td>
<td>String</td>
<td>Celular.</td>
</tr>
<tr>
<td>antiguedadLaboral</td>
<td>Short</td>
<td>Antigüedad laboral.</td>
</tr>
<tr>
<td>nivelEducativo</td>
<td>String</td>
<td>Nivel de educación.</td>
</tr>
<tr>
<td>nombres</td>
<td>String</td>
<td>Nombres.</td>
</tr>
<tr>
<td>otrosIngresos</td>
<td>Double</td>
<td>Otros ingresos.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sCTDomicilio son los siguientes:</p>
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
<td>localidad</td>
<td>String</td>
<td>Localidad del domicilio.</td>
</tr>
<tr>
<td>departamento</td>
<td>String</td>
<td>Departamento del domicilio.</td>
</tr>
<tr>
<td>direccion</td>
<td>String</td>
<td>Dirección.</td>
</tr>
<tr>
<td>pais</td>
<td>String</td>
<td>País del domicilio.</td>
</tr>
<tr>
<td>barrio</td>
<td>String</td>
<td>Barrio.</td>
</tr>
<tr>
<td>propietario</td>
<td>String</td>
<td>Propietario del domicilio.</td>
</tr>
<tr>
<td>longitud</td>
<td>Double</td>
<td>Longitud del domicilio.</td>
</tr>
<tr>
<td>zona</td>
<td>String</td>
<td>Zona del domicilio.</td>
</tr>
<tr>
<td>codPostal</td>
<td>String</td>
<td>Código postal.</td>
</tr>
<tr>
<td>latitud</td>
<td>Double</td>
<td>Latitud del domicilio.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sCTDocumento son los siguientes:</p>
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
<td>tipoDocumento</td>
<td>String</td>
<td>Tipo del documento.</td>
</tr>
<tr>
<td>fechaVencimiento</td>
<td>Date</td>
<td>Fecha de vencimiento del documento.</td>
</tr>
<tr>
<td>nombreTipoDocumento</td>
<td>String</td>
<td>Nombre del tipo de documento.</td>
</tr>
<tr>
<td>nroDocumento</td>
<td>String</td>
<td>Número de documento.</td>
</tr>
<tr>
<td>pais</td>
<td>String</td>
<td>País del documento.</td>
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
<td>No se recuperó la cuenta para el Identificador.</td>
</tr>
</tbody>
</table>
</div></template>


