<template><div><h1 id="registrar-asiento" tabindex="-1"><a class="header-anchor" href="#registrar-asiento"><span>Registrar Asiento</span></a></h1>
<p>Método para registrar en el sistema un movimiento entre dos operaciones genéricas</p>
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
<td>BTContabilidad.RegistrarAsiento</td>
<td>RBTPG029</td>
<td>Global</td>
</tr>
</tbody>
</table>
<h3 id="configuracion-backend" tabindex="-1"><a class="header-anchor" href="#configuracion-backend"><span>Configuración Backend</span></a></h3>
<ol>
<li>
<p>Definir la transacción a contabilizar, teniendo en cuenta que la operaciónUId1 y el importe1 se almacena en el preformato 1, la operaciónUId2 y el importe2 se almacena en el preformato 2 y así sucesivamente</p>
</li>
<li>
<p>Configurar la transacción parametrizada mediante el mantenimiento de transacciones por servicio (HBTSBT1T)</p>
</li>
</ol>
<blockquote>
<p>Ejemplo de invocación al método Registrar Asiento:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTContabilidad.RegistrarAsiento> 
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
      </bts:BTContabilidad.RegistrarAsiento> 
   </soapenv:Body> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTContabilidad?RegistrarAsiento=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: fde8ae30-8752-c0fe-cf77-f8761a5ddcff' \ 
  -d '{ 
"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
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
	}    
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
      <BTContabilidad.RegistrarAsientoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
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
            <Servicio>BTContabilidad.RegistrarAsiento</Servicio> 
            <Requerimiento/> 
            <Fecha>2017-12-18</Fecha> 
            <Hora>17:07:19</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTContabilidad.RegistrarAsientoResponse> 
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
        "Servicio": "BTContabilidad.RegistrarAsiento", 
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
<td>30004</td>
<td>No se recuperó la operación origen para el Identificador:</td>
</tr>
<tr>
<td>30100</td>
<td>Error en la contabilización.</td>
</tr>
</tbody>
</table>
</div></template>


