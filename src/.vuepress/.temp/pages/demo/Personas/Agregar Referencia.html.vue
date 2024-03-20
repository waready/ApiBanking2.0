<template><div><h1 id="agregar-referencia" tabindex="-1"><a class="header-anchor" href="#agregar-referencia"><span>Agregar Referencia</span></a></h1>
<p>Método para agregar una referencia a una persona.</p>
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
<td>BTPersonas.AgregarReferencia</td>
<td>RBTPG302</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Agregar Referencia:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.AgregarReferencia> 
         <bts:Btinreq> 
            <bts:Device>10</bts:Device> 
            <bts:Token>0d4A8B5C60A82434</bts:Token> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:personaUId>21</bts:personaUId> 
         <bts:sdtReferencia> 
            <bts:vinculoId>3</bts:vinculoId> 
            <bts:domicilio3></bts:domicilio3> 
            <bts:domicilio2></bts:domicilio2> 
            <bts:domicilio1>18 de Julio 1234</bts:domicilio1> 
            <bts:tipoId>P</bts:tipoId> 
            <bts:correlativo>1</bts:correlativo> 
            <bts:tipo></bts:tipo> 
            <bts:telefono>1234 5678</bts:telefono> 
            <bts:nombre>Rodolfo Rias</bts:nombre> 
            <bts:vinculo></bts:vinculo> 
         </bts:sdtReferencia> 
      </bts:BTPersonas.AgregarReferencia> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?AgregarReferencia' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
	"personaUId":"21", 
	"sdtReferencia": { 
		"vinculoId": "3", 
		"domicilio3": "", 
		"domicilio2": "", 
		"domicilio1": "18 de Julio 1234", 
		"tipoId": "P", 
		"correlativo": "1", 
		"tipo": "", 
		"telefono": "1234 5678", 
		"nombre": "Rodolfo Rías", 
		"vinculo": "" 
	} 
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
      <BTPersonas.AgregarReferenciaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>0d402ef5c90A82434</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>8487</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPersonas.AgregarReferencia</Servicio> 
            <Fecha>2019-05-08</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>17:47:52</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPersonas.AgregarReferenciaResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
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
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 8396, 
        "Estado": "OK", 
        "Servicio": "BTPersonas.AgregarReferencia", 
        "Requerimiento": "1", 
        "Fecha": "2019-05-07", 
        "Hora": "15:54:44", 
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
<td>personaUId</td>
<td>Long</td>
<td>Identificador único de persona.</td>
</tr>
<tr>
<td>sdtReferencia</td>
<td>sBTReferencia</td>
<td>Datos de referencia de la persona.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTReferencia son los siguientes:</p>
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
<td>Correlativo.</td>
</tr>
<tr>
<td>vinculoId</td>
<td>Short</td>
<td>Identificador de vínculo.</td>
</tr>
<tr>
<td>vinculo</td>
<td>String</td>
<td>Vínculo.</td>
</tr>
<tr>
<td>domicilio1</td>
<td>String</td>
<td>Domicilio 1.</td>
</tr>
<tr>
<td>domicilio2</td>
<td>String</td>
<td>Domicilio 2.</td>
</tr>
<tr>
<td>domicilio3</td>
<td>String</td>
<td>Domicilio 3.</td>
</tr>
<tr>
<td>tipoId</td>
<td>String</td>
<td>Identificador de tipo de referencia.</td>
</tr>
<tr>
<td>tipo</td>
<td>String</td>
<td>Descripción del tipo de referencia</td>
</tr>
<tr>
<td>telefono</td>
<td>String</td>
<td>Número de teléfono.</td>
</tr>
<tr>
<td>nombre</td>
<td>String</td>
<td>Nombre completo de la referencia.</td>
</tr>
</tbody>
</table>
<h3 id="datos-de-salida" tabindex="-1"><a class="header-anchor" href="#datos-de-salida"><span>Datos de salida</span></a></h3>
<p>No aplica.</p>
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
<td>Identificador de Persona Requerido.</td>
</tr>
<tr>
<td>30002</td>
<td>No existe persona con el identificador ingresado.</td>
</tr>
<tr>
<td>40001</td>
<td>Correlativo no puede ser vacio.</td>
</tr>
<tr>
<td>40002</td>
<td>Correlativo ya existe.</td>
</tr>
<tr>
<td>40003</td>
<td>Tipo Codigo no puede ser vacio.</td>
</tr>
<tr>
<td>40004</td>
<td>Tipo Codigo Incorrecto.</td>
</tr>
<tr>
<td>40005</td>
<td>Vinculo Codigo no puede ser vacio.</td>
</tr>
<tr>
<td>40006</td>
<td>Vinculo Codigo Incorrecto.</td>
</tr>
<tr>
<td>40007</td>
<td>Nombre no puede ser vacio.</td>
</tr>
<tr>
<td>40008</td>
<td>Domicilio1 no puede ser vacio</td>
</tr>
<tr>
<td>40009</td>
<td>Telefono no puede ser vacio.</td>
</tr>
</tbody>
</table>
</div></template>


