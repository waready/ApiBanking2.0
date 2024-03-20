<template><div><h1 id="ingresar-orden-pago" tabindex="-1"><a class="header-anchor" href="#ingresar-orden-pago"><span>Ingresar Orden Pago</span></a></h1>
<p>Método para ingresar una orden de pago.</p>
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
<td>BTCASHManagement.IngresarOrdenPago</td>
<td>RBTPGC31</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio Ingresar Orden Pago:</p>
</blockquote>
<code-group> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_CASHManagement_v1?IngresarOrdenPago' \ 
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
	}, 
	"contrato":3, 
	"servicio":10, 
	"operacionUId_debito":1, 
	"moneda":101, 
	"importe":1000, 
	"fecha" : "2019-11-06", 
	"listaCampoValor": { 
		"sBTValorCampoCASH": [ 
			{ 
				"tag" : "ORDENANTE_NOM", 
				"valor" : "Francisco Otheguy" 
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
      <bts:BTCASHManagement.IngresarOrdenPago> 
        <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>311020191114150000216393</bts:Token> 
            <bts:Device>001</bts:Device> 
         </bts:Btinreq> 
         <bts:contrato>3</bts:contrato> 
         <bts:servicio>10</bts:servicio> 
         <bts:operacionUId_debito>1</bts:operacionUId_debito> 
         <bts:moneda>101</bts:moneda> 
         <bts:importe>1000</bts:importe> 
         <bts:fecha>2019-11-06</bts:fecha> 
         <bts:listaCampoValor> 
            <bts:sBTValorCampoCASH> 
               <bts:tag>ORDENANTE_NOM</bts:tag> 
               <bts:valor>Francisco Otheguy</bts:valor> 
            </bts:sBTValorCampoCASH> 
         </bts:listaCampoValor> 
      </bts:BTCASHManagement.IngresarOrdenPago> 
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
	"ordenId":304, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "4438", 
        "Estado": "OK", 
        "Servicio": "BTCASHManagement.IngresarOrdenPago", 
        "Fecha": "2018-12-14", 
        "Requerimiento": "", 
        "Hora": "17:00:28", 
        "Canal": "BTDIGITAL" 
    } 
}' 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></code-block> 
<code-block title="XML" active> 
```xml 
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   <SOAP-ENV:Body> 
      <BTCASHManagement.IngresarOrdenPagoResponse> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>MINSTALADOR</Usuario> 
            <Token>311020191114150000216393</Token> 
            <Device>001</Device> 
         </Btinreq> 
         <ordenId>304</ordenId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTCASHManagement.IngresarOrdenPago</Servicio> 
            <Fecha>2019-10-31</Fecha> 
            <Hora>16:15:43</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>672</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTCASHManagement.IngresarOrdenPagoResponse> 
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
<td>contrato</td>
<td>Int</td>
<td>Identificador del contrato CASH del cliente.</td>
</tr>
<tr>
<td>servicio</td>
<td>Short</td>
<td>Servicio de pago CASH.</td>
</tr>
<tr>
<td>operacionUId_debito</td>
<td>Long</td>
<td>Operación de débito.</td>
</tr>
<tr>
<td>moneda</td>
<td>Short</td>
<td>Identificador de moneda.</td>
</tr>
<tr>
<td>importe</td>
<td>Double</td>
<td>Importe total.</td>
</tr>
<tr>
<td>fecha</td>
<td>Date</td>
<td>Fecha de pago.</td>
</tr>
<tr>
<td>listaCampoValor</td>
<td>sBTValorCampoCASH</td>
<td>Lista de valores de campos CASH.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTValorCampoCASH son los siguientes:</p>
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
<td>ordenId</td>
<td>Long</td>
<td>Identificador de orden CASH.</td>
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
<td>1030770</td>
<td>No se recupero informacion para la cuenta recibida.</td>
</tr>
<tr>
<td>1030771</td>
<td>No se recibio importe para la orden.</td>
</tr>
<tr>
<td>1030772</td>
<td>No se recibio moneda para la orden.</td>
</tr>
<tr>
<td>1030773</td>
<td>No se recibio fecha para la orden.</td>
</tr>
</tbody>
</table>
</div></template>


