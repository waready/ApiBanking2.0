<template><div><h1 id="agregar-datos-pep" tabindex="-1"><a class="header-anchor" href="#agregar-datos-pep"><span>Agregar Datos PEP</span></a></h1>
<p>Método para agregar los datos de una persona expuesta políticamente.</p>
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
<td>BTPersonas.AgregarDatosPEP</td>
<td>RBTPG146</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Agregar Datos PEP:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.AgregarDatosPEP> 
		   <Btinreq> 
			  <Canal>BTDIGITAL</Canal> 
			  <Device>AV</Device> 
			  <Requerimiento /> 
			  <Token>1254960580EF744F35AE6963</Token> 
			  <Usuario>INSTALADOR</Usuario> 
		   </Btinreq> 
		   <personaUId>3</personaUId>  
		   <esPEP>S</esPEP> 
		   <sdtDatosPEP> 
			  <cargoRelacion>politic00</cargoRelacion> 
			  <entidad>abc125</entidad> 
			  <fechaInicio>2014-05-20</fechaInicio> 
			  <fechaSalida /> 
			  <observacion>no corresponde</observacion> 
		   </sdtDatosPEP> 
	   </bts:BTPersonas.AgregarDatosPEP> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?AgregarDatosPEP' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
   "Btinreq": { 
        "Device": "AV", 
        "Usuario": "INSTALADOR", 
        "Requerimiento": "", 
        "Canal": "BTDIGITAL", 
        "Token": "1254960580EF744F35AE6963" 
    }, 
   "personaUId": "3", 
   "esPEP": "S", 
   "sdtDatosPEP": { 
      "entidad": "abc125", 
      "cargoRelacion": "politic00", 
      "observacion": "no corresponde", 
      "fechaInicio": "2014-05-20", 
      "fechaSalida": "" 
   } 
} 
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
      <BTPersonas.AgregarDatosPEPResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
		  <Btinreq> 
			  <Canal>BTDIGITAL</Canal> 
			  <Device>AV</Device> 
			  <Requerimiento /> 
			  <Token>1254960580EF744F35AE6963</Token> 
			  <Usuario>INSTALADOR</Usuario> 
		   </Btinreq> 
		   <Erroresnegocio></Erroresnegocio> 
		   <Btoutreq> 
			  <Canal>BTDIGITAL</Canal> 
			  <Estado>OK</Estado> 
			  <Fecha>2020-07-30</Fecha> 
			  <Hora>13:13:12</Hora> 
			  <Numero>50199</Numero> 
			  <Requerimiento /> 
			  <Servicio>BTPersonas.AgregarDatosPEP</Servicio> 
		   </Btoutreq> 
      </BTPersonas.AgregarDatosPEPResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;/code-block> 

&lt;code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
        "Device": "AV", 
        "Usuario": "INSTALADOR", 
        "Requerimiento": "", 
        "Canal": "BTDIGITAL", 
        "Token": "1254960580EF744F35AE6963" 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTPersonas.AgregarDatosPEP", 
        "Fecha": "2020-07-30", 
        "Hora": "13:13:12", 
        "Requerimiento": "", 
        "Numero": 50199, 
        "Estado": "OK" 
    } 
} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></code-block> 
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
<tr>
<td>esPEP</td>
<td>String</td>
<td>Es persona políticamente expuesta? (S/N).</td>
</tr>
<tr>
<td>sdtDatosPEP</td>
<td>sBTDatosPEP</td>
<td>Datos de la PEP.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTDatosPEP son los siguientes:</p>
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
<td>entidad</td>
<td>String</td>
<td>Entidad.</td>
</tr>
<tr>
<td>cargoRelacion</td>
<td>String</td>
<td>Cargo que ocupa.</td>
</tr>
<tr>
<td>observacion</td>
<td>String</td>
<td>Observación.</td>
</tr>
<tr>
<td>fechaInicio</td>
<td>Date</td>
<td>Fecha de inicio.</td>
</tr>
<tr>
<td>fechaSalida</td>
<td>Date</td>
<td>Fecha de salida.</td>
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
<td>No se recibió el identificador de la persona.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recibió si la persona es políticamente expuesta.</td>
</tr>
<tr>
<td>30003</td>
<td>No se pudo determinar si la persona es políticamente expuesta. (¿Es PEP? S / N).</td>
</tr>
<tr>
<td>50001</td>
<td>Fecha Inicio cargo PEP es de ingreso obligatorio.</td>
</tr>
<tr>
<td>50002</td>
<td>Entidad es de ingreso obligatorio.</td>
</tr>
<tr>
<td>50003</td>
<td>Cargo y Relación es de ingreso obligatorio.</td>
</tr>
<tr>
<td>50004</td>
<td>Fecha Salida cargo PEP debe de ser mayor a Fecha Inicio cargo PEP.</td>
</tr>
<tr>
<td>50005</td>
<td>Fecha Inicio cargo PEP debe de ser anterior a la Fecha de Hoy.</td>
</tr>
</tbody>
</table>
</div></template>


