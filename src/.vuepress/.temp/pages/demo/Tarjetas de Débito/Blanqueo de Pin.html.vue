<template><div><h1 id="blanqueo-de-pin" tabindex="-1"><a class="header-anchor" href="#blanqueo-de-pin"><span>Blanqueo de Pin</span></a></h1>
<p>Método para realizar blanqueo de PIN de tarjeta de debito.</p>
<h3 id="version-v2r3" tabindex="-1"><a class="header-anchor" href="#version-v2r3"><span>Versión V2R3</span></a></h3>
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
<td>BTTarjetasDeDebito.BlanquearPIN</td>
<td>RBTPG063</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Blanqueo de Pin (V2R3):</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTTarjetasDeDebito.BlanquearPIN> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento/> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>be9fc8708b4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:tarjetaUId>2000002072</bts:tarjetaUId> 
         <bts:clienteUId>161</bts:clienteUId> 
      </bts:BTTarjetasDeDebito.BlanquearPIN> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito?BlanquearPIN=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 19f16614-b11e-9eaf-4034-1d7994c6019f' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
   "tarjetaUId": 2000002072, 
   "clienteUId": 161 
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
      <BTTarjetasDeDebito.BlanquearPINResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>be9fc8708b4A8B5C60A82434</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>973</Numero> 
            <Estado>NEG_ERROR</Estado> 
            <Servicio>BTTarjetasDeDebito.BlanquearPIN</Servicio> 
            <Fecha>2017-12-22</Fecha> 
            <Requerimiento/> 
            <Hora>12:58:26</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTTarjetasDeDebito.BlanquearPINResponse> 
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
      "Numero": "974", 
      "Estado": "NEG_ERROR", 
      "Servicio": "BTTarjetasDeDebito.BlanquearPIN", 
      "Fecha": "2017-12-22", 
      "Requerimiento": "", 
      "Hora": "13:11:46", 
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
<td>tarjetaUId</td>
<td>Long</td>
<td>Identificador único de tarjeta.</td>
</tr>
<tr>
<td>clienteUId</td>
<td>Long</td>
<td>Identificador único de cliente.</td>
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
<td>No se recibió el identificador de la tarjeta.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recuperó la tarjeta de débito para el identificador: [Número de identificador].</td>
</tr>
<tr>
<td>30003</td>
<td>No existe registro con el identificador indicado.</td>
</tr>
<tr>
<td>30004</td>
<td>La tarjeta no pertenece al cliente.</td>
</tr>
<tr>
<td>40001</td>
<td>Error: El código de situación actual y/o el estado de la tarjeta son incorrectos.</td>
</tr>
<tr>
<td>40002</td>
<td>Error: Tarjeta inexistente.</td>
</tr>
<tr>
<td>40003</td>
<td>Error devuelto por la rutina PTDD0017.</td>
</tr>
</tbody>
</table>
<h3 id="version-v2r2" tabindex="-1"><a class="header-anchor" href="#version-v2r2"><span>Versión V2R2</span></a></h3>
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
<td>BTTarjetasDeDebito.BlanquearPIN</td>
<td>RBTPG156</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Blanqueo de Pin (V2R2):</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTTarjetasDeDebito.BlanquearPIN> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>BA</bts:Usuario> 
            <bts:Token>0211202010280000399672</bts:Token> 
            <bts:Device>MC</bts:Device> 
         </bts:Btinreq> 
         <bts:clienteUId>1</bts:clienteUId> 
         <bts:tarjetaUId>109</bts:tarjetaUId> 
      </bts:BTTarjetasDeDebito.BlanquearPIN> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito_v1?BlanquearPIN' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
		"Canal": "BTDIGITAL", 
		"Requerimiento": "1", 
		"Usuario": "BA", 
		"Token": "0211202010280000399672", 
		"Device": "MC" 
	 }, 
	 "clienteUId": "1", 
	 "tarjetaUId": "109" 
  } 
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;/code-block> 
&lt;/code-group> 

> El POST retornará la siguiente estructura: 

&lt;code-group> 
&lt;code-block title="XML" active> 
```xml 
&lt;SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   &lt;SOAP-ENV:Body> 
      &lt;BTTarjetasDeDebito.BlanquearPINResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         &lt;Btinreq> 
            &lt;Canal>BTDIGITAL&lt;/Canal> 
            &lt;Requerimiento>1&lt;/Requerimiento> 
            &lt;Usuario>BA&lt;/Usuario> 
            &lt;Token>0211202010280000399672&lt;/Token> 
            &lt;Device>MC&lt;/Device> 
         &lt;/Btinreq> 
         &lt;Erroresnegocio>&lt;/Erroresnegocio> 
         &lt;Btoutreq> 
            &lt;Canal>BTDIGITAL&lt;/Canal> 
            &lt;Servicio>BTTarjetasDeDebito.BlanquearPIN&lt;/Servicio> 
            &lt;Fecha>2020-11-02&lt;/Fecha> 
            &lt;Hora>12:06:37&lt;/Hora> 
            &lt;Requerimiento>1&lt;/Requerimiento> 
            &lt;Numero>10140&lt;/Numero> 
            &lt;Estado>OK&lt;/Estado> 
         &lt;/Btoutreq> 
      &lt;/BTTarjetasDeDebito.BlanquearPINResponse> 
   &lt;/SOAP-ENV:Body> 
&lt;/SOAP-ENV:Envelope> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></code-block> 
<code-block title="JSON"> 
```json 
{ 
   "Btinreq": { 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "1", 
      "Usuario": "BA", 
      "Token": "0211202010280000399672", 
      "Device": "MC" 
   }, 
   "Erroresnegocio": null, 
   "Btoutreq": { 
      "Canal": "BTDIGITAL", 
      "Servicio": "BTTarjetasDeDebito.BlanquearPIN", 
      "Fecha": "2020-11-02", 
      "Hora": "12:06:37", 
      "Requerimiento": "1", 
      "Numero": "10140", 
      "Estado": "OK" 
   } 
} 
``` 
</code-block> 
</code-group> 
<h3 id="datos-de-entrada-1" tabindex="-1"><a class="header-anchor" href="#datos-de-entrada-1"><span>Datos de entrada</span></a></h3>
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
<td>tarjetaUId</td>
<td>Long</td>
<td>Identificador único de tarjeta.</td>
</tr>
</tbody>
</table>
<h3 id="datos-de-salida-1" tabindex="-1"><a class="header-anchor" href="#datos-de-salida-1"><span>Datos de salida</span></a></h3>
<p>No aplica.</p>
<h3 id="errores-1" tabindex="-1"><a class="header-anchor" href="#errores-1"><span>Errores</span></a></h3>
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
<td>No se recibió identificador único de cliente.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recibió identificador único de tarjeta.</td>
</tr>
<tr>
<td>40004</td>
<td>No existe registro con el identificador indicado.</td>
</tr>
<tr>
<td>50003</td>
<td>No existe registro con la cuenta indicada.</td>
</tr>
<tr>
<td>60001</td>
<td>Tarjeta solo Habilitada Para Consulta.</td>
</tr>
<tr>
<td>60002</td>
<td>Opcion no valida para tarjetas Administrativas.</td>
</tr>
<tr>
<td>60003</td>
<td>Tarjeta solo Habilitada Para Consulta --&gt; BIN [BINTarjeta] Restringido.</td>
</tr>
<tr>
<td>60004</td>
<td>Novedad rechazada. No se pudo cobrar la comisión.</td>
</tr>
<tr>
<td>60009</td>
<td>El cliente ingresado no es habiente de la tarjeta.</td>
</tr>
</tbody>
</table>
</div></template>


