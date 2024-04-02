<template><div><h1 id="actualizar-cuenta-preferencial" tabindex="-1"><a class="header-anchor" href="#actualizar-cuenta-preferencial"><span>Actualizar Cuenta Preferencial</span></a></h1>
<p>Método para actualizar la cuenta preferencial de tarjeta de débito.</p>
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
<td>BTTarjetasDeDebito.ActualizarCuentaPreferencial</td>
<td>RBTPG774</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Actualizar Cuenta Preferencial:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTTarjetasDeDebito.ActualizarCuentaPreferencial> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>BA</bts:Usuario> 
            <bts:Token>0211202010280000399672</bts:Token> 
            <bts:Device>MC</bts:Device> 
         </bts:Btinreq> 
         <bts:clienteUId>1</bts:clienteUId> 
         <bts:tarjetaUId>109</bts:tarjetaId> 
         <bts:operacionUId>10</bts:operacionUId> 
      </bts:BTTarjetasDeDebito.ActualizarCuentaPreferencial> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito_v1?ActualizarCuentaPreferencial' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
		"Canal": "BTDIGITAL", 
		"Requerimiento": "1", 
		"Usuario": "BA", 
		"Token": "0211202010280000399672", 
		"Device": "MC" 
	 }, 
	 "clienteUId": "1", 
	 "tarjetaUId": "109" 
	 "operacionUId": "10" 
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
      <BTTarjetasDeDebito.ActualizarCuentaPreferencialResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>BA</Usuario> 
            <Token>0211202010280000399672</Token> 
            <Device>MC</Device> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTTarjetasDeDebito.ActualizarCuentaPreferencial</Servicio> 
            <Fecha>2020-11-02</Fecha> 
            <Hora>12:06:37</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>10140</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTTarjetasDeDebito.ActualizarCuentaPreferencialResponse> 
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
      "Usuario": "BA", 
      "Token": "0211202010280000399672", 
      "Device": "MC" 
   }, 
   "Erroresnegocio": null, 
   "Btoutreq": { 
      "Canal": "BTDIGITAL", 
      "Servicio": "BTTarjetasDeDebito.ActualizarCuentaPreferencial", 
      "Fecha": "2020-11-02", 
      "Hora": "12:06:37", 
      "Requerimiento": "1", 
      "Numero": "10140", 
      "Estado": "OK" 
   } 
} 
``` 
</code-block> 
</code-group> 
<h3 id="version-v2r3" tabindex="-1"><a class="header-anchor" href="#version-v2r3"><span>Versión V2R3</span></a></h3>
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
<td>tarjetaId</td>
<td>Long</td>
<td>Identificador de tarjeta.</td>
</tr>
<tr>
<td>operacionUId</td>
<td>Long</td>
<td>Identificador único de operación de cuenta preferencial del cliente.</td>
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
<td>30000</td>
<td>No se recibió el identificador de la tarjeta.</td>
</tr>
<tr>
<td>30001</td>
<td>No existe registro con el identificador indicado.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recupero la operación para el identificador recibido.</td>
</tr>
<tr>
<td>30003</td>
<td>La Cuenta Preferencial no pertence al Cliente.</td>
</tr>
<tr>
<td>30004</td>
<td>No se recibió ni Id ni Número de Tarjeta.</td>
</tr>
<tr>
<td>30005</td>
<td>No se encontró una tarjeta con el Id recibido.</td>
</tr>
<tr>
<td>30006</td>
<td>No se encontró una tarjeta con el Número recibido.</td>
</tr>
<tr>
<td>40001</td>
<td>La Tarjeta no pertenece al Cliente.</td>
</tr>
<tr>
<td>40102</td>
<td>Error, se ha indicado un Tipo de Cuenta inhabilitado/erróneo.</td>
</tr>
<tr>
<td>40104</td>
<td>Tarjeta inexistente TDD003.</td>
</tr>
<tr>
<td>40105</td>
<td>Error, se ha excedido el máximo de X cuentas permitidas.</td>
</tr>
<tr>
<td>40105</td>
<td>Error, no se permiten mas de X Cajas de Ahorro.</td>
</tr>
<tr>
<td>40105</td>
<td>Error, no se permiten mas de X Cuentas Corriente.</td>
</tr>
<tr>
<td>40105</td>
<td>Error, solo se permite una Cuenta PREFERENCIAL por Moneda.</td>
</tr>
<tr>
<td>40105</td>
<td>Error, solo se permiten X Cuentas PREFERENCIALES.</td>
</tr>
<tr>
<td>40105</td>
<td>Error, no se han asociado Cuentas a la Tarjeta.</td>
</tr>
<tr>
<td>40105</td>
<td>Error, se debera indicar una Cuenta como PREFERENCIAL, por favor indicarla.</td>
</tr>
</tbody>
</table>
<h3 id="version-v2r2" tabindex="-1"><a class="header-anchor" href="#version-v2r2"><span>Versión V2R2</span></a></h3>
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
<td>tarjetaUId</td>
<td>Long</td>
<td>Identificador único de tarjeta.</td>
</tr>
<tr>
<td>operacionUId</td>
<td>Long</td>
<td>Identificador único de operación de cuenta preferencial del cliente.</td>
</tr>
</tbody>
</table>
<h3 id="datos-de-salida-1" tabindex="-1"><a class="header-anchor" href="#datos-de-salida-1"><span>Datos de salida</span></a></h3>
<p>No aplica.</p>
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
<td>No se recibió identificador único de operación.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recibió identificador único de tarjeta.</td>
</tr>
<tr>
<td>30003</td>
<td>No se recibió identificador único de cliente.</td>
</tr>
<tr>
<td>30004</td>
<td>No se recuperó la operación para el Identificador: [Número de identificador]</td>
</tr>
<tr>
<td>30005</td>
<td>La operación ingresada no pertenece al cliente.</td>
</tr>
<tr>
<td>30006</td>
<td>La cuenta ingresada no pertenece al habiente de la tarjeta.</td>
</tr>
<tr>
<td>30006</td>
<td>La cuenta ingresada no pertenece al habiente de la tarjeta.</td>
</tr>
<tr>
<td>40003</td>
<td>No existe registro con la cuenta indicada.</td>
</tr>
<tr>
<td>40004</td>
<td>No existe registro con el identificador indicado.</td>
</tr>
</tbody>
</table>
</div></template>


