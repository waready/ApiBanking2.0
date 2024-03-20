<template><div><h1 id="pagar-cuota-a-fecha" tabindex="-1"><a class="header-anchor" href="#pagar-cuota-a-fecha"><span>Pagar Cuota a Fecha</span></a></h1>
<p>Método para realizar el pago de cuota de un préstamo a una fecha valor.</p>
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
<td>BTPrestamos.PagarCuotaAFecha</td>
<td>RBTPG225</td>
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
<p>El préstamo se almacena en el preformato 1.</p>
</li>
<li>
<p>La cuenta vista de cobro se almacena en el preformato 2.</p>
</li>
<li>
<p>Los correlativos del subordinal deben corresponderse con los módulos de los productos definidos en el subordinal.</p>
</li>
</ul>
</li>
<li>
<p>Configurar la transacción parametrizada mediante el mantenimiento de transacciones por servicio (HBTSBT1T).</p>
<p>Se debe indicar los ordinales donde se encuentra definido el préstamo y la cuenta de cobro.</p>
</li>
</ol>
<blockquote>
<p>Ejemplo de invocación al método Pagar Cuota a Fecha:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.PagarCuotaAFecha> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>191631443CD285A89A23FBEE</bts:Token> 
            <bts:Device>AC</bts:Device> 
         </bts:Btinreq> 
         <bts:operacionUId>37675</bts:operacionUId> 
         <bts:clienteUId>1600</bts:clienteUId> 
         <bts:importe>1000</bts:importe> 
         <bts:operacionUId_cobro>59</bts:operacionUId_cobro> 
         <bts:referencia>Prueba</bts:referencia> 
         <bts:fecha>2019-07-26</bts:fecha> 
      </bts:BTPrestamos.PagarCuotaAFecha> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?PagarCuota=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 9bdf8096-2be0-d0b4-4017-971713b37367' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "operacionUId": 342, 
    "clienteUId": 161, 
    "Importe": 1000, 
    "operacionUId_cobro": 281, 
    "referencia": "Cancelar" 
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
      <BTPrestamos.PagarCuotaAFechaResponse> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>191631443CD285A89A23FBEE</Token> 
            <Device>AC</Device> 
         </Btinreq> 
         <movimientoUId>1807</movimientoUId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTPrestamos.PagarCuotaAFecha</Servicio> 
            <Fecha>2019-07-26</Fecha> 
            <Hora>12:04:55</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>120425</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTPrestamos.PagarCuotaAFechaResponse> 
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
    "movimientoUId": "1807", 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "120425", 
        "Estado": "OK", 
        "Servicio": "BTPrestamos.PagarCuotaAFecha", 
        "Requerimiento": "", 
        "Fecha": "2019-07-26", 
        "Hora": "12:04:55", 
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
<td>operacionUId_cobro</td>
<td>Long</td>
<td>Identificador único de operación de la cuenta vista de donde se cobrará el préstamo.</td>
</tr>
<tr>
<td>referencia</td>
<td>String</td>
<td>Referencia.</td>
</tr>
<tr>
<td>fecha</td>
<td>Date</td>
<td>Fecha Valor del pago.</td>
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
<td>No se recibió el identificador de operación de préstamo.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recibió el identificador de operación de cobro.</td>
</tr>
<tr>
<td>30004</td>
<td>No se recuperó la operación para el Identificador: [Número de Identificador].</td>
</tr>
<tr>
<td>30005</td>
<td>No se recuperó la operación para el Identificador: [Número de Identificador].</td>
</tr>
<tr>
<td>30006</td>
<td>No se recibió el identificador de cliente.</td>
</tr>
<tr>
<td>30007</td>
<td>No se recuperó la operación para el Identificador de Cliente: [Número de Identificador].</td>
</tr>
<tr>
<td>30008</td>
<td>El préstamo no pertenece al cliente.</td>
</tr>
<tr>
<td>30009</td>
<td>La operación de cobro no pertenece al cliente.</td>
</tr>
<tr>
<td>30010</td>
<td>No se recibió una fecha para la operación.</td>
</tr>
<tr>
<td>40001</td>
<td>La Cuenta indicada es incorrecta.</td>
</tr>
</tbody>
</table>
</div></template>


