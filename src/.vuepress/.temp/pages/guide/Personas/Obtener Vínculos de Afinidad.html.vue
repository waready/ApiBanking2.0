<template><div><h1 id="obtener-vinculos-de-afinidad" tabindex="-1"><a class="header-anchor" href="#obtener-vinculos-de-afinidad"><span>Obtener Vínculos de Afinidad</span></a></h1>
<p>Método para obtener un listado de los vínculos de afinidad registrados.</p>
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
<td>BTPersonas.ObtenerVinculosAfinidad</td>
<td>RBTPG395</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Vinculos de Afinidad:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ObtenerVinculosAfinidad> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento/> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
      </bts:BTPersonas.ObtenerVinculosAfinidad> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerVinculosAfinidad=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 0ccca369-0793-d62f-ebc0-3033cc750dad' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
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
      <BTPersonas.ObtenerVinculosAfinidadResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>268b6d23eb4A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtVinculos> 
            <sBTVinculo> 
               <identificador>40</identificador> 
               <descripcion>Cónyuge</descripcion> 
               <tipo>A</tipo> 
            </sBTVinculo> 
            <sBTVinculo> 
               <identificador>100</identificador> 
               <descripcion>Amigo</descripcion> 
               <tipo>A</tipo> 
            </sBTVinculo> 
         </sdtVinculos> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>828</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPersonas.ObtenerVinculosAfinidad</Servicio> 
            <Fecha>2017-12-17</Fecha> 
            <Requerimiento/> 
            <Hora>18:47:35</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPersonas.ObtenerVinculosAfinidadResponse> 
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
    "sdtVinculos": { 
    "sBTVinculo": [ 
      { 
        "identificador": "40", 
        "descripcion": "Cónyuge", 
        "tipo": "A" 
      }, 
      { 
        "identificador": "100", 
        "descripcion": "Amigo", 
        "tipo": "A" 
      } 
     ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "827", 
        "Estado": "OK", 
        "Servicio": "BTPersonas.ObtenerVinculosAfinidad", 
        "Fecha": "2017-12-17", 
        "Requerimiento": "", 
        "Hora": "18:47:21", 
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
<td>tipo</td>
<td>String</td>
<td>Tipo de vínculo [Hidden: Valor fijo 'A' para este método].</td>
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
<td>sdtVinculos</td>
<td>sBTVinculo</td>
<td>Listado de vínculos.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTVinculo son los siguientes:</p>
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
<td>Identificador de vínculo.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Descripción de vínculo.</td>
</tr>
<tr>
<td>tipo</td>
<td>String</td>
<td>Tipo de vínculo.</td>
</tr>
</tbody>
</table>
<h3 id="errores" tabindex="-1"><a class="header-anchor" href="#errores"><span>Errores</span></a></h3>
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
<td>40001</td>
<td>No existen Vínculos ingresados en el sistema.</td>
<td></td>
</tr>
</tbody>
</table>
</div></template>


