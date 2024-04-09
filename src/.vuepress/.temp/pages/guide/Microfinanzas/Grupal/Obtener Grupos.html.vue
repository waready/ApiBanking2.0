<template><div><h1 id="obtener-grupos" tabindex="-1"><a class="header-anchor" href="#obtener-grupos"><span>Obtener Grupos</span></a></h1>
<p>Método para obtener los grupos de crédito existentes.</p>
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
<td>BTMicrofinanzas.ObtenerGrupos</td>
<td>RBTPG428</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Grupos:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTMicrofinanzas.ObtenerGrupos> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>1271951833CD285A89A23FBE</bts:Token> 
            <bts:Device>1</bts:Device> 
         </bts:Btinreq> 
         <bts:tipoGrupoId>4</bts:tipoGrupoId> 
      </bts:BTMicrofinanzas.ObtenerGrupos> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?ObtenerGrupos=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: fc072469-5f8a-a897-b716-d45406adf3e7' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "1", 
		"Usuario": "INSTALADOR", 
		"Requerimiento": "1", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "tipoGrupoId": 4 
} 
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
      <BTMicrofinanzas.ObtenerGruposResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>1271951833CD285A89A23FBE</Token> 
            <Device>1</Device> 
         </Btinreq> 
         <sdtGrupos> 
            <sBTGrupo> 
               <codigo>4</codigo> 
               <nombre>Compartamos</nombre> 
            </sBTGrupo> 
            <sBTGrupo> 
               <codigo>27</codigo> 
               <nombre>Prueba CD</nombre> 
            </sBTGrupo> 
            <sBTGrupo> 
               <codigo>29</codigo> 
               <nombre>Cartera Digital</nombre> 
            </sBTGrupo> 
         </sdtGrupos> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTMicrofinanzas.ObtenerGrupos</Servicio> 
            <Fecha>2020-04-20</Fecha> 
            <Hora>14:46:58</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>4992</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTMicrofinanzas.ObtenerGruposResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
		"Device": "1", 
		"Usuario": "INSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "sdtGrupos": { 
		"sBTGrupo": [ 
		  { 
			"codigo": "4", 
			"nombre": "Compartamos" 
		  }, 
		  { 
			"codigo": "27", 
			"nombre": "Prueba CD" 
		  }, 
		  { 
			"codigo": "29", 
			"nombre": "Cartera Digital" 
		  } 
		] 
	}, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "786", 
        "Estado": "OK", 
        "Servicio": "BTMicrofinanzas.ObtenerGrupos", 
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
<td>Tipo de grupos.</td>
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
<td>sdtGrupos</td>
<td>sBTGrupo</td>
<td>Listado de grupos.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTGrupo son los siguientes:</p>
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
<td>Int</td>
<td>Código del grupo.</td>
</tr>
<tr>
<td>nombre</td>
<td>String</td>
<td>Descripción del grupo.</td>
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
<td>No se recibió el tipo de grupo.</td>
</tr>
<tr>
<td>30002</td>
<td>No existen grupos para el tipo de grupo ingresado.</td>
</tr>
</tbody>
</table>
</div></template>


