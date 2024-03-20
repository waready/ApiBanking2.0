<template><div><h1 id="obtener-detalle-de-orden-de-cuenta" tabindex="-1"><a class="header-anchor" href="#obtener-detalle-de-orden-de-cuenta"><span>Obtener Detalle de Orden de Cuenta</span></a></h1>
<p>Método para obtener la información de las líneas  del detalle de pago.</p>
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
<td>BTCASHManagement.ObtenerDetalleOrdenCuenta</td>
<td>RBTPGC23F</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Detalle de Orden de Cuenta:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTCASHManagement.ObtenerDetalleOrdenCuenta> 
         <bts:Btinreq> 
            <bts:Requerimiento>0</bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Device>GZ</bts:Device> 
            <bts:Usuario>Instalador</bts:Usuario> 
            <bts:Token>744307195e99865B3A2E76CF</bts:Token> 
         </bts:Btinreq> 
         <bts:ordenId>204</bts:ordenId> 
         <bts:clienteUId>376</bts:clienteUId> 
      </bts:BTCASHManagement.ObtenerDetalleOrdenCuenta> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTCASHManagement_v1?ObtenerDetalleOrdenCuenta=' \ 
  -H 'Content-Type: application/json' \ 
  -H 'Postman-Token: 5671946f-3030-43ca-9d7b-58d54d588d21,a454ff51-cf63-4795-a47b-05a16d861dcd' \ 
  -H 'cache-control: no-cache' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "GZ", 
		"Usuario": "Instalador", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "ordenId": "204", 
    "clienteUId": "376" 
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
      <BTCASHManagement.ObtenerDetalleOrdenCuentaResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>GZ</Device> 
            <Usuario>Instalador</Usuario> 
            <Requerimiento>0</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>744307195e99865B3A2E76CF</Token> 
         </Btinreq> 
         <cuentaDebito>34</cuentaDebito> 
         <cantidadLineas>3</cantidadLineas> 
         <moneda>0</moneda> 
         <importe>82</importe> 
         <referencia/> 
         <fechaPago>2023-09-04</fechaPago> 
         <estado>P<estado/> 
         <erroresPago/> 
         <detallePagos/> 
         <Erroresnegocio> 
            <BTErrorNegocio> 
               <Severidad/> 
               <Descripcion/> 
               <Codigo>0</Codigo> 
            </BTErrorNegocio> 
         </Erroresnegocio> 
         <Btoutreq> 
            <Numero>254019</Numero> 
            <Estado>NEG_INFO</Estado> 
            <Servicio>BTCASHManagement.ObtenerDetalleOrdenCuenta</Servicio> 
            <Requerimiento>0</Requerimiento> 
            <Fecha>2023-11-27</Fecha> 
            <Hora>14:57:02</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTCASHManagement.ObtenerDetalleOrdenCuentaResponse> 
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
    "cuentaDebito": 34, 
    "cantidadLineas": 3, 
    "moneda": 0, 
    "importe": 82, 
    "referencia": "", 
    "fechaPago": "2023-09-04", 
    "estado": "P", 
    "erroresPago": "", 
    "detallePagos": "", 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": 7174, 
        "Estado": "OK", 
        "Servicio": "BTCASHManagement.ObtenerDetalleOrdenCuenta", 
        "Requerimiento": "1", 
        "Fecha": "2019-04-24", 
        "Hora": "15:23:16", 
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
<td>ordenId</td>
<td>Long</td>
<td>Identificador de orden.</td>
</tr>
<tr>
<td>clienteUId</td>
<td>Long</td>
<td>Identificador único de cliente.</td>
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
<td>cuentaDebito</td>
<td>Long</td>
<td>Operación de débito.</td>
</tr>
<tr>
<td>cantidadLineas</td>
<td>Int</td>
<td>Cantidad de líneas del archivo.</td>
</tr>
<tr>
<td>moneda</td>
<td>Short</td>
<td>Moneda.</td>
</tr>
<tr>
<td>importe</td>
<td>Double</td>
<td>Importe total.</td>
</tr>
<tr>
<td>referencia</td>
<td>String</td>
<td>Referencia del pago o cobro.</td>
</tr>
<tr>
<td>fechaPago</td>
<td>Date</td>
<td>Fecha de pago o cobro.</td>
</tr>
<tr>
<td>estado</td>
<td>String</td>
<td>Estado del archivo.</td>
</tr>
<tr>
<td>erroresPago</td>
<td>String</td>
<td>Lista de mensajes del cabezal de pago.</td>
</tr>
<tr>
<td>detallePagos</td>
<td>sBTDetallePago</td>
<td>Lista de información del archivo con su estado y mensaje.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTDetallePago son los siguientes:</p>
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
<td>nombre</td>
<td>String</td>
<td>Nombre del Beneficiario de Pago.</td>
</tr>
<tr>
<td>beneficiarioId</td>
<td>String</td>
<td>Identificador de Beneficiario.</td>
</tr>
<tr>
<td>beneficiarioCuenta</td>
<td>String</td>
<td>Cuenta del Beneficiario.</td>
</tr>
<tr>
<td>beneficiarioBanco</td>
<td>String</td>
<td>Banco del Beneficiario.</td>
</tr>
<tr>
<td>fechaPago</td>
<td>Date</td>
<td>Fecha de Pago o Cobro.</td>
</tr>
<tr>
<td>moneda</td>
<td>Short</td>
<td>Moneda.</td>
</tr>
<tr>
<td>importe</td>
<td>Double</td>
<td>Importe.</td>
</tr>
<tr>
<td>estado</td>
<td>String</td>
<td>Estado de la línea.</td>
</tr>
<tr>
<td>mensajesError</td>
<td>String</td>
<td>Lista de mensajes de la línea.</td>
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
<td>1030712</td>
<td>Se requiere cuenta para recuperar la información.</td>
</tr>
<tr>
<td>1030713</td>
<td>El contrato consultado no corresponde a la cuenta recibida.</td>
</tr>
<tr>
<td>1030770</td>
<td>No se recuperó información para la cuenta recibida.</td>
</tr>
<tr>
<td>1039999</td>
<td>Error no clasificado.</td>
</tr>
</tbody>
</table>
</div></template>


