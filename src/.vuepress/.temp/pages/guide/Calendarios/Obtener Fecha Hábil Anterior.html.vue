<template><div><h1 id="obtener-fecha-habil-anterior" tabindex="-1"><a class="header-anchor" href="#obtener-fecha-habil-anterior"><span>Obtener Fecha Hábil Anterior</span></a></h1>
<p>Método que devuelve la fecha hábil anterior a la fecha ingresada. Si no se recibe identificador de calendario, devuelve para el calendario de la sucursal central.</p>
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
<td>BTCalendario.ObtenerFechaHabilAnterior</td>
<td>RBTPG331</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Fecha Hábil Anterior:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCalendarios.ObtenerFechaHabilAnterior> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>Instalador</bts:Usuario> 
            <bts:Token>172681201999865B3A2E76CF</bts:Token> 
            <bts:Device>1</bts:Device> 
         </bts:Btinreq> 
         <bts:calendarioId>1</bts:calendarioId> 
         <bts:fecha>2021-03-27</bts:fecha> 
      </bts:BTCalendarios.ObtenerFechaHabilAnterior> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
<p>curl -X POST \ 
'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCalendarios_v1?ObtenerFechaHabilAnterior' \ 
-H 'cache-control: no-cache' \ 
-H 'content-type: application/json' \ 
-H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
-d '{
&quot;Btinreq&quot;: {
&quot;Canal&quot;: &quot;BTDIGITAL&quot;,
&quot;Requerimiento&quot;: &quot;1&quot;,
&quot;Usuario&quot;: &quot;Instalador&quot;,
&quot;Token&quot;: &quot;172681201999865B3A2E76CF&quot;,
&quot;Device&quot;: &quot;1&quot;
},
&quot;calendarioId&quot;: &quot;1&quot;,
&quot;fecha&quot;: &quot;2021-03-27&quot;
},</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;/code-block> 
&lt;/code-group> 

> El POST retornará la siguiente estructura: 

&lt;code-group> 
&lt;code-block title="XML" active> 
```xml 
&lt;SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   &lt;SOAP-ENV:Body> 
      &lt;BTCalendarios.ObtenerFechaHabilAnteriorResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         &lt;Btinreq> 
            &lt;Canal>BTDIGITAL&lt;/Canal> 
            &lt;Requerimiento>1&lt;/Requerimiento> 
            &lt;Usuario>Instalador&lt;/Usuario> 
            &lt;Token>172681201999865B3A2E76CF&lt;/Token> 
            &lt;Device>1&lt;/Device> 
         &lt;/Btinreq> 
         &lt;fechaHabil>2021-03-26&lt;/fechaHabil> 
         &lt;Erroresnegocio>&lt;/Erroresnegocio> 
         &lt;Btoutreq> 
            &lt;Canal>BTDIGITAL&lt;/Canal> 
            &lt;Servicio>BTCalendarios.ObtenerFechaHabilAnterior&lt;/Servicio> 
            &lt;Fecha>2021-03-24&lt;/Fecha> 
            &lt;Hora>09:14:10&lt;/Hora> 
            &lt;Requerimiento>1&lt;/Requerimiento> 
            &lt;Numero>8094&lt;/Numero> 
            &lt;Estado>OK&lt;/Estado> 
         &lt;/Btoutreq> 
      &lt;/BTCalendarios.ObtenerFechaHabilAnteriorResponse> 
   &lt;/SOAP-ENV:Body> 
&lt;/SOAP-ENV:Envelope> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></code-block> 
<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "1", 
      "Usuario": "Instalador", 
      "Token": "172681201999865B3A2E76CF", 
      "Device": "1" 
    }, 
    "fechaHabil": "2021-03-26", 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
      "Canal": "BTDIGITAL", 
      "Servicio": "BTCalendarios.ObtenerFechaHabilAnterior", 
      "Fecha": "2021-03-24", 
      "Hora": "09:14:10", 
      "Requerimiento": "1", 
      "Numero": "8094", 
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
<td>calendarioId</td>
<td>Short</td>
<td>Identificador de calendario.</td>
</tr>
<tr>
<td>fecha</td>
<td>Date</td>
<td>Fecha de consulta.</td>
</tr>
<tr>
<td>sentido</td>
<td>String</td>
<td>[Hidden, valor fijo 'D' para este método].</td>
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
<td>fechaHabil</td>
<td>Date</td>
<td>Fecha hábil anterior.</td>
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
<td>Debe ingresar fecha a consultar.</td>
</tr>
</tbody>
</table>
</div></template>


