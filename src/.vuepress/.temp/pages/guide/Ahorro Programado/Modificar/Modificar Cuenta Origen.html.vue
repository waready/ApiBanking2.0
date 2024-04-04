<template><div><h1 id="modificar-cuenta-origen" tabindex="-1"><a class="header-anchor" href="#modificar-cuenta-origen"><span>Modificar Cuenta Origen</span></a></h1>
<p>Método para modificar la cuenta de origen desde donde se toman los fondos para el ahorro.</p>
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
<td>BTAhorroProgramado.ModificarCuentaOrigen</td>
<td>RBTPG113</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Modificar Cuenta Origen:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTAhorroProgramado.ModificarCuentaOrigen> 
         <bts:Btinreq> 
            <bts:Device>1</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>0d927483a74A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:clienteUId>81</bts:clienteUId> 
         <bts:ahorroUId>61</bts:ahorroUId> 
         <bts:cuentaUId>81</bts:cuentaUId> 
      </bts:BTAhorroProgramado.ModificarCuentaOrigen> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTAhorroProgramado?ModificarCuentaOrigen' \ 
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
      "clienteUId": 81, 
      "ahorroUId": 61, 
      "cuentaUId": 21 
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
      <BTAhorroProgramado.ModificarCuentaOrigenResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>0d927483a74A8B5C60A82434</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>408</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTAhorroProgramado.ModificarCuentaOrigen</Servicio> 
            <Fecha>2018-05-03</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>16:52:30</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTAhorroProgramado.ModificarCuentaOrigenResponse> 
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
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "409", 
        "Estado": "OK", 
        "Servicio": "BTAhorroProgramado.ModificarCuentaOrigen", 
        "Fecha": "2018-05-03", 
        "Requerimiento": "1", 
        "Hora": "16:54:31", 
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
<td>ahorroUId</td>
<td>Long</td>
<td>Identificador único de la operación de ahorro.</td>
</tr>
<tr>
<td>cuentaUId</td>
<td>Long</td>
<td>Identificador único de la nueva operación cuenta origen del ahorro.</td>
</tr>
</tbody>
</table>
<h3 id="datos-de-salida" tabindex="-1"><a class="header-anchor" href="#datos-de-salida"><span>Datos de salida</span></a></h3>
<p>No aplica.</p>
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
<td>No se recibió el identificador del cliente.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recibió el identificador del ahorro.</td>
</tr>
<tr>
<td>30003</td>
<td>No se recibió el identificador de operación de la cuenta origen.</td>
</tr>
<tr>
<td>30004</td>
<td>No se recuperó la cuenta para el identificador de cliente: [Número de identificador].</td>
</tr>
<tr>
<td>30005</td>
<td>No se recuperó la operación del ahorro para el identificador: [Número de identificador].</td>
</tr>
<tr>
<td>30006</td>
<td>No se recuperó la operación de la cuenta vista para el identificador: [Número de identificador].</td>
</tr>
<tr>
<td>30007</td>
<td>El ahorro no pertenece al identificador del cliente: [Número de identificador].</td>
</tr>
<tr>
<td>30008</td>
<td>La cuenta vista no pertenece al identificador del cliente: [Número de identificador].</td>
</tr>
<tr>
<td>40001</td>
<td>La operación seleccionada no corresponde a un producto de ahorro.</td>
</tr>
<tr>
<td>40002</td>
<td>El ahorro seleccionado no se encuentra habilitado para operar.</td>
</tr>
<tr>
<td>40003</td>
<td>El producto de la cuenta de origen seleccionado no se encuentra habilitado para operar.</td>
</tr>
<tr>
<td>40004</td>
<td>El producto del ahorro no permite operar con cuentas de distinta moneda.</td>
</tr>
<tr>
<td>40005</td>
<td>El producto acredita una cuenta externa, no es posible modificar la misma.</td>
</tr>
<tr>
<td>40006</td>
<td>El producto del ahorro no permite operar con cuentas de distintos clientes.</td>
</tr>
</tbody>
</table>
</div></template>


