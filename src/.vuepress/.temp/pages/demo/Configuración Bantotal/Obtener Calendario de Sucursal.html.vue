<template><div><h1 id="obtener-calendario-de-sucursal" tabindex="-1"><a class="header-anchor" href="#obtener-calendario-de-sucursal"><span>Obtener Calendario de Sucursal</span></a></h1>
<p>Método para obtener el calendario de una sucursal.</p>
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
<td>BTConfiguracionBantotal.ObtenerCalendarioDeSucursal</td>
<td>RBTPG283</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Calendario de Sucursal:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTConfiguracionBantotal.ObtenerCalendarioDeSucursal> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Usuario>MI</bts:Usuario> 
            <bts:Device>MC</bts:Device> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Token>200f0b88B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:sucursalId>1000</bts:sucursalId> 
      </bts:BTConfiguracionBantotal.ObtenerCalendarioDeSucursal> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X GET \ 
   'http://appjava2019:8106/supervielle/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal_v1?ObtenerCalendarioDeSucursal' \ 
   -H 'cache-control: no-cache' \ 
   -H 'content-type: application/json' \ 
   -d '{ 
   "Btinreq": { 
        "Device": "MC", 
        "Usuario": "MI", 
        "Requerimiento": "1", 
        "Canal": "BTDIGITAL", 
        "Token": "200f0b88B5C60A82434" 
    }, 
	"sucursalId":1000 
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
      <BTConfiguracionBantotal.ObtenerCalendarioDeSucursalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>MC</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>200f0b88B5C60A82434</Token> 
         </Btinreq> 
         <descripcionSucursal>Sucursal Ciudad de la Costa</descripcionSucursal> 
         <sdtCalendario> 
            <descripcion>Calendario 1</descripcion> 
            <identificador>1</identificador> 
         </sdtCalendario> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>109092</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTConfiguracionBantotal.ObtenerCalendarioDeSucursal</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2020-11-24</Fecha> 
            <Canal>BTDIGITAL</Canal> 
            <Hora>09:20:38</Hora> 
         </Btoutreq> 
      </BTConfiguracionBantotal.ObtenerCalendarioDeSucursalResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
        "Device": "MC", 
        "Usuario": "MI", 
        "Requerimiento": "1", 
        "Canal": "BTDIGITAL", 
        "Token": "200f0b88B5C60A82434" 
    }, 
	"descripcionSucursal":"Sucursal Ciudad de la Costa", 
    "sdtCalendario": { 
        "descripcion":"Calendario 1", 
        "identificador":1 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 109092, 
        "Servicio": "BTConfiguracionBantotal.ObtenerCalendarioDeSucursal", 
        "Estado": "OK", 
        "Fecha": "2020-11-24", 
        "Requerimiento": "0", 
        "Hora": "14:13:38", 
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
<td>sucursalId</td>
<td>Int</td>
<td>Identificador de sucursal.</td>
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
<td>descripcionSucursal</td>
<td>String</td>
<td>Descripción de la sucursal.</td>
</tr>
<tr>
<td>sdtCalendario</td>
<td>sBTCalendario</td>
<td>Calendario de la sucursal.</td>
</tr>
</tbody>
</table>
<p>El tipo de dato estructurado sBTCalendario tiene los siguientes campos:</p>
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
<td>Código del calendario.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Descripcion del calendario.</td>
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
<td>No se recibió identificador de sucursal.</td>
</tr>
<tr>
<td>40001</td>
<td>No existe sucursal con el identificador ingresado.</td>
</tr>
</tbody>
</table>
</div></template>


