<template><div><h1 id="obtener-tipos-de-actividad" tabindex="-1"><a class="header-anchor" href="#obtener-tipos-de-actividad"><span>Obtener Tipos de Actividad</span></a></h1>
<p>Método para obtener tipos de actividad.</p>
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
<td>BTConfiguracionBantotal.ObtenerTiposDeActividad</td>
<td>RBTPG477</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio de Obtener Tipos de Actividad:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTConfiguracionBantotal.ObtenerTiposDeActividad> 
         <bts:Btinreq> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>1EF0C356A692E3706CFA0201</bts:Token> 
            <bts:Device>1</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
      </bts:BTConfiguracionBantotal.ObtenerTiposDeActividad> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal?ObtenerTiposDeActividad' \ 
	-H 'cache-control: no-cache' \ 
	-H 'content-type: application/json' \ 
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
	-d '{ 
	"Btinreq": { 
	  "Device": "1", 
	  "Usuario": "MINSTALADOR", 
	  "Token": "fa2c02c95a4A8B5C60A82434", 
	  "Canal": "BTDIGITAL", 
	  "Requerimiento": "1" 
	}, 
<p>}'</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;/code-block> 
&lt;/code-group> 

> El POST retornará la siguiente estructura: 

&lt;code-group> 
&lt;code-block title="XML" active> 
```xml 
&lt;SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   &lt;SOAP-ENV:Body> 
      &lt;BTConfiguracionBantotal.ObtenerTiposDeActividadResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         &lt;Btinreq> 
            &lt;Device>1&lt;/Device> 
            &lt;Usuario>MINSTALADOR&lt;/Usuario> 
            &lt;Requerimiento>1&lt;/Requerimiento> 
            &lt;Canal>BTDIGITAL&lt;/Canal> 
            &lt;Token>1EF0C356A692E3706CFA0201&lt;/Token> 
         &lt;/Btinreq> 
         &lt;sdtTipoActividad> 
            &lt;SdtsBTActividad> 
               &lt;descripcion>Actividad Principal&lt;/descripcion> 
               &lt;identificador>1&lt;/identificador> 
               &lt;identificadorEntidadReguladora>0&lt;/identificadorEntidadReguladora> 
            &lt;/SdtsBTActividad> 
            &lt;SdtsBTActividad> 
               &lt;descripcion>Prueba&lt;/descripcion> 
               &lt;identificador>2&lt;/identificador> 
               &lt;identificadorEntidadReguladora>0&lt;/identificadorEntidadReguladora> 
            &lt;/SdtsBTActividad> 
         &lt;/sdtTipoActividad> 
         &lt;Erroresnegocio>&lt;/Erroresnegocio> 
         &lt;Btoutreq> 
            &lt;Numero>10261&lt;/Numero> 
            &lt;Servicio>BTConfiguracionBantotal.ObtenerTiposDeActividad&lt;/Servicio> 
            &lt;Estado>OK&lt;/Estado> 
            &lt;Requerimiento>1&lt;/Requerimiento> 
            &lt;Fecha>2023-05-04&lt;/Fecha> 
            &lt;Hora>17:05:07&lt;/Hora> 
            &lt;Canal>BTDIGITAL&lt;/Canal> 
         &lt;/Btoutreq> 
      &lt;/BTConfiguracionBantotal.ObtenerTiposDeActividadResponse> 
   &lt;/SOAP-ENV:Body> 
&lt;/SOAP-ENV:Envelope> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></code-block> 
<code-block title="JSON"> 
```json 
{ 
   "Btinreq": { 
      "Device": "1", 
      "Usuario": "MINSTALADOR", 
      "Token": "16c1cc9b534A8B5C60A82434", 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "1" 
   }, 
     "sdtActividades": { 
      "sBTActividad": [             
         { 
               "descripcion": "Actividad Principal", 
               "identificador": "1", 
               "identificadorEntidadReguladora": "0" 
         }, 
         { 
               "descripcion": "Prueba", 
               "identificador": "2", 
               "identificadorEntidadReguladora": "0" 
         }, 
      ] 
   }, 
   "Erroresnegocio": { 
      "BTErrorNegocio": [] 
   }, 
   "Btoutreq": { 
      "Numero": "111598", 
      "Estado": "OK", 
      "Servicio": "BTConfiguracionBantotal.ObtenerActividadesPorTipo", 
      "Requerimiento": "1", 
      "Fecha": "2023-05-04", 
      "Canal": "BTDIGITAL", 
      "Hora": "16:20:35" 
   } 
}' 
``` 
</code-block> 
</code-group> 
<h3 id="datos-de-entrada" tabindex="-1"><a class="header-anchor" href="#datos-de-entrada"><span>Datos de entrada</span></a></h3>
<p>No aplica.</p>
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
<td>sdtActividades</td>
<td>sBTActividad</td>
<td>Listado de actividades.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTActividad son los siguientes:</p>
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
<td>Int</td>
<td>Identificador de actividad.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Descripción de actividad.</td>
</tr>
<tr>
<td>identificadorEntidadReguladora</td>
<td>Long</td>
<td>Identificador de entidad reguladora.</td>
</tr>
</tbody>
</table>
<h3 id="errores" tabindex="-1"><a class="header-anchor" href="#errores"><span>Errores</span></a></h3>
<p>No aplica.</p>
</div></template>


