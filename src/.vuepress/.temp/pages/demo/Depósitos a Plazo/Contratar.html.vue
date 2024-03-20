<template><div><h1 id="contratar" tabindex="-1"><a class="header-anchor" href="#contratar"><span>Contratar</span></a></h1>
<p>Método para dar de alta de un depósito a plazo.</p>
<p>Este servicio sirve para contratar simulaciones realizadas desde el servicio BTDepositoAPlazo.Simular</p>
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
<td>BTDepositosAPlazo.Contratar</td>
<td>RBTPG094</td>
<td>Global</td>
</tr>
</tbody>
</table>
<h3 id="configuracion-backend" tabindex="-1"><a class="header-anchor" href="#configuracion-backend"><span>Configuración Backend</span></a></h3>
<ol>
<li>Definir la transacción de alta de depósito a plazo, teniendo en cuenta que:</li>
</ol>
<ul>
<li>
<p>El depósito a plazo se almacena en el preformato 1.</p>
</li>
<li>
<p>La cuenta vista de débito se almacena en el preformato 2.</p>
</li>
<li>
<p>Los correlativos del subordinal deben corresponderse con los módulos de los productos de cuenta vista definidos en el subordinal.</p>
</li>
</ul>
<ol start="2">
<li>Configurar la transacción parametrizada mediante el mantenimiento de transacciones por servicio (HBTSBT1T)</li>
</ol>
<p>Se debe indicar los ordinales donde se encuentra definido el depósito a plazo y la cuenta vista de débito.</p>
<blockquote>
<p>Ejemplo de invocación al método Contratar:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTDepositosAPlazo.Contratar> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento/> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>407fce50864A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:simulacionUId>41</bts:simulacionUId> 
         <bts:clienteUId>161</bts:clienteUId> 
         <bts:operacionUIdOrigen>281</bts:operacionUIdOrigen> 
         <bts:operacionUIdDestino>281</bts:operacionUIdDestino> 
         <bts:instruccionAlVencimiento>2</bts:instruccionAlVencimiento> 
      </bts:BTDepositosAPlazo.Contratar> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDepositosAPlazo?Contratar=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "simulacionUId":41, 
    "clienteUId":161, 
    "operacionUIdOrigen":281, 
    "operacionUIdDestino":281, 
    "instruccionAlVencimiento":2   
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
      <BTDepositosAPlazo.ContratarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>407fce50864A8B5C60A82434</Token> 
         </Btinreq> 
         <operacionUId>321</operacionUId> 
         <fechaAlta>2018-10-09</fechaAlta> 
         <fechaVencimiento>2019-10-09</fechaVencimiento> 
         <intereses>1001.78</intereses> 
         <tasa>0.18</tasa> 
         <movimientoUId>357</movimientoUId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>995</Numero> 
            <Estado>NEG_ERROR</Estado> 
            <Servicio>BTDepositosAPlazo.Contratar</Servicio> 
            <Fecha>2017-12-26</Fecha> 
            <Requerimiento/> 
            <Hora>11:21:19</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTDepositosAPlazo.ContratarResponse> 
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
	"operacionUId": "358", 
   "fechaAlta": "2018-10-09", 
   "fechaVencimiento": "2019-10-09", 
   "intereses": "1001.78", 
   "tasa": "0.18", 
   "simulacionUId": "21", 
	"movimientoUId": "357", 
   "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "946", 
        "Estado": "OK", 
        "Servicio": "BTDepositosAPlazo.Contratar", 
        "Fecha": "2017-12-21", 
        "Requerimiento": "", 
        "Hora": "18:10:30", 
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
<td>simulacionUId</td>
<td>Long</td>
<td>Identificador único de la simulación.</td>
</tr>
<tr>
<td>clienteUId</td>
<td>Long</td>
<td>Identificador único de cliente.</td>
</tr>
<tr>
<td>operacionUIdOrigen</td>
<td>Long</td>
<td>Identificador único de la operación de donde se retira el monto del DPF.</td>
</tr>
<tr>
<td>operacionUIdDestino</td>
<td>Long</td>
<td>Identificador único de la operación de acreditación (Capital y/o intereses según instrucción).</td>
</tr>
<tr>
<td>instruccionAlVencimiento</td>
<td>Short</td>
<td>Identificador de instrucción al vencimiento.</td>
</tr>
<tr>
<td>controlaMismoCliente</td>
<td>String</td>
<td>¿Controla correspondencia de cuenta de débito contra cuenta cliente originante? [Hidden: Valores 'S'/'N'].</td>
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
<td>operacionUId</td>
<td>Long</td>
<td>Identificador único de operación.</td>
</tr>
<tr>
<td>movimientoUId</td>
<td>Long</td>
<td>Identificador único de movimiento.</td>
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
<td>No se recibió el identificador de cliente.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recuperó la cuenta para el identificador.</td>
</tr>
</tbody>
</table>
</div></template>


