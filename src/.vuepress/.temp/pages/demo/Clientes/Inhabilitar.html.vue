<template><div><h1 id="inhabilitar" tabindex="-1"><a class="header-anchor" href="#inhabilitar"><span>Inhabilitar</span></a></h1>
<p>Método para inhabilitar una cuenta que se encuentra habilitada.</p>
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
<td>BTClientes.Inhabilitar</td>
<td>RBTPG498</td>
<td>Institucional</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Inhabilitar:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTClientes.Inhabilitar> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>47D750A861C4243EDE981344</bts:Token> 
            <bts:Device>GP</bts:Device> 
         </bts:Btinreq> 
         <bts:clienteUId>10009</bts:clienteUId> 
         <bts:motivo>3</bts:motivo> 
         <bts:justificacion>Prueba</bts:justificacion> 
      </bts:BTClientes.Inhabilitar> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
https://appjava2019:8067/bancowdesa/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?Inhabilitar \ 
-H 'cache-control: no-cache' \ 
-H 'content-type: application/json' \ 
-d '{ 
    "Btinreq": { 
      "Canal": "BTDIGITAL", 
      "Usuario": "INSTALADOR", 
      "Device": "GP", 
      "Requerimiento": "1", 
      "Token": "200f0b8b654A8B5C60A82434" 
    }, 
   "clienteUId": 10009, 
   "motivo": 3, 
   "justificacion": "Prueba"  
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
      <BTClientes.InhabilitarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>47D750A861C4243EDE981344</Token> 
            <Device>GP</Device> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTClientes.Inhabilitar</Servicio> 
            <Fecha>2022-11-17</Fecha> 
            <Hora>11:46:15</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>463</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTClientes.InhabilitarResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
' 
{ 
    "Btinreq": { 
	  "Device": "GP", 
	  "Usuario": "INSTALADOR", 
	  "Requerimiento": "1", 
	  "Canal": "BTDIGITAL", 
	  "Token": "47D750A861C4243EDE981344" 
	}, 
	"Erroresnegocio": { 
        "BTErrorNegocio": [] 
	}, 
	"Btoutreq": { 
	  "Numero": "109140", 
	  "Estado": "OK", 
	  "Servicio": "BTClientes.Inhabilitar", 
	  "Requerimiento": "1", 
	  "Fecha": "2022-11-17", 
	  "Canal": "BTDIGITAL", 
	  "Hora": "11:46:15" 
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
<td>clienteUId</td>
<td>Long</td>
<td>Identificador único de cliente.</td>
</tr>
<tr>
<td>motivo</td>
<td>Short</td>
<td>Código de motivo de inhabilitación.</td>
</tr>
<tr>
<td>justificacion</td>
<td>String</td>
<td>Justificación de la inhabilitación.</td>
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
<td>Debe ingresar identificador de cliente.</td>
</tr>
<tr>
<td>30002</td>
<td>Debe ingresar motivo de inhabilitación.</td>
</tr>
<tr>
<td>30003</td>
<td>Debe ingresar justificación.</td>
</tr>
<tr>
<td>40001</td>
<td>No se puede inhabilitar la cuenta porque está cerrada.</td>
</tr>
<tr>
<td>40002</td>
<td>La cuenta ya se encuentra inhabilitada.</td>
</tr>
<tr>
<td>40003</td>
<td>La cuenta ingresada no existe.</td>
</tr>
<tr>
<td>40004</td>
<td>No se puede cambiar estado porque la cuenta tiene saldos.</td>
</tr>
<tr>
<td>40005</td>
<td>El motivo ya se encuentra ingresado.</td>
</tr>
<tr>
<td>40006</td>
<td>El motivo ingresado no existe.</td>
</tr>
</tbody>
</table>
</div></template>


