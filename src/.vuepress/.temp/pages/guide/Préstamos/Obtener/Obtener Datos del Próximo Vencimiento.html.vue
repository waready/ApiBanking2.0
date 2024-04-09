<template><div><h1 id="obtener-datos-del-proximo-vencimiento" tabindex="-1"><a class="header-anchor" href="#obtener-datos-del-proximo-vencimiento"><span>Obtener Datos del Próximo Vencimiento</span></a></h1>
<p>Método para retornar los datos de próximo vencimiento de cuota.</p>
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
<td>BTPrestamos.ObtenerDatosProxVencimiento</td>
<td>RBTPG526</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio de Obtener Datos Próximo Vencimiento:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.ObtenerDatosProxVencimiento> 
         <bts:Btinreq> 
            <bts:Requerimiento>0</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Device>GZ</bts:Device> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>DF1F942C6EC60E8B95BBEA69</bts:Token> 
         </bts:Btinreq> 
         <bts:operacionUId>9</bts:operacionUId> 
         <bts:fechaConsulta>2020-08-09</bts:fechaConsulta> 
      </bts:BTPrestamos.ObtenerDatosProxVencimiento> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerDatosProxVencimiento' \ 
	-H 'cache-control: no-cache' \ 
	-H 'content-type: application/json' \ 
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
	-d '{ 
	"Btinreq": { 
	  "Device": "1", 
	  "Usuario": "MINSTALADOR", 
	  "Token": "3JPL6DC33CD84655A5382434", 
	  "Canal": "BTDIGITAL", 
	  "Requerimiento": "1" 
	}, 
	"operacionUId": 9, 
    "fechaConsulta": "2020-08-09" 
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
      <BTPrestamos.ObtenerDatosProxVencimientoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GZ</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>0</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>DF1F942C6EC60E8B95BBEA69</Token> 
         </Btinreq> 
         <sdtProxVencimiento> 
            <otrosConceptos></otrosConceptos> 
            <fechaPrimerIncumplimiento>2020-05-09</fechaPrimerIncumplimiento> 
            <deudaVencida>41395.15</deudaVencida> 
            <cantCuoImpagas>12</cantCuoImpagas> 
            <monto>41395.15</monto> 
            <fechaProxVencimiento>2020-08-09</fechaProxVencimiento> 
            <cantCuoPagas>0</cantCuoPagas> 
            <fechaUltPago/> 
            <cantCuoImpVenc>4</cantCuoImpVenc> 
            <cuotaVigente>0.00</cuotaVigente> 
         </sdtProxVencimiento> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>16849</Numero> 
            <Servicio>BTPrestamos.ObtenerDatosProxVencimiento</Servicio> 
            <Estado>OK</Estado> 
            <Fecha>2023-10-26</Fecha> 
            <Requerimiento>0</Requerimiento> 
            <Hora>12:27:02</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPrestamos.ObtenerDatosProxVencimientoResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
{ 
   "Btinreq": { 
      "Device": "1", 
      "Usuario": "MINSTALADOR", 
      "Token": "16c1cFC33CD93505A5382434", 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "1" 
   }, 
    "sdtProxVencimiento": { 
        "otrosConceptos": "", 
        "fechaPrimerIncumplimiento": "2020-05-09", 
        "deudaVencida": 41395.15, 
        "cantCuoImpagas": 12, 
        "monto": 41395.15, 
        "fechaProxVencimiento": "2020-08-09", 
        "cantCuoPagas": 0, 
        "fechaUltPago": "", 
        "cantCuoImpVenc": 4, 
        "cuotaVigente": 0 
    }, 
    "Erroresnegocio": "", 
   "Btoutreq": { 
      "Numero": "111399", 
      "Estado": "OK", 
      "Servicio": "BTPrestamos.ObtenerDatosProxVencimiento", 
      "Requerimiento": "1", 
      "Fecha": "2023-05-10", 
      "Canal": "BTDIGITAL", 
      "Hora": "17:08:56" 
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
<td>Identificador único de prestamo.</td>
</tr>
<tr>
<td>fechaConsulta</td>
<td>Date</td>
<td>Fecha de consulta.</td>
</tr>
<tr>
<td>modoConsulta</td>
<td>String</td>
<td>[Hidden: Valor fijo '' para este método].</td>
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
<td>sdtProxVencimiento</td>
<td>sBTProximoVto</td>
<td>Datos del próximo vencimiento del prestamo.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTProximoVto son los siguientes:</p>
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
<td>fechaProxVencimiento</td>
<td>Date</td>
<td>Identificador de información adicional.</td>
</tr>
<tr>
<td>monto</td>
<td>Decimal</td>
<td>Valor de información adicional.</td>
</tr>
<tr>
<td>cantCuoPagas</td>
<td>Int</td>
<td>Cantidad de cuotas pagas.</td>
</tr>
<tr>
<td>cantCuoImpVenc</td>
<td>Int</td>
<td>Cantidad de cuotas impagas vencidas.</td>
</tr>
<tr>
<td>fechaUltPago</td>
<td>Date</td>
<td>Fecha de ultimo pago.</td>
</tr>
<tr>
<td>cuotaVigente</td>
<td>Decimal</td>
<td>Cuota vigente.</td>
</tr>
<tr>
<td>deudaVencida</td>
<td>Decimal</td>
<td>Deuda vencida.</td>
</tr>
<tr>
<td>fechaPrimerIncumplimiento</td>
<td>Date</td>
<td>Fecha de primer incumplimiento.</td>
</tr>
<tr>
<td>otrosConceptos</td>
<td>sBTConcepto</td>
<td>Datos de otros conceptos.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTConcepto son los siguientes:</p>
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
<td>concepto</td>
<td>String</td>
<td>Concepto.</td>
</tr>
<tr>
<td>valor</td>
<td>Double</td>
<td>Importe.</td>
</tr>
<tr>
<td>texto</td>
<td>String</td>
<td>Texto.</td>
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
<td>No se recibió el identificador de operación.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recuperó préstamo para el identificador: [Número de Identificador].</td>
</tr>
<tr>
<td>30006</td>
<td>La Fecha para Consultas es anterior a la de la Operación.</td>
</tr>
<tr>
<td>30007</td>
<td>La Operación no es válida para la Solicitud realizada.</td>
</tr>
<tr>
<td>30008</td>
<td>La Operación se encuentra cancelada.</td>
</tr>
</tbody>
</table>
</div></template>


