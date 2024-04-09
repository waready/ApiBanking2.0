<template><div><h1 id="validar-en-listas-negras" tabindex="-1"><a class="header-anchor" href="#validar-en-listas-negras"><span>Validar en Listas Negras</span></a></h1>
<p>Método para validar si una persona peretenece a alguna lista negra. En caso de que si, muestra en cual.</p>
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
<td>BTPersonas.ValidarEnListasNegras</td>
<td>RBTPG019</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Validar en Listas Negras:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
  <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ValidarEnListasNegras> 
         <bts:Btinreq> 
            <bts:Device>10.12.10.159</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>8ab636f8624A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:paisDocumentoId>80</bts:paisDocumentoId> 
         <bts:tipoDocumentoId>1</bts:tipoDocumentoId> 
         <bts:numeroDocumento>23330162449</bts:numeroDocumento> 
         <bts:primerNombre>SERVICES</bts:primerNombre> 
         <bts:segundoNombre>TEST</bts:segundoNombre> 
         <bts:primerApellido>SUPER</bts:primerApellido> 
         <bts:segundoApellido>VIELLE</bts:segundoApellido> 
         <bts:nombreEmpresa></bts:nombreEmpresa> 
      </bts:BTPersonas.ValidarEnListasNegras> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?ValidarEnListasNegras=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: a12f013d-9875-6451-dd62-ad7bb0217b5c' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "paisDocumentoId": "80", 
    "tipoDocumentoId": "1", 
    "numeroDocumento": "23330162449", 
    "primerNombre": "SERVICES", 
    "segundoNombre": "TEST", 
    "primerApellido": "SUPER", 
    "segundoApellido": "VIELLE", 
    "nombreEmpresa": "" 
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
      <BTPersonas.ValidarEnListasNegrasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10.12.10.159</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>8ab636f8624A8B5C60A82434</Token> 
         </Btinreq> 
         <ExisteEnLista>S</ExisteEnLista> 
         <sdtListasInhabilitados> 
            <sBTListaInhabilitados> 
               <descripcion>La persona se encuentra en la lista de Inhabilitados: LAVADO DE DINERO.</descripcion> 
               <codigo>0</codigo> 
               <bloqueante>S</bloqueante> 
            </sBTListaInhabilitados> 
         </sdtListasInhabilitados> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>158</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPersonas.ValidarEnListasNegras</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2018-10-29</Fecha> 
            <Hora>13:56:35</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPersonas.ValidarEnListasNegrasResponse> 
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
    "ExisteEnLista": "S", 
    "sdtListasInhabilitados": { 
        "sBTListaInhabilitados": [ { 
            "descripcion": "La persona se encuentra en la lista de Inhabilitados: LAVADO DE DINERO.", 
            "codigo": 0, 
            "bloqueante": "S" 
        } ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 163, 
        "Estado": "OK", 
        "Servicio": "BTPersonas.ValidarEnListasNegras", 
        "Requerimiento": "1", 
        "Fecha": "2018-10-29", 
        "Hora": "15:02:08", 
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
<td>paisDocumentoId</td>
<td>Short</td>
<td>Identificador de país.</td>
</tr>
<tr>
<td>tipoDocumentoId</td>
<td>Short</td>
<td>Identificador de tipo de documento.</td>
</tr>
<tr>
<td>numeroDocumento</td>
<td>String</td>
<td>Numero de documento.</td>
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
<td>nombreEmpresa</td>
<td>String</td>
<td>Nombre de empresa.</td>
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
<td>existeEnLista</td>
<td>String</td>
<td>¿Existe en lista? (S/N).</td>
</tr>
<tr>
<td>sdtListasInhabilitados</td>
<td>sBTListaInhabilitados</td>
<td>Listado de listas negras.</td>
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
<td>Identificador de lista negra.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Descripción de lista negra.</td>
</tr>
<tr>
<td>bloqueante</td>
<td>String</td>
<td>¿Es bloqueante? (S/N).</td>
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
<td>No se ingresó código de país.</td>
</tr>
<tr>
<td>30002</td>
<td>No se ingresó código de tipo de documento.</td>
</tr>
<tr>
<td>30003</td>
<td>No se ingresó número de documento.</td>
</tr>
<tr>
<td>30004</td>
<td>No se ingresó primer nombre.</td>
</tr>
<tr>
<td>30005</td>
<td>No se ingresó primer apellido.</td>
</tr>
</tbody>
</table>
</div></template>


