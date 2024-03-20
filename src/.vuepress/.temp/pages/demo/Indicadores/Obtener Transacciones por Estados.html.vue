<template><div><h1 id="obtener-transacciones-por-estados" tabindex="-1"><a class="header-anchor" href="#obtener-transacciones-por-estados"><span>Obtener Transacciones por Estados</span></a></h1>
<p>Método para obtener las transacciones por estados ingresadas en el sistema.</p>
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
<td>BTIndicadores.ObtenerTransaccionesEstados</td>
<td>RBTPG706</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio de Obtener Transacciones por Estados:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTIndicadores.ObtenerTransaccionesEstados> 
         <bts:Btinreq> 
            <bts:Device>1</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>959C2E0AEF210ABC0D8AA8F7</bts:Token> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Requerimiento>?</bts:Requerimiento> 
         </bts:Btinreq> 
      </bts:BTIndicadores.ObtenerTransaccionesEstados> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTIndicadores?ObtenerTransaccionesEstados' \ 
	-H 'cache-control: no-cache' \ 
	-H 'content-type: application/json' \ 
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
	-d '{ 
   "Btinreq": { 
      "Device": 1, 
      "Canal": "BTDIGITAL", 
      "Token": "959C2E0AEF210ABC0D8AA8F7", 
      "Usuario": "INSTALADOR", 
      "Requerimiento": "?" 
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
      <BTIndicadores.ObtenerTransaccionesEstadosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>?</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>959C2E0AEF210ABC0D8AA8F7</Token> 
         </Btinreq> 
         <sdtTransaccionesEstados> 
            <transaccionM>0</transaccionM> 
            <transaccionL>3</transaccionL> 
            <transaccionH>0</transaccionH> 
            <otros>54</otros> 
            <transaccionE>31</transaccionE> 
            <transaccionB>42</transaccionB> 
            <transaccionX>0</transaccionX> 
            <transaccionA>0</transaccionA> 
            <exito>17</exito> 
            <error>31</error> 
            <transaccionS>17</transaccionS> 
            <transaccionR>0</transaccionR> 
            <transaccionSP>0</transaccionSP> 
            <sucursalParametros>0</sucursalParametros> 
            <transaccionP>9</transaccionP> 
            <transaccionN>0</transaccionN> 
         </sdtTransaccionesEstados> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>11993</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTIndicadores.ObtenerTransaccionesEstados</Servicio> 
            <Requerimiento>?</Requerimiento> 
            <Fecha>2023-05-22</Fecha> 
            <Canal>BTDIGITAL</Canal> 
            <Hora>15:37:04</Hora> 
         </Btoutreq> 
      </BTIndicadores.ObtenerTransaccionesEstadosResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
{ 
   "Btinreq": { 
      "Device": 1, 
      "Usuario": "INSTALADOR", 
      "Requerimiento": "?", 
      "Canal": "BTDIGITAL", 
      "Token": "959C2E0AEF210ABC0D8AA8F7" 
   }, 
   "sdtTransaccionesEstados": { 
      "transaccionM": 0, 
      "transaccionL": 3, 
      "transaccionH": 0, 
      "otros": 54, 
      "transaccionE": 31, 
      "transaccionB": 42, 
      "transaccionX": 0, 
      "transaccionA": 0, 
      "exito": 17, 
      "error": 31, 
      "transaccionS": 17, 
      "transaccionR": 0, 
      "transaccionSP": 0, 
      "sucursalParametros": 0, 
      "transaccionP": 9, 
      "transaccionN": 0 
   }, 
   "Erroresnegocio": "", 
   "Btoutreq": { 
      "Numero": 11993, 
      "Estado": "OK", 
      "Servicio": "BTIndicadores.ObtenerTransaccionesEstados", 
      "Requerimiento": "?", 
      "Fecha": "2023-05-22", 
      "Canal": "BTDIGITAL", 
      "Hora": "15:37:04" 
   } 
}' 
``` 
</code-block> 
</code-group> 
<h3 id="datos-de-entrada" tabindex="-1"><a class="header-anchor" href="#datos-de-entrada"><span>Datos de entrada</span></a></h3>
<p>No aplica.</p>
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
<td>sdtTransaccionesEstados</td>
<td>sBTTransaccionesEstados</td>
<td>Listado de trasacciones.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTTransaccionesEstados son los siguientes:</p>
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
<td>exito</td>
<td>Int</td>
<td>Transacciones contabilizadas con exito.</td>
</tr>
<tr>
<td>error</td>
<td>Int</td>
<td>Transacciones contabilizadas con error.</td>
</tr>
<tr>
<td>otros</td>
<td>Int</td>
<td>Otros tipos de contabilización.</td>
</tr>
<tr>
<td>transaccionA</td>
<td>Int</td>
<td>Movimiento autorizado sin contabilizar.</td>
</tr>
<tr>
<td>transaccionB</td>
<td>Int</td>
<td>Movimiento de ingreso batch no contabilizado.</td>
</tr>
<tr>
<td>transaccionE</td>
<td>Int</td>
<td>Movimiento con errores.</td>
</tr>
<tr>
<td>transaccionH</td>
<td>Int</td>
<td>Movimiento contabilizado y pasado al histórico.</td>
</tr>
<tr>
<td>transaccionL</td>
<td>Int</td>
<td>Movimiento de ingreso libre no contabilizado.</td>
</tr>
<tr>
<td>transaccionM</td>
<td>Int</td>
<td>Movimiento con autorizaciones pendientes.</td>
</tr>
<tr>
<td>transaccionN</td>
<td>Int</td>
<td>Movimiento ingresado por el transaccional no contabilizado.</td>
</tr>
<tr>
<td>transaccionP</td>
<td>Int</td>
<td>Movimiento contabilizado, pasado al histórico, con archivos de saldos históricos actualizados.</td>
</tr>
<tr>
<td>transaccionR</td>
<td>Int</td>
<td>Movimiento con autorizaciones denegadas.</td>
</tr>
<tr>
<td>transaccionS</td>
<td>Int</td>
<td>Movimiento contabilizado sin pasar al histórico.</td>
</tr>
<tr>
<td>transaccionX</td>
<td>Int</td>
<td>Movimiento con autoriz. p/tipo cambio ingresado, para ser retomado.</td>
</tr>
<tr>
<td>transaccionSP</td>
<td>Int</td>
<td>Movimiento sin especificar.</td>
</tr>
<tr>
<td>sucursalParametros</td>
<td>Int</td>
<td>Parámetros de sucursal.</td>
</tr>
</tbody>
</table>
<h3 id="errores" tabindex="-1"><a class="header-anchor" href="#errores"><span>Errores</span></a></h3>
<p>No aplica.</p>
<p>ECHO está desactivado.</p>
</div></template>


