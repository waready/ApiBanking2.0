<template><div><h1 id="validar-datos-regla-de-negocio" tabindex="-1"><a class="header-anchor" href="#validar-datos-regla-de-negocio"><span>Validar Datos Regla de Negocio</span></a></h1>
<p>Método para validar los datos de una determinada regla de negocio.</p>
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
<td>BTReglasNegocio.ValidarDatosReglaNegocio</td>
<td>RBTPGR56</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio de Validar Datos Regla de Negocio:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTReglasNegocio.ValidarDatosReglaNegocio> 
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
      </bts:BTReglasNegocio.ValidarDatosReglaNegocio> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTReglasNegocio?ValidarDatosReglaNegocio' \ 
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
      <BTReglasNegocio.ValidarDatosReglaNegocioResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GP</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>86b12d9cbaCD285A89A23FBE</Token> 
         </Btinreq> 
         <cantidadResultados>1</cantidadResultados> 
         <sdtRetornos> 
            <SdtsBTRetorno> 
               <retorno>3</retorno> 
            </SdtsBTRetorno> 
         </sdtRetornos> 
         <resultado>VERDADERO</resultado> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>45114</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTReglasNegocio.ValidarDatosReglaNegocio</Servicio> 
            <Fecha>2022-06-02</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>12:28:57</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTReglasNegocio.ValidarDatosReglaNegocioResponse> 
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
    "cantidadResultados": "1", 
    "sdtRetornos": { 
        "SdtsBTRetorno": { 
            "retorno": "3" 
        } 
    }, 
    "resultado": "VERDADERO", 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
        "Numero": "45114", 
        "Estado": "OK", 
        "Servicio": "BTReglasNegocio.ValidarDatosReglaNegocio", 
        "Fecha": "2022-06-02", 
        "Requerimiento": "1", 
        "Hora": "12:28:57", 
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
<p>Los campos del tipo de dato estructurado sBTVariable son los siguientes:</p>
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
<td>sdtRetornos</td>
<td>sBTRetorno</td>
<td>Listado de retornos.</td>
</tr>
<tr>
<td>cantidadResultados</td>
<td>Long</td>
<td>Cantidad de resultados.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTRetorno son los siguientes:</p>
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
<p>ECHO está desactivado.</p>
</div></template>


