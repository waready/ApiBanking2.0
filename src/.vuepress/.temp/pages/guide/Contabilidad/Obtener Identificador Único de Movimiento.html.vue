<template><div><h1 id="obtener-identificador-unico-de-movimiento" tabindex="-1"><a class="header-anchor" href="#obtener-identificador-unico-de-movimiento"><span>Obtener Identificador Único de Movimiento</span></a></h1>
<p>Método para obtener el identificador único de un movimiento contable.</p>
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
<td>BTContabilidad.ObtenerIdentificadorUnicoMovimiento</td>
<td>RBTPG835</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Identificador Único de Movimiento:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTContabilidad.ObtenerIdentificadorUnicoMovimiento> 
         <bts:Btinreq> 
            <bts:Device>bms</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>0</bts:Requerimiento> 
            <bts:Token>f99a68ce154A8B5C60A82434</bts:Token> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
         </bts:Btinreq> 
         <bts:empresaId>1</bts:empresaId> 
         <bts:sucursalId>1</bts:sucursalId> 
         <bts:moduloId>18</bts:moduloId> 
         <bts:transaccionId>402</bts:transaccionId> 
         <bts:relacion>1</bts:relacion> 
         <bts:fechaContabilizacion>2013-01-02</bts:fechaContabilizacion> 
      </bts:BTContabilidad.ObtenerIdentificadorUnicoMovimiento> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://appjava2019:8106/supervielle/servlet/com.dlya.bantotal.odwsbt_BTContabilidad_v1?ObtenerIdentificadorUnicoMovimiento' \ 
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
    "sucursalId": "1", 
    "moduloId": "18", 
    "transaccionId": "402", 
    "relacion": "1", 
    "fechaContabilizacion": "2013-01-02" 
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
      <BTContabilidad.ObtenerIdentificadorUnicoMovimientoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>bms</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>0</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>f99a68ce154A8B5C60A82434</Token> 
         </Btinreq> 
         <movimientoUId>1</movimientoUId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>1100</Numero> 
            <Servicio>BTContabilidad.ObtenerIdentificadorUnicoMovimiento</Servicio> 
            <Estado>OK</Estado> 
            <Fecha>2020-10-30</Fecha> 
            <Requerimiento>0</Requerimiento> 
            <Hora>19:20:12</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTContabilidad.ObtenerIdentificadorUnicoMovimientoResponse> 
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
    "movimientoUId": 1, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 1105, 
        "Servicio": "BTContabilidad.ObtenerIdentificadorUnicoMovimiento", 
        "Estado": "OK", 
        "Fecha": "2020-11-02", 
        "Requerimiento": "0", 
        "Hora": "18:08:09", 
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
<td>sucursalId</td>
<td>Int</td>
<td>Identificador de sucursal.</td>
</tr>
<tr>
<td>moduloId</td>
<td>Int</td>
<td>Módulo Bantotal.</td>
</tr>
<tr>
<td>transaccionId</td>
<td>Int</td>
<td>Identificador de transacción Bantotal.</td>
</tr>
<tr>
<td>relacion</td>
<td>Int</td>
<td>Relación.</td>
</tr>
<tr>
<td>fechaContabilizacion</td>
<td>Date</td>
<td>Fecha de contabilización.</td>
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
<td>movimientoUId</td>
<td>Long</td>
<td>Identificador único de movimiento (asiento).</td>
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
<td>No se recibió empresa.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recibió sucursal.</td>
</tr>
<tr>
<td>30003</td>
<td>No se recibió módulo.</td>
</tr>
<tr>
<td>30004</td>
<td>No se recibió transacción.</td>
</tr>
<tr>
<td>30005</td>
<td>No se recibió relación.</td>
</tr>
<tr>
<td>30006</td>
<td>No se recibió fecha de contabilización.</td>
</tr>
<tr>
<td>30007</td>
<td>Movimiento no existe.</td>
</tr>
</tbody>
</table>
</div></template>


