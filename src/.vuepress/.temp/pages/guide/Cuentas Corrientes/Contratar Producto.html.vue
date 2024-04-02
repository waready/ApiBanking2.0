<template><div><h1 id="contratar-producto" tabindex="-1"><a class="header-anchor" href="#contratar-producto"><span>Contratar Producto</span></a></h1>
<p>Método para contratar una cuenta corriente en Bantotal.</p>
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
<td>BTCuentasCorrientes.ContratarProducto</td>
<td>RBTPG032</td>
<td>Global</td>
</tr>
</tbody>
</table>
<h3 id="configuracion-backend" tabindex="-1"><a class="header-anchor" href="#configuracion-backend"><span>Configuración Backend</span></a></h3>
<ol>
<li>Si no se ingresa valor en el parámetro 'sucursalId', su valor se asume de la cuenta cliente. Si la opción general 3282 está activada se tomará la sucursal del usuario que ejecuta el servicio.</li>
</ol>
<blockquote>
<p>Ejemplo de invocación al método Contratar Producto:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCuentasCorrientes.ContratarProducto> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>268b6d23eb4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:clienteUId>4</bts:clienteUId> 
         <bts:productoUId>41</bts:productoUId> 
         <bts:nombreSubCuenta>C.A. Ahorro</bts:nombreSubCuenta> 
         <bts:sucursalId>0</bts:sucursalId> 
      </bts:BTCuentasCorrientes.ContratarProducto> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCuentasCorrientes?ContratarProducto=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: b80d8c23-883d-589a-228b-4009ae6eba1c' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "clienteUId": 4, 
    "productoUId": 41, 
    "nombreSubCuenta": "C.A. Pesos", 
    "sucursalId": 0 
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
      <BTCuentasCorrientes.ContratarProductoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>268b6d23eb4A8B5C60A82434</Token> 
         </Btinreq> 
         <operacionUId>401</operacionUId> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>853</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTCuentasCorrientes.ContratarProducto</Servicio> 
            <Fecha>2017-12-18</Fecha> 
            <Requerimiento/> 
            <Hora>10:33:16</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCuentasCorrientes.ContratarProductoResponse> 
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
    "operacionUId": "402", 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "855", 
        "Estado": "OK", 
        "Servicio": "BTCuentasCorrientes.ContratarProducto", 
        "Fecha": "2017-12-18", 
        "Requerimiento": "", 
        "Hora": "10:35:49", 
        "Canal": "BTDIGITAL" 
    } 
}' 
``` 
</code-block> 
</code-group>  
### Datos de entrada 
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
<td>clienteUId</td>
<td>Long</td>
<td>Identificador único de cliente.</td>
</tr>
<tr>
<td>productoUId</td>
<td>Long</td>
<td>Identificador único de producto.</td>
</tr>
<tr>
<td>nombreSubCuenta</td>
<td>String</td>
<td>Nombre de la cuenta cliente.</td>
</tr>
<tr>
<td>sucursalId</td>
<td>Int</td>
<td>Identificador de sucursal.</td>
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
<td>operacionUId</td>
<td>Long</td>
<td>Identificador único de la operación.</td>
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
<td>No se recibió el identificador de cliente.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recuperó la cuenta para el identificador.</td>
</tr>
<tr>
<td>30003</td>
<td>No se recibió el identificador único de producto.</td>
</tr>
<tr>
<td>30004</td>
<td>No existe registro para el identificador único de producto.</td>
</tr>
<tr>
<td>30005</td>
<td>La operación ingresada no corresponde a una cuenta corriente.</td>
</tr>
<tr>
<td>30006</td>
<td>Cuenta cliente no puede ser vacío.</td>
</tr>
<tr>
<td>30007</td>
<td>No se encuentra definida la moneda.</td>
</tr>
<tr>
<td>30008</td>
<td>No existe el producto seleccionado.</td>
</tr>
<tr>
<td>30009</td>
<td>No se pudo crear la cuenta vista.</td>
</tr>
<tr>
<td>30010</td>
<td>El cliente no existe.</td>
</tr>
</tbody>
</table>
</div></template>


