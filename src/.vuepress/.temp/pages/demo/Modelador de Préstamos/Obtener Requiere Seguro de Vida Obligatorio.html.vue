<template><div><h1 id="obtener-requiere-seguro-de-vida-obligatorio" tabindex="-1"><a class="header-anchor" href="#obtener-requiere-seguro-de-vida-obligatorio"><span>Obtener Requiere Seguro de Vida Obligatorio</span></a></h1>
<p>Método para obtener si un producto de préstamo requiere seguro de vida obligatorio.</p>
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
<td>BTModeladorPrestamos.ObtenerRequiereSeguroDeVidaObligatorio</td>
<td>RBTPG353</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio de Obtener Requiere Seguro de Vida Obligatorio:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTModeladorPrestamos.ObtenerRequiereSeguroDeVidaObligatorio> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>194002532CD285A89A23FBEE</bts:Token> 
            <bts:Device></bts:Device> 
         </bts:Btinreq> 
         <bts:productoUId>105</bts:productoUId> 
      </bts:BTModeladorPrestamos.ObtenerRequiereSeguroDeVidaObligatorio> 
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
        "Token": "1511184612CD285A89A23FBE", 
        "Device": "" 
    }, 
    "productoUId": "105" 
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
      <BTModeladorPrestamos.ObtenerRequiereSeguroDeVidaObligatorioResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento/> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>194002532CD285A89A23FBEE</Token> 
            <Device/> 
         </Btinreq> 
         <valor>S</valor> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTModeladorPrestamos.ObtenerRequiereSeguroDeVidaObligatorio</Servicio> 
            <Fecha>2021-11-03</Fecha> 
            <Hora>18:16:55</Hora> 
            <Requerimiento/> 
            <Numero>8636</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTModeladorPrestamos.ObtenerRequiereSeguroDeVidaObligatorioResponse> 
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
        "Token": "1511184612CD285A89A23FBE", 
        "Device": "" 
    }, 
    "valor": "S", 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTModeladorPrestamos.ObtenerRequiereSeguroDeVidaObligatorio", 
        "Fecha": "2021-11-03", 
        "Hora": "17:49:54", 
        "Requerimiento": "", 
        "Numero": 8622, 
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
<td>productoUID</td>
<td>Long</td>
<td>Identificador de producto.</td>
</tr>
<tr>
<td>parametro</td>
<td>Short</td>
<td>[Hidden: Valor 350 definido por defecto].</td>
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
<td>valor</td>
<td>String</td>
<td>Requiere o no seguro de vida obligatorio.</td>
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
<td>30002</td>
<td>Existe registro con la cuenta indicada.</td>
</tr>
<tr>
<td>30003</td>
<td>No existe registro para el identificador único.</td>
</tr>
<tr>
<td>30004</td>
<td>No existe registro para el producto indicado.</td>
</tr>
</tbody>
</table>
</div></template>


