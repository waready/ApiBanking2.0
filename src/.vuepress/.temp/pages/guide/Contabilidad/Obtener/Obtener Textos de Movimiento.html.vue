<template><div><h1 id="obtener-textos-de-movimiento" tabindex="-1"><a class="header-anchor" href="#obtener-textos-de-movimiento"><span>Obtener Textos de Movimiento</span></a></h1>
<p>Método para obtener un listado de los textos asociados al movimiento.</p>
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
<td>BTContabilidad.ObtenerTextosMovimiento</td>
<td>RBTPG097</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Textos de Movimiento:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTContabilidad.ObtenerTextosMovimiento> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>BA</bts:Usuario> 
            <bts:Token>0211202010280000399672</bts:Token> 
            <bts:Device>MC</bts:Device> 
         </bts:Btinreq> 
         <bts:movimientoUId>1</bts:movimientoUId> 
      </bts:BTContabilidad.ObtenerTextosMovimiento> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTContabilidad_v1?ObtenerTextosMovimiento' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
	 "Btinreq": { 
		"Canal": "BTDIGITAL", 
		"Requerimiento": "1", 
		"Usuario": "BA", 
		"Token": "0211202010280000399672", 
		"Device": "MC" 
	 }, 
	 "movimientoUId": "1" 
  } 
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;/code-block> 
&lt;/code-group> 

> El POST retornará la siguiente estructura: 

&lt;code-group> 
&lt;code-block title="XML" active> 
```xml 
&lt;SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   &lt;SOAP-ENV:Body> 
      &lt;BTContabilidad.ObtenerTextosMovimientoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         &lt;Btinreq> 
            &lt;Canal>BTDIGITAL&lt;/Canal> 
            &lt;Requerimiento>1&lt;/Requerimiento> 
            &lt;Usuario>BA&lt;/Usuario> 
            &lt;Token>0211202010280000399672&lt;/Token> 
            &lt;Device>MC&lt;/Device> 
         &lt;/Btinreq> 
         &lt;sdtTextosMovimiento> 
            &lt;sBTTextoMovimiento> 
               &lt;codigo>2&lt;/codigo> 
               &lt;descripcion>MOTIVOS DEL EMBARGO&lt;/descripcion> 
               &lt;renglon>1&lt;/renglon> 
               &lt;texto>MOTIVOS DEL EMBARGO&lt;/texto> 
            &lt;/sBTTextoMovimiento> 
         &lt;/sdtTextosMovimiento> 
         &lt;Erroresnegocio>&lt;/Erroresnegocio> 
         &lt;Btoutreq> 
            &lt;Canal>BTDIGITAL&lt;/Canal> 
            &lt;Servicio>BTContabilidad.ObtenerTextosMovimiento&lt;/Servicio> 
            &lt;Fecha>2020-11-02&lt;/Fecha> 
            &lt;Hora>12:27:51&lt;/Hora> 
            &lt;Requerimiento>1&lt;/Requerimiento> 
            &lt;Numero>10143&lt;/Numero> 
            &lt;Estado>OK&lt;/Estado> 
         &lt;/Btoutreq> 
      &lt;/BTContabilidad.ObtenerTextosMovimientoResponse> 
   &lt;/SOAP-ENV:Body> 
&lt;/SOAP-ENV:Envelope> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></code-block> 
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
   "sdtTextosMovimiento": { 
      "sBTTextoMovimiento": { 
         "codigo": "2", 
         "descripcion": "MOTIVOS DEL EMBARGO", 
         "renglon": "1", 
         "texto": "MOTIVOS DEL EMBARGO" 
      } 
   }, 
   "Erroresnegocio": null, 
   "Btoutreq": { 
      "Canal": "BTDIGITAL", 
      "Servicio": "BTContabilidad.ObtenerTextosMovimiento", 
      "Fecha": "2020-11-02", 
      "Hora": "12:27:51", 
      "Requerimiento": "1", 
      "Numero": "10143", 
      "Estado": "OK" 
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
<td>movimientoUId</td>
<td>Long</td>
<td>Identificador único de movimiento.</td>
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
<td>sdtTextosMovimiento</td>
<td>sBTTextoMovimiento</td>
<td>Listado de textos del movimiento.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTTextoMovimiento son los siguientes:</p>
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
<td>codigo</td>
<td>Short</td>
<td>Código del texto.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Descripción del tipo de texto.</td>
</tr>
<tr>
<td>renglon</td>
<td>Short</td>
<td>Renglón.</td>
</tr>
<tr>
<td>texto</td>
<td>String</td>
<td>Texto asociado.</td>
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
<td>No se recibió identificador de movimiento.</td>
</tr>
<tr>
<td>40003</td>
<td>No existe registro para el identificador único.</td>
</tr>
</tbody>
</table>
</div></template>


