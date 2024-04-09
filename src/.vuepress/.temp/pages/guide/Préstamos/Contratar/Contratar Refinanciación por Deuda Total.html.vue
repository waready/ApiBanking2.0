<template><div><h1 id="contratar-refinanciacion-por-deuda-total" tabindex="-1"><a class="header-anchor" href="#contratar-refinanciacion-por-deuda-total"><span>Contratar Refinanciación por Deuda Total</span></a></h1>
<p>Método para dar alta de un préstamo refinanciado, cancelando las operaciones indicadas en la simulación.</p>
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
<td>BTPrestamos.ContratarRefinanciacionDeudaTotal</td>
<td>RBTPG235</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Contratar Refinanciación por Deuda Total:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.ContratarRefinanciacionDeudaTotal> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>18bdf2801e4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:refinanciacionId>122</bts:refinanciacionId> 
         <bts:clienteUId>221</bts:clienteUId> 
         <bts:operacionUId_cobro>211</bts:operacionUId_cobro> 
      </bts:BTPrestamos.ContratarRefinanciacionDeudaTotal> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ContratarRefinanciacionDeudaTotal' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
	"refinanciacionId":"122", 
	"clienteUId":"221", 
	"operacionUId_cobro":"211", 
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
      <BTPrestamos.ContratarRefinanciacionDeudaTotalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>18bdf2801e4A8B5C60A82434</Token> 
         </Btinreq> 
         <movimientoUId>1536</movimientoUId> 
         <Btoutreq> 
            <Numero>4418</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPrestamos.ContratarRefinanciacionDeudaTotal</Servicio> 
            <Fecha>2018-12-14</Fecha> 
            <Requerimiento/> 
            <Hora>15:46:01</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPrestamos.ContratarRefinanciacionDeudaTotalResponse> 
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
    "movimientoUId": "1536", 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "755", 
        "Estado": "OK", 
        "Servicio": "BTPrestamos.ContratarRefinanciacionDeudaTotal", 
        "Fecha": "2017-11-30", 
        "Requerimiento": "", 
        "Hora": "13:47:48", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group> 
<h3 id="configuracion-backend" tabindex="-1"><a class="header-anchor" href="#configuracion-backend"><span>Configuración Backend</span></a></h3>
<ol>
<li>
<p>Definir la transacción de alta, teniendo en cuenta que:</p>
<ul>
<li>
<p>El préstamo se almacena en el preformato 1 para pfdid = cero.</p>
</li>
<li>
<p>La cuenta vista de acreditación se almacena en el preformato 2 para pfdid = cero.</p>
</li>
<li>
<p>Los correlativos del subordinal deben corresponderse con los módulos de los productos definidos en el subordinal.</p>
</li>
<li>
<p>Las operaciones a cancelar se almacenan en el preformato 1 para pfdid &gt; cero.</p>
</li>
</ul>
</li>
<li>
<p>Configurar la transacción parametrizada mediante el mantenimiento de transacciones por servicio (HBTSBT1T).</p>
</li>
<li>
<p>Se debe indicar los ordinales donde se encuentra definido el préstamo y la cuenta de cobro. Ademas cargar en el Auxiliar Numérico el ordinal de baja de préstamo.</p>
</li>
</ol>
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
<td>refinanciacionId</td>
<td>Long</td>
<td>Identificador de la refinanciación simulada.</td>
</tr>
<tr>
<td>clienteUId</td>
<td>Long</td>
<td>Identificador único de cliente.</td>
</tr>
<tr>
<td>accion</td>
<td>String</td>
<td>[Hidden: Valor fijo 'REFIT' para este método].</td>
</tr>
<tr>
<td>operacionUId_cobro</td>
<td>Long</td>
<td>Identificador único de operación de la cuenta vista de donde se cobrará el préstamo.</td>
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
<td>movimientoUId</td>
<td>Long</td>
<td>Identificador único de movimiento [Asiento].</td>
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
<td>No se recibió el identificador de refinanciación.</td>
</tr>
<tr>
<td>30002</td>
<td>El identificador de refinanciación no es válido.</td>
</tr>
<tr>
<td>30003</td>
<td>No se recibió el identificador de oper. de la cuenta vista.</td>
</tr>
<tr>
<td>30004</td>
<td>No se recuperó la cuenta vista para el identificador: [Número de Identificador].</td>
</tr>
<tr>
<td>30005</td>
<td>No se recibió el identificador de oper. de la intrucción de cobro.</td>
</tr>
<tr>
<td>30006</td>
<td>No se recuperó la operación para el identificador: [Número de Identificador].</td>
</tr>
<tr>
<td>30007</td>
<td>No se recibió el identificador de cliente.</td>
</tr>
<tr>
<td>30008</td>
<td>No se recuperó la cuenta para el identificador de cliente: [Número de Identificador].</td>
</tr>
<tr>
<td>30009</td>
<td>El préstamo no pertenece al cliente.</td>
</tr>
<tr>
<td>30010</td>
<td>La operación de cobro no pertenece al cliente.</td>
</tr>
<tr>
<td>30011</td>
<td>La operación de cobro no pertenece al cliente.</td>
</tr>
<tr>
<td>30012</td>
<td>No se recuperó la operación para el identificador [Número de Identificador].</td>
</tr>
<tr>
<td>30013</td>
<td>No se recuperó la operación simulada con identificador .</td>
</tr>
<tr>
<td>40001</td>
<td>en adelante, errores de contabilización.</td>
</tr>
</tbody>
</table>
</div></template>


