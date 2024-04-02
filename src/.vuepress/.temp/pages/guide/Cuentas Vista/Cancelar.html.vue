<template><div><h1 id="cancelar" tabindex="-1"><a class="header-anchor" href="#cancelar"><span>Cancelar</span></a></h1>
<p>Método para realizar la liquidación de una cuenta vista.</p>
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
<td>BTCuentasVista.Cancelar</td>
<td>RBTPG474</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Cancelar:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasVista.Cancelar> 
         <bts:Btinreq> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Device>GP</bts:Device> 
            <bts:Token>65386256C895CD01D7DC796E</bts:Token> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:clienteUId>201</bts:clienteUId> 
         <bts:cuentaLiquidacionUId>310</bts:cuentaLiquidacionUId> 
         <bts:cuentaAcreditacionUId>311</bts:cuentaAcreditacionUId> 
      </bts:BTCuentasVista.Cancelar> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \   
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?Cancelar' \ 
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
	"clienteUId": "201", 
	"cuentaLiquidacionUId": "310", 
	"cuentaAcreditacionUId": "311", 
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
      <BTCuentasVista.CancelarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GP</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>65386256C895CD01D7DC796E</Token> 
         </Btinreq> 
         <movimientoUId>1032</movimientoUId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>12044</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCuentasVista.Cancelar</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2023-05-23</Fecha> 
            <Canal>BTDIGITAL</Canal> 
            <Hora>15:19:22</Hora> 
         </Btoutreq> 
      </BTCuentasVista.CancelarResponse> 
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
    "movimientoUId": 1032, 
    "Btoutreq": { 
        "Numero": 823, 
        "Estado": "OK", 
        "Servicio": "BTCuentasVista.Cancelar", 
        "Requerimiento": "1", 
        "Fecha": "2018-11-12", 
        "Hora": "17:47:27", 
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
<td>Identificador único de cuenta cliente.</td>
</tr>
<tr>
<td>cuentaLiquidacionUId</td>
<td>Long</td>
<td>Identificador único de la cuenta vista a cancelar.</td>
</tr>
<tr>
<td>cuentaAcreditacionUId</td>
<td>Long</td>
<td>Identificador único de la cuenta vista de acreditación/cobro de la liquidación.</td>
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
<td>Identificador único del movimiento realizado.</td>
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
<td>No se recibió el identificador del cliente.</td>
</tr>
<tr>
<td>30002</td>
<td>La cuenta indicada no existe.</td>
</tr>
<tr>
<td>30003</td>
<td>No se recibió el identificador de la cuenta.</td>
</tr>
<tr>
<td>30004</td>
<td>La cuenta indicada no existe.</td>
</tr>
<tr>
<td>30005</td>
<td>La cuenta a liquidar y la cuenta de acreditación no pueden ser la misma.</td>
</tr>
<tr>
<td>30007</td>
<td>La cuenta indicada no pertenece al cliente.</td>
</tr>
<tr>
<td>30006</td>
<td>La cuenta de cobro indicada no existe.</td>
</tr>
<tr>
<td>30008</td>
<td>Las monedas de la cuenta a liquidar y la cuenta de acreditación deben ser la misma.</td>
</tr>
<tr>
<td>30009</td>
<td>No se pudo obtener el identificador para el movimiento realizado.</td>
</tr>
<tr>
<td>30100</td>
<td>Error en la contabilización.</td>
</tr>
<tr>
<td>40001</td>
<td>Operativa fuera de horario</td>
</tr>
<tr>
<td>40003</td>
<td>Producto cancelado.</td>
</tr>
<tr>
<td>40004</td>
<td>No se definió transacción a ejecutar.</td>
</tr>
<tr>
<td>40006</td>
<td>La Operación tiene Bloqueos; no puede ser liquidada.</td>
</tr>
<tr>
<td>40007</td>
<td>El producto se encuentra sobregirado, no es posible realizar la liquidación.</td>
</tr>
<tr>
<td>40008</td>
<td>La cuenta tiene Tarjeta de débito asociada; no puede ser liquidada.</td>
</tr>
<tr>
<td>40009</td>
<td>El producto paga la comisión del paquete, debe modificarse la instrucción.</td>
</tr>
<tr>
<td>40010</td>
<td>NO SE DEFINIO LA CARPETA EN LA QUE SE GUARDARÁ EL ARCHIVO.</td>
</tr>
<tr>
<td>40013</td>
<td>Usuario no autorizado a consultar esta Cuenta.</td>
</tr>
<tr>
<td>40014</td>
<td>Usuario no autorizado a consultar esta Cuenta.</td>
</tr>
<tr>
<td>40015</td>
<td>No es posible realizar la liquidación.</td>
</tr>
<tr>
<td>40016</td>
<td>El titular de la cuenta no es una persona física.</td>
</tr>
<tr>
<td>40017</td>
<td>No es posible operar con una cuenta conjunta.</td>
</tr>
<tr>
<td>40018</td>
<td>La operación no permite operar.</td>
</tr>
<tr>
<td>40019</td>
<td>La operación de acreditación no permite operar.</td>
</tr>
<tr>
<td>40020</td>
<td>No se indicó cuenta de cobro/acreditación.</td>
</tr>
<tr>
<td>40021</td>
<td>La operación a liquidar no puede ser CTS.</td>
</tr>
</tbody>
</table>
</div></template>


