<template><div><h1 id="obtener-cotizacion-cierre" tabindex="-1"><a class="header-anchor" href="#obtener-cotizacion-cierre"><span>Obtener Cotización Cierre</span></a></h1>
<p>Método para obtener la cotización del cierre.</p>
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
<td>BTPrecios.ObtenerCotizacionCierre</td>
<td>RBTPG841</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Cotizacion Cierre:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrecios.ObtenerCotizacionCierre> 
         <bts:Btinreq> 
            <bts:Token>f99a68ce154A8B5C60A82434</bts:Token> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>0</bts:Requerimiento> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Device>bms</bts:Device> 
         </bts:Btinreq> 
         <bts:monedaId>2</bts:monedaId> 
         <bts:fecha></bts:fecha> 
      </bts:BTPrecios.ObtenerCotizacionCierre> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://appjava2019:8106/supervielle/servlet/com.dlya.bantotal.odwsbt_BTPrecios_v1?ObtenerCotizacionCierre' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -d '{ 
    "Btinreq": { 
        "Device": "bms", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "0", 
        "Canal": "BTDIGITAL", 
        "Token": "f99a68ce154A8B5C60A82434" 
    }, 
    "monedaId": "2", 
    "fecha": "" 
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
      <BTPrecios.ObtenerCotizacionCierreResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>bms</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>0</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>f99a68ce154A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtCotizaciones> 
            <sBTCotizacion> 
               <venta>3.80</venta> 
               <monedaISO>U$S</monedaISO> 
               <compra>3.80</compra> 
               <identificador>2</identificador> 
            </sBTCotizacion> 
         </sdtCotizaciones> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>1118</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPrecios.ObtenerCotizacionCierre</Servicio> 
            <Requerimiento>0</Requerimiento> 
            <Fecha>2020-11-06</Fecha> 
            <Hora>12:04:22</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPrecios.ObtenerCotizacionCierreResponse> 
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
        "Token": "f99a68ce154A8B5C60A82434" 
    }, 
    "sdtCotizaciones": { 
        "sBTCotizacion": [ 
            { 
                "venta": 3.8, 
                "monedaISO": "U$S", 
                "compra": 3.8, 
                "identificador": 2 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 1120, 
        "Estado": "OK", 
        "Servicio": "BTPrecios.ObtenerCotizacionCierre", 
        "Requerimiento": "0", 
        "Fecha": "2020-11-06", 
        "Hora": "12:14:00", 
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
<td>monedaId</td>
<td>Short</td>
<td>Identificador de moneda. Si es vacío devuelve las cotizaciones de todas las monedas.</td>
</tr>
<tr>
<td>fecha</td>
<td>Date</td>
<td>Fecha de cotización. Si es vacía devuelve cotización al día de hoy.</td>
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
<td>sdtCotizaciones</td>
<td>sBTCotizacion</td>
<td>Listado de cotizaciones.</td>
</tr>
</tbody>
</table>
<p>El tipo de dato estructurado sBTCotizacion tiene los siguientes campos:</p>
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
<td>identificador</td>
<td>Short</td>
<td>Identificador de moneda.</td>
</tr>
<tr>
<td>monedaISO</td>
<td>String</td>
<td>Código ISO de la moneda.</td>
</tr>
<tr>
<td>compra</td>
<td>Double</td>
<td>Cotización Compra.</td>
</tr>
<tr>
<td>venta</td>
<td>Double</td>
<td>Cotización Venta.</td>
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
<td>El identificador de moneda se corresponde con la moneda nacional.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recuperó moneda para el identificador ingresado.</td>
</tr>
<tr>
<td>30003</td>
<td>No se recuperaron monedas.</td>
</tr>
</tbody>
</table>
</div></template>


