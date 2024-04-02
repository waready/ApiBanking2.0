<template><div><h1 id="obtener-conyuge" tabindex="-1"><a class="header-anchor" href="#obtener-conyuge"><span>Obtener Cónyuge</span></a></h1>
<p>Método para obtener los datos del cónyuge de una persona física.</p>
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
<td>BTPersonas.ObtenerConyuge</td>
<td>RBTPG290</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Cónyuge:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ObtenerConyuge> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>170320211539200000477790</bts:Token> 
            <bts:Device>AC</bts:Device> 
         </bts:Btinreq> 
         <bts:personaUId>2</bts:personaUId> 
      </bts:BTPersonas.ObtenerConyuge> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerConyuge' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
  	"bts:Btinreq": { 
	  "bts:Canal": "BTDIGITAL", 
	  "bts:Requerimiento": "1", 
	  "bts:Usuario": "INSTALADOR", 
	  "bts:Token": "170320211539200000477790", 
	  "bts:Device": "AC" 
	}, 
	"personaUId": 2, 
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
      <BTPersonas.ObtenerConyugeResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>170320211539200000477790</Token> 
            <Device>AC</Device> 
         </Btinreq> 
         <apellidoMatrimonio/> 
         <sdtDatosConyuge> 
            <personaUId>18</personaUId> 
            <primerNombre>PEDRO</primerNombre> 
            <segundoNombre/> 
            <primerApellido>CRAMPET</primerApellido> 
            <segundoApellido/> 
         </sdtDatosConyuge> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTPersonas.ObtenerConyuge</Servicio> 
            <Fecha>2021-03-17</Fecha> 
            <Hora>15:44:26</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>10689</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTPersonas.ObtenerConyugeResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
{ 
	"Btinreq": { 
	  "Canal": "BTDIGITAL", 
	  "Requerimiento": "1", 
	  "Usuario": "INSTALADOR", 
	  "Token": "170320211539200000477790", 
	  "Device": "AC" 
	}, 
	"apellidoMatrimonio":"", 
	"sdtDatosConyuge": { 
	  "personaUId": "18", 
	  "primerNombre": "PEDRO", 
	  "segundoNombre": "", 
	  "primerApellido": "CRAMPET", 
	  "segundoApellido": "" 
	}, 
	"Erroresnegocio": { 
	}, 
	"Btoutreq": { 
	  "Canal": "BTDIGITAL", 
	  "Servicio": "BTPersonas.ObtenerConyuge", 
	  "Fecha": "2021-03-17", 
	  "Hora": "15:44:26", 
	  "Requerimiento": "1", 
	  "Numero": "10689", 
	  "Estado": "OK" 
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
<td>personaUId</td>
<td>Long</td>
<td>Identificador de persona</td>
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
<td>apellidoMatrimonio</td>
<td>String</td>
<td>Apellido de matrimonio</td>
</tr>
<tr>
<td>sdtDatosConyuge</td>
<td>sBTDatosConyuge</td>
<td>Datos del conyuge</td>
</tr>
</tbody>
</table>
<p>El tipo de dato estructurado sBTDatosConyuge tiene los siguientes campos:</p>
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
<td>Identificador del cónyuge</td>
</tr>
<tr>
<td>primerNombre</td>
<td>String</td>
<td>Primer nombre del cónyuge</td>
</tr>
<tr>
<td>segundoNombre</td>
<td>String</td>
<td>Segundo nombre del cónyuge</td>
</tr>
<tr>
<td>primerApellido</td>
<td>String</td>
<td>Primer apellido del cónyuge</td>
</tr>
<tr>
<td>segundoApellido</td>
<td>String</td>
<td>Segundo apellido del cónyuge</td>
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
<td>No se recibió el identificador de persona.</td>
</tr>
<tr>
<td>30002</td>
<td>El identificador no corresponde a una persona física</td>
</tr>
<tr>
<td>30013</td>
<td>No existe registro para el identificador único.</td>
</tr>
</tbody>
</table>
</div></template>


