<template><div><h1 id="evaluar-pae" tabindex="-1"><a class="header-anchor" href="#evaluar-pae"><span>Evaluar PAE</span></a></h1>
<p>Método para retornar el resultado de evaluar el PAE de una persona.</p>
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
<td>BTPersonas.EvaluarPAE</td>
<td>RBTPG50</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Evaluar PAE:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPersonas.EvaluarPAE> 
         <bts:Btinreq> 
            <bts:Requerimiento>0</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Device>GZ</bts:Device> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>E1F15D391E5C8FAC4189A627</bts:Token> 
         </bts:Btinreq> 
         <bts:modeloId>23</bts:modeloId> 
         <bts:personaUId>62</bts:personaUId> 
         <bts:productoUId>3</bts:productoUId> 
         <bts:sdtValores> 
            <bts:sBTPAEValorItem> 
               <bts:itemValor></bts:itemValor> 
               <bts:itemNombre></bts:itemNombre> 
            </bts:sBTPAEValorItem> 
         </bts:sdtValores> 
      </bts:BTPersonas.EvaluarPAE> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPersonas_v1?EvaluarPAE=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 631e45d0-2c12-1ccc-7e5c-a067d4de5fb8' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "GZ", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
   "modeloId": 23, 
   "personaUId": 62, 
   "productoUId": 3, 
   "sdtValores": { 
      "sBTPAEValorItem": { 
      "itemValor": "", 
      "itemNombre": "" 
      } 
   } 
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
      <BTPersonas.EvaluarPAEResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GZ</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>0</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>E1F15D391E5C8FAC4189A627</Token> 
         </Btinreq> 
         <valor>10000.0</valor> 
         <mensaje/> 
         <sdtPoliticas/> 
         <numeroEjecucion>2</numeroEjecucion> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>16893</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPersonas.EvaluarPAE</Servicio> 
            <Requerimiento>0</Requerimiento> 
            <Fecha>2023-10-31</Fecha> 
            <Hora>08:50:51</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPersonas.EvaluarPAEResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
'{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
   "valor": 10000, 
   "mensaje": "", 
   "sdtPoliticas": "", 
   "numeroEjecucion": 2, 
   "Erroresnegocio": { 
       "BTErrorNegocio": [] 
   }, 
   "Btoutreq": { 
       "Numero": "835", 
       "Estado": "OK", 
       "Servicio": "BTPersonas.EvaluarPAE", 
       "Fecha": "2017-12-18", 
       "Requerimiento": "", 
       "Hora": "01:48:53", 
       "Canal": "BTDIGITAL" 
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
<td>modeloId</td>
<td>Int</td>
<td>Identificador del modelo.</td>
</tr>
<tr>
<td>personaUId</td>
<td>Long</td>
<td>Identificador único de persona.</td>
</tr>
<tr>
<td>productoUId</td>
<td>Long</td>
<td>Identificador único del producto.</td>
</tr>
<tr>
<td>sdtValores</td>
<td>sBTPAEValorItem</td>
<td>Colección de valores PAE.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTPAEValorItem son los siguientes:</p>
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
<td>itemValor</td>
<td>String</td>
<td>Valor del item.</td>
</tr>
<tr>
<td>itemNombre</td>
<td>String</td>
<td>Nombre del item.</td>
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
<td>Double</td>
<td>Valor.</td>
</tr>
<tr>
<td>mensaje</td>
<td>String</td>
<td>Mensaje.</td>
</tr>
<tr>
<td>sdtPoliticas</td>
<td>sBTPoliticaIncumplida</td>
<td>Colección de politicas incumplidas.</td>
</tr>
<tr>
<td>numeroEjecucion</td>
<td>Long</td>
<td>Número de la ejecución.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTPoliticaIncumplida son los siguientes:</p>
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
<td>estadoDsc</td>
<td>String</td>
<td>Descripción del estado.</td>
</tr>
<tr>
<td>restriccionDsc</td>
<td>String</td>
<td>Descripción de la restriccón.</td>
</tr>
<tr>
<td>politicaId</td>
<td>Int</td>
<td>Identificador de la politica.</td>
</tr>
<tr>
<td>nroAutorizacion</td>
<td>Long</td>
<td>Número de la autorización.</td>
</tr>
<tr>
<td>politica</td>
<td>String</td>
<td>Politica.</td>
</tr>
<tr>
<td>restriccion</td>
<td>String</td>
<td>Restricción.</td>
</tr>
<tr>
<td>estado</td>
<td>String</td>
<td>Estado.</td>
</tr>
<tr>
<td>observacion</td>
<td>String</td>
<td>Observación.</td>
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
<td>No se recibio modelo de evaluacion PAE.</td>
</tr>
<tr>
<td>1011051</td>
<td>No se recuperó la persona para el Id recibido.</td>
</tr>
<tr>
<td>1011052</td>
<td>No se recuperó el producto para el Id recibido.</td>
</tr>
<tr>
<td>1011053</td>
<td>El modelo de evaluacion no esta definido.</td>
</tr>
<tr>
<td>1011054</td>
<td>El modelo de evaluación no tiene tipo definido.</td>
</tr>
<tr>
<td>1011055</td>
<td>No hay items a resolver para la evaluación solicitada.</td>
</tr>
<tr>
<td>1011056</td>
<td>No es posible evaluar reglas en la plataforma de ejecucion.</td>
</tr>
<tr>
<td>1011056</td>
<td>Error en la parametrización del modelo de evaluacion.</td>
</tr>
<tr>
<td>1011057</td>
<td>Error en la ejecución del modelo de evaluacion.</td>
</tr>
</tbody>
</table>
</div></template>


