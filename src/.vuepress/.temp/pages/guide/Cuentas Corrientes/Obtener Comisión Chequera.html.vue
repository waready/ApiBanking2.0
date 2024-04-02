<template><div><h1 id="obtener-comision-chequera" tabindex="-1"><a class="header-anchor" href="#obtener-comision-chequera"><span>Obtener Comisión Chequera</span></a></h1>
<p>Método para devolver el importe de comisión que se cobrará, dada una cuenta y un tipo de chequera.</p>
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
<td>BTCuentasCorrientes.ObtenerComisionChequera</td>
<td>RBTPG247</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio de Obtener Comisión Chequera:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasCorrientes.ObtenerComisionChequera> 
         <bts:Btinreq> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Device>GP</bts:Device> 
            <bts:Token>64b082f7a84A8B5C60A82434</bts:Token> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
         </bts:Btinreq> 
         <bts:operacionUId>601</bts:operacionUId> 
         <bts:tipoChequeraId>2</bts:tipoChequeraId> 
         <bts:cantidadChequeras>1</bts:cantidadChequeras> 
      </bts:BTCuentasCorrientes.ObtenerComisionChequera> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes_v1?ObtenerComisionChequera \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
      "operacionUId": "601", 
      "tipoChequeraId": "2", 
      "cantidadChequeras": "1" 
    } 
  } 
} 
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;/code-block> 
&lt;/code-group> 

> El POST retornará la siguiente estructura: 

&lt;code-group> 
&lt;code-block title="XML" active> 
```xml 
&lt;SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   &lt;SOAP-ENV:Body> 
      &lt;BTCuentasCorrientes.ObtenerComisionChequeraResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         &lt;Btinreq> 
            &lt;Device>GP&lt;/Device> 
            &lt;Usuario>MINSTALADOR&lt;/Usuario> 
            &lt;Requerimiento>1&lt;/Requerimiento> 
            &lt;Canal>BTDIGITAL&lt;/Canal> 
            &lt;Token>64b082f7a84A8B5C60A82434&lt;/Token> 
         &lt;/Btinreq> 
         &lt;moneda>$&lt;/moneda> 
         &lt;importeComision>5000.0&lt;/importeComision> 
         &lt;Erroresnegocio>&lt;/Erroresnegocio> 
         &lt;Btoutreq> 
            &lt;Numero>420&lt;/Numero> 
            &lt;Estado>OK&lt;/Estado> 
            &lt;Servicio>BTCuentasCorrientes.ObtenerComisionChequera&lt;/Servicio> 
            &lt;Fecha>2019-08-09&lt;/Fecha> 
            &lt;Requerimiento>1&lt;/Requerimiento> 
            &lt;Hora>10:19:03&lt;/Hora> 
            &lt;Canal>BTDIGITAL&lt;/Canal> 
         &lt;/Btoutreq> 
      &lt;/BTCuentasCorrientes.ObtenerComisionChequeraResponse> 
   &lt;/SOAP-ENV:Body> 
&lt;/SOAP-ENV:Envelope> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></code-block> 
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
      "moneda": "$", 
      "importeComision": "5000.0", 
      "Btoutreq": { 
        "Numero": "420", 
        "Estado": "OK", 
        "Servicio": "BTCuentasCorrientes.ObtenerComisionChequera", 
        "Fecha": "2019-08-09", 
        "Requerimiento": "1", 
        "Hora": "10:19:03", 
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
<td>operacionUId</td>
<td>Long</td>
<td>Identificador único de operación.</td>
</tr>
<tr>
<td>tipoChequeraId</td>
<td>Short</td>
<td>Identificador de tipo de chequera.</td>
</tr>
<tr>
<td>cantidadChequeras</td>
<td>Int</td>
<td>Cantidad de chequeras.</td>
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
<td>moneda</td>
<td>String</td>
<td>Moneda de la cuenta.</td>
</tr>
<tr>
<td>comision</td>
<td>Double</td>
<td>Importe de comisión a cobrar.</td>
</tr>
<tr>
<td>impuestos</td>
<td>Double</td>
<td>Importe de impuestos a cobrar.</td>
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
<td>No se recibió identificador de operación.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recibió un tipo de chequera.</td>
</tr>
<tr>
<td>40001</td>
<td>El tipo de chequera indicado no cobra comisión.</td>
</tr>
<tr>
<td>40002</td>
<td>El código de comisión asignado al tipo de chequera no existe.</td>
</tr>
<tr>
<td>40003</td>
<td>El tipo de chequera indicado no existe.</td>
</tr>
</tbody>
</table>
</div></template>


