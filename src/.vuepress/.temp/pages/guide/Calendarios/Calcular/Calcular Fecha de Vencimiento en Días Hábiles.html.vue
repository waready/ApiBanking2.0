<template><div><h1 id="calcular-fecha-de-vencimiento-en-dias-habiles" tabindex="-1"><a class="header-anchor" href="#calcular-fecha-de-vencimiento-en-dias-habiles"><span>Calcular Fecha de Vencimiento en Días Hábiles</span></a></h1>
<p>Método que calcula la fecha de vencimiento en días hábiles de un plazo dada la fecha de inicio.</p>
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
<td>BTCalendarios.CalcularFechaVencimientoDiasHabiles</td>
<td>RBTPG340</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Calcular Fecha de Vencimiento en Días Hábiles:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCalendarios.CalcularFechaVencimientoDiasHabiles> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>573607534CD285A89A23FBEE</bts:Token> 
            <bts:Device>N</bts:Device> 
         </bts:Btinreq> 
         <bts:sucursalId></bts:sucursalId> 
         <bts:plazo>30</bts:plazo> 
         <bts:fechaInicio>2020-02-15</bts:fechaInicio> 
         <bts:tipoVencimiento>A</bts:tipoVencimiento> 
      </bts:BTCalendarios.CalcularFechaVencimientoDiasHabiles> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCalendarios_v1?CalcularFechaVencimientoDiasHabiles' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
  "Btinreq": { 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "1", 
      "Usuario": "INSTALADOR", 
      "Token": "573607534CD285A89A23FBEE", 
      "Device": "N" 
    }, 
    "sucursalId": "", 
    "plazo": "30", 
    "fechaInicio": "2020-02-15", 
    "tipoVencimiento": "A" 
} 
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
      <BTCalendarios.CalcularFechaVencimientoDiasHabilesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>573607534CD285A89A23FBEE</Token> 
            <Device>N</Device> 
         </Btinreq> 
         <fechaFin>2020-03-15</fechaFin> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTCalendarios.CalcularFechaVencimientoDiasHabiles</Servicio> 
            <Fecha>2021-04-07</Fecha> 
            <Hora>17:52:43</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>8156</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTCalendarios.CalcularFechaVencimientoDiasHabilesResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "1", 
      "Usuario": "INSTALADOR", 
      "Token": "573607534CD285A89A23FBEE", 
      "Device": "N" 
    }, 
    "fechaFin": "2020-03-15", 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
      "Canal": "BTDIGITAL", 
      "Servicio": "BTCalendarios.CalcularFechaVencimientoDiasHabiles", 
      "Fecha": "2021-04-07", 
      "Hora": "17:52:43", 
      "Requerimiento": "1", 
      "Numero": "8156", 
      "Estado": "OK" 
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
<tr>
<td>fechaInicio</td>
<td>Date</td>
<td>Fecha de inicio del plazo.</td>
</tr>
<tr>
<td>plazo</td>
<td>Int</td>
<td>Plazo.</td>
</tr>
<tr>
<td>tipoDia</td>
<td>Byte</td>
<td>[Hidden, valor fijo 6 para este método].</td>
</tr>
<tr>
<td>tipoVencimiento</td>
<td>String</td>
<td>Tipo de ajuste al vencimiento ('A': Hábil anterior, 'P': Hábil posterior, 'N': No ajusta).</td>
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
<td>fechaVencimiento</td>
<td>Date</td>
<td>Fecha de vencimiento del plazo.</td>
</tr>
</tbody>
</table>
<h3 id="errores" tabindex="-1"><a class="header-anchor" href="#errores"><span>Errores</span></a></h3>
<p>No aplica</p>
</div></template>


