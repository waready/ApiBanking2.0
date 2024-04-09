<template><div><h1 id="contratar-con-periodicidad" tabindex="-1"><a class="header-anchor" href="#contratar-con-periodicidad"><span>Contratar con Periodicidad</span></a></h1>
<p>Método para contratar una cuenta corriente, ingresando un período de acreditación.</p>
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
<td>BTCuentasCorrientes.ContratarConPeriodicidad</td>
<td>RBTPG358</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio de Contratar con Periodicidad:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasCorrientes.ContratarConPeriodicidad> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>1872595329CD285A89A23FBE</bts:Token> 
            <bts:Device></bts:Device> 
         </bts:Btinreq> 
         <bts:clienteUId>10021</bts:clienteUId> 
         <bts:productoUId>93</bts:productoUId> 
         <bts:nombreSubcuenta>Cta. Corriente</bts:nombreSubcuenta> 
         <bts:periodoAcreditacion>1</bts:periodoAcreditacion> 
      </bts:BTCuentasCorrientes.ContratarConPeriodicidad> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
        "Canal": "BTDIGITAL", 
        "Requerimiento": "", 
        "Usuario": "INSTALADOR", 
        "Token": "741937913CD285A89A23FBEE", 
        "Device": "" 
    }, 
    "clienteUId": "10021", 
    "productoUId": "93", 
    "nombreSubcuenta": "Cta. Corriente", 
    "periodoAcreditacion": "1" 
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
      <BTCuentasCorrientes.ContratarConPeriodicidadResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento/> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>1872595329CD285A89A23FBE</Token> 
            <Device/> 
         </Btinreq> 
         <operacionUId>10208</operacionUId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTCuentasCorrientes.ContratarConPeriodicidad</Servicio> 
            <Fecha>2021-10-29</Fecha> 
            <Hora>10:39:15</Hora> 
            <Requerimiento/> 
            <Numero>8435</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTCuentasCorrientes.ContratarConPeriodicidadResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
        "Canal": "BTDIGITAL", 
        "Requerimiento": "", 
        "Usuario": "INSTALADOR", 
        "Token": "741937913CD285A89A23FBEE", 
        "Device": "" 
    }, 
    "operacionUId": "10206", 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTCuentasCorrientes.ContratarConPeriodicidad", 
        "Fecha": "2021-10-29", 
        "Hora": "10:20:39", 
        "Requerimiento": "", 
        "Numero": 8432, 
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
<td>clienteUId</td>
<td>Long</td>
<td>Identificador de Cliente.</td>
</tr>
<tr>
<td>productoUId</td>
<td>Long</td>
<td>Identificador de Producto.</td>
</tr>
<tr>
<td>nombreSubcuenta</td>
<td>String</td>
<td>Nombre de la Subcuenta.</td>
</tr>
<tr>
<td>periodoAcreditacion</td>
<td>Long</td>
<td>Período de Acreditación de Intereses.</td>
</tr>
<tr>
<td>producto</td>
<td>String</td>
<td>[Hidden: Valor CC por defecto].</td>
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
<td>Identificador de la subcuenta contratada.</td>
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
<td>No se recibió el identificador único de cliente.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recibió el identificador único de producto.</td>
</tr>
<tr>
<td>30003</td>
<td>El período de acreditación ingresado es inválido.</td>
</tr>
<tr>
<td>31003</td>
<td>No existe registro para el identificador único.</td>
</tr>
</tbody>
</table>
</div></template>


