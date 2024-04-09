<template><div><h1 id="obtener-correos-electronicos" tabindex="-1"><a class="header-anchor" href="#obtener-correos-electronicos"><span>Obtener Correos Electrónicos</span></a></h1>
<p>Método para obtener un listado de los correos electrónicos de una persona.</p>
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
<td>BTPersonas.ObtenerCorreosElectronicos</td>
<td>RBTPG022</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Correos Electronicos:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ObtenerCorreosElectronicos> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento/> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:personaUId>41</bts:personaUId> 
      </bts:BTPersonas.ObtenerCorreosElectronicos> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerCorreosElectronicos=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6cf24036-2d8c-85bd-13c6-f3c4d14533c4' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
   "personaUId": 41 
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
      <BTPersonas.ObtenerCorreosElectronicosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>268b6d23eb4A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtCorreoElectronicos> 
            <sBTCorreoElectronico> 
               <correlativo>1</correlativo> 
               <correoElectronico>CD@GMAIL.COM</correoElectronico> 
            </sBTCorreoElectronico> 
         </sdtCorreoElectronicos> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>816</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPersonas.ObtenerCorreosElectronicos</Servicio> 
            <Fecha>2017-12-17</Fecha> 
            <Requerimiento/> 
            <Hora>18:35:23</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPersonas.ObtenerCorreosElectronicosResponse> 
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
   "sdtCorreoElectronicos": { 
      "sBTCorreoElectronico": [ { 
         "correoElectronico": "CD@GMAIL.COM", 
         "correlativo": "1" 
      } ] 
   }, 
   "Erroresnegocio": { 
      "BTErrorNegocio": [] 
   }, 
   "Btoutreq": { 
      "Numero": "818", 
      "Estado": "OK", 
      "Servicio": "BTPersonas.ObtenerCorreosElectronicos", 
      "Fecha": "2017-12-17", 
      "Requerimiento": "", 
      "Hora": "18:36:33", 
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
<td>personaUId</td>
<td>Long</td>
<td>Identificador único de persona.</td>
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
<td>sdtCorreoElectronicos</td>
<td>sBTCorreoElectronico</td>
<td>Listado de correos electronicos.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTCorreoElectronico son los siguientes:</p>
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
<td>correlativo</td>
<td>Int</td>
<td>Correlativo de correo electronico.</td>
</tr>
<tr>
<td>correoElectronico</td>
<td>String</td>
<td>Correo electrónico.</td>
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
<td>No se recibió el identificador de persona.</td>
</tr>
</tbody>
</table>
</div></template>


