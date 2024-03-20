<template><div><h1 id="modificar-meta-de-ahorro" tabindex="-1"><a class="header-anchor" href="#modificar-meta-de-ahorro"><span>Modificar Meta de Ahorro</span></a></h1>
<p>Método para modificar la meta de ahorro.</p>
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
<td>BTAhorroProgramado.ModificarMetaDeAhorro</td>
<td>RBTPG117</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Modificar Meta de Ahorro:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTAhorroProgramado.ModificarMetaDeAhorro> 
		<bts:Btinreq> 
            <bts:Device>1</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>b3c6f2d0e34A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:clienteUId>81</bts:clienteUId> 
         <bts:ahorroUId>141</bts:ahorroUId> 
         <bts:motivoAhorro>Mi ahorro 1</bts:motivoAhorro> 
         <bts:montoMetaAhorro>15000</bts:montoMetaAhorro> 
         <bts:fechaMetaAhorro></bts:fechaMetaAhorro> 
      </bts:BTAhorroProgramado.ModificarMetaDeAhorro> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTAhorroProgramado?ModificarMetaDeAhorro' \ 
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
      "ahorroUId": 141, 
      "motivoAhorro": "Mi ahorro 1", 
      "montoMetaAhorro": 15000,  
      "fechaMetaAhorro": "0001-01-01" 
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
      <BTAhorroProgramado.ModificarMetaDeAhorroResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>b3c6f2d0e34A8B5C60A82434</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>151</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTAhorroProgramado.ModificarMetaDeAhorro</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2018-05-07</Fecha> 
            <Hora>13:26:12</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTAhorroProgramado.ModificarMetaDeAhorroResponse> 
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
        "Numero": "152", 
        "Estado": "OK", 
        "Servicio": "BTAhorroProgramado.ModificarMetaDeAhorro", 
        "Requerimiento": "1", 
        "Fecha": "2018-05-07", 
        "Hora": "13:30:54", 
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
<td>motivoAhorro</td>
<td>String</td>
<td>Descripción del motivo por el cual se ahorra [Ingreso opcional].</td>
</tr>
<tr>
<td>montoMetaAhorro</td>
<td>Double</td>
<td>Monto propuesto como meta para el ahorro [Discriminante el ingreso según si se definio &quot;Meta de ahorro por monto&quot; o &quot;Meta de ahorro por fecha&quot;].</td>
</tr>
<tr>
<td>fechaMetaAhorro</td>
<td>Date</td>
<td>Fecha propuesta como meta para el ahorro [Discriminante el ingreso según si se definio &quot;Meta de ahorro por monto&quot; o &quot;Meta de ahorro por fecha&quot;].</td>
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
<td>El monto indicado no puede ser menor que cero.</td>
</tr>
<tr>
<td>30004</td>
<td>No se recuperó la cuenta para el identificador de cliente:</td>
</tr>
<tr>
<td>30005</td>
<td>No se recuperó la operación del ahorro para el identificador: [Número de identificador].</td>
</tr>
<tr>
<td>30006</td>
<td>El ahorro no pertenece al identificador del cliente: [Número de identificador].</td>
</tr>
<tr>
<td>40001</td>
<td>No existe la operación de ahorro seleccionada.</td>
</tr>
<tr>
<td>40002</td>
<td>El producto seleccionado no es un producto con meta de ahorro.</td>
</tr>
<tr>
<td>40003</td>
<td>La fecha seleccionada como meta de ahorro no puede ser inferior a la del día.</td>
</tr>
</tbody>
</table>
</div></template>


