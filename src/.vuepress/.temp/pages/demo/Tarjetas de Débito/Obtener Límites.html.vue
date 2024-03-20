<template><div><h1 id="obtener-limites" tabindex="-1"><a class="header-anchor" href="#obtener-limites"><span>Obtener Límites</span></a></h1>
<p>Método para obtener los límites de una tarjeta de débito.</p>
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
<td>BTTarjetasDeDebito.ObtenerLimites</td>
<td>RBTPG144</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Límites:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTTarjetasDeDebito.ObtenerLimites> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>BANTOTAL</bts:Usuario> 
            <bts:Token>1820366692F955E77534D3E0</bts:Token> 
            <bts:Device>AC</bts:Device> 
         </bts:Btinreq> 
         <bts:tarjetaUId>2000002050</bts:tarjetaUId> 
      </bts:BTTarjetasDeDebito.ObtenerLimites> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes_v1?ObtenerLimites' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
  -d '{ 
	"Btinreq": { 
	  "Canal": "BTDIGITAL", 
	  "Requerimiento": "1", 
	  "Usuario": "BANTOTAL", 
	  "Token": "1820366692F955E77534D3E0", 
	  "Device": "AC" 
	}, 
	"tarjetaUId": "2000002050" 
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
      <BTTarjetasDeDebito.ObtenerLimitesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>BANTOTAL</Usuario> 
            <Token>1820366692F955E77534D3E0</Token> 
            <Device>AC</Device> 
         </Btinreq> 
         <sdtLimites> 
            <SdtsBTLimiteTarjeta> 
               <identificador>1</identificador> 
               <moneda>0</moneda> 
               <limiteEMV>30000.00</limiteEMV> 
               <limiteBandaMagnetica>15000.00</limiteBandaMagnetica> 
               <limiteNoPresencial>10000.00</limiteNoPresencial> 
            </SdtsBTLimiteTarjeta> 
         </sdtLimites> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTTarjetasDeDebito.ObtenerLimites</Servicio> 
            <Fecha>2020-11-13</Fecha> 
            <Hora>15:48:52</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>7910</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTTarjetasDeDebito.ObtenerLimitesResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
	  "Canal": "BTDIGITAL", 
	  "Requerimiento": "1", 
	  "Usuario": "BANTOTAL", 
	  "Token": "1820366692F955E77534D3E0", 
	  "Device": "AC" 
	}, 
	"sdtLimites": { 
	  "SdtsBTLimiteTarjeta": { 
		"identificador": "1", 
		"moneda": "0", 
		"limiteEMV": "30000.00", 
		"limiteBandaMagnetica": "15000.00", 
		"limiteNoPresencial": "10000.00" 
	  } 
	}, 
	"Btoutreq": { 
	  "Canal": "BTDIGITAL", 
	  "Servicio": "BTTarjetasDeDebito.ObtenerLimites", 
	  "Fecha": "2020-11-13", 
	  "Hora": "15:48:52", 
	  "Requerimiento": "1", 
	  "Numero": "7910", 
	  "Estado": "OK" 
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
<td>Identificador de la tarjeta de débito.</td>
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
<td>sdtLimites</td>
<td>sBTLimiteTarjeta</td>
<td>Datos de los límites de la tarjeta.</td>
</tr>
</tbody>
</table>
<p>El tipo de dato estructurado sBTLimiteTarjeta tiene los siguientes campos:</p>
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
<td>identificador</td>
<td>Short</td>
<td>Código de límite.</td>
</tr>
<tr>
<td>moneda</td>
<td>Short</td>
<td>Código de moneda.</td>
</tr>
<tr>
<td>limiteEMV</td>
<td>Double</td>
<td>Monto límite EMV.</td>
</tr>
<tr>
<td>limiteBandaMagnetica</td>
<td>Double</td>
<td>Monto límite en banda magnética.</td>
</tr>
<tr>
<td>limiteNoPresencial</td>
<td>Double</td>
<td>Monto límite no presencial.</td>
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
<td>No se recibió identificador de tarjeta.</td>
</tr>
<tr>
<td>40001</td>
<td>No existe la tarjeta.</td>
</tr>
</tbody>
</table>
</div></template>


