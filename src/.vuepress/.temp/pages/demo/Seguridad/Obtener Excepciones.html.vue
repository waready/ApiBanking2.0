<template><div><h1 id="obtener-excepciones" tabindex="-1"><a class="header-anchor" href="#obtener-excepciones"><span>Obtener Excepciones</span></a></h1>
<p>Método para obtener un listado de las excepciones por usuario.</p>
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
<td>BTSeguridad.ObtenerExcepciones</td>
<td>RBTPG086</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Excepciones:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTSeguridad.ObtenerExcepciones> 
         <bts:Btinreq> 
            <bts:Device>ES</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>dac8c7fdec4A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:usuario>BANTOTAL</bts:usuario> 
      </bts:BTSeguridad.ObtenerExcepciones> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTSeguridad?ObtenerExcepciones=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: e024d37c-0177-05ca-8f99-25dbfae4abbb' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "usuario": "BANTOTAL" 
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
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <SOAP-ENV:Body> 
      <BTSeguridad.ObtenerExcepcionesResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>ES</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>dac8c7fdec4A8B5C60A82434</Token> 
         </Btinreq> 
         <excepciones> 
            <sBTExcepcionns:sBTExcepcion xmlns:sBTExcepcionns="http://uy.com.dlya.bantotal/BTSOA/" xmlns="ServiciosBT"> 
               <identificador>1853</identificador> 
               <descripcion>Autorización T.Cbio./Arbitraje</descripcion> 
               <usuario>INSTALADOR</usuario> 
               <nombreUsuario>INSTALADOR</nombreUsuario> 
               <movimientoUId>0</movimientoUId> 
               <descripcionMovimiento>Compra USD Caja</descripcionMovimiento> 
               <nombreSucursal>Casa Matriz</nombreSucursal> 
               <ligada>N</ligada> 
            </sBTExcepcionns:sBTExcepcion> 
         </excepciones> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>891</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTSeguridad.ObtenerExcepciones</Servicio> 
            <Requerimiento>1</Requerimiento> 
            <Fecha>2017-12-20</Fecha> 
            <Hora>16:40:06</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTSeguridad.ObtenerExcepcionesResponse> 
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
    "excepciones": { 
        "sBTExcepcion": [ 
            { 
                "nombreUsuario": "INSTALADOR", 
                "descripcion": "Autorización T.Cbio./Arbitraje", 
                "identificador": "1854", 
                "usuario": "INSTALADOR", 
                "ligada": "N", 
                "movimientoUId": "0", 
                "nombreSucursal": "Casa Matriz", 
                "descripcionMovimiento": "Compra USD Caja" 
            } 
        ] 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "956", 
        "Estado": "OK", 
        "Servicio": "BTSeguridad.ObtenerExcepciones", 
        "Fecha": "2017-12-22", 
        "Requerimiento": "", 
        "Hora": "10:54:51", 
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
<td>usuario</td>
<td>String</td>
<td>Usuario.</td>
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
<td>excepciones</td>
<td>sBTExcepcion</td>
<td>Listado de excepciones.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTExcepcion son los siguientes:</p>
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
<td>Identificador de excepción.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Descripción de la excepción.</td>
</tr>
<tr>
<td>usuario</td>
<td>String</td>
<td>Usuario.</td>
</tr>
<tr>
<td>nombreUsuario</td>
<td>String</td>
<td>Nombre del usuario.</td>
</tr>
<tr>
<td>movimientoUId</td>
<td>Long</td>
<td>Identificador único de movimiento.</td>
</tr>
<tr>
<td>descripcionMovimiento</td>
<td>String</td>
<td>Descripción del movimiento.</td>
</tr>
<tr>
<td>nombreSucursal</td>
<td>String</td>
<td>Nombre de la sucursal.</td>
</tr>
<tr>
<td>ligada</td>
<td>String</td>
<td>Ligada (S/N).</td>
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
<td>No se recibió el usuario.</td>
</tr>
</tbody>
</table>
</div></template>


