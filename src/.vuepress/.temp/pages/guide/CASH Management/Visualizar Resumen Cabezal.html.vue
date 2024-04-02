<template><div><h1 id="visualizar-resumen-cabezal" tabindex="-1"><a class="header-anchor" href="#visualizar-resumen-cabezal"><span>Visualizar Resumen Cabezal</span></a></h1>
<p>Método para obtener un resumen de información de un archivo CASH.</p>
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
<td>BTCASHManagement.VisualizarResumenCabezal</td>
<td>RBTPGC21I</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Visualizar Resumen Cabezal:</p>
</blockquote>
<code-group> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/odwsbt_BTCASHManagement_v1?VisualizarResumenCabezal' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: a0776b33-6711-6c56-044c-42d681d3742f' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}" 
	archivoId":105, 
}' 
``` 
</code-block> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCASHManagement.VisualizarResumenCabezal> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>311020191114150000216393</bts:Token> 
            <bts:Device>001</bts:Device> 
         </bts:Btinreq> 
         <bts:archivoId>105</bts:archivoId> 
      </bts:BTCASHManagement.VisualizarResumenCabezal> 
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
	"resumenCabezal": 
	{ 
		"archivoId": "105", 
		"contratoId": "6", 
		"servicio": "50", 
		"ordenId": "303", 
		"cuentaDebito": "2", 
		"fechaPago": "2019-05-30", 
		"estado": "E", 
		"cantidadLineas": "3", 
		"moneda": "101", 
		"importe": "25.00", 
		"referencia": "", 
		"nombreArchivo": "Proveedores201910", 
		"mensajesError":  
		{ 
			"item": "Pcsmjph1 - La cuenta no pudo ser determinada" 
		} 
	}, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "790", 
        "Estado": "OK", 
        "Servicio": "BTCASHManagement.VisualizarResumenCabezal", 
        "Fecha": "2017-12-17", 
        "Requerimiento": "", 
        "Hora": "16:48:12", 
        "Canal": "BTDIGITAL" 
    } 
}' 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></code-block> 
<code-block title="XML" active> 
```xml 
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   <SOAP-ENV:Body> 
      <BTCASHManagement.VisualizarResumenCabezalResponse> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>MINSTALADOR</Usuario> 
            <Token>311020191114150000216393</Token> 
            <Device>001</Device> 
         </Btinreq> 
         <resumenCabezal> 
            <archivoId>105</archivoId> 
            <contratoId>6</contratoId> 
            <servicio>50</servicio> 
            <ordenId>303</ordenId> 
            <cuentaDebito>2</cuentaDebito> 
            <fechaPago>2019-05-30</fechaPago> 
            <estado>E</estado> 
            <cantidadLineas>3</cantidadLineas> 
            <moneda>101</moneda> 
            <importe>25.00</importe> 
            <referencia/> 
            <nombreArchivo>Proveedores201910</nombreArchivo> 
            <mensajesError> 
               <item>Pcsmjph1 - La cuenta no pudo ser determinada</item> 
            </mensajesError> 
         </resumenCabezal> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTCASHManagement.VisualizarResumenCabezal</Servicio> 
            <Fecha>2019-10-31</Fecha> 
            <Hora>15:55:51</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>671</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTCASHManagement.VisualizarResumenCabezalResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;/code-block> 
&lt;/code-group> 

### Datos de entrada 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
archivoId | Long | Identificador de archivo. 

### Datos de salida 

Nombre | Tipo | Comentarios 
--------- | ----------- | ----------- 
resumenCabezal | sBTResumenCabezal | Resumen de información de un archivo. 

El tipo de dato estructurado sBTResumenCabezal tiene los siguientes campos: 

Campo | Tipo | Comentarios 
--------- | ----------- | ----------- 
archivoId | Long | Identificador de Archivo. 
contratoId | Int | Identificador del contrato CASH. 
servicio | Short | Servicio CASH. 
ordenId | Long | Identificador de orden CASH. 
cuentaDebito | Long | Identificador único de la cuenta debito. 
fechaPago | Date | Fecha de pago o cobro. 
estado | String | Estado del archivo. 
cantidadLineas | Int | Cantidad de líneas del archivo. 
moneda | Short | Moneda. 
importe | Double | Importe total. 
referencia | String | Referencia del pago o cobro. 
nombreArchivo | String | Nombre del archivo. 
mensajesError | String | Lista de mensajes de la línea. 

### Errores 

No aplica. 

 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


