<template><div><h1 id="obtener-integrantes-persona-juridica" tabindex="-1"><a class="header-anchor" href="#obtener-integrantes-persona-juridica"><span>Obtener Integrantes Persona Jurídica</span></a></h1>
<p>Método para obtener un listado de los integrantes de una persona jurídica.</p>
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
<td>BTPersonas.ObtenerIntegrantesPersonaJuridica</td>
<td>RBTPG385</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio de Obtener Integrantes Persona Juridica:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.ObtenerIntegrantesPersonaJuridica> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>3214436424A8B5C60A82434C</bts:Token> 
            <bts:Device>GP</bts:Device> 
         </bts:Btinreq> 
         <bts:personaUId>10017</bts:personaUId> 
      </bts:BTPersonas.ObtenerIntegrantesPersonaJuridica> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
    'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas?ObtenerIntegrantesPersonaJuridica' \ 
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
    "personaUId": 10017, 
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
      <BTPersonas.ObtenerIntegrantesPersonaJuridicaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>MINSTALADOR</Usuario> 
            <Token>3214436424A8B5C60A82434C</Token> 
            <Device>GP</Device> 
         </Btinreq> 
         <sdtIntegrantesJuridicos> 
            <SdtsBTIntegranteJuridico> 
               <paisId>845</paisId> 
               <pais>URUGUAY</pais> 
               <tipoDocumentoId>1</tipoDocumentoId> 
               <tipoDocumento>Cédula Identidad</tipoDocumento> 
               <nroDocumento>27928980</nroDocumento> 
               <nombre>PRANKA VISENTIN ERIKA</nombre> 
               <vinculoId>1</vinculoId> 
               <vinculo>Presidente</vinculo> 
               <participacion>0.0000</participacion> 
               <personaUId>1</personaUId> 
            </SdtsBTIntegranteJuridico> 
         </sdtIntegrantesJuridicos> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTPersonas.ObtenerIntegrantesPersonaJuridica</Servicio> 
            <Fecha>2022-05-31</Fecha> 
            <Hora>16:29:14</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>8862</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTPersonas.ObtenerIntegrantesPersonaJuridicaResponse> 
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
    "sdtIntegrantesJuridicos": { 
        "SdtsBTIntegranteJuridico": { 
        "paisId": "845", 
        "pais": "URUGUAY", 
        "tipoDocumentoId": "1", 
        "tipoDocumento": "Cédula Identidad", 
        "nroDocumento": "27928980", 
        "nombre": "PRANKA VISENTIN ERIKA", 
        "vinculoId": "1", 
        "vinculo": "Presidente", 
        "participacion": "0.0000", 
        "personaUId": "1" 
        } 
    }, 
    "Erroresnegocio": { 
    }, 
    "Btoutreq": { 
        "Numero": "839", 
        "Estado": "OK", 
        "Servicio": "BTPersonas.ObtenerIntegrantesPersonaJuridica", 
        "Requerimiento": "1", 
        "Fecha": "2022-05-12", 
        "Hora": "15:35:54", 
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
<td>personaUId</td>
<td>Long</td>
<td>Identificador único de persona.</td>
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
<td>sdtIntegrantesJuridicos</td>
<td>sBTIntegranteJuridico</td>
<td>Listado de integrantes jurídicos.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTIntegranteJuridico son los siguientes:</p>
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
<td>personaUId</td>
<td>Long</td>
<td>Identificador único de persona.</td>
</tr>
<tr>
<td>paisId</td>
<td>Short</td>
<td>Identificador del país.</td>
</tr>
<tr>
<td>pais</td>
<td>String</td>
<td>Nombre del país.</td>
</tr>
<tr>
<td>tipoDocumentoId</td>
<td>Short</td>
<td>Identificador del tipo de documento.</td>
</tr>
<tr>
<td>tipoDocumento</td>
<td>String</td>
<td>Nombre del tipo de documento.</td>
</tr>
<tr>
<td>nroDocumento</td>
<td>String</td>
<td>Número de documento.</td>
</tr>
<tr>
<td>nombre</td>
<td>String</td>
<td>Nombre de la persona.</td>
</tr>
<tr>
<td>vinculoId</td>
<td>Short</td>
<td>Identificador de vínculo.</td>
</tr>
<tr>
<td>vinculo</td>
<td>String</td>
<td>Descripción del vínculo.</td>
</tr>
<tr>
<td>participacion</td>
<td>Double</td>
<td>Porcentaje de participación del integrante.</td>
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
<td>No se recibió identificador de persona.</td>
</tr>
<tr>
<td>40001</td>
<td>La persona jurídica no existe.</td>
</tr>
</tbody>
</table>
</div></template>


