<template><div><h1 id="contratar-con-periodicidad" tabindex="-1"><a class="header-anchor" href="#contratar-con-periodicidad"><span>Contratar con Periodicidad</span></a></h1>
<p>Método para contratar una caja de ahorro, ingresando un período de acreditación.</p>
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
<td>BTCuentasDeAhorro.ContratarConPeriodicidad</td>
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
            <bts:Token>1335244350CD285A89A23FBE</bts:Token> 
            <bts:Device></bts:Device> 
         </bts:Btinreq> 
         <bts:clienteUId>10021</bts:clienteUId> 
         <bts:productoUId>94</bts:productoUId> 
         <bts:nombreSubcuenta>Caja de Ahorro</bts:nombreSubcuenta> 
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
        "Token": "1040992103CD285A89A23FBE", 
        "Device": "" 
    }, 
    "clienteUId": "10021", 
    "productoUId": "94", 
    "nombreSubcuenta": "Caja de Ahorro", 
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
      <BTCuentasDeAhorro.ContratarConPeriodicidadResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento/> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>1335244350CD285A89A23FBE</Token> 
            <Device/> 
         </Btinreq> 
         <operacionUId>10210</operacionUId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTCuentasDeAhorro.ContratarConPeriodicidad</Servicio> 
            <Fecha>2021-10-29</Fecha> 
            <Hora>12:27:21</Hora> 
            <Requerimiento/> 
            <Numero>8442</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTCuentasDeAhorro.ContratarConPeriodicidadResponse> 
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
        "Token": "1040992103CD285A89A23FBE", 
        "Device": "" 
    }, 
    "operacionUId": 10209, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTCuentasCorrientes.ContratarConPeriodicidad", 
        "Fecha": "2021-10-29", 
        "Hora": "12:21:44", 
        "Requerimiento": "", 
        "Numero": 8440, 
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
<td>[Hidden: Valor CA por defecto].</td>
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


