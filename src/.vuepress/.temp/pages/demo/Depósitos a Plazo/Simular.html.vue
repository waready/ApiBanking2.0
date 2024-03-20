<template><div><h1 id="simular" tabindex="-1"><a class="header-anchor" href="#simular"><span>Simular</span></a></h1>
<p>Método para simular el alta de un depósito a plazo.</p>
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
<td>BTDepositosAPlazo.Simular</td>
<td>RBTPG074</td>
<td>Global</td>
</tr>
</tbody>
</table>
<h3 id="configuracion-backend" tabindex="-1"><a class="header-anchor" href="#configuracion-backend"><span>Configuración Backend</span></a></h3>
<ol>
<li>
<p>Configuración de productos válidos:</p>
<ul>
<li>Se debe agregar en la guía especial 70100, para cada producto de la siguiente manera:</li>
</ul>
</li>
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
<td>Correlativo 1</td>
<td>Valor incremental</td>
</tr>
<tr>
<td>Correlativo 2</td>
<td>Módulo</td>
</tr>
<tr>
<td>Correlativo 3</td>
<td>Tipo de operación</td>
</tr>
<tr>
<td>Valor específico 1</td>
<td>Moneda</td>
</tr>
<tr>
<td>Valor específico 2</td>
<td>Papel</td>
</tr>
<tr>
<td>Importe específico 1</td>
<td>Tipo de día para el calculo del plazo (1 - Comercial, 2 - Calendario)</td>
</tr>
<tr>
<td>Importe específico 2</td>
<td>Tipo de año para el calculo de intereses (1 - Comercial, 2 - Calendario)</td>
</tr>
<tr>
<td>Importe específico 3</td>
<td>Ajuste de día al vencimiento (0 - No ajusta, 1 - Ajuste día anterior, 2 - Ajuste día posterior)</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Simular:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTDepositosAPlazo.Simular> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento/> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:clienteUId>161</bts:clienteUId> 
         <bts:monto>1000</bts:monto> 
         <bts:productoUId>103</bts:productoUId> 
         <bts:plazo>360</bts:plazo> 
      </bts:BTDepositosAPlazo.Simular> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDepositosAPlazo?Simular=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: e47433ff-563b-4c72-89ee-bc163180c9ae' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
   "clienteUId": 161, 
   "monto": 000, 
   "productoUId": 103, 
   "plazo": 360 
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
      <BTDepositosAPlazo.SimularResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>75e20bd1614A8B5C60A82434</Token> 
         </Btinreq> 
         <fechaAlta>2018-10-09</fechaAlta> 
         <fechaVencimiento>2019-10-09</fechaVencimiento> 
         <intereses>1001.78</intereses> 
         <tasa>0.18</tasa> 
         <simulacionUId>1</simulacionUId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>941</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTDepositosAPlazo.Simular</Servicio> 
            <Fecha>2017-12-21</Fecha> 
            <Requerimiento/> 
            <Hora>17:53:52</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTDepositosAPlazo.SimularResponse> 
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
   "fechaAlta": "2018-10-09", 
   "fechaVencimiento": "2019-10-09", 
   "intereses": "1001.78", 
   "tasa": "0.18", 
   "simulacionUId": "21", 
   "Erroresnegocio": { 
      "BTErrorNegocio": [] 
   }, 
   "Btoutreq": { 
      "Numero": "946", 
      "Estado": "OK", 
      "Servicio": "BTDepositosAPlazo.Simular", 
      "Fecha": "2017-12-21", 
      "Requerimiento": "", 
      "Hora": "18:10:30", 
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
<td>monto</td>
<td>Double</td>
<td>Monto del depósito.</td>
</tr>
<tr>
<td>productoUId</td>
<td>Long</td>
<td>Identificador único de producto.</td>
</tr>
<tr>
<td>plazo</td>
<td>Int</td>
<td>Plazo del DPF.</td>
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
<td>fechaAlta</td>
<td>Date</td>
<td>Fecha de alta.</td>
</tr>
<tr>
<td>fechaVencimiento</td>
<td>Date</td>
<td>Fecha en que vencería el DPF.</td>
</tr>
<tr>
<td>intereses</td>
<td>Double</td>
<td>Intereses.</td>
</tr>
<tr>
<td>tasa</td>
<td>Double</td>
<td>Tasa.</td>
</tr>
<tr>
<td>operacionUId</td>
<td>Long</td>
<td>Identificador único de operación de la simulación.</td>
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
<td>El monto es de ingreso obligatorio.</td>
</tr>
<tr>
<td>30002</td>
<td>El Plazo es de ingreso obligatorio.</td>
</tr>
<tr>
<td>30003</td>
<td>No se recibió el identificador de la Cuenta.</td>
</tr>
<tr>
<td>30004</td>
<td>No se recibió el identificador del Producto.</td>
</tr>
</tbody>
</table>
</div></template>


