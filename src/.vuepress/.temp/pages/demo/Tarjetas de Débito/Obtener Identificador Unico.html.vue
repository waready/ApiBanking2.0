<template><div><h1 id="obtener-identificador-unico" tabindex="-1"><a class="header-anchor" href="#obtener-identificador-unico"><span>Obtener Identificador Unico</span></a></h1>
<p>Método para obtener el identificador único de una tarjeta de débito.</p>
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
<td>BTTarjetasDeDebito.ObtenerIdentificadorUnico</td>
<td>RBTPG800</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Identificador Unico:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTTarjetasDeDebito.ObtenerIdentificadorUnico> 
         <bts:Btinreq> 
            <bts:Token>f99a68ce154A8B5C60A82434</bts:Token> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>0</bts:Requerimiento> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Device>bms</bts:Device> 
         </bts:Btinreq> 
         <bts:nroTarjeta>4517720800000029</bts:nroTarjeta> 
      </bts:BTTarjetasDeDebito.ObtenerIdentificadorUnico> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://appjava2019:8106/supervielle/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito_v1?ObtenerIdentificadorUnico' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -d '{ 
    "Btinreq": { 
        "Device": "bms", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "0", 
        "Canal": "BTDIGITAL", 
        "Token": "f99a68ce154A8B5C60A82434" 
    }, 
    "nroTarjeta": "4517720800000029" 
}' 
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;/code-block> 
&lt;/code-group> 

> El POST retornará la siguiente estructura: 

&lt;code-group> 
&lt;code-block title="XML" active> 
```xml 
&lt;SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   &lt;SOAP-ENV:Body> 
      &lt;BTTarjetasDeDebito.ObtenerIdentificadorUnicoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         &lt;Btinreq> 
            &lt;Device>bms&lt;/Device> 
            &lt;Usuario>MINSTALADOR&lt;/Usuario> 
            &lt;Requerimiento>0&lt;/Requerimiento> 
            &lt;Canal>BTDIGITAL&lt;/Canal> 
            &lt;Token>f99a68ce154A8B5C60A82434&lt;/Token> 
         &lt;/Btinreq> 
         &lt;tarjetaUId>17&lt;/tarjetaUId> 
         &lt;Erroresnegocio>&lt;/Erroresnegocio> 
         &lt;Btoutreq> 
            &lt;Numero>1121&lt;/Numero> 
            &lt;Estado>OK&lt;/Estado> 
            &lt;Servicio>BTTarjetasDeDebito.ObtenerIdentificadorUnico&lt;/Servicio> 
            &lt;Requerimiento>0&lt;/Requerimiento> 
            &lt;Fecha>2020-11-06&lt;/Fecha> 
            &lt;Hora>12:19:59&lt;/Hora> 
            &lt;Canal>BTDIGITAL&lt;/Canal> 
         &lt;/Btoutreq> 
      &lt;/BTTarjetasDeDebito.ObtenerIdentificadorUnicoResponse> 
   &lt;/SOAP-ENV:Body> 
&lt;/SOAP-ENV:Envelope> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></code-block> 
<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
        "Device": "bms", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "0", 
        "Canal": "BTDIGITAL", 
        "Token": "f99a68ce154A8B5C60A82434" 
    }, 
    "tarjetaUId": 17, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 1122, 
        "Estado": "OK", 
        "Servicio": "BTTarjetasDeDebito.ObtenerIdentificadorUnico", 
        "Requerimiento": "0", 
        "Fecha": "2020-11-06", 
        "Hora": "12:23:58", 
        "Canal": "BTDIGITAL" 
    } 
} 
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
<td>nroTarjeta</td>
<td>String</td>
<td>Número de tarjeta.</td>
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
<td>tarjetaUId</td>
<td>Long</td>
<td>Identificador único de tarjeta.</td>
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
<td>No se recibió la tarjeta de débito.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recuperó el identificador para la tarjeta de débito: [Número de Tarjeta].</td>
</tr>
</tbody>
</table>
</div></template>


