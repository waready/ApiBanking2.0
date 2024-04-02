<template><div><h1 id="agregar-perfil" tabindex="-1"><a class="header-anchor" href="#agregar-perfil"><span>Agregar Perfil</span></a></h1>
<p>Método para asociar un perfil a un usuario.</p>
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
<td>BTUsuarios.AgregarPerfil</td>
<td>RBTPG122</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Agregar Perfil:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTUsuarios.AgregarPerfil> 
         <bts:Btinreq> 
            <bts:Device>1</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>0d2dc7b1654A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:usuario>INSTALADOR</bts:usuario> 
         <bts:sdtPerfil> 
            <bts:Perfil>COMEX</bts:perfil> 
            <bts:FechaAlta>2018-12-01</bts:fechaAlta> 
            <bts:FechaVencimiento>2020-01-01</bts:fechaVencimiento> 
         </bts:sdtPerfil> 
      </bts:BTUsuarios.AgregarPerfil> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTUsuarios?AgregarPerfil' \ 
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
   "Usuario": "INSTALADOR", 
   "sdtPerfil": { 
      "Perfil": "COMEX", 
      "FechaAlta": "2018-12-01", 
      "FechaVencimiento": "2020-01-01" 
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
      <BTUsuarios.AgregarPerfilResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>0d2dc7b1654A8B5C60A82434</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>76</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTUsuarios.AgregarPerfil</Servicio> 
            <Fecha>2018-05-04</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>15:44:24</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTUsuarios.AgregarPerfilResponse> 
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
        "Numero": "80", 
        "Estado": "OK", 
        "Servicio": "BTUsuarios.AgregarPerfil", 
        "Fecha": "2018-05-04", 
        "Requerimiento": "1", 
        "Hora": "15:54:29", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group>  
### Datos de entrada 
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
<td>usuario</td>
<td>String</td>
<td>Identificador del usuario.</td>
</tr>
<tr>
<td>sdtPerfil</td>
<td>sBTPerfilBT</td>
<td>Datos del perfil.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTPerfilBT son los siguientes:</p>
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
<td>Perfil</td>
<td>String</td>
<td>Identificación de perfil Bantotal.</td>
</tr>
<tr>
<td>FechaAlta</td>
<td>Date</td>
<td>Fecha a partir de la cual el usuario se encuentra habilitado para operar con el perfil.</td>
</tr>
<tr>
<td>FechaVencimiento</td>
<td>Date</td>
<td>Fecha de vencimiento del perfil para el usuario.</td>
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
<td>Debe ingresar Usuario.</td>
</tr>
<tr>
<td>30002</td>
<td>No existe Usuario.</td>
</tr>
<tr>
<td>30003</td>
<td>Debe ingresar Perfil.</td>
</tr>
<tr>
<td>30004</td>
<td>No existe Perfil.</td>
</tr>
<tr>
<td>30005</td>
<td>Debe ingresar Fecha de Alta.</td>
</tr>
<tr>
<td>30006</td>
<td>Fecha de Alta debe ser posterior a Fecha de Apertura.</td>
</tr>
<tr>
<td>30007</td>
<td>Debe ingresar Fecha de Vencimiento.</td>
</tr>
<tr>
<td>30008</td>
<td>Fecha de Vencimiento debe ser posterior a Fecha de Apertura.</td>
</tr>
</tbody>
</table>
</div></template>


