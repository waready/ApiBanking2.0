<template><div><h1 id="obtener-programa-particular" tabindex="-1"><a class="header-anchor" href="#obtener-programa-particular"><span>Obtener Programa Particular</span></a></h1>
<p>Método para obtener el programa particular a ejecutar del programa estándar ingresado.</p>
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
<td>BTParametrosBase.ObtenerProgramaParticular</td>
<td>RBTPG444</td>
<td>Institucional</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Programa Particular:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTParametrosBase.ObtenerProgramaParticular> 
         <bts:Btinreq> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Device>GP</bts:Device> 
            <bts:Token>7d3fb9540aCD285A89A23FBE</bts:Token> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:programaStandard>BLOCKING1</bts:programaStandard> 
      </bts:BTParametrosBase.ObtenerProgramaParticular> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTParametrosBase_v1?ObtenerProgramaParticular \ 
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
   "programaStandard": "BLOCKING1" 
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
      <BTParametrosBase.ObtenerProgramaParticularResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GP</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>7d3fb9540aCD285A89A23FBE</Token> 
         </Btinreq> 
         <sdtProgramaParticular> 
            <descripcion>PRUEBA BLOQUEO</descripcion> 
            <programaParticular>10834</programaParticular> 
            <programaStandard>BLOCKING1</programaStandard> 
            <valorCaracteres>11</valorCaracteres> 
            <valorNumerico>25</valorNumerico> 
         </sdtProgramaParticular> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>1895</Numero> 
            <Servicio>BTParametrosBase.ObtenerProgramaParticular</Servicio> 
            <Estado>OK</Estado> 
            <Fecha>2022-11-22</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>09:25:20</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTParametrosBase.ObtenerProgramaParticularResponse> 
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
	"sdtProgramaParticular": { 
	  "descripcion": "PRUEBA BLOQUEO", 
	  "programaParticular": "10834", 
     "programaStandard": "BLOCKING1", 
     "valorCaracteres": 11, 
     "valorNumerico": 25 
	}, 
	"Btoutreq": { 
	  "Numero": "109140", 
	  "Estado": "OK", 
	  "Servicio": "BTParametrosBase.ObtenerProgramaParticular", 
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
<td>programaStandard</td>
<td>String</td>
<td>Nombre de programa Standard.</td>
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
<td>sdtProgramaParticular</td>
<td>sBTProgramaParticular</td>
<td>Datos del programa particular.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTProgramaParticular son los siguientes:</p>
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
<td>programaParticular</td>
<td>String</td>
<td>Nombre de programa particular.</td>
</tr>
<tr>
<td>programaStandard</td>
<td>String</td>
<td>Nombre de programa standard.</td>
</tr>
<tr>
<td>valorCaracteres</td>
<td>String</td>
<td>Valor caracteres.</td>
</tr>
<tr>
<td>valorNumerico</td>
<td>Int</td>
<td>Valor numérico.</td>
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
<td>No se recibió identificador de empresa.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recibió el programa standard.</td>
</tr>
<tr>
<td>40001</td>
<td>No existe programa particular para el programa standard ingresado.</td>
</tr>
</tbody>
</table>
<p>ECHO está desactivado.</p>
</div></template>


