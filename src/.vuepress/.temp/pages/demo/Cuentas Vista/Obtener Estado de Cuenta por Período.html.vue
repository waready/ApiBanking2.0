<template><div><h1 id="obtener-estado-de-cuenta-por-periodo" tabindex="-1"><a class="header-anchor" href="#obtener-estado-de-cuenta-por-periodo"><span>Obtener Estado de Cuenta por Período</span></a></h1>
<p>Método para obtener el estado de cuenta y los movimientos realizados para una operación en determinado rango de fechas.</p>
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
<td>BTCuentasVista.ObtenerEstadoDeCuentaPorPeriodo</td>
<td>RBTPG250</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio de Obtener Estado de Cuenta por Periodo:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasVista.ObtenerEstadoDeCuentaPorPeriodo> 
         <bts:Btinreq> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Device>GP</bts:Device> 
            <bts:Token>ad9ab7ecba4A8B5C60A82434</bts:Token> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
         </bts:Btinreq> 
         <bts:operacionUId>523</bts:operacionUId> 
         <bts:fechaDesde>2018-12-09</bts:fechaDesde> 
         <bts:fechaHasta>2018-12-10</bts:fechaHasta> 
         <bts:cantidadMovimientos>2</bts:cantidadMovimientos> 
      </bts:BTCuentasVista.ObtenerEstadoDeCuentaPorPeriodo> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista_v1?ObtenerEstadoDeCuentaPorPeriodo \ 
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
      "operacionUId": "523", 
      "fechaDesde": "2018-12-09", 
      "fechaHasta": "2018-12-10", 
      "cantidadMovimientos": "2" 
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
      <BTCuentasVista.ObtenerEstadoDeCuentaPorPeriodoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GP</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>ad9ab7ecba4A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtEstadoDeCuenta> 
            <saldoPartida>166666.67</saldoPartida> 
            <fechaHasta>2018-12-10</fechaHasta> 
            <productoUID>523</productoUID> 
            <movimientos> 
               <sBTMovimiento> 
                  <moneda>$</moneda> 
                  <hora>13:56:48</hora> 
                  <referencia/> 
                  <concepto>Transferencia entre cuentas</concepto> 
                  <movimientoUId>344</movimientoUId> 
                  <datosAdicionales></datosAdicionales> 
                  <debitoCredito>C</debitoCredito> 
                  <saldo>246666.67</saldo> 
                  <importe>80000.00</importe> 
                  <numeroCheque>0</numeroCheque> 
                  <tipoCambio>0.000000</tipoCambio> 
                  <arbitraje>0.000000</arbitraje> 
                  <fecha>2018-12-10</fecha> 
               </sBTMovimiento> 
               <sBTMovimiento> 
                  <moneda>$</moneda> 
                  <hora>13:55:11</hora> 
                  <referencia/> 
                  <concepto>Transferencia entre cuentas</concepto> 
                  <movimientoUId>343</movimientoUId> 
                  <datosAdicionales></datosAdicionales> 
                  <debitoCredito>C</debitoCredito> 
                  <saldo>166666.67</saldo> 
                  <importe>20000.00</importe> 
                  <numeroCheque>0</numeroCheque> 
                  <tipoCambio>0.000000</tipoCambio> 
                  <arbitraje>0.000000</arbitraje> 
                  <fecha>2018-12-10</fecha> 
               </sBTMovimiento> 
            </movimientos> 
            <fechaDesde>2018-12-09</fechaDesde> 
         </estadoDeCuenta> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>546</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCuentasVista.ObtenerEstadoDeCuentaPorPeriodo</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2019-08-15</Fecha> 
            <Hora>13:57:44</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCuentasVista.ObtenerEstadoDeCuentaPorPeriodoResponse> 
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
         "saldoPartida": "166666.67", 
         "fechaHasta": "2018-12-10", 
         "productoUID": "523", 
         "movimientos": [ 
            { 
            "moneda": "$", 
            "hora": "13:56:48", 
            "concepto": "Transferencia entre cuentas", 
            "movimientoUId": "344", 
            "debitoCredito": "C", 
            "saldo": "246666.67", 
            "importe": "80000.00", 
            "numeroCheque": "0", 
            "tipoCambio": "0.000000", 
            "arbitraje": "0.000000", 
            "fecha": "2018-12-10" 
            }, 
            { 
            "moneda": "$", 
            "hora": "13:55:11", 
            "concepto": "Transferencia entre cuentas", 
            "movimientoUId": "343", 
            "debitoCredito": "C", 
            "saldo": "166666.67", 
            "importe": "20000.00", 
            "numeroCheque": "0", 
            "tipoCambio": "0.000000", 
            "arbitraje": "0.000000", 
            "fecha": "2018-12-10" 
            } 
         ]	 
	  }, 
	  "fechaDesde": "2018-12-09", 
	  "Btoutreq": { 
		"Numero": "546", 
		"Estado": "OK", 
		"Servicio": "BTCuentasVista.ObtenerEstadoDeCuentaPorPeriodo", 
		"Requerimiento": "1", 
		"Fecha": "2019-08-15", 
		"Hora": "13:57:44", 
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
<td>cantidadMovimientos</td>
<td>Int</td>
<td>Cantidad de movimientos [Hidden: Valor fijo 20 para este método].</td>
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
<td>Datos de Estado de Cuenta.</td>
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
<td>productoUId</td>
<td>Long</td>
<td>Identificador de producto.</td>
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
<td>Datos de Movimiento.</td>
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
<td>Identificador de movimiento.</td>
</tr>
<tr>
<td>fecha</td>
<td>Date</td>
<td>fecha de movimiento.</td>
</tr>
<tr>
<td>hora</td>
<td>String</td>
<td>hora de movimiento.</td>
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
<td>Debito o Credito (D o C).</td>
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
<td>Saldo de Cuenta Vista.</td>
</tr>
<tr>
<td>ordinal</td>
<td>Short</td>
<td>Ordinal.</td>
</tr>
<tr>
<td>datosAdicionales</td>
<td>sBTDatoAdicional</td>
<td>Datos Adicionales.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTDatoAdicional son los siguientes:</p>
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
<td>detalle</td>
<td>String</td>
<td>Detalle del dato adicional.</td>
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
<td>No se recuperó la operación para el Identificador: [Número de identificador].</td>
</tr>
<tr>
<td>30004</td>
<td>La operación ingresada no corresponde a una cuenta vista.</td>
</tr>
<tr>
<td>30005</td>
<td>Debe ingresar cantidad de movimientos.</td>
</tr>
<tr>
<td>30006</td>
<td>Debe ingresar la fecha desde.</td>
</tr>
<tr>
<td>30007</td>
<td>Debe ingresar la fecha hasta.</td>
</tr>
<tr>
<td>30008</td>
<td>Fecha desde tiene que ser menor a fecha hasta.</td>
</tr>
<tr>
<td>40001</td>
<td>No existe una empresa con los datos ingresados.</td>
</tr>
<tr>
<td>40002</td>
<td>No se pudo resolver la empresa del usuario.</td>
</tr>
</tbody>
</table>
</div></template>


