<template><div><h1 id="visualizar-lista-resumen-cabezal" tabindex="-1"><a class="header-anchor" href="#visualizar-lista-resumen-cabezal"><span>Visualizar Lista Resumen Cabezal</span></a></h1>
<p>Método para obtener una lista del resumen de información de archivos.</p>
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
<td>BTCASHManagement.VisualizarListaResumenCabezal</td>
<td>RBTPGC21</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Visualizar Lista Resumen Cabezal</p>
</blockquote>
<code-group> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement_v1?VisualizarListaResumenCabezal \ 
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
	"clienteUId":1, 
	"contratoF": 
	{}, 
	"servicioF":0, 
	"estadoF" : "", 
	"fechaDesdeF" : "", 
	"fechaHastaF" : "" 
}' 
``` 
</code-block> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCASHManagement.VisualizarListaResumenCabezal> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>311020191114150000216393</bts:Token> 
            <bts:Device>001</bts:Device> 
         </bts:Btinreq> 
         <bts:clienteUId>1</bts:clienteUId> 
         <bts:contratoF></bts:contratoF> 
         <bts:servicioF></bts:servicioF> 
         <bts:estadoF></bts:estadoF> 
         <bts:fechaDesdeF></bts:fechaDesdeF> 
         <bts:fechaHastaF></bts:fechaHastaF> 
      </bts:BTCASHManagement.VisualizarListaResumenCabezal> 
   </soapenv:Body> 
</soapenv:Envelope> 
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;/code-block> 
&lt;/code-group> 
> El POST retornará la siguiente estructura: 

&lt;code-group> 
&lt;code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 

	"listaArchivos": { 
		"sBTResumenCabezal": [     
			{ 
				"archivoId": "56", 
				"contratoId": "7", 
				"servicio": "20", 
				"ordenId": "121", 
				"cuentaDebito": "1", 
				"fechaPago": "2019-11-29", 
				"estado": "N", 
				"cantidadLineas": "6", 
				"moneda": "101", 
				"importe": "2600.00", 
				"referencia": [], 
				"nombreArchivo": "Servicio20_001.csv", 
				"mensajesError":  
				{ 
					"item": "El monto total es distinto al importe del cabezal" 
				} 
			},     
			{ 
				"archivoId": "57", 
				"contratoId": "7", 
				"servicio": "20", 
				"ordenId": "122", 
				"cuentaDebito": "1", 
				"fechaPago": "2019-11-29", 
				"estado": "N", 
				"cantidadLineas": "4", 
				"moneda": "101", 
				"importe": "2600.00", 
				"referencia": [], 
				"nombreArchivo": "Servicio20_001.csv", 
				"mensajesError": [] 
			},     
			{ 
				"archivoId": "58", 
				"contratoId": "7", 
				"servicio": "20", 
				"ordenId": "123", 
				"cuentaDebito": "1", 
				"fechaPago": "2019-11-29", 
				"estado": "P", 
				"cantidadLineas": "4", 
				"moneda": "101", 
				"importe": "2600.00", 
				"referencia": [], 
				"nombreArchivo": "Servicio20_001.csv", 
				"mensajesError": [] 
			} 
		] 
	}, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 46, 
        "Servicio": "BTCASHManagement.VisualizarListaResumenCabezal", 
        "Estado": "OK", 
        "Fecha": "2019-10-24", 
        "Requerimiento": "", 
        "Hora": "20:55:06", 
        "Canal": "BTDIGITAL" 
    } 
}' 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></code-block> 
<code-block title="XML" active> 
```xml 
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   <SOAP-ENV:Body> 
      <BTCASHManagement.VisualizarListaResumenCabezalResponse> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>MINSTALADOR</Usuario> 
            <Token>311020191114150000216393</Token> 
            <Device>001</Device> 
         </Btinreq> 
         <listaArchivos> 
            <sBTResumenCabezal> 
               <archivoId>56</archivoId> 
               <contratoId>7</contratoId> 
               <servicio>20</servicio> 
               <ordenId>121</ordenId> 
               <cuentaDebito>1</cuentaDebito> 
               <fechaPago>2019-11-29</fechaPago> 
               <estado>N</estado> 
               <cantidadLineas>6</cantidadLineas> 
               <moneda>101</moneda> 
               <importe>2600.00</importe> 
               <referencia/> 
               <nombreArchivo>Servicio20_001.csv</nombreArchivo> 
               <mensajesError> 
                  <item>El monto total es distinto al importe del cabezal</item> 
               </mensajesError> 
            </sBTResumenCabezal> 
            <sBTResumenCabezal> 
               <archivoId>57</archivoId> 
               <contratoId>7</contratoId> 
               <servicio>20</servicio> 
               <ordenId>122</ordenId> 
               <cuentaDebito>1</cuentaDebito> 
               <fechaPago>2019-11-29</fechaPago> 
               <estado>N</estado> 
               <cantidadLineas>4</cantidadLineas> 
               <moneda>101</moneda> 
               <importe>2600.00</importe> 
               <referencia/> 
               <nombreArchivo>Servicio20_001.csv</nombreArchivo> 
               <mensajesError></mensajesError> 
            </sBTResumenCabezal> 
            <sBTResumenCabezal> 
               <archivoId>58</archivoId> 
               <contratoId>7</contratoId> 
               <servicio>20</servicio> 
               <ordenId>123</ordenId> 
               <cuentaDebito>1</cuentaDebito> 
               <fechaPago>2019-11-29</fechaPago> 
               <estado>P</estado> 
               <cantidadLineas>4</cantidadLineas> 
               <moneda>101</moneda> 
               <importe>2600.00</importe> 
               <referencia/> 
               <nombreArchivo>Servicio20_001.csv</nombreArchivo> 
               <mensajesError></mensajesError> 
            </sBTResumenCabezal> 
         </listaArchivos> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTCASHManagement.VisualizarListaResumenCabezal</Servicio> 
            <Fecha>2019-10-31</Fecha> 
            <Hora>15:47:53</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>670</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTCASHManagement.VisualizarListaResumenCabezalResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
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
<td>Identificador de la Cuenta Cliente.</td>
</tr>
<tr>
<td>contratoF</td>
<td>Long</td>
<td>Lista de identificadores de contratos CASH del cliente.</td>
</tr>
<tr>
<td>servicioF</td>
<td>Short</td>
<td>Servicio CASH.</td>
</tr>
<tr>
<td>estadoF</td>
<td>String</td>
<td>Estado del archivo.</td>
</tr>
<tr>
<td>fechaDesdeF</td>
<td>Date</td>
<td>Fecha de pago o cobro, desde.</td>
</tr>
<tr>
<td>fechaHastaF</td>
<td>Date</td>
<td>Fecha de pago o cobro, hasta.</td>
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
<td>listaArchivos</td>
<td>sBTResumenCabezal</td>
<td>Lista de cabezales solicitado.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTResumenCabezal son los siguientes:</p>
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
<td>archivoId</td>
<td>Long</td>
<td>Identificador de archivo.</td>
</tr>
<tr>
<td>contratoId</td>
<td>Int</td>
<td>Identificador del contrato CASH.</td>
</tr>
<tr>
<td>servicio</td>
<td>Short</td>
<td>Servicio CASH.</td>
</tr>
<tr>
<td>ordenId</td>
<td>Long</td>
<td>Identificador de orden CASH.</td>
</tr>
<tr>
<td>cuentaDebito</td>
<td>Long</td>
<td>Identificador único de la cuenta débito.</td>
</tr>
<tr>
<td>fechaPago</td>
<td>Date</td>
<td>Fecha de pago o cobro.</td>
</tr>
<tr>
<td>estado</td>
<td>String</td>
<td>Estado del archivo.</td>
</tr>
<tr>
<td>cantidadLineas</td>
<td>Int</td>
<td>Cantidad de líneas del archivo.</td>
</tr>
<tr>
<td>moneda</td>
<td>Short</td>
<td>Moneda.</td>
</tr>
<tr>
<td>importe</td>
<td>Double</td>
<td>Importe total.</td>
</tr>
<tr>
<td>referencia</td>
<td>String</td>
<td>Referencia del pago o cobro.</td>
</tr>
<tr>
<td>nombreArchivo</td>
<td>String</td>
<td>Nombre del archivo.</td>
</tr>
<tr>
<td>mensajesError</td>
<td>String</td>
<td>Lista de mensajes de la línea.</td>
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
<td>1030705</td>
<td>Cuenta cliente sin contrato vinculado.</td>
</tr>
<tr>
<td>1030708</td>
<td>Estado de archivo desconocido.</td>
</tr>
<tr>
<td>1030709</td>
<td>Se requiere identificacion de cuenta cliente.</td>
</tr>
<tr>
<td>1030712</td>
<td>Se requiere cuenta para recuperar la informacion.</td>
</tr>
<tr>
<td>1030714</td>
<td>El contrato consultado no corresponde al servicio recibido.</td>
</tr>
</tbody>
</table>
</div></template>


