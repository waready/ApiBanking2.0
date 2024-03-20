<template><div><h1 id="obtener-tipos-de-listas-negras" tabindex="-1"><a class="header-anchor" href="#obtener-tipos-de-listas-negras"><span>Obtener Tipos de Listas Negras</span></a></h1>
<p>Método para obtener un listado de los tipos de listas negras ingresados en Bantotal.</p>
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
<td>BTConfiguracionBantotal.ObtenerTiposListasNegras</td>
<td>RBTPG214</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Tipos de Listas Negras:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTConfiguracionBantotal.ObtenerTiposListasNegras> 
         <bts:Btinreq> 
            <bts:Device>10</bts:Device> 
            <bts:Token>ccbe8f2e2434</bts:Token> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
      </bts:BTConfiguracionBantotal.ObtenerTiposListasNegras> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal?ObtenerTiposListasNegras' \ 
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
      <BTConfiguracionBantotal.ObtenerTiposListasNegrasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>10</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>ccbe8f2e2434</Token> 
         </Btinreq> 
         <sdtTiposListaNegra> 
            <sBTTipoListaNegra> 
               <Descripcion>LAVADO DE DINERO</Descripcion> 
               <Codigo>1</Codigo> 
            </sBTTipoListaNegra> 
            <sBTTipoListaNegra> 
               <Descripcion>LISTA DEL BANCO</Descripcion> 
               <Codigo>2</Codigo> 
            </sBTTipoListaNegra> 
            <sBTTipoListaNegra> 
               <Descripcion>LISTA DE CLIENTES INDESEABLES</Descripcion> 
               <Codigo>3</Codigo> 
            </sBTTipoListaNegra> 
            <sBTTipoListaNegra> 
               <Descripcion>INHABILITADOS CAMBIOS</Descripcion> 
               <Codigo>4</Codigo> 
            </sBTTipoListaNegra> 
            <sBTTipoListaNegra> 
               <Descripcion>TERRORISTA</Descripcion> 
               <Codigo>16</Codigo> 
            </sBTTipoListaNegra> 
            <sBTTipoListaNegra> 
               <Descripcion/> 
               <Codigo>18</Codigo> 
            </sBTTipoListaNegra> 
         </sdtTiposListaNegra> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>8514</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTConfiguracionBantotal.ObtenerTiposListasNegras</Servicio> 
            <Fecha>2019-05-09</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>11:43:07</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTConfiguracionBantotal.ObtenerTiposListasNegrasResponse> 
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
	"sdtTiposListaNegra": { 
		"sBTTipoListaNegra": [ 
			{ 
         "Descripcion": "LAVADO DE DINERO", 
         "Codigo": "1" 
			}, 
			{ 
         "Descripcion": "LISTA DEL BANCO", 
         "Codigo": "2" 
			}, 
			{ 
         "Descripcion": "LISTA DE CLIENTES INDESEABLES", 
         "Codigo": "3" 
			}, 
			{ 
         "Descripcion": "INHABILITADOS CAMBIOS", 
         "Codigo": "4" 
			}, 
			{ 
         "Descripcion": "TERRORISTA", 
         "Codigo": "16" 
			}, 
			{ 
         "Descripcion": "", 
         "Codigo": "18" 
			} 
		] 
	}, 
   "Erroresnegocio": { 
      "BTErrorNegocio": [] 
   }, 
   "Btoutreq": { 
      "Numero": 8396, 
      "Estado": "OK", 
      "Servicio": "BTConfiguracionBantotal.ObtenerTiposListasNegras", 
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
<td>sdtTiposListaNegra</td>
<td>sBTTipoListaNegra</td>
<td>Listado de tipos de listas negras.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTTipoListaNegra son los siguientes:</p>
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
<td>Descripcion</td>
<td>String</td>
<td>Descripción de tipo de lista negra.</td>
</tr>
<tr>
<td>Codigo</td>
<td>Long</td>
<td>Identificador de tipo de lista negra.</td>
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
<td>30011</td>
<td>No existen Tipos de Lista Negra ingresados en el sistema.</td>
</tr>
</tbody>
</table>
</div></template>


