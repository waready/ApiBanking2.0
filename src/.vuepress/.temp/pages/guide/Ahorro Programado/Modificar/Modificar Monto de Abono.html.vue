<template><div><h1 id="modificar-monto-de-abono" tabindex="-1"><a class="header-anchor" href="#modificar-monto-de-abono"><span>Modificar Monto de Abono</span></a></h1>
<p>Método para modificar el monto del abono para el ahorro.</p>
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
<td>BTAhorroProgramado.ModificarMontoDeAbono</td>
<td>RBTPG115</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Modificar Monto de Abono:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTAhorroProgramado.ModificarMontoDeAbono> 
         <bts:Btinreq> 
            <bts:Device>1</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>f2f7be2ebc4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:clienteUId>81</bts:clienteUId> 
         <bts:ahorroUId>61</bts:ahorroUId> 
         <bts:montoAbono>2000</bts:montoAbono> 
      </bts:BTAhorroProgramado.ModificarMontoDeAbono> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTAhorroProgramado?ModificarMontoDeAbono' \ 
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
      "montoAbono": 2500 
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
      <BTAhorroProgramado.ModificarMontoDeAbonoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>f2f7be2ebc4A8B5C60A82434</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>388</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTAhorroProgramado.ModificarMontoDeAbono</Servicio> 
            <Fecha>2018-04-30</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>17:43:27</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTAhorroProgramado.ModificarMontoDeAbonoResponse> 
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
        "Numero": "405", 
        "Estado": "OK", 
        "Servicio": "BTAhorroProgramado.ModificarMontoDeAbono", 
        "Fecha": "2018-05-03", 
        "Requerimiento": "1", 
        "Hora": "12:29:59", 
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
<td>Identificador único de operación de ahorro.</td>
</tr>
<tr>
<td>montoAbono</td>
<td>Double</td>
<td>Nuevo monto de abono para el ahorro.</td>
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
<td>No se recibió el nuevo monto para el abono.</td>
</tr>
<tr>
<td>30004</td>
<td>El monto indicado no puede ser menor a cero.</td>
</tr>
<tr>
<td>30005</td>
<td>No se recuperó la cuenta para el identificador de cliente: [Número de identificador].</td>
</tr>
<tr>
<td>30006</td>
<td>No se recuperó la operación del ahorro para el identificador: [Número de identificador].</td>
</tr>
<tr>
<td>30007</td>
<td>El ahorro no pertenece al identificador del cliente: [Número de identificador].</td>
</tr>
<tr>
<td>40006</td>
<td>La cuota indicada es menor al mínimo permitido.</td>
</tr>
<tr>
<td>40007</td>
<td>La cuota indicada es mayor al máximo permitido.</td>
</tr>
<tr>
<td>40019</td>
<td>La variación del abono por monto indicada es menor al mínimo permitido.</td>
</tr>
<tr>
<td>40020</td>
<td>La variación del abono por monto indicada es mayor al máximo permitido.</td>
</tr>
<tr>
<td>40021</td>
<td>La variación del abono por % indicado es menor al mínimo permitido.</td>
</tr>
<tr>
<td>40950</td>
<td>El ahorro seleccionado no se encuentra habilitado para operar.</td>
</tr>
<tr>
<td>40951</td>
<td>No se permite modificar el abono para el producto seleccionado.</td>
</tr>
</tbody>
</table>
</div></template>


