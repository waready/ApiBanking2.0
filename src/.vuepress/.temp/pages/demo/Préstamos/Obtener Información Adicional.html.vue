<template><div><h1 id="obtener-informacion-adicional" tabindex="-1"><a class="header-anchor" href="#obtener-informacion-adicional"><span>Obtener Información Adicional</span></a></h1>
<p>Método para obtener información adicional de un préstamo.</p>
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
<td>BTPrestamos.ObtenerInformacionAdicional</td>
<td>RBTPG468</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio de Obtener Información Adicional:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.ObtenerInformacionAdicional> 
         <bts:Btinreq> 
            <bts:Device>1</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Token>D6F899CBE6D99B71A5E627F1</bts:Token> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:operacionUId>61</bts:operacionUId> 
      </bts:BTPrestamos.ObtenerInformacionAdicional> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
	'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerInformacionAdicional' \ 
	-H 'cache-control: no-cache' \ 
	-H 'content-type: application/json' \ 
	-H 'postman-token: 52baf1dc-e302-90a6-0de1-24fa234c0379' \ 
	-d '{ 
	"Btinreq": { 
	  "Device": "1", 
	  "Usuario": "MINSTALADOR", 
	  "Token": "16c1cFC33CD93505A5382434", 
	  "Canal": "BTDIGITAL", 
	  "Requerimiento": "1" 
	}, 
	"operacionUId": "101", 
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
      <BTPrestamos.ObtenerInformacionAdicionalResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>1</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>976EB9CBE6D99B71A5E627F1</Token> 
         </Btinreq> 
         <sdtInformacionAdicional> 
            <sBTDatoLista> 
		   <clave>Impuesto s/Intereses en Cuota</clave> 
               <valor>S</valor> 
            </sBTDatoLista> 
            <sBTDatoLista> 
		   <clave>Renovar a 30 dias</clave> 
               <valor>N</valor> 
            </sBTDatoLista> 
         </sdtInformacionAdicional> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>11261</Numero> 
            <Servicio>BTPrestamos.ObtenerInformacionAdicional</Servicio> 
            <Estado>OK</Estado> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2023-05-16</Fecha> 
            <Hora>15:48:08</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPrestamos.ObtenerInformacionAdicionalResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
{ 
   "Btinreq": { 
      "Device": "1", 
      "Usuario": "MINSTALADOR", 
      "Token": "27c9bFC33CD93505A5382434", 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "1" 
   }, 
   "sdtInformacionAdicional": { 
      "sBTDatoLista": [ 
      { 
         "clave": "Impuesto s/Intereses en Cuota", 
         "valor": "S" 
      }, 
      { 
          "clave": "Renovar a 30 dias", 
          "valor": "N" 
      } 
      ] 
   }, 
   "Btoutreq": { 
      "Numero": "111399", 
      "Estado": "OK", 
      "Servicio": "BTPrestamos.ObtenerInformacionAdicional", 
      "Requerimiento": "1", 
      "Fecha": "2023-05-16", 
      "Canal": "BTDIGITAL", 
      "Hora": "16:01:52" 
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
<td>operacionUId</td>
<td>Long</td>
<td>Identificador único de operación.</td>
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
<td>sdtInformacionAdicional</td>
<td>sBTDatoLista</td>
<td>Información Adicional de datos.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTDatoLista son los siguientes:</p>
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
<td>clave</td>
<td>String</td>
<td>Identificador de información adicional.</td>
</tr>
<tr>
<td>valor</td>
<td>String</td>
<td>Valor de información adicional.</td>
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
<td>Debe ingresar identificador de operación.</td>
</tr>
<tr>
<td>30013</td>
<td>No existe registro para el identificador único.</td>
</tr>
</tbody>
</table>
</div></template>


