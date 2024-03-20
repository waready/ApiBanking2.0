<template><div><h1 id="obtener-cbu-de-cuenta-vista" tabindex="-1"><a class="header-anchor" href="#obtener-cbu-de-cuenta-vista"><span>Obtener CBU de Cuenta Vista</span></a></h1>
<p>Método para obtener el CBU de una cuenta corriente o cuenta de ahorro.</p>
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
<td>BTCuentasVista.ObtenerCBUdeCuentaVista</td>
<td>RBTPAR02</td>
<td>Argentina</td>
</tr>
</tbody>
</table>
<h3 id="configuracion-backend-unicamente-para-version-v2r2" tabindex="-1"><a class="header-anchor" href="#configuracion-backend-unicamente-para-version-v2r2"><span>Configuración Backend (Unicamente para Versión V2R2)</span></a></h3>
<ol>
<li>Se pueden parametrizar los códigos de CBU a incluir ingresando en la guía de procesos 11910 los siguientes valores:</li>
</ol>
<table>
<thead>
<tr>
<th>Campo</th>
<th>Valor</th>
</tr>
</thead>
<tbody>
<tr>
<td>correlativo</td>
<td>Código de CBU a incluir.</td>
</tr>
<tr>
<td>valor específico</td>
<td>Código de CBU a incluir.</td>
</tr>
</tbody>
</table>
<ol start="2">
<li>Se puede parametrizar la opción general 11910. En caso de estar en 'S', se inhabilitará el uso de la tabla X999K2.</li>
</ol>
<blockquote>
<p>Ejemplo de invocación al método Obtener CBU de cuenta vista:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasVista.ObtenerCBUdeCuentaVista> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento/> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:operacionUId>161</bts:operacionUId> 
      </bts:BTCuentasVista.ObtenerCBUdeCuentaVista> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?ObtenerCBUdeCuentaVista=' \ 
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
    "operacionUId": 281 
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
      <BTCuentasVista.ObtenerCBUdeCuentaVistaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>75e20bd1614A8B5C60A82434</Token> 
         </Btinreq> 
         <CBU>3220001800000831740016</CBU> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>990</Numero> 
            <Estado>BTS_SEG_ERROR</Estado> 
            <Servicio>BTCuentasVista.ObtenerCBUdeCuentaVista</Servicio> 
            <Fecha>2017-12-26</Fecha> 
            <Requerimiento/> 
            <Hora>11:07:37</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCuentasVista.ObtenerCBUdeCuentaVistaResponse> 
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
    "CBU": "3220001800000831740016", 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "868", 
        "Estado": "OK", 
        "Servicio": "BTCuentasVista.ObtenerCBUdeCuentaVista", 
        "Requerimiento": "", 
        "Fecha": "2017-12-18", 
        "Hora": "17:15:28", 
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
<td>long</td>
<td>Identificador único de operación CC o CA.</td>
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
<td>CBU</td>
<td>String</td>
<td>Clave Bancaria Uniforme.</td>
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
<td>No se recibió el identificador único de operación..</td>
</tr>
<tr>
<td>30002</td>
<td>No se recuperó la operación para el identificador: [Número de identificador].</td>
</tr>
<tr>
<td>40001</td>
<td>No se encontró CBU para la operación&quot;.</td>
</tr>
</tbody>
</table>
</div></template>


