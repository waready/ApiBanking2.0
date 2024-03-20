<template><div><h1 id="obtener-victima-hecho-violento" tabindex="-1"><a class="header-anchor" href="#obtener-victima-hecho-violento"><span>Obtener Víctima Hecho Violento</span></a></h1>
<p>Método para obtener la información de una persona víctima de un hecho violento.</p>
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
<td>BTPersonas.ObtenerVictimaHechoViolento</td>
<td>RBTPCO06</td>
<td>Colombia</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Víctima Hecho Violento:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ObtenerVictimaHechoViolento> 
         <bts:Btinreq> 
            <bts:Token>d235ac28e6CD285A89A23FBE</bts:Token> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Device>1</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:personaUId>21</bts:personaUId> 
      </bts:BTPersonas.ObtenerVictimaHechoViolento> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerVictimaHechoViolento \ 
-H 'cache-control: no-cache' \ 
-H 'content-type: application/json' \ 
-d '{ 
	"Btinreq": { 
		"Device": "1", 
		"Usuario": "INSTALADOR", 
		"Requerimiento": "1", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
	"personaUId": "21" 
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
      <BTPersonas.ObtenerVictimaHechoViolentoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>d235ac28e6CD285A89A23FBE</Token> 
         </Btinreq> 
         <esVictima>S</esVictima> 
         <sdtVictimaHechoViolento> 
            <entidadId>4</entidadId> 
            <municipio>SAN JUAN DEL CESAR</municipio> 
            <departamento>LA GUAJIRA</departamento> 
            <inspeccionPolicia>Herida de arma</inspeccionPolicia> 
            <sitio>Casa</sitio> 
            <municipioId>650</municipioId> 
            <tipoId>2</tipoId> 
            <vereda>25 de Agosto</vereda> 
            <fechaCertificacion>2020-01-07</fechaCertificacion> 
            <tipo>Medio</tipo> 
            <entidad>Personerías Municipales</entidad> 
            <fechaVencimiento>2021-11-30</fechaVencimiento> 
            <corregimiento>No tiene</corregimiento> 
            <departamentoId>44</departamentoId> 
            <fechaHecho>2019-05-03</fechaHecho> 
         </sdtVictimaHechoViolento> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>1966</Numero> 
            <Servicio>BTPersonas.ObtenerVictimaHechoViolento</Servicio> 
            <Estado>OK</Estado> 
            <Fecha>2020-03-09</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>10:36:30</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPersonas.ObtenerVictimaHechoViolentoResponse> 
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
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
	"esVictima": "S", 
	"sdtVictimaHechoViolento": { 
		"entidadId": "4", 
		"municipio": "SAN JUAN DEL CESAR", 
		"departamento": "LA GUAJIRA", 
		"inspeccionPolicia": "Herida de arma", 
		"sitio": "Casa", 
		"municipioId": "650", 
		"tipoId": "2", 
		"vereda": "25 de Agosto", 
		"fechaCertificacion": "2020-01-07", 
		"tipo": "Medio", 
		"entidad": "Personerías Municipales", 
		"fechaVencimiento": "2021-11-30", 
		"corregimiento": "No tiene", 
		"departamentoId": "44", 
		"fechaHecho": "2019-05-03" 
	}, 
	"Btoutreq": { 
	  "Numero": "1729", 
	  "Estado": "OK", 
	  "Servicio": "BTPersonas.ObtenerVictimaHechoViolento", 
	  "Requerimiento": "1", 
	  "Fecha": "2020-03-05", 
	  "Canal": "BTDIGITAL", 
	  "Hora": "13:10:51" 
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
<td>Identificador único de persona</td>
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
<td>esVictima</td>
<td>String</td>
<td>Es víctima de hecho violento (S/N).</td>
</tr>
<tr>
<td>sdtVictimaHechoViolento</td>
<td>sBTPCOVictimaHechoViolento</td>
<td>Datos de víctima de hecho violento.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTPCOVictimaHechoViolento son los siguientes:</p>
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
<td>entidadId</td>
<td>Long</td>
<td>Identificador de entidad.</td>
</tr>
<tr>
<td>entidad</td>
<td>String</td>
<td>Nombre de entidad.</td>
</tr>
<tr>
<td>fechaHecho</td>
<td>Date</td>
<td>Fecha en la que ocurrió el hecho.</td>
</tr>
<tr>
<td>fechaCertificacion</td>
<td>Date</td>
<td>Fecha en la que recibió la certificación.</td>
</tr>
<tr>
<td>fechaVencimiento</td>
<td>Date</td>
<td>Fecha de vencimiento de la certificación.</td>
</tr>
<tr>
<td>departamentoId</td>
<td>Short</td>
<td>Identificador de departamento.</td>
</tr>
<tr>
<td>departamento</td>
<td>String</td>
<td>Nombre del departamento donde ocurrió el hecho.</td>
</tr>
<tr>
<td>municipioId</td>
<td>Short</td>
<td>Identificador de municipio.</td>
</tr>
<tr>
<td>municipio</td>
<td>String</td>
<td>Nombre del municipio donde ocurrió el hecho.</td>
</tr>
<tr>
<td>corregimiento</td>
<td>String</td>
<td>Corregimiento.</td>
</tr>
<tr>
<td>inspeccionPolicia</td>
<td>String</td>
<td>Inspección de policía.</td>
</tr>
<tr>
<td>vereda</td>
<td>String</td>
<td>Vereda.</td>
</tr>
<tr>
<td>sitio</td>
<td>String</td>
<td>Sitio.</td>
</tr>
<tr>
<td>tipoId</td>
<td>Short</td>
<td>Identificador de tipo de hecho (1 = Leve / 2 = Medio / 3 = Grave) .</td>
</tr>
<tr>
<td>tipo</td>
<td>String</td>
<td>Tipo de hecho.</td>
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
<td>30013</td>
<td>No existe registro para el identificador único.</td>
</tr>
</tbody>
</table>
</div></template>


