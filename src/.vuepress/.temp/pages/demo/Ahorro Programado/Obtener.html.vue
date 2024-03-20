<template><div><h1 id="obtener" tabindex="-1"><a class="header-anchor" href="#obtener"><span>Obtener</span></a></h1>
<p>Método para obtener los datos del ahorro.</p>
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
<td>BTAhorroProgramado.Obtener</td>
<td>RBTPG256</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTAhorroProgramado.Obtener> 
         <bts:Btinreq> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Device>AC</bts:Device> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>f22e83a6eb4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:ahorroUId>205</bts:ahorroUId> 
      </bts:BTAhorroProgramado.Obtener> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTAhorroProgramado?Obtener=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 02100864-83c5-1642-ca5f-a8589b3524b4' \ 
  -d '{ 
"Btinreq": { 
   "Device": "AV", 
   "Usuario": "MINSTALADOR", 
   "Requerimiento": "", 
   "Canal": "BTDIGITAL", 
   "Token": "75e20bd1614A8B5C60A82434" 
}, 
   "ahorroUId": 205 
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
      <BTAhorroProgramado.ObtenerResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AC</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>f22e83a6eb4A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtDetalleAhorro> 
            <plazo>60</plazo> 
            <ahorroUId>205</ahorroUId> 
            <diaDeIncremento>9</diaDeIncremento> 
            <periodicidad>1</periodicidad> 
            <fechaAltaSolicitud>2017-03-06</fechaAltaSolicitud> 
            <periodosDeGraciaHabilitados>3</periodosDeGraciaHabilitados> 
            <fechaVencimiento>2017-05-08</fechaVencimiento> 
            <fechaProximaRenovacion>0000-00-00</fechaProximaRenovacion> 
            <clienteUId>61</clienteUId> 
            <montoMeta>0.00</montoMeta> 
            <intentosDeIncrementoUtilizados>0</intentosDeIncrementoUtilizados> 
            <productoUId>82</productoUId> 
            <periodosDeGraciaUtilizados>0</periodosDeGraciaUtilizados> 
            <tasaActual>10.200000</tasaActual> 
            <observacion/> 
            <tipoDeDia>Días Calendario</tipoDeDia> 
            <motivoMeta/> 
            <intentosDeIncrementoHabilitados>30</intentosDeIncrementoHabilitados> 
            <fechaMeta>0000-00-00</fechaMeta> 
            <tasaOriginal>10.200000</tasaOriginal> 
            <saldoActual>0.00</saldoActual> 
            <tipoTasa>Lineal Anual</tipoTasa> 
            <fechaProximoIncremento>2017-06-09</fechaProximoIncremento> 
            <renueva>No</renueva> 
            <operacionUIdOrigen>541</operacionUIdOrigen> 
            <operacionUIdDestino>541</operacionUIdDestino> 
            <estado>Cancelado</estado> 
            <abono>5000.00</abono> 
            <fechaValor>2017-03-09</fechaValor> 
         </sdtDetalleAhorro> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>9360</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTAhorroProgramado.Obtener</Servicio> 
            <Fecha>2019-11-19</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>11:44:25</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTAhorroProgramado.ObtenerResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
        "Device": "AV", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "", 
        "Canal": "BTDIGITAL", 
        "Token": "75e20bd1614A8B5C60A82434" 
    }, 
    "sdtDetalleAhorro": { 
        "plazo": 60, 
        "ahorroUId": 205, 
        "diaDeIncremento": 9, 
        "periodicidad": 1, 
        "fechaAltaSolicitud": "2017-03-06", 
        "periodosDeGraciaHabilitados": 3, 
        "fechaVencimiento": "2017-05-08", 
        "fechaProximaRenovacion": "0000-00-00", 
        "clienteUId": 61, 
        "montoMeta": 0, 
        "intentosDeIncrementoUtilizados": 0, 
        "productoUId": 82, 
        "periodosDeGraciaUtilizados": 0, 
        "tasaActual": 10.2, 
        "observacion": "", 
        "tipoDeDia": "Días Calendario", 
        "motivoMeta": "", 
        "intentosDeIncrementoHabilitados": 30, 
        "fechaMeta": "0000-00-00", 
        "tasaOriginal": 10.2, 
        "saldoActual": 0, 
        "tipoTasa": "Lineal Anual", 
        "fechaProximoIncremento": "2017-06-09", 
        "renueva": "No", 
        "operacionUIdOrigen": 541, 
        "operacionUIdDestino": 541, 
        "estado": "Cancelado", 
        "abono": 0, 
        "fechaValor": "2017-03-09" 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 9361, 
        "Estado": "OK", 
        "Servicio": "BTAhorroProgramado.Obtener", 
        "Fecha": "2019-11-19", 
        "Requerimiento": "", 
        "Hora": "11:46:44", 
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
<td>ahorroUId</td>
<td>Long</td>
<td>Identificador único del ahorro.</td>
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
<td>sdtDetalleAhorro</td>
<td>sBTDetalleAhorro</td>
<td>Datos del ahorro.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTDetalleAhorro son los siguientes:</p>
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
<td>clienteUId</td>
<td>Long</td>
<td>Identificador único del cliente.</td>
</tr>
<tr>
<td>productoUId</td>
<td>Long</td>
<td>Identificador único de producto.</td>
</tr>
<tr>
<td>ahorroUId</td>
<td>Long</td>
<td>Identificador único del ahorro.</td>
</tr>
<tr>
<td>fechaVencimiento</td>
<td>Date</td>
<td>Fecha del vencimiento del ahorro.</td>
</tr>
<tr>
<td>periodicidad</td>
<td>Short</td>
<td>Periodicidad (en días) del ahorro.</td>
</tr>
<tr>
<td>díaDeIncremento</td>
<td>Short</td>
<td>Día en que se da el incremento.</td>
</tr>
<tr>
<td>abono</td>
<td>Double</td>
<td>Abono.</td>
</tr>
<tr>
<td>intentosDeIncrementoHabilitados</td>
<td>Short</td>
<td>Intentos de incremento habilitados.</td>
</tr>
<tr>
<td>intentosDeIncrementoUtilizados</td>
<td>Short</td>
<td>Intentos de incremento utilizados.</td>
</tr>
<tr>
<td>periodosDeGraciaUtilizados</td>
<td>Short</td>
<td>Períodos de gracia utilizados.</td>
</tr>
<tr>
<td>periodosDeGraciaHabilitados</td>
<td>Short</td>
<td>Períodos de gracia habilitados.</td>
</tr>
<tr>
<td>tasaOriginal</td>
<td>Double</td>
<td>Tasa original.</td>
</tr>
<tr>
<td>tasaActual</td>
<td>Double</td>
<td>Tasa actual.</td>
</tr>
<tr>
<td>tipoTasa</td>
<td>String</td>
<td>Tipo de tasa.</td>
</tr>
<tr>
<td>saldoActual</td>
<td>Double</td>
<td>Saldo actual del ahorro.</td>
</tr>
<tr>
<td>fechaProximoIncremento</td>
<td>Date</td>
<td>Fecha del próximo incremento.</td>
</tr>
<tr>
<td>fechaProximaRenovacion</td>
<td>Date</td>
<td>Fecha del próximo incremento.</td>
</tr>
<tr>
<td>estado</td>
<td>String</td>
<td>Estado del ahorro.</td>
</tr>
<tr>
<td>renueva</td>
<td>String</td>
<td>¿Renueva? (S/N).</td>
</tr>
<tr>
<td>observacion</td>
<td>String</td>
<td>Observación.</td>
</tr>
<tr>
<td>tipoDeDia</td>
<td>String</td>
<td>Tipo de día utilizado.</td>
</tr>
<tr>
<td>operacionUIdOrigen</td>
<td>Long</td>
<td>Identificador único de la operación de orígen.</td>
</tr>
<tr>
<td>operacionUIdDestino</td>
<td>Long</td>
<td>Identificador único de la operación de destino.</td>
</tr>
<tr>
<td>plazo</td>
<td>Short</td>
<td>Plazo para el ahorro.</td>
</tr>
<tr>
<td>fechaAltaSolicitud</td>
<td>Date</td>
<td>Fecha de alta de la solicitud.</td>
</tr>
<tr>
<td>fechaValor</td>
<td>Date</td>
<td>Fecha valor del ahorro.</td>
</tr>
<tr>
<td>montoMeta</td>
<td>Double</td>
<td>Monto meta del ahorro.</td>
</tr>
<tr>
<td>fechaMeta</td>
<td>Date</td>
<td>Fecha meta del ahorro.</td>
</tr>
<tr>
<td>motivoMeta</td>
<td>String</td>
<td>Motivo de la meta.</td>
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
<td>No se recibió identificador de la operación.</td>
</tr>
<tr>
<td>30011</td>
<td>No se recupero la operación para el identificador recibido.</td>
</tr>
</tbody>
</table>
</div></template>


