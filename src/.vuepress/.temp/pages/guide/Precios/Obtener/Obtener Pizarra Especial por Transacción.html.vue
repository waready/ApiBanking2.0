<template><div><h1 id="obtener-pizarra-especial-por-transaccion" tabindex="-1"><a class="header-anchor" href="#obtener-pizarra-especial-por-transaccion"><span>Obtener Pizarra Especial por Transacción</span></a></h1>
<p>Método para obtener la pizarra especial para una transacción.</p>
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
<td>BTPrecios.ObtenerPizarraEspecialPorTransaccion</td>
<td>RBTPG355</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Pizarra Especial por Transacción:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrecios.ObtenerPizarraEspecialPorTransaccion> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>75e20bd1614A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:clienteUId>361</bts:clienteUId> 
         <bts:modulo>50</bts:modulo> 
         <bts:transaccion>100</bts:transaccion> 
         <bts:monedaId>2222</bts:monedaId> 
      </bts:BTPrecios.ObtenerPizarraEspecialPorTransaccion> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrecios?ObtenerPizarraEspecialPorTransaccion=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 1e026dc4-d252-eff9-4dce-9398f81a587e' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "clienteUId":"361", 
   " modulo":"50", 
    "transaccion":"100", 
    "monedaId":"2222" 
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
      <BTPrecios.ObtenerPizarraEspecialPorTransaccionResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>75e20bd1614A8B5C60A82434</Token> 
         </Btinreq> 
         <arbitrajeCompra>1.00</arbitrajeCompra> 
         <arbitrajeVenta>1.00</arbitrajeVenta> 
         <tipoCambioCompra>19.10</tipoCambioCompra> 
         <tipoCambioVenta>19.75</tipoCambioVenta> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>898</Numero> 
            <Estado>OK</Estado> 
            <Servicio>BTPrecios.ObtenerPizarraEspecialPorTransaccion</Servicio> 
            <Fecha>2017-12-21</Fecha> 
            <Requerimiento/> 
            <Hora>11:44:49</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPrecios.ObtenerPizarraEspecialPorTransaccionResponse> 
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
	"arbitrajeCompra":"1.00", 
	"arbitrajeVenta":"1.00", 
	"tipoCambioCompra":"19.10", 
	"tipoCambioVenta":"19.75", 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "901", 
        "Estado": "OK", 
        "Servicio": "BTPrecios.ObtenerPizarraEspecialPorTransaccion", 
        "Fecha": "2017-12-21", 
        "Requerimiento": "", 
        "Hora": "12:27:52", 
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
<td>clienteUId</td>
<td>Long</td>
<td>Identificador único de cliente.</td>
</tr>
<tr>
<td>modulo</td>
<td>Int</td>
<td>Código de módulo Bantotal.</td>
</tr>
<tr>
<td>transaccion</td>
<td>Int</td>
<td>Código de transacción Bantotal.</td>
</tr>
<tr>
<td>monedaId</td>
<td>Short</td>
<td>Identificador de moneda.</td>
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
<td>arbitrajeCompra</td>
<td>Double</td>
<td>Valor del arbitraje (Compra).</td>
</tr>
<tr>
<td>arbitrajeVenta</td>
<td>Double</td>
<td>Valor del arbitraje (Venta).</td>
</tr>
<tr>
<td>tipoCambioCompra</td>
<td>Double</td>
<td>Valor del tipo de cambio (Compra).</td>
</tr>
<tr>
<td>tipoCambioVenta</td>
<td>Double</td>
<td>Valor del tipo de cambio (Venta).</td>
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
<td>Debe ingresar transacción Bantotal.</td>
</tr>
<tr>
<td>30002</td>
<td>Debe ingresar módulo Bantotal.</td>
</tr>
<tr>
<td>30003</td>
<td>La moneda ingresada no existe.</td>
</tr>
<tr>
<td>30004</td>
<td>El módulo ingresado no existe.</td>
</tr>
</tbody>
</table>
</div></template>


