<template><div><h1 id="obtener-motivos-de-bloqueo" tabindex="-1"><a class="header-anchor" href="#obtener-motivos-de-bloqueo"><span>Obtener Motivos de Bloqueo</span></a></h1>
<p>Método para devolver un listado de los motivos de bloqueo de tarjetas de débito dados de alta en Bantotal.</p>
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
<td>BTTarjetasDeDebito.ObtenerMotivosBloqueo</td>
<td>RBTPG195</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Motivos de Bloqueo:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTTarjetasDeDebito.ObtenerMotivosBloqueo> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>BA</bts:Usuario> 
            <bts:Token>0211202010280000399672</bts:Token> 
            <bts:Device>MC</bts:Device> 
         </bts:Btinreq> 
      </bts:BTTarjetasDeDebito.ObtenerMotivosBloqueo> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTTarjetasDeDebito_v1?ObtenerMotivosBloqueo' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
	"Btinreq": { 
		"Canal": "BTDIGITAL", 
		"Requerimiento": "1", 
		"Usuario": "BA", 
		"Token": "0211202010280000399672", 
		"Device": "MC" 
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
      <BTTarjetasDeDebito.ObtenerMotivosBloqueoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>BA</Usuario> 
            <Token>0211202010280000399672</Token> 
            <Device>MC</Device> 
         </Btinreq> 
         <sdtMotivosBloqueo> 
            <sBTMotivoBloqueo> 
               <identificador>1</identificador> 
               <descripcion>ROBO</descripcion> 
            </sBTMotivoBloqueo> 
            <sBTMotivoBloqueo> 
               <identificador>2</identificador> 
               <descripcion>PERDIDA</descripcion> 
            </sBTMotivoBloqueo> 
            <sBTMotivoBloqueo> 
               <identificador>3</identificador> 
               <descripcion>DECISION DEL CLIENTE</descripcion> 
            </sBTMotivoBloqueo> 
            <sBTMotivoBloqueo> 
               <identificador>4</identificador> 
               <descripcion>CIERRE DE CUENTA</descripcion> 
            </sBTMotivoBloqueo> 
         </sdtMotivosBloqueo> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTTarjetasDeDebito.ObtenerMotivosBloqueo</Servicio> 
            <Fecha>2020-11-02</Fecha> 
            <Hora>10:59:14</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>10139</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTTarjetasDeDebito.ObtenerMotivosBloqueoResponse> 
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
      "Usuario": "BA", 
      "Token": "0211202010280000399672", 
      "Device": "MC" 
   }, 
   "sdtMotivosBloqueo": { 
      "sBTMotivoBloqueo": [ 
         { 
            "identificador": "1", 
            "descripcion": "ROBO" 
         }, 
         { 
            "identificador": "2", 
            "descripcion": "PERDIDA" 
         }, 
         { 
            "identificador": "3", 
            "descripcion": "DECISION DEL CLIENTE" 
         }, 
         { 
            "identificador": "4", 
            "descripcion": "CIERRE DE CUENTA" 
         } 
      ] 
   }, 
   "Erroresnegocio": null, 
   "Btoutreq": { 
      "Canal": "BTDIGITAL", 
      "Servicio": "BTTarjetasDeDebito.ObtenerMotivosBloqueo", 
      "Fecha": "2020-11-02", 
      "Hora": "10:59:14", 
      "Requerimiento": "1", 
      "Numero": "10139", 
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
<td>sdtMotivosBloqueo</td>
<td>sBTMotivoBloqueo</td>
<td>Listado de motivos de bloqueo.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTMotivoBloqueo son los siguientes:</p>
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
<td>identificador</td>
<td>Int</td>
<td>Identificador.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Descripción.</td>
</tr>
</tbody>
</table>
<h3 id="errores" tabindex="-1"><a class="header-anchor" href="#errores"><span>Errores</span></a></h3>
<p>No aplica.</p>
</div></template>


