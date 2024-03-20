<template><div><h1 id="obtener-tarjetas-adicionales" tabindex="-1"><a class="header-anchor" href="#obtener-tarjetas-adicionales"><span>Obtener Tarjetas Adicionales</span></a></h1>
<p>Método para obtener las tarjetas adicionales que están asociadas a una tarjeta de débito.</p>
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
<td>BTTarjetasDeDebito.ObtenerTarjetasAdicionales</td>
<td>RBTPG018</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Tarjetas Adicionales:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTTarjetasDeDebito.ObtenerTarjetasAdicionales> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento/> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:tarjetaUId>3</bts:tarjetaUId> 
      </bts:BTTarjetasDeDebito.ObtenerTarjetasAdicionales> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito?ObtenerTarjetasAdicionales=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 94079d62-3b2f-c624-4677-6e00bde48a50' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
   "tarjetaUId": 3 
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
      <BTTarjetasDeDebito.ObtenerTarjetasAdicionalesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>75e20bd1614A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtTarjetaDebitoAdicionales> 
            <adicionales></adicionales> 
            <tarjetaUId>3</tarjetaUId> 
         </sdtTarjetaDebitoAdicionales> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>938</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTTarjetasDeDebito.ObtenerTarjetasAdicionales</Servicio> 
            <Fecha>2017-12-21</Fecha> 
            <Requerimiento/> 
            <Hora>17:43:03</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTTarjetasDeDebito.ObtenerTarjetasAdicionalesResponse> 
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
   "sdtTarjetaDebitoAdicionales": { 
      "adicionales": { 
         "sBDTarjetaDebitoAdicional": [] 
      }, 
      "tarjetaUId": "3" 
   }, 
   "Erroresnegocio": { 
      "BTErrorNegocio": [] 
   }, 
   "Btoutreq": { 
      "Numero": "939", 
      "Estado": "OK", 
      "Servicio": "BTTarjetasDeDebito.ObtenerTarjetasAdicionales", 
      "Fecha": "2017-12-21", 
      "Requerimiento": "", 
      "Hora": "17:43:19", 
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
<td>sdtTarjetaDebitoAdicionales</td>
<td>sBDTarjetasDebitoAdicionales</td>
<td>Datos de la tarjeta de débito.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBDTarjetasDebitoAdicionales son los siguientes:</p>
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
<td>tarjetaUId</td>
<td>Long</td>
<td>Identificador único de tarjeta.</td>
</tr>
<tr>
<td>adicionales</td>
<td>sBDTarjetaDebitoAdicional</td>
<td>Listado de tarjetas de débito adicionales.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBDTarjetaDebitoAdicional son los siguientes:</p>
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
<td>tarjetaUId</td>
<td>Long</td>
<td>Identificador único de tarjeta.</td>
</tr>
<tr>
<td>numeroTarjeta</td>
<td>String</td>
<td>Número de tarjeta.</td>
</tr>
<tr>
<td>nombreTarjeta</td>
<td>String</td>
<td>Nombre de tarjeta.</td>
</tr>
<tr>
<td>fechaVencimiento</td>
<td>Date</td>
<td>Fecha de vencimiento.</td>
</tr>
<tr>
<td>estado</td>
<td>String</td>
<td>Descripción de estado.</td>
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
<td>No se recibió el identificador de tarjeta.</td>
</tr>
</tbody>
</table>
</div></template>


