<template><div><h1 id="obtener-guia-especial-de-proceso" tabindex="-1"><a class="header-anchor" href="#obtener-guia-especial-de-proceso"><span>Obtener Guía Especial de Proceso</span></a></h1>
<p>Método para obtener los datos de una determinada guía especial de procesos.</p>
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
<td>BTParametrosBase.ObtenerGuiaEspecialDeProceso</td>
<td>RBTPG052</td>
<td>Institucional</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Guía Especial de Proceso:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTParametrosBase.ObtenerGuiaEspecialDeProceso> 
         <bts:Btinreq> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>43f21ff61cCD285A89A23FBE</bts:Token> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Device>1</bts:Device> 
         </bts:Btinreq> 
         <bts:codigo>73</bts:codigo> 
      </bts:BTParametrosBase.ObtenerGuiaEspecialDeProceso> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTParametrosBase_v1?ObtenerGuiaEspecialDeProceso \ 
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
	"codigo": "73" 
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
      <BTParametrosBase.ObtenerGuiaEspecialDeProcesoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>43f21ff61cCD285A89A23FBE</Token> 
         </Btinreq> 
         <sdtGuiaEspecialDeProceso> 
            <sBTCorrelativoGuiaEspecial> 
               <correlativo3>0</correlativo3> 
               <correlativo2>539</correlativo2> 
               <descripcion>Prima sin cuenta</descripcion> 
               <correlativo1>50</correlativo1> 
               <valorEspecifico3>0</valorEspecifico3> 
               <valorEspecifico2>0</valorEspecifico2> 
               <valorEspecifico1>0</valorEspecifico1> 
               <importeEspecifico3>0.00</importeEspecifico3> 
               <importeEspecifico2>0.00</importeEspecifico2> 
               <importeEspecifico1>0.00</importeEspecifico1> 
            </sBTCorrelativoGuiaEspecial> 
            <sBTCorrelativoGuiaEspecial> 
               <correlativo3>0</correlativo3> 
               <correlativo2>125</correlativo2> 
               <descripcion>No genera prima</descripcion> 
               <correlativo1>163</correlativo1> 
               <valorEspecifico3>0</valorEspecifico3> 
               <valorEspecifico2>0</valorEspecifico2> 
               <valorEspecifico1>0</valorEspecifico1> 
               <importeEspecifico3>0.00</importeEspecifico3> 
               <importeEspecifico2>0.00</importeEspecifico2> 
               <importeEspecifico1>0.00</importeEspecifico1> 
            </sBTCorrelativoGuiaEspecial> 
         </sdtGuiaEspecialDeProceso> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>592</Numero> 
            <Servicio>BTParametrosBase.ObtenerGuiaEspecialDeProceso</Servicio> 
            <Estado>OK</Estado> 
            <Fecha>2020-03-11</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>11:37:51</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTParametrosBase.ObtenerGuiaEspecialDeProcesoResponse> 
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
	"sdtGuiaEspecialDeProceso": { 
	  "sBTCorrelativoGuiaEspecial": [ 
		{ 
		  "correlativo3": "0", 
		  "correlativo2": "539", 
		  "descripcion": "Prima sin cuenta", 
		  "correlativo1": "50", 
		  "valorEspecifico3": "0", 
		  "valorEspecifico2": "0", 
		  "valorEspecifico1": "0", 
		  "importeEspecifico3": "0.00", 
		  "importeEspecifico2": "0.00", 
		  "importeEspecifico1": "0.00" 
		}, 
		{ 
		  "correlativo3": "0", 
		  "correlativo2": "125", 
		  "descripcion": "No genera prima", 
		  "correlativo1": "163", 
		  "valorEspecifico3": "0", 
		  "valorEspecifico2": "0", 
		  "valorEspecifico1": "0", 
		  "importeEspecifico3": "0.00", 
		  "importeEspecifico2": "0.00", 
		  "importeEspecifico1": "0.00" 
		} 
	  ] 
	}, 
	"Btoutreq": { 
		"Numero": "592", 
		"Servicio": "BTParametrosBase.ObtenerGuiaEspecialDeProceso", 
		"Estado": "OK", 
		"Fecha": "2020-03-11", 
		"Requerimiento": "1", 
		"Hora": "11:37:51", 
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
<td>sdtGuiaEspecialDeProceso</td>
<td>sBTCorrelativoGuiaEspecial</td>
<td>Listado de datos de la guía especial de proceso.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTCorrelativoGuiaEspecial son los siguientes:</p>
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
<td>correlativo1</td>
<td>Short</td>
<td>Correlativo 1.</td>
</tr>
<tr>
<td>correlativo2</td>
<td>Short</td>
<td>Correlativo 2.</td>
</tr>
<tr>
<td>correlativo3</td>
<td>Short</td>
<td>Correlativo 3.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Descripción.</td>
</tr>
<tr>
<td>valorEspecifico1</td>
<td>Long</td>
<td>Valor específico 1.</td>
</tr>
<tr>
<td>valorEspecifico2</td>
<td>Long</td>
<td>Valor específico 2.</td>
</tr>
<tr>
<td>valorEspecifico3</td>
<td>Long</td>
<td>Valor específico 3.</td>
</tr>
<tr>
<td>importeEspecifico1</td>
<td>Double</td>
<td>Importe específico 1.</td>
</tr>
<tr>
<td>importeEspecifico2</td>
<td>Double</td>
<td>Importe específico 2.</td>
</tr>
<tr>
<td>importeEspecifico3</td>
<td>Double</td>
<td>Importe específico 3.</td>
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
<td>No existe la guía recibida.</td>
</tr>
</tbody>
</table>
</div></template>


