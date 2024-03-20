<template><div><h1 id="obtener-cotizacion-a-fecha" tabindex="-1"><a class="header-anchor" href="#obtener-cotizacion-a-fecha"><span>Obtener Cotización a Fecha</span></a></h1>
<p>Método para obtener un listado de las cotizaciones de las monedas ingresadas.</p>
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
<td>BTPrecios.ObtenerCotizacionAFecha</td>
<td>RBTPG251</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Cotización a Fecha:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"><soapenv:Header/>    
	<soapenv:Body>        
		<bts:BTPrecios.ObtenerCotizacionAFecha>  
			 <bts:Btinreq>        
				<bts:Device>AV</bts:Device> 
				<bts:Usuario>MI</bts:Usuario> 
				<bts:Requerimiento></bts:Requerimiento> 
				<bts:Canal>BTDIGITAL</bts:Canal> 
				<bts:Token>268b6d2434</bts:Token> 
         </bts:Btinreq> 
         <bts:monedaId></bts:monedaId> 
         <bts:fecha></bts:fecha>  
      </bts:BTPrecios.ObtenerCotizacionAFecha> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrecios_v1?ObtenerCotizacionAFecha' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
   "monedaId": "", 
	"fecha": "" 
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
<SOAP-ENV:Envelope xmlns:SOAPENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAPENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">   
	<SOAP-ENV:Body>       
		<BTPrecios.ObtenerCotizacionAFechaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">  
			<Btinreq>      
				<Device>AV</Device>     
				<Usuario>MI</Usuario>      
				<Requerimiento/>        
				<Canal>BTDIGITAL</Canal>        
				<Token>268b6d2B5C60A82434</Token>    
			</Btinreq> 
			<sdtCotizaciones> 
				<sBTCotizacion> 
				   <identificador>105</identificador> 
				   <monedaISO>AUD</monedaISO> 
				   <compra>1.00000000</compra> 
				   <venta>1.00000000</venta> 
				</sBTCotizacion> 
				<sBTCotizacion> 
				   <identificador>500</identificador> 
				   <monedaISO>ARS</monedaISO> 
				   <compra>10.00000000</compra> 
				   <venta>11.00000000</venta> 
				</sBTCotizacion> 
				<sBTCotizacion> 
				   <identificador>501</identificador> 
				   <monedaISO>AR$</monedaISO> 
				   <compra>9.50000000</compra> 
				   <venta>10.00000000</venta> 
				</sBTCotizacion> 
				<sBTCotizacion> 
				   <identificador>1000</identificador> 
				   <monedaISO>BRL</monedaISO> 
				   <compra>14.00000000</compra> 
				   <venta>14.40000000</venta> 
				</sBTCotizacion> 
				<sBTCotizacion> 
				   <identificador>9000</identificador> 
				   <monedaISO>ORO</monedaISO> 
				   <compra>600.00000000</compra> 
				   <venta>700.00000000</venta> 
				</sBTCotizacion> 
			 </sdtCotizaciones> 
			 <Erroresnegocio></Erroresnegocio> 
			 <Btoutreq> 
				<Canal>BTDIGITAL</Canal> 
				<Servicio>BTPrecios.ObtenerCotizacionAFecha</Servicio> 
				<Fecha>2019-08-09</Fecha> 
				<Hora>12:12:51</Hora> 
				<Requerimiento>1</Requerimiento> 
				<Numero>6616</Numero> 
				<Estado>OK</Estado> 
			 </Btoutreq> 
        </BTPrecios.ObtenerCotizacionAFechaResponse> 
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
	"sdtCotizaciones": { 
		"sBTCotizacion": [ 
			{ 
				"identificador": "105", 
				"monedaISO": "AUD", 
				"compra": "1.00000000", 
				"venta": "1.00000000" 
			}, 
			{ 
				"identificador": "500", 
				"monedaISO": "ARS", 
				"compra": "10.00000000", 
				"venta": "11.00000000" 
			}, 
			{ 
				"identificador": "501", 
				"monedaISO": "AR$", 
				"compra": "9.50000000", 
				"venta": "10.00000000" 
			}, 
			{ 
				"identificador": "1000", 
				"monedaISO": "BRL", 
				"compra": "14.00000000", 
				"venta": "14.40000000" 
			}, 
			{ 
				"identificador": "9000", 
				"monedaISO": "ORO", 
				"compra": "600.00000000", 
				"venta": "700.00000000" 
			} 
		] 
	}, 
  "Btoutreq": { 
	  "Numero": "103", 
	  "Estado": "OK", 
	  "Servicio": "BTPrecios.ObtenerCotizacionAFechaResponse", 
	  "Requerimiento": "1", 
	  "Fecha": "2019-07-22", 
	  "Canal": "BTDIGITAL", 
	  "Hora": "16:00:37" 
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
<td>monedaId</td>
<td>Short</td>
<td>Identificador de moneda. [Si es vacío devuelve las cotizaciones de todas las monedas].</td>
</tr>
<tr>
<td>fecha</td>
<td>Date</td>
<td>Fecha de cotización. [Si es vacía devuelve cotización al día de hoy].</td>
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
<td>sdtCotizacion</td>
<td>sBTCotizacion</td>
<td>Listado de cotizaciones.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTCotizacion son los siguientes:</p>
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
<td>identificador</td>
<td>Short</td>
<td>Identificador de moneda.</td>
</tr>
<tr>
<td>monedaISO</td>
<td>String</td>
<td>Código ISO de la moneda.</td>
</tr>
<tr>
<td>compra</td>
<td>Double</td>
<td>Cotización Compra.</td>
</tr>
<tr>
<td>venta</td>
<td>Double</td>
<td>Cotización Venta.</td>
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
<td>40001</td>
<td>El identificador de moneda se corresponde con la moneda nacional.</td>
</tr>
<tr>
<td>40002</td>
<td>No se recuperó moneda para el identificador ingresado.</td>
</tr>
<tr>
<td>40003</td>
<td>No se recuperaron monedas.</td>
</tr>
</tbody>
</table>
</div></template>


