<template><div><h1 id="obtener-tipos-de-cuenta" tabindex="-1"><a class="header-anchor" href="#obtener-tipos-de-cuenta"><span>Obtener Tipos de Cuenta</span></a></h1>
<p>Método para obtener los tipos de cuenta de tarjetas de débito ingresados en el sistema.</p>
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
<td>BTTarjetasDeDebito.ObtenerTiposDeCuenta</td>
<td>RBTPG379</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio Obtener Tipos de Cuenta:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTTarjetasDeDebito.ObtenerTiposDeCuenta> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>1080548031CD285A89A23FBE</bts:Token> 
            <bts:Device></bts:Device> 
         </bts:Btinreq> 
      </bts:BTTarjetasDeDebito.ObtenerTiposDeCuenta> 
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
        "Token": "1518870407CD285A89A23FBE", 
        "Device": "" 
    } 
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
      <BTTarjetasDeDebito.ObtenerTiposDeCuentaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento/> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>1080548031CD285A89A23FBE</Token> 
            <Device/> 
         </Btinreq> 
         <sdtTiposDeCuenta> 
            <SdtsBTTipoDeCuenta> 
               <descripcion>Preferencial</descripcion> 
               <codigo>1</codigo> 
            </SdtsBTTipoDeCuenta> 
            <SdtsBTTipoDeCuenta> 
               <descripcion>Normal</descripcion> 
               <codigo>5</codigo> 
            </SdtsBTTipoDeCuenta> 
         </sdtTiposDeCuenta> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTTarjetasDeDebito.ObtenerTiposDeCuenta</Servicio> 
            <Fecha>2021-10-29</Fecha> 
            <Hora>14:27:12</Hora> 
            <Requerimiento/> 
            <Numero>8451</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTTarjetasDeDebito.ObtenerTiposDeCuentaResponse> 
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
        "Token": "1518870407CD285A89A23FBE", 
        "Device": "" 
    }, 
    "sdtTiposDeCuenta": { 
        "SdtsBTTipoDeCuenta": [ 
            { 
                "descripcion": "Preferencial", 
                "codigo": 1 
            }, 
            { 
                "descripcion": "Normal", 
                "codigo": 5 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTTarjetasDeDebito.ObtenerTiposDeCuenta", 
        "Fecha": "2021-10-29", 
        "Hora": "13:37:58", 
        "Requerimiento": "", 
        "Numero": 8449, 
        "Estado": "OK" 
    } 
} 
``` 
</code-block> 
</code-group>  
<h3 id="datos-de-entrada" tabindex="-1"><a class="header-anchor" href="#datos-de-entrada"><span>Datos de entrada</span></a></h3>
<p>No aplica.</p>
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
<td>sdtTiposDeCuenta</td>
<td>sBTTipoDeCuenta</td>
<td>Listado de tipos de cuenta.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTTipoDeCuenta son los siguientes:</p>
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
<td>Descripcion del tipo de cuenta.</td>
</tr>
<tr>
<td>codigo</td>
<td>Int</td>
<td>Código del tipo de cuenta.</td>
</tr>
</tbody>
</table>
<h3 id="errores" tabindex="-1"><a class="header-anchor" href="#errores"><span>Errores</span></a></h3>
<p>No aplica.</p>
<p>ECHO está desactivado.</p>
</div></template>


