<template><div><h1 id="obtener-tarjeta" tabindex="-1"><a class="header-anchor" href="#obtener-tarjeta"><span>Obtener Tarjeta</span></a></h1>
<p>Método para devolver la tarjeta encriptada segun las normas PCI.</p>
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
<td>BTTarjetasDeDebito.ObtenerTarjetas</td>
<td>RBTPG805</td>
<td>Global</td>
</tr>
</tbody>
</table>
<h3 id="configuracion-backend" tabindex="-1"><a class="header-anchor" href="#configuracion-backend"><span>Configuración Backend</span></a></h3>
<ol>
<li>Se debe parametrizar el programa particular que resuelve la encriptación de la tarjeta en la FST900 con programa estándar RBTSTD13.</li>
</ol>
<blockquote>
<p>Ejemplo de invocación al método Obtener Obtener Tarjetas:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTTarjetasDeDebito.ObtenerTarjeta> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>BANTOTAL</bts:Usuario> 
            <bts:Token>933853107F955E77534D3E02</bts:Token> 
            <bts:Device>GL</bts:Device> 
         </bts:Btinreq> 
         <bts:personaUID>679</bts:personaUID> 
         <bts:tarjetaUID>2000001751</bts:tarjetaUID> 
      </bts:BTTarjetasDeDebito.ObtenerTarjeta> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito?ObtenerTarjetas' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
  -d '{ 
	"Btinreq": { 
          "Canal": "BTDIGITAL", 
          "Requerimiento": 1, 
          "Usuario": "BANTOTAL", 
          "Token": "933853107F955E77534D3E02", 
          "Device": "GL" 
        }, 
        "personaUID": 679, 
        "tarjetaUID": 2000001751 
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
      <BTTarjetasDeDebito.ObtenerTarjetaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>BANTOTAL</Usuario> 
            <Token>933853107F955E77534D3E02</Token> 
            <Device>GL</Device> 
         </Btinreq> 
         <Tarjeta>Z0YQCOAcMVX8Z40fu1vi/zbnphu39GQ4bbgWcnjXc7k=</Tarjeta> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTTarjetasDeDebito.ObtenerTarjeta</Servicio> 
            <Fecha>2022-11-30</Fecha> 
            <Hora>15:37:32</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>887444</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTTarjetasDeDebito.ObtenerTarjetaResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
          "Canal": "BTDIGITAL", 
          "Requerimiento": 1, 
          "Usuario": "BANTOTAL", 
          "Token": "933853107F955E77534D3E02", 
          "Device": "GL" 
        }, 
        "Tarjeta": "Z0YQCOAcMVX8Z40fu1vi/zbnphu39GQ4bbgWcnjXc7k=", 
        "Erroresnegocio": "", 
        "Btoutreq": { 
          "Canal": "BTDIGITAL", 
          "Servicio": "BTTarjetasDeDebito.ObtenerTarjeta", 
          "Fecha": "2022-11-30", 
          "Hora": "15:37:32", 
          "Requerimiento": 1, 
          "Numero": 887444, 
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
<td>personaUId</td>
<td>Long</td>
<td>Identificador único de persona.</td>
</tr>
<tr>
<td>tarjetaUId</td>
<td>Long</td>
<td>Identificador único de tarjeta.</td>
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
<td>tarjeta</td>
<td>String</td>
<td>Tarjeta encriptada.</td>
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
<td>No se recibió el identificador único de persona.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recibió el Identificador de Tarjeta.</td>
</tr>
</tbody>
</table>
</div></template>


