<template><div><h1 id="obtener-detalle-reducido" tabindex="-1"><a class="header-anchor" href="#obtener-detalle-reducido"><span>Obtener Detalle Reducido</span></a></h1>
<p>Método para obtener los datos básicos de un préstamo.</p>
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
<td>BTPrestamos.ObtenerDetalleReducido</td>
<td>RBTPG073</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Detalle Reducido:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.ObtenerDetalleReducido> 
         <bts:Btinreq> 
            <bts:Device>AV</bts:Device> 
            <bts:Usuario>MINSTALADOR</bts:Usuario> 
            <bts:Requerimiento></bts:Requerimiento> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Token>6453f934f94A8B5C60A82434</bts:Token> 
         </bts:Btinreq> 
         <bts:OperacionUId>142</bts:OperacionUId> 
      </bts:BTPrestamos.ObtenerDetalleReducido> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos?ObtenerDetalleReducido=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 9c3f1bf5-3274-9009-5a4a-9b755b8652a9' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
    "OperacionUId": 142 
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
      <BTPrestamos.ObtenerDetalleReducidoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Device>AV</Device> 
            <Usuario>MINSTALADOR</Usuario> 
            <Requerimiento/> 
            <Canal>BTDIGITAL</Canal> 
            <Token>6453f934f94A8B5C60A82434</Token> 
         </Btinreq> 
         <sdtPrestamo> 
            <sucursal>Sucursal Beta</sucursal> 
            <cuotasPagasConRetaso>0</cuotasPagasConRetaso> 
            <idOperacionBT>0010000100115000000000000000002700000000000326001</idOperacionBT> 
            <cantidadCuotas>37</cantidadCuotas> 
            <capitalOriginal>180000.00</capitalOriginal> 
            <estado>Normal</estado> 
            <operacionUId>142</operacionUId> 
            <tasaVigente>10.000000</tasaVigente> 
            <plazo>1096</plazo> 
            <saldoCapital>-174180.15</saldoCapital> 
            <tipoTasa>Lineal Anual</tipoTasa> 
            <producto> 
               <papel/> 
               <moneda/> 
               <productoUId>0</productoUId> 
               <nombre>Amort. - Capital F./Empr.- T/F</nombre> 
            </producto> 
            <idOperacionFmt>326-0</idOperacionFmt> 
            <fechaValor>2018-05-18</fechaValor> 
            <fechaVencimiento>2021-05-18</fechaVencimiento> 
            <cantidadCuotasImpagas>36</cantidadCuotasImpagas> 
         </sdtPrestamo> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Numero>766</Numero> 
            <Servicio>BTPrestamos.ObtenerDetalleReducido</Servicio> 
            <Estado>OK</Estado> 
            <Requerimiento/> 
            <Fecha>2017-12-12</Fecha> 
            <Hora>10:55:30</Hora> 
            <Canal>BTDIGITAL</Canal> 
         </Btoutreq> 
      </BTPrestamos.ObtenerDetalleReducidoResponse> 
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
    "sdtPrestamo": { 
        "sucursal": "Sucursal Beta", 
        "idOperacionBT": "0010000100115000000000000000002700000000000326001", 
        "cantidadCuotas": "37", 
        "capitalOriginal": "180000.00", 
        "estado": "Normal", 
        "operacionUId": "142", 
        "tasaVigente": "10.000000", 
        "plazo": "1096", 
        "saldoCapital": "-174180.15", 
        "tipoTasa": "Lineal Anual", 
        "producto": { 
            "papel": "", 
            "moneda": "", 
            "productoUId": "0", 
            "nombre": "Amort. - Capital F./Empr.- T/F" 
        }, 
        "fechaValor": "2018-05-18", 
        "fechaVencimiento": "2021-05-18", 
        "cantidadCuotasImpagas": "36", 
    }, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Numero": "767", 
        "Servicio": "BTPrestamos.ObtenerDetalleReducido", 
        "Estado": "OK", 
        "Requerimiento": "", 
        "Fecha": "2017-12-12", 
        "Hora": "11:15:09", 
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
<td>operacionUId</td>
<td>Long</td>
<td>Identificador único de operación simulada.</td>
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
<td>sdtPrestamo</td>
<td>sBTPrestamo</td>
<td>Datos del préstamo</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTPrestamo son los siguientes:</p>
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
<td>Identificador único de la operación simulada.</td>
</tr>
<tr>
<td>idOperacionFmt</td>
<td>String</td>
<td>Identificador String (concatenación de algunos conceptos claves de la operación).</td>
</tr>
<tr>
<td>idOperacionBT</td>
<td>String</td>
<td>Identificador texto de operación.</td>
</tr>
<tr>
<td>producto</td>
<td>sBTProducto</td>
<td>Producto.</td>
</tr>
<tr>
<td>simboloMoneda</td>
<td>String</td>
<td>Símbolo monetario.</td>
</tr>
<tr>
<td>sucursal</td>
<td>String</td>
<td>Sucursal del préstamo.</td>
</tr>
<tr>
<td>fechaValor</td>
<td>Date</td>
<td>Fecha de alta del préstamo.</td>
</tr>
<tr>
<td>fechaVencimiento</td>
<td>Date</td>
<td>Fecha de vencimiento del préstamo.</td>
</tr>
<tr>
<td>plazo</td>
<td>Int</td>
<td>Plazo del préstamo.</td>
</tr>
<tr>
<td>cantidadCuotas</td>
<td>Int</td>
<td>Cantidad de cuotas del préstamo.</td>
</tr>
<tr>
<td>cantidadCuotasImpagas</td>
<td>Int</td>
<td>Cantidad de cuotas impagas.</td>
</tr>
<tr>
<td>capitalOriginal</td>
<td>Double</td>
<td>Capital original del préstamo.</td>
</tr>
<tr>
<td>saldoCapital</td>
<td>Double</td>
<td>Saldo de capital.</td>
</tr>
<tr>
<td>tipoTasa</td>
<td>String</td>
<td>Tipo de tasa.</td>
</tr>
<tr>
<td>tasaVigente</td>
<td>Double</td>
<td>Tasa vigente.</td>
</tr>
<tr>
<td>estado</td>
<td>String</td>
<td>Estado del préstamo.</td>
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
<td>No se recuperó la operación para el identificador: [Número de Identificador].</td>
</tr>
</tbody>
</table>
</div></template>


