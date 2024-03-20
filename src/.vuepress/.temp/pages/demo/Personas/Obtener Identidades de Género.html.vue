<template><div><h1 id="obtener-identidades-de-genero" tabindex="-1"><a class="header-anchor" href="#obtener-identidades-de-genero"><span>Obtener Identidades de Género</span></a></h1>
<p>Método para obtener un listado de las identidades de género ingresadas en el sistema.</p>
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
<td>BTPersonas.ObtenerIdentidadesDeGenero</td>
<td>RBTPG380</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio de Obtener Identidades de Género:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ObtenerIdentidadesDeGenero> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>1394857355CD285A89A23FBE</bts:Token> 
            <bts:Device>AV</bts:Device> 
         </bts:Btinreq> 
      </bts:BTPersonas.ObtenerIdentidadesDeGenero> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
         "Canal": "BTDIGITAL", 
         "Requerimiento": "1", 
         "Usuario": "INSTALADOR", 
         "Token": "963643292CD285A89A23FBEE", 
         "Device": "AV" 
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
      <BTPersonas.ObtenerIdentidadesDeGeneroResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>1394857355CD285A89A23FBE</Token> 
            <Device>AV</Device> 
         </Btinreq> 
         <sdtIdentidadesDeGenero> 
            <sBTIdentidadDeGenero> 
               <codigo>F</codigo> 
               <descripcion>Femenino</descripcion> 
            </sBTIdentidadDeGenero> 
            <sBTIdentidadDeGenero> 
               <codigo>M</codigo> 
               <descripcion>Masculino</descripcion> 
            </sBTIdentidadDeGenero> 
         </sdtIdentidadesDeGenero> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTPersonas.ObtenerIdentidadesDeGenero</Servicio> 
            <Fecha>2021-11-15</Fecha> 
            <Hora>12:47:10</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>8696</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTPersonas.ObtenerIdentidadesDeGeneroResponse> 
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
        "Token": "963643292CD285A89A23FBEE", 
        "Device": "AV" 
    }, 
    "sdtIdentidadesDeGenero": { 
        "sBTIdentidadDeGenero": [ 
            { 
                "codigo": "F", 
                "descripcion": "Femenino" 
            }, 
            { 
                "codigo": "M", 
                "descripcion": "Masculino" 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTPersonas.ObtenerIdentidadesDeGenero", 
        "Fecha": "2021-11-15", 
        "Hora": "11:21:59", 
        "Requerimiento": "1", 
        "Numero": 8693, 
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
<td>sdtIdentidadesDeGenero</td>
<td>sBTIdentidadDeGenero</td>
<td>Listado de identidades de género.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTIdentidadDeGenero son los siguientes:</p>
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
<td>codigo</td>
<td>Short</td>
<td>Código de identidad de género.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Descripción de identidad de género.</td>
</tr>
</tbody>
</table>
<h3 id="errores" tabindex="-1"><a class="header-anchor" href="#errores"><span>Errores</span></a></h3>
<p>No aplica.</p>
</div></template>


