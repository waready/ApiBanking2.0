<template><div><h1 id="rechazar-excepcion" tabindex="-1"><a class="header-anchor" href="#rechazar-excepcion"><span>Rechazar Excepcion</span></a></h1>
<p>Método para rechazar una excepción.</p>
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
<td>BTSeguridad.RechazarExcepcion</td>
<td>RBTPG088</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Rechazar Excepcion:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTSeguridad.RechazarExcepcion> 
         <bts:Btinreq>             
            <bts:Device>ES</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>dac8c7fdec4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:idExcepcion>1852</bts:idExcepcion> 
         <bts:usuario>BANTOTAL</bts:usuario> 
         <bts:contraseña>z0na#1357</bts:contraseña> 
      </bts:BTSeguridad.RechazarExcepcion> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTSeguridad?AutorizarExcepcion=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 08206ddb-aee6-e62e-eb5a-0eb81f95e87f' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "idExcepcion": 1854, 
    "usuario": "BANTOTAL", 
    "contraseña": "z0na#1357" 
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
      <BTSeguridad.RechazarExcepcionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>ES</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>dac8c7fdec4A8B5C60A82434</Token> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>890</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTSeguridad.RechazarExcepcion</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2017-12-20</Fecha> 
            <Hora>16:39:15</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTSeguridad.RechazarExcepcionResponse> 
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
        "Numero": "959", 
        "Estado": "OK", 
        "Servicio": "BTSeguridad.RechazarExcepcion", 
        "Fecha": "2017-12-22", 
        "Requerimiento": "", 
        "Hora": "10:58:58", 
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
<td>idExcepcion</td>
<td>Int</td>
<td>Identificador de excepción.</td>
</tr>
<tr>
<td>usuario</td>
<td>String</td>
<td>Usuario.</td>
</tr>
<tr>
<td>contraseña</td>
<td>String</td>
<td>Contraseña.</td>
</tr>
<tr>
<td>autoriza</td>
<td>String</td>
<td>Autoriza [Hidden: Valor fijo 'N' para este método].</td>
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
<td>Excepción asignada a otro Usuario</td>
</tr>
<tr>
<td>30011</td>
<td>No se recibió el identificador de excepción.</td>
</tr>
<tr>
<td>30012</td>
<td>No se recibió Usuario.</td>
</tr>
</tbody>
</table>
</div></template>


