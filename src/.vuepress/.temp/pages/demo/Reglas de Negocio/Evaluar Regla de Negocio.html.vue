<template><div><h1 id="evaluar-regla-de-negocio" tabindex="-1"><a class="header-anchor" href="#evaluar-regla-de-negocio"><span>Evaluar Regla de Negocio</span></a></h1>
<p>Método para evaluar una determinada regla de negocio.</p>
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
<td>BTReglasNegocio.EvaluarReglaNegocio</td>
<td>RBTPGR55</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio de Evaluar Regla de Negocio:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTReglasNegocio.EvaluarReglaNegocio> 
         <bts:Btinreq> 
            <bts:Device>GP</bts:Device> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>86b12d9cbaCD285A89A23FBE</bts:Token> 
         </bts:Btinreq> 
         <bts:reglaId>4</bts:reglaId> 
         <bts:sdtVariables> 
            <bts:SdtsBTVariable> 
               <bts:valor>S</bts:valor> 
               <bts:nombre>CHECKAUX2</bts:nombre> 
            </bts:SdtsBTVariable> 
         </bts:sdtVariables> 
      </bts:BTReglasNegocio.EvaluarReglaNegocio> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTReglasNegocio?EvaluarReglaNegocio' \ 
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
    "reglaId": "4", 
    "sdtVariables": { 
        "SdtsBTVariable": { 
            "valor": "S", 
            "nombre": "CHECKAUX2" 
        }, 
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
      <BTReglasNegocio.EvaluarReglaNegocioResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GP</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>86b12d9cbaCD285A89A23FBE</Token> 
         </Btinreq> 
         <resultado>VERDADERO</resultado> 
         <retorno>3</retorno> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>44659</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTReglasNegocio.EvaluarReglaNegocio</Servicio> 
            <Fecha>2022-06-02</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>10:27:36</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTReglasNegocio.EvaluarReglaNegocioResponse> 
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
    "resultado": "VERDADERO", 
    "retorno": "3", 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
        "Numero": "44659", 
        "Estado": "OK", 
        "Servicio": "BTReglasNegocio.EvaluarReglaNegocio", 
        "Fecha": "2022-06-02", 
        "Requerimiento": "1", 
        "Hora": "10:27:36", 
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
<tr>
<td>sdtVariables</td>
<td>sBTVariable</td>
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
<td>nombre</td>
<td>String</td>
<td>Nombre de variable.</td>
</tr>
<tr>
<td>valor</td>
<td>String</td>
<td>Valor de variable.</td>
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
<td>resultado</td>
<td>String</td>
<td>Resultado de la evaluación.</td>
</tr>
<tr>
<td>retorno</td>
<td>String</td>
<td>Retorno de la evaluación.</td>
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
<tr>
<td>40001</td>
<td>Error de Parametrización.</td>
</tr>
</tbody>
</table>
</div></template>


