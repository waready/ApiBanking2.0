<template><div><h1 id="obtener-variables-regla" tabindex="-1"><a class="header-anchor" href="#obtener-variables-regla"><span>Obtener Variables Regla</span></a></h1>
<p>Método para obtener las variables de una determinada regla de negocio.</p>
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
<td>BTReglasNegocio.ObtenerVariablesRegla</td>
<td>RBTPGR54</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio de Obtener Variables Regla:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTReglasNegocio.ObtenerVariablesRegla> 
         <bts:Btinreq> 
            <bts:Device>GP</bts:Device> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>86b12d9cbaCD285A89A23FBE</bts:Token> 
         </bts:Btinreq> 
         <bts:reglaId>1</bts:reglaId> 
      </bts:BTReglasNegocio.ObtenerVariablesRegla> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTReglasNegocio?ObtenerVariablesRegla' \ 
    -H 'cache-control: no-cache' \ 
    -H 'content-type: application/json' \ 
    -H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
    -d '{ 
    "Btinreq": { 
        "Device": "GP", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "1", 
        "Canal": "BTDIGITAL", 
        "Token": "bc8b678bc44A8B5C60A82434" 
    }, 
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
      <BTReglasNegocio.ObtenerVariablesReglaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GP</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>86b12d9cbaCD285A89A23FBE</Token> 
         </Btinreq> 
         <Variableregla> 
            <SdtsBTVariableRegla> 
               <tipoDato>E-Entero</tipoDato> 
               <descripcion>Moneda</descripcion> 
               <variableId>1</variableId> 
               <nombre>MONEDA</nombre> 
            </SdtsBTVariableRegla> 
            <SdtsBTVariableRegla> 
               <tipoDato>N-Numerico</tipoDato> 
               <descripcion>Importe</descripcion> 
               <variableId>2</variableId> 
               <nombre>IMPORTE</nombre> 
            </SdtsBTVariableRegla> 
            <SdtsBTVariableRegla> 
               <tipoDato>N-Numerico</tipoDato> 
               <descripcion>Tipo de Cambio</descripcion> 
               <variableId>3</variableId> 
               <nombre>TCCOMPRA</nombre> 
            </SdtsBTVariableRegla> 
            <SdtsBTVariableRegla> 
               <tipoDato>N-Numerico</tipoDato> 
               <descripcion>Tipo de Cambio Vta</descripcion> 
               <variableId>4</variableId> 
               <nombre>TCVTA</nombre> 
            </SdtsBTVariableRegla> 
         </Variableregla> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>44445</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTReglasNegocio.ObtenerVariablesRegla</Servicio> 
            <Fecha>2022-06-02</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>10:05:38</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTReglasNegocio.ObtenerVariablesReglaResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
        "Device": "GP", 
        "Usuario": "MINSTALADOR", 
        "Requerimiento": "1", 
        "Canal": "BTDIGITAL", 
        "Token": "c2cfd09eff4A8B5C60A82434" 
    }, 
    "sdtVariablesRegla": { 
        "SdtsBTVariableRegla": [ 
        { 
            "tipoDato": "E-Entero", 
            "descripcion": "Moneda", 
            "variableId": "1", 
            "nombre": "MONEDA" 
        }, 
        { 
            "tipoDato": "N-Numerico", 
            "descripcion": "Importe", 
            "variableId": "2", 
            "nombre": "IMPORTE" 
        }, 
        { 
            "tipoDato": "N-Numerico", 
            "descripcion": "Tipo de Cambio", 
            "variableId": "3", 
            "nombre": "TCCOMPRA" 
        }, 
        { 
            "tipoDato": "N-Numerico", 
            "descripcion": "Tipo de Cambio Vta", 
            "variableId": "4", 
            "nombre": "TCVTA" 
        } 
        ] 
    }, 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
        "Numero": "44445", 
        "Estado": "OK", 
        "Servicio": "BTReglasNegocio.ObtenerVariablesRegla", 
        "Fecha": "2022-06-02", 
        "Requerimiento": "1", 
        "Hora": "10:05:38", 
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
<td>reglaId</td>
<td>Long</td>
<td>Código de regla de negocio.</td>
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
<td>sdtVariablesRegla</td>
<td>sBTVariableRegla</td>
<td>Listado de variables.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTVariableRegla son los siguientes:</p>
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
<td>variableId</td>
<td>Short</td>
<td>Código de variable.</td>
</tr>
<tr>
<td>nombre</td>
<td>String</td>
<td>Descripción de variable.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Descripción de variable.</td>
</tr>
<tr>
<td>tipoDato</td>
<td>String</td>
<td>Tipo de dato.</td>
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
<td>1011050</td>
<td>No se recibio ID de Regla.</td>
</tr>
</tbody>
</table>
</div></template>


