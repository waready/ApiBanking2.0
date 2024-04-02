<template><div><h1 id="obtener-detalle-de-movimiento" tabindex="-1"><a class="header-anchor" href="#obtener-detalle-de-movimiento"><span>Obtener Detalle de Movimiento</span></a></h1>
<p>Método para obtener el detalle de un movimiento contable.</p>
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
<td>BTContabilidad.ObtenerDetalleMovimiento</td>
<td>RBTPG228</td>
<td>Global</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Ejemplo de invocación al método Obtener Detalle de Movimiento:</p>
</blockquote>
<code-group> 
<code-block title="XML" active> 
```xml 
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:bts="http://uy.com.dlya.bantotal/BTSOA/"> 
   <soapenv:Header/> 
   <soapenv:Body> 
      <bts:BTContabilidad.ObtenerDetalleMovimiento> 
         <bts:Btinreq> 
            <bts:Canal>BTDIGITAL</bts:Canal> 
            <bts:Requerimiento>1</bts:Requerimiento> 
            <bts:Usuario>IN</bts:Usuario> 
            <bts:Token>12420485CD285A89A23FBE</bts:Token> 
            <bts:Device>MC</bts:Device> 
         </bts:Btinreq> 
         <bts:movimientoUId>8</bts:movimientoUId> 
      </bts:BTContabilidad.ObtenerDetalleMovimiento> 
   </soapenv:Body> 
</soapenv:Envelope> 
``` 
</code-block> 
<code-block title="JSON"> 
```json 
curl -X POST \ 
  'http://btd-bantotal.eastus2.cloudapp.azure.com:4462/btdeveloper/servlet/com.dlya.bantotal.odwsbt_BTContabilidad_v1?ObtenerDetalleMovimiento' \ 
  -H 'cache-control: no-cache' \ 
  -H 'content-type: application/json' \ 
  -H 'postman-token: 6b958b92-122d-189b-a0b5-7a4a0569b79d' \ 
  -d '{ 
	 "Btinreq": { 
		"Canal": "BTDIGITAL", 
		"Requerimiento": "1", 
		"Usuario": "IN", 
		"Token": "12420485CD285A89A23FBE", 
		"Device": "MC" 
	 }, 
	 "movimientoUId": "8" 
  } 
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;/code-block> 
&lt;/code-group> 

> El POST retornará la siguiente estructura: 

&lt;code-group> 
&lt;code-block title="XML" active> 
```xml 
&lt;SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> 
   &lt;SOAP-ENV:Body> 
      &lt;BTContabilidad.ObtenerDetalleMovimientoResponse xmlns="http://uy.com.dlya.bantotal/BTSOA/"> 
         &lt;Btinreq> 
            &lt;Canal>BTDIGITAL&lt;/Canal> 
            &lt;Requerimiento>1&lt;/Requerimiento> 
            &lt;Usuario>IN&lt;/Usuario> 
            &lt;Token>12420485CD285A89A23FBE&lt;/Token> 
            &lt;Device>MC&lt;/Device> 
         &lt;/Btinreq> 
         &lt;sdtDetalleAsiento> 
            &lt;sucursalId>1&lt;/sucursalId> 
            &lt;descripcion>CAJA, Traspaso entre Cuentas&lt;/descripcion> 
            &lt;usuarioIngreso>BANTOTAL&lt;/usuarioIngreso> 
            &lt;usuarioConfirmacion>BANTOTAL&lt;/usuarioConfirmacion> 
            &lt;fechaContabilizacion>2018-10-15&lt;/fechaContabilizacion>  
            &lt;hora>13:08:23&lt;/hora> 
            &lt;fechaValor>2018-10-15&lt;/fechaValor> 
			&lt;anulado>N&lt;/anulado> 
			&lt;movimientoUIdOriginal>8&lt;/movimientoUIdOriginal> 
			&lt;movimientoUIdAnulacion>0&lt;/movimientoUIdAnulacion> 
            &lt;ordinales> 
               &lt;sBTOrdinal> 
                  &lt;operacionUId>10189&lt;/operacionUId> 
                  &lt;idOperacionBT>0010000100021000000000000000002700003000000000000&lt;/idOperacionBT> 
                  &lt;debitoCredito>D&lt;/debitoCredito>  
                  &lt;importe>10000.00&lt;/importe> 
                  &lt;producto> 
                     &lt;productoUId>0&lt;/productoUId> 
                     &lt;nombre>CAJAS DE AHORRO, GENÉRICA&lt;/nombre> 
                     &lt;moneda>$&lt;/moneda> 
                     &lt;papel>$&lt;/papel> 
                  &lt;/producto> 
               &lt;/sBTOrdinal> 
               &lt;sBTOrdinal> 
                  &lt;operacionUId>10191&lt;/operacionUId> 
                  &lt;idOperacionBT>0010000100020222200000000000002700002000000000000&lt;/idOperacionBT> 
                  &lt;debitoCredito>C&lt;/debitoCredito> 
                  &lt;importe>25.00&lt;/importe> 
                  &lt;producto> 
                     &lt;productoUId>0&lt;/productoUId> 
                     &lt;nombre>CUENTA CORRIENTE, GENÉRICA&lt;/nombre> 
                     &lt;moneda>USD&lt;/moneda> 
                     &lt;papel>$&lt;/papel> 
                  &lt;/producto> 
               &lt;/sBTOrdinal> 
               &lt;sBTOrdinal> 
                  &lt;operacionUId>10192&lt;/operacionUId> 
                  &lt;idOperacionBT>0010000100496222200000000000000000000000000000000&lt;/idOperacionBT> 
                  &lt;debitoCredito>D&lt;/debitoCredito> 
                  &lt;importe>25.00&lt;/importe> 
                  &lt;producto> 
                     &lt;productoUId>0&lt;/productoUId> 
                     &lt;nombre>POSICION MONEDA EXTRANJERA, POSICION MONEDA EXTRANJERA&lt;/nombre> 
                     &lt;moneda>USD&lt;/moneda> 
                     &lt;papel>$&lt;/papel> 
                  &lt;/producto> 
               &lt;/sBTOrdinal> 
               &lt;sBTOrdinal> 
                  &lt;operacionUId>10193&lt;/operacionUId> 
                  &lt;idOperacionBT>0010000100497000000000000000000000000000000000000&lt;/idOperacionBT> 
                  &lt;debitoCredito>C&lt;/debitoCredito> 
                  &lt;importe>10000.00&lt;/importe> 
                  &lt;producto> 
                     &lt;productoUId>0&lt;/productoUId> 
                     &lt;nombre>VALUACION MONEDA EXTRANJERA, VALUACION MONEDA EXTRANJERA&lt;/nombre> 
                     &lt;moneda>$&lt;/moneda> 
                     &lt;papel>$&lt;/papel> 
                  &lt;/producto> 
               &lt;/sBTOrdinal> 
            &lt;/ordinales> 
         &lt;/sdtDetalleAsiento> 
         &lt;Erroresnegocio>&lt;/Erroresnegocio> 
         &lt;Btoutreq> 
            &lt;Canal>BTDIGITAL&lt;/Canal> 
            &lt;Servicio>BTContabilidad.ObtenerDetalleMovimiento&lt;/Servicio> 
            &lt;Fecha>2020-10-29&lt;/Fecha> 
            &lt;Hora>16:13:11&lt;/Hora> 
            &lt;Requerimiento>1&lt;/Requerimiento> 
            &lt;Numero>7704&lt;/Numero> 
            &lt;Estado>OK&lt;/Estado> 
         &lt;/Btoutreq> 
      &lt;/BTContabilidad.ObtenerDetalleMovimientoResponse> 
   &lt;/SOAP-ENV:Body> 
&lt;/SOAP-ENV:Envelope> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></code-block> 
<code-block title="JSON"> 
```json 
{ 
    "Btinreq": { 
      "Canal": "BTDIGITAL", 
      "Requerimiento": "1", 
      "Usuario": "IN", 
      "Token": "12420485CD285A89A23FBE", 
      "Device": "MC" 
    }, 
    "sdtDetalleAsiento": { 
      "sucursalId": "1", 
      "descripcion": "CAJA, Traspaso entre Cuentas", 
      "usuarioIngreso": "BANTOTAL", 
      "usuarioConfirmacion": "BANTOTAL", 
      "fechaContabilizacion": "2018-10-15", 
      "hora": "13:08:23", 
      "fechaValor": "2018-10-15", 
	  "anulado": "N", 
      "movimientoUIdOriginal": "8", 
      "movimientoUIdAnulacion": "0", 
      "ordinales": { 
        "sBTOrdinal": [ 
          { 
            "operacionUId": "10189", 
            "idOperacionBT": "0010000100021000000000000000002700003000000000000", 
            "debitoCredito": "D", 
            "importe": "10000.00", 
            "producto": { 
              "productoUId": "0", 
              "nombre": "CAJAS DE AHORRO, GENÉRICA", 
              "moneda": "$", 
              "papel": "$" 
            } 
          }, 
          { 
            "operacionUId": "10191", 
            "idOperacionBT": "0010000100020222200000000000002700002000000000000", 
            "debitoCredito": "C", 
            "importe": "25.00", 
            "producto": { 
              "productoUId": "0", 
              "nombre": "CUENTA CORRIENTE, GENÉRICA", 
              "moneda": "USD", 
              "papel": "$" 
            } 
          }, 
          { 
            "operacionUId": "10192", 
            "idOperacionBT": "0010000100496222200000000000000000000000000000000", 
            "debitoCredito": "D", 
            "importe": "25.00", 
            "producto": { 
              "productoUId": "0", 
              "nombre": "POSICION MONEDA EXTRANJERA, POSICION MONEDA EXTRANJERA", 
              "moneda": "USD", 
              "papel": "$" 
            } 
          }, 
          { 
            "operacionUId": "10193", 
            "idOperacionBT": "0010000100497000000000000000000000000000000000000", 
            "debitoCredito": "C", 
            "importe": "10000.00", 
            "producto": { 
              "productoUId": "0", 
              "nombre": "VALUACION MONEDA EXTRANJERA, VALUACION MONEDA EXTRANJERA", 
              "moneda": "$", 
              "papel": "$" 
            } 
          } 
        ] 
      } 
    }, 
    "Btoutreq": { 
      "Canal": "BTDIGITAL", 
      "Servicio": "BTContabilidad.ObtenerDetalleMovimiento", 
      "Fecha": "2020-10-29", 
      "Hora": "16:13:11", 
      "Requerimiento": "1", 
      "Numero": "7704", 
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
<td>movimientoUId</td>
<td>Long</td>
<td>Identificador único de movimiento.</td>
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
<td>sdtDetalleAsiento</td>
<td>sBTDetalleAsiento</td>
<td>Datos del movimiento.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTDetalleAsiento son los siguientes:</p>
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
<td>sucursalId</td>
<td>Int</td>
<td>Identificador de sucursal.</td>
</tr>
<tr>
<td>descripcion</td>
<td>String</td>
<td>Descripción del movimiento.</td>
</tr>
<tr>
<td>usuarioIngreso</td>
<td>String</td>
<td>Usuario de ingreso del movimiento.</td>
</tr>
<tr>
<td>usuarioConfirmacion</td>
<td>String</td>
<td>Usuario de confirmación del movimiento.</td>
</tr>
<tr>
<td>fechaContabilizacion</td>
<td>Date</td>
<td>Fecha de contabilización.</td>
</tr>
<tr>
<td>hora</td>
<td>String</td>
<td>Hora de contabilización.</td>
</tr>
<tr>
<td>fechaValor</td>
<td>Date</td>
<td>Fecha valor.</td>
</tr>
<tr>
<td>anulado</td>
<td>String</td>
<td>¿Anulado? (S/N)</td>
</tr>
<tr>
<td>movimientoUIdOriginal</td>
<td>Long</td>
<td>Identificador único de movimiento original.</td>
</tr>
<tr>
<td>movimientoUIdAnulacion</td>
<td>Long</td>
<td>Identificador único de movimiento de anulacion.</td>
</tr>
<tr>
<td>ordinales</td>
<td>sBTOrdinal</td>
<td>Listado de ordinales del movimiento.</td>
</tr>
</tbody>
</table>
<p>Los campos del tipo de dato estructurado sBTOrdinal son los siguientes:</p>
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
<td>idOperacionBT</td>
<td>String</td>
<td>Identificador String Bantotal (concatenación de todos los conceptos claves de la operación).</td>
</tr>
<tr>
<td>producto</td>
<td>sBTProducto</td>
<td>Datos del Producto.</td>
</tr>
<tr>
<td>debitoCredito</td>
<td>String</td>
<td>¿Es débito o crédito? (Crédito: 'C', Débito: 'D').</td>
</tr>
<tr>
<td>importe</td>
<td>Double</td>
<td>Importe.</td>
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
<td>No se recibió identificador de movimiento.</td>
</tr>
<tr>
<td>30103</td>
<td>No existe registro para el identificador único.</td>
</tr>
<tr>
<td>40001</td>
<td>No existe el asiento.</td>
</tr>
</tbody>
</table>
</div></template>


