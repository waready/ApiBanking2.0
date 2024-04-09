<template><div><h1 id="obtener-resumen-por-producto-a-cierre-ano" tabindex="-1"><a class="header-anchor" href="#obtener-resumen-por-producto-a-cierre-ano"><span>Obtener Resumen por Producto a Cierre Año</span></a></h1>
<p>Método para obtener un listado con el detalle de las operaciones del cliente ingresado al cierre del año indicado.</p>
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
<td>BTClientes.ObtenerResumenPorProductoACierreAnio</td>
<td>RBTPG271</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al servicio Obtener Resumen por Producto a Cierre Año:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTClientes.ObtenerResumenPorProductoACierreAnio> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>INSTALADOR</bts:Usuario> 
            <bts:Token>244353514CD285A89A23FBEE</bts:Token> 
            <bts:Device>MC</bts:Device> 
         </bts:Btinreq> 
         <bts:clienteUId>10010</bts:clienteUId> 
         <bts:anioConsulta>2018</bts:anioConsulta> 
      </bts:BTClientes.ObtenerResumenPorProductoACierreAnio> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerResumenPorProductoACierreAnio \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "MC", 
		"Usuario": "INSTALADOR", 
		"Requerimiento": "1", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
        "clienteUId": "1000", 
        "anioConsulta":"2018" 
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
      <BTClientes.ObtenerResumenPorProductoACierreAnioResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>INSTALADOR</Usuario> 
            <Token>244353514CD285A89A23FBEE</Token> 
            <Device>MC</Device> 
         </Btinreq> 
         <sdtOperaciones> 
            <sBTDetalleOperacion> 
               <operacionUId>2</operacionUId> 
               <producto> 
                  <productoUId>93</productoUId> 
                  <nombre>CUENTA CORRIENTE, Cuenta corriente P.Física</nombre> 
                  <moneda>$</moneda> 
                  <papel>$</papel> 
               </producto> 
               <saldo>0.00</saldo> 
            </sBTDetalleOperacion> 
            <sBTDetalleOperacion> 
               <operacionUId>7</operacionUId> 
               <producto> 
                  <productoUId>132</productoUId> 
                  <nombre>DEPOSITOS A PLAZO FIJO, DPF Intransferible</nombre> 
                  <moneda>$</moneda> 
                  <papel>$</papel> 
               </producto> 
               <saldo>15000.00</saldo> 
            </sBTDetalleOperacion> 
            <sBTDetalleOperacion> 
               <operacionUId>11</operacionUId> 
               <producto> 
                  <productoUId>105</productoUId> 
                  <nombre>PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF</nombre> 
                  <moneda>$</moneda> 
                  <papel>$</papel> 
               </producto> 
               <saldo>-415000.00</saldo> 
            </sBTDetalleOperacion> 
         </sdtOperaciones> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTClientes.ObtenerResumenPorProductoACierreAnio</Servicio> 
            <Fecha>2020-04-20</Fecha> 
            <Hora>14:06:20</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>7331</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTClientes.ObtenerResumenPorProductoACierreAnioResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
'{ 
    "Btinreq": { 
			"Canal": "BTDIGITAL", 
			"Requerimiento": "1", 
			"Usuario": "INSTALADOR", 
			"Token": "244353514CD285A89A23FBEE", 
			"Device": "MC" 
		}, 
		"sdtOperaciones": { 
			"sBTDetalleOperacion": [ 
				{ 
					"operacionUId": "2", 
					"producto": { 
						"productoUId": "93", 
						"nombre": "CUENTA CORRIENTE, Cuenta corriente P.Física", 
						"moneda": "$", 
						"papel": "$" 
					}, 
					"saldo": "0.00" 
				}, 
				{ 
					"operacionUId": "7", 
					"producto": { 
						"productoUId": "132", 
						"nombre": "DEPOSITOS A PLAZO FIJO, DPF Intransferible", 
						"moneda": "$", 
						"papel": "$" 
					}, 
					"saldo": "15000.00" 
				}, 
				{ 
					"operacionUId": "11", 
					"producto": { 
						"productoUId": "105", 
						"nombre": "PRÉSTAMOS HIPOTECARIOS, Amortización Automática TF", 
						"moneda": "$", 
						"papel": "$" 
					}, 
					"saldo": "-415000.00" 
				} 
			] 
		}, 
		"Erroresnegocio": "", 
		"Btoutreq": { 
			"Canal": "BTDIGITAL", 
			"Servicio": "BTClientes.ObtenerResumenPorProductoACierreAnio", 
			"Fecha": "2020-04-20", 
			"Hora": "14:06:20", 
			"Requerimiento": "1", 
			"Numero": "7331", 
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
<td>clienteUId</td>
<td>Long</td>
<td>Identificador único de cliente.</td>
</tr>
<tr>
<td>anioConsulta</td>
<td>Short</td>
<td>Año de consulta.</td>
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
<td>sdtOperaciones</td>
<td>sBTDetalleOperacion</td>
<td>Listado de detalle de operaciones.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTDetalleOperacion son los siguientes:</p>
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
<td>producto</td>
<td>sBTProducto</td>
<td>Datos del producto.</td>
</tr>
<tr>
<td>saldo</td>
<td>Decimal</td>
<td>Saldo.</td>
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
<td>No se recibió el identificador de operación.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recuperó la cuenta para la operación.</td>
</tr>
</tbody>
</table>
</div></template>


