<template><div><h1 id="traspasar-entre-cuentas-propias" tabindex="-1"><a class="header-anchor" href="#traspasar-entre-cuentas-propias"><span>Traspasar Entre Cuentas Propias</span></a></h1>
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
<td>BTCuentasVista.TraspasarEntreCuentasPropias</td>
<td>RBTPG031</td>
<td>Global</td>
</tr>
</tbody>
</table>
<h3 id="configuracion-backend" tabindex="-1"><a class="header-anchor" href="#configuracion-backend"><span>Configuración Backend</span></a></h3>
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
<p>Ejemplo de invocación al método Traspasar Entre Cuentas Propias:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasVista.TraspasarEntreCuentasPropias> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:sdtTraspaso> 
            <bts:operacionUIdOrigen>281</bts:operacionUIdOrigen> 
            <bts:importe>500</bts:importe> 
            <bts:operacionUIdDestino>282</bts:operacionUIdDestino> 
            <bts:monedaId></bts:monedaId> 
            <bts:concepto>Traspaso</bts:concepto> 
         </bts:sdtTraspaso> 
      </bts:BTCuentasVista.TraspasarEntreCuentasPropias> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?TraspasarEntreCuentasPropias=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: fde8ae30-8752-c0fe-cf77-f8761a5ddcff' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
	"sdtTraspaso": { 
		"operacionUIdOrigen": 281, 
		"operacionUIdDestino": 282, 
		"importe": 500, 
		"concepto": "Traspaso" 
	}      
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
      <BTCuentasVista.TraspasarEntreCuentasPropiasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>268b6d23eb4A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtResultadoTraspaso> 
            <operacionUIdOrigen>281</operacionUIdOrigen> 
            <idMovimiento>00100001000500075000000003720180706</idMovimiento> 
            <operacionUIdDestino>282</operacionUIdDestino> 
            <saldoOperacionOrigen>7432900.28</saldoOperacionOrigen> 
            <movimientoUId>141</movimientoUId> 
         </sdtResultadoTraspaso> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>864</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCuentasVista.TraspasarEntreCuentasPropias</Servicio> 
            <Requerimiento/> 
            <Fecha>2017-12-18</Fecha> 
            <Hora>17:07:19</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCuentasVista.TraspasarEntreCuentasPropiasResponse> 
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
        "idMovimiento": "00100001000500075000000003820180809", 
        "operacionUIdDestino": "282", 
        "saldoOperacionOrigen": "7432400.28", 
        "movimientoUId": "142" 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "868", 
        "Estado": "OK", 
        "Servicio": "BTCuentasVista.TraspasarEntreCuentasPropias", 
        "Requerimiento": "", 
        "Fecha": "2017-12-18", 
        "Hora": "17:15:28", 
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
<td>clienteUId</td>
<td>Long</td>
<td>Identificador único de cliente.</td>
</tr>
<tr>
<td>sdtTraspaso</td>
<td>sBTTraspaso</td>
<td>Datos del traspaso.</td>
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
<td>long</td>
<td>Identificador único de operación de origen del traspaso.</td>
</tr>
<tr>
<td>operacionUIdDestino</td>
<td>Long</td>
<td>Identificador único de operación destino del traspaso.</td>
</tr>
<tr>
<td>monedaId</td>
<td>Short</td>
<td>Identificador de moneda.</td>
</tr>
<tr>
<td>importe</td>
<td>doubole</td>
<td>Importe del movimiento.</td>
</tr>
<tr>
<td>concepto</td>
<td>String</td>
<td>Concepto del traspaso.</td>
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
<td>sBTResultadoTraspaso</td>
<td>Datos resultado del traspaso.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTResultadoTraspaso son los siguientes:</p>
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
<td>Identificador único de operación de origen del traspaso.</td>
</tr>
<tr>
<td>operacionUIdDestino</td>
<td>Long</td>
<td>Identificador único de operación destino del traspaso.</td>
</tr>
<tr>
<td>saldoOperacionOrigen</td>
<td>Double</td>
<td>Saldo actual de operación de origen.</td>
</tr>
<tr>
<td>movimientoUId</td>
<td>Long</td>
<td>Identificador único de movimiento.</td>
</tr>
<tr>
<td>idMovimiento</td>
<td>String</td>
<td>Identificador de movimiento string.</td>
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
<td>30003</td>
<td>Debe ingresar importe.</td>
</tr>
<tr>
<td>30004</td>
<td>No se recuperó la operación origen para el Identificador: [Número de identificador]</td>
</tr>
<tr>
<td>30005</td>
<td>No se recuperó la operación destino para el Identificador: [Número de identificador]</td>
</tr>
<tr>
<td>30006</td>
<td>No se recibió el identificador de cliente.</td>
</tr>
<tr>
<td>30007</td>
<td>No se recuperó la cuenta para el Identificador de cliente: [Número de identificador]</td>
</tr>
<tr>
<td>30008</td>
<td>La cuenta destino no pertenece al cliente [Número de cuenta].</td>
</tr>
<tr>
<td>30009</td>
<td>La operación origen no pertenece al cliente.</td>
</tr>
<tr>
<td>51005</td>
<td>La moneda del traspaso debe coincidir con la moneda de la operación origen</td>
</tr>
<tr>
<td>51008</td>
<td>Error de configuración: No se definió transacción a ejecutar.</td>
</tr>
</tbody>
</table>
</div></template>


