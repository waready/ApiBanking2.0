<template><div><h1 id="obtener-valores-orden" tabindex="-1"><a class="header-anchor" href="#obtener-valores-orden"><span>Obtener Valores Orden</span></a></h1>
<p>Método para obtener los valores de los campos Cash recibidos como parametros, si la coleccion se ingresa vacia entonces se devuelven todos los valores.</p>
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
<td>BTCASHManagement.ObtenerValoresOrden</td>
<td>RBTPGC32</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Valores Orden:</p>
</blockquote>
<code-group> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement.ObtenerValoresOrden' \ 
  -H 'Content-Type: application/json' \ 
  -H 'Postman-Token: e985ea19-7527-41bc-bc60-fe431d9352b0,dbbd8038-2208-48fc-9395-1dfa11f1a0b1' \ 
  -H 'User-Agent: PostmanRuntime/7.16.3' \ 
  -H 'cache-control: no-cache' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	} 
	"ordenId":304, 
	"numeroLineaOrden":2, 
	"camposCash": { 
      "sBTValorCampoCASH": [ 
            { 
               "tag" : "COMISION", 
               "valor" : "" 
            } 
         ] 
	} 
}' 
``` 
</code-block> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCASHManagement.ObtenerValoresOrden> 
        <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>311020191114150000216393</bts:Token> 
            <bts:Device>001</bts:Device> 
         </bts:Btinreq> 
         <bts:ordenId>304</bts:ordenId> 
         <bts:numeroLineaOrden>2</bts:numeroLineaOrden> 
         <bts:camposCash> 
            <bts:sBTValorCampoCASH> 
               <bts:tag>COMISION</bts:tag> 
               <bts:valor></bts:valor> 
            </bts:sBTValorCampoCASH> 
            <bts:sBTValorCampoCASH> 
               <bts:tag>CSMD005IMP</bts:tag> 
               <bts:valor></bts:valor> 
            </bts:sBTValorCampoCASH> 
         </bts:camposCash> 
      </bts:BTCASHManagement.ObtenerValoresOrden> 
   </soapenv:Body> 
</soapenv:Envelope> 
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;/code-block> 
&lt;/code-group> 
> El POST retornará la siguiente estructura: 

&lt;code-group> 
&lt;code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
	"valoresCamposCash": { 
		"sBTValorCampoCASH": [ 
			{ 
				"tag" : "COMISION", 
				"valor" : "40.00" 
			}, 
			{ 
				"tag" : "CSMD005IMP", 
				"valor" : "1000.00" 
			} 
		] 
	}, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "790", 
        "Estado": "OK", 
        "Servicio": "BTCASHManagement.ObtenerValoresOrden", 
        "Fecha": "2017-12-17", 
        "Requerimiento": "", 
        "Hora": "16:48:12", 
        "Canal": "BTDIGITAL" 
    } 
}' 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></code-block> 
<code-block title="XML" active> 
```xml 
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   <SOAP-ENV:Body> 
      <BTCASHManagement.ObtenerValoresOrdenResponse> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>MINSTALADOR</Usuario> 
            <Token>311020191114150000216393</Token> 
            <Device>001</Device> 
         </Btinreq> 
         <valoresCamposCash> 
            <sBTValorCampoCASH> 
               <tag>COMISION</tag> 
               <valor>40.00</valor> 
            </sBTValorCampoCASH> 
            <sBTValorCampoCASH> 
               <tag>CSMD005IMP</tag> 
               <valor>1000.00</valor> 
            </sBTValorCampoCASH> 
         </valoresCamposCash> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTCASHManagement.ObtenerValoresOrden</Servicio> 
            <Fecha>2019-10-31</Fecha> 
            <Hora>16:31:42</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>676</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTCASHManagement.ObtenerValoresOrdenResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
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
<td>ordenId</td>
<td>Long</td>
<td>Identificador de orden CASH.</td>
</tr>
<tr>
<td>numeroLineaOrden</td>
<td>Int</td>
<td>Numero de línea de orden CASH.</td>
</tr>
<tr>
<td>camposCash</td>
<td>sBTValorCampoCASH</td>
<td>Lista de campos CASH a devolver valor.</td>
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
<td>valoresCamposCash</td>
<td>sBTValorCampoCASH</td>
<td>Lista de valores de campos CASH.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTValorCampoCASH tiene son los siguientes:</p>
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
<td>tag</td>
<td>String</td>
<td>Tag del campo CASH.</td>
</tr>
<tr>
<td>valor</td>
<td>String</td>
<td>Valor del campo CASH.</td>
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
<td>1030753</td>
<td>No se encontro la orden para el identificador recibido.</td>
</tr>
</tbody>
</table>
</div></template>


