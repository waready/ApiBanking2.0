<template><div><h1 id="obtener-personas-vinculadas" tabindex="-1"><a class="header-anchor" href="#obtener-personas-vinculadas"><span>Obtener Personas Vinculadas</span></a></h1>
<p>Método para obtener una lista de los vínculos de la persona.</p>
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
<td>BTPersonas.ObtenerPersonasVinculadas</td>
<td>RBTPG375</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio de Obtener Personas Vinculadas:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ObtenerPersonasVinculadas> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>120109606CD285A89A23FBEE</bts:Token> 
            <bts:Device>MC</bts:Device> 
         </bts:Btinreq> 
         <bts:personaUId>1</bts:personaUId> 
      </bts:BTPersonas.ObtenerPersonasVinculadas> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas?ObtenerPersonasVinculadas' \ 
	-H 'cache-control: no-cache' \ 
	-H 'content-type: application/json' \ 
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
	-d '{ 
	"Btinreq": { 
	  "Device": "GP", 
	  "Usuario": "MINSTALADOR", 
	  "Token": "16c1cc9b534A8B5C60A82434", 
	  "Canal": "BTDIGITAL", 
	  "Requerimiento": "1" 
	}, 
	"personaUId": "1", 
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
      <BTPersonas.ObtenerPersonasVinculadasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>120109606CD285A89A23FBEE</Token> 
            <Device>MC</Device> 
         </Btinreq> 
         <sdtPersonasVinculadas> 
            <sBTPersonaVinculada> 
               <personaUId>3</personaUId> 
               <nombre>PEREZ MANRIQUE JORGE</nombre> 
               <vinculo> 
                  <identificador>41</identificador> 
                  <descripcion>Padre</descripcion> 
                  <tipo>C</tipo> 
               </vinculo> 
            </sBTPersonaVinculada> 
            <sBTPersonaVinculada> 
               <personaUId>2</personaUId> 
               <nombre>ABARCA CARLOS</nombre> 
               <vinculo> 
                  <identificador>43</identificador> 
                  <descripcion>Hijo</descripcion> 
                  <tipo>C</tipo> 
               </vinculo> 
            </sBTPersonaVinculada> 
         </sdtPersonasVinculadas> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTPersonas.ObtenerPersonasVinculadas</Servicio> 
            <Fecha>2021-11-30</Fecha> 
            <Hora>11:04:47</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>8767</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTPersonas.ObtenerPersonasVinculadasResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;/code-block> 

&lt;code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
	    "Device": "GP", 
	    "Usuario": "MINSTALADOR", 
	    "Token": "16c1cc9b534A8B5C60A82434", 
	    "Canal": "BTDIGITAL", 
	    "Requerimiento": "1" 
    }, 
    "sdtPersonasVinculadas": { 
      "sBTPersonaVinculada": [ 
      { 
         "personaUId": "3", 
         "nombre": "PEREZ MANRIQUE JORGE", 
         "vinculo": { 
            "identificador": "41", 
            "descripcion": "Padre", 
            "tipo": "C" 
         } 
      }, 
      { 
         "personaUId": "2", 
         "nombre": "ABARCA CARLOS", 
         "vinculo": { 
            "identificador": "43", 
            "descripcion": "Hijo", 
            "tipo": "C" 
         } 
      } 
      ] 
    },   
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTPersonas.ObtenerPersonasVinculadasResponse", 
        "Fecha": "2021-10-28", 
        "Hora": "15:39:53", 
        "Requerimiento": "1", 
        "Numero": "11003", 
        "Estado": "OK" 
    } 
}' 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></code-block> 
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
<td>sdtPersonasVinculadas</td>
<td>sBTPersonaVinculada</td>
<td>Datos de la persona vinculada.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTPersonaVinculada son los siguientes:</p>
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
<td>Identificador único de persona.</td>
</tr>
<tr>
<td>nombre</td>
<td>String</td>
<td>Nombre de la persona.</td>
</tr>
<tr>
<td>vinculo</td>
<td>sBTVinculo</td>
<td>Datos del vìnculo.</td>
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
<th>Código</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>30001</td>
<td>No se recibió el identificador de persona.</td>
</tr>
<tr>
<td>31003</td>
<td>No existe registro para el identificador único.</td>
</tr>
</tbody>
</table>
</div></template>


