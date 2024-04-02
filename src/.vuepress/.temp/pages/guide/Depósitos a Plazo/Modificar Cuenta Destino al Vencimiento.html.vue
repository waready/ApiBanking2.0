<template><div><h1 id="modificar-cuenta-destino-al-vencimiento" tabindex="-1"><a class="header-anchor" href="#modificar-cuenta-destino-al-vencimiento"><span>Modificar Cuenta Destino al Vencimiento</span></a></h1>
<p>Método para modificar la cuenta de destino de la instrucción al vencimiento de un depósito.</p>
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
<td>BTDepositosAPlazo.ModificarCuentaDestinoVencimiento</td>
<td>RBTPG107</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Modificar Cuenta Destino al Vencimiento:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTDepositosAPlazo.ModificarCuentaDestinoVencimiento> 
	    <bts:Btinreq> 
            <bts:Device>1</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>6c275823524A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:clienteUId>61</bts:clienteUId> 
         <bts:depositoUId>4</bts:depositoUId> 
         <bts:cuentaUId>3</bts:cuentaUId> 
      </bts:BTDepositosAPlazo.ModificarCuentaDestinoVencimiento> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDepositosAPlazo?ModificarCuentaDestinoVencimiento=' \ 
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
   "clienteUId": 61, 
	"depositoUId": 4, 
	"cuentaUId": 3 
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
      <BTDepositosAPlazo.ModificarCuentaDestinoVencimientoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>6c275823524A8B5C60A82434</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>146</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTDepositosAPlazo.ModificarCuentaDestinoVencimiento</Servicio> 
            <Fecha>2018-03-01</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>12:15:08</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTDepositosAPlazo.ModificarCuentaDestinoVencimientoResponse> 
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
        "Numero": "146", 
        "Estado": "OK", 
        "Servicio": "BTDepositosAPlazo.ModificarCuentaDestinoAcreditacion", 
        "Fecha": "2018-03-01", 
        "Requerimiento": "1", 
        "Hora": "12:15:08", 
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
<td>depositoUId</td>
<td>Long</td>
<td>Identificador único de la operación del depósito.</td>
</tr>
<tr>
<td>cuentaUId</td>
<td>Long</td>
<td>Identificador único de la operación de cuenta.</td>
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
<td>No se recibió el identificador de la operación del depósito.</td>
</tr>
<tr>
<td>30003</td>
<td>No se recibió el identificador de la operación de la cuenta.</td>
</tr>
<tr>
<td>30004</td>
<td>No se recuperó la cuenta para el Identificador de cliente: [Número de identificador].</td>
</tr>
<tr>
<td>30005</td>
<td>No se recuperó la operación del Depósito para el identificador: [Número de identificador].</td>
</tr>
<tr>
<td>30006</td>
<td>La operación asociada al identificador: [Número de identificador] no pertenece a un depósito a plazo.</td>
</tr>
<tr>
<td>30007</td>
<td>La cuenta del depósito no pertenece al identificador del cliente: [Número de identificador].</td>
</tr>
<tr>
<td>30008</td>
<td>No se encontró instrucción al vencimiento para el depósito ingresado.</td>
</tr>
<tr>
<td>30009</td>
<td>El depósito tiene instrucción de renovación automatica, para especificar una Cuenta debe modificar la intrucción.</td>
</tr>
<tr>
<td>30010</td>
<td>No se recuperó la operación de la cuenta para el identificador: [Número de identificador]</td>
</tr>
<tr>
<td>30011</td>
<td>La operación asociada al identificador: [Número de identificador] no pertenece a un producto cuenta.</td>
</tr>
<tr>
<td>30012</td>
<td>La cuenta indicada es igual a la de la instrucción.</td>
</tr>
<tr>
<td>40002</td>
<td>No existe instrucción para operación.</td>
</tr>
</tbody>
</table>
</div></template>


