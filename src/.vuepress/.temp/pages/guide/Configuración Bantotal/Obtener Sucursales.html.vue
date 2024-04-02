<template><div><h1 id="obtener-sucursales" tabindex="-1"><a class="header-anchor" href="#obtener-sucursales"><span>Obtener Sucursales</span></a></h1>
<p>Método para obtener un listado de las sucursales registradas en Bantotal.</p>
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
<td>BTConfiguracionBantotal.ObtenerSucursales</td>
<td>RBTPG035</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Sucursales:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTConfiguracionBantotal.ObtenerSucursales> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
      </bts:BTConfiguracionBantotal.ObtenerSucursales> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTConfiguracionBantotal?ObtenerSucursales=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 44ba1342-ce61-303e-bd55-62945147dfe0' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
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
      <BTConfiguracionBantotal.ObtenerSucursalesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>268b6d23eb4A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtSucursales> 
            <sBTSucursal> 
               <identificador>1</identificador> 
               <descripcion>Sucursal Beta</descripcion> 
               <direccion>10222141</direccion> 
               <telefono>15554454</telefono> 
               <latitud>0E-14</latitud> 
               <longitud>0E-14</longitud> 
            </sBTSucursal> 
            <sBTSucursal> 
               <identificador>1000</identificador> 
               <descripcion>Casa Matriz</descripcion> 
               <direccion>102141</direccion> 
               <telefono>25182777 int.127</telefono> 
               <latitud>0E-14</latitud> 
               <longitud>0E-14</longitud> 
            </sBTSucursal> 
            <sBTSucursal> 
               <identificador>25634</identificador> 
               <descripcion>Sucursal 25634</descripcion> 
               <direccion>10448</direccion> 
               <telefono>4503614</telefono> 
               <latitud>0E-14</latitud> 
               <longitud>0E-14</longitud> 
            </sBTSucursal> 
         </sdtSucursales> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>808</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTConfiguracionBantotal.ObtenerSucursales</Servicio> 
            <Fecha>2017-12-17</Fecha> 
            <Requerimiento/> 
            <Hora>18:09:39</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTConfiguracionBantotal.ObtenerSucursalesResponse> 
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
   "sdtSucursales": { 
      "sBTSucursal": [ 
         { 
         "telefono": "15554454", 
         "descripcion": "Sucursal Beta", 
         "direccion": "10222141", 
         "identificador": "1", 
         "latitud": "0E-14", 
         "longitud": "0E-14" 
         }, 
         { 
         "telefono": "25182777 int.127", 
         "descripcion": "Casa Matriz", 
         "direccion": "102141", 
         "identificador": "1000", 
         "latitud": "0E-14", 
         "longitud": "0E-14" 
         }, 
         { 
         "telefono": "4503614", 
         "descripcion": "Sucursal 25634", 
         "direccion": "10448", 
         "identificador": "25634", 
         "latitud": "0E-14", 
         "longitud": "0E-14" 
         } 
      ] 
   }, 
   "Erroresnegocio": { 
      "BTErrorNegocio": [] 
   }, 
   "Btoutreq": { 
      "Numero": "809", 
      "Estado": "OK", 
      "Servicio": "BTConfiguracionBantotal.ObtenerSucursales", 
      "Fecha": "2017-12-17", 
      "Requerimiento": "", 
      "Hora": "18:09:55", 
      "Canal": "BTDIGITAL" 
   } 
}' 
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
<td>sdtSucursales</td>
<td>sBTSucursal</td>
<td>Listado de sucursales.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTSucursal son los siguientes:</p>
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
<td>Identificador de sucursal.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Descripción de sucursal.</td>
</tr>
<tr>
<td>direccion</td>
<td>String</td>
<td>Dirección de sucursal.</td>
</tr>
<tr>
<td>telefono</td>
<td>String</td>
<td>Teléfono de sucursal.</td>
</tr>
<tr>
<td>latitud</td>
<td>Long</td>
<td>Latitud de sucursal.</td>
</tr>
<tr>
<td>longitud</td>
<td>Long</td>
<td>Longitud de sucursal.</td>
</tr>
</tbody>
</table>
<h3 id="errores" tabindex="-1"><a class="header-anchor" href="#errores"><span>Errores</span></a></h3>
<p>No aplica.</p>
</div></template>


