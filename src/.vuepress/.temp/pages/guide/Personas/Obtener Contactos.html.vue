<template><div><h1 id="obtener-contactos" tabindex="-1"><a class="header-anchor" href="#obtener-contactos"><span>Obtener Contactos</span></a></h1>
<p>Método para obtener los contactos de una persona.</p>
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
<td>BTPersonas.ObtenerContactos</td>
<td>RBTPG307</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Contactos:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ObtenerContactos> 
         <bts:Btinreq> 
            <bts:Device>10</bts:Device> 
            <bts:Token>0d402C60A82434</bts:Token> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:personaUId>51</bts:personaUId> 
      </bts:BTPersonas.ObtenerContactos> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ObtenerContactos' \ 
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
	"personaUId":"51" 
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
      <BTPersonas.ObtenerContactosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>0d402C60A82434</Token> 
         </Btinreq> 
         <sdtContactos> 
            <sBTContactoJuridico> 
               <domicilio3/> 
               <domicilio2/> 
               <telefono>1234 5678</telefono> 
               <domicilio1>18 de Julio 1234</domicilio1> 
               <vinculoId>3</vinculoId> 
               <correlativo>1</correlativo> 
               <nombre>Rodolfo Rías</nombre> 
               <vinculo>Director</vinculo> 
            </sBTContactoJuridico> 
         </sdtContactos> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>8492</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPersonas.ObtenerContactos</Servicio> 
            <Fecha>2019-05-08</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>18:40:36</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPersonas.ObtenerContactosResponse> 
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
	"sdtContactos": { 
		"sBTContactoJuridico": { 
			"vinculoId": "3", 
			"domicilio3": "", 
			"domicilio2": "", 
			"domicilio1": "18 de Julio 1234", 
			"tipoId": "P", 
			"correlativo": "1", 
			"tipo": "Personal", 
			"telefono": "1234 5678", 
			"nombre": "Rodolfo Rías", 
			"vinculo": "Director" 
		} 
	}, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 8396, 
        "Estado": "OK", 
        "Servicio": "BTPersonas.ObtenerContactos", 
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
<td>sdtContactos</td>
<td>sBTContactoJuridico</td>
<td>Listado de contactos.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTContactoJuridico son los siguientes:</p>
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
<td>nombre</td>
<td>String</td>
<td>Nombre completo de la referencia.</td>
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
<td>telefono</td>
<td>String</td>
<td>Número de teléfono.</td>
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
<td>Identificador de persona requerido.</td>
</tr>
<tr>
<td>30002</td>
<td>No existe persona con el identificador ingresado.</td>
</tr>
<tr>
<td>40001</td>
<td>No existe Contactos para la persona en consulta.</td>
</tr>
</tbody>
</table>
</div></template>


