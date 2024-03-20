<template><div><h1 id="obtener-estado-de-cuenta" tabindex="-1"><a class="header-anchor" href="#obtener-estado-de-cuenta"><span>Obtener Estado de Cuenta</span></a></h1>
<p>Método para obtener el estado de cuenta de un producto cuenta de ahorro.</p>
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
<td>BTCuentasDeAhorro.ObtenerEstadoDeCuenta</td>
<td>RBTPG004</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Estado de Cuenta:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasDeAhorro.ObtenerEstadoDeCuenta> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:operacionUId>281</bts:operacionUId> 
      </bts:BTCuentasDeAhorro.ObtenerEstadoDeCuenta> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasDeAhorro?ObtenerEstadoDeCuenta=' \ 
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
    "operacionUId": 281 
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
      <BTCuentasDeAhorro.ObtenerEstadoDeCuentaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>75e20bd1614A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtEstadoDeCuenta> 
            <saldoPartida>208750.00</saldoPartida> 
            <fechaHasta>2018-10-09</fechaHasta> 
            <productoUId>9</productoUId> 
            <movimientos> 
               <sBTMovimiento> 
                  <movimientoUId>135</movimientoUId> 
                  <fecha>2018-10-09</fecha> 
                  <hora>16:45:54</hora> 
                  <concepto/> 
                  <referencia/> 
                  <numeroCheque>0</numeroCheque> 
                  <debitoCredito>D</debitoCredito> 
                  <moneda/> 
                  <importe>5000.00</importe> 
                  <tipoCambio>0.000000</tipoCambio> 
                  <arbitraje>0.000000</arbitraje> 
                  <saldo>143750.00</saldo> 
               </sBTMovimiento> 
               <sBTMovimiento> 
                  <movimientoUId>216</movimientoUId> 
                  <fecha>2018-09-10</fecha> 
                  <hora>12:10:37</hora> 
                  <concepto/> 
                  <referencia/> 
                  <numeroCheque>0</numeroCheque> 
                  <debitoCredito>D</debitoCredito> 
                  <moneda/> 
                  <importe>5000.00</importe> 
                  <tipoCambio>0.000000</tipoCambio> 
                  <arbitraje>0.000000</arbitraje> 
                  <saldo>148750.00</saldo> 
               </sBTMovimiento> 
            </movimientos> 
            <fechaDesde>2018-07-11</fechaDesde> 
         </sdtEstadoDeCuenta> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>927</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCuentasDeAhorro.ObtenerEstadoDeCuenta</Servicio> 
            <Fecha>2017-12-21</Fecha> 
            <Requerimiento/> 
            <Hora>17:32:38</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCuentasDeAhorro.ObtenerEstadoDeCuentaResponse> 
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
        "saldoPartida": "208750.00", 
        "fechaHasta": "2018-10-09", 
        "productoUId": "9", 
        "movimientos": { 
            "sBTMovimiento": [ 
                { 
                    "moneda": "", 
                    "hora": "16:45:54", 
                    "referencia": "", 
                    "concepto": "", 
                    "movimientoUId": "135", 
                    "debitoCredito": "D", 
                    "saldo": "143750.00", 
                    "importe": "5000.00", 
                    "numeroCheque": "0", 
                    "tipoCambio": "0.000000", 
                    "arbitraje": "0.000000", 
                    "fecha": "2018-10-09" 
                }, 
                { 
                    "moneda": "", 
                    "hora": "12:10:37", 
                    "referencia": "", 
                    "concepto": "", 
                    "movimientoUId": "216", 
                    "debitoCredito": "D", 
                    "saldo": "148750.00", 
                    "importe": "5000.00", 
                    "numeroCheque": "0", 
                    "tipoCambio": "0.000000", 
                    "arbitraje": "0.000000", 
                    "fecha": "2018-09-10" 
                } 
            ] 
        }, 
        "fechaDesde": "2018-07-11" 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "928", 
        "Estado": "OK", 
        "Servicio": "BTCuentasDeAhorro.ObtenerEstadoDeCuenta", 
        "Fecha": "2017-12-21", 
        "Requerimiento": "", 
        "Hora": "17:33:12", 
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
<td>productoUId</td>
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
<td>Datos de movimiento.</td>
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
<td>Referencia..</td>
</tr>
<tr>
<td>numeroCheque</td>
<td>Int</td>
<td>Número de cheque</td>
</tr>
<tr>
<td>debitoCredito</td>
<td>String</td>
<td>Débito o Crédito (D/C)..</td>
</tr>
<tr>
<td>moneda</td>
<td>String</td>
<td>Símbolo de moneda</td>
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
<td>Saldo de cuenta vista.</td>
</tr>
<tr>
<td>datosAdicionales</td>
<td>sBTDatoAdicional</td>
<td>Listado de datos adicionales.</td>
</tr>
<tr>
<td>ordinal</td>
<td>Int</td>
<td>Número de ordinal.</td>
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
<td>Detalle de dato adicional.</td>
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
<td>No se recuperó operación para el identificador: [Número de identificador].</td>
</tr>
<tr>
<td>30003</td>
<td>La operación ingresada no corresponde a una cuenta de ahorro.</td>
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


