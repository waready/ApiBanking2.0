<template><div><h1 id="obtener-plazos-fijos-con-avance" tabindex="-1"><a class="header-anchor" href="#obtener-plazos-fijos-con-avance"><span>Obtener Plazos Fijos con Avance</span></a></h1>
<p>Método para obtener un listado de los plazos fijos de un cliente con su avance.</p>
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
<td>BTClientes.ObtenerPlazosFijoConAvance</td>
<td>RBTPG403</td>
<td>Global</td>
</tr>
</tbody>
</table>
<h3 id="configuracion-backend" tabindex="-1"><a class="header-anchor" href="#configuracion-backend"><span>Configuración Backend</span></a></h3>
<ol>
<li>Se pueden parametrizar módulos adicionales a incluir ingresando en la guía especial 1041 los siguientes valores:</li>
</ol>
<table>
<thead>
<tr>
<th>Campo</th>
<th>Valor</th>
</tr>
</thead>
<tbody>
<tr>
<td>Correlativo 1</td>
<td>3</td>
</tr>
<tr>
<td>Correlativo 2</td>
<td>1</td>
</tr>
<tr>
<td>Valor específico 1</td>
<td>Identificador del módulo a incluir.</td>
</tr>
</tbody>
</table>
<ol start="2">
<li>Se pueden parametrizar tipos de operación a excluir ingresando en la guía especial 1041 los siguientes valores:</li>
</ol>
<table>
<thead>
<tr>
<th>Campo</th>
<th>Valor</th>
</tr>
</thead>
<tbody>
<tr>
<td>Correlativo 1</td>
<td>3</td>
</tr>
<tr>
<td>Correlativo 2</td>
<td>2</td>
</tr>
<tr>
<td>Valor específico 1</td>
<td>Módulo del tipo de operación a excluir.</td>
</tr>
<tr>
<td>Valor específico 2</td>
<td>Tipo de operación a excluir.</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Plazos Fijo con Avance:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTClientes.ObtenerPlazosFijoConAvance> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>BANTOTAL</bts:Usuario> 
            <bts:Token>1152085960F955E77534D3E0</bts:Token> 
            <bts:Device>AC</bts:Device> 
         </bts:Btinreq> 
         <bts:clienteUId>10010</bts:clienteUId> 
      </bts:BTClientes.ObtenerPlazosFijoConAvance> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTClientes_v1?ObtenerPlazosFijoConAvance=' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 02100864-83c5-1642-ca5f-a8589b3524b4' \ 
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
      <BTClientes.ObtenerPlazosFijoConAvanceResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>BANTOTAL</Usuario> 
            <Token>1152085960F955E77534D3E0</Token> 
            <Device>AC</Device> 
         </Btinreq> 
         <sdtProductosPlazoFijo> 
            <sBTProductoPlazoFijo> 
               <operacionUId>10108</operacionUId> 
               <idOperacionFmt>0000000292_000</idOperacionFmt> 
               <idOperacionBT>0010000100022000000000000000002700000000000292001</idOperacionBT> 
               <producto> 
                  <productoUId>132</productoUId> 
                  <nombre>DEPOSITOS A PLAZO FIJO, DPF Intransferible</nombre> 
                  <moneda>$</moneda> 
                  <papel/> 
               </producto> 
               <sucursal>Sucursal Beta</sucursal> 
               <saldo>1000.00</saldo> 
               <estado>Normal</estado> 
               <fechaAlta>2018-10-15</fechaAlta> 
               <fechaVencimiento>2019-10-15</fechaVencimiento> 
               <plazoTotal>360</plazoTotal> 
               <plazoTranscurrido>507</plazoTranscurrido> 
               <porcentajeAvance>100.000000</porcentajeAvance> 
            </sBTProductoPlazoFijo> 
            <sBTProductoPlazoFijo> 
               <operacionUId>7</operacionUId> 
               <idOperacionFmt>0000000028_000</idOperacionFmt> 
               <idOperacionBT>0010100000022000000000000000002700000000000028001</idOperacionBT> 
               <producto> 
                  <productoUId>132</productoUId> 
                  <nombre>DEPOSITOS A PLAZO FIJO, DPF Intransferible</nombre> 
                  <moneda>$</moneda> 
                  <papel/> 
               </producto> 
               <sucursal>Casa Matriz</sucursal> 
               <saldo>15000.00</saldo> 
               <estado>Normal</estado> 
               <fechaAlta>2018-08-16</fechaAlta> 
               <fechaVencimiento>2019-08-12</fechaVencimiento> 
               <plazoTotal>361</plazoTotal> 
               <plazoTranscurrido>567</plazoTranscurrido> 
               <porcentajeAvance>100.000000</porcentajeAvance> 
            </sBTProductoPlazoFijo> 
            <sBTProductoPlazoFijo> 
               <operacionUId>8</operacionUId> 
               <idOperacionFmt>0000000085_000</idOperacionFmt> 
               <idOperacionBT>0010100000022000000000000000002700000000000085001</idOperacionBT> 
               <producto> 
                  <productoUId>132</productoUId> 
                  <nombre>DEPOSITOS A PLAZO FIJO, DPF Intransferible</nombre> 
                  <moneda>$</moneda> 
                  <papel/> 
               </producto> 
               <sucursal>Casa Matriz</sucursal> 
               <saldo>1500000.00</saldo> 
               <estado>Normal</estado> 
               <fechaAlta>2015-12-28</fechaAlta> 
               <fechaVencimiento>2016-12-22</fechaVencimiento> 
               <plazoTotal>360</plazoTotal> 
               <plazoTranscurrido>1529</plazoTranscurrido> 
               <porcentajeAvance>100.000000</porcentajeAvance> 
            </sBTProductoPlazoFijo> 
         </sdtProductosPlazoFijo> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTClientes.ObtenerPlazosFijoConAvance</Servicio> 
            <Fecha>2020-04-20</Fecha> 
            <Hora>18:06:18</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>7333</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTClientes.ObtenerPlazosFijoConAvanceResponse> 
   </SOAP-ENV:Body> 
</SOAP-ENV:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
        "Canal": "BTDIGITAL", 
        "Requerimiento": "", 
        "Usuario": "BANTOTAL", 
        "Token": "324915377F955E77534D3E02", 
        "Device": "AC" 
    }, 
    "sdtProductosPlazoFijo": { 
		"sBTProductoPlazoFijo": [ 
		  { 
			"operacionUId": "10108", 
			"idOperacionFmt": "0000000292_000", 
			"idOperacionBT": "0010000100022000000000000000002700000000000292001", 
			"producto": { 
			  "productoUId": "132", 
			  "nombre": "DEPOSITOS A PLAZO FIJO, DPF Intransferible", 
			  "moneda": "$" 
			}, 
			"sucursal": "Sucursal Beta", 
			"saldo": "1000.00", 
			"estado": "Normal", 
			"fechaAlta": "2018-10-15", 
			"fechaVencimiento": "2019-10-15", 
			"plazoTotal": "360", 
			"plazoTranscurrido": "507", 
			"porcentajeAvance": "100.000000" 
		  }, 
		  { 
			"operacionUId": "7", 
			"idOperacionFmt": "0000000028_000", 
			"idOperacionBT": "0010100000022000000000000000002700000000000028001", 
			"producto": { 
			  "productoUId": "132", 
			  "nombre": "DEPOSITOS A PLAZO FIJO, DPF Intransferible", 
			  "moneda": "$" 
			}, 
			"sucursal": "Casa Matriz", 
			"saldo": "15000.00", 
			"estado": "Normal", 
			"fechaAlta": "2018-08-16", 
			"fechaVencimiento": "2019-08-12", 
			"plazoTotal": "361", 
			"plazoTranscurrido": "567", 
			"porcentajeAvance": "100.000000" 
		  }, 
		  { 
			"operacionUId": "8", 
			"idOperacionFmt": "0000000085_000", 
			"idOperacionBT": "0010100000022000000000000000002700000000000085001", 
			"producto": { 
			  "productoUId": "132", 
			  "nombre": "DEPOSITOS A PLAZO FIJO, DPF Intransferible", 
			  "moneda": "$" 
			}, 
			"sucursal": "Casa Matriz", 
			"saldo": "1500000.00", 
			"estado": "Normal", 
			"fechaAlta": "2015-12-28", 
			"fechaVencimiento": "2016-12-22", 
			"plazoTotal": "360", 
			"plazoTranscurrido": "1529", 
			"porcentajeAvance": "100.000000" 
		  } 
		] 
	}, 
    "Erroresnegocio": { 
        "BTErrorNegocio": [] 
    }, 
    "Btoutreq": { 
        "Canal": "BTDIGITAL", 
        "Servicio": "BTClientes.ObtenerPlazosFijoConAvance", 
        "Fecha": "2019-11-19", 
        "Hora": "13:05:22", 
        "Requerimiento": "", 
        "Numero": 6924, 
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
<td>sdtProductosPlazoFijo</td>
<td>sBTProductoPlazoFijo</td>
<td>Listado de plazos fijos.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTProductoPlazoFijo son los siguientes:</p>
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
<td>Identificador.</td>
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
<td>Nombre de la sucursal de alta.</td>
</tr>
<tr>
<td>saldo</td>
<td>Double</td>
<td>Saldo de la operación.</td>
</tr>
<tr>
<td>estado</td>
<td>String</td>
<td>Descripción de estado de la operación.</td>
</tr>
<tr>
<td>fechaAlta</td>
<td>Date</td>
<td>Fecha de alta de la operación.</td>
</tr>
<tr>
<td>fechaVencimiento</td>
<td>Date</td>
<td>Fecha de vencimiento de la operación.</td>
</tr>
<tr>
<td>plazoTotal</td>
<td>Int</td>
<td>Plazo total de la operación.</td>
</tr>
<tr>
<td>plazoTranscurrido</td>
<td>Int</td>
<td>Plazo transcurrido desde la fecha de alta de la operación.</td>
</tr>
<tr>
<td>porcentajeAvance</td>
<td>Double</td>
<td>Porcentaje de avance.</td>
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
<td>Nombre del producto.</td>
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
<td>No se recuperó la cuenta para el Identificador: ?</td>
</tr>
</tbody>
</table>
</div></template>


