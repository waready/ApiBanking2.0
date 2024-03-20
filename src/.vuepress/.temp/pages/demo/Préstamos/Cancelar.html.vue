<template><div><h1 id="cancelar" tabindex="-1"><a class="header-anchor" href="#cancelar"><span>Cancelar</span></a></h1>
<p>Método para realizar la cancelación de un préstamo.</p>
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
<td>BTPrestamos.Cancelar</td>
<td>RBTPG076</td>
<td>Global</td>
</tr>
</tbody>
</table>
<h3 id="configuracion-backend" tabindex="-1"><a class="header-anchor" href="#configuracion-backend"><span>Configuración Backend</span></a></h3>
<ol>
<li>
<p>Definir la transacción de Pago, teniendo en cuenta que:</p>
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
</li>
<li>
<p>Se debe indicar los ordinales donde se encuentra definido el préstamo y la cuenta de cobro.</p>
</li>
</ol>
<blockquote>
<p>Ejemplo de invocación al método Cancelar:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.Cancelar> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento/> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>dc7d30c0044A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:operacionUId>321</bts:operacionUId> 
         <bts:clienteUId>161</bts:clienteUId> 
         <bts:operacionUId_cobro>281</bts:operacionUId_cobro> 
         <bts:referencia>Cancelar</bts:referencia> 
      </bts:BTPrestamos.Cancelar> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?Cancelar=' \ 
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
      <BTPrestamos.CancelarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>dc7d30c0044A8B5C60A82434</Token> 
         </Btinreq> 
         <movimientoUId>121</movimientoUId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>758</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPrestamos.Cancelar</Servicio> 
            <Requerimiento/> 
            <Fecha>2017-12-05</Fecha> 
            <Hora>13:32:15</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPrestamos.CancelarResponse> 
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
    "movimientoUId": "122", 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "759", 
        "Estado": "OK", 
        "Servicio": "BTPrestamos.Cancelar", 
        "Requerimiento": "", 
        "Fecha": "2017-12-05", 
        "Hora": "13:39:04", 
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
<td>operacionUId_cobro</td>
<td>Long</td>
<td>Identificador único de operación de la cuenta vista donde se cobrará el préstamo.</td>
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
<td>Identificador único del movimiento [Asiento].</td>
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
<td>No se recuperó la operacion para el Identificador: [Número de Identificador].</td>
</tr>
<tr>
<td>30005</td>
<td>No se recuperó la operación para el Identificador: [Número de Identificador]-</td>
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
<td>30009</td>
<td>La operación de cobro no pertenece al cliente.</td>
</tr>
<tr>
<td>40001</td>
<td>La Cuenta indicada es incorrecta.</td>
</tr>
</tbody>
</table>
</div></template>


