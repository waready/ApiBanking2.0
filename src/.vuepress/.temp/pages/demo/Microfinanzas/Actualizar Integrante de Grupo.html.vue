<template><div><h1 id="actualizar-integrante-de-grupo" tabindex="-1"><a class="header-anchor" href="#actualizar-integrante-de-grupo"><span>Actualizar Integrante de Grupo</span></a></h1>
<p>Método para actualizar un integrante de un grupo de crédito.</p>
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
<td>BTMicrofinanzas.ActualizarIntegranteGrupo</td>
<td>RBTPG434</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Actualizar Integrante de Grupo:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTMicrofinanzas.ActualizarIntegranteGrupo> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>1414147105CD285A89A23FBE</bts:Token> 
            <bts:Device>AC</bts:Device> 
         </bts:Btinreq> 
         <bts:grupoId>3</bts:grupoId> 
         <bts:sdtIntegranteGrupo> 
            <bts:clienteUId>157</bts:clienteUId> 
            <bts:cuenta></bts:cuenta> 
            <bts:tipoIntegranteId>2</bts:tipoIntegranteId> 
            <bts:tipoIntegrante></bts:tipoIntegrante> 
            <bts:fechaAlta>2020-04-20</bts:fechaAlta> 
            <bts:fechaBaja></bts:fechaBaja> 
            <bts:vigente>S</bts:vigente> 
            <bts:identificacionAlternativa></bts:identificacionAlternativa> 
         </bts:sdtIntegranteGrupo> 
      </bts:BTMicrofinanzas.ActualizarIntegranteGrupo> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?ActualizarIntegranteGrupo=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: fc072469-5f8a-a897-b716-d45406adf3e7' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
	"sdtIntegranteGrupo": { 
		"clienteUId": "157", 
		"tipoIntegranteId": "2", 
		"tipoIntegrante": "?", 
		"fechaAlta": "2020-04-20", 
		"vigente": "S" 
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
      <BTMicrofinanzas.ActualizarIntegranteGrupoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>1414147105CD285A89A23FBE</Token> 
            <Device>AC</Device> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTMicrofinanzas.ActualizarIntegranteGrupo</Servicio> 
            <Fecha>2020-04-20</Fecha> 
            <Hora>16:59:02</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>5004</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTMicrofinanzas.ActualizarIntegranteGrupoResponse> 
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
        "Numero": "786", 
        "Estado": "OK", 
        "Servicio": "BTMicrofinanzas.ActualizarIntegranteGrupo", 
        "Fecha": "2017-12-15", 
        "Requerimiento": "", 
        "Hora": "16:35:22", 
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
<td>grupoId</td>
<td>Int</td>
<td>Identificador de grupo.</td>
</tr>
<tr>
<td>sdtIntegranteGrupo</td>
<td>sBTIntegranteGrupo</td>
<td>Datos del integrante.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTIntegranteGrupo son los siguientes:</p>
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
<td>clienteUId</td>
<td>Long</td>
<td>Identificador único del cliente.</td>
</tr>
<tr>
<td>cuenta</td>
<td>String</td>
<td>Nombre de la cuenta.</td>
</tr>
<tr>
<td>tipoIntegranteId</td>
<td>Short</td>
<td>Tipo de integrante a ser actualizado.</td>
</tr>
<tr>
<td>tipoIntegrante</td>
<td>String</td>
<td>Descripcion del tipo de integrante.</td>
</tr>
<tr>
<td>fechaAlta</td>
<td>Date</td>
<td>Fecha de alta del integrante.</td>
</tr>
<tr>
<td>fechaBaja</td>
<td>Date</td>
<td>Fecha de baja del integrante.</td>
</tr>
<tr>
<td>identificacionAlternativa</td>
<td>String</td>
<td>Identificación alternativa del integrante.</td>
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
<td>No se recibió el identificador de grupo.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recibió el identificador de cliente.</td>
</tr>
<tr>
<td>30014</td>
<td>No existe registro con el identificador indicado.</td>
</tr>
<tr>
<td>40005</td>
<td>Debe ingresar un tipo de integrante válido para el grupo.</td>
</tr>
<tr>
<td>40006</td>
<td>Excedió la cantidad de integrantes Coordinador permitidos para el tipo de grupo.</td>
</tr>
</tbody>
</table>
</div></template>


