<template><div><h1 id="obtener-tarjeta-habiente" tabindex="-1"><a class="header-anchor" href="#obtener-tarjeta-habiente"><span>Obtener Tarjeta Habiente</span></a></h1>
<p>Método para obtener el habiente de una tarjeta.</p>
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
<td>BTTarjetasDeDebito.ObtenerTarjetaHabiente</td>
<td>RBTPG357</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Tarjeta Habiente:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTTarjetasDeDebito.ObtenerTarjetaHabiente> 
         <bts:Btinreq> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Device>GP</bts:Device> 
            <bts:Token>65386256C895CD01D7DC796E</bts:Token> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:tarjetaUId>2000001942</bts:tarjetaUId> 
      </bts:BTTarjetasDeDebito.ObtenerTarjetaHabiente> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \   
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito?ObtenerTarjetaHabiente' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
	"tarjetaUId": "2000001942", 
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
      <BTTarjetasDeDebito.ObtenerTarjetaHabienteResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GP</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>65386256C895CD01D7DC796E</Token> 
         </Btinreq> 
         <sdtTarjetaHabiente> 
            <numeroDocumento>46600107</numeroDocumento> 
            <tipoDocumento>Cédula Identidad</tipoDocumento> 
            <personaUid>122</personaUid> 
            <nombre>PEREZ SOSA JUAN</nombre> 
            <paisDocumento>URUGUAY</paisDocumento> 
         </sdtTarjetaHabiente> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>12044</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTTarjetasDeDebito.ObtenerTarjetaHabiente</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2023-05-23</Fecha> 
            <Canal>BTDIGITAL</Canal> 
            <Hora>15:19:22</Hora> 
         </Btoutreq> 
      </BTTarjetasDeDebito.ObtenerTarjetaHabienteResponse> 
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
    "sdtTarjetaHabiente": { 
        "numeroDocumento": "46600107", 
        "tipoDocumento": "Cédula Identidad", 
        "personaUId": "122", 
        "nombre": "PEREZ SOSA JUAN", 
        "paisDocumento": "URUGUAY" 
    }, 
    "Btoutreq": { 
        "Numero": 823, 
        "Estado": "OK", 
        "Servicio": "BTTarjetasDeDebito.ObtenerTarjetaHabiente", 
        "Requerimiento": "1", 
        "Fecha": "2018-11-12", 
        "Hora": "17:47:27", 
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
<td>Identificador único de tarjeta de débito.</td>
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
<td>sdtTarjetaHabiente</td>
<td>sBTTitularTarjeta</td>
<td>Datos del titular de la tarjeta.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTTitularTarjeta son los siguientes:</p>
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
<td>personaUId</td>
<td>Long</td>
<td>Identificador único de la persona.</td>
</tr>
<tr>
<td>paisDocumento</td>
<td>String</td>
<td>País del documento.</td>
</tr>
<tr>
<td>tipoDocumento</td>
<td>String</td>
<td>Tipo de documento.</td>
</tr>
<tr>
<td>numeroDocumento</td>
<td>String</td>
<td>Número de documento.</td>
</tr>
<tr>
<td>nombre</td>
<td>String</td>
<td>Nombre de la persona.</td>
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
<td>No se recibió el Identificador de tarjeta.</td>
</tr>
<tr>
<td>40001</td>
<td>No existe registro para el número de tarjeta.</td>
</tr>
<tr>
<td>40002</td>
<td>No existe registro de pais.</td>
</tr>
<tr>
<td>40003</td>
<td>No existe registro para el tipo de documento de la persona.</td>
</tr>
<tr>
<td>40004</td>
<td>No existe registro para el titular de la tarjeta.</td>
</tr>
</tbody>
</table>
</div></template>


