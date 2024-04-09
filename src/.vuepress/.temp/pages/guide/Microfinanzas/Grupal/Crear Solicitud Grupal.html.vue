<template><div><h1 id="crear-solicitud-grupal" tabindex="-1"><a class="header-anchor" href="#crear-solicitud-grupal"><span>Crear Solicitud Grupal</span></a></h1>
<p>Método para iniciar una solicitud de crédito grupal.</p>
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
<td>BTMicrofinanzas.CrearSolicitudGrupal</td>
<td>RBTPG438</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Crear Solicitud Grupal:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTMicrofinanzas.CrearSolicitudGrupal> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>669747179CD285A89A23FBEE</bts:Token> 
            <bts:Device>1</bts:Device> 
         </bts:Btinreq> 
         <bts:usuarioIngreso>INSTALADOR</bts:usuarioIngreso> 
         <bts:fechaIngreso/> 
         <bts:usuarioAsignacion>INSTALADOR</bts:usuarioAsignacion> 
         <bts:sdtDatosSolicitud> 
            <bts:grupoId>34</bts:grupoId> 
            <bts:asesorId>92</bts:asesorId> 
            <bts:sucursalId/> 
            <bts:origenCaptacion>6</bts:origenCaptacion> 
         </bts:sdtDatosSolicitud> 
      </bts:BTMicrofinanzas.CrearSolicitudGrupal> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?CrearSolicitudGrupal \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "1", 
		"Usuario": "INSTALADOR", 
		"Requerimiento": "1", 
		"Canal": "BTDIGITAL", 
		"Token": "669747179CD285A89A23FBEE" 
	}, 
    "usuarioIngreso": "INSTALADOR", 
    "usuarioAsignacion": "INSTALADOR", 
    "datosSolicitud": { 
        "grupoId": "34", 
        "asesorId": "92", 
        "sucursalId": "1", 
        "origenCaptacion": "6" 
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
      <BTMicrofinanzas.CrearSolicitudGrupalResponse> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>669747179CD285A89A23FBEE</Token> 
            <Device>1</Device> 
         </Btinreq> 
         <solicitudUId>10847</solicitudUId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTMicrofinanzas.CrearSolicitudGrupal</Servicio> 
            <Fecha>2020-09-10</Fecha> 
            <Hora>14:31:41</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>121</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTMicrofinanzas.CrearSolicitudGrupalResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
		"Device": "1", 
		"Usuario": "INSTALADOR", 
		"Requerimiento": "1", 
		"Canal": "BTDIGITAL", 
		"Token": "669747179CD285A89A23FBEE" 
	}, 
    "solicitudUId": "10847", 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTMicrofinanzas.CrearSolicitudGrupal", 
        "Fecha": "2020-09-10", 
        "Hora": "14:31:41", 
        "Requerimiento": "1", 
        "Numero": "121", 
        "Estado": "OK" 
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
<td>procesoId</td>
<td>Short</td>
<td>[Hidden: Identificador de proceso Workflow].</td>
</tr>
<tr>
<td>tareaId</td>
<td>Short</td>
<td>[Hidden: Identificador de tarea Workflow].</td>
</tr>
<tr>
<td>usuarioIngreso</td>
<td>String</td>
<td>Usuario que ingresa la solicitud. En caso de no especificarse, se asigna el usuario conectado.</td>
</tr>
<tr>
<td>fechaIngreso</td>
<td>Date</td>
<td>Fecha en la que se ingresa la solicitud. En caso de no especificarse, se asigna fecha apertura.</td>
</tr>
<tr>
<td>usuarioAsignacion</td>
<td>String</td>
<td>Usuario al que queda asignada la tarea de solicitud. En caso de no especificarse, se asigna al Asesor de créditos.</td>
</tr>
<tr>
<td>sdtDatosSolicitud</td>
<td>sBTSolicitudGrupal</td>
<td>Datos de entrada de la solicitud.</td>
</tr>
</tbody>
</table>
<p>El tipo de dato estructurado sBTSolicitudGrupal tiene los siguientes campos:</p>
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
<td>grupoId</td>
<td>Int</td>
<td>Identificador de grupo que solicita el préstamo.</td>
</tr>
<tr>
<td>asesorId</td>
<td>Int</td>
<td>Identificador del Asesor de la solicitud. En caso de no especificarse, se asigna el Asesor del cliente.</td>
</tr>
<tr>
<td>sucursalId</td>
<td>Short</td>
<td>Sucursal de la solicitud. En caso de no especificarse, se asigna la sucursal del cliente.</td>
</tr>
<tr>
<td>origenCaptacion</td>
<td>Int</td>
<td>Identificador de origen captación.</td>
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
<td>solicitudUId</td>
<td>Long</td>
<td>Identificador de instancia Workflow.</td>
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
<td>No se recibió el identifcador de proceso.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recibió el identifcador de tarea.</td>
</tr>
<tr>
<td>30003</td>
<td>No se recibió el identificador de grupo.</td>
</tr>
<tr>
<td>30011</td>
<td>El Grupo seleccionado no está vigente.</td>
</tr>
<tr>
<td>30012</td>
<td>El Tipo de Grupo no existe.</td>
</tr>
<tr>
<td>30013</td>
<td>No se pudo determinar el coordinador del grupo.</td>
</tr>
<tr>
<td>30014</td>
<td>No se encontro registro en la FSD008 para la cuenta [Número de cuenta].</td>
</tr>
<tr>
<td>30015</td>
<td>No se obtuvo el titular representativo de la cuenta [Número de cuenta].</td>
</tr>
<tr>
<td>30016</td>
<td>No se pudo determinar la sucursal de la solicitud.</td>
</tr>
<tr>
<td>30017</td>
<td>No se pudo determinar el asesor de la solicitud.</td>
</tr>
<tr>
<td>30018</td>
<td>El código de campaña no existe.</td>
</tr>
<tr>
<td>30019</td>
<td>El código de origen de captación no existe.</td>
</tr>
</tbody>
</table>
</div></template>


