<template><div><h1 id="obtener-detalle-de-prestamo-cancelado" tabindex="-1"><a class="header-anchor" href="#obtener-detalle-de-prestamo-cancelado"><span>Obtener Detalle de Préstamo Cancelado</span></a></h1>
<p>Devuelve el detalle del préstamo cancelado indicado.</p>
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
<td>BTPrestamos.ObtenerDetallePrestamoCancelado</td>
<td>RBTPG248</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Detalle de Préstamo Cancelado:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTPrestamos.ObtenerDetallePrestamoCancelado> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>BANTOTAL</bts:Usuario> 
            <bts:Token>1576177365F955E77534D3E0</bts:Token> 
            <bts:Device>AC</bts:Device> 
         </bts:Btinreq> 
         <bts:operacionUId>10118</bts:operacionUId> 
      </bts:BTPrestamos.ObtenerDetallePrestamoCancelado> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTPrestamos_v1?ObtenerDetallePrestamoCancelado' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
	"Btinreq": { 
		"Device": "AV", 
		"Usuario": "MINSTALADOR", 
		"Requerimiento": "", 
		"Canal": "BTDIGITAL", 
		"Token": "fa2c02c95a4A8B5C60A82434" 
	}, 
	"operacionUId": "10118" 
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
      <BTPrestamos.ObtenerDetallePrestamoCanceladoResponse> 
         <Btinreq> 
            <Canal>BTDIGITAL</Canal> 
            <Requerimiento>1</Requerimiento> 
            <Usuario>BANTOTAL</Usuario> 
            <Token>1576177365F955E77534D3E0</Token> 
            <Device>AC</Device> 
         </Btinreq> 
         <sdtPrestamo> 
            <operacionUId>10118</operacionUId> 
            <idOperacionFmt>74-0</idOperacionFmt> 
            <idOperacionBT>0010100000101000000000000000002800000000000074001</idOperacionBT> 
            <producto> 
               <productoUId>36</productoUId> 
               <nombre>Amortización Automática TF</nombre> 
               <moneda>$</moneda> 
               <papel>$</papel> 
            </producto> 
            <tipoProducto>AM</tipoProducto> 
            <sucursal>Casa Matriz</sucursal> 
            <simboloMoneda>$</simboloMoneda> 
            <tipoAmortizacion>Francés con Seg.e Impu.</tipoAmortizacion> 
            <capitalOriginal>19999.00</capitalOriginal> 
            <fechaValor>2018-05-15</fechaValor> 
            <fechaVencimiento>2019-05-16</fechaVencimiento> 
            <periodicidad>30</periodicidad> 
            <plazo>366</plazo> 
            <cantidadCuotas>12</cantidadCuotas> 
            <fechaCancelacion>2020-03-05</fechaCancelacion> 
            <claseTasa/> 
            <tipoTasa>Lineal Anual</tipoTasa> 
            <tipoDia>Meses Calendario</tipoDia> 
            <tipoAno>365 Días</tipoAno> 
            <tasaOriginal>23.000000</tasaOriginal> 
            <plus>0.000000</plus> 
            <cronograma> 
               <sBTCuotaCancelada> 
                  <fechaPago>2020-03-05</fechaPago> 
                  <importePago>2486.68</importePago> 
                  <diasMora>0</diasMora> 
               </sBTCuotaCancelada> 
               <sBTCuotaCancelada> 
                  <fechaPago>2020-03-05</fechaPago> 
                  <importePago>2499.33</importePago> 
                  <diasMora>0</diasMora> 
               </sBTCuotaCancelada> 
               <sBTCuotaCancelada> 
                  <fechaPago>2020-03-05</fechaPago> 
                  <importePago>2466.81</importePago> 
                  <diasMora>0</diasMora> 
               </sBTCuotaCancelada> 
               <sBTCuotaCancelada> 
                  <fechaPago>2020-03-05</fechaPago> 
                  <importePago>2442.12</importePago> 
                  <diasMora>0</diasMora> 
               </sBTCuotaCancelada> 
               <sBTCuotaCancelada> 
                  <fechaPago>2020-03-05</fechaPago> 
                  <importePago>2431.69</importePago> 
                  <diasMora>0</diasMora> 
               </sBTCuotaCancelada> 
               <sBTCuotaCancelada> 
                  <fechaPago>2020-03-05</fechaPago> 
                  <importePago>2403.76</importePago> 
                  <diasMora>0</diasMora> 
               </sBTCuotaCancelada> 
               <sBTCuotaCancelada> 
                  <fechaPago>2020-03-05</fechaPago> 
                  <importePago>2380.28</importePago> 
                  <diasMora>0</diasMora> 
               </sBTCuotaCancelada> 
               <sBTCuotaCancelada> 
                  <fechaPago>2020-03-05</fechaPago> 
                  <importePago>2358.28</importePago> 
                  <diasMora>0</diasMora> 
               </sBTCuotaCancelada> 
               <sBTCuotaCancelada> 
                  <fechaPago>2020-03-05</fechaPago> 
                  <importePago>2326.69</importePago> 
                  <diasMora>0</diasMora> 
               </sBTCuotaCancelada> 
               <sBTCuotaCancelada> 
                  <fechaPago>2020-03-05</fechaPago> 
                  <importePago>2307.67</importePago> 
                  <diasMora>0</diasMora> 
               </sBTCuotaCancelada> 
               <sBTCuotaCancelada> 
                  <fechaPago>2020-03-05</fechaPago> 
                  <importePago>2280.59</importePago> 
                  <diasMora>0</diasMora> 
               </sBTCuotaCancelada> 
               <sBTCuotaCancelada> 
                  <fechaPago>2020-03-05</fechaPago> 
                  <importePago>2251.73</importePago> 
                  <diasMora>0</diasMora> 
               </sBTCuotaCancelada> 
            </cronograma> 
         </sdtPrestamo> 
         <Erroresnegocio></Erroresnegocio> 
         <Btoutreq> 
            <Canal>BTDIGITAL</Canal> 
            <Servicio>BTPrestamos.ObtenerDetallePrestamoCancelado</Servicio> 
            <Fecha>2019-08-13</Fecha> 
            <Hora>10:04:44</Hora> 
            <Requerimiento>1</Requerimiento> 
            <Numero>6656</Numero> 
            <Estado>OK</Estado> 
         </Btoutreq> 
      </BTPrestamos.ObtenerDetallePrestamoCanceladoResponse> 
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
	  "Usuario": "BANTOTAL", 
	  "Token": "1576177365F955E77534D3E0", 
	  "Device": "AC" 
	}, 
	"sdtPrestamo": { 
	  "operacionUId": "10118", 
	  "idOperacionFmt": "74-0", 
	  "idOperacionBT": "0010100000101000000000000000002800000000000074001", 
	  "producto": { 
		"productoUId": "36", 
		"nombre": "Amortización Automática TF", 
		"moneda": "$", 
		"papel": "$" 
	  }, 
	  "tipoProducto": "AM", 
	  "sucursal": "Casa Matriz", 
	  "simboloMoneda": "$", 
	  "tipoAmortizacion": "Francés con Seg.e Impu.", 
	  "capitalOriginal": "19999.00", 
	  "fechaValor": "2018-05-15", 
	  "fechaVencimiento": "2019-05-16", 
	  "periodicidad": "30", 
	  "plazo": "366", 
	  "cantidadCuotas": "12", 
	  "fechaCancelacion": "2020-03-05", 
	  "tipoTasa": "Lineal Anual", 
	  "tipoDia": "Meses Calendario", 
	  "tipoAno": "365 Días", 
	  "tasaOriginal": "23.000000", 
	  "plus": "0.000000", 
	  "cronograma": { 
		"sBTCuotaCancelada": [ 
		  { 
			"fechaPago": "2020-03-05", 
			"importePago": "2486.68", 
			"diasMora": "0" 
		  }, 
		  { 
			"fechaPago": "2020-03-05", 
			"importePago": "2499.33", 
			"diasMora": "0" 
		  }, 
		  { 
			"fechaPago": "2020-03-05", 
			"importePago": "2466.81", 
			"diasMora": "0" 
		  }, 
		  { 
			"fechaPago": "2020-03-05", 
			"importePago": "2442.12", 
			"diasMora": "0" 
		  }, 
		  { 
			"fechaPago": "2020-03-05", 
			"importePago": "2431.69", 
			"diasMora": "0" 
		  }, 
		  { 
			"fechaPago": "2020-03-05", 
			"importePago": "2403.76", 
			"diasMora": "0" 
		  }, 
		  { 
			"fechaPago": "2020-03-05", 
			"importePago": "2380.28", 
			"diasMora": "0" 
		  }, 
		  { 
			"fechaPago": "2020-03-05", 
			"importePago": "2358.28", 
			"diasMora": "0" 
		  }, 
		  { 
			"fechaPago": "2020-03-05", 
			"importePago": "2326.69", 
			"diasMora": "0" 
		  }, 
		  { 
			"fechaPago": "2020-03-05", 
			"importePago": "2307.67", 
			"diasMora": "0" 
		  }, 
		  { 
			"fechaPago": "2020-03-05", 
			"importePago": "2280.59", 
			"diasMora": "0" 
		  }, 
		  { 
			"fechaPago": "2020-03-05", 
			"importePago": "2251.73", 
			"diasMora": "0" 
		  } 
		] 
	  } 
	}, 
	"Btoutreq": { 
	  "Canal": "BTDIGITAL", 
	  "Servicio": "BTPrestamos.ObtenerDetallePrestamoCancelado", 
	  "Fecha": "2019-08-13", 
	  "Hora": "10:04:44", 
	  "Requerimiento": "1", 
	  "Numero": "6656", 
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
<td>operacionUId</td>
<td>Long</td>
<td>Identificador único de la operación.</td>
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
<td>sBTPrestamoCancelado</td>
<td>Datos del préstamo cancelado.</td>
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
<td>Identificador único de la operación simulada.</td>
</tr>
<tr>
<td>producto</td>
<td>sBTProducto</td>
<td>Datos del Producto.</td>
</tr>
<tr>
<td>sucursal</td>
<td>String</td>
<td>Sucursal del préstamo.</td>
</tr>
<tr>
<td>plus</td>
<td>Double</td>
<td>Tasa plus.</td>
</tr>
<tr>
<td>tasaOriginal</td>
<td>Double</td>
<td>Tasa original.</td>
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
<td>cantidadCuotas</td>
<td>Int</td>
<td>Cantidad de cuotas del préstamo.</td>
</tr>
<tr>
<td>capitalOriginal</td>
<td>Double</td>
<td>Capital original del préstamo.</td>
</tr>
<tr>
<td>tipoDia</td>
<td>String</td>
<td>Tipo de día del préstamo.</td>
</tr>
<tr>
<td>claseTasa</td>
<td>String</td>
<td>Clase de tasa.</td>
</tr>
<tr>
<td>tipoAmortizacion</td>
<td>String</td>
<td>Tipo de amortización.</td>
</tr>
<tr>
<td>simboloMoneda</td>
<td>String</td>
<td>Símbolo monetario.</td>
</tr>
<tr>
<td>plazo</td>
<td>Int</td>
<td>Plazo del préstamo.</td>
</tr>
<tr>
<td>tipoTasa</td>
<td>String</td>
<td>Tipo de tasa.</td>
</tr>
<tr>
<td>fechaValor</td>
<td>Date</td>
<td>Fecha de alta del préstamo.</td>
</tr>
<tr>
<td>tasaEfectiva</td>
<td>Double</td>
<td>Tasa efectiva anual.</td>
</tr>
<tr>
<td>periodicidad</td>
<td>Int</td>
<td>Período entre cuotas.</td>
</tr>
<tr>
<td>fechaVencimiento</td>
<td>Date</td>
<td>Fecha de vencimiento del préstamo.</td>
</tr>
<tr>
<td>tipoAno</td>
<td>String</td>
<td>Tipo de año.</td>
</tr>
<tr>
<td>tipoProducto</td>
<td>String</td>
<td>Tipo de producto (Amortizable/Plan de pagos).</td>
</tr>
<tr>
<td>fechaCancelacion</td>
<td>Date</td>
<td>Fecha de cancelación del préstamo.</td>
</tr>
<tr>
<td>cronograma</td>
<td>sBTCuotaCancelada</td>
<td>Cronograma de pagos del préstamo.</td>
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
<p>Los campos del tipo de dato estructurado sBTCuotaCancelada son los siguientes:</p>
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
<td>fechaPago</td>
<td>Date</td>
<td>Fecha de pago.</td>
</tr>
<tr>
<td>importePago</td>
<td>Double</td>
<td>Importe total pago de la cuota.</td>
</tr>
<tr>
<td>diasMora</td>
<td>Short</td>
<td>Días de mora con los que se pago la cuota.</td>
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
<td>No se recibió el identificador único de operación.</td>
</tr>
<tr>
<td>30002</td>
<td>No se recuperó la operación para el Identificador: [Número de Identificador].</td>
</tr>
<tr>
<td>30003</td>
<td>El préstamo no se encuentra cancelado.</td>
</tr>
</tbody>
</table>
</div></template>


