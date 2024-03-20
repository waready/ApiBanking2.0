<template><div><h1 id="obtener-datos" tabindex="-1"><a class="header-anchor" href="#obtener-datos"><span>Obtener Datos</span></a></h1>
<p>Método para obtener los datos de un producto de tarjeta de débito.</p>
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
<td>BTTarjetasDeDebito.ObtenerDatos</td>
<td>RBTPG016</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Datos:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTTarjetasDeDebito.ObtenerDatos> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento/> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:tarjetaUId>3</bts:tarjetaUId> 
      </bts:BTTarjetasDeDebito.ObtenerDatos> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito?ObtenerDatos=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 8ab15c2a-49b2-bedc-bcdf-df8d950d94a9' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
   "tarjetaUId": 3 
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
      <BTTarjetasDeDebito.ObtenerDatosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>75e20bd1614A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtEntidadTarjetaDebito> 
            <limites></limites> 
            <paquete>N</paquete> 
            <diasHastaVencimiento>2730</diasHastaVencimiento> 
            <tarjetaUId>3</tarjetaUId> 
            <estadoPlastico>ENTREGADO</estadoPlastico> 
            <descPaquete/> 
            <tipoTarjeta>MAESTRO NOMINADA</tipoTarjeta> 
            <estadoTarjeta>Activa</estadoTarjeta> 
            <numeroTarjeta>5010730101000000098</numeroTarjeta> 
            <fechaVencimiento>2026-03-31</fechaVencimiento> 
            <sucursal>Sucursal Beta</sucursal> 
            <nombreTarjeta>PEREZ SOSA JUAN</nombreTarjeta> 
         </sdtEntidadTarjetaDebito> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>936</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTTarjetasDeDebito.ObtenerDatos</Servicio> 
            <Fecha>2017-12-21</Fecha> 
            <Requerimiento/> 
            <Hora>17:40:29</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTTarjetasDeDebito.ObtenerDatosResponse> 
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
   "sdtEntidadTarjetaDebito": { 
      "limites": { 
         "sBDLimitesTarjeta.it": [] 
      }, 
      "paquete": "N", 
      "diasHastaVencimiento": "2730", 
      "tarjetaUId": "3", 
      "estadoPlastico": "ENTREGADO", 
      "descPaquete": "", 
      "tipoTarjeta": "MAESTRO NOMINADA", 
      "estadoTarjeta": "Activa", 
      "numeroTarjeta": "5010730101000000098", 
      "fechaVencimiento": "2026-03-31", 
      "sucursal": "Sucursal Beta", 
      "nombreTarjeta": "PEREZ SOSA JUAN" 
   }, 
   "Erroresnegocio": { 
      "BTErrorNegocio": [] 
   }, 
   "Btoutreq": { 
      "Numero": "937", 
      "Estado": "OK", 
      "Servicio": "BTTarjetasDeDebito.ObtenerDatos", 
      "Fecha": "2017-12-21", 
      "Requerimiento": "", 
      "Hora": "17:41:23", 
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
<td>tarjetaUId</td>
<td>Long</td>
<td>Identificador único de tarjeta.</td>
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
<td>sdtEntidadTarjetaDebito</td>
<td>sBDTarjetaDebito</td>
<td>Datos de tarjeta de débito.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBDTarjetaDebito son los siguientes:</p>
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
<td>tarjetaUId</td>
<td>Long</td>
<td>Identificador único de tarjeta.</td>
</tr>
<tr>
<td>numeroTarjeta</td>
<td>String</td>
<td>Número de tarjeta.</td>
</tr>
<tr>
<td>tipoTarjeta</td>
<td>String</td>
<td>Tipo de tarjeta.</td>
</tr>
<tr>
<td>sucursal</td>
<td>String</td>
<td>Nombre de la sucursal.</td>
</tr>
<tr>
<td>nombreTarjeta</td>
<td>String</td>
<td>Nombre de la tarjeta.</td>
</tr>
<tr>
<td>fechaVencimiento</td>
<td>Date</td>
<td>Fecha de vecnimiento.</td>
</tr>
<tr>
<td>estadoTarjeta</td>
<td>String</td>
<td>Descripción de estado de la tarjeta.</td>
</tr>
<tr>
<td>estadoPlastico</td>
<td>String</td>
<td>Descripción de estado del plastico.</td>
</tr>
<tr>
<td>diasHastaVencimiento</td>
<td>Int</td>
<td>Días restantes para el vencimiento.</td>
</tr>
<tr>
<td>paquete</td>
<td>String</td>
<td>¿Tiene paquete? (S/N).</td>
</tr>
<tr>
<td>descPaquete</td>
<td>String</td>
<td>Descripción de paquete.</td>
</tr>
<tr>
<td>limites</td>
<td>sBDLimitesTarjeta</td>
<td>Listado de limites de la tarjeta.</td>
</tr>
</tbody>
</table>
<p>###Versión V2R2</p>
<p>Los campos del tipo de dato estructurado sBDLimitesTarjeta son los siguientes:</p>
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
<td>descripcion</td>
<td>String</td>
<td>Descripción del limite.</td>
</tr>
<tr>
<td>moneda</td>
<td>String</td>
<td>Símbolo de la moneda.</td>
</tr>
<tr>
<td>monto</td>
<td>Double</td>
<td>Monto del limite.</td>
</tr>
</tbody>
</table>
<p>###Versión V2R3</p>
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
<td>descripcion</td>
<td>String</td>
<td>Descripción del limite.</td>
</tr>
<tr>
<td>moneda</td>
<td>String</td>
<td>Símbolo de la moneda.</td>
</tr>
<tr>
<td>limiteChip</td>
<td>Double</td>
<td>Monto del limite por chip.</td>
</tr>
<tr>
<td>limiteBandaMagnetica</td>
<td>Double</td>
<td>Monto del limite por banda magnética.</td>
</tr>
<tr>
<td>limiteNoPresencial</td>
<td>Double</td>
<td>Monto del limite presencial.</td>
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
<td>No se recibió el identificador de tarjeta.</td>
</tr>
</tbody>
</table>
</div></template>


