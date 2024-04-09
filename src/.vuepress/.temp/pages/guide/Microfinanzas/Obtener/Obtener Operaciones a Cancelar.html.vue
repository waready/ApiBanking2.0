<template><div><h1 id="obtener-operaciones-a-cancelar" tabindex="-1"><a class="header-anchor" href="#obtener-operaciones-a-cancelar"><span>Obtener Operaciones a Cancelar</span></a></h1>
<p>Método para obtener las operaciones seleccionadas a cancelar para una solicitud de créditos.</p>
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
<td>BTMicrofinanzas.ObtenerOperacionesACancelar</td>
<td>RBTPG364</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio de Obtener Operaciones a Cancelar:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTMicrofinanzas.ObtenerOperacionesACancelar> 
         <bts:Btinreq> 
            <bts:Device>GP</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>dbfad05a474A8B5C60A82434</bts:Token> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:solicitudUId>11887</bts:solicitudUId> 
         <bts:clienteUId>862</bts:clienteUId> 
      </bts:BTMicrofinanzas.ObtenerOperacionesACancelar> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas?ObtenerOperacionesACancelar' \ 
	-H 'cache-control: no-cache' \ 
	-H 'content-type: application/json' \ 
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
	-d '{ 
	"Btinreq": { 
	  "Device": "GP", 
	  "Usuario": "MINSTALADOR", 
	  "Token": "16c1cc9b534A8B5C60A82434", 
	  "Canal": "BTDIGITAL", 
	  "Requerimiento": "1" 
	}, 
	"solicitudUId": "11887", 
	"clienteUId": "862" 
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
      <BTMicrofinanzas.ObtenerOperacionesACancelarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GP</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>dbfad05a474A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtOperaciones> 
            <sBTOperacionWF> 
               <fechaUltimoPago>2016-03-01</fechaUltimoPago> 
               <diasMora>1674</diasMora> 
               <saldo>-30340.61</saldo> 
               <fechaVencimiento>2016-01-02</fechaVencimiento> 
               <montoCancelacion>511820.42</montoCancelacion> 
               <operacionUId>1724</operacionUId> 
               <fechaValor>2020-03-13</fechaValor> 
            </sBTOperacionWF> 
            <sBTOperacionWF> 
               <fechaUltimoPago>2017-11-14</fechaUltimoPago> 
               <diasMora>0</diasMora> 
               <saldo>-15000.00</saldo> 
               <fechaVencimiento>2016-01-02</fechaVencimiento> 
               <montoCancelacion>0.00</montoCancelacion> 
               <operacionUId>1727</operacionUId> 
               <fechaValor>2020-03-13</fechaValor> 
            </sBTOperacionWF> 
         </sdtOperaciones> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>111406</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTMicrofinanzas.ObtenerOperacionesACancelar</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2021-10-18</Fecha> 
            <Canal>BTDIGITAL</Canal> 
            <Hora>09:09:54</Hora> 
         </Btoutreq> 
      </BTMicrofinanzas.ObtenerOperacionesACancelarResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
{ 
   "Btinreq": { 
      "Device": "GP", 
      "Usuario": "MINSTALADOR", 
      "Token": "16c1cc9b534A8B5C60A82434", 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "1" 
   }, 
   "sdtOperaciones": { 
      "sBTOperacionWF": [ 
      { 
         "fechaUltimoPago": "2016-03-01", 
         "diasMora": "1674", 
         "saldo": "-30340.61", 
         "fechaVencimiento": "2016-01-02", 
         "montoCancelacion": "511820.42", 
         "operacionUId": "1724", 
         "fechaValor": "2020-03-13" 
      }, 
      { 
         "fechaUltimoPago": "2017-11-14", 
         "diasMora": "0", 
         "saldo": "-15000.00", 
         "fechaVencimiento": "2016-01-02", 
         "montoCancelacion": "0.00", 
         "operacionUId": "1727", 
         "fechaValor": "2020-03-13" 
      } 
      ] 
   }, 
   "Btoutreq": { 
      "Numero": "111406", 
      "Estado": "OK", 
      "Servicio": "BTMicrofinanzas.ObtenerOperacionesACancelar", 
      "Requerimiento": "1", 
      "Fecha": "2021-10-18", 
      "Canal": "BTDIGITAL", 
      "Hora": "09:09:54" 
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
<td>solicitudUId</td>
<td>Long</td>
<td>Identificador de instancia Workflow.</td>
</tr>
<tr>
<td>clienteUId</td>
<td>Long</td>
<td>Identificador único del cliente.</td>
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
<td>sdtOperaciones</td>
<td>sBTOperacionWF</td>
<td>Listado de operaciones.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTOperacionWF son los siguientes:</p>
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
<td>operacionUId</td>
<td>Long</td>
<td>Identificador único de operación.</td>
</tr>
<tr>
<td>fechaValor</td>
<td>Date</td>
<td>Fecha valor de la operación.</td>
</tr>
<tr>
<td>fechaVencimiento</td>
<td>Date</td>
<td>Fecha de vencimiento de la operación.</td>
</tr>
<tr>
<td>fechaUltimoPago</td>
<td>Date</td>
<td>Fecha de último pago de la operación.</td>
</tr>
<tr>
<td>saldo</td>
<td>Double</td>
<td>Saldo de la operación.</td>
</tr>
<tr>
<td>diasMora</td>
<td>Int</td>
<td>Días de mora de la operación.</td>
</tr>
<tr>
<td>montoCancelacion</td>
<td>Double</td>
<td>Monto de cancelación de la operación.</td>
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
<td>No se recibió el identificador de solicitud.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recibió el identificador de cliente.</td>
</tr>
<tr>
<td>30003</td>
<td>No se recuperó la cuenta para el identificador de cliente: [Número de identificador].</td>
</tr>
<tr>
<td>40001</td>
<td>La solicitud ingresada no existe.</td>
</tr>
<tr>
<td>40002</td>
<td>El cliente ingresado no corresponde con la solicitud.</td>
</tr>
<tr>
<td>40003</td>
<td>No se encontraron operaciones para cancelar.</td>
</tr>
</tbody>
</table>
</div></template>


