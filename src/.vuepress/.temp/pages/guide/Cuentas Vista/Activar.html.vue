<template><div><h1 id="activar" tabindex="-1"><a class="header-anchor" href="#activar"><span>Activar</span></a></h1>
<p>Método para activar una cuenta vista.</p>
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
<td>BTCuentasVista.Activar</td>
<td>RBTPG442</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Activar:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasVista.Activar> 
         <bts:Btinreq> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Device>GP</bts:Device> 
            <bts:Token>2772EB28927EAC58EF950EBA</bts:Token> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
         </bts:Btinreq> 
         <bts:operacionUId>1215</bts:operacionUId> 
         <bts:fechaFencimientoEstado></bts:fechaFencimientoEstado> 
         <bts:observaciones>Cuenta Activa</bts:observaciones> 
      </bts:BTCuentasVista.Activar> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasVista?Activar' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
  -d '{ 
	"Btinreq": { 
          "Requerimiento": 1, 
          "Device": "GP", 
          "Token": "2772EB28927EAC58EF950EBA", 
          "Usuario": "INSTALADOR", 
          "Canal": "BTDIGITAL" 
        }, 
        "operacionUId": 1215, 
        "fechaFencimientoEstado": "", 
        "observaciones": "Cuenta Activa" 
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
      <BTCuentasVista.ActivarResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Token>2772EB28927EAC58EF950EBA</Token> 
            <Canal>BTDIGITAL</Canal> 
            <Device>GP</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Estado>OK</Estado> 
            <Canal>BTDIGITAL</Canal> 
            <Fecha>2022-12-01</Fecha> 
            <Servicio>BTCuentasVista.CambiarEstado</Servicio> 
            <Hora>14:44:52</Hora> 
            <Numero>225689</Numero> 
            <Requerimiento>1</Requerimiento> 
         </Btoutreq> 
      </BTCuentasVista.ActivarResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
          "Token": "2772EB28927EAC58EF950EBA", 
          "Canal": "BTDIGITAL", 
          "Device": "GP", 
          "Usuario": "INSTALADOR", 
          "Requerimiento": 1 
        }, 
        "Erroresnegocio": "", 
        "Btoutreq": { 
          "Estado": "OK", 
          "Canal": "BTDIGITAL", 
          "Fecha": "2022-12-01", 
          "Servicio": "BTCuentasVista.CambiarEstado", 
          "Hora": "14:44:52", 
          "Numero": 225689, 
          "Requerimiento": 1 
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
<td>operacionUId</td>
<td>Long</td>
<td>Identificador único de operación.</td>
</tr>
<tr>
<td>nuevoEstado</td>
<td>Short</td>
<td>Nuevo estado [Hidden: Valor fijo 0].</td>
</tr>
<tr>
<td>fechaVencimientoEstado</td>
<td>Date</td>
<td>Fecha de vencimiento del estado.</td>
</tr>
<tr>
<td>observaciones</td>
<td>String</td>
<td>Observaciones.</td>
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
<td>No se recibió el identificador único de Operacion..</td>
</tr>
<tr>
<td>30002</td>
<td>No se recuperó la Operacion para el Identificador: [Número de Identificador].</td>
</tr>
</tbody>
</table>
</div></template>


