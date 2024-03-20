<template><div><h1 id="traspasar-entre-cuentas-terceros-con-tipo-de-cambio" tabindex="-1"><a class="header-anchor" href="#traspasar-entre-cuentas-terceros-con-tipo-de-cambio"><span>Traspasar Entre Cuentas Terceros (con tipo de cambio)</span></a></h1>
<p>Método para registrar en el sistema un traspaso entre cuentas de diferentes clientes.</p>
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
<td>BTCuentasVista.TraspasarCuentasTercerosConCotizacion</td>
<td>RBTPG264</td>
<td>Global</td>
</tr>
</tbody>
</table>
<p>###Configuración Backend</p>
<ol>
<li>Definir la transacción de traspaso, teniendo en cuenta que:</li>
</ol>
<ul>
<li>
<p>La cuenta vista origen se almacena en el preformato 1</p>
</li>
<li>
<p>La cuenta vista destino en el preformato 2</p>
</li>
<li>
<p>El importe a transferir se almacena en el preformato 1</p>
</li>
<li>
<p>Los correlativos del subordinal deben corresponderse con los módulos de los productos definidos en el subordinal</p>
</li>
</ul>
<ol start="2">
<li>Configurar la transacción parametrizada mediante el mantenimiento de transacciones por servicio (HBTSBT1T):</li>
</ol>
<ul>
<li>Se debe indicar los ordinales donde se encuentra definida la cuenta origen y destino</li>
</ul>
<blockquote>
<p>Ejemplo de invocación al método Traspasar Entre Cuentas de terceros (con tipo de cambio):</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">    <soapenv:Header/>    
	<soapenv:Body>        
		<bts:BTCuentasVista.TraspasarCuentasTercerosConCotizacion>  
			 <bts:Btinreq>        
				<bts:Device>AV</bts:Device> 
				<bts:Usuario>MINSTALADOR</bts:Usuario> 
				<bts:Requerimiento></bts:Requerimiento> 
				<bts:Canal>BTDIGITAL</bts:Canal> 
				<bts:Token>268b6d23eb4A8B5C60A82434</bts:Token> 
			</bts:Btinreq> 
			<bts:clienteUId>21</bts:clienteUId> 
			<bts:sdtTraspaso> 
				<bts:operacionUIdOrigen>281</bts:operacionUIdOrigen> 
				<bts:importe>500</bts:importe> 
				<bts:operacionUIdDestino>282</bts:operacionUIdDestino> 
				<bts:monedaId></bts:monedaId>    
				<bts:concepto>Traspaso</bts:concepto>     
			</bts:sdtTraspaso>   
			<bts:tipoDeCambio>31.5</bts:tipoDeCambio>  
		</bts:BTCuentasVista.TraspasarCuentasTercerosConCotizacion>  
	</soapenv:Body> 
</soapenv:Envelope>  
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista_v1?ObtenerSaldoDisponible \ 
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
	"clienteUId": "21", 
	"sdtTraspaso":  
	  { 
		"operacionUIdOrigen": "281", 
		"importe": "500", 
		"operacionUIdDestino": "282", 
		"monedaId": "", 
		"concepto": "Traspaso", 
	  }, 
	"tipoDeCambio": "31.5" 
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
		<BTCuentasVista.TraspasarCuentasTercerosConCotizacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">  
			<Btinreq>      
				<Device>AV</Device>     
				<Usuario>MINSTALADOR</Usuario>      
				<Requerimiento/>        
				<Canal>BTDIGITAL</Canal>        
				<Token>268b6d23eb4A8B5C60A82434</Token>    
			</Btinreq>      
			<sdtResultadoTraspaso> 
				<operacionUIdOrigen>281</operacionUIdOrigen>            
				<idMovimiento>0010000100050007003720180706</idMovimiento>  
				<operacionUIdDestino>282</operacionUIdDestino>       
				<saldoOperacionOrigen>7432900.28</saldoOperacionOrigen>     
				<movimientoUId>141</movimientoUId>   
			</sdtResultadoTraspaso>       
			<Erroresnegocio></Erroresnegocio>  
			<Btoutreq>           
				<Numero>864</Numero>   
				<Estado>OK</Estado>      
				<Servicio>BTCuentasVista.TraspasarCuentasTercerosConCotizacion</Servicio> 
				<Requerimiento/>       
				<Fecha>2017-12-18</Fecha> 
				<Hora>17:07:19</Hora>       
				<Canal>BTDIGITAL</Canal>        
			</Btoutreq>       
		</BTCuentasVista.TraspasarCuentasTercerosConCotizacionResponse> 
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
	"sdtResultadoTraspaso": { 
		"operacionUIdOrigen": "281", 
		"idMovimiento": "0010000100050007003720180706", 
		"operacionUIdDestino": "282", 
		"saldoOperacionOrigen": "7432900.28", 
		"movimientoUId": "141", 
	}, 
	"Btoutreq": { 
	  "Numero": "103", 
	  "Estado": "OK", 
	  "Servicio": "BTCuentasVista.TraspasarCuentasTercerosConCotizacion", 
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
<td>clienteUId</td>
<td>Long</td>
<td>Identificador de cliente.</td>
</tr>
<tr>
<td>sdtTraspaso</td>
<td>sBTTraspaso</td>
<td>Datos del Traspaso.</td>
</tr>
<tr>
<td>tipoDeCambio</td>
<td>Double</td>
<td>Cotización.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTTraspaso son los siguientes:</p>
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
<td>operacionUIdOrigen</td>
<td>Long</td>
<td>Identificador de operación de origen del traspaso.</td>
</tr>
<tr>
<td>operacionUIdDestino</td>
<td>Long</td>
<td>Identificador de operación de destino del traspaso.</td>
</tr>
<tr>
<td>monedaId</td>
<td>Short</td>
<td>Identificador de Moneda.</td>
</tr>
<tr>
<td>importe</td>
<td>Double</td>
<td>Importe del Movimiento.</td>
</tr>
<tr>
<td>concepto</td>
<td>String</td>
<td>Concepto del Traspaso.</td>
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
<td>sdtResultadoTraspaso</td>
<td>sBTResultadoTraspasoDatos</td>
<td>Resultado del traspaso.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTResultadoTraspasoDatos son los siguientes:</p>
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
<td>operacionUIdOrigen</td>
<td>Long</td>
<td>Identificador de operación de origen del traspaso.</td>
</tr>
<tr>
<td>operacionUIdDestino</td>
<td>Long</td>
<td>Identificador de operación de destino del traspaso.</td>
</tr>
<tr>
<td>saldoOperacionOrigen</td>
<td>Double</td>
<td>Saldo Actual de operación de origen.</td>
</tr>
<tr>
<td>movimientoUId</td>
<td>Long</td>
<td>Identificador de Movimiento.</td>
</tr>
<tr>
<td>idMovimiento</td>
<td>String</td>
<td>Identificador de Movimiento String.</td>
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
<td>No se recibió el identificador de cliente.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recuperó la cuenta para el Identificador de cliente: [Número de identificador].</td>
</tr>
<tr>
<td>30003</td>
<td>No se recibió el identificador único de operación de origen.</td>
</tr>
<tr>
<td>30004</td>
<td>No se recibió el identificador único de operación de destino.</td>
</tr>
<tr>
<td>30005</td>
<td>Debe ingresar importe.</td>
</tr>
<tr>
<td>30006</td>
<td>No se recibió el tipo de cambio.</td>
</tr>
<tr>
<td>30007</td>
<td>No se recuperó la operación origen para el Identificador: [Número de identificador].</td>
</tr>
<tr>
<td>30008</td>
<td>La operación origen no pertenece al cliente.</td>
</tr>
<tr>
<td>30009</td>
<td>No se recuperó la operación destino para el Identificador: [Número de identificador].</td>
</tr>
<tr>
<td>30010</td>
<td>La cuenta destino no puede ser la misma que la de origen.</td>
</tr>
<tr>
<td>30011</td>
<td>No se recuperó la operación origen para el Identificador: [Número de identificador].</td>
</tr>
<tr>
<td>30012</td>
<td>No se recuperó la operación destino para el Identificador: [Número de identificador].</td>
</tr>
<tr>
<td>51008</td>
<td>Error de configuración: No se definio transacción a ejecutar</td>
</tr>
<tr>
<td>51005</td>
<td>La moneda del traspaso debe coincidir con la moneda de la operación origen</td>
</tr>
</tbody>
</table>
</div></template>


