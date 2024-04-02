<template><div><h1 id="obtener-integrantes-de-operacion" tabindex="-1"><a class="header-anchor" href="#obtener-integrantes-de-operacion"><span>Obtener Integrantes de Operación</span></a></h1>
<p>Método para obtener los integrantes de una operación Bantotal, dado su identificador único.</p>
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
<td>BTContabilidad.ObtenerIntegrantesOperacion</td>
<td>RBTPG139</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Integrantes de Operación:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTContabilidad.ObtenerIntegrantesOperacion> 
         <bts:Btinreq> 
            <bts:Device>3</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>3</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>a5cd5311ae4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:operacionUId>21</bts:operacionUId> 
      </bts:BTContabilidad.ObtenerIntegrantesOperacion> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTContabilidad_v1?ObtenerIntegrantesOperacion=' \ 
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
	"operacionUId": "21", 
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
      <BTContabilidad.ObtenerIntegrantesOperacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>3</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>3</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>034028176e4A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtIntegrantes> 
            <sBTIntegrante> 
               <numeroDocumento>19126689</numeroDocumento> 
               <tipoDocumento>Cédula Identidad</tipoDocumento> 
               <titularidad> 
                  <descripcion>Titular</descripcion> 
                  <identificador>1</identificador> 
               </titularidad> 
               <representativo>S</representativo> 
               <personaUId>141</personaUId> 
               <nombre>VAZQUEZZ SZENTANDRASI ALEJANDR</nombre> 
               <paisDocumento>URUGUAY</paisDocumento> 
            </sBTIntegrante> 
         </sdtIntegrantes> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>599</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTContabilidad.ObtenerIntegrantesOperacion</Servicio> 
            <Fecha>2019-09-20</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>11:13:06</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTContabilidad.ObtenerIntegrantesOperacionResponse> 
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
    "sdtIntegrantes": { 
        "sBTIntegrante": [ 
            { 
				"numeroDocumento": "19126689", 
				"tipoDocumento": "Cédula Identidad", 
                "titularidad": { 
                    "descripcion": "Titular", 
                    "identificador": "1" 
                }, 
                "representativo": "S", 
                "personaUId": "141", 
                "nombre": "vVAZQUEZ SZENTANDRASI aALEJAND" 
				"paisDocumento": "URUGUAY" 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "85", 
        "Estado": "OK", 
        "Servicio": "BTContabilidad.ObtenerIntegrantesOperacion", 
        "Requerimiento": "2", 
        "Fecha": "2018-05-04", 
        "Hora": "16:11:00", 
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
<td>operacionUId</td>
<td>Long</td>
<td>Identificador único de operación.</td>
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
<td>sdtIntegrantes</td>
<td>sBTIntegrante</td>
<td>Datos de integrantes de la operación.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTIntegrante son los siguientes:</p>
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
<td>personaUId</td>
<td>Long</td>
<td>Identificador único de persona.</td>
</tr>
<tr>
<td>paisDocumento</td>
<td>String</td>
<td>Nombre del país del documento.</td>
</tr>
<tr>
<td>tipoDocumento</td>
<td>String</td>
<td>Nombre del tipo de documento.</td>
</tr>
<tr>
<td>numeroDocumento</td>
<td>String</td>
<td>Número de documento.</td>
</tr>
<tr>
<td>nombre</td>
<td>Long</td>
<td>Nombre de la persona.</td>
</tr>
<tr>
<td>titularidad</td>
<td>sBTTipoIntegrante</td>
<td>Tipo de integrante.</td>
</tr>
<tr>
<td>representativo</td>
<td>String</td>
<td>Indica si es titular representativo (S/N).</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTTipoIntegrante son los siguientes:</p>
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
<td>identificador</td>
<td>Int</td>
<td>Identificador del tipo de integrante.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Descripcion del tipo de integrante.</td>
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
<td>No se recibió el identificador de operación.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recuperó la cuenta para el identificador de operación: ?</td>
</tr>
</tbody>
</table>
</div></template>


