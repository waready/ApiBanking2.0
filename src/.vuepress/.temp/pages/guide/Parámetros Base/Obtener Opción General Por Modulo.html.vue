<template><div><h1 id="obtener-opcion-general-por-modulo" tabindex="-1"><a class="header-anchor" href="#obtener-opcion-general-por-modulo"><span>Obtener Opción General Por Modulo</span></a></h1>
<p>Método para obtener los datos de una opción general de un determinado módulo.</p>
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
<td>BTParametrosBase.ObtenerOpcionGeneralPorModulo</td>
<td>RBTPG443</td>
<td>Institucional</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Opción General Por Modulo:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTParametrosBase.ObtenerOpcionGeneralPorModulo> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>47D750A861C4243EDE981344</bts:Token> 
            <bts:Device>GP</bts:Device> 
         </bts:Btinreq> 
         <bts:modulo>21</bts:modulo> 
         <bts:codigo>9</bts:codigo> 
      </bts:BTParametrosBase.ObtenerOpcionGeneralPorModulo> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTParametrosBase_v1?ObtenerOpcionGeneralPorModulo \ 
-H 'cache-control: no-cache' \ 
-H 'content-type: application/json' \ 
-d '{ 
    "Btinreq": { 
      "Canal": "BTDIGITAL", 
      "Usuario": "INSTALADOR", 
      "Device": "GP", 
      "Requerimiento": "1", 
      "Token": "200f0b8b654A8B5C60A82434" 
    }, 
   "modulo": 21, 
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
      <BTParametrosBase.ObtenerOpcionGeneralPorModuloResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>47D750A861C4243EDE981344</Token> 
            <Device>GP</Device> 
         </Btinreq> 
         <sdtOpcionGeneralModulo> 
            <identificador>9</identificador> 
            <descripcion>Ajustar fecha fin de mes PCC3</descripcion> 
            <valor>S</valor> 
         </sdtOpcionGeneralModulo> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTParametrosBase.ObtenerOpcionGeneralPorModulo</Servicio> 
            <Fecha>2022-11-17</Fecha> 
            <Hora>11:24:03</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>458</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTParametrosBase.ObtenerOpcionGeneralPorModuloResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
' 
{ 
    "Btinreq": { 
	  "Device": "GP", 
	  "Usuario": "INSTALADOR", 
	  "Requerimiento": "1", 
	  "Canal": "BTDIGITAL", 
	  "Token": "47D750A861C4243EDE981344" 
	}, 
	"sdtOpcionGeneralModulo": { 
	  "descripcion": "Ajustar fecha fin de mes PCC3", 
	  "identificador": "9", 
	  "valor": "S" 
	}, 
	"Btoutreq": { 
	  "Numero": "109140", 
	  "Estado": "OK", 
	  "Servicio": "BTParametrosBase.ObtenerOpcionGeneralPorModulo", 
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
<td>modulo</td>
<td>Int</td>
<td>Identificador de módulo Bantotal.</td>
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
<td>sdtOpcionGeneralModulo</td>
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
<td>30002</td>
<td>No se recibió el módulo.</td>
</tr>
<tr>
<td>30003</td>
<td>No se recibió identificador de opción general.</td>
</tr>
<tr>
<td>40001</td>
<td>El módulo ingresado no es correcto.</td>
</tr>
<tr>
<td>40002</td>
<td>No se encontró registro para la opción general ingresada.</td>
</tr>
</tbody>
</table>
</div></template>


