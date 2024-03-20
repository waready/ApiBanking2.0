<template><div><h1 id="crear-lista" tabindex="-1"><a class="header-anchor" href="#crear-lista"><span>Crear Lista</span></a></h1>
<p>Método para crear una lista de documentos a descontar.</p>
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
<td>BTDescuentoDocumentos.CrearLista</td>
<td>RBTPG161</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Crear Lista:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTDescuentoDocumentos.CrearLista> 
         <bts:Btinreq>             
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>BANTOTAL</bts:Usuario> 
            <bts:Token>1485239356EB8880B52090F2</bts:Token> 
            <bts:Device>ES</bts:Device> 
         </bts:Btinreq> 
         <bts:clienteUId>12</bts:clienteUId> 
         <bts:productoUId>17</bts:productoUId> 
         <bts:sdtListaDocumentos>                           
            <bts:identificacion>1522156151</bts:identificacion> 
            <bts:fechaEmision>2018-11-20</bts:fechaEmision> 
            <bts:fechaVto>2020-12-20</bts:fechaVto> 
            <bts:monto>1000</bts:monto> 
            <bts:personaUId>1</bts:personaUId> 
            <bts:ciudad>CIUDAD</bts:ciudad> 
            <bts:domicilio>DOMICILIO</bts:domicilio> 
            <bts:telefono>098756022</bts:telefono> 
            <bts:tasa>0</bts:tasa> 
         </bts:sdtListaDocumentos> 
         <bts:montoADescontar>1000</bts:montoADescontar> 
         <bts:tasa>10</bts:tasa> 
         <bts:porcentajeAforo>10</bts:porcentajeAforo> 
         <bts:fechaValor>2018-11-20</bts:fechaValor> 
      </bts:BTDescuentoDocumentos.CrearLista> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTDescuentoDocumentos?CrearLista=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: ca2f2e9d-b972-f575-227f-cd86920d3961' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
	"clienteUId":12, 
	"productoUId":17, 
	"montoADescontar":1000, 
	"tasa":10, 
	"porcentajeAforo":10, 
	"sdtListaDocumentos": { 
      "identificacion": "1522156151", 
      "fechaEmision": "2018-11-20", 
      "fechaVto": "2020-12-20", 
      "monto": "1000", 
      "personaUId": "1", 
      "ciudad": "CIUDAD", 
      "domicilio": "DOMICILIO", 
      "telefono": "098756022", 
      "tasa": "0" 
   }' 
 ``` 
> El POST retornará la siguiente estructura: 
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;/code-block> 
&lt;/code-group>xml 
&lt;SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   &lt;SOAP-ENV:Body> 
      &lt;BTDescuentoDocumentos.CrearListaResponse> 
         &lt;Btinreq> 
            &lt;Canal>BTDIGITAL&lt;/Canal> 
            &lt;Requerimiento>1&lt;/Requerimiento> 
            &lt;Usuario>BANTOTAL&lt;/Usuario> 
            &lt;Token>1485239356EB8880B52090F2&lt;/Token> 
            &lt;Device>ES&lt;/Device> 
         &lt;/Btinreq> 
         &lt;listaUId>75&lt;/listaUId> 
         &lt;Erroresnegocio>&lt;/Erroresnegocio> 
         &lt;Btoutreq> 
            &lt;Canal>BTDIGITAL&lt;/Canal> 
            &lt;Servicio>BTDescuentoDocumentos.CrearLista&lt;/Servicio> 
            &lt;Fecha>2018-12-14&lt;/Fecha> 
            &lt;Hora>15:26:20&lt;/Hora> 
            &lt;Requerimiento>1&lt;/Requerimiento> 
            &lt;Numero>1980&lt;/Numero> 
            &lt;Estado>OK&lt;/Estado> 
         &lt;/Btoutreq> 
      &lt;/BTDescuentoDocumentos.CrearListaResponse> 
   &lt;/SOAP-ENV:Body> 
&lt;/SOAP-ENV:Envelope> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><code-group> 
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
    "listaUId":75, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "727", 
        "Estado": "OK", 
        "Servicio": "BTDescuentoDocumentos.CrearLista", 
        "Fecha": "2017-11-24", 
        "Requerimiento": "", 
        "Hora": "15:59:42", 
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
<td>clienteUId</td>
<td>Long</td>
<td>Identificador único de cliente.</td>
</tr>
<tr>
<td>productoUId</td>
<td>Long</td>
<td>Identificador único de producto.</td>
</tr>
<tr>
<td>sdtListaDocumentos</td>
<td>sBTDescuentoDocumento</td>
<td>Lista de documentos.</td>
</tr>
<tr>
<td>montoADescontar</td>
<td>Double</td>
<td>Monto total a descontar.</td>
</tr>
<tr>
<td>tasa</td>
<td>Double</td>
<td>Tasa para aplicar.</td>
</tr>
<tr>
<td>porcentajeAforo</td>
<td>Double</td>
<td>Porcentaje de aforo.</td>
</tr>
<tr>
<td>fechaValor</td>
<td>Date</td>
<td>Fecha valor.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTDescuentoDocumento son los siguientes:</p>
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
<td>identificacion</td>
<td>String</td>
<td>Identificador del documento.</td>
</tr>
<tr>
<td>fechaEmision</td>
<td>Date</td>
<td>Fecha de emisión del documento.</td>
</tr>
<tr>
<td>fechaVto</td>
<td>Date</td>
<td>Fecha de vencimiento del documento.</td>
</tr>
<tr>
<td>monto</td>
<td>Double</td>
<td>Monto del documento.</td>
</tr>
<tr>
<td>personaUId</td>
<td>Long</td>
<td>Identificador único de persona titular del documento.</td>
</tr>
<tr>
<td>ciudad</td>
<td>String</td>
<td>Ciudad.</td>
</tr>
<tr>
<td>domicilio</td>
<td>String</td>
<td>Domicilio.</td>
</tr>
<tr>
<td>telefono</td>
<td>String</td>
<td>Teléfono.</td>
</tr>
<tr>
<td>tasa</td>
<td>Double</td>
<td>Tasa a aplicar al documento.</td>
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
<td>listaUId</td>
<td>Long</td>
<td>Identificador de lista.</td>
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
<td>No se recibió el identificador único de cuenta.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recibió el identificador de producto.</td>
</tr>
<tr>
<td>30003</td>
<td>No se recuperó la cuenta para el identificador.</td>
</tr>
</tbody>
</table>
</div></template>


