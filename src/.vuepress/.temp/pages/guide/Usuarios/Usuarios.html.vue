<template><div><h2 id="agregar-perfil" tabindex="-1"><a class="header-anchor" href="#agregar-perfil"><span>Agregar Perfil</span></a></h2>
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
<h2 id="crear" tabindex="-1"><a class="header-anchor" href="#crear"><span>Crear</span></a></h2>
<p>Método para crear un usuario.</p>
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
<td>BTUsuarios.Crear</td>
<td>RBTPG120</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Crear:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTUsuarios.Crear> 
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
            <bts:Cajero>S</bts:cajero> 
            <bts:NumeroCaja>1</bts:numeroCaja> 
         </bts:sdtUsuario> 
      </bts:BTUsuarios.Crear> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTUsuarios?Crear' \ 
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
      "Cajero": "S", 
      "NumeroCaja": 1 
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
      <BTUsuarios.CrearResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>0d2dc7b1654A8B5C60A82434</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>89</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTUsuarios.Crear</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2018-05-04</Fecha> 
            <Hora>16:13:28</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTUsuarios.CrearResponse> 
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
        "Numero": "96", 
        "Estado": "OK", 
        "Servicio": "BTUsuarios.Crear", 
        "Requerimiento": "1", 
        "Fecha": "2018-05-04", 
        "Hora": "16:18:56", 
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
<td>[Hidden: Valor fijo 'INS' para este método].</td>
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
<td>Email de usuario.</td>
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
<h3 id="datos-de-salida-1" tabindex="-1"><a class="header-anchor" href="#datos-de-salida-1"><span>Datos de salida</span></a></h3>
<p>No aplica.</p>
<h3 id="errores-1" tabindex="-1"><a class="header-anchor" href="#errores-1"><span>Errores</span></a></h3>
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
<td>El Usuario ya existe.</td>
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
<td>40012</td>
<td>Numero de Cajero ya asignado.</td>
</tr>
</tbody>
</table>
<h2 id="eliminar-perfil" tabindex="-1"><a class="header-anchor" href="#eliminar-perfil"><span>Eliminar Perfil</span></a></h2>
<p>Método para eliminar un perfil asociado a un usuario.</p>
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
<td>BTUsuarios.EliminarPerfil</td>
<td>RBTPG123</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Eliminar Perfil:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTUsuarios.EliminarPerfil> 
		<bts:Btinreq> 
            <bts:Device>1</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>0d2dc7b1654A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:usuario>INSTALADOR</bts:usuario> 
         <bts:perfil>COMEX</bts:perfil> 
      </bts:BTUsuarios.EliminarPerfil> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTSeguridad?EliminarPerfil' \ 
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
   "usuario": "INSTALADOR", 
   "perfil": "COMEX" 
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
      <BTUsuarios.EliminarPerfilResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>0d2dc7b1654A8B5C60A82434</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>81</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTUsuarios.EliminarPerfil</Servicio> 
            <Fecha>2018-05-04</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>15:55:50</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTUsuarios.EliminarPerfilResponse> 
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
        "Numero": "82", 
        "Estado": "OK", 
        "Servicio": "BTUsuarios.EliminarPerfil", 
        "Fecha": "2018-05-04", 
        "Requerimiento": "1", 
        "Hora": "15:57:30", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group>  
<h3 id="datos-de-entrada-1" tabindex="-1"><a class="header-anchor" href="#datos-de-entrada-1"><span>Datos de entrada</span></a></h3>
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
<td>Identificador de usuario.</td>
</tr>
<tr>
<td>perfil</td>
<td>String</td>
<td>Identificador de perfil.</td>
</tr>
</tbody>
</table>
<h3 id="datos-de-salida-2" tabindex="-1"><a class="header-anchor" href="#datos-de-salida-2"><span>Datos de salida</span></a></h3>
<p>No aplica.</p>
<h3 id="errores-2" tabindex="-1"><a class="header-anchor" href="#errores-2"><span>Errores</span></a></h3>
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
</tbody>
</table>
<h2 id="eliminar-usuario" tabindex="-1"><a class="header-anchor" href="#eliminar-usuario"><span>Eliminar Usuario</span></a></h2>
<p>Método para eliminar un usuario.</p>
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
<td>BTUsuarios.EliminarUsuario</td>
<td>RBTPG390</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio de Eliminar Usuario:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTUsuarios.EliminarUsuario> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>20130357454A8B5C60A82434</bts:Token> 
            <bts:Device>GP</bts:Device> 
         </bts:Btinreq> 
         <bts:usuario>GPONTES</bts:usuario> 
      </bts:BTUsuarios.EliminarUsuario> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTUsuarios?EliminarUsuario' \ 
    -H 'cache-control: no-cache' \ 
    -H 'content-type: application/json' \ 
    -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
    -d '{ 
    "Btinreq": { 
        "Device": "GP", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "1", 
        "Canal": "BTDIGITAL", 
        "Token": "20130357454A8B5C60A82434" 
    }, 
   "usuario": "GPONTES", 
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
      <BTUsuarios.EliminarUsuarioResponse> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>MINSTALADOR</Usuario> 
            <Token>20130357454A8B5C60A82434</Token> 
            <Device>GP</Device> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTUsuarios.EliminarUsuario</Servicio> 
            <Fecha>2022-05-17</Fecha> 
            <Hora>15:29:02</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>8843</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTUsuarios.EliminarUsuarioResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
        "Device": "GP", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "1", 
        "Canal": "BTDIGITAL", 
        "Token": "20130357454A8B5C60A82434" 
    }, 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
        "Numero": "839", 
        "Estado": "OK", 
        "Servicio": "BTUsuarios.EliminarUsuario", 
        "Requerimiento": "1", 
        "Fecha": "2022-05-12", 
        "Hora": "15:35:54", 
        "Canal": "BTDIGITAL" 
    } 
} 
``` 
</code-block> 
</code-group> 
<h3 id="datos-de-entrada-2" tabindex="-1"><a class="header-anchor" href="#datos-de-entrada-2"><span>Datos de entrada</span></a></h3>
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
</tbody>
</table>
<h3 id="datos-de-salida-3" tabindex="-1"><a class="header-anchor" href="#datos-de-salida-3"><span>Datos de salida</span></a></h3>
<p>No aplica.</p>
<h3 id="errores-3" tabindex="-1"><a class="header-anchor" href="#errores-3"><span>Errores</span></a></h3>
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
<td>Debe ingresar usuario.</td>
</tr>
<tr>
<td>30002</td>
<td>No existe el usuario ingresado.</td>
</tr>
<tr>
<td>30003</td>
<td>No es posible eliminar el usuario. Existen datos relacionados de Perfil/Usuario.</td>
</tr>
<tr>
<td>30004</td>
<td>El Usuario no existe. (Tabla FST746)</td>
</tr>
<tr>
<td>30005</td>
<td>La Empresa para el Usuario no existe.</td>
</tr>
</tbody>
</table>
<h2 id="habilitar-usuario" tabindex="-1"><a class="header-anchor" href="#habilitar-usuario"><span>Habilitar Usuario</span></a></h2>
<p>Método para habilitar un usuario que se encuentra inhabilitado.</p>
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
<td>BTUsuarios.HabilitarUsuario</td>
<td>RBTPG394</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio de Habilitar Usuario:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTUsuarios.HabilitarUsuario> 
         <bts:Btinreq> 
            <bts:Device>GP</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>bc8b678bc44A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:usuario>GPONTES</bts:usuario> 
         <bts:fechaDesde>2022-01-01</bts:fechaDesde> 
      </bts:BTUsuarios.HabilitarUsuario> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTUsuarios?HabilitarUsuario' \ 
    -H 'cache-control: no-cache' \ 
    -H 'content-type: application/json' \ 
    -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
    -d '{ 
    "Btinreq": { 
        "Device": "GP", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "1", 
        "Canal": "BTDIGITAL", 
        "Token": "bc8b678bc44A8B5C60A82434" 
    }, 
   "Usuario": "GPONTES", 
   "fechaDesde": "2022-01-01" 
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
      <BTUsuarios.HabilitarUsuarioResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GP</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>bc8b678bc44A8B5C60A82434</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>839</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTUsuarios.HabilitarUsuario</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2022-05-12</Fecha> 
            <Hora>15:35:54</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTUsuarios.HabilitarUsuarioResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
        "Device": "GP", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "1", 
        "Canal": "BTDIGITAL", 
        "Token": "bc8b678bc44A8B5C60A82434" 
    }, 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
        "Numero": "839", 
        "Estado": "OK", 
        "Servicio": "BTUsuarios.HabilitarUsuario", 
        "Requerimiento": "1", 
        "Fecha": "2022-05-12", 
        "Hora": "15:35:54", 
        "Canal": "BTDIGITAL" 
    } 
} 
``` 
</code-block> 
</code-group> 
<h3 id="datos-de-entrada-3" tabindex="-1"><a class="header-anchor" href="#datos-de-entrada-3"><span>Datos de entrada</span></a></h3>
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
<td>fechaDesde</td>
<td>Date</td>
<td>Fecha desde la que se encuentra inhabilitado.</td>
</tr>
</tbody>
</table>
<h3 id="datos-de-salida-4" tabindex="-1"><a class="header-anchor" href="#datos-de-salida-4"><span>Datos de salida</span></a></h3>
<p>No aplica.</p>
<h3 id="errores-4" tabindex="-1"><a class="header-anchor" href="#errores-4"><span>Errores</span></a></h3>
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
<td>Debe ingresar usuario a habilitar.</td>
</tr>
<tr>
<td>30002</td>
<td>Debe ingresar fecha desde.</td>
</tr>
<tr>
<td>40003</td>
<td>No se puede eliminar. Registro no existe.</td>
</tr>
</tbody>
</table>
<h2 id="inhabilitar-usuario" tabindex="-1"><a class="header-anchor" href="#inhabilitar-usuario"><span>Inhabilitar Usuario</span></a></h2>
<p>Método para inhabilitar un usuario.</p>
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
<td>BTUsuarios.InhabilitarUsuario</td>
<td>RBTPG393</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio de Inhabilitar Usuario:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTUsuarios.InhabilitarUsuario> 
         <bts:Btinreq> 
            <bts:Device>GP</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>bc8b678bc44A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:usuario>GPONTES</bts:usuario> 
         <bts:fechaDesde>2022-01-01</bts:fechaDesde> 
         <bts:fechaHasta>2022-06-01</bts:fechaHasta> 
      </bts:BTUsuarios.InhabilitarUsuario> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTUsuarios?InhabilitarUsuario' \ 
    -H 'cache-control: no-cache' \ 
    -H 'content-type: application/json' \ 
    -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
    -d '{ 
    "Btinreq": { 
        "Device": "GP", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "1", 
        "Canal": "BTDIGITAL", 
        "Token": "bc8b678bc44A8B5C60A82434" 
    }, 
   "Usuario": "GPONTES", 
   "fechaDesde": "2022-01-01", 
   "fechaHasta": "2022-06-01" 
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
      <BTUsuarios.InhabilitarUsuarioResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GP</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>bc8b678bc44A8B5C60A82434</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>838</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTUsuarios.InhabilitarUsuario</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2022-05-12</Fecha> 
            <Hora>15:35:43</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTUsuarios.InhabilitarUsuarioResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
        "Device": "GP", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "1", 
        "Canal": "BTDIGITAL", 
        "Token": "bc8b678bc44A8B5C60A82434" 
    }, 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
        "Numero": "839", 
        "Estado": "OK", 
        "Servicio": "BTUsuarios.InhabilitarUsuario", 
        "Requerimiento": "1", 
        "Fecha": "2022-05-12", 
        "Hora": "15:35:54", 
        "Canal": "BTDIGITAL" 
    } 
} 
``` 
</code-block> 
</code-group> 
<h3 id="datos-de-entrada-4" tabindex="-1"><a class="header-anchor" href="#datos-de-entrada-4"><span>Datos de entrada</span></a></h3>
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
<td>fechaDesde</td>
<td>Date</td>
<td>Fecha desde la que se quiere inhabilitar.</td>
</tr>
<tr>
<td>fechaHasta</td>
<td>Date</td>
<td>Fecha hasta la que se quiere inhabilitar.</td>
</tr>
</tbody>
</table>
<h3 id="datos-de-salida-5" tabindex="-1"><a class="header-anchor" href="#datos-de-salida-5"><span>Datos de salida</span></a></h3>
<p>No aplica.</p>
<h3 id="errores-5" tabindex="-1"><a class="header-anchor" href="#errores-5"><span>Errores</span></a></h3>
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
<td>Debe ingresar usuario a inhabilitar.</td>
</tr>
<tr>
<td>30002</td>
<td>Debe ingresar fecha desde.</td>
</tr>
<tr>
<td>30003</td>
<td>Debe ingresar fecha hasta.</td>
</tr>
<tr>
<td>40002</td>
<td>Registro ya existe.</td>
</tr>
</tbody>
</table>
<h2 id="modificar" tabindex="-1"><a class="header-anchor" href="#modificar"><span>Modificar</span></a></h2>
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
<h3 id="datos-de-entrada-5" tabindex="-1"><a class="header-anchor" href="#datos-de-entrada-5"><span>Datos de entrada</span></a></h3>
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
<h3 id="datos-de-salida-6" tabindex="-1"><a class="header-anchor" href="#datos-de-salida-6"><span>Datos de salida</span></a></h3>
<p>No aplica.</p>
<h3 id="errores-6" tabindex="-1"><a class="header-anchor" href="#errores-6"><span>Errores</span></a></h3>
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
<h2 id="obtener" tabindex="-1"><a class="header-anchor" href="#obtener"><span>Obtener</span></a></h2>
<p>Método para obtener los datos de un usuario.</p>
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
<td>BTUsuarios.Obtener</td>
<td>RBTPG406</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTUsuarios.Obtener> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>BANTOTAL</bts:Usuario> 
            <bts:Token>2062732190F955E77534D3E0</bts:Token> 
            <bts:Device>AC</bts:Device> 
         </bts:Btinreq> 
         <bts:usuario>INSTALADOR</bts:usuario> 
      </bts:BTUsuarios.Obtener> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTUsuarios?Obtener=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 20394f02-93fd-01a3-c079-81b84239bc48' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AC", 
		"Usuario": "BANTOTAL", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "2062732190F955E77534D3E0" 
	}, 
	"usuario": "INSTALADOR" 
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
      <BTUsuarios.ObtenerResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>BANTOTAL</Usuario> 
            <Token>2062732190F955E77534D3E0</Token> 
            <Device>AC</Device> 
         </Btinreq> 
         <sdtDatosUsuario> 
            <usuario>INSTALADOR</usuario> 
            <nombre>INSTALADOR</nombre> 
            <email>moralesa@dlya.com.uy</email> 
            <telefono>26012777</telefono> 
            <sucursal>Sucursal Beta</sucursal> 
            <programaInicial>MINICIO</programaInicial> 
            <espaciosDeTrabajo>0</espaciosDeTrabajo> 
            <cantidadSesionesAbiertas>9</cantidadSesionesAbiertas> 
            <cajero>S</cajero> 
            <numeroCaja>400</numeroCaja> 
            <nivel>9</nivel> 
            <perfiles> 
               <sBTPerfilBT> 
                  <Perfil>COMERCIAL</perfil> 
                  <FechaAlta>2001-01-01</fechaAlta> 
                  <FechaVencimiento>2021-01-01</fechaVencimiento> 
               </sBTPerfilBT> 
               <sBTPerfilBT> 
                  <Perfil>INSTALADOR</perfil> 
                  <FechaAlta>2001-01-01</fechaAlta> 
                  <FechaVencimiento>2021-01-01</fechaVencimiento> 
               </sBTPerfilBT> 
               <sBTPerfilBT> 
                  <Perfil>MFINSTALL</perfil> 
                  <FechaAlta>2001-01-01</fechaAlta> 
                  <FechaVencimiento>2021-01-01</fechaVencimiento> 
               </sBTPerfilBT> 
               <sBTPerfilBT> 
                  <Perfil>PRECIOS</perfil> 
                  <FechaAlta>2001-02-22</fechaAlta> 
                  <FechaVencimiento>2035-03-03</fechaVencimiento> 
               </sBTPerfilBT> 
            </perfiles> 
         </sdtDatosUsuario> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTUsuarios.Obtener</Servicio> 
            <Fecha>2019-11-19</Fecha> 
            <Hora>17:19:56</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>6991</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTUsuarios.ObtenerResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
'{ 
    "Btinreq": { 
        "Canal": "BTDIGITAL", 
        "Requerimiento": "", 
        "Usuario": "BANTOTAL", 
        "Token": "2062732190F955E77534D3E0", 
        "Device": "AC" 
    }, 
    "sdtDatosUsuario": { 
        "usuario": "INSTALADOR", 
        "nombre": "INSTALADOR", 
        "email": "moralesa@dlya.com.uy", 
        "telefono": "26012777", 
        "sucursal": "Sucursal Beta", 
        "programaInicial": "MINICIO", 
        "espaciosDeTrabajo": 0, 
        "cantidadSesionesAbiertas": 9, 
        "cajero": "S", 
        "numeroCaja": 400, 
        "nivel": 9, 
        "perfiles": { 
            "sBTPerfilBT": [ 
                { 
                    "Perfil": "COMERCIAL", 
                    "FechaAlta": "2001-01-01", 
                    "FechaVencimiento": "2021-01-01" 
                }, 
                { 
                    "Perfil": "INSTALADOR", 
                    "FechaAlta": "2001-01-01", 
                    "FechaVencimiento": "2021-01-01" 
                }, 
                { 
                    "Perfil": "MFINSTALL", 
                    "FechaAlta": "2001-01-01", 
                    "FechaVencimiento": "2021-01-01" 
                }, 
                { 
                    "Perfil": "PRECIOS", 
                    "FechaAlta": "2001-02-22", 
                    "FechaVencimiento": "2035-03-03" 
                } 
            ] 
        } 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTUsuarios.Obtener", 
        "Fecha": "2019-11-19", 
        "Hora": "17:21:59", 
        "Requerimiento": "", 
        "Numero": 6992, 
        "Estado": "OK" 
    } 
}' 
``` 
</code-block> 
</code-group> 
<h3 id="datos-de-entrada-6" tabindex="-1"><a class="header-anchor" href="#datos-de-entrada-6"><span>Datos de entrada</span></a></h3>
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
<td>Usuario a consultar.</td>
</tr>
</tbody>
</table>
<h3 id="datos-de-salida-7" tabindex="-1"><a class="header-anchor" href="#datos-de-salida-7"><span>Datos de salida</span></a></h3>
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
<td>sdtDatosUsuario</td>
<td>sBTDatosUsuario</td>
<td>Datos del usuario.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTDatosUsuario son los siguientes:</p>
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
<td>usuario</td>
<td>String</td>
<td>Identificador del usuario.</td>
</tr>
<tr>
<td>nombre</td>
<td>String</td>
<td>Nombre del usuario.</td>
</tr>
<tr>
<td>email</td>
<td>String</td>
<td>Email del usuario.</td>
</tr>
<tr>
<td>telefono</td>
<td>String</td>
<td>Teléfono del usuario.</td>
</tr>
<tr>
<td>sucursal</td>
<td>String</td>
<td>Sucursal donde se encuentra el usuario.</td>
</tr>
<tr>
<td>programaInicial</td>
<td>String</td>
<td>Nombre de programa incial que se invoca al acceder a Bantotal.</td>
</tr>
<tr>
<td>espaciosDeTrabajo</td>
<td>Int</td>
<td>Cantidad máxima de espacios de trabajos que puede tener abierta el usuario.</td>
</tr>
<tr>
<td>cantidadSesionesAbiertas</td>
<td>Short</td>
<td>Cantidad máxima de sesiones que puede tener abiertas un mismo usuario Bantotal.</td>
</tr>
<tr>
<td>cajero</td>
<td>String</td>
<td>Es cajero? (S/N).</td>
</tr>
<tr>
<td>numeroCaja</td>
<td>Int</td>
<td>Número de caja del usuario.</td>
</tr>
<tr>
<td>nivel</td>
<td>short</td>
<td>Nivel del usuario.</td>
</tr>
<tr>
<td>perfiles</td>
<td>sBTPerfilBT</td>
<td>Perfiles asociados al usuario.</td>
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
<td>Identificador de perfil Bantotal.</td>
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
<h3 id="errores-7" tabindex="-1"><a class="header-anchor" href="#errores-7"><span>Errores</span></a></h3>
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
<td>No se recibió Usuario.</td>
</tr>
<tr>
<td>40001</td>
<td>No existe el usuario ingresado.</td>
</tr>
</tbody>
</table>
<h2 id="obtener-perfiles" tabindex="-1"><a class="header-anchor" href="#obtener-perfiles"><span>Obtener Perfiles</span></a></h2>
<p>Método para consultar los perfiles que tiene asignado un usuario.</p>
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
<td>BTUsuarios.ObtenerPerfiles</td>
<td>RBTPG407</td>
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
      <bts:BTUsuarios.ObtenerPerfiles> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>BANTOTAL</bts:Usuario> 
            <bts:Token>2062732190F955E77534D3E0</bts:Token> 
            <bts:Device>AC</bts:Device> 
         </bts:Btinreq> 
         <bts:usuario>INSTALADOR</bts:usuario> 
      </bts:BTUsuarios.ObtenerPerfiles> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTUsuarios?ObtenerPerfiles=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 20394f02-93fd-01a3-c079-81b84239bc48' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AC", 
		"Usuario": "BANTOTAL", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "2062732190F955E77534D3E0" 
	}, 
	"usuario": "INSTALADOR" 
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
      <BTUsuarios.ObtenerPerfilesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>BANTOTAL</Usuario> 
            <Token>2062732190F955E77534D3E0</Token> 
            <Device>AC</Device> 
         </Btinreq> 
         <sdtPerfiles> 
            <sBTPerfilBT> 
               <Perfil>COMERCIAL</perfil> 
               <FechaAlta>2001-01-01</fechaAlta> 
               <FechaVencimiento>2021-01-01</fechaVencimiento> 
            </sBTPerfilBT> 
            <sBTPerfilBT> 
               <Perfil>INSTALADOR</perfil> 
               <FechaAlta>2001-01-01</fechaAlta> 
               <FechaVencimiento>2021-01-01</fechaVencimiento> 
            </sBTPerfilBT> 
            <sBTPerfilBT> 
               <Perfil>MFINSTALL</perfil> 
               <FechaAlta>2001-01-01</fechaAlta> 
               <FechaVencimiento>2021-01-01</fechaVencimiento> 
            </sBTPerfilBT> 
            <sBTPerfilBT> 
               <Perfil>PRECIOS</perfil> 
               <FechaAlta>2001-02-22</fechaAlta> 
               <FechaVencimiento>2035-03-03</fechaVencimiento> 
            </sBTPerfilBT> 
         </sdtPerfiles> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTUsuarios.ObtenerPerfiles</Servicio> 
            <Fecha>2019-11-19</Fecha> 
            <Hora>17:29:11</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>6995</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTUsuarios.ObtenerPerfilesResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
'{ 
    "Btinreq": { 
        "Canal": "BTDIGITAL", 
        "Requerimiento": "", 
        "Usuario": "BANTOTAL", 
        "Token": "2062732190F955E77534D3E0", 
        "Device": "AC" 
    }, 
    "sdtPerfiles": { 
        "sBTPerfilBT": [ 
            { 
                "Perfil": "COMERCIAL", 
                "FechaAlta": "2001-01-01", 
                "FechaVencimiento": "2021-01-01" 
            }, 
            { 
                "Perfil": "INSTALADOR", 
                "FechaAlta": "2001-01-01", 
                "FechaVencimiento": "2021-01-01" 
            }, 
            { 
                "Perfil": "MFINSTALL", 
                "FechaAlta": "2001-01-01", 
                "FechaVencimiento": "2021-01-01" 
            }, 
            { 
                "Perfil": "PRECIOS", 
                "FechaAlta": "2001-02-22", 
                "FechaVencimiento": "2035-03-03" 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTUsuarios.ObtenerPerfiles", 
        "Fecha": "2019-11-19", 
        "Hora": "17:31:08", 
        "Requerimiento": "", 
        "Numero": 6997, 
        "Estado": "OK" 
    } 
}' 
``` 
</code-block> 
</code-group> 
<h3 id="datos-de-entrada-7" tabindex="-1"><a class="header-anchor" href="#datos-de-entrada-7"><span>Datos de entrada</span></a></h3>
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
<td>Usuario a consultar.</td>
</tr>
</tbody>
</table>
<h3 id="datos-de-salida-8" tabindex="-1"><a class="header-anchor" href="#datos-de-salida-8"><span>Datos de salida</span></a></h3>
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
<td>sBTPerfilBT</td>
<td>Perfiles del usuario.</td>
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
<h3 id="errores-8" tabindex="-1"><a class="header-anchor" href="#errores-8"><span>Errores</span></a></h3>
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
<td>No se recibió Usuario.</td>
</tr>
<tr>
<td>40001</td>
<td>No existe el usuario ingresado.</td>
</tr>
</tbody>
</table>
<h2 id="obtener-usuarios" tabindex="-1"><a class="header-anchor" href="#obtener-usuarios"><span>Obtener Usuarios</span></a></h2>
<p>Método para obtener la lista de usuarios ingresados en el sistema.</p>
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
<td>BTUsuarios.ObtenerUsuarios</td>
<td>RBTPG391</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio de Obtener Usuarios:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTUsuarios.ObtenerUsuarios> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>20130357454A8B5C60A82434</bts:Token> 
            <bts:Device>GP</bts:Device> 
         </bts:Btinreq> 
      </bts:BTUsuarios.ObtenerUsuarios> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTUsuarios?ObtenerUsuarios' \ 
    -H 'cache-control: no-cache' \ 
    -H 'content-type: application/json' \ 
    -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
    -d '{ 
    "Btinreq": { 
        "Device": "GP", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "1", 
        "Canal": "BTDIGITAL", 
        "Token": "20130357454A8B5C60A82434" 
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
      <BTPersonas.ObtenerUsuariosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GP</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Token>c2cfd09eff4A8B5C60A82434</Token> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
         </Btinreq> 
         <sdtUsuarios> 
            <SdtsBTDetalleUsuario> 
               <empresa>1</empresa> 
               <usuario>GERENTE</usuario> 
               <nombre>GERENTE</nombre> 
               <ultimoAvisoActividad>2018-03-21, 12:51:10</ultimoAvisoActividad> 
            </SdtsBTDetalleUsuario> 
            <SdtsBTDetalleUsuario> 
               <empresa>1 - BTV2R3 Uruguay</empresa> 
               <usuario>BANTOTAL</usuario> 
               <nombre>BANTOTAL</nombre> 
               <ultimoAvisoActividad>2022-05-26, 13:46:09</ultimoAvisoActividad> 
            </SdtsBTDetalleUsuario> 
            <SdtsBTDetalleUsuario> 
               <empresa>1</empresa> 
               <usuario>COLOCACION</usuario> 
               <nombre>COLOCACION</nombre> 
               <ultimoAvisoActividad>2018-02-26, 17:03:16</ultimoAvisoActividad> 
            </SdtsBTDetalleUsuario> 
            <SdtsBTDetalleUsuario> 
               <empresa>1</empresa> 
               <usuario>CAJERO</usuario> 
               <nombre>CAJERO</nombre> 
               <ultimoAvisoActividad>2022-05-26, 13:40:24</ultimoAvisoActividad> 
            </SdtsBTDetalleUsuario> 
            <SdtsBTDetalleUsuario> 
               <empresa>1</empresa> 
               <usuario>OPERADOR</usuario> 
               <nombre>OPERADOR</nombre> 
               <ultimoAvisoActividad>2001-01-01, 15:29:13</ultimoAvisoActividad> 
            </SdtsBTDetalleUsuario> 
         </sdtUsuarios> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>16576</Numero> 
            <Hora>12:36:58</Hora> 
            <Fecha>2022-05-26</Fecha> 
            <Servicio>BTPersonas.ObtenerUsuarios</Servicio> 
            <Estado>OK</Estado> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
         </Btoutreq> 
      </BTPersonas.ObtenerUsuariosResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
        "Device": "GP", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "1", 
        "Canal": "BTDIGITAL", 
        "Token": "c2cfd09eff4A8B5C60A82434" 
    }, 
    "sdtUsuarios": { 
        "SdtsBTDetalleUsuario": [ 
        { 
            "empresa": "1", 
            "usuario": "GERENTE", 
            "nombre": "GERENTE", 
            "ultimoAvisoActividad": "2018-03-21, 12:51:10" 
        }, 
        { 
            "empresa": "1 - BTV2R3 Uruguay", 
            "usuario": "BANTOTAL", 
            "nombre": "BANTOTAL", 
            "ultimoAvisoActividad": "2022-05-26, 13:46:09" 
        }, 
        { 
            "empresa": "1", 
            "usuario": "COLOCACION", 
            "nombre": "COLOCACION", 
            "ultimoAvisoActividad": "2018-02-26, 17:03:16" 
        }, 
        { 
            "empresa": "1", 
            "usuario": "CAJERO", 
            "nombre": "CAJERO", 
            "ultimoAvisoActividad": "2022-05-26, 13:40:24" 
        }, 
        { 
            "empresa": "1", 
            "usuario": "OPERADOR", 
            "nombre": "OPERADOR", 
            "ultimoAvisoActividad": "2001-01-01, 15:29:13" 
        } 
        ] 
    }, 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
        "Numero": "839", 
        "Estado": "OK", 
        "Servicio": "BTPersonas.ObtenerUsuarios", 
        "Requerimiento": "1", 
        "Fecha": "2022-05-12", 
        "Hora": "15:35:54", 
        "Canal": "BTDIGITAL" 
    } 
} 
``` 
</code-block> 
</code-group> 
<h3 id="datos-de-entrada-8" tabindex="-1"><a class="header-anchor" href="#datos-de-entrada-8"><span>Datos de entrada</span></a></h3>
<p>No aplica.</p>
<h3 id="datos-de-salida-9" tabindex="-1"><a class="header-anchor" href="#datos-de-salida-9"><span>Datos de salida</span></a></h3>
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
<td>sdtUsuarios</td>
<td>sBTDetalleUsuario</td>
<td>Listado de usuarios.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTDetalleUsuario son los siguientes:</p>
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
<td>empresa</td>
<td>String</td>
<td>Nombre de la empresa.</td>
</tr>
<tr>
<td>usuario</td>
<td>String</td>
<td>Código del usuario.</td>
</tr>
<tr>
<td>nombre</td>
<td>String</td>
<td>Nombre del usuario.</td>
</tr>
<tr>
<td>ultimoAvisoActividad</td>
<td>String</td>
<td>Último aviso de actividad del usuario.</td>
</tr>
</tbody>
</table>
<h3 id="errores-9" tabindex="-1"><a class="header-anchor" href="#errores-9"><span>Errores</span></a></h3>
<p>No aplica.</p>
<h2 id="obtener-usuarios-para-perfil" tabindex="-1"><a class="header-anchor" href="#obtener-usuarios-para-perfil"><span>Obtener Usuarios Para Perfil</span></a></h2>
<p>Método para obtener la lista de usuarios que tiene asociados determinado perfil.</p>
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
<td>BTUsuarios.ObtenerUsuariosParaPerfil</td>
<td>RBTPG392</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio de Obtener Usuarios Para Perfil:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTUsuarios.ObtenerUsuariosParaPerfil> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>20130357454A8B5C60A82434</bts:Token> 
            <bts:Device>GP</bts:Device> 
         </bts:Btinreq> 
         <bts:usuario>CAJERO</bts:usuario> 
      </bts:BTUsuarios.ObtenerUsuariosParaPerfil> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTUsuarios?ObtenerUsuariosParaPerfil' \ 
    -H 'cache-control: no-cache' \ 
    -H 'content-type: application/json' \ 
    -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
    -d '{ 
    "Btinreq": { 
        "Device": "GP", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "1", 
        "Canal": "BTDIGITAL", 
        "Token": "20130357454A8B5C60A82434" 
    }, 
    "perfil": "CAJERO", 
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
      <BTPersonas.ObtenerUsuariosParaPerfilResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GP</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Token>c2cfd09eff4A8B5C60A82434</Token> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
         </Btinreq> 
         <sdtUsuarios> 
            <SdtsBTDetalleUsuario> 
               <empresa>1</empresa> 
               <usuario>GERENTE</usuario> 
               <nombre>GERENTE</nombre> 
               <ultimoAvisoActividad>2018-03-21, 12:51:10</ultimoAvisoActividad> 
            </SdtsBTDetalleUsuario> 
            <SdtsBTDetalleUsuario> 
               <empresa>1 - BTV2R3 Uruguay</empresa> 
               <usuario>BANTOTAL</usuario> 
               <nombre>BANTOTAL</nombre> 
               <ultimoAvisoActividad>2022-05-26, 13:46:09</ultimoAvisoActividad> 
            </SdtsBTDetalleUsuario> 
            <SdtsBTDetalleUsuario> 
               <empresa>1</empresa> 
               <usuario>COLOCACION</usuario> 
               <nombre>COLOCACION</nombre> 
               <ultimoAvisoActividad>2018-02-26, 17:03:16</ultimoAvisoActividad> 
            </SdtsBTDetalleUsuario> 
            <SdtsBTDetalleUsuario> 
               <empresa>1</empresa> 
               <usuario>CAJERO</usuario> 
               <nombre>CAJERO</nombre> 
               <ultimoAvisoActividad>2022-05-26, 13:40:24</ultimoAvisoActividad> 
            </SdtsBTDetalleUsuario> 
            <SdtsBTDetalleUsuario> 
               <empresa>1</empresa> 
               <usuario>OPERADOR</usuario> 
               <nombre>OPERADOR</nombre> 
               <ultimoAvisoActividad>2001-01-01, 15:29:13</ultimoAvisoActividad> 
            </SdtsBTDetalleUsuario> 
         </sdtUsuarios> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>16576</Numero> 
            <Hora>12:36:58</Hora> 
            <Fecha>2022-05-26</Fecha> 
            <Servicio>BTPersonas.ObtenerUsuariosParaPerfil</Servicio> 
            <Estado>OK</Estado> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
         </Btoutreq> 
      </BTPersonas.ObtenerUsuariosParaPerfilResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
        "Device": "GP", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "1", 
        "Canal": "BTDIGITAL", 
        "Token": "c2cfd09eff4A8B5C60A82434" 
    }, 
    "sdtUsuarios": { 
        "SdtsBTDetalleUsuario": [ 
        { 
            "empresa": "1", 
            "usuario": "GERENTE", 
            "nombre": "GERENTE", 
            "ultimoAvisoActividad": "2018-03-21, 12:51:10" 
        }, 
        { 
            "empresa": "1 - BTV2R3 Uruguay", 
            "usuario": "BANTOTAL", 
            "nombre": "BANTOTAL", 
            "ultimoAvisoActividad": "2022-05-26, 13:46:09" 
        }, 
        { 
            "empresa": "1", 
            "usuario": "COLOCACION", 
            "nombre": "COLOCACION", 
            "ultimoAvisoActividad": "2018-02-26, 17:03:16" 
        }, 
        { 
            "empresa": "1", 
            "usuario": "CAJERO", 
            "nombre": "CAJERO", 
            "ultimoAvisoActividad": "2022-05-26, 13:40:24" 
        }, 
        { 
            "empresa": "1", 
            "usuario": "OPERADOR", 
            "nombre": "OPERADOR", 
            "ultimoAvisoActividad": "2001-01-01, 15:29:13" 
        } 
        ] 
    }, 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
        "Numero": "839", 
        "Estado": "OK", 
        "Servicio": "BTPersonas.ObtenerUsuariosParaPerfil", 
        "Requerimiento": "1", 
        "Fecha": "2022-05-12", 
        "Hora": "15:35:54", 
        "Canal": "BTDIGITAL" 
    } 
} 
``` 
</code-block> 
</code-group> 
<h3 id="datos-de-entrada-9" tabindex="-1"><a class="header-anchor" href="#datos-de-entrada-9"><span>Datos de entrada</span></a></h3>
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
<td>perfil</td>
<td>String</td>
<td>Peril de usuario.</td>
</tr>
</tbody>
</table>
<h3 id="datos-de-salida-10" tabindex="-1"><a class="header-anchor" href="#datos-de-salida-10"><span>Datos de salida</span></a></h3>
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
<td>sdtUsuarios</td>
<td>sBTDetalleUsuario</td>
<td>Listado de usuarios.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTDetalleUsuario son los siguientes:</p>
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
<td>empresa</td>
<td>String</td>
<td>Nombre de la empresa.</td>
</tr>
<tr>
<td>usuario</td>
<td>String</td>
<td>Código del usuario.</td>
</tr>
<tr>
<td>nombre</td>
<td>String</td>
<td>Nombre del usuario.</td>
</tr>
<tr>
<td>ultimoAvisoActividad</td>
<td>String</td>
<td>Último aviso de actividad del usuario.</td>
</tr>
</tbody>
</table>
<h3 id="errores-10" tabindex="-1"><a class="header-anchor" href="#errores-10"><span>Errores</span></a></h3>
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
<td>Debe ingresar perfil.</td>
</tr>
<tr>
<td>40001</td>
<td>No existe el perfil ingresado.</td>
</tr>
</tbody>
</table>
<p>ECHO está desactivado.</p>
</div></template>


