<template><div><h1 id="contratar-simulacion" tabindex="-1"><a class="header-anchor" href="#contratar-simulacion"><span>Contratar Simulación</span></a></h1>
<p>Método para crear un ahorro programado a partir de una simulación.</p>
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
<td>BTAhorroProgramado.ContratarSimulacion</td>
<td>RBTPG445</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Contratar Simulación:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTAhorroProgramado.ContratarSimulacion> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Device>GL</bts:Device> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Token>01D45E9964612A4C8CCB1055</bts:Token> 
         </bts:Btinreq> 
         <bts:sdtDatos> 
            <bts:simulacionId>741</bts:simulacionId> 
            <bts:cuentaDestinoUid>661</bts:cuentaDestinoUid> 
            <bts:motivoAhorro>Prueba</bts:motivoAhorro> 
            <bts:cuentaOrigenUid>661</bts:cuentaOrigenUid> 
            <bts:clienteUid>61</bts:clienteUid> 
         </bts:sdtDatos> 
      </bts:BTAhorroProgramado.ContratarSimulacion> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTAhorroProgramado?ContratarSimulacion' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
  -d '{ 
	"Btinreq": { 
          "Canal": "BTDIGITAL", 
          "Usuario": "MINSTALADOR", 
          "Device": "GL", 
          "Requerimiento": 1, 
          "Token": "01D45E9964612A4C8CCB1055" 
        }, 
        "sdtDatos": { 
          "simulacionId": 741, 
          "cuentaDestinoUid": 661, 
          "motivoAhorro": "Prueba", 
          "cuentaOrigenUid": 661, 
          "clienteUid": 61 
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
      <BTAhorroProgramado.ContratarSimulacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Usuario>MINSTALADOR</Usuario> 
            <Device>GL</Device> 
            <Requerimiento>1</Requerimiento> 
            <Token>01D45E9964612A4C8CCB1055</Token> 
         </Btinreq> 
         <ahorroUId>1102</ahorroUId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Estado>OK</Estado> 
            <Fecha>2022-11-29</Fecha> 
            <Hora>17:23:23</Hora> 
            <Numero>11097</Numero> 
            <Servicio>BTAhorroProgramado.ContratarSimulacion</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTAhorroProgramado.ContratarSimulacionResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
        "Canal": "BTDIGITAL", 
        "Usuario": "MINSTALADOR", 
        "Device": "GL", 
        "Requerimiento": 1, 
        "Token": "01D45E9964612A4C8CCB1055" 
    }, 
    "ahorroUId": 1102, 
    "Erroresnegocio": "", 
    "Btoutreq": { 
        "Estado": "OK", 
        "Fecha": "2022-11-29", 
        "Hora": "17:23:23", 
        "Numero": 11097, 
        "Servicio": "BTAhorroProgramado.ContratarSimulacion", 
        "Requerimiento": 1, 
        "Canal": "BTDIGITAL" 
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
<td>sdtDatos</td>
<td>sBTCrearSolicitudAhorro</td>
<td>Datos de la solicitud de ahorro.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTCrearSolicitudAhorro son los siguientes:</p>
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
<td>clienteUid</td>
<td>Long</td>
<td>Identificador de cliente.</td>
</tr>
<tr>
<td>simulacionId</td>
<td>Long</td>
<td>Identificador de simulación.</td>
</tr>
<tr>
<td>cuentaOrigenUid</td>
<td>Long</td>
<td>Identificador de cuenta origen.</td>
</tr>
<tr>
<td>cuentaDestinoUid</td>
<td>Long</td>
<td>Identificador de cuenta destino.</td>
</tr>
<tr>
<td>motivoAhorro</td>
<td>String</td>
<td>Motivo de ahorro.</td>
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
<td>ahorroUId</td>
<td>Long</td>
<td>Identificador de ahorro.</td>
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
<td>No se recibió el identificador de la simulación.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recibió el identificador del cliente.</td>
</tr>
<tr>
<td>30009</td>
<td>No se recuperó la cuenta para el identificador de cliente: [Número de Identificador].</td>
</tr>
<tr>
<td>30010</td>
<td>No se recuperó la cuenta origen del ahorro para el identificador: [Número de Identificador].</td>
</tr>
<tr>
<td>30011</td>
<td>No se recuperó la cuenta destino del ahorro para el identificador: [Número de Identificador].</td>
</tr>
</tbody>
</table>
</div></template>


