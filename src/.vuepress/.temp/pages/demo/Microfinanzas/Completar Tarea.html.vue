<template><div><h1 id="completar-tarea" tabindex="-1"><a class="header-anchor" href="#completar-tarea"><span>Completar Tarea</span></a></h1>
<p>Método para completar la tarea de solicitud de créditos y pasar a la etapa de evaluación.</p>
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
<td>BTMicrofinanzas.CompletarTarea</td>
<td>RBTPG418</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Completar Tarea:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTMicrofinanzas.CompletarTarea> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>95</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>1130594463CD285A89A23FBE</bts:Token> 
            <bts:Device>GP</bts:Device> 
         </bts:Btinreq> 
         <bts:solicitudUId>11109</bts:solicitudUId> 
      </bts:BTMicrofinanzas.CompletarTarea> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?CompletarTarea \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
   "bts:Btinreq": { 
      "bts:Canal": "BTDIGITAL", 
      "bts:Requerimiento": "95", 
      "bts:Usuario": "INSTALADOR", 
      "bts:Token": "1130594463CD285A89A23FBE", 
      "bts:Device": "GP" 
   }, 
   "solicitudUId": "11109" 
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
      <BTMicrofinanzas.CompletarTareaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>95</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>1130594463CD285A89A23FBE</Token> 
            <Device>GP</Device> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTMicrofinanzas.CompletarTarea</Servicio> 
            <Fecha>2019-11-05</Fecha> 
            <Hora>15:16:15</Hora> 
            <Requerimiento>95</Requerimiento> 
            <Numero>1591</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTMicrofinanzas.CompletarTareaResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
'{ 
   "Btinreq": { 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "95", 
      "Usuario": "INSTALADOR", 
      "Token": "1130594463CD285A89A23FBE", 
      "Device": "GP" 
   }, 
   "Btoutreq": { 
      "Canal": "BTDIGITAL", 
      "Servicio": "BTMicrofinanzas.CompletarTarea", 
      "Fecha": "2019-11-05", 
      "Hora": "15:16:15", 
      "Requerimiento": "95", 
      "Numero": "1591", 
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
<td>solicitudUId</td>
<td>Long</td>
<td>Identificador de instancia Workflow.</td>
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
<td>No se recibió el identificador de solicitud.</td>
</tr>
<tr>
<td>30011</td>
<td>No es posible completar la tarea. Se debe validar políticas previamente.</td>
</tr>
<tr>
<td>30012</td>
<td>No es posible completar la tarea. Existen políticas incumplidas.</td>
</tr>
<tr>
<td>30013</td>
<td>No es posible completar la tarea. No se pudo determinar el modelo de evaluación crediticia.</td>
</tr>
</tbody>
</table>
</div></template>


