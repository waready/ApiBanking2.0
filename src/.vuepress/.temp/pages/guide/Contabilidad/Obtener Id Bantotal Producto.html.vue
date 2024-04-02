<template><div><h1 id="obtener-id-bantotal-producto" tabindex="-1"><a class="header-anchor" href="#obtener-id-bantotal-producto"><span>Obtener Id Bantotal Producto</span></a></h1>
<p>Método para obtener la clave de identificación Bantotal de un producto.</p>
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
<td>BTContabilidad.ObtenerIdBantotalProducto</td>
<td>RBTPG450</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener id Bantotal Producto:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTContabilidad.ObtenerIdBantotalProducto> 
         <bts:Btinreq> 
            <bts:Requerimiento>0</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Device>papa</bts:Device> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>A917FB55555C334FB65C4E0C</bts:Token> 
         </bts:Btinreq> 
         <bts:productoUId>187</bts:productoUId> 
      </bts:BTContabilidad.ObtenerIdBantotalProducto> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTContabilidad?ObtenerIdBantotalProducto' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
  -d '{ 
	"Btinreq": { 
          "Requerimiento": 0, 
          "Canal": "BTDIGITAL", 
          "Device": "papa", 
          "Usuario": "INSTALADOR", 
          "Token": "A917FB55555C334FB65C4E0C" 
        }, 
        "productoUId": 187 
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
      <BTContabilidad.ObtenerIdBantotalProductoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Requerimiento>0</Requerimiento> 
            <Device>papa</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>A917FB55555C334FB65C4E0C</Token> 
            <Canal>BTDIGITAL</Canal> 
         </Btinreq> 
         <empresa>1</empresa> 
         <modulo>101</modulo> 
         <tipoOperacion>3</tipoOperacion> 
         <moneda>0</moneda> 
         <papel>50</papel> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Requerimiento>0</Requerimiento> 
            <Estado>OK</Estado> 
            <Fecha>2022-10-27</Fecha> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTContabilidad.ObtenerIdBantotalProducto</Servicio> 
            <Hora>14:46:26</Hora> 
            <Numero>225416</Numero> 
         </Btoutreq> 
      </BTContabilidad.ObtenerIdBantotalProductoResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
'{ 
        "Btinreq": { 
          "Requerimiento": 0, 
          "Device": "papa", 
          "Usuario": "INSTALADOR", 
          "Token": "A917FB55555C334FB65C4E0C", 
          "Canal": "BTDIGITAL" 
        }, 
        "empresa": 1, 
        "modulo": 101, 
        "tipoOperacion": 3, 
        "moneda": 0, 
        "papel": 50, 
        "Erroresnegocio": "", 
        "Btoutreq": { 
          "Requerimiento": 0, 
          "Estado": "OK", 
          "Fecha": "2022-10-27", 
          "Canal": "BTDIGITAL", 
          "Servicio": "BTContabilidad.ObtenerIdBantotalProducto", 
          "Hora": "14:46:26", 
          "Numero": 225416 
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
<td>productoUId</td>
<td>Long</td>
<td>Identificador único de producto.</td>
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
<td>empresaId</td>
<td>Short</td>
<td>Identificador de empresa.</td>
</tr>
<tr>
<td>moduloId</td>
<td>Int</td>
<td>Módulo Bantotal.</td>
</tr>
<tr>
<td>tipoOperacionBT</td>
<td>Short</td>
<td>Tipo de operación Bantotal.</td>
</tr>
<tr>
<td>monedaId</td>
<td>Short</td>
<td>Identificador de moneda.</td>
</tr>
<tr>
<td>papelId</td>
<td>Int</td>
<td>Identificador de papel.</td>
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
<td>No se recibió productoUId.</td>
</tr>
<tr>
<td>40001</td>
<td>No existe una empresa con los datos ingresados.</td>
</tr>
<tr>
<td>40002</td>
<td>No se pudo resolver la empresa del usuario.</td>
</tr>
<tr>
<td>40003</td>
<td>No existe registro para el identificador único.</td>
</tr>
<tr>
<td>40004</td>
<td>No existe registro para el producto indicado.</td>
</tr>
</tbody>
</table>
</div></template>


