<template><div><h1 id="obtener-pizarra-por-modulo" tabindex="-1"><a class="header-anchor" href="#obtener-pizarra-por-modulo"><span>Obtener Pizarra por Módulo</span></a></h1>
<p>Método que devuelve la pizarra genérica del módulo.</p>
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
<td>BTConfiguracionBantotal.ObtenerPizarraPorModulo</td>
<td>RBTPG294</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Pizarra por Módulo:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTConfiguracionBantotal.ObtenerPizarraPorModulo> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>BANTOTAL</bts:Usuario> 
            <bts:Token>480647346F955E77534D3E02</bts:Token> 
            <bts:Device>AC</bts:Device> 
         </bts:Btinreq> 
         <bts:modulo>20</bts:modulo> 
      </bts:BTConfiguracionBantotal.ObtenerPizarraPorModulo> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal_v1?ObtenerPizarraPorModulo' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
  	"bts:Btinreq": { 
	  "bts:Canal": "BTDIGITAL", 
	  "bts:Requerimiento": "1", 
	  "bts:Usuario": "BANTOTAL", 
	  "bts:Token": "480647346F955E77534D3E02", 
	  "bts:Device": "AC" 
	}, 
	"modulo": 20, 
{ 
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
      <BTConfiguracionBantotal.ObtenerPizarraPorModuloResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>BANTOTAL</Usuario> 
            <Token>480647346F955E77534D3E02</Token> 
            <Device>AC</Device> 
         </Btinreq> 
         <sdtPizarras> 
            <sBTPizarra> 
               <codigo>99998</codigo> 
               <descripcion>Pizarra Atrib. Exten</descripcion> 
            </sBTPizarra> 
         </sdtPizarras> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTConfiguracionBantotal.ObtenerPizarraPorModulo</Servicio> 
            <Fecha>2021-03-18</Fecha> 
            <Hora>10:49:45</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>8033</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTConfiguracionBantotal.ObtenerPizarraPorModuloResponse> 
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
	  "Usuario": "BANTOTAL", 
	  "Token": "480647346F955E77534D3E02", 
	  "Device": "AC" 
	}, 
	"sdtPizarras": { 
	  "sBTPizarra": { 
		"codigo": "99998", 
		"descripcion": "Pizarra Atrib. Exten" 
	  } 
	}, 
	"Erroresnegocio": {}, 
	"Btoutreq": { 
	  "Canal": "BTDIGITAL", 
	  "Servicio": "BTConfiguracionBantotal.ObtenerPizarraPorModulo", 
	  "Fecha": "2021-03-18", 
	  "Hora": "10:49:45", 
	  "Requerimiento": "1", 
	  "Numero": "8033", 
	  "Estado": "OK" 
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
<td>modulo</td>
<td>Int</td>
<td>Módulo.</td>
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
<td>sdtPizarras</td>
<td>sBTPizarra</td>
<td>Pizarras.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTCuotaPrestamoOriginal son los siguientes:</p>
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
<td>Int</td>
<td>Identificador de pizarra.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Nombre de la pizarra.</td>
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
<td>40001</td>
<td>No se encontraron pizarras de tasas para el módulo indicado</td>
</tr>
</tbody>
</table>
</div></template>


