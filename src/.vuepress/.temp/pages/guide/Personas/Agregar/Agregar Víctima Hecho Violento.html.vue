<template><div><h1 id="agregar-victima-hecho-violento" tabindex="-1"><a class="header-anchor" href="#agregar-victima-hecho-violento"><span>Agregar Víctima Hecho Violento</span></a></h1>
<p>Método para agregar la información de una persona víctima de un hecho violento</p>
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
<td>BTPersonas.AgregarVictimaHechoViolento</td>
<td>RBTPCO04</td>
<td>Colombia</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Agregar Víctima Hecho Violento:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.AgregarVictimaHechoViolento> 
         <bts:Btinreq> 
            <bts:Token>042638a184CD285A89A23FBE</bts:Token> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Device>1</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:personaUId>42</bts:personaUId> 
         <bts:esVictima>S</bts:esVictima> 
         <bts:sdtVictimaHechoViolento> 
            <bts:entidadId>3</bts:entidadId> 
            <bts:municipio></bts:municipio> 
            <bts:departamento></bts:departamento> 
            <bts:inspeccionPolicia>Golpes</bts:inspeccionPolicia> 
            <bts:sitio>Casa</bts:sitio> 
            <bts:municipioId>421</bts:municipioId> 
            <bts:tipoId>3</bts:tipoId> 
            <bts:vereda>Av Italia</bts:vereda> 
            <bts:entidad></bts:entidad> 
            <bts:tipo></bts:tipo> 
            <bts:fechaCertificacion>2020-08-20</bts:fechaCertificacion> 
            <bts:fechaVencimiento>2021-08-20</bts:fechaVencimiento> 
            <bts:corregimiento>No tiene</bts:corregimiento> 
            <bts:departamentoId>8</bts:departamentoId> 
            <bts:fechaHecho>2020-06-20</bts:fechaHecho> 
         </bts:sdtVictimaHechoViolento> 
      </bts:BTPersonas.AgregarVictimaHechoViolento> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?AgregarVictimaHechoViolento \ 
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
	"personaUId": "42", 
	"esVictima": "S", 
	"sdtVictimaHechoViolento": { 
	  "entidadId": "3", 
	  "inspeccionPolicia": "Golpes", 
	  "sitio": "Casa", 
	  "municipioId": "421", 
	  "tipoId": "3", 
	  "vereda": "Av Italia", 
	  "fechaCertificacion": "2020-08-20", 
	  "fechaVencimiento": "2021-08-20", 
	  "corregimiento": "No tiene", 
	  "departamentoId": "8", 
	  "fechaHecho": "2020-06-20" 
	}, 
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
      <BTPersonas.AgregarVictimaHechoViolentoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>042638a184CD285A89A23FBE</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>2073</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPersonas.AgregarVictimaHechoViolento</Servicio> 
            <Fecha>2020-03-10</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>07:51:55</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPersonas.AgregarVictimaHechoViolentoResponse> 
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
   "Btoutreq": { 
      "Numero": "2073", 
      "Estado": "OK", 
      "Servicio": "BTPersonas.AgregarVictimaHechoViolento", 
      "Fecha": "2020-03-10", 
      "Requerimiento": "1", 
      "Hora": "07:51:55", 
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
<td>esVictima</td>
<td>String</td>
<td>Es víctima de hecho violento (S/N).</td>
</tr>
<tr>
<td>sdtVictimaHechoViolento</td>
<td>sBTPCOVictimaHechoViolento</td>
<td>Datos de persona víctima de hecho violento (Se ingresa solo si el campo esVictima = S).</td>
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
<td>30001</td>
<td>No se recibió identificador de persona.</td>
</tr>
<tr>
<td>40001</td>
<td>Debe ingresar entidad.</td>
</tr>
<tr>
<td>40002</td>
<td>La entidad ingresada no es válida.</td>
</tr>
<tr>
<td>40003</td>
<td>Debe ingresar fecha del hecho.</td>
</tr>
<tr>
<td>40004</td>
<td>La fecha del hecho no puede ser posterior a la fecha de apertura.</td>
</tr>
<tr>
<td>40005</td>
<td>Debe ingresar fecha de certificación.</td>
</tr>
<tr>
<td>40006</td>
<td>La fecha de certificación no puede ser anterior a la fecha del hecho.</td>
</tr>
<tr>
<td>40007</td>
<td>Debe ingresar fecha de vencimiento.</td>
</tr>
<tr>
<td>40008</td>
<td>La fecha de vencimiento no puede ser anterior a la fecha del hecho.</td>
</tr>
<tr>
<td>40009</td>
<td>La fecha de vencimiento no puede ser anterior a la fecha de certificación.</td>
</tr>
<tr>
<td>40010</td>
<td>Debe ingresar departamento.</td>
</tr>
<tr>
<td>40011</td>
<td>El departamento ingresado no es válido.</td>
</tr>
<tr>
<td>40012</td>
<td>Debe ingresar municipio.</td>
</tr>
<tr>
<td>40013</td>
<td>El municipio ingresado no es válido.</td>
</tr>
<tr>
<td>40014</td>
<td>Debe ingresar corregimiento.</td>
</tr>
<tr>
<td>40015</td>
<td>Debe ingresar inspección de policía.</td>
</tr>
<tr>
<td>40016</td>
<td>Debe ingresar vereda.</td>
</tr>
<tr>
<td>40017</td>
<td>Debe ingresar sitio.</td>
</tr>
<tr>
<td>40018</td>
<td>Debe ingresar tipo de hecho.</td>
</tr>
<tr>
<td>40019</td>
<td>El tipo de hecho ingresado no es válido.</td>
</tr>
<tr>
<td>40020</td>
<td>Ya existe registro.</td>
</tr>
</tbody>
</table>
</div></template>


