<template><div><h1 id="crear" tabindex="-1"><a class="header-anchor" href="#crear"><span>Crear</span></a></h1>
<p>Método para dar de alta una tarjeta de débito para un cliente.</p>
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
<td>BTTarjetasDeDebito.Crear</td>
<td>RBTPG066</td>
<td>Global</td>
</tr>
</tbody>
</table>
<p>###Versión V2R3</p>
<blockquote>
<p>Ejemplo de invocación al método Crear:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTTarjetasDeDebito.Crear> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento/> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>be9fc8708b4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:clienteUId>161</bts:clienteUId> 
         <bts:tipoTarjeta>MNO</bts:tipoTarjeta> 
         <bts:nombreTarjeta>AV</bts:nombreTarjeta> 
      </bts:BTTarjetasDeDebito.Crear> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito?Crear=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 9e695134-73f4-1576-72fd-f05ff93d9fba' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
   "clienteUId": 4, 
   "tipoTarjeta": "MNO", 
   "nombreTarjeta": "Mi tarjeta" 
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
      <BTTarjetasDeDebito.CrearResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>be9fc8708b4A8B5C60A82434</Token> 
         </Btinreq> 
         <tarjetaUId>2000002072</tarjetaUId> 
         <numeroTarjeta>5010730101000001203</numeroTarjeta> 
         <fechaExpiracion>2028-10-31</fechaExpiracion> 
         <estadoTarjeta>INACTIVA</estadoTarjeta> 
         <estadoPlastico>A EMITIR</estadoPlastico> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>967</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTTarjetasDeDebito.Crear</Servicio> 
            <Fecha>2017-12-22</Fecha> 
            <Requerimiento/> 
            <Hora>12:26:12</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTTarjetasDeDebito.CrearResponse> 
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
   "tarjetaUId": "2000002073", 
   "numeroTarjeta": "5010730101000001211", 
   "fechaExpiracion": "2028-10-31", 
   "estadoTarjeta": "INACTIVA", 
   "estadoPlastico": "A EMITIR       ", 
   "Erroresnegocio": { 
      "BTErrorNegocio": [] 
   }, 
   "Btoutreq": { 
      "Numero": "968", 
      "Estado": "OK", 
      "Servicio": "BTTarjetasDeDebito.Crear", 
      "Fecha": "2017-12-22", 
      "Requerimiento": "", 
      "Hora": "12:34:25", 
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
<tr>
<td>tipoTarjeta</td>
<td>String</td>
<td>Tipo de tarjeta.</td>
</tr>
<tr>
<td>nombreTarjeta</td>
<td>String</td>
<td>Nombre de tarjeta.</td>
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
<td>fechaExpiracion</td>
<td>Date</td>
<td>Fecha de vencimiento.</td>
</tr>
<tr>
<td>estadoTarjeta</td>
<td>String</td>
<td>Estado de la tarjeta.</td>
</tr>
<tr>
<td>estadoPlastico</td>
<td>String</td>
<td>Estado del plastico.</td>
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
<td>Debe ingresar el identificador de cuenta.</td>
</tr>
<tr>
<td>40001</td>
<td>Tipo de tarjeta inexistente TDD015.</td>
</tr>
<tr>
<td>40002</td>
<td>El titular excede la cantidad máxima de tarjetas activas.</td>
</tr>
<tr>
<td>40003</td>
<td>El titular no existe en FSD001.</td>
</tr>
<tr>
<td>40004</td>
<td>Cuenta de costo no pertenece al titular.</td>
</tr>
<tr>
<td>40005</td>
<td>Cuenta de costo no existe en FSD011.</td>
</tr>
<tr>
<td>40006</td>
<td>Código de domicilio invalido para el titular.</td>
</tr>
<tr>
<td>40007</td>
<td>Cuenta a asociar a tarjeta no pertenece al titular.</td>
</tr>
<tr>
<td>40010</td>
<td>Número de tarjeta no es válido.</td>
</tr>
<tr>
<td>40011</td>
<td>TD nominada, no se debe informar TDD003TAR.</td>
</tr>
<tr>
<td>40020</td>
<td>Funcionalidad inexistente en TDD025.</td>
</tr>
<tr>
<td>40021</td>
<td>Funcionalidad inhabilitada en TDD025.</td>
</tr>
</tbody>
</table>
<p>###Versión V2R2</p>
<blockquote>
<p>Ejemplo de invocación al método Crear:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTTarjetasDeDebito.Crear> 
         <bts:Btinreq> 
            <bts:Device>10.12.10.159</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>BANTOTAL</bts:Usuario> 
            <bts:Token>c7b24221f2F955E77534D3E0</bts:Token> 
         </bts:Btinreq> 
         <bts:clienteUId>1</bts:clienteUId> 
         <bts:operacionUId>1</bts:operacionUId> 
         <bts:tipoTarjeta>N</bts:tipoTarjeta> 
         <bts:nombreTarjeta>prueba</bts:nombreTarjeta> 
         <bts:codigoDomicilio>1</bts:codigoDomicilio> 
      </bts:BTTarjetasDeDebito.Crear> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito_v1?Crear' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 19f16614-b11e-9eaf-4034-1d7994c6019f' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
   "clienteUId": 1, 
   "tipoTarjeta": "N", 
   "nombreTarjeta": "prueba", 
   "operacionUId": 1, 
   "codigoDomicilio": 1 
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
      <BTTarjetasDeDebito.CrearResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10.12.10.159</Device> 
            <Usuario>BANTOTAL</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>c7b24221f2F955E77534D3E0</Token> 
         </Btinreq> 
         <tarjetaUID>109</tarjetaUID> 
         <tarjetaNumero>4203213220220014240</tarjetaNumero> 
         <fechaVencimiento>2027-06-30</fechaVencimiento> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>462</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTTarjetasDeDebito.Crear</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2019-02-25</Fecha> 
            <Hora>17:25:06</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTTarjetasDeDebito.CrearResponse> 
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
   "tarjetaUID": 110, 
   "tarjetaNumero": "4203213220220014259", 
   "fechaVencimiento": "2027-06-30", 
   "Erroresnegocio": { 
      "BTErrorNegocio": [] 
   }, 
   "Btoutreq": { 
      "Numero": 463, 
      "Estado": "OK", 
      "Servicio": "BTTarjetasDeDebito.Crear", 
      "Requerimiento": "1", 
      "Fecha": "2019-02-25", 
      "Hora": "17:29:49", 
      "Canal": "BTDIGITAL" 
   } 
}' 
``` 
</code-block> 
</code-group> 
<h3 id="datos-de-entrada-1" tabindex="-1"><a class="header-anchor" href="#datos-de-entrada-1"><span>Datos de entrada</span></a></h3>
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
<tr>
<td>operacionUId</td>
<td>Long</td>
<td>Identificador único de operación de la cuenta a la que se asociará la tarjeta.</td>
</tr>
<tr>
<td>tipoTarjeta</td>
<td>String</td>
<td>Tipo de tarjeta.</td>
</tr>
<tr>
<td>nombreTarjeta</td>
<td>String</td>
<td>Nombre de tarjeta.</td>
</tr>
<tr>
<td>codigoDomicilio</td>
<td>Byte</td>
<td>Código de domicilio a donde se asociará la tarjeta.</td>
</tr>
</tbody>
</table>
<h3 id="datos-de-salida-1" tabindex="-1"><a class="header-anchor" href="#datos-de-salida-1"><span>Datos de salida</span></a></h3>
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
<tr>
<td>tarjetaNumero</td>
<td>String</td>
<td>Número de tarjeta.</td>
</tr>
<tr>
<td>fechaVencimiento</td>
<td>Date</td>
<td>Fecha de vencimiento.</td>
</tr>
</tbody>
</table>
<h3 id="errores-1" tabindex="-1"><a class="header-anchor" href="#errores-1"><span>Errores</span></a></h3>
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
<td>No se recuperó la cuenta para el identificador de cliente:</td>
</tr>
<tr>
<td>30003</td>
<td>No se recibió el identificador de operación.</td>
</tr>
<tr>
<td>30004</td>
<td>No se recuperó la operación para el identificador.</td>
</tr>
</tbody>
</table>
</div></template>


