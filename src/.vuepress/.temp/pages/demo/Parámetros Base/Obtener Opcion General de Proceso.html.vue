<template><div><h1 id="obtener-opcion-general-de-proceso" tabindex="-1"><a class="header-anchor" href="#obtener-opcion-general-de-proceso"><span>Obtener Opcion General de Proceso</span></a></h1>
<p>Método para obtener los datos de una determinada opción general de procesos.</p>
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
<td>BTParametrosBase.ObtenerOpcionGeneralDeProceso</td>
<td>RBTPG286</td>
<td>Institucional</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Opcion General de Proceso:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTParametrosBase.ObtenerOpcionGeneralDeProceso> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Usuario>MI</bts:Usuario> 
            <bts:Device>MC</bts:Device> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Token>200f0b8b654A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:codigo>2850</bts:codigo> 
      </bts:BTParametrosBase.ObtenerOpcionGeneralDeProceso> 
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
      "Canal": "BTDIGITAL", 
      "Usuario": "MI", 
      "Device": "MC", 
      "Requerimiento": "1", 
      "Token": "200f0b8b654A8B5C60A82434" 
    }, 
    "codigo": "2850" 
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
      <BTParametrosBase.ObtenerOpcionGeneralDeProcesoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>MC</Device> 
            <Usuario>MI</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>200f0b8b654A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtOpcionGeneralDeProceso> 
            <descripcion>Debug's</descripcion> 
            <identificador>2850</identificador> 
            <valor>S</valor> 
         </sdtOpcionGeneralDeProceso> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>109140</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTParametrosBase.ObtenerOpcionGeneralDeProceso</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2020-11-24</Fecha> 
            <Canal>BTDIGITAL</Canal> 
            <Hora>13:29:43</Hora> 
         </Btoutreq> 
      </BTParametrosBase.ObtenerOpcionGeneralDeProcesoResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
' 
{ 
    "Btinreq": { 
	  "Device": "MC", 
	  "Usuario": "MI", 
	  "Requerimiento": "1", 
	  "Canal": "BTDIGITAL", 
	  "Token": "200f0b8b654A8B5C60A82434" 
	}, 
	"sdtOpcionGeneralDeProceso": { 
	  "descripcion": "Debug's", 
	  "identificador": "2850", 
	  "valor": "S" 
	}, 
	"Btoutreq": { 
	  "Numero": "109140", 
	  "Estado": "OK", 
	  "Servicio": "BTParametrosBase.ObtenerOpcionGeneralDeProceso", 
	  "Requerimiento": "1", 
	  "Fecha": "2020-11-24", 
	  "Canal": "BTDIGITAL", 
	  "Hora": "13:29:43" 
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
<td>Int</td>
<td>Código de la opción general de procesos.</td>
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
<td>sdtOpcionGeneralDeProceso</td>
<td>sBTOpcionGeneral</td>
<td>Datos de la opción general de procesos.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTOpcionGeneral son los siguientes:</p>
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
<td>descripcion</td>
<td>String</td>
<td>Descripción de la opción general de procesos.</td>
</tr>
<tr>
<td>identificador</td>
<td>Int</td>
<td>Código de la opción general de procesos.</td>
</tr>
<tr>
<td>valor</td>
<td>String</td>
<td>Valor de la opción general de procesos (S/N)</td>
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
<td>No se recibió identificador de opción general.</td>
</tr>
<tr>
<td>40001</td>
<td>No existe la opción general con el identificador ingresado.</td>
</tr>
</tbody>
</table>
</div></template>


