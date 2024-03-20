<template><div><h1 id="actualizar-grupo" tabindex="-1"><a class="header-anchor" href="#actualizar-grupo"><span>Actualizar Grupo</span></a></h1>
<p>Método para actualizar la información de un grupo de crédito.</p>
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
<td>BTMicrofinanzas.ActualizarGrupo</td>
<td>RBTPG430</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Actualizar Grupo:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTMicrofinanzas.ActualizarGrupo> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>1821984229CD285A89A23FBE</bts:Token> 
            <bts:Device>AC</bts:Device> 
         </bts:Btinreq> 
         <grupoId>36</grupoId> 
         <bts:sdtDetalleGrupo> 
            <tipoId>1</tipoId> 
            <tipo></tipo> 
            <nombre>Solidarios</nombre> 
            <nombreExtendido>Solidarios S.A.</nombreExtendido> 
            <asesorId>1</asesorId> 
            <asesor/> 
            <fechaAlta></fechaAlta> 
            <fechaDesde>2025-05-02</fechaDesde> 
            <fechaHasta>2030-04-20</fechaHasta> 
            <usuarioAlta></usuarioAlta> 
            <vigente></vigente> 
            <bloqueado></bloqueado> 
            <nroSecuencia>0</nroSecuencia> 
            <agenciaId></agenciaId> 
            <agencia></agencia> 
         </bts:sdtDetalleGrupo> 
      </bts:BTMicrofinanzas.ActualizarGrupo> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?ActualizarGrupo=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: fc072469-5f8a-a897-b716-d45406adf3e7' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "1", 
		"Usuario": "INSTALADOR", 
		"Requerimiento": "1", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "grupoId": "36", 
    "sdtDetalleGrupo": { 
		"tipoId": "1", 
		"tipo": "", 
		"nombre": "Solidario", 
		"nombreExtendido": "Solidarios S.A.", 
		"asesorId": "1", 
		"asesor": "", 
		"fechaAlta": "", 
		"fechaDesde": "2025-05-02", 
		"fechaHasta": "2030-04-20", 
		"usuarioAlta": "", 
		"vigente": "", 
		"bloqueado": "", 
		"nroSecuencia": "0", 
		"agenciaId": "", 
		"agencia": "" 
	} 
} 
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
      <BTMicrofinanzas.ActualizarGrupoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>1821984229CD285A89A23FBE</Token> 
            <Device>AC</Device> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTMicrofinanzas.ActualizarGrupo</Servicio> 
            <Fecha>2020-04-21</Fecha> 
            <Hora>11:18:56</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>5039</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTMicrofinanzas.ActualizarGrupoResponse> 
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
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "786", 
        "Estado": "OK", 
        "Servicio": "BTMicrofinanzas.ActualizarGrupo", 
        "Fecha": "2017-12-15", 
        "Requerimiento": "", 
        "Hora": "16:35:22", 
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
<td>grupoId</td>
<td>Int</td>
<td>Identificador de grupo.</td>
</tr>
<tr>
<td>sdtDetalleGrupo</td>
<td>sBTDetalleGrupo</td>
<td>Datos del grupo.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTDetalleGrupo son los siguientes:</p>
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
<td>tipoId</td>
<td>Short</td>
<td>Identificador del tipo de grupo.</td>
</tr>
<tr>
<td>tipo</td>
<td>String</td>
<td>Tipo de grupo.</td>
</tr>
<tr>
<td>nombre</td>
<td>String</td>
<td>Nombre del grupo.</td>
</tr>
<tr>
<td>nombreExtendido</td>
<td>String</td>
<td>Nombre extendido del grupo.</td>
</tr>
<tr>
<td>asesorId</td>
<td>Int</td>
<td>Identificador del asesor del grupo.</td>
</tr>
<tr>
<td>asesor</td>
<td>String</td>
<td>Asesor del grupo.</td>
</tr>
<tr>
<td>fechaAlta</td>
<td>Date</td>
<td>Fecha de alta del grupo.</td>
</tr>
<tr>
<td>fechaDesde</td>
<td>Date</td>
<td>Fecha comienzo vigencia.</td>
</tr>
<tr>
<td>fechaHasta</td>
<td>Date</td>
<td>Fecha fin vigencia.</td>
</tr>
<tr>
<td>usuarioAlta</td>
<td>String</td>
<td>Usuario de alta del grupo.</td>
</tr>
<tr>
<td>vigente</td>
<td>String</td>
<td>¿Es vigente? (S/N).</td>
</tr>
<tr>
<td>bloqueado</td>
<td>String</td>
<td>¿Está bloqueado? (S/N).</td>
</tr>
<tr>
<td>nroSecuencia</td>
<td>Int</td>
<td>Número de secuencia.</td>
</tr>
<tr>
<td>agenciaId</td>
<td>Int</td>
<td>Identificador de agencia.</td>
</tr>
<tr>
<td>agencia</td>
<td>String</td>
<td>Agencia.</td>
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
<td>40002</td>
<td>El tipo de grupo no existe.</td>
</tr>
<tr>
<td>40003</td>
<td>Debe ingresar nombre de grupo.</td>
</tr>
<tr>
<td>40013</td>
<td>El grupo ingresado no existe.</td>
</tr>
<tr>
<td>40005</td>
<td>Fecha de Vigencia Desde debe ser mayor o igual a Fecha de Creación.</td>
</tr>
<tr>
<td>40006</td>
<td>Debe ingresar Fecha de Vigencia Hasta.</td>
</tr>
<tr>
<td>40007</td>
<td>Fecha de Vigencia Hasta debe ser mayor a Fecha Vigencia Desde.</td>
</tr>
</tbody>
</table>
</div></template>


