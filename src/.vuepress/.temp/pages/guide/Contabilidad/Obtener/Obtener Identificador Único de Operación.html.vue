<template><div><h1 id="obtener-identificador-unico-de-operacion" tabindex="-1"><a class="header-anchor" href="#obtener-identificador-unico-de-operacion"><span>Obtener Identificador Único de Operación</span></a></h1>
<p>Método para obtener el identificador único de una operación.</p>
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
<td>BTContabilidad.ObtenerIdentificadorUnicoOperacion</td>
<td>RBTPG836</td>
<td>Global</td>
</tr>
</tbody>
</table>
<h3 id="configuracion-backend" tabindex="-1"><a class="header-anchor" href="#configuracion-backend"><span>Configuración Backend</span></a></h3>
<ol>
<li>Se puede parametrizar la opción general por módulo 1416. En caso de estar en 'S', se inhabilitará el control de existencia de la operación en la tabla FSD011.</li>
</ol>
<blockquote>
<p>Ejemplo de invocación al método Obtener Identificador Único de Operación:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTContabilidad.ObtenerIdentificadorUnicoOperacion> 
         <bts:Btinreq> 
            <bts:Device>bms</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>0</bts:Requerimiento> 
            <bts:Token>f99a68ce154A8B5C60A82434</bts:Token> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
         </bts:Btinreq> 
         <bts:empresaId>1</bts:empresaId> 
         <bts:moduloId>20</bts:moduloId> 
         <bts:sucursalId>100</bts:sucursalId> 
         <bts:monedaId>80</bts:monedaId> 
         <bts:papelId>0</bts:papelId> 
         <bts:cuentaBT>43</bts:cuentaBT> 
         <bts:operacionBT>0</bts:operacionBT> 
         <bts:subOperacionBT>8</bts:subOperacionBT> 
         <bts:tipoOperacionBT>48</bts:tipoOperacionBT> 
      </bts:BTContabilidad.ObtenerIdentificadorUnicoOperacion> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
    'http://appjava2019:8106/supervielle/servlet/com.dlya.bantotal.odwsbt_BTContabilidad_v1?ObtenerIdentificadorUnicoOperacion' \ 
    -H 'cache-control: no-cache' \ 
    -H 'content-type: application/json' \ 
    -d '{ 
    "Btinreq": { 
        "Device": "bms", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "0", 
        "Canal": "BTDIGITAL", 
        "Token": "faa36bd33f4A8B5C60A82434" 
    }, 
    "empresaId": "1", 
    "moduloId": "20", 
    "sucursalId": "100", 
    "monedaId": "80", 
    "papelId": "0", 
    "cuentaBT": "43", 
    "operacionBT": "0", 
    "subOperacionBT": "8", 
    "tipoOperacionBT": "48" 
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
      <BTContabilidad.ObtenerIdentificadorUnicoOperacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>bms</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>0</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>f99a68ce154A8B5C60A82434</Token> 
         </Btinreq> 
         <operacionUId>1</operacionUId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>1102</Numero> 
            <Servicio>BTContabilidad.ObtenerIdentificadorUnicoOperacion</Servicio> 
            <Estado>OK</Estado> 
            <Fecha>2020-10-30</Fecha> 
            <Requerimiento>0</Requerimiento> 
            <Hora>20:27:14</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTContabilidad.ObtenerIdentificadorUnicoOperacionResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
        "Device": "bms", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "0", 
        "Canal": "BTDIGITAL", 
        "Token": "faa36bd33f4A8B5C60A82434" 
    }, 
    "operacionUId": 1, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 1110, 
        "Servicio": "BTContabilidad.ObtenerIdentificadorUnicoOperacion", 
        "Estado": "OK", 
        "Fecha": "2020-11-03", 
        "Requerimiento": "0", 
        "Hora": "10:12:26", 
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
<td>sucursalId</td>
<td>Int</td>
<td>Identificador de sucursal.</td>
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
<tr>
<td>cuentaBT</td>
<td>Int</td>
<td>Cuenta Bantotal.</td>
</tr>
<tr>
<td>operacionBT</td>
<td>Int</td>
<td>Operación Bantotal.</td>
</tr>
<tr>
<td>subOperacionBT</td>
<td>Int</td>
<td>Sub Operación Bantotal.</td>
</tr>
<tr>
<td>tipoOperacionBT</td>
<td>Short</td>
<td>Tipo de operación Bantotal.</td>
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
<td>operacionUId</td>
<td>Long</td>
<td>Identificador único de operación.</td>
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
<td>No se recibió empresaId.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recibió módulo.</td>
</tr>
<tr>
<td>30003</td>
<td>No se recibió sucursal.</td>
</tr>
<tr>
<td>30004</td>
<td>Moneda no existe.</td>
</tr>
<tr>
<td>30005</td>
<td>Papel no existe.</td>
</tr>
<tr>
<td>30006</td>
<td>No se recibió cuenta de cliente.</td>
</tr>
<tr>
<td>30007</td>
<td>No se recibió operación.</td>
</tr>
<tr>
<td>30008</td>
<td>No se recibió sub operación.</td>
</tr>
<tr>
<td>30009</td>
<td>No se recibió tipo de operación.</td>
</tr>
<tr>
<td>30010</td>
<td>Operación no existe.</td>
</tr>
</tbody>
</table>
</div></template>


