<template><div><h1 id="pagar-cuota-terceros" tabindex="-1"><a class="header-anchor" href="#pagar-cuota-terceros"><span>Pagar Cuota Terceros</span></a></h1>
<p>Método para realizar el pago de cuota de un préstamo con una cuenta de cobro de terceros.</p>
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
<td>BTPrestamos.PagarCuotaTerceros</td>
<td>RBTPG831</td>
<td>Global</td>
</tr>
</tbody>
</table>
<h3 id="configuracion-backend" tabindex="-1"><a class="header-anchor" href="#configuracion-backend"><span>Configuración Backend</span></a></h3>
<ol>
<li>
<p>Definir la transacción de pago, teniendo en cuenta que:</p>
<ul>
<li>
<p>El préstamo se almacena en el preformato 1</p>
</li>
<li>
<p>La cuenta vista de cobro se almacena en el preformato 2</p>
</li>
<li>
<p>Los correlativos del subordinal deben corresponderse con los módulos de los productos definidos en el subordinal</p>
</li>
</ul>
</li>
<li>
<p>Configurar la transacción parametrizada mediante el mantenimiento de transacciones por servicio (HBTSBT1T).</p>
<p>Se debe indicar los ordinales donde se encuentra definido el préstamo y la cuenta de cobro</p>
</li>
</ol>
<blockquote>
<p>Ejemplo de invocación al método Pagar Cuota Terceros:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.PagarCuotaTerceros> 
         <bts:Btinreq> 
            <bts:Device>bms</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>0</bts:Requerimiento> 
            <bts:Token>b6275b301e4A8B5C60A82434</bts:Token> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
         </bts:Btinreq> 
         <bts:operacionUId>39</bts:operacionUId> 
         <bts:clienteUId>9</bts:clienteUId> 
         <bts:importe>1000</bts:importe> 
         <bts:operacionCobroUId>800</bts:operacionCobroUId> 
         <bts:referencia>Una cuenta de terceros</bts:referencia> 
      </bts:BTPrestamos.PagarCuotaTerceros> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://appjava2019:8106/supervielle/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?PagarCuotaTerceros' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -d '{ 
	"Btinreq": { 
        "Device": "bms", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "0", 
        "Canal": "BTDIGITAL", 
        "Token": "faa36bd33f4A8B5C60A82434" 
    }, 
    "operacionUId": "40", 
    "clienteUId": "9", 
    "importe": "950", 
    "operacionCobroUId": "865", 
    "referencia": "Paga cuota terceros" 
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
      <BTPrestamos.PagarCuotaTercerosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>bms</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>0</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>b6275b301e4A8B5C60A82434</Token> 
         </Btinreq> 
         <movimientoUId>58</movimientoUId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>1090</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPrestamos.PagarCuotaTerceros</Servicio> 
            <Fecha>2020-10-30</Fecha> 
            <Requerimiento>0</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Hora>12:46:32</Hora> 
         </Btoutreq> 
      </BTPrestamos.PagarCuotaTercerosResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
        "Device": "bms", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "0", 
        "Canal": "BTDIGITAL", 
        "Token": "faa36bd33f4A8B5C60A82434" 
    }, 
    "movimientoUId": 61, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 1093, 
        "Estado": "OK", 
        "Servicio": "BTPrestamos.PagarCuotaTerceros", 
        "Fecha": "2020-10-30", 
        "Requerimiento": "0", 
        "Canal": "BTDIGITAL", 
        "Hora": "14:29:28" 
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
<td>operacionUId</td>
<td>Long</td>
<td>Identificador único de operación simulada.</td>
</tr>
<tr>
<td>clienteUId</td>
<td>Long</td>
<td>Identificador único de cliente.</td>
</tr>
<tr>
<td>importe</td>
<td>Double</td>
<td>Importe a pagar.</td>
</tr>
<tr>
<td>operacionCobroUId</td>
<td>Long</td>
<td>Identificador único de operación de la cuenta vista de donde se cobrará el préstamo.</td>
</tr>
<tr>
<td>referencia</td>
<td>String</td>
<td>Referencia.</td>
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
<td>Identificador único de movimiento (asiento).</td>
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
<td>No se recibió el identificador de operación de préstamo.</td>
</tr>
<tr>
<td>30003</td>
<td>Debe ingresar importe.</td>
</tr>
<tr>
<td>30004</td>
<td>No se recuperó la operación para el Identificador: [Número de Identificador].</td>
</tr>
<tr>
<td>30006</td>
<td>No se recibió el identificador de cliente.</td>
</tr>
<tr>
<td>30007</td>
<td>No se recuperó la cuenta para el Identificador de cliente: [Número de Identificador].</td>
</tr>
<tr>
<td>30008</td>
<td>El préstamo no pertenece al cliente.</td>
</tr>
<tr>
<td>30100</td>
<td>Error en la Contabilización.</td>
</tr>
</tbody>
</table>
</div></template>


