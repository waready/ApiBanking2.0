<template><div><h1 id="traspasar-entre-cuentas-mismo-titular-diferentes-monedas" tabindex="-1"><a class="header-anchor" href="#traspasar-entre-cuentas-mismo-titular-diferentes-monedas"><span>Traspasar Entre Cuentas Mismo Titular (diferentes monedas)</span></a></h1>
<p>Método para registrar en el sistema un traspaso entre cuentas del mismo cliente.</p>
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
<td>BTCuentasVista.TraspasarMismoTitularDiferentesMonedas</td>
<td>RBTPG272</td>
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
<p>Ejemplo de invocación al servicio de Traspasar Entre Cuentas Mismo Titular (diferentes monedas):</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/">    <soapenv:Header/>    
	<soapenv:Body>        
		<bts:BTCuentasVista.TraspasarMismoTitularDiferentesMonedas>  
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
				<bts:operacionUIdDestino>282</bts:operacionUIdDestino> 
				<bts:monedaId></bts:monedaId>    
				<bts:concepto>Traspaso</bts:concepto>  
				<bts:importeDebito>5000</bts:importeDebito> 
				<bts:importeCredito>500</bts:importeCredito>    
			</bts:sdtTraspaso> 
		</bts:BTCuentasVista.TraspasarMismoTitularDiferentesMonedas>  
	</soapenv:Body> 
</soapenv:Envelope>  
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista_v1?TraspasarMismoTitularDiferentesMonedas \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
	"Btinreq": { 
		"Requerimiento": "1", 
		"Device": "GP", 
		"Token": "b4ae55b35c4A8B5C60A82434", 
		"Usuario": "MINSTALADOR", 
		"Canal": "BTDIGITAL" 
	}, 
	"clienteUId": "21", 
	"sdtTraspaso":  
	  { 
		"operacionUIdOrigen": "281", 
		"importeDebito": "5000", 
		"importeCredito": "500", 
		"operacionUIdDestino": "282", 
		"monedaId": "", 
		"concepto": "Traspaso", 
	  }, 
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
		<BTCuentasVista.TraspasarMismoTitularDiferentesMonedasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/">  
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
				<Servicio>BTCuentasVista.TraspasarMismoTitularDiferentesMonedas</Servicio> 
				<Requerimiento/>       
				<Fecha>2017-12-18</Fecha> 
				<Hora>17:07:19</Hora>       
				<Canal>BTDIGITAL</Canal>        
			</Btoutreq>       
		</BTCuentasVista.TraspasarMismoTitularDiferentesMonedasResponse> 
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
	"sdtResultadoTraspaso":  
	  { 
		"operacionUIdOrigen": "281", 
		"idMovimiento": "0010000100050007003720180706", 
		"operacionUIdDestino": "282", 
		"saldoOperacionOrigen": "7432900.28", 
		"movimientoUId": "141", 
	  }, 
	"Btoutreq": { 
		"Numero": "103", 
		"Estado": "OK", 
		"Servicio": "BTCuentasVista.TraspasarMismoTitularDiferentesMonedas", 
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
<td>importeDebito</td>
<td>Double</td>
<td>Importe a debitar de la operación origen.</td>
</tr>
<tr>
<td>importeCredito</td>
<td>Double</td>
<td>Importe a acreditar a la operación destino.</td>
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
<td>No se recibió el identificador único de operación de origen.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recibió el identificador único de operación de destino.</td>
</tr>
<tr>
<td>30004</td>
<td>No se recuperó la operación origen para el Identificador: [Número de identificador].</td>
</tr>
<tr>
<td>30006</td>
<td>No se recibió el identificador de persona.</td>
</tr>
<tr>
<td>30007</td>
<td>Debe ingresar importe a acreditar.</td>
</tr>
<tr>
<td>30008</td>
<td>No se recuperó la operación destino para el Identificador: [Número de identificador].</td>
</tr>
<tr>
<td>30009</td>
<td>Debe ingresar importe a debitar.</td>
</tr>
<tr>
<td>31003</td>
<td>No existe registro para el identificador único.</td>
</tr>
</tbody>
</table>
<p>ECHO está desactivado.</p>
</div></template>


