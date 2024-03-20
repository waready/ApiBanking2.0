<template><div><h1 id="validar-politicas" tabindex="-1"><a class="header-anchor" href="#validar-politicas"><span>Validar Políticas</span></a></h1>
<p>Método para validar las políticas crediticias de una determinada etapa del procesos de otrorgamiento de créditos.</p>
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
<td>BTMicrofinanzas.ValidarPoliticas</td>
<td>RBTPG417</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Validar Políticas:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTMicrofinanzas.ValidarPoliticas> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>95</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>1001009404CD285A89A23FBE</bts:Token> 
            <bts:Device>GP</bts:Device> 
         </bts:Btinreq> 
         <bts:solicitudUId>10972</bts:solicitudUId> 
      </bts:BTMicrofinanzas.ValidarPoliticas> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTMicrofinanzas_v1?ValidarPoliticas \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
      "Btinreq": { 
         "Canal": "BTDIGITAL", 
         "Requerimiento": "95", 
         "Usuario": "INSTALADOR", 
         "Token": "1001009404CD285A89A23FBE", 
         "Device": "GP" 
      }, 
      "solicitudUId": "10972" 
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
      <BTMicrofinanzas.ValidarPoliticasResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>95</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>1001009404CD285A89A23FBE</Token> 
            <Device>GP</Device> 
         </Btinreq> 
         <politicasOK>N</politicasOK> 
         <sdtValidacionesPoliticas> 
            <ValidacionPolitica> 
               <paisDocumentoId>320</paisDocumentoId> 
               <paisDocumento>GUATEMALA</paisDocumento> 
               <tipoDocumentoId>1</tipoDocumentoId> 
               <tipoDocumento>DPI</tipoDocumento> 
               <numeroDocumento>2131248150408</numeroDocumento> 
               <nombre>ROQUEL POYON MARÍA</nombre> 
               <correlativo>1</correlativo> 
               <modeloId>951</modeloId> 
               <modeloEvaluacion>Politicas - Solicitud Individual</modeloEvaluacion> 
               <relacion>1</relacion> 
               <relCorrelativo>0</relCorrelativo> 
               <tipoIntegrante>T</tipoIntegrante> 
               <tipoIntegranteDsc/> 
               <nroEjecucion>394</nroEjecucion> 
               <politicas> 
                  <SdtsBTPoliticaIncumplida> 
                     <politicaId>354</politicaId> 
                     <politica>Edad del solicitante es mayor a la máxima permitida.</politica> 
                     <restriccion>B</restriccion> 
                     <restriccionDsc>Bloqueante</restriccionDsc> 
                     <estado/> 
                     <estadoDsc/> 
                     <nroAutorizacion>0</nroAutorizacion> 
                     <observacion/> 
                  </SdtsBTPoliticaIncumplida> 
                  <SdtsBTPoliticaIncumplida> 
                     <politicaId>363</politicaId> 
                     <politica>Cliente excede el N° máximo de solicitudes en trámite.</politica> 
                     <restriccion>A</restriccion> 
                     <restriccionDsc>Alerta</restriccionDsc> 
                     <estado/> 
                     <estadoDsc/> 
                     <nroAutorizacion>0</nroAutorizacion> 
                     <observacion/> 
                  </SdtsBTPoliticaIncumplida> 
                  <SdtsBTPoliticaIncumplida> 
                     <politicaId>366</politicaId> 
                     <politica>Existen Documentos Obligatorios No Recibidos.</politica> 
                     <restriccion>A</restriccion> 
                     <restriccionDsc>Alerta</restriccionDsc> 
                     <estado/> 
                     <estadoDsc/> 
                     <nroAutorizacion>0</nroAutorizacion> 
                     <observacion/> 
                  </SdtsBTPoliticaIncumplida> 
               </politicas> 
            </ValidacionPolitica> 
         </sdtValidacionesPoliticas> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTMicrofinanzas.ValidarPoliticas</Servicio> 
            <Fecha>2019-11-01</Fecha> 
            <Hora>13:56:51</Hora> 
            <Requerimiento>95</Requerimiento> 
            <Numero>1400</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTMicrofinanzas.ValidarPoliticasResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
'{ 
   "Btinreq": { 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "95", 
      "Usuario": "INSTALADOR", 
      "Token": "1001009404CD285A89A23FBE", 
      "Device": "GP" 
   }, 
   "politicasOK": "N", 
   "sdtValidacionesPoliticas": { 
      "ValidacionPolitica": { 
      "paisDocumentoId": "320", 
      "paisDocumento": "GUATEMALA", 
      "tipoDocumentoId": "1", 
      "tipoDocumento": "DPI", 
      "numeroDocumento": "2131248150408", 
      "nombre": "ROQUEL POYON MARÍA", 
      "correlativo": "1", 
      "modeloId": "951", 
      "modeloEvaluacion": "Politicas - Solicitud Individual", 
      "relacion": "1", 
      "relCorrelativo": "0", 
      "tipoIntegrante": "T", 
      "nroEjecucion": "394", 
      "politicas": { 
         "SdtsBTPoliticaIncumplida": [ 
            { 
            "politicaId": "354", 
            "politica": "Edad del solicitante es mayor a la máxima permitida.", 
            "restriccion": "B", 
            "restriccionDsc": "Bloqueante", 
            "nroAutorizacion": "0" 
            }, 
            { 
            "politicaId": "363", 
            "politica": "Cliente excede el N° máximo de solicitudes en trámite.", 
            "restriccion": "A", 
            "restriccionDsc": "Alerta", 
            "nroAutorizacion": "0" 
            }, 
            { 
            "politicaId": "366", 
            "politica": "Existen Documentos Obligatorios No Recibidos.", 
            "restriccion": "A", 
            "restriccionDsc": "Alerta", 
            "nroAutorizacion": "0" 
            } 
         ] 
      } 
      } 
   }, 
   "Btoutreq": { 
      "Canal": "BTDIGITAL", 
      "Servicio": "BTMicrofinanzas.ValidarPoliticas", 
      "Fecha": "2019-11-01", 
      "Hora": "13:56:51", 
      "Requerimiento": "95", 
      "Numero": "1400", 
      "Estado": "OK" 
   } 
}' 
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
<td>solicitudUId</td>
<td>Long</td>
<td>Identificador de instancia Workflow.</td>
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
<td>controlOK</td>
<td>String</td>
<td>Devuelve &quot;N&quot; si existen políticas que que no permiten continuar. &quot;S&quot; en caso contrario.</td>
</tr>
<tr>
<td>sdtValidacionesPoliticas</td>
<td>sBTValidacionPoliticas</td>
<td>Listado de validación de políticas.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTValidacionPoliticas son los siguientes:</p>
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
<td>politicaId</td>
<td>Int</td>
<td>Identificador de política.</td>
</tr>
<tr>
<td>politica</td>
<td>String</td>
<td>Descripción de la política.</td>
</tr>
<tr>
<td>restriccion</td>
<td>String</td>
<td>Tipo de restriccion de la política.</td>
</tr>
<tr>
<td>restriccionDsc</td>
<td>String</td>
<td>Descripcion de la restriccion.</td>
</tr>
<tr>
<td>estado</td>
<td>String</td>
<td>Estado.</td>
</tr>
<tr>
<td>estadoDsc</td>
<td>String</td>
<td>Descripcion del estado.</td>
</tr>
<tr>
<td>observacion</td>
<td>String</td>
<td>Observación que aplique para una política. Por ejemplo, que haya sido autorizada en una etapa previa.</td>
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
<td>No se recibió el identificador de solicitud.</td>
</tr>
</tbody>
</table>
<p>ECHO está desactivado.</p>
</div></template>


