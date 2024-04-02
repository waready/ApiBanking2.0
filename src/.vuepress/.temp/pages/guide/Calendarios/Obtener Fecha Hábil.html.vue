<template><div><h1 id="obtener-fecha-habil" tabindex="-1"><a class="header-anchor" href="#obtener-fecha-habil"><span>Obtener Fecha Hábil</span></a></h1>
<p>Método que devuelve si la fecha indicada es una fecha hábil. Si no se recibe identificador de calendario, devuelve para el calendario de la sucursal central.</p>
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
<td>BTCalendarios.ObtenerFechaHabil</td>
<td>RBTPG293</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Fecha Hábil:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCalendarios.ObtenerFechaHabil> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>120320211555340000388219</bts:Token> 
            <bts:Device>AC</bts:Device> 
         </bts:Btinreq> 
         <bts:calendarioId>1</bts:calendarioId> 
         <bts:fecha>2020-11-14</bts:fecha> 
      </bts:BTCalendarios.ObtenerFechaHabil> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCalendarios_v1?ObtenerFechaHabil' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
	"Btinreq": { 
	  "Canal": "BTDIGITAL", 
	  "Requerimiento": "1", 
	  "Usuario": "INSTALADOR", 
	  "Token": "120320211555340000388219", 
	  "Device": "AC" 
	}, 
	"calendarioId": "1", 
	"fecha": "2020-11-14" 
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
      <BTCalendarios.ObtenerFechaHabilResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>120320211555340000388219</Token> 
            <Device>AC</Device> 
         </Btinreq> 
         <fechaHabil>N</fechaHabil> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTCalendarios.ObtenerFechaHabil</Servicio> 
            <Fecha>2021-03-12</Fecha> 
            <Hora>15:58:02</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>10660</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTCalendarios.ObtenerFechaHabilResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
 { 
 	"Btinreq": { 
	  "Device": "AC", 
	  "Usuario": "INSTALADOR", 
	  "Requerimiento": "1", 
	  "Canal": "BTDIGITAL", 
	  "Token": "120320211555340000388219" 
	}, 
	"fechaHabil": "N", 
	"Btoutreq": { 
	  "Numero": "10660", 
	  "Estado": "OK", 
	  "Servicio": "BTCalendarios.ObtenerFechaHabil", 
	  "Requerimiento": "1", 
	  "Fecha": "2021-03-12", 
	  "Canal": "BTDIGITAL", 
	  "Hora": "15:58:02" 
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
<td>calendarioId</td>
<td>Short</td>
<td>Identificador de calendario.</td>
</tr>
<tr>
<td>fecha</td>
<td>Date</td>
<td>Fecha a consultar.</td>
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
<td>fechaHabil</td>
<td>String</td>
<td>¿Es hábil? (S/N)</td>
</tr>
</tbody>
</table>
<h3 id="errores" tabindex="-1"><a class="header-anchor" href="#errores"><span>Errores</span></a></h3>
<p>No aplica</p>
</div></template>


