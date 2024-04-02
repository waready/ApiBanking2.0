<template><div><h1 id="registrar-asiento-fecha-valor" tabindex="-1"><a class="header-anchor" href="#registrar-asiento-fecha-valor"><span>Registrar Asiento Fecha Valor</span></a></h1>
<p>Método para registrar en el sistema un asiento a una fecha valor dada.</p>
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
<td>BTContabilidad.RegistrarAsientoFechaValor</td>
<td>RBTPG532</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Registrar Asiento Fecha Valor:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTContabilidad.RegistrarAsientoFechaValor> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>BANTOTAL</bts:Usuario> 
            <bts:Token>1244265502F955E77534D3E0</bts:Token> 
            <bts:Device>MC</bts:Device> 
         </bts:Btinreq> 
         <bts:sdtDatosAsiento> 
            <bts:operacionUId1>10140</bts:operacionUId1> 
            <bts:operacionUId2>10141</bts:operacionUId2> 
            <bts:operacionUId3></bts:operacionUId3> 
            <bts:operacionUId4></bts:operacionUId4> 
            <bts:operacionUId5></bts:operacionUId5> 
            <bts:importe1>1000</bts:importe1> 
            <bts:importe2>5220</bts:importe2> 
            <bts:importe3></bts:importe3> 
            <bts:importe4></bts:importe4> 
            <bts:importe5></bts:importe5> 
            <bts:importe6></bts:importe6> 
            <bts:importe7></bts:importe7> 
            <bts:importe8></bts:importe8> 
            <bts:concepto></bts:concepto> 
         </bts:sdtDatosAsiento> 
         <bts:fecha>2022-11-24</bts:fecha> 
      </bts:BTContabilidad.RegistrarAsientoFechaValor> 
   </soapenv:Body> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTContabilidad_v1?RegistrarAsientoFechaValor=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: a0776b33-6711-6c56-044c-42d681d3742f' \ 
  -d '{ 
  	"Btinreq": { 
		"Device": "GZ", 
		"Usuario": "INSTALADOR", 
		"Requerimiento": "1", 
		"Canal": "BTDIGITAL", 
		"Token": "2081397563CD285A89A23FBE" 
	}, 
	"sdtDatosAsiento": { 
		"operacionUId1": "10140", 
		"operacionUId2": "10141", 
		"operacionUId3": "", 
		"operacionUId4": "", 
		"operacionUId5": "", 
		"importe1": "1000", 
		"importe2": "5220", 
		"importe3": "", 
		"importe4": "", 
		"importe5": "", 
		"importe6": "", 
		"importe7": "", 
		"importe8": "", 
		"concepto": "" 
	},    
	"fecha": "2022-11-24", 
  } 
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
      <BTContabilidad.RegistrarAsientoFechaValorResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>268b6d23eb4A8B5C60A82434</Token> 
         </Btinreq> 
		 <movimientoUId>141</movimientoUId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>864</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTContabilidad.RegistrarAsientoFechaValor</Servicio> 
            <Requerimiento/> 
            <Fecha>2017-12-18</Fecha> 
            <Hora>17:07:19</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTContabilidad.RegistrarAsientoFechaValorResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
    }, 
	"movimientoUId": "142", 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "868", 
        "Estado": "OK", 
        "Servicio": "BTContabilidad.RegistrarAsientoFechaValor", 
        "Requerimiento": "", 
        "Fecha": "2017-12-18", 
        "Hora": "17:15:28", 
        "Canal": "BTDIGITAL" 
    } 
} 
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
<td>sdtDatosAsiento</td>
<td>sBTDatosAsiento</td>
<td>Datos del movimiento</td>
</tr>
<tr>
<td>fecha</td>
<td>Date</td>
<td>Fecha valor del asiento.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTDatosAsiento  son los siguientes:</p>
<table>
<thead>
<tr>
<th>Campo</th>
<th>Tipo</th>
<th>Comentarios</th>
</tr>
</thead>
<tbody>
<tr>
<td>operacionUId1</td>
<td>Long</td>
<td>Identificador único de operación 1</td>
</tr>
<tr>
<td>operacionUId2</td>
<td>Long</td>
<td>Identificador único de operación 2</td>
</tr>
<tr>
<td>operacionUId3</td>
<td>Long</td>
<td>Identificador único de operación 3</td>
</tr>
<tr>
<td>operacionUId4</td>
<td>Long</td>
<td>Identificador único de operación 4</td>
</tr>
<tr>
<td>operacionUId5</td>
<td>Long</td>
<td>Identificador único de operación 5</td>
</tr>
<tr>
<td>importe1</td>
<td>Double</td>
<td>Importe 1 del movimiento</td>
</tr>
<tr>
<td>importe2</td>
<td>Double</td>
<td>Importe 2 del movimiento</td>
</tr>
<tr>
<td>importe3</td>
<td>Double</td>
<td>Importe 3 del movimiento</td>
</tr>
<tr>
<td>importe4</td>
<td>Double</td>
<td>Importe 4 del movimiento</td>
</tr>
<tr>
<td>importe5</td>
<td>Double</td>
<td>Importe 5 del movimiento</td>
</tr>
<tr>
<td>importe6</td>
<td>Double</td>
<td>Importe 6 del movimiento</td>
</tr>
<tr>
<td>importe7</td>
<td>Double</td>
<td>Importe 7 del movimiento</td>
</tr>
<tr>
<td>importe8</td>
<td>Double</td>
<td>Importe 8 del movimiento</td>
</tr>
<tr>
<td>concepto</td>
<td>String</td>
<td>Concepto del movimiento</td>
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
<td>Debe ingresar al menos una operación.</td>
</tr>
<tr>
<td>30002</td>
<td>Debe ingresar la fecha.</td>
</tr>
<tr>
<td>30004</td>
<td>No se recuperó la operación origen para el Identificador: [Número de Identificador].</td>
</tr>
<tr>
<td>30100</td>
<td>Error en la contabilización.</td>
</tr>
</tbody>
</table>
<p>ECHO está desactivado.</p>
</div></template>


