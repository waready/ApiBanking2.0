<template><div><h1 id="agregar-texto-ordinal" tabindex="-1"><a class="header-anchor" href="#agregar-texto-ordinal"><span>Agregar Texto Ordinal</span></a></h1>
<p>Método para agregar un texto a un ordinal de un asiento.</p>
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
<td>BTContabilidad.AgregarTextoOrdinal</td>
<td>RBTPG388</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio de Agregar Texto Ordinal:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTContabilidad.AgregarTextoOrdinal> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>12106639094A8B5C60A82434</bts:Token> 
            <bts:Device>GP</bts:Device> 
         </bts:Btinreq> 
         <bts:movimientoUId>36</bts:movimientoUId> 
         <bts:ordinal>10</bts:ordinal> 
         <bts:textoMovimiento> 
            <bts:codigo>20</bts:codigo> 
            <bts:descripcion>Prueba</bts:descripcion> 
            <bts:renglon>1</bts:renglon> 
            <bts:texto>Prueba</bts:texto> 
         </bts:textoMovimiento> 
      </bts:BTContabilidad.AgregarTextoOrdinal> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTContabilidad?AgregarTextoOrdinal' \ 
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
    "movimientoUId": "36", 
    "ordinal": "10", 
    "textoMovimiento": { 
        "codigo": "20", 
        "descripcion": "Prueba", 
        "renglon": "1", 
        "texto": "Prueba", 
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
      <BTContabilidad.AgregarTextoOrdinalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>MINSTALADOR</Usuario> 
            <Token>12106639094A8B5C60A82434</Token> 
            <Device>GP</Device> 
         </Btinreq> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTContabilidad.AgregarTextoOrdinal</Servicio> 
            <Fecha>2022-06-01</Fecha> 
            <Hora>13:12:48</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>8867</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTContabilidad.AgregarTextoOrdinalResponse> 
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
        "Servicio": "BTContabilidad.AgregarTextoOrdinal", 
        "Requerimiento": "1", 
        "Fecha": "2022-05-12", 
        "Hora": "15:35:54", 
        "Canal": "BTDIGITAL" 
    } 
} 
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
<td>movimientoUId</td>
<td>Long</td>
<td>Identificador único del asiento.</td>
</tr>
<tr>
<td>ordinal</td>
<td>Short</td>
<td>Ordinal.</td>
</tr>
<tr>
<td>textoMovimiento</td>
<td>sBTTextoMovimiento</td>
<td>Datos del texto del movimiento.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTTextoMovimiento son los siguientes:</p>
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
<td>codigo</td>
<td>Short</td>
<td>Código del texto.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Descripción del tipo de texto.</td>
</tr>
<tr>
<td>renglon</td>
<td>Short</td>
<td>Renglón.</td>
</tr>
<tr>
<td>texto</td>
<td>String</td>
<td>Texto asociado.</td>
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
<td>No se recibió identificador de movimiento.</td>
</tr>
<tr>
<td>50001</td>
<td>El código de texto ingresado no existe.</td>
</tr>
<tr>
<td>50002</td>
<td>El ordinal ingresado no existe.</td>
</tr>
<tr>
<td>50003</td>
<td>Ya existe el texto ingresado.</td>
</tr>
</tbody>
</table>
</div></template>


