<template><div><h1 id="obtener-detalle-de-ordinal" tabindex="-1"><a class="header-anchor" href="#obtener-detalle-de-ordinal"><span>Obtener Detalle de Ordinal</span></a></h1>
<p>Método para obtener el detalle del ordinal de un movimiento.</p>
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
<td>BTContabilidad.ObtenerDetalleOrdinal</td>
<td>RBTPG337</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Detalle de Ordinal:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTContabilidad.ObtenerDetalleOrdinal> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>IN</bts:Usuario> 
            <bts:Token>12420485CD285A89A23FBE</bts:Token> 
            <bts:Device>MC</bts:Device> 
         </bts:Btinreq> 
         <bts:movimientoUId>8</bts:movimientoUId> 
         <bts:ordinal>1</bts:ordinal> 
         <bts:subOrdinal>1</bts:subOrdinal> 
      </bts:BTContabilidad.ObtenerDetalleOrdinal> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTContabilidad_v1?ObtenerDetalleOrdinal' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
	 "Btinreq": { 
		"Canal": "BTDIGITAL", 
		"Requerimiento": "1", 
		"Usuario": "IN", 
		"Token": "12420485CD285A89A23FBE", 
		"Device": "MC" 
	 }, 
	 "movimientoUId": "8", 
	 "ordinal":1, 
	 "subOrdinal":1 
  } 
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;/code-block> 
&lt;/code-group> 

> El POST retornará la siguiente estructura: 

&lt;code-group> 
&lt;code-block title="XML" active> 
```xml 
&lt;SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   &lt;SOAP-ENV:Body> 
      &lt;BTContabilidad.ObtenerDetalleOrdinalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         &lt;Btinreq> 
            &lt;Canal>BTDIGITAL&lt;/Canal> 
            &lt;Requerimiento>1&lt;/Requerimiento> 
            &lt;Usuario>IN&lt;/Usuario> 
            &lt;Token>12420485CD285A89A23FBE&lt;/Token> 
            &lt;Device>MC&lt;/Device> 
         &lt;/Btinreq> 
	     &lt;sdtOrdinal> 
			  &lt;operacionUId>10189&lt;/operacionUId> 
			  &lt;idOperacionBT>0010000100021000000000000000002700003000000000000&lt;/idOperacionBT> 
			  &lt;debeHaber>D&lt;/debeHaber> debitoCredito 
			  &lt;importe>10000.00&lt;/importe> 
			  &lt;producto> 
				 &lt;productoUId>0&lt;/productoUId>  
				 &lt;nombre>CAJAS DE AHORRO, GENÉRICA&lt;/nombre> 
				 &lt;moneda>$&lt;/moneda> 
				 &lt;papel>$&lt;/papel> 
			  &lt;/producto> 
	     &lt;/sdtOrdinal> 
         &lt;Erroresnegocio>&lt;/Erroresnegocio> 
         &lt;Btoutreq> 
            &lt;Canal>BTDIGITAL&lt;/Canal> 
            &lt;Servicio>BTContabilidad.ObtenerDetalleOrdinal&lt;/Servicio> 
            &lt;Fecha>2020-10-29&lt;/Fecha> 
            &lt;Hora>16:13:11&lt;/Hora> 
            &lt;Requerimiento>1&lt;/Requerimiento> 
            &lt;Numero>7704&lt;/Numero> 
            &lt;Estado>OK&lt;/Estado> 
         &lt;/Btoutreq> 
      &lt;/BTContabilidad.ObtenerDetalleOrdinalResponse> 
   &lt;/SOAP-ENV:Body> 
&lt;/SOAP-ENV:Envelope> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></code-block> 
<code-block title="JSON"> 
```json 
{ 
   "Btinreq": { 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "1", 
      "Usuario": "IN", 
      "Token": "12420485CD285A89A23FBE", 
      "Device": "MC" 
   }, 
	"sdtOrdinal":  
	{ 
	  "operacionUId": "10189", 
	  "idOperacionBT": "0010000100021000000000000000002700003000000000000", 
	  "debeHaber": "D", 
	  "importe": "10000.00", 
	  "producto": { 
		 "productoUId": "0", 
		 "nombre": "CAJAS DE AHORRO, GENÉRICA", 
		 "moneda": "$", 
		 "papel": "$" 
	  } 
   }, 
   "Erroresnegocio": null, 
   "Btoutreq": { 
      "Canal": "BTDIGITAL", 
      "Servicio": "BTContabilidad.ObtenerDetalleOrdinal", 
      "Fecha": "2020-10-29", 
      "Hora": "16:13:11", 
      "Requerimiento": "1", 
      "Numero": "7704", 
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
<td>movimientoUId</td>
<td>Long</td>
<td>Identificador único de movimiento.</td>
</tr>
<tr>
<td>ordinal</td>
<td>Short</td>
<td>Ordinal del movimiento.</td>
</tr>
<tr>
<td>subOrdinal</td>
<td>Short</td>
<td>Subordinal del movimiento.</td>
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
<td>sdtOrdinal</td>
<td>sBTOrdinal</td>
<td>Ordinale del movimiento.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTOrdinal son los siguientes:</p>
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
<td>operacionUId</td>
<td>Long</td>
<td>Identificador único de operación.</td>
</tr>
<tr>
<td>idOperacionBT</td>
<td>String</td>
<td>Identificador String Bantotal.</td>
</tr>
<tr>
<td>producto</td>
<td>sBTProducto</td>
<td>Datos del Producto.</td>
</tr>
<tr>
<td>debeHaber</td>
<td>String</td>
<td>Debe/Haber (Crédito: 'C', Débito: 'D').</td>
</tr>
<tr>
<td>importe</td>
<td>Double</td>
<td>Importe.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTProducto son los siguientes:</p>
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
<td>productoUId</td>
<td>Long</td>
<td>Identificador único de producto.</td>
</tr>
<tr>
<td>nombre</td>
<td>String</td>
<td>Nombre del producto.</td>
</tr>
<tr>
<td>moneda</td>
<td>String</td>
<td>Símbolo de moneda.</td>
</tr>
<tr>
<td>papel</td>
<td>String</td>
<td>Símbolo de papel.</td>
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
<td>No se recibió identificador de movimiento.</td>
</tr>
<tr>
<td>30103</td>
<td>No existe registro para el identificador único.</td>
</tr>
<tr>
<td>40001</td>
<td>No existe el asiento.</td>
</tr>
</tbody>
</table>
</div></template>


