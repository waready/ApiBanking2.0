<template><div><h1 id="cargar-archivo-recibido-como-dato" tabindex="-1"><a class="header-anchor" href="#cargar-archivo-recibido-como-dato"><span>Cargar Archivo Recibido Como Dato</span></a></h1>
<p>Método para cargar un archivo recibido como dato.</p>
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
<td>BTCASHManagement.CargarArchivoDato</td>
<td>RBTPG360D</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio Cargar Archivo Recibido Como Dato:</p>
</blockquote>
<code-group> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement_v1?CargarArchivoDato \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
        "Btinreq": { 
          "Device": "AV", 
          "Usuario": "MINSTALADOR", 
          "Canal": "BTDIGITAL", 
          "Token": "658fcb0b034A8B5C60A82434" 
        }, 
		"contrato":6, 
		"servicio":50, 
		"archivo" : "Proveedores201910", 
		"archivoDato" : "SDtQUk9WRUVEMTsxMDE7MjU7MzAvMDUvMjAxOTsyMDAwNTE4NDgxOzsyOwpEOzI7NDQ2Njg4NTUxMTsgREFOSUVMIFNBUlJ" 
}' 
``` 
</code-block> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCASHManagement.CargarArchivoDato> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>311020191114150000216393</bts:Token> 
            <bts:Device>001</bts:Device> 
         </bts:Btinreq> 
         <bts:contrato>6</bts:contrato> 
         <bts:servicio>50</bts:servicio> 
         <bts:archivo>Proveedores201910</bts:archivo> 
         <bts:archivoDato>SDtQUk9WRUVEMTsxMDE7MjU7MzAvMDUvMjAxOTsyMDAwNTE4NDgxOzsyOwpEOzI7NDQ2Njg4NTUxMTsgREFOSUVMIFNBUlJ</bts:archivoDato> 
      </bts:BTCASHManagement.CargarArchivoDato> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
</code-group> 
<blockquote>
<p>El POST retornará la siguiente estructura:</p>
</blockquote>
<code-group> 
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
	"archivoId":105, 
	"estado" : "N", 
	"cantidadLineas":3, 
	"Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "13299", 
        "Estado": "OK", 
        "Servicio": "BTCASHManagement.CargarArchivoDato", 
        "Fecha": "2019-04-24", 
        "Requerimiento": "", 
        "Hora": "10:35:16", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
<code-block title="XML" active> 
```xml 
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   <SOAP-ENV:Body> 
      <BTCASHManagement.CargarArchivoDatoResponse> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>MINSTALADOR</Usuario> 
            <Token>311020191114150000216393</Token> 
            <Device>001</Device> 
         </Btinreq> 
         <archivoId>105</archivoId> 
         <estado>N</estado> 
         <cantidadLineas>3</cantidadLineas> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTCASHManagement.CargarArchivoDato</Servicio> 
            <Fecha>2019-10-31</Fecha> 
            <Hora>12:46:33</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>654</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTCASHManagement.CargarArchivoDatoResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
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
<td>contrato</td>
<td>Int</td>
<td>Identificador del contrato CASH del cliente.</td>
</tr>
<tr>
<td>servicio</td>
<td>Short</td>
<td>Servicio de pago CASH.</td>
</tr>
<tr>
<td>archivo</td>
<td>String</td>
<td>Nombre del archivo a subir.</td>
</tr>
<tr>
<td>archivoDato</td>
<td>String</td>
<td>Archivo recibido como dato comprimido expresado en Base 64.</td>
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
<td>archivoId</td>
<td>Long</td>
<td>Identificacion de archivo.</td>
</tr>
<tr>
<td>estado</td>
<td>String</td>
<td>Estado del archivo.</td>
</tr>
<tr>
<td>cantidadLineas</td>
<td>Int</td>
<td>Cantidad de líneas del archivo.</td>
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
<td>1030701</td>
<td>El Servicio no existe.</td>
</tr>
<tr>
<td>1030702</td>
<td>El archivo esta vacio.</td>
</tr>
<tr>
<td>1030703</td>
<td>No hay informacion en el archivo.</td>
</tr>
<tr>
<td>1030710</td>
<td>Error interno al procesar.</td>
</tr>
<tr>
<td>1030715</td>
<td>No se procesa, este archivo ya fue recibido y procesado.</td>
</tr>
<tr>
<td>1030720</td>
<td>Error procesando el archivo. Ver detalle.</td>
</tr>
</tbody>
</table>
</div></template>


