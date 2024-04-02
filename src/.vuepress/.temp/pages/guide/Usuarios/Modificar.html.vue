<template><div><h1 id="modificar" tabindex="-1"><a class="header-anchor" href="#modificar"><span>Modificar</span></a></h1>
<p>Método para modificar un usuario.</p>
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
<td>BTUsuarios.Modificar</td>
<td>RBTPG120</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Modificar:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTUsuarios.Modificar> 
		<bts:Btinreq> 
            <bts:Device>1</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>0d2dc7b1654A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:sdtUsuario> 
            <bts:Nombre>Natalia Parrilla</bts:nombre> 
            <bts:Usuario>PARRILLAN</bts:usuario> 
            <bts:Email>nparrilla@prueba.com</bts:email> 
            <bts:Telefono>26012777</bts:Telefono> 
            <bts:CantidadSesionesAbiertas>0</bts:cantidadSesionesAbiertas> 
            <bts:EspaciosTrabajo>0</bts:espaciosTrabajo> 
            <bts:ProgramaInicial>HPRUEBA</bts:programaInicial> 
            <bts:Nivel>9</bts:nivel> 
            <bts:Sucursal>1</bts:sucursal> 
            <bts:Cajero>N</bts:cajero> 
            <bts:NumeroCaja>0</bts:numeroCaja> 
         </bts:sdtUsuario> 
      </bts:BTUsuarios.Modificar> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTUsuarios?Modificar' \ 
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
   "sdtUsuario": { 
		"Nombre": "Carlos Dutra", 
		"Usuario": "DUTRAC", 
		"Email": "cdutra@prueba.com", 
      "Telefono": "26012777", 
		"CantidadSesionesAbiertas": 0, 
		"EspaciosTrabajo": 0, 
		"ProgramaInicial": "HPRUEBA", 
		"Nivel": 9, 
		"Sucursal": 1, 
		"Cajero": "N", 
		"NumeroCaja": 0 
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
      <BTUsuarios.ModificarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>0d2dc7b1654A8B5C60A82434</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>98</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTUsuarios.Modificar</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2018-05-04</Fecha> 
            <Hora>16:50:01</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTUsuarios.ModificarResponse> 
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
        "Numero": "99", 
        "Estado": "OK", 
        "Servicio": "BTUsuarios.Modificar", 
        "Requerimiento": "1", 
        "Fecha": "2018-05-04", 
        "Hora": "16:51:22", 
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
<td>sdtUsuario</td>
<td>sBTUsuarioBT</td>
<td>Datos de usuario Bantotal.</td>
</tr>
<tr>
<td>modo</td>
<td>String</td>
<td>[Hidden: Valor fijo 'UPD' para este método].</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTUsuarioBT son los siguientes:</p>
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
<td>Usuario</td>
<td>String</td>
<td>Identificador del usuario.</td>
</tr>
<tr>
<td>Nombre</td>
<td>String</td>
<td>Nombre del usuario.</td>
</tr>
<tr>
<td>Email</td>
<td>String</td>
<td>Email del usuario.</td>
</tr>
<tr>
<td>Telefono</td>
<td>String</td>
<td>Teléfono del usuario.</td>
</tr>
<tr>
<td>Sucursal</td>
<td>Int</td>
<td>Identificador de sucursal.</td>
</tr>
<tr>
<td>ProgramaInicial</td>
<td>String</td>
<td>Nombre de programa incial que se invoca al acceder a Bantotal.</td>
</tr>
<tr>
<td>EspaciosTrabajo</td>
<td>Int</td>
<td>Cantidad máxima de espacios de trabajos que puede tener abierta el usuario (0 - Para indicar que no tiene limites).</td>
</tr>
<tr>
<td>CantidadSesionesAbiertas</td>
<td>Short</td>
<td>Cantidad máxima de sesiones que puede tener abiertas un mismo usuario Bantotal.</td>
</tr>
<tr>
<td>Cajero</td>
<td>String</td>
<td>Indica si el usuario es cajero (S/N).</td>
</tr>
<tr>
<td>NumeroCaja</td>
<td>Int</td>
<td>Número de caja que utiliza el cajero.</td>
</tr>
<tr>
<td>Nivel</td>
<td>Short</td>
<td>Nivel del usuario.</td>
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
<td>30000</td>
<td>Parámetro modo incorrecto.</td>
</tr>
<tr>
<td>30001</td>
<td>Debe ingresar Usuario.</td>
</tr>
<tr>
<td>30003</td>
<td>No existe Usuario.</td>
</tr>
<tr>
<td>30004</td>
<td>Debe ingresar Nombre.</td>
</tr>
<tr>
<td>30005</td>
<td>Debe ingresar Email.</td>
</tr>
<tr>
<td>30006</td>
<td>Debe ingresar Nro de Caja.</td>
</tr>
<tr>
<td>30007</td>
<td>Valor incorrecto para cantidad de sesiones abiertas.</td>
</tr>
<tr>
<td>30008</td>
<td>Valor incorrecto para Nivel.</td>
</tr>
<tr>
<td>30009</td>
<td>Debe ingresar Programa Inicial.</td>
</tr>
<tr>
<td>30010</td>
<td>El Programa Inicial no existe.</td>
</tr>
<tr>
<td>30011</td>
<td>Debe ingresar Sucursal.</td>
</tr>
<tr>
<td>30012</td>
<td>La Sucursal no existe.</td>
</tr>
<tr>
<td>40011</td>
<td>La Empresa para el Usuario no existe.</td>
</tr>
<tr>
<td>40012</td>
<td>Numero de Cajero ya asignado.</td>
</tr>
</tbody>
</table>
</div></template>


