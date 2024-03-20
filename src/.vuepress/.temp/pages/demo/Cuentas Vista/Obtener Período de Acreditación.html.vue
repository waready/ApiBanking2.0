<template><div><h1 id="obtener-periodo-de-acreditacion" tabindex="-1"><a class="header-anchor" href="#obtener-periodo-de-acreditacion"><span>Obtener Período de Acreditación</span></a></h1>
<p>Método para obtener el período de acreditación de una operación.</p>
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
<td>BTCuentasVista.ObtenerPeriodoDeAcreditacion</td>
<td>RBTPG366</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio de Obtener Período de Acreditacion:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasVista.ObtenerPeriodoDeAcreditacion> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>1136448858CD285A89A23FBE</bts:Token> 
            <bts:Device></bts:Device> 
         </bts:Btinreq> 
         <bts:operacionUId>10211</bts:operacionUId> 
      </bts:BTCuentasVista.ObtenerPeriodoDeAcreditacion> 
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
        "Token": "432782790CD285A89A23FBEE", 
        "Device": "" 
    }, 
    "operacionUId": 10211 
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
      <BTCuentasVista.ObtenerPeriodoDeAcreditacionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>1136448858CD285A89A23FBE</Token> 
            <Device/> 
         </Btinreq> 
         <sdtperiodoAcreditacion> 
            <descripcion>Diario</descripcion> 
            <valor>1</valor> 
         </sdtperiodoAcreditacion> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTCuentasVista.ObtenerPeriodoDeAcreditacion</Servicio> 
            <Fecha>2021-11-01</Fecha> 
            <Hora>12:27:47</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>8476</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTCuentasVista.ObtenerPeriodoDeAcreditacionResponse> 
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
        "Token": "432782790CD285A89A23FBEE", 
        "Device": "" 
    }, 
    "sdtperiodoAcreditacion": { 
        "descripcion": "Diario", 
        "valor": 1 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTCuentasVista.ObtenerPeriodoDeAcreditacion", 
        "Fecha": "2021-11-01", 
        "Hora": "12:40:20", 
        "Requerimiento": "", 
        "Numero": 8478, 
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
<td>operacionUId</td>
<td>Long</td>
<td>Identificador de Subcuenta con acreditación.</td>
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
<td>sdtPeriodoAcreditacion</td>
<td>sBTPeriodoDeAcreditacion</td>
<td>Datos de la acreditación de la subcuenta.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTPeriodoDeAcreditacion son los siguientes:</p>
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
<td>descripcion</td>
<td>String</td>
<td>Descripcion del periodo.</td>
</tr>
<tr>
<td>valor</td>
<td>Int</td>
<td>Valor del periodo.</td>
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
<td>No se recibió el identificador único de Operacion.</td>
</tr>
<tr>
<td>30003</td>
<td>No se recuperó la Operacion para el Identificador: [Número de identificador].</td>
</tr>
</tbody>
</table>
</div></template>


