<template><div><h1 id="obtener-movimientos" tabindex="-1"><a class="header-anchor" href="#obtener-movimientos"><span>Obtener Movimientos</span></a></h1>
<p>Método para obtener un listado de los movimientos realizados para un producto depósito a plazo.</p>
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
<td>BTDepositosAPlazo.ObtenerMovimientos</td>
<td>RBTPG004</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Movimientos:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTDepositosAPlazo.ObtenerMovimientos> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento/> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:operacionUId>5</bts:operacionUId> 
      </bts:BTDepositosAPlazo.ObtenerMovimientos> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDepositosAPlazo?ObtenerMovimientos=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 02100864-83c5-1642-ca5f-a8589b3524b4' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "a519a7f39d4A8B5C60A82434" 
	}, 
    "operacionUId": 5 
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
      <BTDepositosAPlazo.ObtenerMovimientosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>75e20bd1614A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtEstadoDeCuenta> 
            <saldoPartida>0.00</saldoPartida> 
            <fechaHasta>2018-10-09</fechaHasta> 
            <productoUId>5</productoUId> 
            <movimientos></movimientos> 
            <fechaDesde>2018-07-11</fechaDesde> 
         </sdtEstadoDeCuenta> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>914</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTDepositosAPlazo.ObtenerMovimientos</Servicio> 
            <Fecha>2017-12-21</Fecha> 
            <Requerimiento/> 
            <Hora>17:00:53</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTDepositosAPlazo.ObtenerMovimientosResponse> 
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
   "sdtEstadoDeCuenta": { 
      "saldoPartida": "0.00", 
      "fechaHasta": "2018-10-09", 
      "productoUId": "5", 
      "fechaDesde": "2018-07-11", 
      "movimientos": { 
         "sBTMovimiento": [] 
      }, 
   }, 
   "Erroresnegocio": { 
      "BTErrorNegocio": [] 
   }, 
   "Btoutreq": { 
      "Numero": "915", 
      "Estado": "OK", 
      "Servicio": "BTDepositosAPlazo.ObtenerMovimientos", 
      "Fecha": "2017-12-21", 
      "Requerimiento": "", 
      "Hora": "17:01:31", 
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
<td>operacionUId</td>
<td>Long</td>
<td>Identificador único de operación.</td>
</tr>
<tr>
<td>cantidadDias</td>
<td>Int</td>
<td>Cantidad de dias para atras (Se puede parametrizar como parámetro Hidden para que el servicio siempre tome el mismo valor por defecto, o se puede dejar editable para que el usuario ingrese el valor).</td>
</tr>
<tr>
<td>cantidadMovimientos</td>
<td>Int</td>
<td>Cantidad de movimientos (Se puede parametrizar como parámetro Hidden para que el servicio siempre tome el mismo valor por defecto, o se puede dejar editable para que el usuario ingrese el valor).</td>
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
<td>sdtEstadoDeCuenta</td>
<td>sBTEstadoCuentaCV</td>
<td>Datos de estado de cuenta.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTEstadoCuentaCV son los siguientes:</p>
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
<td>productoUID</td>
<td>Long</td>
<td>Identificador único de producto.</td>
</tr>
<tr>
<td>fechaDesde</td>
<td>Date</td>
<td>Fecha desde la cual se emite el estado de cuenta.</td>
</tr>
<tr>
<td>fechaHasta</td>
<td>Date</td>
<td>Fecha hasta la cual se emite el estado de cuenta.</td>
</tr>
<tr>
<td>saldoPartida</td>
<td>Double</td>
<td>Saldo inicial.</td>
</tr>
<tr>
<td>movimientos</td>
<td>sBTMovimiento</td>
<td>Listado de movimientos.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTMovimiento son los siguientes:</p>
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
<td>movimientoUId</td>
<td>Long</td>
<td>Identificador único de movimiento.</td>
</tr>
<tr>
<td>fecha</td>
<td>Date</td>
<td>Fecha de movimiento.</td>
</tr>
<tr>
<td>hora</td>
<td>String</td>
<td>Hora de movimiento.</td>
</tr>
<tr>
<td>concepto</td>
<td>String</td>
<td>Concepto de movimiento.</td>
</tr>
<tr>
<td>referencia</td>
<td>String</td>
<td>Referencia.</td>
</tr>
<tr>
<td>numeroCheque</td>
<td>Int</td>
<td>Número de cheque.</td>
</tr>
<tr>
<td>debitoCredito</td>
<td>String</td>
<td>Debito o Credito (D/C).</td>
</tr>
<tr>
<td>moneda</td>
<td>String</td>
<td>Simbolo de moneda.</td>
</tr>
<tr>
<td>importe</td>
<td>Double</td>
<td>Importe de movimiento.</td>
</tr>
<tr>
<td>tipoCambio</td>
<td>Double</td>
<td>Tipo de cambio de moneda.</td>
</tr>
<tr>
<td>arbitraje</td>
<td>Double</td>
<td>Arbitraje de moneda.</td>
</tr>
<tr>
<td>saldo</td>
<td>Double</td>
<td>Saldo del depósito.</td>
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
<td>No se recibió el identificador único de operación.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recuperó la operación para el identificador: [Número de identificador].</td>
</tr>
<tr>
<td>30004</td>
<td>No se recibió la cantidad de días.</td>
</tr>
<tr>
<td>30005</td>
<td>No se recibió la cantidad de movimientos.</td>
</tr>
</tbody>
</table>
</div></template>


