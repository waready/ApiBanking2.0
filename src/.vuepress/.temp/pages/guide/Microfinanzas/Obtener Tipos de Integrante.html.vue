<template><div><h1 id="obtener-tipos-de-integrante" tabindex="-1"><a class="header-anchor" href="#obtener-tipos-de-integrante"><span>Obtener Tipos de Integrante</span></a></h1>
<p>Método para obtener los tipos de integrante correspondientes a un tipo de grupo de crédito.</p>
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
<td>BTMicrofinanzas.ObtenerTiposDeIntegrante</td>
<td>RBTPG432</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Tipos de Integrante:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTMicrofinanzas.ObtenerTiposDeIntegrante> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>1414147105CD285A89A23FBE</bts:Token> 
            <bts:Device>AC</bts:Device> 
         </bts:Btinreq> 
         <bts:tipoGrupoId>1</bts:tipoGrupoId> 
      </bts:BTMicrofinanzas.ObtenerTiposDeIntegrante> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?ObtenerTiposDeIntegrante=' \ 
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
	"tipoGrupoId": 1 
}' 
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;/code-block> 
&lt;/code-group> 

> El POST retornará la siguiente estructura: 

&lt;code-group> 
&lt;code-block title="XML" active> 
```xml 
&lt;SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   &lt;SOAP-ENV:Body> 
      &lt;BTMicrofinanzas.ObtenerTiposDeIntegranteResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         &lt;Btinreq> 
            &lt;Canal>BTDIGITAL&lt;/Canal> 
            &lt;Requerimiento>1&lt;/Requerimiento> 
            &lt;Usuario>INSTALADOR&lt;/Usuario> 
            &lt;Token>1414147105CD285A89A23FBE&lt;/Token> 
            &lt;Device>AC&lt;/Device> 
         &lt;/Btinreq> 
         &lt;sdtTiposIntegrantesGrupo> 
            &lt;sBTTipoIntegranteGrupo> 
               &lt;codigo>1&lt;/codigo> 
               &lt;descripcion>Coordinador&lt;/descripcion> 
               &lt;cantidadPermitida>1&lt;/cantidadPermitida> 
               &lt;coordinador>S&lt;/coordinador> 
               &lt;vigente>S&lt;/vigente> 
            &lt;/sBTTipoIntegranteGrupo> 
            &lt;sBTTipoIntegranteGrupo> 
               &lt;codigo>2&lt;/codigo> 
               &lt;descripcion>Integrantes&lt;/descripcion> 
               &lt;cantidadPermitida>9&lt;/cantidadPermitida> 
               &lt;coordinador>N&lt;/coordinador> 
               &lt;vigente>S&lt;/vigente> 
            &lt;/sBTTipoIntegranteGrupo> 
         &lt;/sdtTiposIntegrantesGrupo> 
         &lt;Erroresnegocio>&lt;/Erroresnegocio> 
         &lt;Btoutreq> 
            &lt;Canal>BTDIGITAL&lt;/Canal> 
            &lt;Servicio>BTMicrofinanzas.ObtenerTiposDeIntegrante&lt;/Servicio> 
            &lt;Fecha>2020-04-20&lt;/Fecha> 
            &lt;Hora>16:35:36&lt;/Hora> 
            &lt;Requerimiento>1&lt;/Requerimiento> 
            &lt;Numero>4998&lt;/Numero> 
            &lt;Estado>OK&lt;/Estado> 
         &lt;/Btoutreq> 
      &lt;/BTMicrofinanzas.ObtenerTiposDeIntegranteResponse> 
   &lt;/SOAP-ENV:Body> 
&lt;/SOAP-ENV:Envelope> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></code-block> 
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
    "sdtTiposIntegrantesGrupo": { 
		"sBTTipoIntegranteGrupo": [ 
		  { 
			"codigo": "1", 
			"descripcion": "Coordinador", 
			"cantidadPermitida": "1", 
			"coordinador": "S", 
			"vigente": "S" 
		  }, 
		  { 
			"codigo": "2", 
			"descripcion": "Integrantes", 
			"cantidadPermitida": "9", 
			"coordinador": "N", 
			"vigente": "S" 
		  } 
		] 
	}, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "786", 
        "Estado": "OK", 
        "Servicio": "BTMicrofinanzas.ObtenerTiposDeIntegrante", 
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
<td>tipoGrupoId</td>
<td>Short</td>
<td>Identificador del tipo de grupo.</td>
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
<td>sdtTiposIntegrantesGrupo</td>
<td>sBTTipoIntegranteGrupo</td>
<td>Listado de tipos de integrantes.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTTipoIntegrantesGrupo son los siguientes:</p>
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
<td>Identificador del tipo de integrante.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Descripcion del tipo de integrante.</td>
</tr>
<tr>
<td>cantidadPermitida</td>
<td>Int</td>
<td>Cantidad máxima de integrantes de este tipo permitidos.</td>
</tr>
<tr>
<td>coordinador</td>
<td>String</td>
<td>Indica si el integrante es coordinador o no (S/N).</td>
</tr>
<tr>
<td>vigente</td>
<td>String</td>
<td>Indica si el tipo de integrante está vigente (S/N).</td>
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
<td>No existen Tipos de Grupo ingresados en el sistema.</td>
</tr>
</tbody>
</table>
</div></template>


