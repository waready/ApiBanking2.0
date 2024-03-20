<template><div><h1 id="obtener-detalle-de-proceso" tabindex="-1"><a class="header-anchor" href="#obtener-detalle-de-proceso"><span>Obtener Detalle de Proceso</span></a></h1>
<p>Método para obtener el detalle de un proceso de la cadena de cierre.</p>
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
<td>BTCadenaCierre.ObtenerDetalleProceso</td>
<td>RBTPG503</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Detalle de Proceso:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCadenaCierre.ObtenerDetalleProceso> 
         <bts:Btinreq> 
            <bts:Device>mc</bts:Device> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>6964034201CD285A89A23FBE</bts:Token> 
         </bts:Btinreq> 
         <bts:identificador>93</bts:identificador> 
      </bts:BTCadenaCierre.ObtenerDetalleProceso> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCadenaCierre?ObtenerDetalleProceso' \ 
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
	"identificador":"93", 
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
      <BTCadenaCierre.ObtenerDetalleProcesoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>mc</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>6964034201CD285A89A23FBE</Token> 
         </Btinreq> 
         <sBTProcesoBatch> 
            <identificador>93</identificador> 
            <nombre>POCDE002</nombre> 
            <descripcion>Busca Indicios OCODEí</descripcion> 
            <periodicidad>DIARIA</periodicidad> 
            <parametrosExtendidos>SI</parametrosExtendidos> 
            <esReprocesable>No reprocesar nunca</esReprocesable> 
         </sBTProcesoBatch> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>42156</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCadenaCierre.ObtenerDetalleProceso</Servicio> 
            <Fecha>2022-06-01</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>13:44:21</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCadenaCierre.ObtenerDetalleProcesoResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
      "Device": "mc", 
      "Usuario": "INSTALADOR", 
      "Requerimiento": "1", 
      "Canal": "BTDIGITAL", 
      "Token": "6964034201CD285A89A23FBE" 
    }, 
    "sBTProcesoBatch": { 
      "identificador": "93", 
      "nombre": "POCDE002", 
      "descripcion": "Busca Indicios OCODEí", 
      "periodicidad": "DIARIA", 
      "parametrosExtendidos": "SI", 
      "esReprocesable": "No reprocesar nunca" 
    }, 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
      "Numero": "42156", 
      "Estado": "OK", 
      "Servicio": "BTCadenaCierre.ObtenerDetalleProceso", 
      "Fecha": "2022-06-01", 
      "Requerimiento": "1", 
      "Hora": "13:44:21", 
      "Canal": "BTDIGITAL" 
    } 
  }, 
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
<td>identificador</td>
<td>Int</td>
<td>Identificador de proceso batch.</td>
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
<td>procesosBatch</td>
<td>sBTProcesoBatch</td>
<td>Proceso de cadena de cierre.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTProcesoBatch son los siguientes:</p>
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
<td>identificador</td>
<td>Int</td>
<td>Identificador de proceso batch.</td>
</tr>
<tr>
<td>nombre</td>
<td>String</td>
<td>Nombre del proceso.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Descripción.</td>
</tr>
<tr>
<td>periodicidad</td>
<td>String</td>
<td>Periodicidad.</td>
</tr>
<tr>
<td>parametrosExtendidos</td>
<td>String</td>
<td>¿Utiliza parámetros extendidos? (SI / NO)</td>
</tr>
<tr>
<td>esReprocesable</td>
<td>String</td>
<td>Descripción para reprocesamiento.</td>
</tr>
</tbody>
</table>
<h3 id="errores" tabindex="-1"><a class="header-anchor" href="#errores"><span>Errores</span></a></h3>
<p>No aplica.</p>
</div></template>


