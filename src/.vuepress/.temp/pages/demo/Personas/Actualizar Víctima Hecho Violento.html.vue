<template><div><h1 id="actualizar-victima-hecho-violento" tabindex="-1"><a class="header-anchor" href="#actualizar-victima-hecho-violento"><span>Actualizar Víctima Hecho Violento</span></a></h1>
<p>Método para actualizar la información de una persona víctima de un hecho violento.</p>
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
<td>BTPersonas.ActualizarVictimaHechoViolento</td>
<td>RBTPCO05</td>
<td>Colombia</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Actualizar Víctima Hecho Violento:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ActualizarVictimaHechoViolento> 
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
            <bts:fechaCertificacion>2021-10-20</bts:fechaCertificacion> 
            <bts:fechaVencimiento>2022-08-20</bts:fechaVencimiento> 
            <bts:corregimiento>No tiene</bts:corregimiento> 
            <bts:departamentoId>8</bts:departamentoId> 
            <bts:fechaHecho>2021-06-20</bts:fechaHecho> 
         </bts:sdtVictimaHechoViolento> 
      </bts:BTPersonas.ActualizarVictimaHechoViolento> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ActualizarVictimaHechoViolento \ 
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
	  "fechaCertificacion": "2021-10-20", 
	  "fechaVencimiento": "2022-08-20", 
	  "corregimiento": "No tiene", 
	  "departamentoId": "8", 
	  "fechaHecho": "2021-06-20" 
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
      <BTPersonas.ActualizarVictimaHechoViolentoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>042638a184CD285A89A23FBE</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>2089</Numero> 
            <Servicio>BTPersonas.ActualizarVictimaHechoViolento</Servicio> 
            <Estado>OK</Estado> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2020-03-10</Fecha> 
            <Hora>08:29:11</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPersonas.ActualizarVictimaHechoViolentoResponse> 
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
          "Numero": "2089", 
          "Servicio": "BTPersonas.ActualizarVictimaHechoViolento", 
          "Estado": "OK", 
          "Requerimiento": "1", 
          "Fecha": "2020-03-10", 
          "Hora": "08:29:11", 
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
<td>40011</td>
<td>El departamento ingresado no es válido.</td>
</tr>
<tr>
<td>40013</td>
<td>El municipio ingresado no es válido.</td>
</tr>
<tr>
<td>40019</td>
<td>El tipo de hecho ingresado no es válido.</td>
</tr>
<tr>
<td>40020</td>
<td>No existe registro.</td>
</tr>
</tbody>
</table>
</div></template>


