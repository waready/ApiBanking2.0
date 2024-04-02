<template><div><h1 id="obtener-prestamos-cancelados" tabindex="-1"><a class="header-anchor" href="#obtener-prestamos-cancelados"><span>Obtener Préstamos Cancelados</span></a></h1>
<p>Método para devolver un listado de las operaciones de préstamos cancelados para un cliente.</p>
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
<td>BTClientes.ObtenerPrestamosCancelados</td>
<td>RBTPG219</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio Obtener Prestamos Cancelados:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTClientes.ObtenerPrestamosCancelados> 
         <bts:Btinreq> 
            <bts:Device>MC</bts:Device> 
            <bts:Token>b674899860CD285A89A23FBE</bts:Token> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Requerimiento>1</bts:Requerimiento> 
         </bts:Btinreq> 
         <bts:clienteUId>5</bts:clienteUId> 
      </bts:BTClientes.ObtenerPrestamosCancelados> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerPrestamosCancelados \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{	 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "324915377F955E77534D3E02" 
	}, 
    "clienteUId": "10010", 
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
      <BTClientes.ObtenerPrestamosCanceladosResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>MC</Device> 
            <Usuario>INSTALADOR</Usuario> 
            <Requerimiento>1</Requerimiento> 
            <Canal>BTDIGITAL</Canal> 
            <Token>b674899860CD285A89A23FBE</Token> 
         </Btinreq> 
         <sdtPrestamos> 
            <sBTPrestamoCancelado> 
               <operacionUId>1</operacionUId> 
               <idOperacionFmt>0000000170-000</idOperacionFmt> 
               <idOperacionBT>0010000100101000000000000000002700000000000170003</idOperacionBT> 
               <producto> 
                  <productoUId>0</productoUId> 
                  <nombre>PRÉSTAMOS HIPOTECARIOS, Amor.Libre Empresa Int.Ad</nombre> 
                  <moneda>$</moneda> 
                  <papel/> 
               </producto> 
               <sucursal>Sucursal Beta</sucursal> 
               <fechaValor>2019-01-15</fechaValor> 
               <fechaVencimiento>2020-01-15</fechaVencimiento> 
               <fechaCancelacion>2020-01-15</fechaCancelacion> 
            </sBTPrestamoCancelado> 
         </sdtPrestamos> 
         <Erroresnegocio/> 
         <Btoutreq> 
            <Numero>270</Numero> 
            <Servicio>BTClientes.ObtenerPrestamosCancelados</Servicio> 
            <Estado>OK</Estado> 
            <Fecha>2020-04-13</Fecha> 
            <Requerimiento>1</Requerimiento> 
            <Hora>10:42:34</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTClientes.ObtenerPrestamosCanceladosResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
{ 
	"Btinreq": { 
		"Device": "MC", 
		"Usuario": "INSTALADOR", 
		"Requerimiento": "1", 
		"Canal": "BTDIGITAL", 
		"Token": "b674899860CD285A89A23FBE" 
	}, 
	"sdtPrestamos": { 
		"sBTPrestamoCancelado": { 
			"operacionUId": "1", 
			"idOperacionFmt": "0000000170-000", 
			"idOperacionBT": "0010000100101000000000000000002700000000000170003", 
			"producto": { 
				"productoUId": "0", 
				"nombre": "PRÉSTAMOS HIPOTECARIOS, Amor.Libre Empresa Int.Ad", 
				"moneda": "$", 
				"papel": "" 
			}, 
			"sucursal": "Sucursal Beta", 
			"fechaValor": "2019-01-15", 
			"fechaVencimiento": "2020-01-15", 
			"fechaCancelacion": "2020-01-15" 
		} 
	}, 
	"Erroresnegocio": "", 
	"Btoutreq": { 
		"Numero": "270", 
		"Servicio": "BTClientes.ObtenerPrestamosCancelados", 
		"Estado": "OK", 
		"Fecha": "2020-04-13", 
		"Requerimiento": "1", 
		"Hora": "10:42:34", 
		"Canal": "BTDIGITAL" 
	}, 
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
<td>clienteUId</td>
<td>Long</td>
<td>Identificador de cliente.</td>
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
<td>sdtPrestamos</td>
<td>sBTPrestamoCancelado</td>
<td>Listado de préstamos cancelados.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTPrestamoCancelado son los siguientes:</p>
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
<td>operacionUId</td>
<td>Long</td>
<td>Identificador único de operación.</td>
</tr>
<tr>
<td>idOperacionFmt</td>
<td>String</td>
<td>Identificador String (concatenación de algunos conceptos claves de la operación).</td>
</tr>
<tr>
<td>idOperacionBT</td>
<td>String</td>
<td>Identificador String Bantotal (concatenación de todos los conceptos claves de la operación).</td>
</tr>
<tr>
<td>producto</td>
<td>sBTProducto</td>
<td>Datos del producto.</td>
</tr>
<tr>
<td>sucursal</td>
<td>String</td>
<td>Nombre de la sucursal.</td>
</tr>
<tr>
<td>fechaValor</td>
<td>Date</td>
<td>Fecha valor de la operación.</td>
</tr>
<tr>
<td>fechaVencimiento</td>
<td>Date</td>
<td>Fecha de vencimiento.</td>
</tr>
<tr>
<td>fechaCancelacion</td>
<td>Date</td>
<td>Fecha de cancelación.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTProducto son los siguientes:</p>
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
<td>Campo</td>
<td>Tipo</td>
<td>Comentarios.</td>
</tr>
<tr>
<td>productoUId</td>
<td>Long</td>
<td>Identificador único de producto.</td>
</tr>
<tr>
<td>nombre</td>
<td>String</td>
<td>Nombre de producto.</td>
</tr>
<tr>
<td>moneda</td>
<td>String</td>
<td>Símbolo de moneda.</td>
</tr>
<tr>
<td>papel</td>
<td>String</td>
<td>Símbolo de papel.</td>
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
<td>No se recuperó la cuenta para el Identificador.</td>
</tr>
</tbody>
</table>
</div></template>


