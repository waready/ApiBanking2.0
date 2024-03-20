<template><div><h1 id="habilitar" tabindex="-1"><a class="header-anchor" href="#habilitar"><span>Habilitar</span></a></h1>
<p>Método para habilitar una cuenta que se encuentra inhabilitada.</p>
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
<td>BTClientes.Habilitar</td>
<td>RBTPG499</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Habilitar:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTClientes.Habilitar> 
         <bts:Btinreq> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Device>GP</bts:Device> 
            <bts:Token>f3fced1925CD285A89A23FBE</bts:Token> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
         </bts:Btinreq> 
         <bts:clienteUId>882</bts:clienteUId> 
      </bts:BTClientes.Habilitar> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes?Habilitar' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "GP", 
		"Usuario": "INSTALADOR", 
		"Requerimiento": "1", 
		"Canal": "BTDIGITAL", 
		"Token": "f3fced1925CD285A89A23FBE" 
	}, 
	"clienteUId": 882, 
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
      <BTClientes.HabilitarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GP</Device> 
            <Token>f3fced1925CD285A89A23FBE</Token> 
            <Canal>BTDIGITAL</Canal> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Requerimiento>1</Requerimiento> 
            <Numero>16651</Numero> 
            <Servicio>BTClientes.Habilitar</Servicio> 
            <Hora>08:58:44</Hora> 
            <Canal>BTDIGITAL</Canal> 
            <Fecha>2022-10-04</Fecha> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTClientes.HabilitarResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
'{ 
	 "Btinreq": { 
        "Device": "GP", 
        "Token": "f3fced1925CD285A89A23FBE", 
        "Canal": "BTDIGITAL", 
        "Usuario": "INSTALADOR", 
        "Requerimiento": "1" 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Requerimiento": "1", 
        "Numero": "16651", 
        "Servicio": "BTClientes.Habilitar", 
        "Hora": "08:58:44", 
        "Canal": "BTDIGITAL", 
        "Fecha": "2022-10-04", 
        "Estado": "OK" 
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
<td>40001</td>
<td>No se puede habilitar la cuenta porque está cerrada.</td>
</tr>
<tr>
<td>40002</td>
<td>La cuenta ya se encuentra habilitada.</td>
</tr>
<tr>
<td>40003</td>
<td>La cuenta ingresada no existe.</td>
</tr>
</tbody>
</table>
</div></template>


