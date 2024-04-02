<template><div><h1 id="agregar-cuenta-de-cobro" tabindex="-1"><a class="header-anchor" href="#agregar-cuenta-de-cobro"><span>Agregar Cuenta de Cobro</span></a></h1>
<p>Método para agregar una cuenta de cobro de un préstamo.</p>
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
<td>BTPrestamos.AgregarCuentaDeCobro</td>
<td>RBTPG132</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Agregar Cuenta de Cobro:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.AgregarCuentaDeCobro> 
		<bts:Btinreq> 
            <bts:Device>1</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>0d2dc7b1654A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:operacionUId>121</bts:operacionUId> 
         <bts:operacionUId_cobro>3</bts:operacionUId_cobro> 
         <bts:permite_sobregirar>S</bts:permite_sobregirar> 
         <bts:permite_pago_parcial>S</bts:permite_pago_parcial> 
      </bts:BTPrestamos.AgregarCuentaDeCobro> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?AgregarCuentaDeCobro' \ 
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
	"operacionUId": 121, 
	"operacionUId_cobro": 2, 
	"permite_sobregirar": "S", 
	"permite_pago_parcial": "S" 
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
      <BTPrestamos.AgregarCuentaDeCobroResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>0d2dc7b1654A8B5C60A82434</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>100</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPrestamos.AgregarCuentaDeCobro</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2018-05-04</Fecha> 
            <Hora>18:04:42</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPrestamos.AgregarCuentaDeCobroResponse> 
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
        "Numero": "101", 
        "Estado": "OK", 
        "Servicio": "BTPrestamos.AgregarCuentaDeCobro", 
        "Requerimiento": "1", 
        "Fecha": "2018-05-04", 
        "Hora": "18:07:15", 
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
<td>Identificador único de operación del préstamo.</td>
</tr>
<tr>
<td>operacionUId_cobro</td>
<td>Long</td>
<td>Identificador único de operación de la cuenta de cobro.</td>
</tr>
<tr>
<td>permite_sobregirar</td>
<td>String</td>
<td>Define si la cuenta de cobro puede sobregirar o no (S/N).</td>
</tr>
<tr>
<td>permite_pago_parcial</td>
<td>String</td>
<td>Define si se permiten pagos parciales de la cuenta de cobro (S/N).</td>
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
<td>No se recibió el identificador único de operación de Préstamo.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recuperó la operación para el Identificador: [Número de Identificador].</td>
</tr>
<tr>
<td>30003</td>
<td>No se recibió el identificador único de operación de cobro.</td>
</tr>
<tr>
<td>30004</td>
<td>No se recuperó la operación de cobro para el Identificador: [Número de Identificador].</td>
</tr>
</tbody>
</table>
</div></template>


