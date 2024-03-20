<template><div><h1 id="contratar" tabindex="-1"><a class="header-anchor" href="#contratar"><span>Contratar</span></a></h1>
<p>Método para dar el alta de un préstamo amortizable.</p>
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
<td>BTPrestamos.Contratar</td>
<td>RBTPG077</td>
<td>Global</td>
</tr>
</tbody>
</table>
<h3 id="configuracion-backend" tabindex="-1"><a class="header-anchor" href="#configuracion-backend"><span>Configuración Backend</span></a></h3>
<ol>
<li>
<p>Definir la transacción de alta, teniendo en cuenta que:</p>
<ul>
<li>
<p>El préstamo se almacena en el preformato 1.</p>
</li>
<li>
<p>La cuenta vista de acreditación se almacena en el preformato 2.</p>
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
<li>
<p>Si la opción general de procesos 3282 se encuentra activada, el servicio considera que se permiten cobros parciales.</p>
</li>
</ol>
<blockquote>
<p>Ejemplo de invocación al método Contratar:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.Contratar> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento/> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>5453369fee4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:operacionUId>341</bts:operacionUId> 
         <bts:clienteUId>161</bts:clienteUId> 
         <bts:operacionUId_desembolso>281</bts:operacionUId_desembolso> 
         <bts:operacionUId_cobro>281</bts:operacionUId_cobro> 
      </bts:BTPrestamos.Contratar> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?Contratar=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 9d6db2ed-3171-3f9c-11d1-3ed6402467a1' \ 
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
    "operacionUId_desembolso": 281, 
    "operacionUId_cobro": 281 
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
      <BTPrestamos.ContratarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>5453369fee4A8B5C60A82434</Token> 
         </Btinreq> 
         <movimientoUId>101</movimientoUId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>752</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPrestamos.Contratar</Servicio> 
            <Fecha>2017-11-30</Fecha> 
            <Requerimiento/> 
            <Hora>13:38:18</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPrestamos.ContratarResponse> 
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
    "movimientoUId": "102", 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "755", 
        "Estado": "OK", 
        "Servicio": "BTPrestamos.Contratar", 
        "Fecha": "2017-11-30", 
        "Requerimiento": "", 
        "Hora": "13:47:48", 
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
<td>operacionUId_desembolso</td>
<td>Long</td>
<td>Identificador único de operación de la cuenta vista donde se acreditará el monto solicitado.</td>
</tr>
<tr>
<td>operacionUId_cobro</td>
<td>Long</td>
<td>Identificador único de operación de la cuenta vista de donde se cobrará el préstamo. En caso de no solicitarse una operación de cobro, enviar valor 999999999.</td>
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
<td>No se recibió el identificador de operación de Acreditación.</td>
</tr>
<tr>
<td>30004</td>
<td>No se recuperó el préstamo para el identificador: [Número de identificador].</td>
</tr>
<tr>
<td>30005</td>
<td>No se recuperó la operación para el identificador: [Número de identificador].</td>
</tr>
<tr>
<td>30006</td>
<td>No se recibió el identificador de cliente.</td>
</tr>
<tr>
<td>30007</td>
<td>No se recuperó la cuenta para el Identificador de cliente: [Número de identificador].</td>
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
<td>No se recibió el identificador único de operación de cobro.</td>
</tr>
<tr>
<td>51001</td>
<td>No se recibió número de cliente.</td>
</tr>
<tr>
<td>51002</td>
<td>La operación no existe.</td>
</tr>
<tr>
<td>51003</td>
<td>La operación de cobro no existe.</td>
</tr>
<tr>
<td>51005</td>
<td>Atención: No se pudo obtener el numerador para la transacción.</td>
</tr>
<tr>
<td>51006</td>
<td>La operación esta cancelada.</td>
</tr>
<tr>
<td>51007</td>
<td>La operación ya existe.</td>
</tr>
<tr>
<td>51013</td>
<td>La operación de cobro esta cancelada.</td>
</tr>
</tbody>
</table>
</div></template>


