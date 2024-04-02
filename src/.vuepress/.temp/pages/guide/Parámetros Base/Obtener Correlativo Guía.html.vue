<template><div><h1 id="obtener-correlativo-guia" tabindex="-1"><a class="header-anchor" href="#obtener-correlativo-guia"><span>Obtener Correlativo Guía</span></a></h1>
<p>Método para obtener los datos de un correlativo de una determinada guía de procesos.</p>
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
<td>BTParametrosBase.ObtenerCorrelativoGuia</td>
<td>RBTPG053</td>
<td>Institucional</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Correlativo Guía:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTParametrosBase.ObtenerCorrelativoGuia> 
         <bts:Btinreq> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>43f21ff61cCD285A89A23FBE</bts:Token> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Device>1</bts:Device> 
         </bts:Btinreq> 
         <bts:codigo>50</bts:codigo> 
         <bts:correlativo>1</bts:correlativo> 
      </bts:BTParametrosBase.ObtenerCorrelativoGuia> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTParametrosBase_v1?ObtenerCorrelativoGuia \ 
-H 'cache-control: no-cache' \ 
-H 'content-type: application/json' \ 
-d '{ 
	"Btinreq": { 
		"Device": "1", 
		"Usuario": "INSTALADOR", 
		"Requerimiento": "1", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
	"codigo": "50", 
	"correlativo": "1" 
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
      <BTParametrosBase.ObtenerCorrelativoGuiaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>43f21ff61cCD285A89A23FBE</Token> 
         </Btinreq> 
         <sdtCorrelativo> 
            <descripcion>Depósitos Efectivo Ctas Vista</descripcion> 
            <importeEspecifico>5.00</importeEspecifico> 
            <valorEspecifico>50</valorEspecifico> 
            <correlativo>1</correlativo> 
         </sdtCorrelativo> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>593</Numero> 
            <Servicio>BTParametrosBase.ObtenerCorrelativoGuia</Servicio> 
            <Estado>OK</Estado> 
            <Fecha>2020-03-11</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>11:51:13</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTParametrosBase.ObtenerCorrelativoGuiaResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
		"Device": "1", 
		"Usuario": "INSTALADOR", 
		"Requerimiento": "1", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
	"sdtCorrelativo": { 
	  "descripcion": "Depósitos Efectivo Ctas Vista", 
	  "importeEspecifico": "5.00", 
	  "valorEspecifico": "50", 
	  "correlativo": "1" 
	}, 
	"Btoutreq": { 
	  "Numero": "593", 
	  "Servicio": "BTParametrosBase.ObtenerCorrelativoGuia", 
	  "Estado": "OK", 
	  "Fecha": "2020-03-11", 
	  "Requerimiento": "1", 
	  "Hora": "11:51:13", 
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
<td>empresaId</td>
<td>Short</td>
<td>Código de empresa [Hidden].</td>
</tr>
<tr>
<td>codigo</td>
<td>Long</td>
<td>Código de la Guía de Procesos.</td>
</tr>
<tr>
<td>correlativo</td>
<td>Short</td>
<td>Correlativo.</td>
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
<td>sdtCorrelativo</td>
<td>sBTCorrelativoGuia</td>
<td>Datos de la guía de proceso.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTCorrelativoGuia son los siguientes:</p>
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
<td>correlativo</td>
<td>Short</td>
<td>Correlativo de la guía.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Descripción del correlativo.</td>
</tr>
<tr>
<td>valorEspecifico</td>
<td>Long</td>
<td>Valor específico del correlativo.</td>
</tr>
<tr>
<td>importeEspecifico</td>
<td>Double</td>
<td>Importe específico del correlativo.</td>
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
<td>No se recibió código de guía.</td>
</tr>
<tr>
<td>40001</td>
<td>No existe el correlativo.</td>
</tr>
</tbody>
</table>
</div></template>


