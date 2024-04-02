<template><div><h1 id="obtener-perfiles" tabindex="-1"><a class="header-anchor" href="#obtener-perfiles"><span>Obtener Perfiles</span></a></h1>
<p>Método para obtener un listado de los perfiles registrados en Bantotal.</p>
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
<td>BTConfiguracionBantotal.ObtenerPerfiles</td>
<td>RBTPG126</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Perfiles:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTConfiguracionBantotal.ObtenerPerfiles> 
         <bts:Btinreq> 
            <bts:Device>3</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>3</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>33cb514e804A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
      </bts:BTConfiguracionBantotal.ObtenerPerfiles> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal?ObtenerPerfiles' \ 
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
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <SOAP-ENV:Body> 
      <BTConfiguracionBantotal.ObtenerPerfilesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>3</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>3</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>33cb514e804A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtPerfiles> 
            <sBTPerfil> 
               <identificador>BACKOFFICE</identificador> 
               <descripcion>Perfil del Back Office</descripcion> 
            </sBTPerfil> 
            <sBTPerfil> 
               <identificador>CAJERO</identificador> 
               <descripcion>Perfil de Cajero</descripcion> 
            </sBTPerfil> 
            <sBTPerfil> 
               <identificador>CAPTACCONF</identificador> 
               <descripcion>Perfil de Confirmación de Captacion</descripcion> 
            </sBTPerfil> 
            <sBTPerfil> 
               <identificador>CAPTACION</identificador> 
               <descripcion>Perfil de Captaciones operativo</descripcion> 
            </sBTPerfil> 
         </sdtPerfiles> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>131</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTConfiguracionBantotal.ObtenerPerfiles</Servicio> 
            <Requerimiento>3</Requerimiento> 
            <Fecha>2018-05-07</Fecha> 
            <Hora>11:59:29</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTConfiguracionBantotal.ObtenerPerfilesResponse> 
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
   "sdtPerfiles": { 
      "sBTPerfil": [ 
         { 
         "descripcion": "Perfil del Back Office", 
         "identificador": "BACKOFFICE" 
         }, 
         { 
         "descripcion": "Perfil de Cajero", 
         "identificador": "CAJERO" 
         }, 
         { 
         "descripcion": "Perfil de Confirmación de Captacion", 
         "identificador": "CAPTACCONF" 
         }, 
         { 
         "descripcion": "Perfil de Captaciones operativo", 
         "identificador": "CAPTACION" 
         }, 
      ] 
   }, 
   "Erroresnegocio": { 
      "BTErrorNegocio": [] 
   }, 
   "Btoutreq": { 
      "Numero": "132", 
      "Estado": "OK", 
      "Servicio": "BTConfiguracionBantotal.ObtenerPerfiles", 
      "Requerimiento": "2", 
      "Fecha": "2018-05-07", 
      "Hora": "12:03:04", 
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
<td>sdtPerfiles</td>
<td>sBTPerfil</td>
<td>Listado de perfiles.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTPerfil son los siguientes:</p>
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
<td>String</td>
<td>Identificador del perfil.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Descripcion del perfil.</td>
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
<td>No existen Perfiles ingresadas en el sistema.</td>
</tr>
</tbody>
</table>
</div></template>


