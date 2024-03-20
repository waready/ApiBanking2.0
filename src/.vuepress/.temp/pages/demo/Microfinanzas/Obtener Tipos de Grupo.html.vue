<template><div><h1 id="obtener-tipos-de-grupo" tabindex="-1"><a class="header-anchor" href="#obtener-tipos-de-grupo"><span>Obtener Tipos de Grupo</span></a></h1>
<p>Método para obtener los tipos de grupo de crédito.</p>
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
<td>BTMicrofinanzas.ObtenerTiposGrupo</td>
<td>RBTPG427</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Tipos de Grupo:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTMicrofinanzas.ObtenerTiposGrupo> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>1126115841CD285A89A23FBE</bts:Token> 
            <bts:Device>1</bts:Device> 
         </bts:Btinreq> 
      </bts:BTMicrofinanzas.ObtenerTiposGrupo> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?ObtenerTiposGrupo=' \ 
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
      <BTMicrofinanzas.ObtenerTiposGrupoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>1126115841CD285A89A23FBE</Token> 
            <Device>1</Device> 
         </Btinreq> 
         <sdtTiposGrupos> 
            <sBTTipoGrupo> 
               <Codigo>1</Codigo> 
               <Descripcion>Grupo Solidario</Descripcion> 
            </sBTTipoGrupo> 
            <sBTTipoGrupo> 
               <Codigo>2</Codigo> 
               <Descripcion>Grupo 2</Descripcion> 
            </sBTTipoGrupo> 
            <sBTTipoGrupo> 
               <Codigo>4</Codigo> 
               <Descripcion>Grupo Compartamos</Descripcion> 
            </sBTTipoGrupo> 
            <sBTTipoGrupo> 
               <Codigo>5</Codigo> 
               <Descripcion>Domingo</Descripcion> 
            </sBTTipoGrupo> 
         </sdtTiposGrupos> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTMicrofinanzas.ObtenerTiposGrupo</Servicio> 
            <Fecha>2020-04-16</Fecha> 
            <Hora>09:30:37</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>4942</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTMicrofinanzas.ObtenerTiposGrupoResponse> 
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
    "sdtTiposGrupos": { 
		"sBTTipoGrupo": [ 
		  { 
			"codigo": "1", 
			"descripcion": "Grupo Solidario" 
		  }, 
		  { 
			"codigo": "2", 
			"descripcion": "Grupo 2" 
		  }, 
		  { 
			"codigo": "4", 
			"descripcion": "Grupo Compartamos" 
		  }, 
		  { 
			"codigo": "5", 
			"descripcion": "Domingo" 
		  } 
		] 
	  }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "786", 
        "Estado": "OK", 
        "Servicio": "BTMicrofinanzas.ObtenerTiposGrupo", 
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
<p>No aplica.</p>
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
<td>sdtTiposGrupos</td>
<td>sBTTipoGrupo</td>
<td>Listado de tipos de grupos.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTTipoGrupo son los siguientes:</p>
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
<td>Long</td>
<td>Código del tipo de grupo.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Descripcion del tipo de grupo.</td>
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


