<template><div><h1 id="validar-listas-inhabilitados" tabindex="-1"><a class="header-anchor" href="#validar-listas-inhabilitados"><span>Validar Listas Inhabilitados</span></a></h1>
<p>Método para obtener todas las listas de inhabilitados en las que se encuentra una persona a partir de los datos ingresados. (Es mandatorio ingresar al menos una de las siguientes claves: pais, tipo de documento y número de documento, o primer nombre y primer apellido)</p>
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
<td>BTPersonas.ValidarListasInhabilitados</td>
<td>RBTPG313</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Validar Listas Inhabilitados:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ValidarListasInhabilitados> 
         <bts:Btinreq> 
            <bts:Device>10</bts:Device> 
            <bts:Token>ccbe8f2A82434</bts:Token> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:pais>845</bts:pais> 
         <bts:tipoDocumento>1</bts:tipoDocumento> 
         <bts:numeroDeDocumento>27511184</bts:numeroDeDocumento> 
         <bts:tipoPersona></bts:tipoPersona> 
         <bts:primerNombre></bts:primerNombre> 
         <bts:segundoNombre></bts:segundoNombre> 
         <bts:primerApellido></bts:primerApellido> 
         <bts:segundoApellido></bts:segundoApellido> 
         <bts:razonSocial></bts:razonSocial> 
      </bts:BTPersonas.ValidarListasInhabilitados> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ValidarListasInhabilitados' \ 
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
	"pais":"845", 
	"tipoDocumento":"1", 
	"numeroDeDocumento":"27511184", 
	"tipoPersona":"", 
	"primerNombre":"", 
	"segundoNombre":"", 
	"primerApellido":"", 
	"segundoApellido":"", 
	"razonSocial":"" 
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
      <BTPersonas.ValidarListasInhabilitadosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>ccbe8f2A82434</Token> 
         </Btinreq> 
         <sdtListaInhabilitados> 
            <sBTListaInhabilitados> 
               <descripcion>LAVADO DE DINERO</descripcion> 
               <fechaHasta>0000-00-00</fechaHasta> 
               <fechaDesde>2016-06-13</fechaDesde> 
               <codigo>1</codigo> 
               <bloqueante>S</bloqueante> 
            </sBTListaInhabilitados> 
         </sdtListaInhabilitados> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>8508</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPersonas.ValidarListasInhabilitados</Servicio> 
            <Fecha>2019-05-09</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>10:32:18</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPersonas.ValidarListasInhabilitadosResponse> 
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
	"sdtListaInhabilitados": { 
		"sBTListaInhabilitados": { 
			"descripcion": "LAVADO DE DINERO", 
			"fechaHasta": "0000-00-00", 
			"fechaDesde": "2016-06-13", 
			"codigo": "1", 
			"bloqueante": "S" 
		} 
	}, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 8396, 
        "Estado": "OK", 
        "Servicio": "BTPersonas.ValidarListasInhabilitados", 
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
<td>pais</td>
<td>Short</td>
<td>Identificador de país.</td>
</tr>
<tr>
<td>tipoDocumento</td>
<td>Short</td>
<td>Identificador de tipo de documento.</td>
</tr>
<tr>
<td>numeroDocumento</td>
<td>String</td>
<td>Numero de documento.</td>
</tr>
<tr>
<td>tipoPersona</td>
<td>String</td>
<td>Tipo de persona (Física / Jurídica).</td>
</tr>
<tr>
<td>primerNombre</td>
<td>String</td>
<td>Primer nombre.</td>
</tr>
<tr>
<td>segundoNombre</td>
<td>String</td>
<td>Segundo nombre.</td>
</tr>
<tr>
<td>primerApellido</td>
<td>String</td>
<td>Primer apellido.</td>
</tr>
<tr>
<td>segundoApellido</td>
<td>String</td>
<td>Segundo apellido.</td>
</tr>
<tr>
<td>razonSocial</td>
<td>String</td>
<td>Razón social.</td>
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
<td>listaInhabilitados</td>
<td>sBTListaInhabilitados</td>
<td>Listado de lista de inhabilitados.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTListaInhabilitados son los siguientes:</p>
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
<td>codigo</td>
<td>Short</td>
<td>Identificador de lista de inhabilitados.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Descripción de lista de inhabilitados.</td>
</tr>
<tr>
<td>bloqueante</td>
<td>String</td>
<td>¿Es bloqueante? (S/N).</td>
</tr>
<tr>
<td>fechaDesde</td>
<td>Date</td>
<td>Fecha en que la persona ingresa a la lista de inhabilitados.</td>
</tr>
<tr>
<td>fechaHasta</td>
<td>Date</td>
<td>Fecha en que la persona deja de pertenecer a la lista.</td>
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
<td>No se ingresó primer nombre de la persona.</td>
</tr>
<tr>
<td>30002</td>
<td>No se ingresó primer apellido de la persona.</td>
</tr>
<tr>
<td>30003</td>
<td>No se ingresó país de la persona.</td>
</tr>
<tr>
<td>30004</td>
<td>No se ingresó tipo de documento de la persona.</td>
</tr>
<tr>
<td>30005</td>
<td>No se ingresó documento de la persona.</td>
</tr>
</tbody>
</table>
<p>ECHO está desactivado.</p>
</div></template>


