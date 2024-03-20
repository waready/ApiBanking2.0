<template><div><h1 id="obtener-tipo-de-cambio" tabindex="-1"><a class="header-anchor" href="#obtener-tipo-de-cambio"><span>Obtener Tipo de Cambio</span></a></h1>
<p>Método que toma un monto en una determinada moneda origen y lo convierte a una moneda destino, devolviendo los tipos de cambio de ambas monedas.</p>
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
<td>BTPrecios.ObtenerTipoCambio</td>
<td>RBTPG145</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Tipo de Cambio:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrecios.ObtenerTipoCambio> 
         <bts:Btinreq>             
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>130620181211370000433575</bts:Token> 
            <bts:Device>ES</bts:Device> 
         </bts:Btinreq> 
         <bts:monedaOrigen>2</bts:monedaOrigen> 
         <bts:monedaDestino>98</bts:monedaDestino> 
         <bts:montoOrigen>1000</bts:montoOrigen> 
         <bts:tipoCotizacion>C</bts:tipoCotizacion> 
      </bts:BTPrecios.ObtenerTipoCambio> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrecios_v1?ObtenerTipoCambio=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: c27aec65-f66f-b138-f9d3-15a243b6d5e4' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
   "monedaOrigen": 2, 
   "monedaDestino": 98, 
   "montoOrigen": 1000, 
   "tipoCotizacion": "C" 
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
      <BTPrecios.ObtenerTipoCambioResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>MINSTALADOR</Usuario> 
            <Token>130620181211370000433575</Token> 
            <Device>ES</Device> 
         </Btinreq> 
         <precioOrigen>30.00</precioOrigen> 
         <precioDestino>28.00</precioDestino> 
         <montoDestino>1072.00</montoDestino> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTPrecios.ObtenerTipoCambio</Servicio> 
            <Fecha>2018-06-13</Fecha> 
            <Hora>12:19:47</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>6670</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTPrecios.ObtenerTipoCambioResponse> 
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
   "precioOrigen": 30.00, 
   "precioDestino": 28.00, 
   "montoDestino": 1072.00, 
   "Erroresnegocio": { 
      "BTErrorNegocio": [] 
   }, 
   "Btoutreq": { 
      "Numero": "6670", 
      "Estado": "OK", 
      "Servicio": "BTPrecios.ObtenerTipoCambio", 
      "Fecha": "2018-06-13", 
      "Requerimiento": "1", 
      "Hora": "12:19:47", 
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
<td>monedaOrigen</td>
<td>Short</td>
<td>Identificador de moneda origen.</td>
</tr>
<tr>
<td>monedaDestino</td>
<td>Short</td>
<td>Identificador de moneda destino.</td>
</tr>
<tr>
<td>montoOrigen</td>
<td>Double</td>
<td>Monto a convertir.</td>
</tr>
<tr>
<td>tipoCotizacion</td>
<td>String</td>
<td>Tipo de cotización ('C': Compra, 'V': Venta).</td>
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
<td>precioOrigen</td>
<td>Double</td>
<td>Tipo de cambio de la moneda origen respecto a moneda nacional.</td>
</tr>
<tr>
<td>precioDestino</td>
<td>Double</td>
<td>Tipo de cambio de la moneda destino respecto a moneda nacional.</td>
</tr>
<tr>
<td>montoDestino</td>
<td>Double</td>
<td>Monto origen convertido a moneda destino.</td>
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
<td>Moneda Origen y Moneda Destino no pueden ser la mismas.</td>
</tr>
<tr>
<td>40001</td>
<td>Error en la conversion de moneda: [Error generado por rutina RRG0006X].</td>
</tr>
</tbody>
</table>
<p>ECHO está desactivado.</p>
</div></template>


